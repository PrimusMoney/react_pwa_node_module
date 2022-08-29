import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Router } from "react-router";
import { Route, Switch, Redirect  } from "react-router-dom";

//import { BrowserRouter as MyRouter } from 'react-router-dom'
import { HashRouter as MyRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

import { doFetchBlankSession, doCheckSession, doResetSession } from '@primusmoney/react_client_wallet/imports/view/actions/login/session-actions.js';
import { doCheckLoggedIn } from '@primusmoney/react_client_wallet/imports/view/actions/login/login-actions.js';

import { doCheckWalletLock, doOpenWallet, doResetWallet } from '@primusmoney/react_client_wallet/imports/view/actions/wallet/wallet-actions.js';

import { doOpenCard } from '@primusmoney/react_client_wallet/imports/view/actions/card/card-actions.js';


import AboutScreen from '../about/about.js';
import HomeScreen from '../home/home.js';

import DeepLinkScreen from '../deeplinks/deeplink-screen.js';

import ContactListScreen from '../contact/contact-list-screen.js';
import ContactHomeScreen from '../contact/contact-home.js';

import CurrencyCardHomeScreen from '../common/currency/currency-card-home.js';
import CurrencyCardListScreen from '../common/currency/currency-card-list-screen.js';

import SplashScreen from '../splash/splash.js';

import DataWipeScreen from '../login/data-wipe.js';


import LogoutScreen from '../login/logout.js';




class RouteHistory {

	constructor(root) {
		this.root = root;
	}

	pop() {
		RouteHistory.todo.pop();
	}

	push(path) {
		let last = this.last();

		if (RouteHistory.todo.length && (RouteHistory.todo[0] == path))
			return;

		if (last == path)
			return;

		//RouteHistory.history.push(path);
		RouteHistory.todo.unshift(path); // last in last out

		this.setState()
	}

	record(path) {
		console.log('route is being served ' + path);

		RouteHistory.history.push(path);
	}

	async setState() {
		if (RouteHistory.todo.length)
			this.root._setState({targetpath: [RouteHistory.todo]});
		else
			this.root._setState({targetpath: null});

	}

	last() {
		return (RouteHistory.history.length ? RouteHistory.history[RouteHistory.history.length - 1] : null);
	}

	jumpto() {
		return (RouteHistory.todo.length ? RouteHistory.todo[RouteHistory.todo.length - 1] : null);
	}
}

RouteHistory.history = [];
RouteHistory.todo = [];


class Root extends React.Component {
	constructor(props) {
		super(props);
		
		this.app = this.props.app;
		this.getMvcModuleObject = this.app.getMvcModuleObject;
		this.getMvcMyQuoteObject = this.app.getMvcMyQuoteObject;

		this.uuid = this.app.guid();
		
		// to do jumps
		this.routehistory = new RouteHistory(this);

		this.closingwallet = false;
		this.devicewalletuuid = null;
		
		this.state = {
				loading: true,
				iSessionPending: false,
				isLoggedIn: false,
				hasFatalError: false,
				fatalError: '',
		};
    }
    
	async _setState(json) {
		return new Promise((resolve, reject) => {
			this.setState(json, (err, res) => {
				if (err) reject(err); else resolve(res);
			});
		})
	}
	
	// post render commit phase
	componentDidUpdate(prevProps) {
		console.log('Root.componentDidUpdate called');
		let mvcmodule = this.getMvcModuleObject();
		
		if (!this.props.rootsessionuuid) {
			var state = this.state; // to fool react-scripts compiler
			state.isLoggedIn = false;
			
			// no session, get one
			if (!this.state.isSessionPending)
			this.props.doFetchBlankSession(mvcmodule);
		}
		else {
			// a session, check if it is still valid
			var now = Date.now();
			var lastcheck = (this.props.lastLoggedInCheck ? this.props.lastLoggedInCheck : 0);
			
			if (this.props.isLoggedIn 
					&& !this.props.loggedInCheckPending
					&& ((now - lastcheck) > 60000)) // 60 000 = 1 minute
				this.props.doCheckLoggedIn(mvcmodule, this.props.rootsessionuuid);
		}
	}

	async _doFetchBlankSession(mvcmodule, sessionuuid) {
		const result = new Promise((resolve, reject) => { 
			this.props.doFetchBlankSession(mvcmodule, (err, res) => {
				if (err) reject(err); else resolve(res);
			});
		});
		
		return result;
	}

	async _doCheckSession(mvcmodule, sessionuuid) {
		const result = new Promise((resolve, reject) => { 
			this.props.doCheckSession(mvcmodule, sessionuuid, (err, res) => {
				if (err) reject(err); else resolve(res);
			});
		});
		
		return result;
	}

	async _doCheckWalletLock(mvcmodule, sessionuuid, walletuuid) {
		const result = new Promise((resolve, reject) => { 
			this.props.doCheckWalletLock(mvcmodule, sessionuuid, walletuuid, (err, res) => {
				if (err) reject(err); else resolve(res);
			});
		});
		
		return result;
	}

	async _doOpenWallet(mvcmodule, sessionuuid, walletuuid, walletname, password) {
		const result = new Promise((resolve, reject) => { 
			this.props.doOpenWallet(mvcmodule, sessionuuid, walletuuid, walletname, password, (err, res) => {
				if (err) reject(err); else resolve(res);
			});
		});
		
		return result;
	}

	async _checkOnline() {
		let mvcmyquote = this.getMvcMyQuoteObject();

		return mvcmyquote.checkOnline()
	}


	async _checkWalletUnlocked() {
		// used to re-synchronize redux with truth
		let mvcmodule = this.getMvcModuleObject();

		let rootsessionuuid = this.props.rootsessionuuid;
		let walletuuid = this.props.currentwalletuuid;
		let iswalletlocked = this.props.iswalletlocked;

		if (!walletuuid)
			return false;

		if (this.closingwallet === true)
			return false;

		if (iswalletlocked === false) {
			const islocked = await this._doCheckWalletLock(mvcmodule, rootsessionuuid, walletuuid)
			.catch(err => {
				console.log('error in Root._checkWalletLock:' + err);
				
				this.app.error(err);
	
				this.props.doResetWallet();
	
				return false;
			});

			console.log('Root._checkWalletUnlocked islocked = ' + islocked );
	
			if (islocked !== false) {
				this.props.doResetWallet();

				return false;
			}
			else {
				return true;
			}
		}
		else {
			this.props.doResetWallet();
	
			return false;
		}

	}

	async _resetWallet() {
		console.log('Root._resetWallet called');
		this.props.doResetWallet();
	}



	async _getDeviceWallet() {
		let mvcmyquote = this.getMvcMyQuoteObject();

		let rootsessionuuid = this.props.rootsessionuuid;

		var devicewllt = await mvcmyquote.readSettings('devicewallet');

		if (devicewllt && devicewllt.walletuuid) 
			return mvcmyquote.getWalletInfo(rootsessionuuid, devicewllt.walletuuid);
	}

	async _isDeviceWallet(walletuuid) {
		let mvcmyquote = this.getMvcMyQuoteObject();

		let rootsessionuuid = this.props.rootsessionuuid;
		let currentwalletuuid = this.props.currentwalletuuid;

		var devicewllt = await mvcmyquote.readSettings('devicewallet');
		var _walletuuid = (walletuuid ? walletuuid : currentwalletuuid);

		if (devicewllt && devicewllt.walletuuid && (_walletuuid === devicewllt.walletuuid)) 
			return true;
		else
			return false;
	}

	async _openDeviceWalletPromise() {

		if ((this.closingwallet === true) && this.closedevicewalletpromise ) {
			// wait closing is completely finished
			let closed = await this.closedevicewalletpromise;

			// reset closing elements
			this.closingwallet = false;
			this.closedevicewalletpromise = null;
		}

		let mvcmodule = this.getMvcModuleObject();
		let mvcmyquote = this.getMvcMyQuoteObject();

		let rootsessionuuid = this.props.rootsessionuuid;
		
		var walletuuid;
		var walletname = 'devicewallet';
		var password;

		var devicewallet = await this._getDeviceWallet();

		if (devicewallet && devicewallet.uuid) {
			// read settings to get the password
			var devicewllt = await mvcmyquote.readSettings('devicewallet');

			walletuuid = devicewllt.walletuuid;
			password = devicewllt.password;

			await this._doOpenWallet(mvcmodule, rootsessionuuid, walletuuid, walletname, password)		
			.catch(err => {
				console.log('error in Root._openDeviceWallet: ' + err);
				throw err;
			});

			this.devicewalletuuid = walletuuid;

			return devicewallet;
		}

		// we generate a password
		password = this.app.guid();

		// and create a wallet
		var localscheme = await mvcmyquote.getDefaultLocalSchemeInfo(rootsessionuuid);
		var localschemeuuid = localscheme.uuid;

		devicewallet = await mvcmyquote.makeWallet(rootsessionuuid, walletname, localschemeuuid, password)
		.catch(err => {
			console.log('error in Root._openDeviceWallet: ' + err);
		});

		if (!devicewallet)
			return Promise.reject('could not create wallet for device');

		walletuuid = devicewallet.uuid;

		// we save device wallet info in the settings
		var devicewllt = {};

		devicewllt.walletuuid = walletuuid;
		devicewllt.password = password;
		
		await mvcmyquote.putSettings('devicewallet', devicewllt);

		this.devicewalletuuid = walletuuid;
	
		
		// then open wallet
		await this._doOpenWallet(mvcmodule, rootsessionuuid, walletuuid, walletname, password)		
		.catch(err => {
			console.log('error in Root._openDeviceWallet: ' + err);
			throw err;
		});


		// return device wallet
		return devicewallet;
	}

	async _openDeviceWallet() {
		console.log('Root._openDeviceWallet called');

		// to make _openDeviceWallet re-entrant, we store and return a single promise
		if ((this.openingdevicewallet === true) && this.opendevicewalletpromise) {
			return this.opendevicewalletpromise;
		}

		this.openingdevicewallet = true;
		this.opendevicewalletpromise = this._openDeviceWalletPromise();

		return this.opendevicewalletpromise;
	}


	_closeDeviceWallet() {
		console.log('Root._closeDeviceWallet called');

		if (this.devicewalletuuid) {
			let _devicewalletuuid = this.devicewalletuuid;

			let rootsessionuuid = this.props.rootsessionuuid;
			let currentwalletuuid =  this.props.currentwalletuuid;

			if (currentwalletuuid == _devicewalletuuid) {
				this.closingwallet = true;
				this.devicewalletuuid = null;

				// reset correspongin opening
				this.openingdevicewallet = false;
				this.opendevicewalletpromise = null;

				let mvcmyquote = this.getMvcMyQuoteObject();

				console.log('locking device wallet');

				// we lock the wallet to avoid _checkWalletUnlocked
				// restoring the wallet in the state through the reducer

				// note: lockWallet is async but lock flag should be
				// set immediately
				this.closedevicewalletpromise = mvcmyquote.lockWallet(rootsessionuuid, currentwalletuuid)
				.then(() => {
					this.props.doResetWallet();

					this.closingwallet = false;

					console.log('Root._closeDeviceWallet wallet is closed');

					return true;
				})
				.catch(err => {
					console.log('error in Root._closeDeviceWallet ' + err);

					this.closingwallet = false;
					return true;
				})

			}
		}
	}


	async _doOpenCard(mvcmodule, sessionuuid, walletuuid, carduuid) {
		const result = new Promise((resolve, reject) => { 
			this.props.doOpenCard(mvcmodule, sessionuuid, walletuuid, carduuid, (err, res) => {
				if (err) reject(err); else resolve(res);
			});
		});
		
		return result;
	}


	async _openCurrencyCard(currencyuuid) {
		let mvcmodule = this.getMvcModuleObject();
		let mvcmyquote = this.getMvcMyQuoteObject();

		let rootsessionuuid = this.props.rootsessionuuid;
		let walletuuid = this.props.currentwalletuuid;

		if (!walletuuid)
			return;

		// look if we have a card for this currency
		const card = await mvcmyquote.getCurrencyCard(rootsessionuuid, walletuuid, currencyuuid)
		.catch(err => {
			console.log('error in Root._openCurrencyCard: ' + err);
		});

		if (!card)
			return Promise.reject('could not find main card for currency ' + currencyuuid);

		// we open the card, this sets it as current card in redux
		let carduuid = card.uuid;

		await this._doOpenCard(mvcmodule, rootsessionuuid, walletuuid, carduuid)
		.catch(err => {
			console.log('error in Root._openCurrencyCard: ' + err);
		});
		
		return card;
	}

	async _createCurrencyCard(currencyuuid, signingkey, options) {
		console.log('Root._createCurrencyCard');

		if (!currencyuuid)
			return Promise.reject('no currency uuid defined');
		
		if (!signingkey)
			return Promise.reject('no private key defined');
		
		let mvcmodule = this.getMvcModuleObject();
		let mvcmyquote = this.getMvcMyQuoteObject();

		let rootsessionuuid = this.props.rootsessionuuid;
		let walletuuid = this.props.currentwalletuuid;

		let card;

		let validprivatekey = await mvcmyquote.isValidPrivateKey(rootsessionuuid, signingkey);

		if (validprivatekey) {
			card = await mvcmyquote.createCurrencyCard(rootsessionuuid, walletuuid, currencyuuid, signingkey)
			.catch(err => {
				console.log('error in Root._createCurrencyCard: ' + err);
			});
		}
		else if (options && (options.allow_readonly === true)) {
			let validaddress = await mvcmyquote.isValidAddress(rootsessionuuid, signingkey);

			if (validaddress) {
				card = await mvcmyquote.createReadOnlyCurrencyCard(rootsessionuuid, walletuuid, currencyuuid, signingkey)
				.catch(err => {
					console.log('error in Root._createCurrencyCard: ' + err);
				});
			}
		}

		if (!card) {
			this.app.alert('Could not create card from private key or address');
			return;
		}


		if (options && (options.maincard === true)) {
			// set as main card for this currency
			await mvcmyquote.setCurrencyCard(rootsessionuuid, walletuuid, currencyuuid, card.uuid)
			.catch(err => {
				console.log('error in Root._createCurrencyCard: ' + err);
			});
		}


		// we open the card, this sets it as current card in redux
		let carduuid = card.uuid;

		await this._doOpenCard(mvcmodule, rootsessionuuid, walletuuid, carduuid)
		.catch(err => {
			console.log('error in Root._createCurrencyCard: ' + err);
		});
		
		return card;
	}

	async _getCurrencyFeeLevel(currencyuuid) {
		var boot_webapp = this.app.boot_webapp;

		if (boot_webapp.schemes) {
			let mvcmyquote = this.getMvcMyQuoteObject();

			let rootsessionuuid = this.props.rootsessionuuid;
			let walletuuid = this.props.currentwalletuuid;

			let schemeinfo = await mvcmyquote.getCurrencyScheme(rootsessionuuid, walletuuid, currencyuuid)
			.catch(err => {
				console.log('error in Root._getCurrencyFeeLevel: ' + err)
			});

			if (schemeinfo) {
				let schemesoverload = Object.values(boot_webapp.schemes);

				for (var i = 0; i < schemesoverload.length; i++) {
					if (schemesoverload[i].uuid == schemeinfo.uuid) {
						return (schemesoverload[i].ethnodeserver ? schemesoverload[i].ethnodeserver.feelevel : null);
					}
				}
	
			}
	
		}

	}


	async _createLocalCard(web3providerurl, signingkey) {
		console.log('Root._createLocalCard');

		if (!web3providerurl)
			return Promise.reject('no web3 provider url defined');
		
		if (!signingkey)
			return Promise.reject('no private key defined');
		
		let mvcmodule = this.getMvcModuleObject();
		let mvcmyquote = this.getMvcMyQuoteObject();

		let rootsessionuuid = this.props.rootsessionuuid;
		let walletuuid = this.props.currentwalletuuid;

		const card = await mvcmyquote.createCard(rootsessionuuid, walletuuid, web3providerurl, signingkey)
		.catch(err => {
			console.log('error in Root._createLocalCard: ' + err);
		});

		if (!card) {
			this.app.alert('Could not create card from private key');
			return;
		}

		// we open the card, this sets it as current card in redux
		let carduuid = card.uuid;

		await this._doOpenCard(mvcmodule, rootsessionuuid, walletuuid, carduuid)
		.catch(err => {
			console.log('error in Root._createLocalCard: ' + err);
		});
		
		return card;
	}


	async _openLocalCard(schemeuuid, address) {
		let mvcmodule = this.getMvcModuleObject();
		let mvcmyquote = this.getMvcMyQuoteObject();

		let rootsessionuuid = this.props.rootsessionuuid;
		let walletuuid = this.props.currentwalletuuid;

		if (!walletuuid)
			return;

		var card = await mvcmyquote.getCardInfoFromAddressOnScheme(rootsessionuuid, walletuuid, schemeuuid, address)

		if (!card)
			return Promise.reject('could not find curency card for address ' + address);

		// we open the card, this sets it as current card in redux
		await this._doOpenCard(mvcmodule, rootsessionuuid, walletuuid, card.uuid)
		.catch(err => {
			console.log('error in Root._openLocalCard: ' + err);
		});
		
		return card;
	}


	
	componentDidMount() {
		console.log('Root.componentDidMount called');
		let mvcmodule = this.getMvcModuleObject();
		let mvcmyquote = this.app.getMvcMyQuoteObject();
		
		let rootsessionuuid = this.props.rootsessionuuid;
		
		// register to app
		this.app.setVariable('Root',this);

		mvcmyquote.registerEventListener('on_refreshPage', this.uuid, this.onRefreshPage.bind(this));

		// check we have a valid rootsession
		var sessionpromise;

		if (rootsessionuuid) {
			sessionpromise = this._doCheckSession(mvcmodule, rootsessionuuid)
			.catch(err => {
				if (err === 'ERR_SESSION_NOT_FOUND')
				return this._doFetchBlankSession(mvcmodule);

				throw err;
			});
		}
		else {
			sessionpromise = this._doFetchBlankSession(mvcmodule);
		}
		
		sessionpromise
		.then(() => {
			return this.checkNavigationState();
		})
		.catch(err => {
			console.log('error in Root.componentDidMount: ' + err);
		});
	}

	async checkNavigationState() {
		let mvcmyquote = this.getMvcMyQuoteObject();

		let rootsessionuuid = this.props.rootsessionuuid;

 		let app_start_conditions = this.app.getVariable('start_conditions');

		if (app_start_conditions && (app_start_conditions.treated != true)) {
			let start_url = app_start_conditions.url;

			await this.app.gotoUrl(start_url).catch(err => {
				console.log('error in Root.checkNavigationState: ' + err);
			});

			app_start_conditions.treated = true;
		}
 

		this.setState({loading: false});
		return;
	}

	// end of life
	componentWillUnmount() {
		console.log('Root.componentWillUnmount called');
		let mvcmyquote = this.app.getMvcMyQuoteObject();
		
		mvcmyquote.unregisterEventListener('on_refreshPage', this.uuid);
		
		// unregister from app
		this.app.setVariable('Root',null);
	}

	async onRefreshPage() {
		console.log('Root.onRefreshPage called');
		let lastrefresh = Date.now();
		
		await this._setState({lastrefresh: lastrefresh});
	}
	
	async onResetSession() {
		console.log('Root.onResetSession pressed!');
		
		this.setState({hasFatalError: false});
 
		this.props.doResetSession();
	}
	
	// rendering
	onRouteSwitch(path) {
		this.routehistory.record(path);
	}

	renderRoute() {
		if (this.state.loading) {
			return (
				<div className="RootContainer">
					<SplashScreen 
						app = {this.app}
					/>
				</div>
			);
		}

		let jumpto = this.routehistory.jumpto();
		//let jumpto = this.state.targetpath;


		if (jumpto) {
				this.routehistory.pop();
				return (<Redirect to={jumpto} />);
		}
		else {
			return (
					<Switch>
						{Root.routes.map((route, index) => {
								return <Route exact path={route.path} key={route.name} render={(props) => { return (<route.screen {...props} app={this.app} path={this.onRouteSwitch(route.path)}/>);}} />
							}	
						)}
					</Switch>
			);
		}

	}

    render() {

		const {isSessionPending, hasFatalError} = this.state;
		
		if (isSessionPending) {
			return (
				<div className="RootContainer">
					<div>creating session...</div>
				</div>
			);
		}
		else {
			if (!hasFatalError) {
				return (
					<div className="RootContainer">
						<MyRouter>
						{/*<MyRouter basename={'/' + this.app.basename}>*/}
							{this.renderRoute()}
						</MyRouter>
					</div>
				);
			}
			else{
				return (
					<div className="RootContainer">
						<div>Fatal error</div>
					</div>
				);
			}
		}	 	
	}
	
	// navigation
	_getRoutePathFromName(route){
		for (var i = 0; i < Root.routes.length; i++){
			var item = Root.routes[i];
			if (item.name == route)
				return item.path
		} 
	} 

	async _gotoRoute(route, params) {
		if (route == 'dataobject') {
			// generic route, used for exemple when logging-in
			// was needed before being able to read transaction
			var dataobj = await this._getDataObjectFromCallParams(params);

			if (dataobj) {
				var newparams = {dataobject: dataobj, action: params.action };
				await this.app.gotoMyQuotePage(newparams);

			}
			else {
				console.log('Root._gotoRoute could not find data object for txhash ' + params.txhash + ' currency ' + params.currencyuuid);
			}

		}

		var path = this._getRoutePathFromName(route);

		console.log('Root.gotoRoute called asking to jump to ' + path );

		if (path) {
			this.routehistory.push(path);
			
			await this.app.refreshPage();
		}
		
	}

	async _getDataObjectFromComposedHash(txhash, currencyuuid) {
		let dataobject;
		let arr = (txhash ? txhash.split('-') : []);

		let stub = arr[0];

		if (stub == 'dd') {
			let minteraddress = arr[1];
			let tokenid = arr[2];

			let deed = await this._getDeedDataObjectFromMinter(currencyuuid, minteraddress, tokenid);

			if (arr.length < 4) {
				dataobject = deed;
			}
			else {
				let index = arr[3];

				if (deed.clauses && (deed.clauses.length >= index)) {
					let clause = deed.clauses[index];

					dataobject = clause;
				}
				else {
					// we could not make sense of this hash, stick to the deed
					dataobject = deed;
				}
			}
		}
		else {
			return Promise.reject('do not recognize transaction hash stub: ' + stub);
		}

		return dataobject;
	}

	async _getDataObjectFromUrlParams(urlParams) {
		if (!urlParams)
			return;

		var dataobject;

		let currencyuuid = urlParams.get('ccy');
		let txhash = urlParams.get('tx');
		let card = urlParams.get('card');

		if (txhash) {
			let pos = (txhash ? txhash.indexOf('-') : -1);

			if (pos == -1) {
				// plain hash of a transaction
				dataobject = await this.app.getMyQuoteDataObject(txhash, currencyuuid);
			}
			else {
				dataobject = await this._getDataObjectFromComposedHash(txhash, currencyuuid);
			}
		}
		else if (card) {
			let tokenid = urlParams.get('tokenid');

			if (tokenid) {
				dataobject = await this._getDeedDataObjectFromCard(currencyuuid, card, tokenid);
			}
		}

		return dataobject;

	}

	async _getDataObjectFromCallParams(params) {
		var dataobject;

		let currencyuuid = params.currencyuuid;
		let txhash = params.txhash;

		let pos = (txhash ? txhash.indexOf('-') : -1);

		// TODO: look if there is a '-' in the transaction hash
		if (pos == -1) {
			dataobject = await this.app.getMyQuoteDataObject(txhash, currencyuuid);
		}
		else {
			dataobject = await this._getDataObjectFromComposedHash(txhash, currencyuuid);
		}

		return dataobject;
	}

	_getDataObjectRoutes() {
		return ['quote', 'order', 'invoice', 'paymentnotice', 'bounty', 'claim', 'deed', 'clause'];
	}

	async _gotoUrl(url) {

		let cleanurl = await this.app.getCleanUrl();

		if (url && (url.startsWith(cleanurl) !== true)) {
			// this is a jump to another site
			window.location.href = url;

			return;
		}


		// look if a transaction is defined in the url
		const URL = require("url");
		var queryobject = (url ? URL.parse(url, true).query : {});
		var dataobject_routes = this._getDataObjectRoutes();

		// reconnecting to a session
		let sessionuuid = queryobject.sessionuuid;

		if (sessionuuid) {
			// we need to reconnect to a pre-existing session
			// (e.g. coming back from oauth2 authentication)
			this.setState({loading: false});
			this.app.gotoRoute('login');
			return;
		}

		// following a route
		let route = queryobject.route;

		if (route && (dataobject_routes.includes(route) !== true)) {
			// a route indicates the way
			let params = Object.assign({}, queryobject);
			this.app.gotoRoute(route, params);
			return;
		}

		// looking for a dataobjet that will define a route from its type
		var urlParams;
		let dataobject;

		if (url) {
			var querystring = (url.indexOf('?') > 0 ? url.slice(url.indexOf('?')) : url);
			urlParams = new URLSearchParams(querystring);
			dataobject = await this._getDataObjectFromUrlParams(urlParams);
		}
		else {
			// initial url
			let app_start_conditions = this.app.getVariable('start_conditions');
			urlParams = app_start_conditions.urlParams;
			dataobject = await this.app.getStartDataObject(); // should be the same than this._getDataObjectFromUrlParams(urlParams);
		}
		
		if (dataobject) {
			let params = {dataobject: dataobject};

			switch(dataobject.type) {
				case 'bounty':
					params.action = 'create';
					params.txhash = dataobject.txhash;
					params.currencyuuid = dataobject.currencyuuid;
					this.app.gotoRoute('claim', params);
					break;

				case 'claim':
					params.action = 'view';
					params.txhash = dataobject.txhash;
					params.currencyuuid = dataobject.currencyuuid;
					this.app.gotoRoute('claim', params);
					break;

				case 'deed':
					params.action = 'view';
					params.txhash = dataobject.txhash;
					params.currencyuuid = dataobject.currencyuuid;
					params.address = dataobject.minter
					params.tokenid = dataobject.tokenid
					this.app.gotoRoute('deed', params);
					break;

				case 'clause':
					params.action = 'view';
					params.txhash = dataobject.txhash;
					params.currencyuuid = dataobject.currencyuuid;
					params.address = dataobject.minter
					params.tokenid = dataobject.tokenid
					params.index = dataobject.index
					this.app.gotoRoute('clause', params);
					break;

				case 'quote':
					params.action = 'view';
					params.txhash = dataobject.txhash;
					params.currencyuuid = dataobject.currencyuuid;
					this.app.gotoRoute('quote', params);
					break;

				case 'order':
					params.action = 'view';
					params.txhash = dataobject.txhash;
					params.currencyuuid = dataobject.currencyuuid;
					this.app.gotoRoute('order', params);
					break;

				case 'invoice':
					params.action = 'view';
					params.txhash = dataobject.txhash;
					params.currencyuuid = dataobject.currencyuuid;
					this.app.gotoRoute('invoice', params);
					break;

				case 'paymentnotice':
					params.action = 'view';
					params.txhash = dataobject.txhash;
					params.currencyuuid = dataobject.currencyuuid;
					this.app.gotoRoute('paymentnotice', params);
					break;

				default:
					break;
			}

			return;
		}
		
	}

	async _gotoMyQuotePage(params) {
		if (!params)
		return;

		// we define the route according to the quote-order process
		let dataobj = params.dataobject;

		if (!dataobj)
			return;

		var type = dataobj.type;

		params.txhash = (dataobj.txhash ? dataobj.txhash : params.txhash);

		switch(type) {
			case 'bounty':
				params.route = 'bounty';
				params.action = (params.action ? params.action : (dataobj.target === 'view' ? 'view' : 'create'));
				return this.app.gotoRoute('bounty', params);
			case 'claim':
				params.route = 'claim';
				params.action = (params.action ? params.action : (dataobj.target === 'view' ? 'view' : 'create'));
				return this.app.gotoRoute('claim', params);
			case 'quote':
				params.route = 'quote';
				params.action = (params.action ? params.action : (dataobj.target === 'view' ? 'view' : 'create'));
				return this.app.gotoRoute('quote', params);
			case 'order':
				params.route = 'order';
				params.action = (params.action ? params.action : (dataobj.target === 'view' ? 'view' : 'create'));
				return this.app.gotoRoute('order', params);
			case 'invoice':
				params.route = 'invoice';
				params.action = (params.action ? params.action : (dataobj.target === 'view' ? 'view' : 'create'));
				return this.app.gotoRoute('invoice', params);
			case 'paymentnotice':
				params.route = 'paymentnotice';
				params.action = (params.action ? params.action : (dataobj.target === 'view' ? 'view' : 'create'));
				return this.app.gotoRoute('paymentnotice', params);
		
			default:
				params.route = type;
				return this.app.gotoRoute(type, params);
		}
	}
	
	async _getMyQuoteDataObject(txhash, currencyuuid) {
		let mvcmyquote = this.getMvcMyQuoteObject();

		let rootsessionuuid = this.props.rootsessionuuid;
		let walletuuid = this.props.currentwalletuuid;

		if (currencyuuid) {

			var dataobject = await mvcmyquote.fetchCurrencyTransaction(rootsessionuuid, walletuuid, currencyuuid, txhash)
			.catch(err => {
				console.log('error in Root._getMyQuoteDataObject:' + err);
			});

			if (dataobject) {
				// add transaction hash that is the accessor to object
				dataobject.txhash = txhash;

				return dataobject;
			}
		}		
	}

	_getPlainQueryParameters(query) {
		let _query = query;

		const URL = require("url");
		let _encodedurl;

		if (query.b64url) {
			try {
				_encodedurl = query.b64url;
				let _url = this.app.decodebase64(_encodedurl);
				
				_query = (_url ? URL.parse(_url, true).query : _query);
			}
			catch(e) {
				console.log('exception in Root._getPlainQueryParameters:' + e);
			}
		}
		else if (query.hexurl) {
			try {
				_encodedurl = query.hexurl;
				let _url = this.app.decodehex(_encodedurl);
				
				_query = (_url ? URL.parse(_url, true).query :_query);
			}
			catch(e) {
				console.log('exception in Root._getPlainQueryParameters:' + e);
			}
		}
		
		return _query;
	}

	async _getStartParameters() {
		let app_start_conditions = this.app.getVariable('start_conditions');	

		const URL = require("url");
		let url = app_start_conditions.url;
		let queryobject = (url ? URL.parse(url, true).query : {});

		return this._getPlainQueryParameters(queryobject);
	}

	async _getStartDataObject() {
		let app_start_conditions = this.app.getVariable('start_conditions');
		let urlParams = app_start_conditions.urlParams;

		let start_data_obj = app_start_conditions.dataobject;

		if (start_data_obj)
			return start_data_obj;

		if (urlParams) {
			let target = urlParams.get('route');

			start_data_obj = await this._getDataObjectFromUrlParams(urlParams);

			if (!start_data_obj)
				return;

			start_data_obj.target = target;

			app_start_conditions.dataobject = start_data_obj;
		}

		return start_data_obj;
	}

	async _onEmptyStartDataObject(txhash, currencyuuid) {
		let mvcmyquote = this.getMvcMyQuoteObject();

		let rootsessionuuid = this.props.rootsessionuuid;
		let walletuuid = this.props.currentwalletuuid;

		let canfetch = await mvcmyquote.canFetchTransactions(rootsessionuuid, walletuuid, currencyuuid);

		if (canfetch) {
			this.app.error('Root did not fill dataobj');
		}
		else {
			let currency = await mvcmyquote.getCurrencyFromUUID(rootsessionuuid, currencyuuid);

			if (currency) {
				this.app.error('You need to login first with corresponding authentication for currency ' + currency.name);

				let params = {txhash, currencyuuid, action: 'view'};
				var nav_state = {route: 'dataobject', params, reached: false};
				nav_state.target = {route: 'dataobject', params};

				this.app.pushNavigationState(nav_state);

				await this.app.gotoRoute('login', params);
	
			}
			else {
				this.app.error('Currency uuid is not recognized: ' + currencyuuid);
			}
		}

	}

	async _getDeedDataObjectFromCard(currencyuuid, cardaddress, tokenid) {
		let mvcmyquote = this.getMvcMyQuoteObject();

		let rootsessionuuid = this.props.rootsessionuuid;
		let walletuuid = this.props.currentwalletuuid;

		if (currencyuuid) {

			let minter = await mvcmyquote.fetchDeedMinterFromOwner(rootsessionuuid, walletuuid, currencyuuid, cardaddress);

			if (!minter)
				return Promise.reject('could not find minter linked to address ' + cardaddress);

			var dataobject = await mvcmyquote.fetchDeed(rootsessionuuid, walletuuid, currencyuuid, minter, tokenid)
			.catch(err => {
				console.log('error in Root._getDeedDataObjectFromCard:' + err);
			});

			return dataobject;
		}		
	}

	async _getDeedDataObjectFromMinter(currencyuuid, minteraddress, tokenid) {
		let mvcmyquote = this.getMvcMyQuoteObject();

		let rootsessionuuid = this.props.rootsessionuuid;
		let walletuuid = this.props.currentwalletuuid;

		if (currencyuuid) {

			let minter = await mvcmyquote.fetchDeedMinterFromAddress(rootsessionuuid, walletuuid, currencyuuid, minteraddress);

			if (!minter)
				return Promise.reject('could not find minter linked to address ' + minteraddress);

			var dataobject = await mvcmyquote.fetchDeed(rootsessionuuid, walletuuid, currencyuuid, minter, tokenid)
			.catch(err => {
				console.log('error in Root.async_getDeedDataObjectFromMinter:' + err);
			});

			return dataobject;
		}		
	}

	async _logout() {
		this.props.doResetSession();
	}

	
	
	// static methods
	static getDerivedStateFromProps(nextProps, prevState) {
		// fill state
		return {
			isSessionPending: nextProps.isSessionPending,
		};
	}
	
	static getDerivedStateFromError(error) {
		return { hasFatalError: true };
	}

	static async loadRoutes(app) {
		let Routes = require('./routes/routes.js');

		let extra_routes = await Routes.default.getRoutes(app);

		for (var i = 0; i < extra_routes.length; i++) {
			Root.routes.push(extra_routes[i]);
		}

	}
}

Root.routes = [
	{
		name: 'root',
		path: '/',
		screen: HomeScreen

	},
	{
		name: 'home',
		path: '/home',
		screen: HomeScreen

	},
	{
		name: 'login',
		path: '/login',
		screen: HomeScreen
	},
	{
		name: 'logout',
		path: '/logout',
		screen: LogoutScreen
	},
	{
		name: 'exit',
		path: '/exit',
		screen: AboutScreen
	},
	{
		name: 'datawipe',
		path: '/datawipe',
		screen: DataWipeScreen
	},
	{
		name: 'deeplink',
		path: '/deeplink',
		screen: DeepLinkScreen
	},
	{
		name: 'currencycards',
		path: '/currencycards',
		screen: CurrencyCardListScreen
	},	
	{
		name: 'currencycard',
		path: '/currencycard',
		screen: CurrencyCardHomeScreen
	},
	{
		name: 'about',
		path: '/about',
		screen: AboutScreen
	},
	{
		name: 'contacts',
		path: '/contacts',
		screen: ContactListScreen
	},
	{
		name: 'contact',
		path: '/contact',
		screen: ContactHomeScreen
	},

];


// propTypes validation
Root.propTypes = {
	app: PropTypes.object.isRequired,
	rootsessionuuid: PropTypes.string,
	isSessionPending: PropTypes.bool,
	isLoggedIn: PropTypes.bool,
	lastLoggedInCheck: PropTypes.number,
	loggedInCheckPending: PropTypes.bool,
	doFetchBlankSession: PropTypes.func.isRequired,
	doCheckSession: PropTypes.func.isRequired,
	doResetSession: PropTypes.func.isRequired,
	doCheckLoggedIn: PropTypes.func.isRequired,
	currentwalletuuid: PropTypes.string,
	iswalletlocked: PropTypes.bool,
	doResetWallet: PropTypes.func.isRequired,
	doOpenWallet: PropTypes.func.isRequired,
	doCheckWalletLock: PropTypes.func.isRequired,
	doOpenCard: PropTypes.func.isRequired,
};

//redux
const mapStateToProps = (state) => {
	return {
		isSessionPending: state.session.pending,
		rootsessionuuid: state.session.sessionuuid,
		username: state.login.username,
		isLoggedIn: state.login.success,
		loggedInCheckPending: state.login.checkpending,
		lastLoggedInCheck: state.login.checkedon,
		currentwalletuuid: state.wallets.walletuuid,
		iswalletlocked: state.wallets.islocked,
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		doFetchBlankSession: (mvcmodule, callback) => dispatch(doFetchBlankSession(mvcmodule, callback)),
		doCheckSession: (mvcmodule, sessionuuid, callback) => dispatch(doCheckSession(mvcmodule, sessionuuid, callback)),
		doResetSession: () => dispatch(doResetSession()),
		doCheckLoggedIn: (mvcmodule, sessionuuid, callback) => dispatch(doCheckLoggedIn(mvcmodule, sessionuuid, callback)),
		doResetWallet: () => dispatch(doResetWallet()),
		doOpenWallet: (mvcmodule, session, walletuuid, walletname, password, callback) => dispatch(doOpenWallet(mvcmodule, session, walletuuid, walletname, password, callback)),
		doCheckWalletLock: (mvcmodule, sessionuuid, walletuuid, callback) => dispatch(doCheckWalletLock(mvcmodule, sessionuuid, walletuuid, callback)),
		doOpenCard: (mvcmodule, sessionuuid, walletuuid, carduuid, callback) => dispatch(doOpenCard(mvcmodule, sessionuuid, walletuuid, carduuid, callback)),
	};
}

export {Root};
export default connect(mapStateToProps, mapDispatchToProps)(Root);

