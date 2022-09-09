"use strict";

require("./module.js");

require("./model/currency-amount.js");

require("./model/decimal-amount.js");

require("./model/providers/provider.js");

var _globalscope;

if (typeof window !== 'undefined') {
  _globalscope = window;
} else if (typeof global !== 'undefined') {
  _globalscope = global;
}

_globalscope.simplestore.BigNumber = require('bignumber.js');
//# sourceMappingURL=module-load.js.map