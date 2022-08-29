import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { store, persistor } from './src/react-view/store/store.js';


import logo from '../assets/logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/app.css';

import {isChrome, fullBrowserVersion, deviceDetect} from 'mobile-device-detect';

import SplashScreen from './src/react-view/screens/splash/splash.js';
import Root from './src/react-view/screens/root/root.js';


class AppStore {
} 

class App extends React.Component {
	
	constructor(props) {
		super(props);
		
		console.log('App constructor called');
		
		this.exec_env = App.EXEC_ENV;
		this.current_version = '0.15.32.2022.08.24';

		App.theapp = this;

		this.basename = (App.BASE_NAME ? App.BASE_NAME : "my-app");
		this.updatetime = 'April 30, 2021';

		this.App = App;
		this.mvcmodule = null;
		this.mvcmyquote = null;
		this.mvcmypwa = null;
		
		this.nav_states = [{}];
		this.initial_url = null;

		this.settings = Object.create(null);


		this.varmap = Object.create(null);

		this.boot_webapp = {};
		
		this.window_listeners = {};
		
		this.state = {
			name: 'PoA wallets',
			loading: true,
			bodyText: 'loading'
		};
	}
	
	async onLoaded() {
		var _globalscope = window;

		console.log('App.onLoaded called');
    
		// mvc module

		// @primusmoney/react_client_wallet
		var React_Client_Wallet = require('@primusmoney/react_client_wallet');

		var react_client_wallet = React_Client_Wallet.getObject();

		var react_client_wallet_init = await react_client_wallet.init();

		// mvc module (used by some ModuleObject for communicating with app)
		var mvcmodule = react_client_wallet.getMvcAPI();
		var clientglobal = react_client_wallet.getGlobalObject();

		// set app object
		mvcmodule.setAppObject(this);

		this.mvcmodule = mvcmodule;

		if (!AppStore.mvcmodule){
			// because App can be constructed multiple times
			AppStore.mvcmodule = this.mvcmodule;
		}

		// set client module
		var Client = require('../../js/src/web-client.js').default;
		var clientmodule = Client.getObject();

		if (this.exec_env === 'prod') {
			clientglobal.muteConsoleLog();
		}
		else if (this.exec_env === 'dev') {
			clientmodule.execution_env = 'dev';
		}

		// load additional modules (currencies api)
		require('../../includes/mvc-api/module-load.js');

		// boot webapp (before initializing clientmodule)
		
		// GET subdomain (if any)
		var subdomain = await this.getSubDomain();

		var boot_webapp;
		
		if (subdomain) {
			// check is a sub-folder defines a specific boot (and confi) environment
			boot_webapp = await clientmodule.loadConfig('./' + subdomain + '/boot-webapp');

			if (boot_webapp) {
				// set namespace in clientmodule
				clientmodule.setNameSpace(subdomain);
			}
		}


		// init client module after currencies module is loaded
		await clientmodule.init();
		this.mvcmodule.setClientModuleObject(clientmodule);


		// create mvc myquote
		require('./src/model/myquote/module-load.js');
		this.mvcmyquote = clientglobal.getModuleObject('mvc-myquote');
		this.mvcmypwa = clientglobal.getModuleObject('mvc-myquote');

		if (!AppStore.mvcmyquote){
			// because App can be constructed multiple times
			AppStore.mvcmyquote = this.mvcmyquote;
		}

		// set cleanurl as root uri for contracts in mvcmyquote
		var cleanurl = await this.getCleanUrl()
		await this.mvcmyquote.setContractPathRootUri(cleanurl);

		// treating webapp boot context
		if (!boot_webapp) {
			// get root boot-webapp (if any)
			boot_webapp = await this.mvcmyquote.loadConfig('boot-webapp');
		}

		this.boot_webapp = (boot_webapp ? boot_webapp : {});

		// load Root routes depending on what sub-apps are enabled
		await Root.loadRoutes(this);


		if (this.exec_env == 'dev') {
			console.log('App.onLoaded execution environment is DEV');
			
			// put app in simplestore for debugging purposes
			_globalscope.simplestore.app = this;
		}
		else {
			// look if boot-webapp.json forces to turn environment to dev
			if (this.boot_webapp.env === 'dev') {
				this.exec_env = 'dev'
				_globalscope.simplestore.app = this;

				clientglobal.setExecutionEnvironment('dev');
				console.log('Execution environment turned to dev in App.onLoaded');
			};
		}

		// webapp name
		if (this.boot_webapp.name)
			this.basename = this.boot_webapp.name;

		// first startup
		var default_first_boot = {initprod: false};
		var this_boot = {initprod: true, version: this.current_version, time: Date.now()};
				
		this.settings['firstboot'] = await this.mvcmyquote.readSettings(['firstboot'], default_first_boot);
		
		if (this.settings['firstboot'].initprod !== true) {
			// never done
			try {
				await this.mvcmyquote.initProdEnvironment()
				.catch(err => {
					console.log('error while setting up prod environment: ' + err);
				});

				await this.mvcmyquote.putSettings(['firstboot'], this_boot)
				.catch(err => {
					console.log('error while saving firstboot setting: ' + err);
				});
			}
			catch(e) {
				console.log('exception while setting up prod environment: ' + e);
			}
		}
		else {
			// check if not too old
			const newprodenvtime = new Date(this.updatetime).getTime();

			if (this.settings['firstboot'].time < newprodenvtime) {
				// run initProdEnvironment again
				try {
					await this.mvcmyquote.initProdEnvironment()
					.catch(err => {
						console.log('error while setting up prod environment: ' + err);
					});

					this_boot.last_update = newprodenvtime;
					this_boot.initial_time = (this.settings['firstboot'].initial_time ? this.settings['firstboot'].initial_time : this.settings['firstboot'].time);
	
					await this.mvcmyquote.putSettings(['firstboot'], this_boot)
					.catch(err => {
						console.log('error while saving firstboot setting: ' + err);
					});
				}
				catch(e) {
					console.log('exception while setting up prod environment: ' + e);
				}
			}
			else {
				// look if boot-webapp.json requires a specific initProdEnvironment

				if (boot_webapp) {
					let webapp_name = (boot_webapp.name ? boot_webapp.name : 'noname');
					let webapp_firstboot = ( this.settings['firstboot'][webapp_name] ? this.settings['firstboot'][webapp_name] : {initprod: false});

					this_boot[webapp_name] = {initprod: true, version: this.current_version, time: Date.now()};

					if (webapp_firstboot.initprod !== true) {
						// never done for this webapp
						try {
							await this.mvcmyquote.initProdEnvironment()
							.catch(err => {
								console.log('error while setting up prod environment: ' + err);
							});

							await this.mvcmyquote.putSettings(['firstboot'], this_boot)
							.catch(err => {
								console.log('error while saving firstboot setting: ' + err);
							});
						}
						catch(e) {
							console.log('exception while setting up prod environment: ' + e);
						}					
					}
					else {
						// check if not too old
						const newwebappprodenvtime = new Date(boot_webapp.updatetime).getTime();

						if (webapp_firstboot.time < newwebappprodenvtime) {
							// run initProdEnvironment again
							try {
								await this.mvcmyquote.initProdEnvironment()
								.catch(err => {
									console.log('error while setting up prod environment: ' + err);
								});

								this_boot[webapp_name].last_update = newwebappprodenvtime;
								this_boot[webapp_name].initial_time = (webapp_firstboot.initial_time ? webapp_firstboot.initial_time : this_boot[webapp_name].time);
				
								await this.mvcmyquote.putSettings(['firstboot'], this_boot)
								.catch(err => {
									console.log('error while saving firstboot setting: ' + err);
								});
							}
							catch(e) {
								console.log('exception while setting up prod environment: ' + e);
							}
						}
			

					}

				}

			}

		}
		
		
		// read query string parameters for start conditions
		var start = {};

		const url = window.location.href;

		const urlParams = new URLSearchParams(window.location.search);
		const sessionuuid = urlParams.get('sessionuuid');
		const wallet = urlParams.get('wallet');

		start.url = url;
		start.urlParams = urlParams;
		start.sessionuuid = sessionuuid;
		start.wallet = wallet;

		this.setVariable('start_conditions', start);

		await this.checkBrowser();

		console.log('App.onLoaded setting loading to false');
		this.setState({loading: false});
	}

