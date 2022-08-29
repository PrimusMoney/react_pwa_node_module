'use strict';


var Module = class {
	
	constructor() {
		this.name = 'mvc-myquote';
		this.current_version = "1.01.1.2020.12.05";
		
		this.global = null; // put by global on registration
		this.app = null;
		
		this.controllers = null;

		this.isready = false;
		this.isloading = false;

		this.clientapicontrollers = null; // API gateway

		// operation
		this.contract_path_root_uri = null;
	}
	
	init() {
		console.log('module init called for ' + this.name);

		var global = this.global;
		
		this.isready = true;
	}
	
	// compulsory  module functions
	loadModule(parentscriptloader, callback) {
		console.log('loadModule called for module ' + this.name);
		
		if (this.isloading)
			return;
			
		this.isloading = true;

		var self = this;

		var modulescriptloader = parentscriptloader.getChildLoader('mvcmyquoteloader');

		modulescriptloader.load_scripts(function() { self.init(); if (callback) callback(null, self); });

		return modulescriptloader;	
	}
	
	isReady() {
		return this.isready;
	}

	hasLoadStarted() {
		return this.isloading;
	}

	// optional module functions
	registerHooks() {
		console.log('module registerHooks called for ' + this.name);
		
		var global = this.global;
		
		// initialization
	}
	
	postRegisterModule() {
		console.log('postRegisterModule called for ' + this.name);
		if (!this.isloading) {
			var global = this.global;
			var self = this;
			var rootscriptloader = global.getRootScriptLoader();
			
			this.loadModule(rootscriptloader, function() {
				if (self.registerHooks)
				self.registerHooks();
			});
		}
	}
	
	_getClientAPI() {
		if (this.clientapicontrollers)
			return this.clientapicontrollers;
		
		var global = this.global;
		
		var mvcmodule = global.getModuleObject('mvc');
		
		this.clientapicontrollers = mvcmodule._getClientAPI();

		return  this.clientapicontrollers;
	}

	//
	// hooks
	//
	

	//
	// API
	//

	// Client config
	getClientExecutionEnvironment() {
		var global = this.global;
		var mvcmodule = global.getModuleObject('mvc');
		return mvcmodule.getClientExecutionEnvironment();
	}
	
	async initProdEnvironment() {
		var global = this.global;
		var mvcmodule = global.getModuleObject('mvc');
		return mvcmodule.initProdEnvironment();
	}
	
	async initDevEnvironment() {
		var global = this.global;
		var mvcmodule = global.getModuleObject('mvc');
		return mvcmodule.initDevEnvironment();
	}
	
	async setContractPathRootUri(rooturi) {
		this.contract_path_root_uri = rooturi;
	}

	t(string) {
		var global = this.global;
		var mvcmodule = global.getModuleObject('mvc');

		return mvcmodule.t(string);
	}

	// events
	signalEvent(eventname, params) {
		var global = this.global;
		var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
		return mvcclientwalletmodule.signalEvent(eventname, params);
	}
	
	registerEventListener(eventname, listerneruuid, callback) {
		var global = this.global;
		var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
		return mvcclientwalletmodule.registerEventListener(eventname, listerneruuid, callback);
	}
	
	unregisterEventListener(eventname, listerneruuid) {
		var global = this.global;
		var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
		return mvcclientwalletmodule.unregisterEventListener(eventname, listerneruuid);
	}
	
	//
	// Network
	//
	_getXMLHttpRequestClass() {
		if (typeof XMLHttpRequest !== 'undefined' && XMLHttpRequest ) {
			return XMLHttpRequest;
		}
		else if (typeof window !== 'undefined' && window ) {
			// normally (browser or react native), XMLHttpRequest should be directly accessible
			if (typeof window.XMLHttpRequest !== 'undefined')
				return window.XMLHttpRequest;
			else if ( (typeof window.simplestore !== 'undefined')
					&& (typeof window.simplestore.XMLHttpRequest !== 'undefined'))
					return window.simplestore.XMLHttpRequest;
		}
		else if ((typeof global !== 'undefined') && (typeof global.simplestore !== 'undefined')
				&& (typeof global.simplestore.XMLHttpRequest !== 'undefined')) {
			return global.simplestore.XMLHttpRequest;
		}
		else {
			throw 'can not find XMLHttpRequest class!!!';
		}
	}

	async checkOnline() {
		var isOnline = true; // assume unless proven wrong by a rest call

		var global = this.global;
		var _apicontrollers = this._getClientAPI();
	
		var clientmodule = global.getModuleObject('webclient');
		
		var remote_networks = clientmodule.getBuiltinRemoteNetworks();
		var remote_network_list = Object.values(remote_networks);

		if (remote_network_list && remote_network_list.length > 0) {
			var network = remote_network_list[0];

			if (network.restserver.rest_server_url) {
				// make a rest call to see if we get a proper answer
				var resturl = network.restserver.rest_server_url + (network.restserver.rest_server_api_path ? network.restserver.rest_server_api_path : '');
				var json = await new Promise((resolve, reject) => {
					var _XMLHttpRequest = this._getXMLHttpRequestClass()
					var xhttp = new _XMLHttpRequest();
					
					xhttp.open('GET', resturl, true);
					
					xhttp.setRequestHeader("Content-type", "application/json");
					
					xhttp.send();
					
					xhttp.onload = function(e) {
						if (xhttp.status == 200) {
							var res = {};
							
							try {
								res = JSON.parse(xhttp.responseText);
							}
							catch(e) {
							}
		
							resolve(res);
						}
						else {
							reject('wrong result');
						}
					};
					
					xhttp.onerror = function (e) {
						reject('rest error is ' + xhttp.statusText);
					};
				})
				.catch(err => {
					isOnline = false;
				});
				
			}
		}

		return isOnline;
	}

	//
	// Storage
	//

	// Settings
	async readSettings(keys, defaultvalue) {
		var global = this.global;
		var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
		return mvcclientwalletmodule.readSettings(keys, defaultvalue);
	}
	
	async putSettings(keys, json) {
		var global = this.global;
		var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
		return mvcclientwalletmodule.putSettings(keys, json);
	}

	//
	// Crypto functions
	//

	async isValidAddress(sessionuuid, address) {
		var global = this.global;
		var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
		return mvcclientwalletmodule.isValidAddress(sessionuuid, address);
	}
	
	async generatePrivateKey(sessionuuid) {
		var global = this.global;
		var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
		return mvcclientwalletmodule.generatePrivateKey(sessionuuid);
	}
	
	async isValidPrivateKey(sessionuuid, privatekey) {
		var global = this.global;
		var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
		return mvcclientwalletmodule.isValidPrivateKey(sessionuuid, privatekey);
	}
	
	async areAddressesEqual(sessionuuid, address1, address2) {
		var global = this.global;
		var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
		return mvcclientwalletmodule.areAddressesEqual(sessionuuid, address1, address2);
	}
	


	//
	// Session functions
	//

	async createChildSession(sessionuuid) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
	
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);
		
		var childsession = await _apicontrollers.createChildSessionObject(session);

		if (!childsession)
			return Promise.reject('could not create child session');
			
		childsession.MYQUOTE = this.current_version;
			
		return childsession.getSessionUUID();
	}


	// TODO: should use mvcmodule._getChildSessionOnWeb3Url for version >= 0.20.7
	// keep
	async _getChildSessionOnWeb3Url(parentsession, web3providerurl) {
		var global = this.global;
		var mvcmodule = global.getModuleObject('mvc');

		return mvcmodule._getChildSessionOnWeb3Url(parentsession, web3providerurl);
	}

	// user
	async getUserInfo(sessionuuid) {
		var global = this.global;
		var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
		return mvcclientwalletmodule.getUserInfo(sessionuuid);
	}
	
	async isValidEmailAddress(sessionuuid, emailaddress) {
		var global = this.global;
		var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
		return mvcclientwalletmodule.isValidEmailAddress(sessionuuid, emailaddress);
	}


	//
	// Storage
	//

	async getLocalJsonLeaf(sessionuuid, keys, bForceRefresh) {
		var global = this.global;
		var mvcmodule = global.getModuleObject('mvc');

		return mvcmodule.getLocalJsonLeaf(sessionuuid, keys, bForceRefresh);
	}
	
	async saveLocalJson(sessionuuid, keys, json) {
		var global = this.global;
		var mvcmodule = global.getModuleObject('mvc');

		return mvcmodule.saveLocalJson(sessionuuid, keys, json);
	}

	// TODO: should use _apicontrollers.readClientSideJson for version >= 0.20.8
	async _readClientSideJson(session, keys) {
		var clientAccess = session.getClientStorageAccessInstance();
		
		const result = new Promise((resolve, reject) => {
			clientAccess.readClientSideJson(keys, (err, res) => {
				if (err) reject(err); else resolve(res);
			}); // does not return a promise
		})
		.catch(err => {
			console.log('error in _readClientSideJson: ' + err);
		});
		
		return result;
	}

	// TODO: should use _apicontrollers.saveClientSideJson for version >= 0.20.8
	async _saveClientSideJson(session, keys, json) {
		var clientAccess = session.getClientStorageAccessInstance();
		
		const result = new Promise((resolve, reject) => { 
			clientAccess.saveClientSideJson(keys, json, (err, res) => {
				if (err) reject(err); else resolve(res);
			}); // does not return a promise
		});
		
		return result;
	}



	async hasPrivateKey(sessionuuid, address) {
		var global = this.global;
		var mvcmodule = global.getModuleObject('mvc');

		return mvcmodule.hasPrivateKey(sessionuuid, address);
	}

	//
	// Ethnode
	//

	async _createMonitoredEthereumTransaction(wallet, card, session, fromaccount) {
		var global = this.global;
		
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies._createMonitoredEthereumTransaction(wallet, card, session, fromaccount);
	}

	//
	// Card encryption functions
	//

	// private key

	// TODO: should use mvcmodule.getWalletDecryptingCard for version >= 0.20.17
	async getWalletDecryptingCard(sessionuuid, walletuuid, address) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		var global = this.global;
		var mvcmodule = global.getModuleObject('mvc');
		var _apicontrollers = this._getClientAPI();
	
		var session = await _apicontrollers.getSessionObject(sessionuuid);
	
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);

		var wallet = await _apicontrollers.getWalletFromUUID(session, walletuuid).catch(err => {});
	
		if (!wallet)
			return;

		var cards = await mvcmodule.getCardsWithAddress(sessionuuid, walletuuid, address).catch(err => {});

		if (!cards)
			return;

		for (var i = 0; i < cards.length; i++) {
			var _privatekey = await mvcmodule.getCardPrivateKey(sessionuuid, walletuuid, cards[i].uuid).catch(err => {});

			if (_privatekey)
				return cards[i];
		}
	}

	async getCardPrivateKey(sessionuuid, walletuuid, carduuid) {
		var global = this.global;
		var mvcmodule = global.getModuleObject('mvc');

		return mvcmodule.getCardPrivateKey(sessionuuid, walletuuid, carduuid);
	}

	async setCardPrivateKey(sessionuuid, walletuuid, carduuid, privatekey) {
		var global = this.global;
		var mvcmodule = global.getModuleObject('mvc');

		return mvcmodule.setCardPrivateKey(sessionuuid, walletuuid, carduuid, privatekey);
	}

	// symetric encryption

	async aesEncryptString(sessionuuid, walletuuid, carduuid, plaintext) {
		var global = this.global;
		var mvcmodule = global.getModuleObject('mvc');

		return mvcmodule.aesEncryptString(sessionuuid, walletuuid, carduuid, plaintext);
	}

	async aesDecryptString(sessionuuid, walletuuid, carduuid, cyphertext) {
		var global = this.global;
		var mvcmodule = global.getModuleObject('mvc');

		return mvcmodule.aesDecryptString(sessionuuid, walletuuid, carduuid, cyphertext);
	}

	// asymetric encryption
	async rsaEncryptString(sessionuuid, walletuuid, carduuid, recipientrsapublickey, plaintext) {
		var global = this.global;
		var mvcmodule = global.getModuleObject('mvc');

		return mvcmodule.rsaEncryptString(sessionuuid, walletuuid, carduuid, recipientrsapublickey, plaintext);
	}
	
	async rsaDecryptString(sessionuuid, walletuuid, carduuid, senderrsapublickey, cyphertext) {
		var global = this.global;
		var mvcmodule = global.getModuleObject('mvc');

		return mvcmodule.rsaDecryptString(sessionuuid, walletuuid, carduuid, senderrsapublickey, cyphertext);
	}


	async signString(sessionuuid, walletuuid, carduuid, plaintext) {
		var global = this.global;
		var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');

		return mvcclientwalletmodule.signString(sessionuuid, walletuuid, carduuid, plaintext);
	}

	// TODO: should use mvcclientwalletmodule.validateStringCardSignature for version >= 0.30.11
	async validateStringCardSignature(sessionuuid, walletuuid, carduuid, plaintext, signature) {
		if (!plaintext)
			return Promise.reject('plain text is undefined');

		if (!signature)
			return Promise.reject('signature is undefined');

		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		if (!walletuuid)
			return Promise.reject('wallet uuid is undefined');
		
		if (!carduuid)
			return Promise.reject('card uuid is undefined');
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);
		
		var wallet = await _apicontrollers.getWalletFromUUID(session, walletuuid);
		
		if (!wallet)
			return Promise.reject('could not find wallet ' + walletuuid);
		
		var card = await wallet.getCardFromUUID(carduuid);
		
		if (!card)
			return Promise.reject('could not find card ' + carduuid);

		var address = card.getAddress();

		return _apicontrollers.validateStringSignature(session, address, plaintext, signature);
	}


	//
	// Scheme functions
	//
	async getSessionScheme(sessionuuid) {
		// note: clientsmodule does not store info on the schemeuuid
		// we do it at our level (and won't have it if session created by someone else)

		if (!sessionuuid)
		return Promise.reject('session uuid is undefined');

		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);

		var schemeuuid = session.getSessionVariable('schemeuuid');

		if (!schemeuuid)
			return Promise.reject('no scheme uuid save in session variables');

		return this.getSchemeInfo(sessionuuid, schemeuuid);
	}

	async getSchemeInfo(sessionuuid, schemeuuid) {
		var global = this.global;
		var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
		return mvcclientwalletmodule.getSchemeInfo(sessionuuid, schemeuuid);
	}

	// TODO: replace with mvcclientwalletmodule.findLocalSchemeInfoFromWeb3Url for version >= 0.30.8
	_compareUrl(url1, url2) {
		var _url1 = (url1 && url1.endsWith('/') ? url1.substring(0, url1.length - 1 ) : url1);
		var _url2 = (url2 && url2.endsWith('/') ? url2.substring(0, url2.length - 1 ) : url2);

		if (_url1 && _url2 && (_url1 == _url2))
		return true;
		else
		return false;
	}

	async findLocalSchemeInfoFromWeb3Url(sessionuuid, web3url, options) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();


		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);

		var scheme;


		// get list of local schemes
		var localschemes = await _apicontrollers.getLocalSchemeList(session, true);

		for (var i = 0; i < localschemes.length; i++) {
			var networkconfig = localschemes[i].getNetworkConfig();
			var ethnodeserverconfig = networkconfig.ethnodeserver;

			if (this._compareUrl(ethnodeserverconfig.web3_provider_url, web3url)) {
				// validate scheme matches options
				var bValid = true;
				var _keys = (options ? Object.keys(options) : []);

				for (var j = 0; j < _keys.length; j++) {
					if (options[_keys[j]] && (options[_keys[j]] != ethnodeserverconfig[_keys[j]]) ) {
						bValid = false;
						break;
					}
				}

				if (bValid) {
					scheme = localschemes[i];
					break;
				}
			}
		}

		if (!scheme)
			return Promise.reject('could not find scheme for ' + web3url);

		var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
		var schemeuuid = scheme.getSchemeUUID();

		return mvcclientwalletmodule. getSchemeInfo(sessionuuid, schemeuuid);
	}
	
	async getSchemeTransactionUnitsThreshold(sessionuuid, schemeuuid) {
		var global = this.global;
		var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
		return mvcclientwalletmodule.getSchemeTransactionUnitsThreshold(sessionuuid, schemeuuid);
	}

	async getDefaultLocalSchemeInfo(sessionuuid) {
		var global = this.global;
		var mvcmodule = global.getModuleObject('mvc');

		return mvcmodule.getDefaultLocalSchemeInfo(sessionuuid);
	}

	// TODO: should use mvcmodule._getAverageTransactionFee for version >= 0.20.7
	// keep until transition to mvc-currencies
	_getAverageTransactionFee(scheme, feelevel) {
		var global = this.global;
		var mvcmodule = global.getModuleObject('mvc');

		return mvcmodule._getAverageTransactionFee(scheme, feelevel);
	}

	// TODO: should use mvcmodule._getTransactionCredits for version >= 0.20.7
	// remote
	_getTransactionCredits(scheme, transactionunits) {
		var global = this.global;
		var mvcmodule = global.getModuleObject('mvc');

		return mvcmodule._getTransactionCredits(scheme, transactionunits);
	}

	async getSchemeTransactionInfo(sessionuuid, schemeuuid, feelevel = null) {
		var global = this.global;
		var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
		return mvcclientwalletmodule.getSchemeTransactionInfo(sessionuuid, schemeuuid, feelevel);
	}

	async oauth2AuthorizeUrl(sessionuuid, schemeuuid, params) {
		var global = this.global;
		var mvcmodule = global.getModuleObject('mvc');

		return mvcmodule.oauth2AuthorizeUrl(sessionuuid, schemeuuid, params);
	}

	// TODO: should use mvclientwalletmodule.getUnitsFromCredits for version >= 0.20.17
	async _getUnitsFromCredits(session, scheme, credits) {
		var units = scheme.getTransactionUnits(credits);
		
		return units;
	}

	// TODO: should use mvclientwalletmodule.getUnitsFromCredits for version >= 0.20.17
	async getUnitsFromCredits(sessionuuid, schemeuuid, credits) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);

		var	scheme = await _apicontrollers.getSchemeFromUUID(session, schemeuuid)
		.catch(err => {});

		if (!scheme)
			return Promise.reject('could not find scheme ' + schemeuuid);

		return this._getUnitsFromCredits(session, scheme, credits);
	}

	// TODO: should use mvclientwalletmodule.getCreditsFromUnits for version >= 0.20.17
	async getCreditsFromUnits(sessionuuid, schemeuuid, units) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);

		var	scheme = await _apicontrollers.getSchemeFromUUID(session, schemeuuid)
		.catch(err => {});

		if (!scheme)
			return Promise.reject('could not find scheme ' + schemeuuid);

		return scheme.getTransactionCreditsAsync(units);
	}

	//
	// Wallet functions
	//

	async getWalletInfo(sessionuuid, walletuuid) {
		var global = this.global;
		var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
		return mvcclientwalletmodule.getWalletInfo(sessionuuid, walletuuid);
	}
	
	async makeWallet(sessionuuid, authname, schemeuuid, password) {
		var global = this.global;
		var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
		return mvcclientwalletmodule.makeWallet(sessionuuid, authname, schemeuuid, password);
	}

	async makeWalletFromSession(sessionuuid, schemeuuid) {
		var global = this.global;
		var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
		return mvcclientwalletmodule.makeWalletFromSession(sessionuuid, schemeuuid);
	}

	// TODO: should use mvclientwalletmodule.attachSessionToWallet for version >= 0.20.17
	async attachSessionToWallet(sessionuuid, walletuuid) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var commonmodule = global.getModuleObject('common');

		// look if session already exists
		var session = await _apicontrollers.getSessionObject(sessionuuid);

		if (!session) {
			session = await commonmodule.createBlankSessionObject();
			session.setSessionUUID(sessionuuid);
		}


		if (!session)
			return Promise.reject('could not create session ' + sessionuuid);

		
		var wallet = await _apicontrollers.getWalletFromUUID(session, walletuuid);
	
		if (!wallet)
			return Promise.reject('could not find wallet ' + walletuuid);

		var scheme = await wallet.getScheme();

		if (!scheme)
			throw new Error('could not find scheme for wallet ' + walletuuid);

		// set network config to the session
		//var network = scheme.getNetworkConfig();
		var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
		var network = mvcclientwalletmodule._getSchemeNetworkConfig(scheme);
				
		await _apicontrollers.setSessionNetworkConfig(session, network);

		// save schemeuuid in session var (because missing 2021.11.13)
		session.setSessionVariable('schemeuuid', scheme.getSchemeUUID());

		let isanonymous = await mvcclientwalletmodule._isAnonymousAsync(session);
		if (isanonymous)
			return Promise.reject('session needs to be authenticated');


		await mvcclientwalletmodule._attachSessionToWallet(session, wallet);
	}

	async lockWallet(sessionuuid, walletuuid) {
		var global = this.global;
		var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');

		return mvcclientwalletmodule.lockWallet(sessionuuid, walletuuid);
	}

	//
	// Card functions
	//

	async getCardListOnWeb3Url(sessionuuid, walletuuid, web3url) {
		var global = this.global;
		var mvcmodule = global.getModuleObject('mvc');

		return mvcmodule.getCardListOnWeb3Url(sessionuuid, walletuuid, web3url);
	}

	async createCard(sessionuuid, walletuuid, web3providerurl, privatekey) {
		// Note: this is creating local cards
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		if (!walletuuid)
			return Promise.reject('wallet uuid is undefined');

		if (!web3providerurl)
			return Promise.reject('web3 url is undefined');
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);
		
		var wallet = await _apicontrollers.getWalletFromUUID(session, walletuuid);
		
		if (!wallet)
			return Promise.reject('could not find wallet ' + walletuuid);


		const card = await _apicontrollers.createWalletCardFromPrivateKey(session, wallet, web3providerurl, privatekey);

		if (!card)
			return Promise.reject('could not create card');

		if (card.isLocked()) {
			await card.unlock();
		}

		const bSave = await card.save();

		if (!bSave)
			return Promise.reject('could not save card');

		var mvcmodule = global.getModuleObject('mvc');
		var cardinfo = {};

		mvcmodule._fillCardInfo(cardinfo, card);
		
		return cardinfo;
	}

	async getWalletCard(sessionuuid, walletuuid, carduuid) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		if (!walletuuid)
			return Promise.reject('wallet uuid is undefined');

		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);
		
		var wallet = await _apicontrollers.getWalletFromUUID(session, walletuuid);
		
		if (!wallet)
			return Promise.reject('could not find wallet ' + walletuuid);

		var card = await wallet.getCardFromUUID(carduuid);

		if (!card)
			return Promise.reject('could not find card ' + carduuid);
	

		if (card.isLocked()) {
			await card.unlock();
		}

		const bSave = await card.save();

		if (!bSave)
			return Promise.reject('could not save card');

		var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
		var cardinfo = {};

		mvcclientwalletmodule._fillCardInfo(cardinfo, card);
			
		return cardinfo;	
	}


	async getCardSchemeInfo(sessionuuid, walletuuid, carduuid) {
		var global = this.global;
		var mvcmodule = global.getModuleObject('mvc');

		return mvcmodule.getCardSchemeInfo(sessionuuid, walletuuid, carduuid);
	}

	async getCardInfoFromAddressOnScheme(sessionuuid, walletuuid, schemeuuid, address) { 
		var global = this.global;
		var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
		return mvcclientwalletmodule.getCardInfoFromAddressOnScheme(sessionuuid, walletuuid, schemeuuid, address);
	}	
	

	async getCreditBalance(sessionuuid, walletuuid, carduuid) {
		var global = this.global;
		var mvcmodule = global.getModuleObject('mvc');

		return mvcmodule.getCreditBalance(sessionuuid, walletuuid, carduuid);
	}

	async topUpCard(sessionuuid, walletuuid, carduuid) {
		var global = this.global;
		var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
		return mvcclientwalletmodule.topUpCard(sessionuuid, walletuuid, carduuid);
	}

	async transferTransactionUnits(sessionuuid, walletuuid, cardfromuuid, cardtouuid, units, feelevel = null) {
		var global = this.global;
		var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
		return mvcclientwalletmodule.transferTransactionUnits(sessionuuid, walletuuid, cardfromuuid, cardtouuid, units, feelevel);
	}

	async sendTransactionUnits(sessionuuid, walletuuid, cardfromuuid, toaddress, units, feelevel = null) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		if (!walletuuid)
			return Promise.reject('wallet uuid is undefined');

		if (!cardfromuuid)
			return Promise.reject('card uuid is undefined');
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);
		
		var wallet = await _apicontrollers.getWalletFromUUID(session, walletuuid);
		
		if (!wallet)
			return Promise.reject('could not find wallet ' + walletuuid);

		var card = await wallet.getCardFromUUID(cardfromuuid);
	
		if (!card)
			return Promise.reject('could not find card ' + cardfromuuid);

		var cardaccount = card._getSessionAccountObject();

		if (!cardaccount)
			return Promise.reject('card has no private key ' + cardfromuuid);

		// call mvc-client-wallet
		var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');

		// TODO: remove fix when corrected in  mvc-client-wallet for version >= 0.30.9
		mvcclientwalletmodule._getMonitoredSchemeSession = this._getMonitoredSchemeSession;
		// END

		var schemeuuid = card.getSchemeUUID();
		var fromprivatekey = cardaccount.getPrivateKey();
	
		return mvcclientwalletmodule.transferSchemeTransactionUnits(sessionuuid, walletuuid, schemeuuid, fromprivatekey, toaddress, units, feelevel);
	}


	// TODO: should use mvcclientwalletmodule._getRecommendedFeeLevel for version >= 0.30.8
	async _getRecommendedFeeLevel(session, wallet, card, tx_fee) {
		// standard fee level
		var	feelevel = {
			default_gas_limit_multiplier: 1,
			default_gas_price_multiplier: 1,
			avg_transaction_fee_multiplier: 1, 
			transaction_units_min_multiplier: 1
		};

		// get scheme transaction info
		var sessionuuid = session.getSessionUUID();
		var card_scheme = card.getScheme();
		var tx_info = await this.getSchemeTransactionInfo(sessionuuid, card_scheme.uuid, feelevel);

		var gasLimit = tx_info.gasLimit;
		var gasPrice = tx_info.gasPrice;
		var avg_transaction_fee = tx_info.avg_transaction_fee;

		var gas_unit = (card_scheme && card_scheme.network && card_scheme.network.ethnodeserver && card_scheme.network.ethnodeserver.gas_unit ? parseInt(card_scheme.network.ethnodeserver.gas_unit) : 21000);
		var credit_cost_unit_ratio = (avg_transaction_fee * 1000000000000000000) / (gas_unit * gasPrice);

		// execution cost
		var units_exec_fee; 
		var credits_exec_fee;
		
		if (tx_fee.estimated_cost_credits) {
			credits_exec_fee = tx_fee.estimated_cost_credits;
			units_exec_fee = await this._getUnitsFromCredits(session, card_scheme, credits_exec_fee);
		}
		else {
			units_exec_fee = (tx_fee.estimated_cost_units ? Math.ceil(tx_fee.estimated_cost_units / credit_cost_unit_ratio) : 1);
			credits_exec_fee = await card_scheme.getTransactionCreditsAsync(units_exec_fee);
		}

		// max price
		var credits_max_fee = gasLimit * gasPrice;
		var units_max_fee =  await this._getUnitsFromCredits(session, card_scheme, credits_max_fee);

		if (units_exec_fee > units_max_fee)
			feelevel.default_gas_limit_multiplier = Math.ceil(units_exec_fee / units_max_fee);

		return feelevel;
	}

	// TODO: should use mvcclientwalletmodule.getRecommendedFeeLevel for version >= 0.30.8
	async getRecommendedFeeLevel(sessionuuid, walletuuid, carduuid, tx_fee) {
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);
		
		var wallet = await _apicontrollers.getWalletFromUUID(session, walletuuid);
		
		if (!wallet)
			return Promise.reject('could not find wallet ' + walletuuid);
	
		var card = await wallet.getCardFromUUID(carduuid);

		if (!card)
			return Promise.reject('could not find card ' + carduuid);

		return this._getRecommendedFeeLevel(session, wallet, card, tx_fee);
	}

	// TODO: should use mvcclientwalletmodule.computeTransactionFee for version >= 0.30.8
	async computeTransactionFee(sessionuuid, walletuuid, carduuid, tx_fee, feelevel = null) {
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);
		
		var wallet = await _apicontrollers.getWalletFromUUID(session, walletuuid);
		
		if (!wallet)
			return Promise.reject('could not find wallet ' + walletuuid);
	
		var card = await wallet.getCardFromUUID(carduuid);

		if (!card)
			return Promise.reject('could not find card ' + carduuid);

		// get scheme transaction info
		var card_scheme = card.getScheme();
		var tx_info = await this.getSchemeTransactionInfo(sessionuuid, card_scheme.uuid, feelevel);

		var gasLimit = tx_info.gasLimit;
		var gasPrice = tx_info.gasPrice;
		var avg_transaction_fee = tx_info.avg_transaction_fee;

		var gas_unit = (card_scheme && card_scheme.network && card_scheme.network.ethnodeserver && card_scheme.network.ethnodeserver.gas_unit ? parseInt(card_scheme.network.ethnodeserver.gas_unit) : 21000);
		var credit_cost_unit_ratio = (avg_transaction_fee * gasPrice) / gas_unit;

		// execution cost
		var units_exec_fee; 
		var credits_exec_fee;
		
		if (tx_fee.estimated_cost_credits) {
			credits_exec_fee = tx_fee.estimated_cost_credits;
			units_exec_fee = await this._getUnitsFromCredits(session, card_scheme, credits_exec_fee);
		}
		else {
			units_exec_fee = (tx_fee.estimated_cost_units ? Math.ceil(tx_fee.estimated_cost_units / credit_cost_unit_ratio) : 1);
			credits_exec_fee = await card_scheme.getTransactionCreditsAsync(units_exec_fee);
		}

		// transferred value
		var units_transferred;
		var credits_transferred;

		if (tx_fee.transferred_credits) {
			credits_transferred = tx_fee.transferred_credits;
			units_transferred = await this._getUnitsFromCredits(session, card_scheme, credits_exec_fee);
		}
		else {
			units_transferred = tx_fee.transferred_credit_units;
			credits_transferred = await card_scheme.getTransactionCreditsAsync(units_transferred);
		}

		// max price
		var credits_max_fee = gasLimit * gasPrice;
		var units_max_fee =  await this._getUnitsFromCredits(session, card_scheme, credits_max_fee);

		// fill tx_fee
		tx_fee.tx_info = tx_info;

		tx_fee.estimated_fee = {};

		// estimated execution fee
		tx_fee.estimated_fee.execution_units = units_exec_fee; 
		tx_fee.estimated_fee.execution_credits = credits_exec_fee; 

		// estimated transaction total
		tx_fee.estimated_fee.total_credits = credits_exec_fee + credits_transferred; 
		tx_fee.estimated_fee.total_units = await this._getUnitsFromCredits(session, card_scheme, tx_fee.estimated_fee.total_credits); 

		// max fee
		tx_fee.estimated_fee.max_units = units_max_fee; 
		tx_fee.estimated_fee.max_credits = credits_max_fee; 

		// required balance
		if (tx_fee.estimated_fee.max_credits > tx_fee.estimated_fee.total_credits) {
			tx_fee.required_credits = tx_fee.estimated_fee.max_credits;
		}
		else {
			if (tx_fee.estimated_fee.max_credits >= tx_fee.estimated_fee.execution_credits)
				tx_fee.required_credits = tx_fee.estimated_fee.max_credits + credits_transferred; // because of "Insufficient funds for gas * price + value" web3 error
			else {
				tx_fee.required_credits = tx_fee.estimated_fee.total_credits; // won't go through because will reach gas limit
				tx_fee.limit_overdraft = true;
			}
		}
		
		tx_fee.required_units =  await this._getUnitsFromCredits(session, card_scheme, tx_fee.required_credits); 

		return tx_fee;
	}


	// TODO: should use mvcclientwalletmodule.canCompleteTransaction for version >= 0.30.8
	async canCompleteTransaction(sessionuuid, walletuuid, carduuid, tx_fee, feelevel = null) {
		// get card balance
		const credits = await this.getCreditBalance(sessionuuid, walletuuid, carduuid);

		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);
		
		var wallet = await _apicontrollers.getWalletFromUUID(session, walletuuid);
		
		if (!wallet)
			return Promise.reject('could not find wallet ' + walletuuid);
	
		var card = await wallet.getCardFromUUID(carduuid);

		if (!card)
			return Promise.reject('could not find card ' + carduuid);

		// can the card send transactions
		var cardaccount = card._getSessionAccountObject();

		if (!cardaccount)
			return false;

		var privatekey = cardaccount.getPrivateKey();
	
		if (!privatekey)
			return false;


		// get transaction fee
		var tx_fee = await this.computeTransactionFee(sessionuuid, walletuuid, carduuid, tx_fee, feelevel);

		// check estimated cost is not above max credits (corresponds to tx_fee.limit_overdraft == true)
		if (tx_fee.estimated_fee.execution_credits > tx_fee.estimated_fee.max_credits) {
			return false;
		}

		// check balance in units is above requirement
		if (credits.transactionunits < tx_fee.required_units) {
			return false;
		}

		// check
		var tx_info = tx_fee.tx_info;
		var scheme_units_threshold = tx_info.units_threshold;
		var scheme_credits_threshold = tx_info.credits_threshold;

		if (scheme_credits_threshold > credits.transactioncredits) {
			if (tx_fee.threshold_enforced === true) {
				tx_fee.required_units = scheme_credits_threshold;
				return false;
			}
			else {
				tx_fee.threshold_unmet = true;
			}
		}


		return true;
	}

	//
	// Currency functions
	//

	async _createDecimalAmount(session, amount, decimals) {
		var global = this.global;
		
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies._createDecimalAmount(session, amount, decimals);
	}


	async transferCurrencyAmount(sessionuuid, walletuuid, cardfromuuid, cardtouuid, currencyuuid, currencyamount, feelevel = null) {
		var global = this.global;
		
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies.transferCurrencyAmount(sessionuuid, walletuuid, cardfromuuid, cardtouuid, currencyuuid, currencyamount, feelevel);
	}

	async _getPretradeScheme(session, currency) {
		var global = this.global;
		
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies._getPretradeScheme(session, currency);
	}


	async loadConfig(configname) {
		var global = this.global;
		var _apicontrollers = this._getClientAPI();
	
		var clientmodule = global.getModuleObject('webclient');

		return clientmodule.loadConfig(configname);
	}

	async getCurrencies(sessionuuid, walletuuid) {
		var global = this.global;
		
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies.getCurrencies(sessionuuid, walletuuid);
	}

	async getCurrencyFromUUID(sessionuuid, currencyuuid) {
		var global = this.global;
		
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies.getCurrencyFromUUID(sessionuuid, currencyuuid);
	}

	async getCurrencyTotalSupply(sessionuuid, walletuuid, currencyuuid) {
		var global = this.global;
		var mvccurrencies = global.getModuleObject('mvc-currencies');
		return mvccurrencies.getCurrencyTotalSupply(sessionuuid, walletuuid, currencyuuid);
	}

	async importCurrencyFromTokenUUID(sessionuuid, walletuuid, carduuid, tokenuuid) {
		var global = this.global;
		var mvccurrencies = global.getModuleObject('mvc-currencies');
		return mvccurrencies.importCurrencyFromTokenUUID(sessionuuid, walletuuid, carduuid, tokenuuid);
	}

	async importCurrencyFromTokenAddress(sessionuuid, walletuuid, carduuid, tokenaddress, options) {
		var global = this.global;
		var mvccurrencies = global.getModuleObject('mvc-currencies');
		return mvccurrencies.importCurrencyFromTokenAddress(sessionuuid, walletuuid, carduuid, tokenaddress, options);
	}

	async _getCurrencyCard(session, wallet, currency) {
		var global = this.global;
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies._getCurrencyCard(session, wallet, currency);
	}

	async getAllCurrenciesWithAddress(sessionuuid, walletuuid, address) {
		var global = this.global;
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies.getAllCurrenciesWithAddress(sessionuuid, walletuuid, address);
	}

	async synchronizeCurrency(sessionuuid, walletuuid, currency) {
		var global = this.global;
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies.synchronizeCurrency(sessionuuid, walletuuid, currency);
	}

	async setCurrencyDescription(sessionuuid, walletuuid, currencyuuid, description) {
		var global = this.global;
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies.setCurrencyDescription(sessionuuid, walletuuid, currencyuuid, description);
	}

	async getCurrenciesFromAddress(sessionuuid, walletuuid, schemeuuid, address) {
		var global = this.global;
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies.getCurrenciesFromAddress(sessionuuid, walletuuid, schemeuuid, address);
	}


	async _getCurrencyScheme(session, currency) {
		var global = this.global;
		var currenciesmodule = global.getModuleObject('currencies');

		var currencyscheme = await currenciesmodule.getCurrencyScheme(session, currency);
		return currencyscheme;
	}

	async getCurrencyScheme(sessionuuid, walletuuid, currencyuuid) {
		var global = this.global;
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies.getCurrencyScheme(sessionuuid, walletuuid, currencyuuid);
	}

	async findCardCurrency(sessionuuid, walletuuid, carduuid) {
		var global = this.global;
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies.findCardCurrency(sessionuuid, walletuuid, carduuid);
	}

	async getCurrencyCard(sessionuuid, walletuuid, currencyuuid) {
		var global = this.global;
		
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies.getCurrencyCard(sessionuuid, walletuuid, currencyuuid);
	}

	async setCurrencyCard(sessionuuid, walletuuid, currencyuuid, carduuid) {
		var global = this.global;
		
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies.setCurrencyCard(sessionuuid, walletuuid, currencyuuid, carduuid);
	}

	async createCurrencyCard(sessionuuid, walletuuid, currencyuuid, privatekey) {
		var global = this.global;
		
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies.createCurrencyCard(sessionuuid, walletuuid, currencyuuid, privatekey);
	}

	async getCurrencyCardWithAddress(sessionuuid, walletuuid, currencyuuid, address) {
		var global = this.global;
		
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies.getCurrencyCardWithAddress(sessionuuid, walletuuid, currencyuuid, address);
	}


	async createReadOnlyCurrencyCard(sessionuuid, walletuuid, currencyuuid, address) {
		var global = this.global;
		
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies.createReadOnlyCurrencyCard(sessionuuid, walletuuid, currencyuuid, address);
	}

	async generateCurrencyCard(sessionuuid, walletuuid, currencyuuid) {
		var global = this.global;
		
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies.generateCurrencyCard(sessionuuid, walletuuid, currencyuuid);
	}

	async getCurrencyPosition(sessionuuid, walletuuid, currencyuuid, carduuid) {
		var global = this.global;
		
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies.getCurrencyPosition(sessionuuid, walletuuid, currencyuuid, carduuid);
	}

	async getCurrencyCardCredits(sessionuuid, walletuuid, currencyuuid) {
		var global = this.global;
		
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies.getCurrencyCardCredits(sessionuuid, walletuuid, currencyuuid);
	}

	async _getMonitoredCardSession(session, wallet, card) {
		var global = this.global;
		
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies._getMonitoredCardSession(session, wallet, card);
	}

	async canPayAmount(sessionuuid, walletuuid, carduuid, currencyuuid, amount, tx_fee, feelevel = null) {
		if (amount ===0)
			return true;

		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		if (!walletuuid)
			return Promise.reject('wallet uuid is undefined');
		
		if (!carduuid)
			return Promise.reject('card uuid is undefined');

		if (!currencyuuid)
			return Promise.reject('currency uuid is undefined');
		
		var global = this.global;
		var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
		var _apicontrollers = this._getClientAPI();
	
		var session = await _apicontrollers.getSessionObject(sessionuuid);
	
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);

		var wallet = await _apicontrollers.getWalletFromUUID(session, walletuuid);
		
		if (!wallet)
			return Promise.reject('could not find wallet ' + walletuuid);
			
		var currency = await this.getCurrencyFromUUID(sessionuuid, currencyuuid);
	
		if (!currency)
			return Promise.reject('could not find currency ' + currencyuuid);

		
		var card = await wallet.getCardFromUUID(carduuid);
	
		if (!card)
			return Promise.reject('could not find a card for currency ' + currencyuuid);


		// can the card send transactions
		var cardaccount = card._getSessionAccountObject();

		if (!cardaccount)
			return false;

		var privatekey = cardaccount.getPrivateKey();
	
		if (!privatekey)
			return false;


		// first look if we have enough transaction units
		if (currency.ops.cantxfree !== true) {
			var _tx_fee = (tx_fee ? tx_fee : {transferred_credit_units: 0, estimated_cost_units: 3} );
			let _feelevel;

			if (feelevel)
			_feelevel = feelevel;
			else
			_feelevel = await this.getRecommendedFeeLevel(sessionuuid, walletuuid, carduuid, _tx_fee);

			var canspend = await this.canCompleteTransaction(sessionuuid, walletuuid, carduuid, _tx_fee, _feelevel).catch(err => {});

			if (!canspend)
				return false;
		}

		// then look if we enough currency amount
		var currencyposition = await this.getCurrencyPosition(sessionuuid, walletuuid, currencyuuid, carduuid);
		var tokenamountmax = await currencyposition.toInteger();

		if (amount > tokenamountmax)
			return false;

		return true;
	}

	async payAmount(sessionuuid, walletuuid, carduuid, toaddress, currencyuuid, amount, feelevel = null) {
		var global = this.global;
		
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies.payAmount(sessionuuid, walletuuid, carduuid, toaddress, currencyuuid, amount, feelevel);
	}

	async payAndReport(sessionuuid, walletuuid, toaddress, currencyuuid, amount) {
		var global = this.global;
		
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies.payAndReport(sessionuuid, walletuuid, toaddress, currencyuuid, amount);
	}

	async getClaimPayingToAddress(sessionuuid, walletuuid, claim) {
		if (claim.payingto_overload) {
			var global = this.global;
			var _apicontrollers = this._getClientAPI();
		
			var session = await _apicontrollers.getSessionObject(sessionuuid);
		
			if (!session)
				return Promise.reject('could not find session ' + sessionuuid);

			var isvalid = _apicontrollers.isValidAddress(session, claim.payingto_overload);

			if (isvalid) {
				claim.payingto = claim.payingto_overload;
			}
		}
		
		return (claim.payingto ? claim.payingto : claim.owner);
	}

	async payClaim(sessionuuid, walletuuid, carduuid, claim) {

		// get currency from the claim
		var toaddress = await this.getClaimPayingToAddress(sessionuuid, walletuuid, claim);
		var currencyuuid = claim.currencyuuid;
		var amount = claim.amount;
		let currencyamount = await this.getCurrencyAmount(sessionuuid, currencyuuid, amount);
		let tokenamount_int = await currencyamount.decimalamount.toInteger();


		var txhash = await this.payAmount(sessionuuid, walletuuid, carduuid, toaddress, currencyuuid, tokenamount_int);

		return txhash;
	}

	async getTokenCardList(sessionuuid, walletuuid, web3providerurl, tokenaddress) {
		var global = this.global;
		
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies.getTokenCardList(sessionuuid, walletuuid, web3providerurl, tokenaddress);
	}


	async getCurrencyCardList(sessionuuid, walletuuid, currencyuuid) {
		var global = this.global;
		
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies.getCurrencyCardList(sessionuuid, walletuuid, currencyuuid);
	}

	async getCurrencySchemeInfo(sessionuuid, currencyuuid) {
		console.log('Warning: obsolete, should use getCurencyScheme(sessionuuid, walletuuid, currencyuuid)');
		var global = this.global;
		
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies.getCurrencySchemeInfo(sessionuuid, currencyuuid);
	}
 

	async getPretradeSchemeInfo(sessionuuid, currencyuuid) {
		var global = this.global;
		
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies.getPretradeSchemeInfo(sessionuuid, currencyuuid);
	}

	async getPretradeWeb3Url(sessionuuid, currencyuuid) {
		var global = this.global;
		
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies.getPretradeWeb3Url(sessionuuid, currencyuuid);
	}

	async getPretradeCard(sessionuuid, walletuuid, carduuid, currencyuuid) {
		var global = this.global;
		
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies.getPretradeCard(sessionuuid, walletuuid, carduuid, currencyuuid);
	}

	async setPretradeCard(sessionuuid, walletuuid, currencyuuid, carduuid) {
		var global = this.global;
		
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies.setPretradeCard(sessionuuid, walletuuid, currencyuuid, carduuid);
	}

	//
	// Transaction functions
	//

	// Note: 
	// fetch, register and update are for blockchain persistence
	// read, save and modify are for storage persistence

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


	async registerTransaction(sessionuuid, walletuuid, carduuid, dataobj, assignto) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		if (!walletuuid)
			return Promise.reject('wallet uuid is undefined');
		
		if (!carduuid)
			return Promise.reject('card uuid is undefined');
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);
		
		var wallet = await _apicontrollers.getWalletFromUUID(session, walletuuid);
		
		if (!wallet)
			return Promise.reject('could not find wallet ' + walletuuid);

		
		var card = await wallet.getCardFromUUID(carduuid);
		
		if (!card)
			return Promise.reject('could not find card ' + carduuid);

		let cardsession = await this._getMonitoredCardSession(session, wallet, card);
		let cardsessionuuid = cardsession.getSessionUUID();

		var _tohex = (data) => {
			var _Buffer = this._getBufferClass();
			let datastr = JSON.stringify(data);
			let buf = _Buffer.from(datastr, 'utf8');
			return '0x' + buf.toString('hex');
		}

		var datahexstring = _tohex(dataobj);
		var fromaccount = card._getSessionAccountObject();
		var toaddress = (assignto ? assignto : fromaccount.getAddress());
		
		//var transaction = _apicontrollers.createEthereumTransaction(cardsession, fromaccount);
		var transaction = await this._createMonitoredEthereumTransaction(wallet, card, cardsession, fromaccount);
		
		var fee = _apicontrollers.createFee();
		
		transaction.setToAddress(toaddress);
		transaction.setValue(0);
		transaction.setGas(fee.gaslimit);
		transaction.setGasPrice(fee.gasPrice);
		
		transaction.setData(datahexstring);
		
		const txhash = await _apicontrollers.sendEthereumTransaction(cardsession, transaction)
		.catch((err) => {
			console.log('error in registerTransaction: ' + err);
		});

		if (!txhash)
		return Promise.reject('could not register transaction');

		// save
		dataobj.txhash = txhash; // add transaction hash to save it, blocknumber will be added later

		// using sessionuuid to save locally (in 'shared') on the client side
		await this._saveTransactionObject(sessionuuid, walletuuid, dataobj);

		return txhash;
	}

	_fillTransactionDataObject(dataobject, tx) {
		var dataobj = {};

		if (!tx)
			return dataobject;
		
		try {
			dataobj = JSON.parse(tx.input_decoded_utf8);
		}
		catch(e) {
			// another type of transaction
			dataobj = {};
		}

		dataobj.blocknumber = tx.block.blocknumber;
		dataobj.blocktime = tx.block.timestamp;
		dataobj.txhash = tx.hash;

		dataobject = Object.assign(dataobject, dataobj);

		return dataobject;
	}

	async _getMonitoredSchemeSession(session, wallet, scheme) {
		var global = this.global;
		
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies._getMonitoredSchemeSession(session, wallet, scheme);
	}


	async _fetchTransaction(session, wallet, pretradescheme, txhash, bPersist = false) {
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var fetchsession = await this._getMonitoredSchemeSession(session, wallet, pretradescheme);
		var fetchsessionuuid = fetchsession.getSessionUUID();

		const tx = await _apicontrollers.readTransaction(fetchsession, txhash)
		.catch((err) => {
			console.log('error in _fetchTransaction: ' + err);
		});

		if (!tx)
			return Promise.reject('could not find transaction ' + txhash);
		
		var dataobj = {};
		
		this._fillTransactionDataObject(dataobj, tx);

		if (bPersist) {
			var sessionuuid = session.getSessionUUID();
			let walletuuid = (wallet ? wallet.getWalletUUID() : null);

			let persistdata = Object.assign({}, dataobj);

			persistdata.txhash = txhash;

			// using sessionuuid to save locally (in 'shared') on the client side
			await this._saveTransactionObject(sessionuuid, walletuuid, persistdata);
		}

		return dataobj;
	}

	async fetchTransaction(sessionuuid, walletuuid, pretradeschemeuuid, txhash) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		if (!pretradeschemeuuid)
			return Promise.reject('scheme uuid is undefined');
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);

		// get a session on web3providerurl
		let wallet = await _apicontrollers.getWalletFromUUID(session, walletuuid)
		.catch(err => {});

		let pretradescheme = await _apicontrollers.getSchemeFromUUID(session, pretradeschemeuuid)
		.catch(err => {});

		if (pretradescheme.isRemote()) {
			// check wallet is not locked
			// TODO: can use wallet.checkLock for version >= 0.20.8
			if (wallet && wallet.isLocked())
				return Promise.reject('ERR_WALLET_LOCKED');
		}

		return this._fetchTransaction(session, wallet, pretradescheme, txhash, true);
	}

	async fetchCurrencyTransaction(sessionuuid, walletuuid, currencyuuid, txhash) {
		var pretradescheme_info = await this.getPretradeSchemeInfo(sessionuuid, currencyuuid);

		return this.fetchTransaction(sessionuuid, walletuuid, pretradescheme_info.uuid, txhash);
	}

	async _getAddressPretradeTransactions(session, wallet, currency, address) {
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var mytokensmodule = global.getModuleObject('mytokens');

		// get a childsession on pretrade's web3providerurl
		//let web3providerurl = currency.pretrade_web3_provider_url;
		//var childsession = await this._getChildSessionOnWeb3Url(session, web3providerurl);
		var pretradescheme = await this._getPretradeScheme(session, currency);
		var childsession = await this._getMonitoredSchemeSession(session, wallet, pretradescheme);

		var currencyuuid = currency.uuid;

		var mytokensaccessinstance = childsession.getSessionVariable('mytokensexplorer-' + currencyuuid);

		if (!mytokensaccessinstance) {
			// TODO: we need to ethereum_node_access to have it initialized when rest connection header is filled
			childsession.ethereum_node_access_instance = await _apicontrollers.getEthereumNodeAccessInstance(childsession); // keep!!!
	
			// create a specific mytokens instance pointing to pretrade_explorer_url to retrieve transactions
			mytokensaccessinstance = mytokensmodule.getMyTokensServerAccessInstance(childsession);

			var restconnection = childsession.createRestConnection(currency.pretrade_explorer_url);

			mytokensaccessinstance.setRestConnection(restconnection);

			childsession.setSessionVariable('mytokensexplorer-' + currencyuuid, mytokensaccessinstance);
		}

		var transactions = await mytokensaccessinstance.account_transactions(address);

		// fake ethchainreader
		var ethereumnodeaccessmodule = global.getModuleObject('ethereum-node-access');
		var ethereumnodeaccessinstance = ethereumnodeaccessmodule.getEthereumNodeAccessInstance(childsession)
		// TODO: could be better to use
		// var ethereumnodeaccessinstance = _apicontrollers.getEthereumNodeAccessInstance(childsession);

		for (var i = 0; i < (transactions ? transactions.length : 0); i++) {
			var tx = transactions[i];

			try {
				// see if input can be decoded in utf8
				tx.input_decoded_utf8 = ethereumnodeaccessmodule.web3ToUTF8(childsession, tx.input);
			}
			catch(e) {
			}
			tx.block = (tx.block ? tx.block : {});
			tx.block.blocknumber = tx.blockNumber;
			tx.block.timestamp = tx.timeStamp;
		}

		return transactions;
	}


	async canFetchTransactions(sessionuuid, walletuuid, currencyuuid) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);
			
		var wallet = await _apicontrollers.getWalletFromUUID(session, walletuuid).catch(err => {});

		var currency = await this.getCurrencyFromUUID(sessionuuid, currencyuuid);
	
		if (!currency)
			return Promise.reject('could not find currency ' + currencyuuid);

		var pretradescheme = await this._getPretradeScheme(session, currency);
		var fetchsession = await this._getMonitoredSchemeSession(session, wallet, pretradescheme).catch(err=> {});

		if (!fetchsession)
			return false;
		
		if (currency.pretrade_explorer_url)
			return true;
		else
			return false;
	}

	async fetchTransactions(sessionuuid, walletuuid, currencyuuid, address) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);
			
		var wallet = await _apicontrollers.getWalletFromUUID(session, walletuuid).catch(err => {});
		
		var currency = await this.getCurrencyFromUUID(sessionuuid, currencyuuid);
	
		if (!currency)
			return Promise.reject('could not find currency ' + currencyuuid);

		if (!currency.pretrade_explorer_url)
			return Promise.reject('no explorer for currency ' + currencyuuid);


		// use explorer to fetch transactions for address
		var transactions = await this._getAddressPretradeTransactions(session, wallet, currency, address);

		// we filter quotes
		var txlist = {};

		txlist.bounties = [];
		txlist.claims = [];

		txlist.quotes = [];
		txlist.orders = [];
		txlist.invoices = [];
		txlist.paymentnotices = [];
		
		for (var i = 0; i < (transactions ? transactions.length : 0); i++) {
			var tx = transactions[i];

			var dataobject = {};

			this._fillTransactionDataObject(dataobject, tx);

			switch(dataobject.type == 'quote') {
				case 'bounty':
					txlist.bounties.push(dataobject);
					break;
				case 'claim':
					txlist.claims.push(dataobject);
					break;
				case 'quote':
					txlist.quotes.push(dataobject);
					break;
				case 'order':
					txlist.orders.push(dataobject);
					break;
				case 'invoice':
					txlist.invoices.push(dataobject);
					break;
				case 'paymentnotice':
					txlist.paymentnotices.push(dataobject);
					break;
			
				default:
					break;
			}
		}

		return txlist;
	}

	//
	// Bounties
	//

	async readBounties(sessionuuid, walletuuid) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);

		if (!walletuuid) {
			var keys = ['myquote', 'bounties']; 
			// shared keys
		}
		else {
			console.log('WARNING: walletuuid specific case not implemented!!!');
			var keys = ['myquote', 'bounties']; 
			// shared keys, also we could look in wallet
			// with mvcmodule.getFromWallet
		}
	
		//let bounty_list = await _apicontrollers.getLocalJsonLeaf(session, keys, true);
		let bounty_list = await this._readClientSideJson(session, keys);

		if (!bounty_list)
			bounty_list = [];

		return bounty_list;
	}

	async fetchBounties(sessionuuid, walletuuid, currencyuuid, vendor_address) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);
			
		var wallet = await _apicontrollers.getWalletFromUUID(session, walletuuid).catch(err => {});
			
		var currency = await this.getCurrencyFromUUID(sessionuuid, currencyuuid);
	
		if (!currency)
			return Promise.reject('could not find currency ' + currencyuuid);

		if (!currency.pretrade_explorer_url)
			return Promise.reject('no explorer for currency ' + currencyuuid);


		// use explorer to fetch transactions for vendor's address
		var transactions = await this._getAddressPretradeTransactions(session, wallet, currency, vendor_address);

		// we filter bounties
		var bountylist = [];
		
		for (var i = 0; i < (transactions ? transactions.length : 0); i++) {
			var tx = transactions[i];

			var dataobject = {};

			this._fillTransactionDataObject(dataobject, tx);

			if ((dataobject.type == 'bounty') && (dataobject.owner == vendor_address)) {
				//await this.saveBounty(sessionuuid, null, dataobject);

				bountylist.push(dataobject);
			}
		}

		return bountylist;
	}

	async fetchBounty(sessionuuid, walletuuid, currencyuuid, txhash) {

		var missing_credentials = false;
		var orgbounty = await this.fetchCurrencyTransaction(sessionuuid, walletuuid, currencyuuid, txhash)
		.catch(err => {
			console.log('error in fetchBounty: ' + err);

			if (err == 'ERR_MISSING_CREDENTIALS')
				missing_credentials = true;
		});

		if (missing_credentials === true)
			return Promise.reject('ERR_MISSING_CREDENTIALS');

		if (!orgbounty)
			return Promise.reject('ERR_BOUNTY_NOT_FOUND');

		// we post-process the bounty record
		var bounty = {};

		// copy the record
		Object.assign(bounty, orgbounty);

		if (!orgbounty.ver) {
			// version 1
			bounty.one_submission = false;
		}
		else if (orgbounty.ver == "2") {
			var submission_options = orgbounty.submission_options;

			bounty.private_submission = (submission_options & 1 ? true : false);
			bounty.one_submission = (submission_options & 2 ? true : false);
		}
		else {
			console.log('error: bounty on chain has wrong version number ' + orgbounty.ver);
		}

		return bounty;
	}
	
	async registerBounty(sessionuuid, walletuuid, carduuid, bounty) {
		// we pre-process the bounty before pushing it to the chain
		var _bounty = {};

		// copy the record
		Object.assign(_bounty, bounty);

		// put version
		_bounty.ver = "2";

		// remove boolean flags
		delete _bounty.private_submission;
		delete _bounty.one_submission;

		// compute submission_options and add it to _bounty
		_bounty.submission_options = 0;
		if (bounty.private_submission) _bounty.submission_options += 1;
		if (bounty.one_submission) _bounty.submission_options += 2;

		// in ver="2" we assign to bounty card to minimize transaction list to be retrieved
		var assignto = bounty.bounty_card_address; 

		var txhash = await this.registerTransaction(sessionuuid, walletuuid, carduuid, _bounty, assignto);

		return txhash;
	}

	async saveBounty(sessionuuid, walletuuid, bounty) {
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var bounty_list = await this.readBounties(sessionuuid, walletuuid);

		// look not in list
		var bInList = false;

		for (var i = 0; i < bounty_list.length; i++) {
			if (bounty_list[i].txhash == bounty.txhash) {
				bInList = true;
				break;
			}
		}

		if (!bInList) {
			var session = await _apicontrollers.getSessionObject(sessionuuid);
		
			if (!session)
				return Promise.reject('could not find session ' + sessionuuid);

			// bounty parameters to be saved
			var {txhash, blocknumber, currencyuuid, owner, title, amount, currency} = bounty;
	
			if (!walletuuid) {
				var keys = ['myquote', 'bounties']; 
				// shared keys
			}
			else {
				console.log('WARNING: walletuuid specific case not implemented!!!');
				var keys = ['myquote', 'bounties']; 
				// shared keys, also we could put in wallet
				// with mvcmodule.putInWallet			
			}
		
			var localjson = {txhash, blocknumber, currencyuuid, owner, title, amount, currency};

			localjson.savetime = Date.now();

			bounty_list.push(localjson);
	
			//return _apicontrollers.saveLocalJson(session, keys, bounty_list);
			return this._saveClientSideJson(session, keys, bounty_list);
		}
		else {
			return bounty_list;
		}
	}

	// chain persistence
	_getBountyAssignAddress(session, bounty) {
		var assign_address;

		if (!bounty.ver)
			assign_address = bounty.owner;
		if (bounty.ver == "2")
			assign_address = bounty.bounty_card_address; // bounty card has less transactions

		return assign_address;
	}

	async fetchClaims(sessionuuid, walletuuid, currencyuuid, bountyhash) {

		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();
	
		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);
			
		var wallet = await _apicontrollers.getWalletFromUUID(session, walletuuid).catch(err => {});

		var currency = await this.getCurrencyFromUUID(sessionuuid, currencyuuid);
	
		if (!currency)
			return Promise.reject('could not find currency ' + currencyuuid);
	
		if (!currency.pretrade_explorer_url)
			return Promise.reject('no explorer for currency ' + currencyuuid);
	
		// read quote
		var bounty = await this.fetchBounty(sessionuuid, walletuuid, currencyuuid, bountyhash);
		var assign_address = this._getBountyAssignAddress(session, bounty);
	
		// use explorer to fetch transactions for address
		var transactions = await this._getAddressPretradeTransactions(session, wallet, currency, assign_address);
	
		// we filter claims
		var claimmap = {};
		
		for (var i = 0; i < (transactions ? transactions.length : 0); i++) {
			var tx = transactions[i];
	
			var dataobject = {};
	
			this._fillTransactionDataObject(dataobject, tx);
	
			if ((dataobject.type == 'claim') && (dataobject.bounty == bountyhash)) {

				if (!dataobject.uuid) {
					// add an uuid now
					dataobject.uuid = session.guid();
					await this.saveClaim(sessionuuid, null, dataobject);
				}

				if (claimmap[dataobject.uuid]) {
					// keep the latest (full copy persistence)
					let latest = claimmap[dataobject.uuid].latest;

					if (dataobject.blocknumber > latest.blocknumber) {
						claimmap[dataobject.uuid].latest = dataobject;
					}
					else if ((dataobject.blocknumber == latest.blocknumber) && (dataobject.ordId > (latest.ordId ? latest.ordId : 0))) {
						claimmap[dataobject.uuid].latest = dataobject;
					}

					// update if first come afterward in list
					let first = claimmap[dataobject.uuid].latest;

					if (dataobject.blocknumber < first.blocknumber) {
						claimmap[dataobject.uuid].first = dataobject;
					}
					else if ((dataobject.blocknumber == latest.blocknumber) && ((dataobject.ordId ? dataobject.ordId : 0) < (first.ordId ? first.ordId : 0))) {
						claimmap[dataobject.uuid].first = dataobject;
					}
				}
				else {
					//claimmap[dataobject.uuid] = dataobject;
					claimmap[dataobject.uuid] = {first: dataobject, latest: dataobject};
				}
			}
		}

		var claimlist = [];
		
		var arr = Object.values(claimmap);

		for (var i = 0; i < (arr ? arr.length : 0); i++) {
			let entry = Object.assign({}, arr[i].latest);
			
			entry.update_blocktime = entry.blocktime;
			entry.update_blocknumber = entry.blocknumber;
			entry.blocktime = arr[i].first.blocktime;
			entry.blocknumber = arr[i].first.blocknumber;
			
			claimlist.push(entry);
		}
	
		return claimlist;
	}

	async fetchClaim(sessionuuid, walletuuid, currencyuuid, txhash) {

		var missing_credentials = false;
		var orgclaim = await this.fetchCurrencyTransaction(sessionuuid, walletuuid, currencyuuid, txhash)
		.catch(err => {
			console.log('error in fetchClaim: ' + err);

			if (err == 'ERR_MISSING_CREDENTIALS')
				missing_credentials = true;
		});

		if (missing_credentials === true)
			return Promise.reject('ERR_MISSING_CREDENTIALS');

		if (!orgclaim)
			return Promise.reject('ERR_CLAIM_NOT_FOUND');

		if (!orgclaim.uuid)
			return Promise.reject('claim was not registered with a proper uuid ' + txhash);

		// we scan the claims to see if the original claim has been updated
		// with new record
		var claim = orgclaim;
		var claims = await this.fetchClaims(sessionuuid, walletuuid, currencyuuid, claim.bounty);

		for (var i = 0; i < (claims ? claims.length : 0); i++) {
			var clm = claims[i];
	
			if (clm.uuid === orgclaim.uuid) {
				claim = claims[i];
				break;
			}
		}

		return claim;
	}

	async canRegisterClaim(sessionuuid, walletuuid, carduuid, claim) {
		let bounty = await this.fetchBounty(sessionuuid, walletuuid, claim.currencyuuid, claim.bounty);

		if (bounty.one_submission === true) {
			// we get list of claims already submitted and see if claim.owner or claim.payingto
			// have already been registered
			var claims = await this.fetchClaims(sessionuuid, bounty.currencyuuid, bounty.txhash);

			var owner_map = {};
			var payingto_map = {};

			for (var i = 0; i < (claims ? claims.length : 0); i++) {
				var clm = claims[i];
		
				if (clm.owner) owner_map[clm.owner] = clm.owner;
				if (clm.payingto) payingto_map[clm.payingto] = clm.payingto;
			}

			if (owner_map[claim.owner])
				return false;

			if (claim.payingto && payingto_map[claim.payingto])
				return false;
		}

		return true;
	}
	
	async registerClaim(sessionuuid, walletuuid, carduuid, claim) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		if (!walletuuid)
			return Promise.reject('wallet uuid is undefined');
		
		if (!carduuid)
			return Promise.reject('card uuid is undefined');
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);
		
		var wallet = await _apicontrollers.getWalletFromUUID(session, walletuuid);
		
		if (!wallet)
			return Promise.reject('could not find wallet ' + walletuuid);

	
		var card = await wallet.getCardFromUUID(carduuid);
		
		if (!card)
			return Promise.reject('could not find card ' + carduuid);

		let cardsession = await this._getMonitoredCardSession(session, wallet, card);

		// we add an uuid to the claim that will live in multiple txhash
		var claimuuid = cardsession.guid();

		claim.uuid = claimuuid;

		let bounty = await this.fetchBounty(sessionuuid, walletuuid, claim.currencyuuid, claim.bounty);
		var assign_address = this._getBountyAssignAddress(session, bounty);

		var txhash = await this.registerTransaction(sessionuuid, walletuuid, carduuid, claim, assign_address);

		return txhash;
	}

	async updateClaim(sessionuuid, walletuuid, carduuid, claim) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		if (!walletuuid)
			return Promise.reject('wallet uuid is undefined');
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);
		
		var wallet = await _apicontrollers.getWalletFromUUID(session, walletuuid);
	
		if (!wallet)
			return Promise.reject('could not find wallet ' + walletuuid);

		let bounty = await this.fetchBounty(sessionuuid, walletuuid, claim.currencyuuid, claim.bounty);
		var assign_address = this._getBountyAssignAddress(session, bounty);

		
		if (!claim.uuid)
			return Promise.reject('claim has no uuid ' + claim.txhash);
		
		// we work with a full copy registration (newer is the correct record) and not difference (adding modifications)
		var txhash = await this.registerTransaction(sessionuuid, walletuuid, carduuid, claim, assign_address);

		if (txhash) {
			await this.saveClaim(sessionuuid, walletuuid, claim); // note: we have not implemented a modifyClaim function
		}

		return txhash;
	}

	// storage
	async _readClaims(session, keys) {
		var global = this.global;
		var _apicontrollers = this._getClientAPI();
	
		//var claim_list = await _apicontrollers.getLocalJsonLeaf(session, keys, true);
		var claim_list = await this._readClientSideJson(session, keys);
	
		if (!claim_list)
		claim_list = [];

		return claim_list;
	}

	async readClaims(sessionuuid, walletuuid) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();
	
		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);
	
		if (!walletuuid) {
			var keys = ['myquote', 'claims']; 
			// shared keys
		}
		else {
			console.log('WARNING: walletuuid specific case not implemented!!!');
			var keys = ['myquote', 'claims']; 
			// shared keys, otherwise we could look in wallet
			// with mvcmodule.getFromWallet
		}
		
		var claim_list = await this._readClaims(session, keys);

		// we go through the list to see if some 'unhandled yet' claims
		// need to be checked
		var unhandled_claims = [];

		for (var i = 0; i < claim_list.length; i++) {
			if (claim_list[i].status === 0)
				unhandled_claims.push(claim_list[i]);
		}

		// then fetch for each claim (could be speeded up if necessary)
		for (var i = 0; i < unhandled_claims.length; i++) {
			var claim = await this.fetchClaim(sessionuuid, walletuuid, unhandled_claims[i].currencyuuid, unhandled_claims[i].txhash).catch(err => {});

			if (claim && (claim.status !== 0)) {
				await this.saveClaim(sessionuuid, walletuuid, claim);
			}
		}
	
		return claim_list;
	}
	
	async saveClaim(sessionuuid, walletuuid, claim) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');

		var global = this.global;
		var _apicontrollers = this._getClientAPI();
	
		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);

	
		var keys;

		if (!walletuuid) {
			keys = ['myquote', 'claims']; 
			// shared keys
		}
		else {
			console.log('WARNING: walletuuid specific case not implemented!!!');
			keys = ['myquote', 'claims']; 
			// shared keys, also we could put in wallet
			// with mvcmodule.putInWallet
		}		
			
		var claim_list = await this._readClaims(session, keys);
	
		var bInList = false;
		var claim_index;
	
		for (var i = 0; i < claim_list.length; i++) {
			if (claim.txhash && (claim_list[i].txhash == claim.txhash)) {
				bInList = true;
				claim_index = i;
				break;
			}

			// using uuid now to identify claims because of multiple txhash for same entity
			if (claim.uuid && (claim_list[i].uuid == claim.uuid)) {
				bInList = true;
				claim_index = i;
				break;
			}

		}
	
		if (!bInList) {
			// add new element to the list
	
			// claim parameters
			let {uuid, txhash, blocknumber, currencyuuid, owner, bounty, amount, currency, private_submission, answer, status} = claim;
	
			// read bounty to get title
			var pretradescheme_info = await this.getPretradeSchemeInfo(sessionuuid, currencyuuid);
	
			let bountyobject = await this.fetchTransaction(sessionuuid, walletuuid, pretradescheme_info.uuid, bounty)
			.catch(err => {});
			
			let title = (bountyobject ? bountyobject.title : null);
	
			let localjson = {uuid, txhash, blocknumber, currencyuuid, owner, bounty, title, amount, currency, private_submission, answer, status};
	
			localjson.savetime = Date.now();
	
			claim_list.push(localjson);
		}
		else {
			// we update claim at correct index (transfering additional parameters)
			let title = claim_list[claim_index].title;
			let savetime = claim_list[claim_index].savetime;

			claim_list[claim_index] = claim;

			claim_list[claim_index].title = title;
			claim_list[claim_index].savetime = savetime;
		}

		//return _apicontrollers.saveLocalJson(session, keys, claim_list);
		return this._saveClientSideJson(session, keys, claim_list);
	}	

	//
	// Deeds
	//

	async _getMonitoredERC721TokenSession(session, wallet, currency) {
		var global = this.global;
		var _apicontrollers = this._getClientAPI();
		
		var currencyscheme = await this._getCurrencyScheme(session, currency);
		var childsession = await this._getMonitoredSchemeSession(session, wallet, currencyscheme);

		if (currencyscheme.isRemote() === true) {
			// remote (or at least for authkey, we could check that ehtnodeserver is indeed remote)
			var ethnodemodule = global.getModuleObject('ethnode');
			var ethereumnodeaccessinstance = ethnodemodule.getEthereumNodeAccessInstance(childsession);
			// TODO: could be better to use
			// var ethereumnodeaccessinstance = _apicontrollers.getEthereumNodeAccessInstance(childsession);
	
			if (this.contract_path_root_uri && ethereumnodeaccessinstance.web3_setArtifactRootUri) {
				// we set the root uri for contracts in EthereumNodeAccess
				await ethereumnodeaccessinstance.web3_setArtifactRootUri(this.contract_path_root_uri);
			}

		}
		else {
			// local

			// TODO: remove when ethereum_core will use newer web3 version
			// than 1.0.0-beta.34 (e.g. 1.3.5)
			// overload is necessary to be able reading arrays in fetchRecords
/* 			var ethnodemodule = global.getModuleObject('ethnode');
			var EthereumNodeAccess = global.getModuleObject('ethereum-node-access');

			var ethereum_node_access_instance = ethnodemodule.getEthereumNodeAccessInstance(childsession);
			var web3providerurl = ethnodemodule.getWeb3ProviderUrl(childsession);

			var web3_upgraded = childsession.getSessionVariable('ERC721_WEB3_UPGRADED', true);

			if (web3_upgraded !== true) {
				const Web3 = require("web3");
	
				var web3Provider = EthereumNodeAccess.getWeb3Provider(childsession, web3providerurl);
					  
				var web3instance = new Web3(web3Provider);
				web3instance.OVERLOADED_BY_MYDEED = true;
				
				await ethereum_node_access_instance.web3_setProviderUrl(web3providerurl);
				ethereum_node_access_instance.web3instance = web3instance; // overload
				ethereum_node_access_instance.OVERLOADED_BY_MYDEED = true;
		
				// put in session map for this url
				var web3ProviderObject = ethnodemodule.createWeb3ProviderObject(childsession, web3providerurl, ethereum_node_access_instance)
				ethnodemodule.putWeb3ProviderObject(childsession, web3ProviderObject)
				//childsession.web3instancemap[web3providerurl] = web3instance;
	
				childsession.ERC721TOKEN = true;
				childsession.setSessionVariable('ERC721_WEB3_UPGRADED', true);	
			} */
			// END Remove
		}


	
		return childsession;
	}


	// minter
	async _createERC721TokenObject(session, currency, data) {
		// for local contract objects (before deployment)
		var global = this.global;
		var mvcerc721module = global.getModuleObject('mvc-erc721');

		var erc721token = await mvcerc721module.createERC721TokenObject(session, currency, data);

		return erc721token;
	}

	async deployDeedMinter(sessionuuid, walletuuid, currencyuuid, carduuid, minter, feelevel) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		if (!walletuuid)
			return Promise.reject('wallet uuid is undefined');
		
		if (!currencyuuid)
			return Promise.reject('currency uuid is undefined');
		
		if (!carduuid)
			return Promise.reject('card uuid is undefined');
		
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);
		
		var wallet = await _apicontrollers.getWalletFromUUID(session, walletuuid);
		
		if (!wallet)
			return Promise.reject('could not find wallet ' + walletuuid);
	
		var currency = await this.getCurrencyFromUUID(sessionuuid, currencyuuid);

		if (!currency)
			return Promise.reject('could not find currency ' + currencyuuid);
	
		var card = await wallet.getCardFromUUID(carduuid);

		if (!card)
			return Promise.reject('could not find card ' + carduuid);

		
		// get proper session to access erc21token for currency
		var childsession = await this._getMonitoredERC721TokenSession(session, wallet, currency);
			
			
		// create contract object (local)
		var data = Object.create(null);

		data['name'] = minter.name;
		data['symbol'] = minter.symbol;

		data['basetokenuri'] = minter.basetokenuri;

		var erc721token = await this._createERC721TokenObject(childsession, currency, data);

		var fromaccount = card._getSessionAccountObject();
		var from_card_scheme = card.getScheme();

		var ethereumnodeaccessmodule = global.getModuleObject('ethereum-node-access');

		var ethereumtransaction = ethereumnodeaccessmodule.getEthereumTransactionObject(childsession, fromaccount);
		
		// fee
		var fee = await _apicontrollers.createSchemeFee(from_card_scheme, feelevel);

		ethereumtransaction.setGas(fee.gaslimit);
		ethereumtransaction.setGasPrice(fee.gasPrice);

 		var contractaddress = await erc721token.deploy(ethereumtransaction);

		var erc721tokenaddress = erc721token.getAddress();

		if (!erc721tokenaddress)
			return Promise.reject('could not generate a minter for currency ' + currencyuuid);

		minter.address = erc721tokenaddress;
		minter.card_uuid = carduuid;
		minter.card_address = card.getAddress();

		// we save the mapping
		var txhash = await this._putAddressLockerContent(session, wallet, currency, card, erc721tokenaddress);

		minter.txhash = txhash;
	
		return minter;
	}

	async _putAddressLockerContent(session, wallet, currency, card, contentstring) {
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		// get proper session to access erc21token for currency
		var childsession = await this._getMonitoredERC721TokenSession(session, wallet, currency);


		var mvcerc721module = global.getModuleObject('mvc-erc721');

		var fromaccount = card._getSessionAccountObject();
		var from_card_scheme = card.getScheme();

		var ethereumnodeaccessmodule = global.getModuleObject('ethereum-node-access');

		var ethereumtransaction = ethereumnodeaccessmodule.getEthereumTransactionObject(childsession, fromaccount);
		
		// compute feelevel then create fee
		let tx_fee = {};
		tx_fee.transferred_credit_units = 0;
		let minter_cost_units = (currency.deeds_v1.locker_put_cost_units ? parseInt(currency.deeds_v1.locker_put_cost_units) : 2);
		tx_fee.estimated_cost_units = minter_cost_units;

		let _feelevel = await this._getRecommendedFeeLevel(session, wallet, card, tx_fee);

		var fee = await _apicontrollers.createSchemeFee(from_card_scheme, _feelevel);

		ethereumtransaction.setGas(fee.gaslimit);
		ethereumtransaction.setGasPrice(fee.gasPrice);

		return mvcerc721module.putLockerContent(childsession, currency, contentstring, ethereumtransaction);
	}

	async _getAddressLockerContent(session, wallet, currency, card_address) {
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		// get proper session to access erc21token for currency
		var childsession = await this._getMonitoredERC721TokenSession(session, wallet, currency);

		var mvcerc721module = global.getModuleObject('mvc-erc721');

		return mvcerc721module.getLockerContent(childsession, currency, card_address);
	}

	async _fetchDeedMinterFromAddress(session, wallet, currency, minteraddress) {
		// for contract objects already deployed

		if (!minteraddress)
		return Promise.reject('can only instantiate minters already on the chain');

		var global = this.global;

		// get proper session to access erc721token for currency
		var childsession = await this._getMonitoredERC721TokenSession(session, wallet, currency);

		// we read the token elements
		var minter = {address: minteraddress};

		// create contract object (already deployed)
		var data = Object.create(null);
		data['address'] = minteraddress;

		var mvcerc721module = global.getModuleObject('mvc-erc721');

		var erc721token = await mvcerc721module.createERC721TokenObject(childsession, currency, data);

		var name = await erc721token.getChainName();
		var symbol = await erc721token.getChainSymbol();

		minter.name = name;
		minter.symbol = symbol;

		minter.currencyuuid = currency.uuid;
		minter.address = minteraddress;

		return minter;
	}

	async fetchDeedMinterFromAddress(sessionuuid, walletuuid, currencyuuid, minteraddress) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
