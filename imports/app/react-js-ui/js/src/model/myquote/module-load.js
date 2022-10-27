"use strict";

require("./module.js");

require("./includes/erc721/module-load.js");

// erc721 mvc
var _globalscope;

if (typeof window !== 'undefined') {
  _globalscope = window;
} else if (typeof global !== 'undefined') {
  _globalscope = global;
}

_globalscope.simplestore.BigNumber = require('bignumber.js');