	async checkBrowser() {
		let ischrome = isChrome;

		if (!ischrome) {
			//this.alert(this.mvcmyquote.t('This application is only supported on Chrome for the moment. It may not operate properly in the browser you are currently using.'));
		}
	}

	async getFullBrowserVersion() {
		return fullBrowserVersion;
	}

	async getDeviceInfo() {
		return (typeof deviceDetect !== 'undefined' ? JSON.stringify(deviceDetect()) : 'unknown');
	}

	async _setState(json) {
		return new Promise((resolve, reject) => {
			this.setState(json, (err, res) => {
				if (err) reject(err); else resolve(res);
			});
		})
	}

	async refreshPage() {
		console.log('App.refreshPage called');
		
		let lastrefresh = Date.now();
		
		await this._setState({lastrefresh: lastrefresh});
		
		let mvcmyquote = this.mvcmyquote;
		
		if (mvcmyquote)
		mvcmyquote.signalEvent('on_refreshPage');

		return true;
	}

	// config
	getConfig(key) {
		if (key)
			return this.boot_webapp[key];
		else
			return this.boot_webapp;
	}
	

  	// variables
	getVariable(key) {
		return this.varmap[key];
	}
	
	setVariable(key, value) {
		console.log('App.setVariable ' + key + ' to ' + (value ? value : ' null'));
		this.varmap[key] = value;
	}
	
