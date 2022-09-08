'use strict';

var react_pwa;

class React_PWA {
	constructor() {
		this.load = null;
		
		this.initializing = false;
		this.initialized = false;
		
		this.initializationpromise = null;
		
		var Ethereum_core = require('@p2pmoney-org/ethereum_core');
		//var Ethereum_core = require('../../@p2pmoney-org/ethereum_core');
		
		this.ethereum_core = Ethereum_core.getObject();

		var PrimusMoney_react_client_wallet = require('@primusmoney/react_client_wallet');
		//var PrimusMoney_react_client_wallet = require('../../@primusmoney/react_client_wallet');
		
		this.primus_react_client_wallet = PrimusMoney_react_client_wallet.getObject();
	}
	
	getVersion() {
		var packagejson = require('./package.json');
		return packagejson.version;
	}
	
	async init(callback) {
		console.log('@primusmoney/react_pwa init called');
		
		if (this.initialized) {
			console.log('module @primusmoney/react_pwa is already initialized.');
			return true;
		}
		
		if (this.initializing ) {
			console.log('module @primusmoney/react_pwa is already initializing. Wait till it\'s ready.');
			return this.initializationpromise;
		}

		// @primusmoney dependencies
		var primus_react_client_wallet = this.primus_react_client_wallet;	

		if (primus_react_client_wallet.initialized === false) {
			await primus_react_client_wallet.init();
		}

		
		
		// create loader
		if (typeof window !== 'undefined') {
			if (typeof document !== 'undefined' && document ) {
				// we are in a browser
				console.log('loading for browser');
				
				var BrowserLoad = require( './js/browser-load.js').default; // BrowserLoad does export instead of module.export

				this.load = new BrowserLoad(this);
			}
			else {
				// we are in react-native
				console.log('loading for react-native');
				
				var ReactNativeLoad = require( './js/react-native-load.js');

				this.load = new ReactNativeLoad(this);
			}	
		}
		else if (typeof global !== 'undefined') {
			console.log('loading for nodejs');
			
			// we are in nodejs
			var NodeLoad = require( './js/node-load.js');
			
			this.load = new NodeLoad(this);
		}

		var self = this;
		var promise;
		
		if (this.initializing === false) {

			this.initializationpromise = new Promise(function (resolve, reject) {
				self.load.init(function() {
				console.log('@primusmoney/react_pwa init finished');
				self.initialized = true;
				
				if (callback)
					callback(null, true);
				
				resolve(true);
				});
			});
			
			this.initializing = true;
			
		}
		
		return this.initializationpromise;
	}
	
	getGlobalObject() {
		if (typeof window !== 'undefined') {
			// we are in a browser or react-native
			return window.simplestore.Global.getGlobalObject();
		}
		else if (typeof global !== 'undefined') {
			// we are in nodejs
			return global.simplestore.Global.getGlobalObject();
		}
		
	}

	getMvcAPI() {
		var clientglobal = this.getGlobalObject();
		
		var mvcmodule = clientglobal.getModuleObject('mvc');

		return mvcmodule;
	}
	
	getControllersObject() {
		return require('./js/control/controllers.js').getObject();
	}

	muteConsoleLog() {
		if (typeof window !== 'undefined') {
			if (!window.simplestore)
				return;

			// we are in a browser or react-native
			window.simplestore.noconsoleoverload = false;

			if (window.simplestore.Global) {
				var _clientglobal = window.simplestore.Global.getGlobalObject();

				_clientglobal.muteConsoleLog();
			}
		}
		else if (typeof global !== 'undefined') {
			if (!global.simplestore)
				return;

			// we are in nodejs
			global.simplestore.noconsoleoverload = false;

			if (global.simplestore.Global) {
				var _clientglobal = global.simplestore.Global.getGlobalObject();

				_clientglobal.muteConsoleLog();
			}
		}
	}

	// static methods
	static getObject() {
		if (react_pwa)
			return react_pwa;
		
			react_pwa = new React_PWA();
		
		return react_pwa;
	}

	static getAppClass() {
		if (React_PWA.App)
			return React_PWA.App;

		var App = require('./imports/app/react-js-ui/js/app.js').default;

		React_PWA.App = App;
	
		return React_PWA.App;
	}
}

var simplestore;

if ( typeof window !== 'undefined') {
	simplestore = window.simplestore;
} else if ((typeof global !== 'undefined') && (typeof global.simplestore === 'undefined')) {
	// nodejs
	simplestore = global.simplestore;
}

simplestore.React_PWA = React_PWA;