console.log('loading web-client.js');


class WebClient {
	constructor() {
		this.name = 'webclient';
		
		this.global = null; // put by global on registration
		this.isready = false;
		this.isloading = false;

		this.globalscope = window;
		
		this.execution_env = ( (typeof WebClient.EXEC_ENV !== 'undefined') ? WebClient.EXEC_ENV : 'prod');
		
		var WebClientConfig = require('./webclient-config.js').default;

		if ((WebClientConfig.execution_env == 'dev') || (this.execution_env == 'dev')) {
			this.execution_env = 'dev';
		}

		this.WebClientConfig = WebClientConfig;

		var WebClientControllers = require('./control/controllers.js').default;
		
		this.webclientcontrollers = WebClientControllers.getObject();
		
		this.webclientcontrollers.module = this;

		this.namespace = null; // e.g. to load config from sub-folder

		this.currencies = null;
	}

	_getJQueryClass() {
		if (typeof window !== 'undefined' && window && (typeof window.simplestore !== 'undefined'))
		  return window.simplestore.jQuery;
		else if ((typeof global !== 'undefined') && (typeof global.simplestore !== 'undefined'))
			return global.simplestore.jQuery;
		else
		throw 'can not find JQuery class!!!';
	}

	async _loadExternalJSON(jsonfile) {
		// note: works only for properly formed json files content
		var _$ = this._getJQueryClass();

		var data = await new Promise((resolve, reject) => { 
			_$.getJSON(jsonfile, function(res) {
				if (res) resolve(res); else reject('no data');
			})
			.catch(err => {
				console.log('exception in _loadExternal: ' + err);
				reject('no data');
			});
		})
		.catch(err => {
			console.log('exception in _loadExternal: ' + err);
		});

		return data;
	}

	async setNameSpace(namespace) {
		this.namespace = namespace;
	}

	async loadConfig(configname) {
		var jsonfile = './config/' + (this.namespace ? this.namespace + '/'  : '') + configname + '.json';

		var config_json = await this._loadExternalJSON(jsonfile).catch(err => {});

		return config_json;
	}
	
	async init() {
		console.log('WebClient.init called');
		console.log('module init called for ' + this.name);
		
		try {
			var _globalscope = this.globalscope;

			var webclientcontrollers_init = await this.webclientcontrollers.init()
			.catch((err) => {
				console.log('error initializing web client controllers: ' + err);
			});
			
			console.log('webclient controllers initialized');			
			
			// end of all initialization
			var Bootstrap = _globalscope.simplestore.Bootstrap;
			var ScriptLoader = _globalscope.simplestore.ScriptLoader;

			var bootstrapobject = Bootstrap.getBootstrapObject();
			var rootscriptloader = ScriptLoader.getRootScriptLoader();
			
			// ethereum_core is now set
			var clientglobal = _globalscope.simplestore.Global.getGlobalObject();
			
			// register this module
			clientglobal.registerModuleObject(this);

			// ethereum_core config
			var clientglobal = _globalscope.simplestore.Global.getGlobalObject();
			var CoreConfig = _globalscope.simplestore.Config;
			
			var XtraConfig = _globalscope.simplestore.Config.XtraConfig;
			
			if (!XtraConfig.instance)
				XtraConfig.instance = new XtraConfig();
			
			// client config
			var WebClientConfig = this.WebClientConfig;
			
			// put in simple store for easier access
			_globalscope.simplestore.WebClientConfig = WebClientConfig;

			var clientapicontrollers = this.getClientAPI();

			// get session object
			var session = clientapicontrollers.getCurrentSessionObject();


			if (this.execution_env == 'dev') {

				// loading dev environment config
				var webclient_config_dev = await this.loadConfig('webclient-config-dev').catch(err => {});

				if (webclient_config_dev) {
					Object.assign(WebClientConfig, webclient_config_dev);
				}

				clientglobal.setExecutionEnvironment('dev');
				
				// we call this.webclientcontrollers._initdev to simplify debugging
				await this.webclientcontrollers._initdev();
			}

			//
			// memory environment
			//
	
			
			var xtraconfigmodule = clientglobal.getModuleObject('xtraconfig');
			
			// activate/deactivate xtraconfig module
			if (typeof WebClientConfig.xtraconfigmodule_activate !== 'undefined') {
				xtraconfigmodule.activation(WebClientConfig.xtraconfigmodule_activate);

				// activate/deactivate overload of access
				if (typeof WebClientConfig.xtraconfigmodule_ethnode_activate !== 'undefined')
				xtraconfigmodule.overloadEthereumNodeAccess(WebClientConfig.xtraconfigmodule_ethnode_activate);
				if (typeof WebClientConfig.xtraconfigmodule_storage_activate !== 'undefined')
				xtraconfigmodule.overloadStorageAccess(WebClientConfig.xtraconfigmodule_storage_activate);
				
			}
			
			// authkey
			var authkeymodule = clientglobal.getModuleObject('authkey');
		
			// activate/deactivate authkey module
			if (typeof WebClientConfig.authkeymodule_activate !== 'undefined')
			authkeymodule.activation(WebClientConfig.authkeymodule_activate);

			// oauth2
			var oauth2module = clientglobal.getModuleObject('oauth2');
		
			// activate/deactivate oauth2 module
			if (typeof WebClientConfig.oauth2module_activate !== 'undefined')
			oauth2module.activation(WebClientConfig.oauth2module_activate);


			
			// load currencies
			
			var currencies = this.getCurrencies(); // built-in

			// additional currencies for webapp
			var webapp_currencies = await this.loadConfig('currencies-webapp')
			.catch(err => {
				console.log('WebClient.init error loading webapp currencies: ' + err);
			});

			if (webapp_currencies) {
				var array = Object.keys(webapp_currencies);

				for (var i = 0; i < (array ? array.length : 0); i++) {
					var key = array[i];
					var currency = webapp_currencies[key];

					currencies[key] = currency;
				}
			}

			// local currencies for the user
			var currenciesmodule = clientglobal.getModuleObject('currencies');

			var local_currencies = await currenciesmodule.readLocalCurrencies(session)
			.catch(err => {
				console.log('WebClient.init error reading local currencies: ' + err);
			});

			if (local_currencies) {
				for (var i = 0; i < (local_currencies ? local_currencies.length : 0); i++) {
					var key = local_currencies[i].uuid;

					currencies[key] = local_currencies[i];
				}
			}
			
			// if execution env is dev, we setup a testing environment
			if (this.execution_env == 'dev') {
				await this.initdev();
				await this.echotest();
			}

			// we fill currencies in the currencies module

			if (currenciesmodule) {
				var currencies_array = Object.values(currencies);
	
				for (var i = 0; i < currencies_array.length; i++) {
					currenciesmodule.addCurrency(currencies_array[i]);
				}
			}
			else {
				console.log('Warning: you must load currencies module before calling WebClient.init');
			}
			
			//signal end of mobile load
			rootscriptloader.signalEvent('on_mobile_load_end');
			
			this.isready = true;			
			
			return true;
		}
		catch(e) {
			console.log('exception in WebClient.init: ' + e);
		}	
	}

