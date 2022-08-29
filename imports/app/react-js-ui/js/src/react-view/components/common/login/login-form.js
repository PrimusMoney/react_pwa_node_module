import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';

import Image from 'react-bootstrap/Image';

import { Dots } from 'react-activity';
import 'react-activity/dist/react-activity.css';

import PropTypes from 'prop-types';

import facebooklogin from "../../../../../../assets/facebook-login-573x102.png"
import googlelogin from "../../../../../../assets/google-login-573x102.png"


import List from '../../utils/list.js'


import { doFetchWalletList, doImportWallet, doModifyWallet, doOpenWallet, doLockWallet, doCheckWalletLock, resetWallet, doSetWallet } from '@primusmoney/react_client_wallet/imports/view/actions/wallet/wallet-actions.js';




class LoginForm extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.app = this.props.app;
		this.getMvcModuleObject = this.app.getMvcModuleObject;
		this.getMvcMyQuoteObject = this.app.getMvcMyQuoteObject;
		
		let username = '';
		let password = '';

		this.nav_state_params = null;

		let logging_pending = this.app.getVariable('logging_pending');
		
		this.closing = false;

		this.login_scheme_list_webapp = null;
		this.login_scheme_list_dev = null;
		
		this.state = {
				processinginfo: 'processing authentication',
				processing: (logging_pending ? true : false),
				schemeuuid: null,
				username: username,
				password: password,
				loaded: false,
				message: '',
				supportdisclaimer: ''
		}
	}

	_setState(state) {
		if (this.closing !== true)
		this.setState(state);
	}

	// post render commit phase
	componentDidUpdate(prevProps, prevState) {
		console.log('LoginForm.componentDidUpdate called');
		let mvcmodule = this.getMvcModuleObject();

		let logging_pending = this.app.getVariable('logging_pending');
		if ( this.state.processing && (this.state.processing != logging_pending)) {
			this._setState({processing: false});
		}

	}

	componentDidMount() {
		console.log('LoginForm.componentDidMount called');
		let mvcmyquote = this.getMvcMyQuoteObject();

		let supportdisclaimer = mvcmyquote.t('This webapp has only been tested for Chrome on Android. \
												It may not work for other environments \
												(and actually does not in certain cases e.g. FireFox).')

		this._setState({supportdisclaimer});
		
		this.checkNavigationState().catch(err => {console.log('error in LoginForm.checkNavigationState: ' + err);});
	}
	
	async checkNavigationState() {
		let mvcmyquote = this.getMvcMyQuoteObject();

		let rootsessionuuid = this.props.rootsessionuuid;

		// load additional login for webapp and dev
		this.login_scheme_list_webapp = await mvcmyquote.loadConfig('login-webapp');
		this.login_scheme_list_dev = await mvcmyquote.loadConfig('login-dev');


		// look if a transaction is defined in the url
		let app_nav_state = this.app.getNavigationState();
		let app_nav_target = app_nav_state.target;


		if (app_nav_target && (app_nav_target.route == 'login') && (app_nav_target.reached == false)) {
			console.log('LoginForm.checkNavigationState target reached');
 			// we want to login before completing previous route
			this.nav_state_params = app_nav_target.params;

			// we reset processing and logging_pending in case they're not clean
			//await this.setProcessing(false);

			app_nav_target.reached = true;
		}
		else {
			console.log('LoginForm.checkNavigationState starting from a clean slate');
 
			// starting from a clean slate
			let startconditions = this.app.getVariable('start_conditions');
			let urlParams = startconditions.urlParams;
	
			if (urlParams) {
				let txhash = urlParams.get('tx');
				let currencyuuid = urlParams.get('ccy');
				
				let sessionuuid = urlParams.get('sessionuuid');
				let schemeuuid = urlParams.get('schemeuuid');
	
				if (sessionuuid) {
					// we need to reconnect to a pre-existing
					// (e.g. coming back from oauth2 authentication)
					console.log('LoginForm.checkNavigationState reconnecting to session:'  + sessionuuid);
	
					if (schemeuuid) {
						var params = {sessionuuid, schemeuuid};
	
						if (startconditions.walletforscheme_treating !== true ) {
							console.log('LoginForm.checkNavigationState looking for a wallet for scheme ' + schemeuuid);
							startconditions.walletforscheme_treating = true;

							// set processing flag on
							await this.setProcessing(true);
							
							var wallet = await this._getWalletForScheme(params)		
							.catch(err => {
								console.log('error in LoginForm._getWalletForScheme:' + err);
							});
		
							if (wallet) {
								console.log('LoginForm.checkNavigationState found wallet for session:'  + sessionuuid);
								await this.postLogin('bootstrap');
									
								startconditions.walletforscheme_treated = true;
							}
							else {
								console.log('LoginForm.checkNavigationState reset url, could not find wallet for session:'  + sessionuuid)
								// we restart on a clean url
								await this.app.resetHref();
							}					
						}
					}
				}
				else {
					if (txhash && currencyuuid) {
						let dataobj = await this.app.getStartDataObject()
						.catch(err => {
							console.log('error calling App.getStartDataObject: ' + err);
						});
	
						if (dataobj) {
							if (dataobj.viewed !== true) {
								let params = {dataobject: dataobj};
								await this.app.gotoMyQuotePage(params)
								.catch(err => {
									console.log('error calling App.gotoMyQuotePage: ' + err);
								});
							}
						}
						else {
							// we ask root
							await this.app.onEmptyStartDataObject(txhash, currencyuuid)
							.catch(err => {
								console.log('error calling App.onEmptyStartDataObject: ' + err);
							});
						}
	
					}
				}
			}
		}

		console.log('LoginForm.checkNavigationState loaded');
		this._setState({loaded: true});
	}

	// end of life
	componentWillUnmount() {
		console.log('LoginForm.componentWillUnmount called');

		this.closing = true;
	}
	

	async setProcessing(bChoice) {
		console.log('LoginForm.setProcessing called with:' + bChoice);

		if (bChoice) {
			this.app.setVariable('logging_pending', true);
			this._setState({processing: true});
		}
		else {
			this.app.setVariable('logging_pending', false);
			this._setState({processing: false});
		}

	}

	async _getWalletForScheme(params) {
		let mvcmodule = this.getMvcModuleObject();
		let mvcmyquote = this.getMvcMyQuoteObject();
		
		let rootsessionuuid = this.props.rootsessionuuid;
		
		let childsessionuuid = params.sessionuuid;
		let schemeuuid = params.schemeuuid;
		let username = params.username;
		let password = params.password;


		let walletlist = await this._doFetchWalletList(mvcmodule, rootsessionuuid)
		.catch(err => {
			console.log('error in LoginForm._getWalletForScheme:' + err);
		});

		var persistedwallet;

		for (var i = 0; i < walletlist.length; i++) {
			var wallet = walletlist[i];
			if ( username && (wallet.name !== username)) {continue;}

			var walletinfo = await mvcmyquote.getWalletInfo(rootsessionuuid, wallet.uuid)
			.catch(err => {
				console.log('error in LoginForm._getWalletForScheme:' + err);
			});

			if (walletinfo && (walletinfo.schemeuuid === schemeuuid)) {
				persistedwallet = walletinfo;
				break;
			}
		}

		if (username && password) {
			// primus money

			// no wallet persisted yet
			if (!persistedwallet) {
				// we create a wallet
				persistedwallet = await mvcmyquote.makeWallet(rootsessionuuid, username, schemeuuid, password)				
				.catch(err => {
					console.log('error in LoginForm._getWalletForScheme:' + err);
				});
			}


			if (!persistedwallet) {
				this.app.alert('Could not create wallet with these credentials');
				return;
			}

			let unlocked =  await this._doOpenWallet(mvcmodule, rootsessionuuid, persistedwallet.uuid, persistedwallet.name, password)
			.catch(err => {
				console.log('error in LoginForm._getWalletForScheme:' + err);
			});
	
			if (!unlocked) {
				console.log('LoginForm._getWalletForScheme wallet authentication failed');
				return;
			}	
	
		}
		else {
			// oauth2

			// no wallet persisted yet
			if (!persistedwallet) {
				// we create a wallet
				persistedwallet = await mvcmyquote.makeWalletFromSession(childsessionuuid, schemeuuid)				
				.catch(err => {
					console.log('error in LoginForm._getWalletForScheme:' + err);
				});
			}
			else {
				// we attach the session to the wallet
				await mvcmyquote.attachSessionToWallet(childsessionuuid, persistedwallet.uuid)
				.catch(err => {
					console.log('error in LoginForm._getWalletForScheme:' + err);
				});
			}


			if (!persistedwallet) {
				this.app.alert('Could not create wallet for oauth2');
				return;
			}

			// synchronize redux
			var currentwalletname = this.props.currentwallet;
			var currentwalletuuid = this.props.currentwalletuuid;

			var walletname = persistedwallet.name;
			var walletuuid = persistedwallet.uuid;

			if ((currentwalletname != walletname) || (currentwalletuuid ==walletuuid ))
			this.props.doSetWallet(walletname, walletuuid);

			const islocked = await this._doCheckWalletLock(mvcmodule, rootsessionuuid, walletuuid)
			.catch(err => {
				console.log('error in LoginForm._getWalletForScheme:' + err);
			});
		}

		
		return persistedwallet;
	}
				
	// user actions
	async _doFetchWalletList(mvcmodule, sessionuuid) {
		const result = new Promise((resolve, reject) => { 
			this.props.doFetchWalletList(mvcmodule, sessionuuid, (err, res) => {
				if (err) reject(err); else resolve(res);
			});
		});
		
		return result;
	}
	
	async _doModifyWallet(mvcmodule, sessionuuid, walletuuid, walletinfo) {
		const result = new Promise((resolve, reject) => { 
			this.props.doModifyWallet(mvcmodule, sessionuuid, walletuuid, walletinfo, (err, res) => {
				if (err) reject(err); else resolve(res);
			});
		});
		
		return result;
	}
	
	async _doImportWallet(mvcmodule, sessionuuid, configurl, authname, password, options) {
		const result = new Promise((resolve, reject) => { 
			this.props.doImportWallet(mvcmodule, sessionuuid, configurl, authname, password, options, (err, res) => {
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

	async _doCheckWalletLock(mvcmodule, sessionuuid, walletuuid) {
		const result = new Promise((resolve, reject) => { 
			this.props.doCheckWalletLock(mvcmodule, sessionuuid, walletuuid, (err, res) => {
				if (err) reject(err); else resolve(res);
			});
		});
		
		return result;
	}

	async postLogin(mode) {
		console.log('LoginForm.postLogin called with mode: ' + (mode ? mode : 'unknown'));

		if (mode == 'bootstrap') {
			// starting with bias for dataobjects
			let dataobj = await this.app.getStartDataObject()
			.catch(err => {
				console.log('error calling App.getStartDataObject: ' + err);
			});

			if (dataobj) {
				if (dataobj.viewed !== true) {
					let params = {action: 'view', dataobject: dataobj};

					await this.app.gotoMyQuotePage(params)
					.catch(err => {
						console.log('error calling App.gotoMyQuotePage: ' + err);
					});
				}
			}
			else {
				let start_parameters = await this.app.getStartParameters();

				if (start_parameters.route) {
					await this.app.gotoRoute(start_parameters.route, start_parameters);
				}
				else {
					await this.app.gotoRoute('home');
				}
			}
		}
		else {
			// action to complete
			let nav_state_params = this.nav_state_params;

			let _previous_app_state = this.app._getPreviousNavigationState();
			let target = (_previous_app_state ? _previous_app_state['target'] : null);

			if (target && target.route && target.params){
				if (!target.params.action)
				target.params.action = (nav_state_params && nav_state_params.action ? nav_state_params.action : 'create');

				await this.app.gotoRoute(target.route, target.params);
			}

		}
		
		await this.setProcessing(false);
	}



	async onSubmit() {
		console.log('LoginForm.onSubmit pressed!');
		
		let mvcmyquote = this.getMvcMyQuoteObject();
		let rootsessionuuid = this.props.rootsessionuuid;
		
		let { schemeuuid, username, password } = this.state;

		var params = {};

		params.schemeuuid = schemeuuid;
		params.username = username;
		params.password = password;


		var wallet = await this._getWalletForScheme(params)		
		.catch(err => {
			console.log('error in LoginForm.onSubmit:' + err);
		});

		if (!wallet) {
			console.log('LoginForm.onSubmit login failed');
			return;
		}

		console.log('logged in successful');

		await this.postLogin();
	}

	async oauth2Login(servicename, schemeuuid) {
		console.log('LoginForm.oauth2Login called');
		
		let mvcmyquote = this.getMvcMyQuoteObject();
		let rootsessionuuid = this.props.rootsessionuuid;

		let childsessionuuid = await mvcmyquote.createChildSession(rootsessionuuid);

		// redirect
		var cleanurl = await this.app.getCleanUrl();

		let redirectappurl = cleanurl;

		// oauth2 authentication part
		redirectappurl += '?sessionuuid=' + childsessionuuid;
		redirectappurl += '&schemeuuid=' + schemeuuid;

		// action to complete
		let _previous_app_state = this.app._getPreviousNavigationState();
		let target = (_previous_app_state ? _previous_app_state['target'] : null);

		if (target && target.route && target.params){
			let actionparams = target.params;

			let _root = this.app.getVariable('Root');
			let dataobject_routes = _root._getDataObjectRoutes();

			if ((dataobject_routes.includes(target.route) !== true)) {
				let _keys = Object.keys(actionparams);

				for (var i = 0; i < _keys.length; i++) {
					redirectappurl += '&' +  _keys[i] + '=' + actionparams[_keys[i]];
				}
			}
			else {
				if (actionparams.txhash && actionparams.currencyuuid) {
					redirectappurl += '&route=' + target.route;
					redirectappurl += '&tx=' + actionparams.txhash;
					redirectappurl += '&ccy=' + actionparams.currencyuuid;
				}
			}

		}


		let params = {client: 'web', closewindow: '0', appurl: redirectappurl};
		//var params = {client: 'web', closewindow: '0', appurl: 'none'};

		let authorizeurl = await mvcmyquote.oauth2AuthorizeUrl(childsessionuuid, schemeuuid, params)
		.catch(err => {
			console.log('error in LoginForm.oauth2Login:' + err);
		});

		await this.setProcessing(true);

		// jump
		await this.app.gotoUrl(authorizeurl);
	}

	async onClickItem(item) {
 		let schemeuuid = item.uuid;

		if (item.credentials !== true) {
			await this.oauth2Login(item.provider, schemeuuid);
		}

		this._setState({schemeuuid});
	}

	
	// rendering
	renderLoginForm() {
		let { username, password } = this.state;
		
		return (
			<div className="Form">
				<FormGroup controlId="username">
				  <FormLabel>User</FormLabel>
				  <FormControl
					autoFocus
					type="email"
					value={username}
					onChange={e => this._setState({username: e.target.value})}
				  />
				</FormGroup>
				<FormGroup controlId="password">
				  <FormLabel>Password</FormLabel>
				  <FormControl
					value={password}
					onChange={e => this._setState({password: e.target.value})}
					type="password"
				  />
				</FormGroup>
				<Button onClick={this.onSubmit.bind(this)} type="submit">
				  Login
				</Button>
			</div>
		  );
	}

	renderItem(item){
		let type = item.type;
		let label = item.label;

		switch(item.name) {
			case 'facebook':
				return (
					<div>
						<Image src={facebooklogin} fluid />
					</div>
				);

				case 'google':
					return (
						<div>
							<Image src={googlelogin} fluid />
						</div>
					);
	
				default:
				return (
					<div>
						<span>{label}</span>
					</div>
				);
		}
	}

	_getLoginSchemeList() {
		// built-in logins

		/*let schemeList = [
			{name: 'facebook', label: 'facebook', type: 1, provider: 'facebook', uuid: 'd8dbb10e-a478-e52c-b96b-29af6f48ae9b'}, 
			{name: 'google', label: 'google', type: 1, provider: 'google', uuid: '47b0806f-c3fa-65f6-b356-8715a2bcfa0c'},
			{name: 'primusmoney', label: 'connect with primus money', type: 1, credentials: true, uuid: 'd3b4fa61-ed65-11f6-4877-b169441dbe58'}
		];*/

		let schemeList = [
			{name: 'facebook', label: 'facebook', type: 1, provider: 'facebook', uuid: 'd8dbb10e-a478-e52c-b96b-29af6f48ae9b'}, 
			{name: 'primusmoney', label: 'connect with a primus money account', type: 1, credentials: true, uuid: 'd3b4fa61-ed65-11f6-4877-b169441dbe58'}
		];

		// webapp additional logins
		if (this.login_scheme_list_webapp) {
			for (var i = 0; i < this.login_scheme_list_webapp.length; i++) {
				schemeList.push(this.login_scheme_list_webapp[i]);
			}
		}

		if (this.app.exec_env === 'dev') {
			// only for dev
			if (this.login_scheme_list_dev) {
				for (var i = 0; i < this.login_scheme_list_dev.length; i++) {
					schemeList.push(this.login_scheme_list_dev[i]);
				}
	
			}
		}

		return schemeList;
	}

	_isCredentialsScheme(schemeuuid) {
		if (!schemeuuid)
			return false;

		let scheme;
		let schemeList = this._getLoginSchemeList();

		for (var i = 0; i < schemeList.length; i++) {
			if (schemeList[i].uuid === schemeuuid) {
				scheme = schemeList[i];
				break;
			}
		}

		if (!scheme)
			return false;
		
		if (scheme.credentials === true)
			return true;

		return false;
	}

	renderAuthList() {
		let schemeList = this._getLoginSchemeList();

		return (
			<List items={schemeList} onClickItem={(item) => this.onClickItem(item)} render={(item) => this.renderItem(item)} />
		);

	}
	

	render() {
		let {loaded, processing, supportdisclaimer, schemeuuid} = this.state;

		// initial
 		if (loaded !== true) {
			return (
				<div className="Splash">
					<div>{this.state.processinginfo}</div>
					<Dots />
				</div>
			);
		}

		// during processing of submit
		if (processing === true) {
			return (
				<div className="Splash">
					<div>{this.state.processinginfo}</div>
					<Dots />
				</div>
			);
		}
		
		return (
			<div className="Container LoginContainer">
				<div className="AuthBox">
				{ (this._isCredentialsScheme(schemeuuid) ?
				this.renderLoginForm() : 
				this.renderAuthList())}
				</div>

				<div className="SupportDisclaimerBox">{supportdisclaimer}</div>
			</div>
		  );
	}
	
}


// propTypes validation
LoginForm.propTypes = {
	app: PropTypes.object.isRequired,
	rootsessionuuid: PropTypes.string,
	isLoginPending: PropTypes.bool,
	isLoggedIn: PropTypes.bool,
	currentwallet: PropTypes.string,
	currentwalletuuid: PropTypes.string,
	doFetchWalletList: PropTypes.func.isRequired,
	doImportWallet: PropTypes.func.isRequired,
	doModifyWallet: PropTypes.func.isRequired,
	doOpenWallet: PropTypes.func.isRequired,
	doLockWallet: PropTypes.func.isRequired,
	doCheckWalletLock: PropTypes.func.isRequired,
	resetWallet: PropTypes.func.isRequired,
	doSetWallet: PropTypes.func.isRequired,
};

//redux
const mapStateToProps = (state) => {
	return {
		rootsessionuuid: state.session.sessionuuid,
		isLoginPending: state.login.pending,
		isLoggedIn: state.login.success,
		lasterror: state.login.error,
		currentwallet: state.wallets.walletname,
		currentwalletuuid: state.wallets.walletuuid,
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		doFetchWalletList: (mvcmodule, sessionuuid, callback) => dispatch(doFetchWalletList(mvcmodule, sessionuuid, callback)),
		doImportWallet: (mvcmodule, sessionuuid, configurl, authname, password, options, callback) => dispatch(doImportWallet(mvcmodule, sessionuuid, configurl, authname, password, options, callback)),
		doModifyWallet: (mvcmodule, sessionuuid, walletuuid, walletinfo, callback) => dispatch(doModifyWallet(mvcmodule, sessionuuid, walletuuid, walletinfo, callback)),
		doOpenWallet: (mvcmodule, session, walletuuid, walletname, password, callback) => dispatch(doOpenWallet(mvcmodule, session, walletuuid, walletname, password, callback)),
		doLockWallet: () => dispatch(doLockWallet()),
		resetWallet: () => dispatch(resetWallet()),
		doSetWallet: (walletname, walletuuid) => dispatch(doSetWallet(walletname, walletuuid)),
		doCheckWalletLock: (mvcmodule, sessionuuid, walletuuid, callback) => dispatch(doCheckWalletLock(mvcmodule, sessionuuid, walletuuid, callback)),
	};
}


export {LoginForm};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