	// accessible to childrens to use core api
	getMvcModuleObject() {
		if (this.mvcmodule)
			return this.mvcmodule;
		else{
			if (AppStore.mvcmodule)
				this.mvcmodule = AppStore.mvcmodule;;

			return AppStore.mvcmodule;
		} 
	}

	getMvcMyQuoteObject() {
		if (this.mvcmyquote)
			return this.mvcmyquote;
		else{
			if (AppStore.mvcmyquote)
				this.mvcmyquote = AppStore.mvcmyquote;;

			return AppStore.mvcmyquote;
		} 
	}

	getMvcMyPWAObject() {
		if (this.mvcmypwa)
			return this.mvcmypwa;
		else{
			if (AppStore.mvcmyquote)
				this.mvcmypwa = AppStore.mvcmyquote;

			return AppStore.mvcmyquote;
		} 
	}


	async checkOnline() {
		var _root = this.getVariable('Root');
		
		if (_root) {
			return _root._checkOnline();
		}
		else {
			return Promise.reject('could not find root component');
		}
	}

	async checkWalletUnlocked() {
		var _root = this.getVariable('Root');
		
		if (_root) {
			return _root._checkWalletUnlocked();
		}
		else {
			return Promise.reject('could not find root component');
		}
	}

	async resetWallet() {
		var _root = this.getVariable('Root');
		
		if (_root) {
			return _root._resetWallet();
		}
		else {
			return Promise.reject('could not find root component');
		}
	}

	async getDeviceWallet() {
		var _root = this.getVariable('Root');
		
		if (_root) {
			return _root._getDeviceWallet();
		}
		else {
			return Promise.reject('could not find root component');
		}
	}

	async isDeviceWallet(walletuuid) {
		var _root = this.getVariable('Root');
		
		if (_root) {
			return _root._isDeviceWallet(walletuuid)
		}
		else {
			return Promise.reject('could not find root component');
		}
	}

	async openDeviceWallet() {
		var _root = this.getVariable('Root');
		
		if (_root) {
			return _root._openDeviceWallet();
		}
		else {
			return Promise.reject('could not find root component');
		}
	}

	closeDeviceWallet() {
		// needs to be synchronous to be called in componentWillUnmount
		var _root = this.getVariable('Root');
		
		if (_root) {
			return _root._closeDeviceWallet();
		}
		else {
			console.log('could not find root component');
		}
	}