	async initprod(bForce) {
		console.log('WebClient.initprod called');
		
		
		try {
			var WebClientConfig = this.WebClientConfig;
			
			console.log('WebClient.initprod starting for ' + this.execution_env + 'execution environment');

			var clientapicontrollers = this.getClientAPI();
			
			// get session object
			var session = clientapicontrollers.getCurrentSessionObject();
			
			//
			// storage (webapp) environment
			//
			var webapp_schemes = await this.loadConfig('schemes-webapp')
			.catch(err => {
				console.log('WebClient.initprod error loading webapp schemes: ' + err);
			});

			if (webapp_schemes) {
				var network_list = Object.values(webapp_schemes);
				console.log('WebClient.initprod starting adding prod schemes');
				for (var i = 0; i < network_list.length; i++) {
					var prodnetwork = network_list[i];
					prodnetwork.xtra_data = (prodnetwork.xtra_data ? prodnetwork.xtra_data : {});
					prodnetwork.xtra_data.origin = 'prod-config';
					var scheme = await clientapicontrollers.createScheme(session, prodnetwork);
				}
			}

			
			//
			// storage (site) environment
			//

			// look in https://domain.server.ext/config
			
			//
			// create built-in schemes
			//
			
			console.log('WebClient.initprod creating schemes');
			
			//
			// create schemes from built-in networks
			//
/* 			
			// local
			var _builtin_local_networks = this.getBuiltinLocalNetworks();
			if (_builtin_local_networks) {
				var network_list = Object.values(_builtin_local_networks);
				console.log('WebClient.initprod starting creating schemes from local networks');
				for (var i = 0; i < network_list.length; i++) {
					var prodnetwork = network_list[i];
					prodnetwork.xtra_data = (prodnetwork.xtra_data ? prodnetwork.xtra_data : {});
					prodnetwork.xtra_data.origin = 'prod-network-built-in';
					var scheme = await clientapicontrollers.createScheme(session, prodnetwork);
				}
			}
			
			// remote
			var _builtin_remote_networks = this.getBuiltinRemoteNetworks()
			if (_builtin_remote_networks) {
				var network_list = Object.values(_builtin_remote_networks);
				console.log('WebClient.initprod starting creating schemes from remote networks');
				for (var i = 0; i < network_list.length; i++) {
					var prodnetwork = network_list[i];
					prodnetwork.xtra_data = (prodnetwork.xtra_data ? prodnetwork.xtra_data : {});
					prodnetwork.xtra_data.origin = 'prod-network-built-in';
					var scheme = await clientapicontrollers.createScheme(session, prodnetwork);
				}
			}
 */			
			
			//
			// import schemes from servers
			//
			if (WebClientConfig.builtin_scheme_list_servers) {
				console.log('WebClient.initprod starting calling scheme list servers');
				for (var i = 0; i < WebClientConfig.builtin_scheme_list_servers.length; i++) {
					var scheme_server = WebClientConfig.builtin_scheme_list_servers[i];
					
					console.log('WebClient.initprod calling scheme list server: ' + scheme_server.name);
					var jsonarray = await clientapicontrollers.http_get_json(session, scheme_server.url)
					.catch(err => { jsonarray = null;});
					
					console.log('WebClient.initprod starting calling scheme list servers');
					var network_list = (jsonarray && jsonarray.data ? jsonarray.data : null);
					for (var j = 0; j < (network_list ? network_list.length : 0); j++) {
						var prodnetwork = network_list[j];
						prodnetwork.xtra_data = (prodnetwork.xtra_data ? prodnetwork.xtra_data : {});
						prodnetwork.xtra_data.origin = 'prod-server-import';
						var scheme = await clientapicontrollers.createScheme(session, prodnetwork);
					}
				}

			}

			//
			// create schemes from built-in schemes
			//

			// local schemes
			var _builtin_local_schemes = this.getBuiltinLocalSchemes()
			if (_builtin_local_schemes) {
				var network_list = Object.values(_builtin_local_schemes);
				console.log('WebClient.initprod starting creating local schemes');
				for (var i = 0; i < network_list.length; i++) {
					var prodnetwork = network_list[i];
					prodnetwork.xtra_data = (prodnetwork.xtra_data ? prodnetwork.xtra_data : {});
					prodnetwork.xtra_data.origin = 'prod-local-built-in';
					var scheme = await clientapicontrollers.createScheme(session, prodnetwork);
				}
			}

			// remote schemes
			var _builtin_remote_schemes = this.getBuiltinRemoteSchemes();
			if (_builtin_remote_schemes) {
				var network_list = Object.values(_builtin_remote_schemes);
				console.log('WebClient.initprod starting creating remote schemes');
				for (var i = 0; i < network_list.length; i++) {
					var prodnetwork = network_list[i];
					prodnetwork.xtra_data = (prodnetwork.xtra_data ? prodnetwork.xtra_data : {});
					prodnetwork.xtra_data.origin = 'prod-remote-built-in';
					var scheme = await clientapicontrollers.createScheme(session, prodnetwork);
				}
			}

			return true;
		}
		catch(e) {
			console.log('exception in WebClient.initprod: ' + e);
		}
	}

	
	async initdev(bForce) {
		console.log('WebClient.initdev called');
		
		try {
			var WebClientConfig = this.WebClientConfig;
			
			var clientapicontrollers = this.getClientAPI();
			
			// get session object
			var session = clientapicontrollers.getCurrentSessionObject();


			//
			// memory environment
			//

			// load additional currencies if any
			var currencies = this.getCurrencies();

			// additional currencies for dev
			var dev_currencies = await this.loadConfig('currencies-dev')
			.catch(err => {
				console.log('WebClient.initdev error loading dev currencies: ' + err);
			});

			if (dev_currencies) {
				var array = Object.keys(dev_currencies);

				for (var i = 0; i < (array ? array.length : 0); i++) {
					var key = array[i];
					var currency = dev_currencies[key];

					currencies[key] = currency;
				}
			}

			//
			// storage (webapp) environment
			//

			// add dev schemes to localstorage, if any
			var dev_schemes = await this.loadConfig('schemes-dev')
			.catch(err => {
				console.log('WebClient.initdev error loading dev schemes: ' + err);
			});

			if (dev_schemes) {
				var network_list = Object.values(dev_schemes);
				console.log('WebClient.initdev starting adding dev schemes');
				for (var i = 0; i < network_list.length; i++) {
					var prodnetwork = network_list[i];
					prodnetwork.xtra_data = (prodnetwork.xtra_data ? prodnetwork.xtra_data : {});
					prodnetwork.xtra_data.origin = 'dev-config';
					var scheme = await clientapicontrollers.createScheme(session, prodnetwork);
				}
			}

			//
			// storage (site) environment
			//

			// look in https://domain.server.ext/config




			// STOP if init of complete dev storage environment not required

			if ((WebClientConfig.initdev !== true) && (bForce !== true))
				return;

			console.log('WebClient.initdev starting for ' + this.execution_env + ' execution environment');

			// clear LocalStorage
			const error = this._clearWebLocalStorage();
			console.log('LocalStorage' + (error ? ' cleared successfully' : ' NOT cleared because of error: ' + error));

			//
			// import schemes from remote server
			// 
			console.log('WebClient.initdev importing schemes');
			if (WebClientConfig.remoteschemes) {
				console.log('WebClient.initdev starting importing schemes');
				for (var i = 0; i < WebClientConfig.remoteschemes.length; i++) {
					var importurl = WebClientConfig.remoteschemes[i].importurl;
					
					var imported = await clientapicontrollers.importScheme(session, importurl);
				}
			}
			
			//
			// create schemes
			//
			console.log('WebClient.initdev creating schemes');
			if (WebClientConfig.testnetworks) {
				console.log('WebClient.initdev starting creating schemes');
				for (var i = 0; i < WebClientConfig.testnetworks.length; i++) {
					var testnetwork = WebClientConfig.testnetworks[i];
					prodnetwork.xtra_data = (prodnetwork.xtra_data ? prodnetwork.xtra_data : {});
					prodnetwork.xtra_data.origin = 'dev-built-in';
					var scheme = await clientapicontrollers.createScheme(session, testnetwork);
				}
			}
			
			//
			// create contacts
			//
			console.log('WebClient.initdev creating contacts');
			var accountarray = WebClientConfig.testaccounts;
			
			if (accountarray) {
				for (var i = 0; i < accountarray.length; i++) {
					var accnt = accountarray[i];
					var address = accnt.address;
					var name = accnt.description;
					var label = accnt.description;
					var contactinfo = {label: label};
					
					var contact = await clientapicontrollers.createContact(session, name, address, contactinfo);
				}
			}
			
			//
			// create local vaults and wallets
			//
			var creations = [];
			if (WebClientConfig.testvaults && (WebClientConfig.testvaults.length > 0)) {
				console.log('WebClient.initdev creating vaults');
				
				// create all the local test vaults
				for (var i = 0; i < WebClientConfig.testvaults.length; i++) {
					var vaultname = WebClientConfig.testvaults[i].name;
					var passphrase = WebClientConfig.testvaults[i].passphrase;
					
					var creation = await clientapicontrollers.createVault(session, vaultname, passphrase);
					
					creations[i] = creation;
				}	
				
				// go back to first vault
				creation = creations[0];
				
				if (creation) {
					console.log('WebClient.initdev creating environment for first vault');
					var vaultname = WebClientConfig.testvaults[0].name;
					var passphrase = WebClientConfig.testvaults[0].passphrase;
					
					// local storage on the client
					console.log('WebClient.initdev creating client tokens & accounts for first vault');
					
					// create a local session and
					// impersonate as a vault to save tokens and accounts under 'shared'
					var vaultsession = clientapicontrollers.createBlankSessionObject();
					var vaultnetworkconfig = clientapicontrollers.getDefaultSchemeConfig(0);
					
					//vaultnetworkconfig.ethnodeserver.web3_provider_url = (WebClientConfig.testnetworks[0] ? WebClientConfig.testnetworks[0].ethnodeserver.web3_provider_url : null);
					
					await clientapicontrollers.setSessionNetworkConfig(vaultsession, vaultnetworkconfig);
					
					var vault = await clientapicontrollers.openVault(vaultsession, vaultname, passphrase);
					if (vault) {
						clientapicontrollers.impersonateVault(vaultsession, vault);
						
						// create tokens
						console.log('WebClient.initdev storing local client tokens for first vault');
						var tokenarray = WebClientConfig.testtokens;
						
						if (tokenarray) {
							for (var i = 0; i < tokenarray.length; i++) {
								var tkn = tokenarray[i];
								var tokenaddress = tkn.address;
								
								var web3providerurl = tkn.web3providerurl;
								var description = tkn.description;
								var tokenuuid = tkn.uuid;
								
								var token = clientapicontrollers.importERC20Token(vaultsession, tokenaddress);
								
								if (web3providerurl) token.setWeb3ProviderUrl(web3providerurl);
								if (description) token.setLocalDescription(description);
								if (tokenuuid) token.uuid = tokenuuid;
								
								// we save this token
								await clientapicontrollers.saveERC20Token(vaultsession, token);
							}	
						}
						
						// create accounts
						console.log('WebClient.initdev storing local accounts for first vault');
						var accountarray = WebClientConfig.testaccounts;
						
						if (accountarray) {
							for (var i = 0; i < accountarray.length; i++) {
								var accnt = accountarray[i];
								var address = accnt.address;
								var privatekey = accnt.private_key;
								var description = accnt.description;
								
								var account = clientapicontrollers.createAccountObject(vaultsession, address, privatekey);
								
								account.setDescription(description);
								
								session.addAccountObject(account);
								
								// we save this account
								await clientapicontrollers.saveAccountObject(vaultsession, account);
							}
						}
						
						clientapicontrollers.disconnectVault(vaultsession, vault);
					}
					
					// store remote user credentials
					var userarray = WebClientConfig.testusers;
					
					if (userarray) {
						var key = 'credentials';
						var value = userarray;
						
						await clientapicontrollers.putInVault(session, vaultname, key, value)
						.catch((err) => {
							console.log('error storing credentials in vault ' + vaultname);
						});
					}
				}
				
			} // if (WebClientConfig.testvaults
		
			
			//
			// create local wallets
			//
			if (WebClientConfig.localwallets && (WebClientConfig.localwallets.length > 0)) {
				console.log('WebClient.initdev creating wallets');
				// reset creations
				creations = [];
				
				//
				// create all the local test wallets
				// (which will have a vault name based on their uuid)
				for (var i = 0; i < WebClientConfig.localwallets.length; i++) {
					var walletname = WebClientConfig.localwallets[i].name;
					var passphrase = WebClientConfig.localwallets[i].passphrase;
					
					var creation = await clientapicontrollers.createWallet(session, walletname, passphrase);
					
					creations[i] = creation;
				}
				
				// go back to first wallet
				creation = creations[0];
				
				if (creation) {
					console.log('WebClient.initdev creating environment for first wallet');
					var walletname = WebClientConfig.localwallets[0].name;
					var passphrase = WebClientConfig.localwallets[0].passphrase;
					

					// wallet
					var wallet = await clientapicontrollers.openWallet(session, walletname, passphrase);
					
					if (wallet) {
						// get wallet's local session and
						// save tokens and accounts under 'shared'
						var walletsession = wallet._getSession();
						
						
						// tokens and account stored on the client
						// for client cards
						console.log('WebClient.initdev creating client tokens & accounts for first wallet');
						

						// create tokens
						console.log('WebClient.initdev storing local client tokens for first wallet');
						var tokenarray = WebClientConfig.testtokens;
						
						if (tokenarray) {
							for (var i = 0; i < tokenarray.length; i++) {
								var tkn = tokenarray[i];
								var tokenaddress = tkn.address;
								
								var web3providerurl = tkn.web3providerurl;
								var description = tkn.description;
								var tokenuuid = tkn.uuid;
								
								var token = clientapicontrollers.importERC20Token(walletsession, tokenaddress);
								
								if (web3providerurl) token.setWeb3ProviderUrl(web3providerurl);
								if (description) token.setLocalDescription(description);
								if (tokenuuid) token.uuid = tokenuuid;
								
								// we save this token
								await clientapicontrollers.saveERC20Token(walletsession, token);
							}	
						}
						
						// create accounts
						console.log('WebClient.initdev storing local accounts for first wallet');
						var accountarray = WebClientConfig.testaccounts;
						
						if (accountarray) {
							for (var i = 0; i < accountarray.length; i++) {
								var accnt = accountarray[i];
								var address = accnt.address;
								var privatekey = accnt.private_key;
								var description = accnt.description;
								
								var account = clientapicontrollers.createAccountObject(walletsession, address, privatekey);
								
								account.setDescription(description);
								
								walletsession.addAccountObject(account);
								walletsession.user.addAccountObject(account);
								
								// we save this account
								await clientapicontrollers.saveAccountObject(walletsession, account);
							}
						}

						//
						// local cards
						//
						if (WebClientConfig.testnetworks && WebClientConfig.localtestaccounts) {
							console.log('WebClient.initdev creating local cards');

							// create a card in the wallet for each test account
							// for each local test scheme
							for (var i = 0; i < WebClientConfig.testnetworks.length; i++) {
								var scheme = await clientapicontrollers.getSchemeFromUUID(session, WebClientConfig.testnetworks[i].uuid);
								
								if ((scheme) && (!scheme.isRemote())) {
									for (var j = 0; j < WebClientConfig.localtestaccounts.length; j++) {
										var testaccount = WebClientConfig.localtestaccounts[j];
										var _cardname = testaccount.description;
										var _cardlabel = testaccount.description + '-on-' + scheme.getName();
										var _address = testaccount.address;
									
										var card = await wallet.createCard(scheme, _cardname, null, _address)
										.catch((err) => {
											console.log('error while creating local card ' + _cardname + ': ' + err);
										});
										
										if (card) {
											card.setLabel(_cardlabel);
											await card.save();
											
											// create local tokens
											for (var k = 0; k < WebClientConfig.localtesttokens; k++) {
												var tkn = WebClientConfig.localtesttokens[k];
												
												var token = card.getTokenObject(tkn.address);
												
												var tokenaccount = await card.createTokenAccount(tkn);
												await tokenaccount.init();
												
												tokenaccount.setDescription(tkn.description);
												
												await tokenaccount.save();
												
											}
										}
									}
								}
									
							} // for (var i = 0; i < WebClientConfig.testnetworks.length; i++) 

						} // if (WebClientConfig.testnetworks && WebClientConfig.localtestaccounts)
						
						//
						// remote cards
						//
						
						// remote user credentials
						var userarray = WebClientConfig.remotetestusers;
						
						if (userarray) {

							// create a card in the wallet for each test user
							// for each remote test scheme
							if (WebClientConfig.testnetworks && WebClientConfig.testaccounts && WebClientConfig.testaccounts[0] && WebClientConfig.testaccounts[0].address) {
								console.log('WebClient.initdev creating remote cards');
								var default_address = WebClientConfig.testaccounts[0].address; // default address to use

								for (var i = 0; i < WebClientConfig.testnetworks.length; i++) {
									var scheme = await clientapicontrollers.getSchemeFromUUID(session, WebClientConfig.testnetworks[i].uuid);
									
									if (scheme) {
										if (scheme.isRemote()) {
											var networkconfig = scheme.getNetworkConfig();
											
											for (var j = 0; j < userarray.length; j++) {
												var usercredentials = userarray[j];
												
												// create card if we can authenticate
												var blanksession = await clientapicontrollers.createNetworkSession(networkconfig);
												
												var canauthenticate = await clientapicontrollers.authenticate(blanksession, usercredentials.username, usercredentials.password);
												
												if (canauthenticate) {
													var sessionaccounts = await clientapicontrollers.getSessionAccountObjects(blanksession, true);
													var _address = default_address;
													
													if (sessionaccounts) {
														// we create one card for each personal account
														for (var k = 0; k < sessionaccounts.length; k++) {
															var _cardlabel = usercredentials.username + '-on-' + scheme.getName()
															_address = sessionaccounts[k].getAddress();
														
															var card = await wallet.createCard(scheme, usercredentials.username, usercredentials.password, _address)
															.catch((err) => {
																console.log('error while creating remote card ' + usercredentials.username + ': ' + err);
															});
															
															if (card) {
																card.setLabel(_cardlabel);
																
																await card.save();
															}
														}
														
													} //if (sessionaccounts)
														
												} //if (canauthenticate)
											} // for (var j = 0; j < userarray.length
										}
										/*else {
											// local client card
											if (accountarray) {
												for (var i = 0; i < accountarray.length; i++) {
													var accnt = accountarray[i];
													var description = accnt.description;
													var _address = accnt.address;
													
													var card = await wallet.createCard(scheme, description, null, _address)
													.catch((err) => {
														console.log('error while creating card ' + description + ': ' + err);
													});
												}
											}
										}*/
									}
									else {
										console.log('error: could not find scheme with uuid ' + WebClientConfig.testnetworks[i].uuid);
									}
								} //for (var i = 0; i < WebClientConfig.testnetworks.length; i++)
							} // if (WebClientConfig.testnetworks && WebClientConfig.testaccounts && WebClientConfig.testaccounts[0] && WebClientConfig.testaccounts[0].address)
						} // if (userarray)
						
						
						
						// create token accounts
						// and store them
						console.log('WebClient.initdev creating token accounts for cards of first wallet');
						var cards = await wallet.getCardList(true);
						
						// put in every card
						for (var i = 0; i < cards.length; i++) {
							var card = cards[i];
							
							if (card.isLocked()) {
								await card.unlock();
							}
							
							var tokenarray = await card.getTokenList(true);
							
							if (tokenarray) {
								for (var j = 0; j < tokenarray.length; j++) {
									var tkn = tokenarray[j];
									var tokenaddress = tkn.getAddress();
									var description = tkn.getAddress();
									
									var tokenaccount = await card.createTokenAccount(tkn);
									
									//tokenaccount.setLabel(description);
								}	
							}
						}

						

						
						// close wallet
						clientapicontrollers.closeWallet(session, wallet);
					} // if (wallet)
					
				} //if (creation[0)
			
			
				//
				// import remote wallets from remote server
				// 
				console.log('WebClient.initdev importing remote wallets');
				if (WebClientConfig.remotewallets) {
					for (var i = 0; i < WebClientConfig.remotewallets.length; i++) {
						var username = WebClientConfig.remotewallets[i].username;
						var password = WebClientConfig.remotewallets[i].password;
						var importurl = WebClientConfig.remotewallets[i].importurl;
						
						var imported = await clientapicontrollers.importWallet(session, importurl, username, password);
					}
				}



			}

			console.log('WebClient.initdev successfully finished initialization of dev environment');

			return true;
		}
		catch(e) {
			console.log('exception in WebClient.initdev: ' + e);
			console.log(e.stack);
		}
		
		console.log('WebClient.initdev end');
	}


