'use strict';

var modulecontrollers;


var ModuleControllers = class {
	
	constructor() {
		this.globalscope =  ((typeof window !== 'undefined') && window ? window : global);

        this.module = null;
        
		this.ethereum_core = require('@p2pmoney-org/ethereum_core').getObject();

		this.primus_client_wallet = require('@primusmoney/client_wallet').getObject();

		this.global = null;
		
		this.clientcontrollers = null;
		
	}
	
	async init() {

		// @primusmoney/client_wallet
		var primus_client_wallet_init = await this.primus_client_wallet_init();
		
		// finished all initializations
		this.global = this.ethereum_core.getGlobalObject();
		
		if (this.global.getExecutionEnvironment() == 'dev') {
			await this._initdev();
		}
		
		return true;
	}
	
	async _initdev() {
		var global = this.global;
		var _globalscope = global.getExecutionGlobalScope();
		
		if (_globalscope.simplestore) {
			var commonmodule = global.getModuleObject('common');

			// to simplify access in debug window
			_globalscope.simplestore.session_array = commonmodule.session_array;
		}
		
		return true;
	}
	
	
	async primus_client_wallet_init() {
		var _globalscope = this.globalscope;
		var primus_client_wallet = this.primus_client_wallet;

/* 		var Bootstrap = _globalscope.simplestore.Bootstrap;
		var ScriptLoader = _globalscope.simplestore.ScriptLoader;

		var bootstrapobject = Bootstrap.getBootstrapObject();
		var rootscriptloader = ScriptLoader.getRootScriptLoader();

		var clientglobal = _globalscope.simplestore.Global.getGlobalObject();

		rootscriptloader.registerEventListener('@primusmoney/on_primus_client_wallet_module_ready', (eventname) => {
			console.log('WebClientControllers: primus_client_wallet initialization has finished');
		}); */
		
		var primus_client_wallet_init = await primus_client_wallet.init()
		.catch(err => {
			console.log('error during @primusmoney/client_wallet init: ' + err);
		});


		console.log('@primusmoney/client_wallet init finished');

		return primus_client_wallet_init;
	}
	
	getClientControllers() {
		if (this.clientcontrollers)
			return this.clientcontrollers;
		
		var global = this.global;

		var clientmodules =  global.getModuleObject('clientmodules');
		
		this.clientcontrollers = clientmodules.getControllersObject();
		
		return this.clientcontrollers;
	}

	
	
	// static
	static getObject() {
		if (modulecontrollers)
			return modulecontrollers;
		
		modulecontrollers = new ModuleControllers();
		
		return modulecontrollers;
	}
}

//module.exports = ModuleControllers;
// Note: webpack does not handle well import on module.exports
export default ModuleControllers; 
