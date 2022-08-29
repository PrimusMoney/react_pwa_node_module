'use strict';

var Locker = class {
	
	constructor(session, contractaddress, web3providerurl) {
		this.session = session;
		this.address = contractaddress;
		
		this.web3providerurl = web3providerurl;

		this.contractpath = './contracts/deeds_v1/Locker.json';
		
		// operating variables
		this.contractinstance = null;
	}

	getContractPath() {
		return this.contractpath;
	}

	setContractPath(path) {
		this.contractpath = path;
		this.contractinstance = null;
	}
	
	getContractInstance() {
		if (this.contractinstance)
			return this.contractinstance;
		
		var session = this.session;
		var global = session.getGlobalObject();
		var ethnodemodule = global.getModuleObject('ethnode');

		var contractpath = this.getContractPath();
		
		this.contractinstance = ethnodemodule.getContractInstance(session, this.address, contractpath, this.web3providerurl);
		
		return this.contractinstance;
	}

	// string value
	async store(valstr, ethtx) {
		var contractinstance = this.getContractInstance();

		var fromaccount = ethtx.getFromAccount();
		var payingaccount = ethtx.getPayingAccount();

		payingaccount = (payingaccount ? payingaccount : fromaccount);

		var gas = ethtx.getGas();
		var gasPrice = ethtx.getGasPrice();

		var transactionuuid = ethtx.getTransactionUUID();
		var value = ethtx.getValue();


		var contractinstance = this.getContractInstance();
		var contracttransaction = contractinstance.getContractTransactionObject(payingaccount, gas, gasPrice);

		contracttransaction.setArguments(args);
		
		contracttransaction.setContractTransactionUUID(transactionuuid);
		contracttransaction.setValue(value);

		contracttransaction.setMethodName('store');		
		
		var args = [];
	
		args.push(valstr);
		
		contracttransaction.setArguments(args);

		return contractinstance.method_send(contracttransaction);
	}
	
	async retrieve(client_address) {
		var contractinstance = this.getContractInstance();

		var params = [];
	
		params.push(client_address);
		
		const valstr = await contractinstance.method_call('retrieve', params);
		
		return valstr;
	}
	
	// array of strings
	async register(valstr, ethtx) {
		var contractinstance = this.getContractInstance();

		var fromaccount = ethtx.getFromAccount();
		var payingaccount = ethtx.getPayingAccount();

		payingaccount = (payingaccount ? payingaccount : fromaccount);

		var gas = ethtx.getGas();
		var gasPrice = ethtx.getGasPrice();

		var transactionuuid = ethtx.getTransactionUUID();
		var value = ethtx.getValue();


		var contractinstance = this.getContractInstance();
		var contracttransaction = contractinstance.getContractTransactionObject(payingaccount, gas, gasPrice);

		contracttransaction.setArguments(args);
		
		contracttransaction.setContractTransactionUUID(transactionuuid);
		contracttransaction.setValue(value);

		contracttransaction.setMethodName('register');		
		
		var args = [];
	
		args.push(valstr);

		contracttransaction.setArguments(args);
		
		return contractinstance.method_send(contracttransaction);
	}
	
	async fetch(client_address) {
		var contractinstance = this.getContractInstance();

		var params = [];
	
		params.push(client_address);
		
		const arr = await contractinstance.method_call('fetch', params);
		
		return arr;
	}
	
}

if ( typeof window !== 'undefined' && typeof window.GlobalClass !== 'undefined' && window.GlobalClass ) {
	var _GlobalClass = window.GlobalClass;
}
else if (typeof window !== 'undefined') {
	var _GlobalClass = ( window && window.simplestore && window.simplestore.Global ? window.simplestore.Global : null);
}
else if (typeof global !== 'undefined') {
	// we are in node js
	var _GlobalClass = ( global && global.simplestore && global.simplestore.Global ? global.simplestore.Global : null);
}

_GlobalClass.registerModuleClass('mvc-erc721', 'Locker', Locker);