	// compulsory  module functions
	loadModule(parentscriptloader, callback) {
		console.log('loadModule called for module ' + this.name);
		
		if (this.isloading)
			return;
			
		this.isloading = true;

		var self = this;

		var modulescriptloader = parentscriptloader.getChildLoader('webclientmoduleloader');

		modulescriptloader.load_scripts(function() { 
			//self.init(); // init is called by index.js
			if (callback) callback(null, self); 
		});

		return modulescriptloader;	
	}
	
	isReady() {
		return this.isready;
	}

	hasLoadStarted() {
		return this.isloading;
	}

	// optional  module functions
	registerHooks() {
		console.log('module registerHooks called for ' + this.name);
		
		var global = this.global;
		
		global.registerHook('cleanSessionContext_hook', this.name, this.cleanSessionContext_hook);
		
		global.registerHook('getDefaultSchemeConfig_hook', this.name, this.getDefaultSchemeConfig_hook);
	}
	
	postRegisterModule() {
		console.log('postRegisterModule called for ' + this.name);
		if (!this.isloading) {
			var global = this.global;
			var self = this;
			var rootscriptloader = global.getRootScriptLoader();
			
			this.loadModule(rootscriptloader, () => {
				if (this.registerHooks)
				this.registerHooks();
			});
		}
	}

