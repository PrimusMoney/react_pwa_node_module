'use strict';

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


var ERC721TokenClass = _GlobalClass.getGlobalObject().getModuleClass('erc721', 'ERC721Token');

var Minter = class extends ERC721TokenClass {
	
	constructor(session, contractaddress, web3providerurl) {
		super(session, contractaddress, web3providerurl);
	}

	getContractInstance() {
		var contractinterface = this.getContractInterface();
		return contractinterface.getContractInstance();
	}
	
	// array of strings
	async registerRecord(tokenId, valstr, ethtx) {
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

		contracttransaction.setContractTransactionUUID(transactionuuid);
		contracttransaction.setValue(value);

		contracttransaction.setMethodName('registerRecord');		
		
		var args = [];
	
		var _tokenId = parseInt(tokenId);
	
		args.push(_tokenId);
		args.push(valstr);

		contracttransaction.setArguments(args);
		
		return contractinstance.method_send(contracttransaction);
	}
	
	async fetchRecords(tokenId) {
		var contractinstance = this.getContractInstance();

		var params = [];

		var _tokenId = parseInt(tokenId);
	
		params.push(_tokenId);
		
		const arr = await contractinstance.method_call('fetchRecords', params);
		
		return arr;
	}
}


_GlobalClass.registerModuleClass('mvc-erc721', 'Minter', Minter);