/* 		if (!walletuuid)
			return Promise.reject('wallet uuid is undefined');
*/	
		if (!currencyuuid)
			return Promise.reject('currency uuid is undefined');
		
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);
		
		var wallet = await _apicontrollers.getWalletFromUUID(session, walletuuid).catch(err => {});
		
/* 		if (!wallet)
			return Promise.reject('could not find wallet ' + walletuuid);
*/
 		var currency = await this.getCurrencyFromUUID(sessionuuid, currencyuuid);

		if (!currency)
			return Promise.reject('could not find currency ' + currencyuuid);
	

		// we read the contract elements
		var minter = await this._fetchDeedMinterFromAddress(session, wallet, currency, minteraddress);

		return minter;
	}

	async fetchDeedMinterFromOwner(sessionuuid, walletuuid, currencyuuid, owneraddress) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
/* 		if (!walletuuid)
			return Promise.reject('wallet uuid is undefined');
*/		
 		if (!currencyuuid)
			return Promise.reject('currency uuid is undefined');
		
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);
		
		var wallet = await _apicontrollers.getWalletFromUUID(session, walletuuid).catch(err => {});
		
/* 		if (!wallet)
			return Promise.reject('could not find wallet ' + walletuuid);
*/
		var currency = await this.getCurrencyFromUUID(sessionuuid, currencyuuid);

		if (!currency)
			return Promise.reject('could not find currency ' + currencyuuid);
	
		var minteraddress = await this._getAddressLockerContent(session, wallet, currency, owneraddress);

		// we read the contract elements
		var minter = await this._fetchDeedMinterFromAddress(session, wallet, currency, minteraddress);

		return minter;
	}

	async fetchDeedMinter(sessionuuid, walletuuid, currencyuuid, carduuid) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		if (!walletuuid)
			return Promise.reject('wallet uuid is undefined');
		
		if (!currencyuuid)
			return Promise.reject('currency uuid is undefined');
		
		if (!carduuid)
			return Promise.reject('card uuid is undefined');
		
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);
		
		var wallet = await _apicontrollers.getWalletFromUUID(session, walletuuid);
		
		if (!wallet)
			return Promise.reject('could not find wallet ' + walletuuid);

		var currency = await this.getCurrencyFromUUID(sessionuuid, currencyuuid);

		if (!currency)
			return Promise.reject('could not find currency ' + currencyuuid);
	
		var card = await wallet.getCardFromUUID(carduuid);

		if (!card)
			return Promise.reject('could not find card ' + carduuid);
	
		var card_address = card.getAddress();
		var erc721tokenaddress = await this._getAddressLockerContent(session, wallet, currency, card_address);

		if (!erc721tokenaddress)
			return; // no minter

		// we read the contract elements
		var minter = await this._fetchDeedMinterFromAddress(session, wallet, currency, erc721tokenaddress);

		// add currency uuid
		minter.currencyuuid = currencyuuid;
		
		// add card info
		minter.card_uuid = carduuid;
		minter.card_address = card_address;

		return minter;
	}

	async _getERC721TokenObject(session, currency, minter) {
		// for contract objects already deployed

		if (!minter || !minter.address)
			return Promise.reject('can only instantiate minters already on the chain');

		var global = this.global;
		var mvcerc721module = global.getModuleObject('mvc-erc721');

		var data = Object.create(null);

		data['address'] = minter.address;
		data['name'] = minter.name;
		data['symbol'] = minter.symbol;

		var erc721token = await mvcerc721module.createERC721TokenObject(session, currency, data);

		return erc721token;
	}

	// deeds
	async readDeeds(sessionuuid, walletuuid) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);

		if (!walletuuid) {
			var keys = ['myquote', 'deeds']; 
			// shared keys
		}
		else {
			console.log('WARNING: walletuuid specific case not implemented!!!');
			var keys = ['myquote', 'deeds']; 
			// shared keys, also we could look in wallet
			// with mvcmodule.getFromWallet
		}
	
		let deed_list = await this._readClientSideJson(session, keys);

		if (!deed_list)
		deed_list = [];

		return deed_list;
	}

	async fetchDeeds(sessionuuid, walletuuid, currencyuuid, minter) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