	getDefaultSchemeConfig_hook(result, params) {
		console.log('getDefaultSchemeConfig_hook called for ' + this.name);
		
		var global = this.global;
		
		var schemeconfig = params[0];
		var flag = params[1];
		
		switch(flag) {
			case 1:
				var WebClientConfig = this.WebClientConfig;
				
				var default_config = WebClientConfig.default_remote_network_config;
				
				if (default_config) {
					if (!schemeconfig.restserver) default_config.restserver = {};
					
					if (default_config.restserver) {
						schemeconfig.restserver.activate = default_config.restserver.activate;
						schemeconfig.restserver.rest_server_url = default_config.restserver.rest_server_url;
						schemeconfig.restserver.rest_server_api_path = default_config.restserver.rest_server_api_path;
					}
					
					if (!schemeconfig.authserver) schemeconfig.restserver = {};
					
					if (default_config.authserver) {
						schemeconfig.authserver.activate = default_config.authserver.activate;
						schemeconfig.authserver.rest_server_url = default_config.authserver.rest_server_url;
						schemeconfig.authserver.rest_server_api_path = default_config.authserver.rest_server_api_path;
					}
					
					if (!schemeconfig.keyserver) schemeconfig.restserver = {};
					
					if (default_config.keyserver) {
						schemeconfig.keyserver.activate = default_config.keyserver.activate;
						schemeconfig.keyserver.rest_server_url = default_config.keyserver.rest_server_url;
						schemeconfig.keyserver.rest_server_api_path = default_config.keyserver.rest_server_api_path;
					}
				}
				


				break;
				
			default:
				break;

		}
		
		result.push({module: this.name, handled: true});
		
		return true;
	}

