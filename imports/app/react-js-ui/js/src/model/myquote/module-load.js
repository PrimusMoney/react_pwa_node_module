import './module.js';

// erc721 mvc
import './includes/erc721/module-load.js';



var _globalscope;

if (typeof window !== 'undefined') {
	_globalscope = window;		
}
else if (typeof global !== 'undefined') {
	_globalscope = global;
}

_globalscope.simplestore.BigNumber = require('bignumber.js');