/* 		if (!walletuuid)
			return Promise.reject('wallet uuid is undefined'); */
		
		if (!currencyuuid)
			return Promise.reject('currency uuid is undefined');
		
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);
		
		var wallet = await _apicontrollers.getWalletFromUUID(session, walletuuid).catch(err => {});
		
/* 		if (!wallet)
			return Promise.reject('could not find wallet ' + walletuuid); */
	
		var currency = await this.getCurrencyFromUUID(sessionuuid, currencyuuid);

		if (!currency)
			return Promise.reject('could not find currency ' + currencyuuid);
	
		var card =  await this._getCurrencyCard(session, wallet, currency);

		if (!card)
			return Promise.reject('could not find currency card for wallet ' + walletuuid);

		// get proper session to access erc21token for currency
		var childsession = await this._getMonitoredERC721TokenSession(session, wallet, currency);
	
		// get contract
		var erc721token = await this._getERC721TokenObject(childsession, currency, minter);

		// list of deeds
		var deeds = [];

		// get totalsupply to get list of tokenids
		const totalsupply = await erc721token.getTotalSupply();

		for (var i = 0; i < totalsupply; i++) {
			var deed =  await this._fetchDeedInfo(currency, erc721token, i);

			deeds.push(deed);
		}

		return deeds;
	}

	async _getMinterCard(session, wallet, currency, minter) {
		var carduuid = minter.card_uuid;
		var card;

		if (wallet && carduuid) {
			// if minter created through getMinter()
			card =  await wallet.getCardFromUUID(carduuid);
	
			if (!card)
				return Promise.reject('could not find card with uuid ' + carduuid);
		}
		else {
			// TODO: find better way to find back card from minter address
			card = await this._getCurrencyCard(session, wallet, currency);
		}

		return card;
	}

	async mintDeed(sessionuuid, walletuuid, currencyuuid, minter, feelevel = null) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		if (!walletuuid)
			return Promise.reject('wallet uuid is undefined');
		
		if (!currencyuuid)
			return Promise.reject('currency uuid is undefined');
		
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);
		
		var wallet = await _apicontrollers.getWalletFromUUID(session, walletuuid);
		
		if (!wallet)
			return Promise.reject('could not find wallet ' + walletuuid);
	
		var currency = await this.getCurrencyFromUUID(sessionuuid, currencyuuid);

		if (!currency)
			return Promise.reject('could not find currency ' + currencyuuid);

		var card = await this._getMinterCard(session, wallet, currency, minter);

		if (!card)
			return Promise.reject('could not find minter card');

		// get proper session to access erc21token for currency
		var childsession = await this._getMonitoredERC721TokenSession(session, wallet, currency);

		// get contract
		var erc721token = await this._getERC721TokenObject(childsession, currency, minter);

		var fromaccount = card._getSessionAccountObject();
		var from_card_scheme = card.getScheme();

		// mint a token item
		var ethereumnodeaccessmodule = global.getModuleObject('ethereum-node-access');

		var ethereumtransaction = ethereumnodeaccessmodule.getEthereumTransactionObject(childsession, fromaccount);
		
		// fee
		var fee = await _apicontrollers.createSchemeFee(from_card_scheme, feelevel);

		ethereumtransaction.setGas(fee.gaslimit);
		ethereumtransaction.setGasPrice(fee.gasPrice);

		// fetch totalsupply
		const totalsupply = await erc721token.getTotalSupply();

		// mint now
		var txhash = await erc721token.mint(fromaccount, ethereumtransaction);

		if (!txhash)
			return Promise.reject('mint of deed did not succeed, no transaction hash returned');

		var deed = {
			type: 'deed',
			currencyuuid,
			minter: minter.address,
			tokenid: totalsupply,
			txhash: 'dd-' + minter.address + '-' + totalsupply,
			metadata: {},
			articles: [],
			clauses: [],
			minthash: txhash
		};

		return deed;
	}

	async saveDeed(sessionuuid, walletuuid, deed) {
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var deed_list = await this.readDeeds(sessionuuid, walletuuid);

		// look not in list
		var bInList = false;

		for (var i = 0; i < deed_list.length; i++) {
			if (deed_list[i].txhash == deed.txhash) {
				bInList = true;
				break;
			}
		}

		if (!bInList) {
			var session = await _apicontrollers.getSessionObject(sessionuuid);
		
			if (!session)
				return Promise.reject('could not find session ' + sessionuuid);

			// deed parameters to be saved
			var txhash = deed.txhash;
			var currencyuuid = deed.currencyuuid;
			var minter = deed.minter;
			var tokenid = deed.tokenid;
			var time = (deed.metadata ? deed.metadata.time : null);
			var title = (deed.metadata ? deed.metadata.title : null);
	
			if (!walletuuid) {
				var keys = ['myquote', 'deeds']; 
				// shared keys
			}
			else {
				console.log('WARNING: walletuuid specific case not implemented!!!');
				var keys = ['myquote', 'deeds']; 
				// shared keys, also we could put in wallet
				// with mvcmodule.putInWallet			
			}
		
			var localjson = {txhash, time, currencyuuid, minter, tokenid, title};

			localjson.savetime = Date.now();

			deed_list.push(localjson);
	
			return this._saveClientSideJson(session, keys, deed_list);
		}
		else {
			return deed_list;
		}
	}

	async _fetchDeedInfo(currency, erc721token, tokenid) {
		// fetch deed info
		var deed = {type: 'deed', tokenid};

		deed.currencyuuid = currency.uuid;

		deed.minter = erc721token.getAddress();
		deed.txhash = 'dd-' + deed.minter + '-' + tokenid;

		deed.tokenuri = await erc721token.getChainTokenURI(tokenid);
		deed.owner = await erc721token.ownerOf(tokenid);
		deed.approved = await erc721token.getApproved(tokenid);

		// fetch records and fill metadata and articles
		deed.metadata = {};
		deed.articles = [];
		deed.clauses = [];

		var stringrecords = await erc721token.fetchRecords(tokenid)
		.catch(err => {
			console.log('error in fetchRecords: ' + err);
		});

		for (var i = 0; i < stringrecords.length; i++) {
			try {
				var clause = JSON.parse(stringrecords[i]);

				clause.type = 'clause';

				clause.currencyuuid = deed.currencyuuid;
				clause.txhash = deed.txhash + '-' + i;

				clause.minter = deed.minter;
				clause.tokenid = tokenid;
				clause.index = i;


				switch(clause.subtype) {
					case 'metadata':
						// overload
						Object.assign(deed.metadata, clause);
						break;
					case 'article':
						// addition
						deed.articles.push(clause);
						break;
					default:
						break;
				}

				deed.clauses.push(clause);
			}
			catch(e) {
				console.log('string record is mal-formed: ' + stringrecords[i]);
			}
		}

		return deed;
	}

	async fetchDeed(sessionuuid, walletuuid, currencyuuid, minter, tokenid) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