	// render
	render() {

		if (this.state.loading) {
			return (
				<div className="App">
					<SplashScreen 
						app = {this}
					/>
				</div>
			);
		}

		return (
			<div className="App">
				<Provider store={store}>
				<PersistGate persistor={persistor}>
					<Root
						app = {this}
					/>
				</PersistGate>
				</Provider>
			</div>
		);
	}
	
	// alert
	async alert(message) {
		alert(message);
	}
	
	async error(message) {
		if (this.exec_env === 'dev')
		return this.alert(message);
	}
	
	// navigation
	async gotoRoute(route, params = []) {
		
		var steps = route.split("/");
		
		var current_nav_state = {};
		//this.nav_states.push(current_nav_state);
		
		current_nav_state.target = {route: route, steps: steps, params: params, reached: false};

		this.pushNavigationState(current_nav_state);
		
		var _root = this.getVariable('Root');
		
		if (_root) {
			await _root._gotoRoute(route, params);
		}
		else {
			console.log('root component was not ready to process route: ' + route);
			// we will let root (or other components) check navigation state to post-process this route
		}
		
		await this.refreshPage();
	}

	async gotoUrl(url) {
		console.log('App.gotoUrl called for ' + (url ? url : 'initial url'));
		
		var _root = this.getVariable('Root');

		if (_root) {

			if (url) {
				const URL = require("url");

				let {query} = URL.parse(url, true);

				let _encodedurl;
				
				if (query.b64url) {
					try {
						_encodedurl = query.b64url;
						let _url = this.decodebase64(_encodedurl);
						
						return this.gotoUrl(_url);
					}
					catch(e) {
						throw new Error('exception in App.gotoUrl: ' + e);
					}
				}
				else if (query.hexurl) {
					try {
						_encodedurl = query.hexurl;
						let _url = this.decodehex(_encodedurl);
						
						return this.gotoUrl(_url);
					}
					catch(e) {
						throw new Error('exception in App.gotoUrl: ' + e);
					}
				}
				else {
					return _root._gotoUrl(url);
				}
			}
			else {
				// initial url
				return _root._gotoUrl(url);
			}
	
		}
		else {
			console.log('root component was not ready to process url: ' + url);
		}
	}

	async hasReturnPath() {
		let start_parameters = await this.getStartParameters();

		if (start_parameters.returnurl) {
			let _return_url = this.decodebase64(start_parameters.returnurl);

			if (_return_url && (_return_url.startsWith('http://') || _return_url.startsWith('https://')))
			return true;
		}

		return false;
	}

	async returnToCaller() {
		let start_parameters = await this.getStartParameters();

		if (start_parameters.returnurl) {
			let _return_url = this.decodebase64(start_parameters.returnurl);

			if (_return_url && (_return_url.startsWith('http://') || _return_url.startsWith('https://')))
			return this.gotoUrl(_return_url);
		}
	}

	async openCurrencyCard(currencyuuid) {
		var _root = this.getVariable('Root');
		
		if (_root) {
			return _root._openCurrencyCard(currencyuuid);
		}
		else {
			console.log('root component was not ready to open card for currency: ' + currencyuuid);
		}
	}

	async createCurrencyCard(currencyuuid, signingkey, options = {}) {
		var _root = this.getVariable('Root');
		
		if (_root) {
			return _root._createCurrencyCard(currencyuuid, signingkey, options);
		}
		else {
			console.log('root component was not ready to make card for currency: ' + currencyuuid);
		}
	}

	async getCurrencyFeeLevel(currencyuuid) {
		var _root = this.getVariable('Root');
		
		if (_root) {
			return _root._getCurrencyFeeLevel(currencyuuid);
		}
		else {
			console.log('root component was not ready to get fee level for currency: ' + currencyuuid);
		}
	}

	async createLocalCard(web3providerurl, signingkey) {
		var _root = this.getVariable('Root');
		
		if (_root) {
			return _root._createLocalCard(web3providerurl, signingkey);
		}
		else {
			console.log('root component was not ready to make card for web3 provider: ' + web3providerurl);
		}
	}

