'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Module = /*#__PURE__*/function () {
  function Module() {
    _classCallCheck(this, Module);

    this.name = 'currencies';
    this.global = null; // put by global on registration

    this.isready = false;
    this.isloading = false;
    this.currencies = [];
    this.currencies_timestamp = Date.now();
  }

  _createClass(Module, [{
    key: "init",
    value: function init() {
      console.log('module init called for ' + this.name);
      var global = this.global;
      this.isready = true;
    }
  }, {
    key: "loadModule",
    value: function loadModule(parentscriptloader, callback) {
      console.log('loadModule called for module ' + this.name);
      if (this.isloading) return;
      this.isloading = true;
      var self = this;
      var global = this.global; // wallet module script loader

      var modulescriptloader; // look if currenciesloader already created (e.g. for loading in node.js)

      modulescriptloader = global.findScriptLoader('currenciesloader'); // if not, create on as child as parent script loader passed in argument

      if (!modulescriptloader) modulescriptloader = global.getScriptLoader('currenciesloader', parentscriptloader);
      var xtraroot = './includes';
      var interfaceroot = xtraroot + '/interface'; //modulescriptloader.push_script( interfaceroot + '/wallet-server-access.js');

      var moduleroot = xtraroot + '/modules/currencies';
      modulescriptloader.push_script(moduleroot + '/model/currency-amount.js');
      modulescriptloader.push_script(moduleroot + '/model/decimal-amount.js');
      modulescriptloader.push_script(moduleroot + '/model/providers/provider.js');
      modulescriptloader.load_scripts(function () {
        self.init();
        if (callback) callback(null, self);
      });
      return modulescriptloader;
    }
  }, {
    key: "isReady",
    value: function isReady() {
      return this.isready;
    }
  }, {
    key: "hasLoadStarted",
    value: function hasLoadStarted() {
      return this.isloading;
    } // optional  module functions

  }, {
    key: "registerHooks",
    value: function registerHooks() {
      console.log('module registerHooks called for ' + this.name);
      var global = this.global; // signal module is ready

      var rootscriptloader = global.getRootScriptLoader();
      rootscriptloader.signalEvent('on_currencies_module_ready');
    }
  }, {
    key: "postRegisterModule",
    value: function postRegisterModule() {
      console.log('postRegisterModule called for ' + this.name);

      if (!this.isloading) {
        var global = this.global;
        var self = this;
        var rootscriptloader = global.getRootScriptLoader();
        this.loadModule(rootscriptloader, function () {
          if (self.registerHooks) self.registerHooks();
        });
      }
    } //
    // hooks
    //

  }, {
    key: "_canWalletHandleScheme",
    value: function _canWalletHandleScheme(wallet, scheme) {
      if (!wallet || !scheme) return false;

      if (scheme.isRemote()) {
        var walletschemeuuid = wallet.getSchemeUUID(); // TODO: we could look if authserver are the same

        if (walletschemeuuid && walletschemeuuid === scheme.getSchemeUUID()) return true;else return false;
      } else {
        return true;
      }
    }
  }, {
    key: "_createDummyWalletSession",
    value: function () {
      var _createDummyWalletSession2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(walletsession) {
        var global, Session, fetchsession;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // we create a dummy session (not registered in session_array) and
                // we set it to the correct instance before calling _getEthereumTransaction and other methods
                global = this.global;
                Session = global.getModuleClass('common', 'Session');
                fetchsession = new Session(global);
                fetchsession.setSessionUUID(walletsession.getSessionUUID()); // serving as placeholder for authkey

                fetchsession.DUMMY_SESSION_UUID = walletsession.guid();
                fetchsession.DUMMY_SESSION_WALLET = walletsession; // point to walletsession properties (avoid storage to make this session unharmful)

                fetchsession.authkey = walletsession.authkey;
                fetchsession.authkey_server_access_instance = walletsession.authkey_server_access_instance;
                fetchsession.cryptokeymap = walletsession.cryptokeymap;
                fetchsession.user = walletsession.user;
                fetchsession.xtraconfig = walletsession.xtraconfig;
                return _context.abrupt("return", fetchsession);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _createDummyWalletSession(_x) {
        return _createDummyWalletSession2.apply(this, arguments);
      }

      return _createDummyWalletSession;
    }() //
    // Currencies functions
    //

  }, {
    key: "getCurrencies",
    value: function getCurrencies() {
      return this.currencies;
    }
  }, {
    key: "getCurrenciesTimeStamp",
    value: function getCurrenciesTimeStamp() {
      return this.currencies_timestamp;
    }
  }, {
    key: "getCurrency",
    value: function getCurrency(currencyuuid) {
      var array = this.currencies;

      for (var i = 0; i < (array ? array.length : 0); i++) {
        if (array[i].uuid === currencyuuid) return array[i];
      }
    }
  }, {
    key: "addCurrency",
    value: function addCurrency(currency) {
      this.currencies.push(currency);
      this.currencies_timestamp = Date.now(); // change time stamp
    }
  }, {
    key: "getCurrencyProvider",
    value: function getCurrencyProvider(session, currencyuuid) {
      var global = this.global;
      var currency = this.getCurrency(currencyuuid);

      if (currency && currency.provider) {
        //var Provider = require('./model/providers/' + currency.provider).default;
        var Provider = global.getModuleClass('currencies', currency.provider); // to be usable in node.js

        var provider = new Provider(session, currency);
        return provider;
      }
    }
  }, {
    key: "readLocalCurrencies",
    value: function () {
      var _readLocalCurrencies = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(session) {
        var global, commonmodule, walletmodule, _keys, clientAccess, currencies;

        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                global = this.global;
                commonmodule = global.getModuleObject('common');
                walletmodule = this;
                _keys = ['shared', 'currencies', 'currencies']; // look in 'shared' branch

                clientAccess = session.getClientStorageAccessInstance();
                _context2.next = 7;
                return new Promise(function (resolve, reject) {
                  clientAccess.readClientSideJson(_keys, function (err, res) {
                    if (err) {
                      resolve([]);
                    } else {
                      var _currencies = res;
                      resolve(_currencies);
                    }
                  });
                })["catch"](function (err) {
                  currencies = [];
                });

              case 7:
                currencies = _context2.sent;
                return _context2.abrupt("return", currencies);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function readLocalCurrencies(_x2) {
        return _readLocalCurrencies.apply(this, arguments);
      }

      return readLocalCurrencies;
    }()
  }, {
    key: "_checkCurrencyInMemory",
    value: function _checkCurrencyInMemory(currency) {
      var currencyuuid = currency.uuid;
      var curr = this.getCurrency(currencyuuid);
      if (!curr) this.addCurrency(currency);
    }
  }, {
    key: "saveLocalCurrencies",
    value: function () {
      var _saveLocalCurrencies = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(session, currencies) {
        var global, i, _keys, clientAccess;

        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                global = this.global;

                for (i = 0; i < currencies.length; i++) {
                  this._checkCurrencyInMemory(currencies[i]);
                }

                _keys = ['shared', 'currencies', 'currencies']; // look in 'shared' branch
                // create json

                clientAccess = session.getClientStorageAccessInstance();
                return _context3.abrupt("return", new Promise(function (resolve, reject) {
                  clientAccess.saveClientSideJson(_keys, currencies, function (err, res) {
                    if (err) reject(err);else resolve(res);
                  });
                }));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function saveLocalCurrencies(_x3, _x4) {
        return _saveLocalCurrencies.apply(this, arguments);
      }

      return saveLocalCurrencies;
    }()
  }, {
    key: "saveLocalCurrency",
    value: function () {
      var _saveLocalCurrency = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(session, currency) {
        var currencies, bInList, i;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.readLocalCurrencies(session);

              case 2:
                currencies = _context4.sent;

                if (!currencies) {
                  _context4.next = 18;
                  break;
                }

                // check if it is in the list
                bInList = false;
                i = 0;

              case 6:
                if (!(i < currencies.length)) {
                  _context4.next = 14;
                  break;
                }

                if (!(currency.uuid == currencies[i].uuid)) {
                  _context4.next = 11;
                  break;
                }

                bInList = true;
                currencies[i] = currency;
                return _context4.abrupt("break", 14);

              case 11:
                i++;
                _context4.next = 6;
                break;

              case 14:
                // add it if it is not
                if (!bInList) currencies.push(currency);
                return _context4.abrupt("return", this.saveLocalCurrencies(session, currencies));

              case 18:
                return _context4.abrupt("return", Promise.reject('could not retrieve the list of schemes'));

              case 19:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function saveLocalCurrency(_x5, _x6) {
        return _saveLocalCurrency.apply(this, arguments);
      }

      return saveLocalCurrency;
    }()
  }, {
    key: "getCurrencyScheme",
    value: function () {
      var _getCurrencyScheme = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(session, currency) {
        var global, walletmodule, currencyschemeuuid, scheme;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (session) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt("return", Promise.reject('session is undefined'));

              case 2:
                if (currency) {
                  _context5.next = 4;
                  break;
                }

                return _context5.abrupt("return", Promise.reject('currency is undefined'));

              case 4:
                global = this.global;
                walletmodule = global.getModuleObject('wallet'); // we look if the currency has a trade scheme specified

                currencyschemeuuid = currency.scheme_uuid ? currency.scheme_uuid : null;

                if (!currencyschemeuuid) {
                  _context5.next = 13;
                  break;
                }

                _context5.next = 10;
                return walletmodule.getSchemeFromUUID(session, currencyschemeuuid)["catch"](function (err) {});

              case 10:
                scheme = _context5.sent;
                _context5.next = 15;
                break;

              case 13:
                walletmodule = global.getModuleObject('wallet'); // pick local default (as default)

                scheme = walletmodule.getDefaultScheme(session, 0);
                /* 			// local scheme has probably already been created with web3providerurl
                			var web3url = (currency.ethnodeserver && currency.ethnodeserver.web3_provider_url ? currency.ethnodeserver.web3_provider_url : (currency.web3providerurl ? currency.web3providerurl : null));
                			scheme = await walletmodule.getSchemeFromWeb3Url(session, web3url)
                			.catch(err => {}); // note: returns local schemes, use getLocalSchemeFromWeb3Url for version > 0.30.10
                
                			if (!scheme) {
                				// if not, we create a local scheme now and save it
                				var defaultlocalscheme = await walletmodule.getDefaultScheme(session, 0);
                				scheme = await defaultlocalscheme.cloneOnWeb3ProviderUrl(web3url)
                				.catch(err => {});
                			} */

              case 15:
                return _context5.abrupt("return", scheme);

              case 16:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getCurrencyScheme(_x7, _x8) {
        return _getCurrencyScheme.apply(this, arguments);
      }

      return getCurrencyScheme;
    }()
  }]);

  return Module;
}();

if (typeof window !== 'undefined' && typeof window.GlobalClass !== 'undefined' && window.GlobalClass) {
  var _GlobalClass = window.GlobalClass;
} else if (typeof window !== 'undefined') {
  var _GlobalClass = window && window.simplestore && window.simplestore.Global ? window.simplestore.Global : null;
} else if (typeof global !== 'undefined') {
  // we are in node js
  var _GlobalClass = global && global.simplestore && global.simplestore.Global ? global.simplestore.Global : null;
}

_GlobalClass.getGlobalObject().registerModuleObject(new Module()); // dependencies


_GlobalClass.getGlobalObject().registerModuleDepency('currencies', 'common');