	cleanSessionContext_hook(result, params) {
		console.log('cleanSessionContext_hook called for ' + this.name);
		
		var global = this.global;
		
		var session = params[0];
		
		// we clean the child sessions
		var clientapicontrollers = this.getClientAPI();
		clientapicontrollers.cleanChildSessionObjects(session);
		
		result.push({module: this.name, handled: true});
		
		return true;
	}


	// web functions
	getWebControllers() {
		return this.webclientcontrollers;
	}
	
	getClientControllers() {
		return this.webclientcontrollers;
	}

	getClientAPI() {
		var webclientcontrollers = this.webclientcontrollers;
		var clientapicontrollers = webclientcontrollers.getClientControllers();

		return clientapicontrollers;
	}

	getBuiltinCurrencies() {
		if (this.namespace) {
			// we do not load built-in currenciers
			return {};
		}
		else {
			return require('./currencies.js').default;
		}
	}

	getCurrencies() {
		if (this.currencies)
			return this.currencies;

		this.currencies = this.getBuiltinCurrencies();

		return this.currencies;
	}

	getCurrency(currencyuuid) {
		var currencies = this.getCurrencies();

		var array = Object.values(currencies);

		for (var i = 0; i < (array ? array.length : 0); i++) {
			if (array[i].uuid === currencyuuid)
				return array[i];
		}

	}

