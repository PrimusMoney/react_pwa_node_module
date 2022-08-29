console.log('react-pwa-load.js loader');

var Bootstrap = window.simplestore.Bootstrap;
var ScriptLoader = window.simplestore.ScriptLoader;

var bootstrapobject = Bootstrap.getBootstrapObject();
var rootscriptloader = ScriptLoader.getRootScriptLoader();

var globalscriptloader = ScriptLoader.findScriptLoader('globalloader')

var xtrascriptloader = globalscriptloader.getChildLoader('reactpwaconfig');

// mvc modules
rootscriptloader.push_import(xtrascriptloader,'../../imports/includes/mvc-api/module-load.js')
//import '../../imports/includes/mvc-api/module-load.js';

// currencies modules
rootscriptloader.push_import(xtrascriptloader,'../../imports/includes/modules/module-load.js')
//import '../../imports/includes/modules/module-load.js';


xtrascriptloader.load_scripts();