/* 		if (!walletuuid)
			return Promise.reject('wallet uuid is undefined'); */
		
		if (!currencyuuid)
			return Promise.reject('currency uuid is undefined');
		
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);
		
		var wallet = await _apicontrollers.getWalletFromUUID(session, walletuuid).catch(err => {});
		
/* 		if (!wallet)
			return Promise.reject('could not find wallet ' + walletuuid); */
	
		var currency = await this.getCurrencyFromUUID(sessionuuid, currencyuuid);

		if (!currency)
			return Promise.reject('could not find currency ' + currencyuuid);
	
		// get proper session to access erc21token for currency
		var childsession = await this._getMonitoredERC721TokenSession(session, wallet, currency);
	
		// get contract
		var erc721token = await this._getERC721TokenObject(childsession, currency, minter);

		// fetch deed info
		var deed = await this._fetchDeedInfo(currency, erc721token, tokenid);

		// save this deed in the local list
		await this.saveDeed(sessionuuid, walletuuid, deed);

		return deed;
	}

	async fetchLastDeed(sessionuuid, walletuuid, currencyuuid, minter) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
/* 		if (!walletuuid)
			return Promise.reject('wallet uuid is undefined'); */
		
		if (!currencyuuid)
			return Promise.reject('currency uuid is undefined');
		
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);
		
		var wallet = await _apicontrollers.getWalletFromUUID(session, walletuuid).catch(err => {});
		
