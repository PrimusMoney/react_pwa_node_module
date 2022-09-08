'use strict';
var Currencies = {
	florin: {
		name: 'florin',
		symbol: 'ƒ',
		decimals: 2,
		uuid: '27973e06-1e59-c514-7386-2f9553d46657', 
		address: '0x8eB40a7eC11Db522215cF2ca098cCe44989E0027', 
		scheme_uuid: 'b1a18ba9-1609-3f66-c1fd-42ae0073efac',
		ops: {canpay: true, cantopup: true},
		provider: 'provider.js',
		pretrade_scheme_uuid: 'b1a18ba9-1609-3f66-c1fd-42ae0073efac',
	}

	
};

//module.exports = Currencies;
// Note: webpack does not handle well import on module.exports
export default Currencies;