	getCurrencyProvider(session, currencyuuid) {
		var currency = this.getCurrency(currencyuuid);

		if (currency && currency.provider) {
			var Provider = require('./providers/' + currency.provider).default;
			var provider = new Provider(session, currency);

			return provider;
		}
	}

	getBuiltinLocalSchemes() {
		return this.WebClientConfig.builtin_local_schemes;
	}

	getBuiltinRemoteSchemes() {
		return this.WebClientConfig.builtin_remote_schemes;
	}

	getBuiltinLocalNetworks() {
		return this.WebClientConfig.builtin_local_networks;
	}
	
	getBuiltinRemoteNetworks() {
		return this.WebClientConfig.builtin_remote_networks;
	}

	getDefaultRemoteNetwork() {
		return this.WebClientConfig.default_remote_network_config;
	}
	
	// web local storage
	async _clearWebLocalStorage() {
		
		if (this.execution_env != 'dev') {
			return Promise.reject('can not clear LocalStorage in an execution environment other than dev!');
		}

		try {
			localStorage.clear();
		}
		catch(e) {
			return Promise.reject('error clearing LocalStorage');
		}

		return true;
	}
	
	getExecutionEnvironment() {
		if (this.execution_env)
			return this.execution_env;
		else
			return 'prod';
	}

