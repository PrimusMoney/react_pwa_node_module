/**
 * @author PrimusMoney
 * @name @primusmoney/react_pwa
 * @homepage https://www.primusmoney.com/
 * @license UNLICENSED
 */
'use strict';


console.log('@primusmoney/react_pwa');

if ( typeof window !== 'undefined' && window && (typeof window.simplestore === 'undefined')) {
	// browser or react-native
	console.log('creating window.simplestore in @primusmoney/react_pwa index.js');

	window.simplestore = {};
	
	window.simplestore.nocreation = true;
	
} else if ((typeof global !== 'undefined') && (typeof global.simplestore === 'undefined')) {
	// nodejs
	console.log('creating global.simplestore in @primusmoney/react_pwa index.js');
	global.simplestore = {};
}

// default
const React_PWA = require('./react_pwa.js');

module.exports = React_PWA;

// classes
const App = require('./imports/app/react-js-ui/js/app.js').default;
const Header = require('./imports/app/react-js-ui/js/src/react-view/navigation/header/header.js').default;
const CurrencyCardIcon = require('./imports/app/react-js-ui/js/src/react-view/components/common/utils/currency-card-icon.js').default;
const TextCopyIcon  = require('./imports/app/react-js-ui/js/src/react-view/components/common/utils/text-copy-icon.js').default;

module.exports.App = App;
module.exports.Header = Header;
module.exports.CurrencyCardIcon = CurrencyCardIcon;
module.exports.TextCopyIcon = TextCopyIcon;

