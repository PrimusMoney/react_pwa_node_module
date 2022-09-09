"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Provider = /*#__PURE__*/function () {
  function Provider(session, currency) {
    _classCallCheck(this, Provider);

    this.session = session;
    this.currency = currency;
  }

  _createClass(Provider, [{
    key: "getOps",
    value: function getOps() {
      return this.currency.ops;
    }
  }, {
    key: "getPaymentUrl",
    value: function getPaymentUrl(txhash) {
      if (!this.currency.explorerurl) return;
      var paymenturl = this.currency.explorerurl; //paymenturl += this.currency.tx_path;

      paymenturl += '/web3/tx/';
      paymenturl += txhash;
      return paymenturl;
    }
  }]);

  return Provider;
}();

if (typeof window !== 'undefined' && typeof window.GlobalClass !== 'undefined' && window.GlobalClass) {
  var _GlobalClass = window.GlobalClass;
} else if (typeof window !== 'undefined') {
  var _GlobalClass = window && window.simplestore && window.simplestore.Global ? window.simplestore.Global : null;
} else if (typeof global !== 'undefined') {
  // we are in node js
  var _GlobalClass = global && global.simplestore && global.simplestore.Global ? global.simplestore.Global : null;
}

_GlobalClass.registerModuleClass('currencies', 'provider.js', Provider); //export default Provider;
//# sourceMappingURL=provider.js.map