/* 		if (!wallet)
			return Promise.reject('could not find wallet ' + walletuuid); */
	
		var currency = await this.getCurrencyFromUUID(sessionuuid, currencyuuid);

		if (!currency)
			return Promise.reject('could not find currency ' + currencyuuid);
	
		// get proper session to access erc21token for currency
		var childsession = await this._getMonitoredERC721TokenSession(session, wallet, currency);
	
		// get contract
		var erc721token = await this._getERC721TokenObject(childsession, currency, minter);

		// fetch totalsupply
		const totalsupply = await erc721token.getTotalSupply();
		const lasttokenid = totalsupply - 1;

		return this.fetchDeed(sessionuuid, walletuuid, currencyuuid, minter, lasttokenid);
	}

	async isCardOwningDeed(sessionuuid, walletuuid, currencyuuid, carduuid, minter, deed) {
		var owningcardinfo = await this.getDeedOwningCard(sessionuuid, walletuuid, currencyuuid, minter, deed).catch(err => {});

		if (!owningcardinfo)
			return false;

		if (owningcardinfo.uuid == carduuid)
		return true;
		else
		return false;
	}

	// TODO: clean the calls to getDeedOwningCard and _getDeedOwningCard
	async _getDeedOwningCard(session, wallet, currency, minter, deed) {
		var sessionuuid = session.getSessionUUID();
		var walletuuid = wallet.getWalletUUID();
		var currencyuuid = currency.uuid;
		var address = deed.owner;

		var cardinfo = await this.getCurrencyCardWithAddress(sessionuuid, walletuuid, currencyuuid, address).catch(err => {});

		if (!cardinfo)
			return;

		return await wallet.getCardFromUUID(cardinfo.uuid);
	}

	

	async getDeedOwningCard(sessionuuid, walletuuid, currencyuuid, minter, deed) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		if (!walletuuid)
			return Promise.reject('wallet uuid is undefined');
		
		if (!currencyuuid)
			return Promise.reject('currency uuid is undefined');
		
		var global = this.global;
		var mvcmodule = global.getModuleObject('mvc');
		var _apicontrollers = this._getClientAPI();
	
		var session = await _apicontrollers.getSessionObject(sessionuuid);
	
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);

		var wallet = await _apicontrollers.getWalletFromUUID(session, walletuuid).catch(err => {});
	
		if (!wallet)
			return;

		var currency = await this.getCurrencyFromUUID(sessionuuid, currencyuuid);

		if (!currency)
			return Promise.reject('could not find currency ' + currencyuuid);
	
		var address = deed.owner;

		var cardinfo = await this.getCurrencyCardWithAddress(sessionuuid, walletuuid, currencyuuid, address).catch(err => {});

		if (!cardinfo)
			return;

		// look if we have the private key or it's read-only
		var _privatekey = await this.getCardPrivateKey(sessionuuid, walletuuid, cardinfo.uuid);

		if (_privatekey)
		return cardinfo;
	}


	async transferDeed(sessionuuid, walletuuid, currencyuuid, minter, deed, toaddress, feelevel = null) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		if (!walletuuid)
			return Promise.reject('wallet uuid is undefined');
		
		if (!currencyuuid)
			return Promise.reject('currency uuid is undefined');
		
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);
		
		var wallet = await _apicontrollers.getWalletFromUUID(session, walletuuid);
		
		if (!wallet)
			return Promise.reject('could not find wallet ' + walletuuid);
	
		var currency = await this.getCurrencyFromUUID(sessionuuid, currencyuuid);

		if (!currency)
			return Promise.reject('could not find currency ' + currencyuuid);
	
		// get card owning this deed
		var card = await this._getDeedOwningCard(session, wallet, currency, minter, deed);

		if (!card)
			return Promise.reject('could not find minter card');
		
		// get proper session to access erc21token for currency
		var childsession = await this._getMonitoredERC721TokenSession(session, wallet, currency);
	
		// get contract
		var erc721token = await this._getERC721TokenObject(childsession, currency, minter);

		// sender and recipient
		var fromaccount = card._getSessionAccountObject();
		var from_card_scheme = card.getScheme();

		var toaccount = childsession.createBlankAccountObject();

		toaccount.setAddress(toaddress);

		// transfer

		var ethereumnodeaccessmodule = global.getModuleObject('ethereum-node-access');

		var ethereumtransaction = ethereumnodeaccessmodule.getEthereumTransactionObject(childsession, fromaccount);
		
		// fee
		var fee = await _apicontrollers.createSchemeFee(from_card_scheme, feelevel);

		ethereumtransaction.setGas(fee.gaslimit);
		ethereumtransaction.setGasPrice(fee.gasPrice);

		var tokenid = deed.tokenid;
		
		// TODO: uncomment for @p2pmoney-org/ethereum_erc721 > 0.20.16
		//var _Buffer = this._getBufferClass();
		//var deed_data_str = (deed.data ? JSON.stringify(deed.data) : '{}');
		//var deed_data_buf = _Buffer.from(deed_data_str, 'utf8'); // not used while using @p2pmoney-org/ethereum_core ver 0.20.10

		//var txhhash = await erc721token.safeTransferFrom(fromaccount, toaccount, tokenid, deed_data_buf, ethereumtransaction);

		var txhhash = await erc721token.transferFrom(fromaccount, toaccount, tokenid, ethereumtransaction);
	
		return txhhash;
	}



	async registerClause(sessionuuid, walletuuid, currencyuuid, minter, deed, clause, feelevel = null) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		if (!walletuuid)
			return Promise.reject('wallet uuid is undefined');
		
		if (!currencyuuid)
			return Promise.reject('currency uuid is undefined');
		
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);
		
		var wallet = await _apicontrollers.getWalletFromUUID(session, walletuuid);
		
		if (!wallet)
			return Promise.reject('could not find wallet ' + walletuuid);
	
		var currency = await this.getCurrencyFromUUID(sessionuuid, currencyuuid);

		if (!currency)
			return Promise.reject('could not find currency ' + currencyuuid);
	
		var card;
		if (deed.owner) {
			// clause can be added by a subsequent owner different from the creator
			card = await this._getDeedOwningCard(session, wallet, currency, minter, deed);
		}
		else {
			// we are creating the deed and probably adding the first metadata clause
			card = await this._getMinterCard(session, wallet, currency, minter);
		}

		if (!card)
			return Promise.reject('could not find minter card');
	
		// get proper session to access erc21token for currency
		var childsession = await this._getMonitoredERC721TokenSession(session, wallet, currency);
	
		// get contract
		var erc721token = await this._getERC721TokenObject(childsession, currency, minter);

		var tokenid = deed.tokenid;

		var contentstring = JSON.stringify(clause);

		var ethereumnodeaccessmodule = global.getModuleObject('ethereum-node-access');

		var fromaccount = card._getSessionAccountObject();
		var from_card_scheme = card.getScheme();

		var ethereumtransaction = ethereumnodeaccessmodule.getEthereumTransactionObject(childsession, fromaccount);
		
		// fee
		var fee = await _apicontrollers.createSchemeFee(from_card_scheme, feelevel);

		ethereumtransaction.setGas(fee.gaslimit);
		ethereumtransaction.setGasPrice(fee.gasPrice);

		const txhash = await erc721token.registerRecord(tokenid, contentstring, ethereumtransaction);

		return txhash;
	}
	

	
	//
	// Quotes
	//

	async readQuotes(sessionuuid, walletuuid) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);

		if (!walletuuid) {
			var keys = ['myquote', 'quotes']; 
			// shared keys
		}
		else {
			console.log('WARNING: walletuuid specific case not implemented!!!');
			var keys = ['myquote', 'quotes']; 
			// shared keys, also we could look in wallet
			// with mvcmodule.getFromWallet
		}
	
		//let quote_list = await _apicontrollers.getLocalJsonLeaf(session, keys, true);
		let quote_list = await this._readClientSideJson(session, keys);

		if (!quote_list)
			quote_list = [];

		return quote_list;
	}

	async fetchQuotes(sessionuuid, walletuuid, currencyuuid, vendor_address) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);
			
		var wallet = await _apicontrollers.getWalletFromUUID(session, walletuuid).catch(err => {});
			
		var currency = await this.getCurrencyFromUUID(sessionuuid, currencyuuid);
	
		if (!currency)
			return Promise.reject('could not find currency ' + currencyuuid);

		if (!currency.pretrade_explorer_url)
			return Promise.reject('no explorer for currency ' + currencyuuid);


		// use explorer to fetch transactions for vendor's address
		var transactions = await this._getAddressPretradeTransactions(session, wallet, currency, vendor_address);

		// we filter quotes
		var quotelist = [];
		
		for (var i = 0; i < (transactions ? transactions.length : 0); i++) {
			var tx = transactions[i];

			var dataobject = {};

			this._fillTransactionDataObject(dataobject, tx);

			if ((dataobject.type == 'quote') && (dataobject.owner == vendor_address)) {
				//await this.saveQuote(sessionuuid, null, dataobject);

				quotelist.push(dataobject);
			}
		}

		return quotelist;
	}

	async saveQuote(sessionuuid, walletuuid, quote) {
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var quote_list = await this.readQuotes(sessionuuid, walletuuid);

		// look not in list
		var bInList = false;

		for (var i = 0; i < quote_list.length; i++) {
			if (quote_list[i].txhash == quote.txhash) {
				bInList = true;
				break;
			}
		}

		if (!bInList) {
			var session = await _apicontrollers.getSessionObject(sessionuuid);
		
			if (!session)
				return Promise.reject('could not find session ' + sessionuuid);

			// quote parameters to be saved
			var {txhash, blocknumber, currencyuuid, owner, title, amount, currency} = quote;
	
			if (!walletuuid) {
				var keys = ['myquote', 'quotes']; 
				// shared keys
			}
			else {
				console.log('WARNING: walletuuid specific case not implemented!!!');
				var keys = ['myquote', 'quotes']; 
				// shared keys, also we could put in wallet
				// with mvcmodule.putInWallet			
			}
		
			var localjson = {txhash, blocknumber, currencyuuid, owner, title, amount, currency};

			localjson.savetime = Date.now();

			quote_list.push(localjson);
	
			//return _apicontrollers.saveLocalJson(session, keys, quote_list);
			return this._saveClientSideJson(session, keys, quote_list);
		}
		else {
			return quote_list;
		}
	}

	async readOrders(sessionuuid, walletuuid) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);

		if (!walletuuid) {
			var keys = ['myquote', 'orders']; 
			// shared keys
		}
		else {
			console.log('WARNING: walletuuid specific case not implemented!!!');
			var keys = ['myquote', 'orders']; 
			// shared keys, otherwise we could look in wallet
			// with mvcmodule.getFromWallet
		}
		
		//let order_list = await _apicontrollers.getLocalJsonLeaf(session, keys, true);
		let order_list = await this._readClientSideJson(session, keys);

		if (!order_list)
		order_list = [];

		return order_list;
	}

	async fetchOrders(sessionuuid, walletuuid, currencyuuid, quotehash) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);

		var wallet = await _apicontrollers.getWalletFromUUID(session, walletuuid).catch(err => {});
			
		var currency = await this.getCurrencyFromUUID(sessionuuid, currencyuuid);
	
		if (!currency)
			return Promise.reject('could not find currency ' + currencyuuid);

		if (!currency.pretrade_explorer_url)
			return Promise.reject('no explorer for currency ' + currencyuuid);

		// read quote
		var quote = await this.fetchCurrencyTransaction(sessionuuid, walletuuid, currencyuuid, quotehash);
		var vendor_address = quote.owner;

		// use explorer to fetch transactions for vendor's address
		var transactions = await this._getAddressPretradeTransactions(session, wallet, currency, vendor_address);

		// we filter orders
		var orderlist = [];
		
		for (var i = 0; i < (transactions ? transactions.length : 0); i++) {
			var tx = transactions[i];

			var dataobject = {};

			this._fillTransactionDataObject(dataobject, tx);

			if ((dataobject.type == 'order') && (dataobject.quote == quotehash)) {
				//await this.saveOrder(sessionuuid, null, dataobject);

				orderlist.push(dataobject);
			}
		}

		return orderlist;
	}

	async scanNextBlockForOrders(sessionuuid, walletuuid, currencyuuid, quotehash, blockshift) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);
			
		
		var keys = ['myquote', 'scan', 'orders', quotehash]; 

		//let scan = await _apicontrollers.getLocalJsonLeaf(session, keys);
		let scan = await this._readClientSideJson(session, keys);

		if (!scan)
			scan = {};
			
		var quote = await this.fetchCurrencyTransaction(sessionuuid, walletuuid, currencyuuid, quotehash);
		var new_orders = [];

		// get a childsession on currency pretrade web3provider
		var pretradeweb3rurl = await this.getPretradeWeb3Url(sessionuuid, currencyuuid);
		var childsession = await this._getChildSessionOnWeb3Url(session, pretradeweb3rurl);

		// scan
		const current_blocknumber = await _apicontrollers.readCurrentBlockNumber(childsession)

		var start_block_number = (scan.last_block_number ? scan.last_block_number : quote.blocknumber) + 1;
		var last_block_number = (start_block_number + blockshift <  current_blocknumber ? start_block_number + blockshift : current_blocknumber );

		var ordernum = (scan.ordernum ? scan.ordernum : 0);

		// read transactions for each block
		var ethereumnodeaccessmodule = global.getModuleObject('ethereum-node-access');
		var ethereumnodeaccessinstance = ethereumnodeaccessmodule.getEthereumNodeAccessInstance(childsession)
		// TODO: could be better to use
		// var ethereumnodeaccessinstance = _apicontrollers.getEthereumNodeAccessInstance(childsession);

		for (var blocknumber = start_block_number; blocknumber < last_block_number + 1; blocknumber++) {
			//console.log('reading block ' + blocknumber);
			//var transactions = await _apicontrollers.readBlockTransactions(childsession, blocknumber);
 			var block = await new Promise((resolve, reject) => {
				ethereumnodeaccessinstance.web3_getBlock(blocknumber, true,  (err, res) => {if (err) reject(err); else resolve(res);});
			})
			.catch(err => {
				console.log('error in scanNextBlockForOrders: ' + err);
			});
			var transactions = block.transactions;
 
			for (var i = 0; i < (transactions ? transactions.length : 0); i++) {
				var tx = transactions[i];

				// fake ethchainreader
				tx.input_decoded_utf8 = ethereumnodeaccessmodule.web3ToUTF8(childsession, tx.input);
				tx.block = {}
				tx.block.blocknumber = tx.blockNumber;
				tx.block.timestamp = tx.timeStamp;

				var dataobject = {};

				this._fillTransactionDataObject(dataobject, tx);

				console.log('found one transaction at ' + blocknumber);

				if (dataobject.type == 'order') {
					await this.saveOrder(sessionuuid, null, dataobject);

					new_orders.push(dataobject);

					ordernum++
				}
			}
		}

		// save where we are
		scan.last_block_number = last_block_number;
		scan.ordernum = ordernum;

		//await _apicontrollers.saveLocalJson(session, keys, scan);
		await this._saveClientSideJson(session, keys, scan);

		return new_orders;
	}

	async saveOrder(sessionuuid, walletuuid, order) {
		var global = this.global;
		var _apicontrollers = this._getClientAPI();


		var order_list = await this.readOrders(sessionuuid, walletuuid);

		var bInList = false;

		for (var i = 0; i < order_list.length; i++) {
			if (order_list[i].txhash == order.txhash) {
				bInList = true;
				break;
			}
		}

		if (!bInList) {
			var session = await _apicontrollers.getSessionObject(sessionuuid);
		
			if (!session)
				return Promise.reject('could not find session ' + sessionuuid);
	
			// order parameters
			let {txhash, blocknumber, currencyuuid, owner, quote, amount, currency, hadfunds} = order;

			// read quote to get title
			var pretradescheme_info = await this.getPretradeSchemeInfo(sessionuuid, currencyuuid);

			let quoteobject = await this.fetchTransaction(sessionuuid, walletuuid, pretradescheme_info.uuid, quote)
			.catch(err => {});
			
			let title = (quoteobject ? quoteobject.title : null);
			
			if (!walletuuid) {
				var keys = ['myquote', 'orders']; 
				// shared keys
			}
			else {
				console.log('WARNING: walletuuid specific case not implemented!!!');
				var keys = ['myquote', 'orders']; 
				// shared keys, also we could put in wallet
				// with mvcmodule.putInWallet
			}
	
			let localjson = {txhash, blocknumber, currencyuuid, owner, quote, title, amount, currency, hadfunds};

			localjson.savetime = Date.now();

			order_list.push(localjson);

			//return _apicontrollers.saveLocalJson(session, keys, order_list);
			return this._saveClientSideJson(session, keys, order_list);
		}
		else {
			return order_list;
		}
	}

	async readInvoices(sessionuuid, walletuuid) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);

		if (!walletuuid) {
			var keys = ['myquote', 'invoices']; 
			// shared keys
		}
		else {
			console.log('WARNING: walletuuid specific case not implemented!!!');
			var keys = ['myquote', 'invoices']; 
			// shared keys, otherwise we could look in wallet
			// with mvcmodule.getFromWallet
		}
		
		//let invoice_list = await _apicontrollers.getLocalJsonLeaf(session, keys, true);
		let invoice_list = await this._readClientSideJson(session, keys);

		if (!invoice_list)
		invoice_list = [];

		return invoice_list;
	}

	async fetchInvoices(sessionuuid, walletuuid, currencyuuid, orderhash) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);

		var wallet = await _apicontrollers.getWalletFromUUID(session, walletuuid).catch(err => {});
			
		var currency = await this.getCurrencyFromUUID(sessionuuid, currencyuuid);
	
		if (!currency)
			return Promise.reject('could not find currency ' + currencyuuid);

		if (!currency.pretrade_explorer_url)
			return Promise.reject('no explorer for currency ' + currencyuuid);

		// read order
		var order = await this.fetchCurrencyTransaction(sessionuuid, walletuuid, currencyuuid, orderhash);
		var buyer_address = order.owner;

		// use explorer to fetch transactions for buyer's address
		var transactions = await this._getAddressPretradeTransactions(session, wallet, currency, buyer_address);

		// we filter invoices
		var invoicelist = [];
		
		for (var i = 0; i < (transactions ? transactions.length : 0); i++) {
			var tx = transactions[i];

			var dataobject = {};

			this._fillTransactionDataObject(dataobject, tx);

			if ((dataobject.type == 'invoice') && (dataobject.order == orderhash)) {
				//await this.saveInvoice(sessionuuid, null, dataobject);

				invoicelist.push(dataobject);
			}
		}

		return invoicelist;
	}

	async saveInvoice(sessionuuid, walletuuid, invoice) {
		var global = this.global;
		var _apicontrollers = this._getClientAPI();


		var invoice_list = await this.readInvoices(sessionuuid, walletuuid);

		var bInList = false;

		for (var i = 0; i < invoice_list.length; i++) {
			if (invoice_list[i].txhash == invoice.txhash) {
				bInList = true;
				break;
			}
		}

		if (!bInList) {
			var session = await _apicontrollers.getSessionObject(sessionuuid);
		
			if (!session)
				return Promise.reject('could not find session ' + sessionuuid);
	
			// invoice parameters
			let {txhash, blocknumber, currencyuuid, owner, order, amount, currency} = invoice;

			// read order and quote to get title
			var pretradescheme_info = await this.getPretradeSchemeInfo(sessionuuid, currencyuuid);

			let orderobject = await this.fetchTransaction(sessionuuid, walletuuid, pretradescheme_info.uuid, order)
			.catch(err => {});

			let quoteobject = await this.fetchTransaction(sessionuuid, walletuuid, pretradescheme_info.uuid, orderobject.quote)
			.catch(err => {});
			
			let title = (quoteobject ? quoteobject.title : null);
			
			if (!walletuuid) {
				var keys = ['myquote', 'invoices']; 
				// shared keys
			}
			else {
				console.log('WARNING: walletuuid specific case not implemented!!!');
				var keys = ['myquote', 'invoices']; 
				// shared keys, also we could put in wallet
				// with mvcmodule.putInWallet
			}
	
			let localjson = {txhash, blocknumber, currencyuuid, owner, order, title, amount, currency};

			localjson.savetime = Date.now();

			invoice_list.push(localjson);

			//return _apicontrollers.saveLocalJson(session, keys, invoice_list);
			return this._saveClientSideJson(session, keys, invoice_list);
		}
		else {
			return invoice_list;
		}
	}
	
	async readPaymentNotices(sessionuuid, walletuuid) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);

		if (!walletuuid) {
			var keys = ['myquote', 'paymentnotices']; 
			// shared keys
		}
		else {
			console.log('WARNING: walletuuid specific case not implemented!!!');
			var keys = ['myquote', 'paymentnotices']; 
			// shared keys, otherwise we could look in wallet
			// with mvcmodule.getFromWallet
		}
		
		//let paymentnotice_list = await _apicontrollers.getLocalJsonLeaf(session, keys, true);
		let paymentnotice_list = await this._readClientSideJson(session, keys);

		if (!paymentnotice_list)
		paymentnotice_list = [];

		return paymentnotice_list;
	}

	async fetchPaymentNotices(sessionuuid, walletuuid, currencyuuid, invoicehash) {
		if (!sessionuuid)
			return Promise.reject('session uuid is undefined');
		
		var global = this.global;
		var _apicontrollers = this._getClientAPI();

		var session = await _apicontrollers.getSessionObject(sessionuuid);
		
		if (!session)
			return Promise.reject('could not find session ' + sessionuuid);

		var wallet = await _apicontrollers.getWalletFromUUID(session, walletuuid).catch(err => {});
			
		var currency = await this.getCurrencyFromUUID(sessionuuid, currencyuuid);
	
		if (!currency)
			return Promise.reject('could not find currency ' + currencyuuid);

		if (!currency.pretrade_explorer_url)
			return Promise.reject('no explorer for currency ' + currencyuuid);

		// read invoice
		var invoice = await this.fetchCurrencyTransaction(sessionuuid, walletuuid, currencyuuid, invoicehash);
		var vendor_address = invoice.owner;

		// use explorer to fetch transactions for vendor's address
		var transactions = await this._getAddressPretradeTransactions(session, wallet, currency, vendor_address);

		// we filter payment notices
		var paymentnoticelist = [];
		
		for (var i = 0; i < (transactions ? transactions.length : 0); i++) {
			var tx = transactions[i];

			var dataobject = {};

			this._fillTransactionDataObject(dataobject, tx);

			if ((dataobject.type == 'paymentnotice') && (dataobject.invoice == invoicehash)) {
				//await this.savePaymentNotice(sessionuuid, null, dataobject);

				paymentnoticelist.push(dataobject);
			}
		}

		return paymentnoticelist;
	}

	async savePaymentNotice(sessionuuid, walletuuid, paymentnotice) {
		var global = this.global;
		var _apicontrollers = this._getClientAPI();


		var paymentnotice_list = await this.readPaymentNotices(sessionuuid, walletuuid);

		var bInList = false;

		for (var i = 0; i < paymentnotice_list.length; i++) {
			if (paymentnotice_list[i].txhash == paymentnotice.txhash) {
				bInList = true;
				break;
			}
		}

		if (!bInList) {
			var session = await _apicontrollers.getSessionObject(sessionuuid);
		
			if (!session)
				return Promise.reject('could not find session ' + sessionuuid);
	
			// paymentnotice parameters
			let {txhash, blocknumber, currencyuuid, owner, invoice, amount, currency} = paymentnotice;

			// read invoice, order and quote to get title
			var pretradescheme_info = await this.getPretradeSchemeInfo(sessionuuid, currencyuuid);

			let invoiceobject = await this.fetchTransaction(sessionuuid, walletuuid, pretradescheme_info.uuid, invoice)
			.catch(err => {});

			let orderobject = await this.fetchTransaction(sessionuuid, walletuuid, pretradescheme_info.uuid, invoiceobject.order)
			.catch(err => {});

			let quoteobject = await this.fetchTransaction(sessionuuid, walletuuid, pretradescheme_info.uuid, orderobject.quote)
			.catch(err => {});
			
			let title = (quoteobject ? quoteobject.title : null);
			
			if (!walletuuid) {
				var keys = ['myquote', 'paymentnotices']; 
				// shared keys
			}
			else {
				console.log('WARNING: walletuuid specific case not implemented!!!');
				var keys = ['myquote', 'paymentnotices']; 
				// shared keys, also we could put in wallet
				// with mvcmodule.putInWallet
			}
	
			let localjson = {txhash, blocknumber, currencyuuid, owner, invoice, title, amount, currency};

			localjson.savetime = Date.now();

			paymentnotice_list.push(localjson);

			//return _apicontrollers.saveLocalJson(session, keys, paymentnotice_list);
			return this._saveClientSideJson(session, keys, paymentnotice_list);
		}
		else {
			return paymentnotice_list;
		}
	}
	
	async _saveTransactionObject(sessionuuid, walletuuid, tx) {
		if (!tx)
			return;

		switch (tx.type) {
			case 'bounty':
				return this.saveBounty(sessionuuid, walletuuid, tx);

			case 'claim':
				return this.saveClaim(sessionuuid, walletuuid, tx);

			case 'quote':
				return this.saveQuote(sessionuuid, walletuuid, tx);

			case 'order':
				return this.saveOrder(sessionuuid, walletuuid, tx);

			case 'invoice':
				return this.saveInvoice(sessionuuid, walletuuid, tx);

			case 'paymentnotice':
				return this.savePaymentNotice(sessionuuid, walletuuid, tx);

			default:
				break;
		}
	}

	//
	// uniswap
	//

	async getPriceForCreditUnits(sessionuuid, currencyuuid, creditunits) {
		var global = this.global;
		
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies.getPriceForCreditUnits(sessionuuid, currencyuuid, creditunits);
	}

	async buyCreditUnits(sessionuuid, walletuuid, carduuid, currencyuuid, creditunits, feelevel = null) {
		var global = this.global;
		
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies.buyCreditUnits(sessionuuid, walletuuid, carduuid, currencyuuid, creditunits, feelevel);
	}

	//
	// utils
	//


	async getDecimalAmount(sessionuuid, amount, decimals = 18) {
		var global = this.global;
		
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies.getDecimalAmount(sessionuuid, amount, decimals);
	}

	async getCurrencyAmount(sessionuuid, currencyuuid, amount) {
		var global = this.global;
		
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies.getCurrencyAmount(sessionuuid, currencyuuid, amount);
	}
	
	async formatCurrencyAmount(sessionuuid, currencyuuid, currencyamount, options) {
		var global = this.global;
		
		var mvccurrencies = global.getModuleObject('mvc-currencies');

		return mvccurrencies.formatCurrencyAmount(sessionuuid, currencyuuid, currencyamount, options);
	}

	formatDate(unixdate, format) {
		var global = this.global;
		var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
		return mvcclientwalletmodule.formatDate(unixdate, format);
	}
	
	fitString(str, maxlength) {
		var global = this.global;
		var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
		return mvcclientwalletmodule.fitString(str, maxlength);
	}


}

if ( (typeof GlobalClass === 'undefined') || (!GlobalClass)) {
	var GlobalClass = ((typeof window !== 'undefined') && window && window.simplestore && window.simplestore.Global ? window.simplestore.Global : null);
}

if ( typeof GlobalClass !== 'undefined' && GlobalClass ) {
	GlobalClass.getGlobalObject().registerModuleObject(new Module());

	//dependencies
	GlobalClass.getGlobalObject().registerModuleDepency('mvc-myquote', 'common');
	GlobalClass.getGlobalObject().registerModuleDepency('mvc-myquote', 'mvc');

	// module classes	
	//GlobalClass.registerModuleClass('mvc-myquote', 'DecimalAmount', DecimalAmount);
	//GlobalClass.registerModuleClass('mvc-myquote', 'CurrencyAmount', CurrencyAmount);
}


