//
// exports instead of module.exports
// to be compatible with webpack packaging

console.log('@primusmoney/react_pwa/react-js-ui');

if ( typeof window !== 'undefined' && window && (typeof window.simplestore === 'undefined')) {
	// browser or react-native
	console.log('creating window.simplestore in @primusmoney/react_pwa/react-js-ui index.js');

	window.simplestore = {};
	
	window.simplestore.nocreation = true;
	
} else if ((typeof global !== 'undefined') && (typeof global.simplestore === 'undefined')) {
	// nodejs
	console.log('creating global.simplestore in @primusmoney/react_pwa/react-js-ui index.js');
	global.simplestore = {};
}

var _globalscope;

if ( typeof window !== 'undefined') {
	_globalscope = window;
} else if (typeof global !== 'undefined') {
	// nodejs
	_globalscope = global;
}

//const React_PWA = require('../react_pwa.js');
require('../react_pwa.js');
const React_PWA = _globalscope.simplestore.React_PWA; // using simplestore to avoid problems with webpack packaging

// classes
const App = require('../imports/app/react-js-ui/js/app.js').default;
const Header = require('../imports/app/react-js-ui/js/src/react-view/navigation/header/header.js').default;
const CurrencyCardIcon = require('../imports/app/react-js-ui/js/src/react-view/components/common/utils/currency-card-icon.js').default;
const TextCopyIcon  = require('../imports/app/react-js-ui/js/src/react-view/components/common/utils/text-copy-icon.js').default;


export {App as App};
export {Header as Header};
export {CurrencyCardIcon as CurrencyCardIcon};
export {TextCopyIcon as TextCopyIcon};

export default React_PWA;