	getClientConfig() {
		return this.WebClientConfig;
	}
	
	echo(string) {
		console.log('ECHO: ' + string);
	}

	async echotest() {
		console.log('WebClient.echotest called');
		
		try {
			// we could do some testing for validating prod initialization
			if (this.getExecutionEnvironment() != 'dev')
				return; 
			
			var WebClientConfig = this.WebClientConfig;

			if (WebClientConfig.echotestdev !== true)
				return;

			console.log('Executing WebClient.echotest for dev execution environment');

			var clientapicontrollers = this.getClientAPI();
			
			var topsession = clientapicontrollers.getCurrentSessionObject();

			this.echo('top session uuid is ' + topsession.getSessionUUID());
				
			var localsession = clientapicontrollers.createChildSessionObject(topsession);
			var remotesession = clientapicontrollers.createChildSessionObject(topsession);

			//
			// session check for local/remote
			//
			if (WebClientConfig.authkeymodule_activate === true) {
				// we switch to a session authenticated on remote server
				
				if (WebClientConfig.testusers) {
					var username = WebClientConfig.testusers[0].username;
					var password = WebClientConfig.testusers[0].password;
					var networkuuid = WebClientConfig.testusers[0].networkuuid;

					var networks =  WebClientConfig.testnetworks;
					var network;
					
					for (var i = 0; i < (networks ? networks.length : 0); i++) {
						if (networkuuid === networks[i].uuid) {
							network = networks[i];
							break;
						}
					}
					
					if (network) {
						await clientapicontrollers.setSessionNetworkConfig(remotesession, network);
					
						await clientapicontrollers.authenticate(remotesession, username, password);
					}
					
					this.echo('switch to authenticated remote session ' + (remotesession ? (remotesession.isAnonymous() ? 'NOT successful' : 'successful') : 'not created'));
				}
			}
			
			//
			// ERC20
			//

			// get list of tokens
			const tokenarray = await clientapicontrollers.getERC20TokenList(remotesession, true);
			
			this.echo('list of tokens contains ' + (tokenarray && tokenarray.length ? tokenarray.length : 0) + ' element(s)');
	
			
			
			//
			// ethnode
			//
			
			// web3 node info
			/*clientapicontrollers.getNodeInfo(remotesession, (err, nodeinfo)  => {
				this.echo('is listening: ' + nodeinfo.islistening);
			});*/
			
			// current block number
			const blocknumber = await clientapicontrollers.readCurrentBlockNumber(remotesession)
			.catch((err) => {
				this.echo('error: ' + err);
			});
			
			this.echo('current block number is: ' + blocknumber);

			
			// transaction
			if (WebClientConfig.testtransactions && WebClientConfig.testtransactions[0]) {
				// using ethchainreader
				var txhash = WebClientConfig.testtransactions[0].hash;
				
				const tx = await clientapicontrollers.readTransaction(remotesession, txhash)
				.catch((err) => {
					this.echo('error: ' + err);
				});
				
				this.echo('transaction data is: ' + (tx && tx.input_decoded_utf8 ? tx.input_decoded_utf8 : null));
				
				if (tx) {
					var data = await tx.getTransactionReceiptData()
					.catch((err) => {
						this.echo('error: ' + err);
					});
					
					var data2 = (data ? {blockNumber: data.blockNumber} : null);
					var datastring = (data2 ? JSON.stringify(data2) : null);
					this.echo('transaction receipt data is: ' + datastring);
				}
				
				//using ethnode

				// ethereum node access
				const tx2 = await clientapicontrollers.getEthereumTransaction(remotesession, txhash)
				.catch((err) => {
					this.echo('error: ' + err);
				});	
				
				this.echo('transaction data is: ' + (tx2 ? tx2.data_decoded_utf8 : null));

				if (tx2) {
					var data = await clientapicontrollers.getEthereumTransactionReceipt(remotesession, txhash)
					.catch((err) => {
						this.echo('error: ' + err);
					});
					
					var data2 = (data ? {blockNumber: data.blockNumber} : null);
					var datastring = (data2 ? JSON.stringify(data2) : null);
					this.echo('transaction receipt data is: ' + datastring);
				}
			}
			
			
			// test accounts
			if (WebClientConfig.testaccounts && WebClientConfig.testaccounts[0] && WebClientConfig.testaccounts[1]) {
				var address = WebClientConfig.testaccounts[0].address;

				// web 3 account balance
				const balance = await clientapicontrollers.getEthAddressBalance(remotesession, address)
				.catch((err) => {
					this.echo('error: ' + err);
				});
				
				this.echo(address + ' balance is: ' + balance);
				
				
				// tokens
				if (WebClientConfig.testtokens) {

					// token position

					for (var i = 0; i < WebClientConfig.testtokens.length; i++) {
						var tokenaddress = WebClientConfig.testtokens[i].address;
						var providerurl = WebClientConfig.testtokens[i].web3providerurl;

						const position = await clientapicontrollers.getAddressERC20Position(remotesession, providerurl, tokenaddress, address)
						.catch((err) => {
							console.log('error: ' + err);
						});
						
						this.echo(address + ' position is: ' + position);
					}
				
				}
	

				// creating transaction with data
				/*
				var fromaccount = remotesession.createBlankAccountObject();;
				var fromprivatekey = WebClientConfig.testaccounts[0].private_key;
				
				var data = JSON.stringify({text: 'the fox jumps over the lazy dog'});
				
				fromaccount.setPrivateKey(fromprivatekey);
				
				var transaction = clientapicontrollers.createEthereumTransaction(remotesession, fromaccount);
				
				var fee = clientapicontrollers.createFee();
				
				transaction.setToAddress(address);
				transaction.setValue(0);
				transaction.setGas(fee.gaslimit);
				transaction.setGasPrice(fee.gasPrice);
				
				transaction.setData(data);
				
				const txwithdata = await clientapicontrollers.sendEthereumTransaction(remotesession, transaction)
				.catch((err) => {
					this.echo('error: ' + err);
				});
				
				if (!txwithdata)
					this.echo('error in sendTransaction');
				else
					this.echo('sendTransaction returned: ' + txwithdata);
				 */
			}
			
		}
		catch(e) {
			this.echo('exception in WebClient.echotest: ' + e);
			console.log(e.stack);
		}	


		
	}


	
	static getObject() {
		if (WebClient.webclient)
			return WebClient.webclient;
		
		WebClient.webclient = new WebClient();

		return WebClient.webclient;
	}
}

//module.exports = WebClient;
// Note: webpack does not handle well import on module.exports
export default WebClient;