	async openLocalCard(schemeuuid, address) {
		var _root = this.getVariable('Root');
		
		if (_root) {
			return _root._openLocalCard(schemeuuid, address);
		}
		else {
			console.log('root component was not ready to open local card: ' + address);
		}
	}


	async gotoMyQuotePage(params) {
		var _root = this.getVariable('Root');
		
		if (_root) {
			return _root._gotoMyQuotePage(params);
		}
		else {
			console.log('root component was not ready to process action: ' + (params && params.dataobject ? params.dataobject.type : null));
		}
	}
	
	async getMyQuoteDataObject(txhash, currencyuuid) {
		var _root = this.getVariable('Root');
		
		if (_root) {
			return _root._getMyQuoteDataObject(txhash, currencyuuid);
		}
		else {
			console.log('root component was not ready to process txhash: ' + txhash);
		}
	}

	async getStartParameters() {
		var _root = this.getVariable('Root');
		
		if (_root) {
			return _root._getStartParameters();
		}
		else {
			console.log('root component was not ready to process start data object');
		}
	}


	async getStartDataObject() {
		var _root = this.getVariable('Root');
		
		if (_root) {
			return _root._getStartDataObject();
		}
		else {
			console.log('root component was not ready to process start data object');
		}
	}

	async onEmptyStartDataObject(txhash, currencyuuid) {
		var _root = this.getVariable('Root');
		
		if (_root) {
			return _root._onEmptyStartDataObject(txhash, currencyuuid);
		}
		else {
			console.log('root component was not ready to handle empty data object');
		}
	}

	async getCleanUrl() {
		var cleanurl = window.location.href;

		if (cleanurl.indexOf('#') != -1) {
			// strip anchors
			cleanurl = cleanurl.slice(0, cleanurl.indexOf('#'));
		}

		if (cleanurl.indexOf('?') != -1) {
			// strip parameters
			cleanurl = cleanurl.slice(0, cleanurl.indexOf('?'));
		}

		return cleanurl;
	}

	async getSubDomain() {
		var fullurl = window.location.href;

		var hostname = window.location.hostname;

		if (hostname == 'localhost')
			return;

		var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
 		if(hostname.match(ipformat))
			return;

		var subdomain = hostname.split('.')[0]; // only first if multiple (e.g. https://webapp.www.example.com)

		return subdomain;
	}

	async getShareLink(txhash, currencyuuid) {
		var sharelink = await this.getCleanUrl();

		sharelink += '?tx=' + txhash;
		sharelink += '&ccy=' + currencyuuid;

		return sharelink;
	}

	async sendShareLink(sharelinkmessage) {
		let to = sharelinkmessage.to[0];
		let subject = sharelinkmessage.subject;
		let message = sharelinkmessage.message;

		let cleanurl = await this.getCleanUrl();
		
		const QS = require('query-string');

		let applink = cleanurl + sharelinkmessage.route + '?' + (sharelinkmessage.params ? QS.stringify(sharelinkmessage.params) : '');
		
		let body = '';
		
		body += (message ? message + '\r\n\r\n' : '');
		body += 'Please use the url below by entering it in the address bar of your browser or entering it directly in the web app (right hamburger menu/Enter url)\r\n-------------\r\n\r\n';
		
		if (sharelinkmessage.linkformat === 'hex') {
			let apphexlink = 'primusmoney://hexurl/';
			
			apphexlink += Buffer.from(applink).toString('hex');
	
			body += apphexlink;
		}
		else {
			body += applink;
		}
		
		// encode to transform \n into %0A and \r into %0D
		//let encodedbody = encodeURIComponent(body);

		return this.sendEmail(to, subject, body);
	}
	
	async sendEmail(to, subject, body, options = {}) {
		let url = 'mailto:' + (to ? to : '');
		url += '?subject=' + subject;
		url += '&body=' + encodeURIComponent(body);
		
		if (options.cc)
			url += '&cc=' + options.cc;

		if (options.bcc)
			url += '&bcc=' + options.bcc;
		
		window.location.href = url;

		return true;
	}

