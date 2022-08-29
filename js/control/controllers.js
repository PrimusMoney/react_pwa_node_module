'use strict';

var modulecontrollers;

var ModuleControllers = class {
	
	constructor() {
		this.module = null;
		
		this.react_pwa = require('../../../react_pwa').getObject();
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