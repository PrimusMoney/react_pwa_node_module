'use strict';

var modulecontrollers;

var _globalscope;

if ( typeof window !== 'undefined') {
	_globalscope = window;
} else if (typeof global !== 'undefined') {
	// nodejs
	_globalscope = global;
}

var ModuleControllers = class {
	
	constructor() {
		this.module = null;
		
		const ReactPWA = _globalscope.simplestore.ReactPWA;
		this.react_pwa = ReactPWA.getObject();
		this.ethereum_core = this.react_pwa.ethereum_core;
		
		this.global = this.react_pwa.getGlobalObject();

		this.session = null;
	}
	
	

	
	// static
	static getObject() {
		if (modulecontrollers)
			return modulecontrollers;
		
		modulecontrollers = new ModuleControllers();
		
		return modulecontrollers;
	}
}

module.exports = ModuleControllers; 