	async getBaseTokenURI(currencyuuid, cardaddress) {
		var basetokenuri = await this.getCleanUrl();

		basetokenuri += '?ccy=' + currencyuuid;
		basetokenuri += '&card=' + cardaddress;
		basetokenuri += '&tokenid=';

		return basetokenuri;
	}


	async resetHref() {
		let cleanurl = await this.getCleanUrl();

		// jump
		window.location.href = cleanurl;
	}

	async gotoHome() {
		console.log('App.gotoHome called');
		
		return this.gotoRoute('home');
	}
	
	async gotoLoginPage() {
		console.log('App.gotoLoginPage called');
		
		return this.gotoRoute('login');
	}

	async logout() {
		var _root = this.getVariable('Root');
		
		if (_root) {
			await _root._logout();
		}
		else {
			console.log('root component was not ready to process logout');
		}

		return this.resetHref();
	}
	
	async wipedata() {
		await localStorage.clear();

		return this.logout();
	}
	
	_getCurrentNavigationState() {
		if (this.nav_states.length)
		return this.nav_states[this.nav_states.length-1];
	}

	_getPreviousNavigationState() {
		if (this.nav_states.length > 2)
		return this.nav_states[this.nav_states.length-2];
	}

	pushNavigationState(navstate) {
		this.nav_states.push(navstate);
	}
	
	getNavigationState(key, defaultval) {
		var current_nav_state = this._getCurrentNavigationState();
		
		if (key)
			return (typeof current_nav_state[key] != 'undefined' ? current_nav_state[key] : defaultval);
		else
			return current_nav_state;
	}
	
	setNavigationState(key, value) {
		var current_nav_state = this._getCurrentNavigationState();
		
		current_nav_state[key] = value;
	}
	
	
	async goBack() {
		var current_nav_state = this._getCurrentNavigationState();

		if (current_nav_state.back) {
			// TODO: go to the corresponding navigation state
			console.log('WARNING: App.goBack is not implemented yet, going to Home');
			this.gotoHome();
		}
		else {
			this.gotoHome();
		}
	}

	// window listeners
	addWindowEventListener(event_name, func, uuid) {
		this.window_listeners[event_name + (uuid ? '-' + uuid : '')] = func;

		window.addEventListener(event_name, func, false);
	}

	removeWindowEventListener(event_name, uuid) {
		let func = this.window_listeners[event_name +  (uuid ? '-' + uuid : '')];

		if (func) {
			window.removeEventListener(event_name, func);
			delete this.window_listeners[event_name +  (uuid ? '-' + uuid : '')];
		}
	}

	dispatchWindowEvent(eventname, data) {
		const event = new CustomEvent(eventname, {detail: data});

		window.dispatchEvent(event);
	}
	
	
	
	// utils
	t(str) {
		return this.mvcmodule.t(str);
	}

	guid() {
		if (this.mvcmodule)
			return this.mvcmodule.guid();
		
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000)
				.toString(16)
				.substring(1);
		}
		
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
			s4() + '-' + s4() + s4() + s4();
	}

	async sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
	
	_getBufferClass() {
		var _Buffer;
		try {
			if (typeof window !== 'undefined' && typeof window.Buffer !== 'undefined') {
				_Buffer = window.Buffer;
			} else {
				_Buffer = require('buffer').Buffer;
			}
		} catch (e) {
		}
		
		return _Buffer;
	}

	encodebase64(str) {
		var _Buffer = this._getBufferClass();
		return _Buffer.from(str).toString('base64');
	}

	decodebase64(b64) {
		var _Buffer = this._getBufferClass();
		return _Buffer.from(b64, 'base64').toString('utf8');;
	}

	encodehex(str) {
		var _Buffer = this._getBufferClass();
		return _Buffer.from(str).toString('base64');
	}

	decodehex(hex) {
		var _Buffer = this._getBufferClass();
		return _Buffer.from(hex, 'hex').toString('utf8');;
	}

	getAppClass() {
		return App;
	}

	// static methods

	static getAppObject() {
		return App.theapp;
	}

	static getAppStore() {
		return AppStore;		
	}

} 

export default App;
