"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

console.log('loading web-client.js');

var WebClient = /*#__PURE__*/function () {
  function WebClient() {
    _classCallCheck(this, WebClient);

    this.name = 'webclient';
    this.global = null; // put by global on registration

    this.isready = false;
    this.isloading = false;
    this.globalscope = window;
    this.execution_env = typeof WebClient.EXEC_ENV !== 'undefined' ? WebClient.EXEC_ENV : 'prod';

    var WebClientConfig = require('./webclient-config.js')["default"];

    if (WebClientConfig.execution_env == 'dev' || this.execution_env == 'dev') {
      this.execution_env = 'dev';
    }

    this.WebClientConfig = WebClientConfig;

    var WebClientControllers = require('./control/controllers.js')["default"];

    this.webclientcontrollers = WebClientControllers.getObject();
    this.webclientcontrollers.module = this;
    this.namespace = null; // e.g. to load config from sub-folder

    this.updatetime = null; // to load updated versions of config files

    this.currencies = null;
  }

  _createClass(WebClient, [{
    key: "_getJQueryClass",
    value: function _getJQueryClass() {
      if (typeof window !== 'undefined' && window && typeof window.simplestore !== 'undefined') return window.simplestore.jQuery;else if (typeof global !== 'undefined' && typeof global.simplestore !== 'undefined') return global.simplestore.jQuery;else throw 'can not find JQuery class!!!';
    }
  }, {
    key: "_loadExternalJSON",
    value: function () {
      var _loadExternalJSON2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(jsonfile) {
        var _$, data;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // note: works only for properly formed json files content
                _$ = this._getJQueryClass();
                _context.next = 3;
                return new Promise(function (resolve, reject) {
                  _$.getJSON(jsonfile, function (res) {
                    if (res) resolve(res);else reject('no data');
                  })["catch"](function (err) {
                    console.log('exception in _loadExternal: ' + err);
                    reject('no data');
                  });
                })["catch"](function (err) {
                  console.log('exception in _loadExternal: ' + err);
                });

              case 3:
                data = _context.sent;
                return _context.abrupt("return", data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _loadExternalJSON(_x) {
        return _loadExternalJSON2.apply(this, arguments);
      }

      return _loadExternalJSON;
    }()
  }, {
    key: "setNameSpace",
    value: function () {
      var _setNameSpace = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(namespace) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.namespace = namespace;

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function setNameSpace(_x2) {
        return _setNameSpace.apply(this, arguments);
      }

      return setNameSpace;
    }()
  }, {
    key: "setUpdatetime",
    value: function () {
      var _setUpdatetime = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(updatetime) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.updatetime = updatetime;

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function setUpdatetime(_x3) {
        return _setUpdatetime.apply(this, arguments);
      }

      return setUpdatetime;
    }()
  }, {
    key: "loadConfig",
    value: function () {
      var _loadConfig = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(configname, versiontag) {
        var jsonfile, config_json;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                jsonfile = './config/' + (this.namespace ? this.namespace + '/' : '') + configname + '.json';

                if (this.updatetime) {
                  jsonfile += '?t=' + this.updatetime + (versiontag ? '&v=' + versiontag : '');
                } else {
                  jsonfile += versiontag ? '?v=' + versiontag : '';
                }

                _context4.next = 4;
                return this._loadExternalJSON(jsonfile)["catch"](function (err) {});

              case 4:
                config_json = _context4.sent;
                return _context4.abrupt("return", config_json);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function loadConfig(_x4, _x5) {
        return _loadConfig.apply(this, arguments);
      }

      return loadConfig;
    }()
  }, {
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var _globalscope, webclientcontrollers_init, Bootstrap, ScriptLoader, bootstrapobject, rootscriptloader, clientglobal, CoreConfig, XtraConfig, WebClientConfig, clientapicontrollers, session, webclient_config_dev, xtraconfigmodule, authkeymodule, oauth2module, currencies, webapp_currencies, array, i, key, currency, currenciesmodule, local_currencies, currencies_array;

        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                console.log('WebClient.init called');
                console.log('module init called for ' + this.name);
                _context5.prev = 2;
                _globalscope = this.globalscope;
                _context5.next = 6;
                return this.webclientcontrollers.init()["catch"](function (err) {
                  console.log('error initializing web client controllers: ' + err);
                });

              case 6:
                webclientcontrollers_init = _context5.sent;
                console.log('webclient controllers initialized'); // end of all initialization

                Bootstrap = _globalscope.simplestore.Bootstrap;
                ScriptLoader = _globalscope.simplestore.ScriptLoader;
                bootstrapobject = Bootstrap.getBootstrapObject();
                rootscriptloader = ScriptLoader.getRootScriptLoader(); // ethereum_core is now set

                clientglobal = _globalscope.simplestore.Global.getGlobalObject(); // register this module

                clientglobal.registerModuleObject(this); // ethereum_core config

                clientglobal = _globalscope.simplestore.Global.getGlobalObject();
                CoreConfig = _globalscope.simplestore.Config;
                XtraConfig = _globalscope.simplestore.Config.XtraConfig;
                if (!XtraConfig.instance) XtraConfig.instance = new XtraConfig(); // client config

                WebClientConfig = this.WebClientConfig; // put in simple store for easier access

                _globalscope.simplestore.WebClientConfig = WebClientConfig;
                clientapicontrollers = this.getClientAPI(); // get session object

                session = clientapicontrollers.getCurrentSessionObject();

                if (!(this.execution_env == 'dev')) {
                  _context5.next = 30;
                  break;
                }

                _context5.next = 25;
                return this.loadConfig('webclient-config-dev')["catch"](function (err) {});

              case 25:
                webclient_config_dev = _context5.sent;

                if (webclient_config_dev) {
                  Object.assign(WebClientConfig, webclient_config_dev);
                }

                clientglobal.setExecutionEnvironment('dev'); // we call this.webclientcontrollers._initdev to simplify debugging

                _context5.next = 30;
                return this.webclientcontrollers._initdev();

              case 30:
                //
                // memory environment
                //
                xtraconfigmodule = clientglobal.getModuleObject('xtraconfig'); // activate/deactivate xtraconfig module

                if (typeof WebClientConfig.xtraconfigmodule_activate !== 'undefined') {
                  xtraconfigmodule.activation(WebClientConfig.xtraconfigmodule_activate); // activate/deactivate overload of access

                  if (typeof WebClientConfig.xtraconfigmodule_ethnode_activate !== 'undefined') xtraconfigmodule.overloadEthereumNodeAccess(WebClientConfig.xtraconfigmodule_ethnode_activate);
                  if (typeof WebClientConfig.xtraconfigmodule_storage_activate !== 'undefined') xtraconfigmodule.overloadStorageAccess(WebClientConfig.xtraconfigmodule_storage_activate);
                } // authkey


                authkeymodule = clientglobal.getModuleObject('authkey'); // activate/deactivate authkey module

                if (typeof WebClientConfig.authkeymodule_activate !== 'undefined') authkeymodule.activation(WebClientConfig.authkeymodule_activate); // oauth2

                oauth2module = clientglobal.getModuleObject('oauth2'); // activate/deactivate oauth2 module

                if (typeof WebClientConfig.oauth2module_activate !== 'undefined') oauth2module.activation(WebClientConfig.oauth2module_activate); // load currencies

                currencies = this.getCurrencies(); // built-in
                // additional currencies for webapp

                _context5.next = 39;
                return this.loadConfig('currencies-webapp')["catch"](function (err) {
                  console.log('WebClient.init error loading webapp currencies: ' + err);
                });

              case 39:
                webapp_currencies = _context5.sent;

                if (webapp_currencies) {
                  array = Object.keys(webapp_currencies);

                  for (i = 0; i < (array ? array.length : 0); i++) {
                    key = array[i];
                    currency = webapp_currencies[key];
                    currencies[key] = currency;
                  }
                } // local currencies for the user


                currenciesmodule = clientglobal.getModuleObject('currencies');
                _context5.next = 44;
                return currenciesmodule.readLocalCurrencies(session)["catch"](function (err) {
                  console.log('WebClient.init error reading local currencies: ' + err);
                });

              case 44:
                local_currencies = _context5.sent;

                if (local_currencies) {
                  for (i = 0; i < (local_currencies ? local_currencies.length : 0); i++) {
                    key = local_currencies[i].uuid;
                    currencies[key] = local_currencies[i];
                  }
                } // if execution env is dev, we setup a testing environment


                if (!(this.execution_env == 'dev')) {
                  _context5.next = 51;
                  break;
                }

                _context5.next = 49;
                return this.initdev();

              case 49:
                _context5.next = 51;
                return this.echotest();

              case 51:
                // we fill currencies in the currencies module
                if (currenciesmodule) {
                  currencies_array = Object.values(currencies);

                  for (i = 0; i < currencies_array.length; i++) {
                    currenciesmodule.addCurrency(currencies_array[i]);
                  }
                } else {
                  console.log('Warning: you must load currencies module before calling WebClient.init');
                } //signal end of mobile load


                rootscriptloader.signalEvent('on_mobile_load_end');
                this.isready = true;
                return _context5.abrupt("return", true);

              case 57:
                _context5.prev = 57;
                _context5.t0 = _context5["catch"](2);
                console.log('exception in WebClient.init: ' + _context5.t0);

              case 60:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[2, 57]]);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "initprod",
    value: function () {
      var _initprod = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(bForce) {
        var WebClientConfig, clientapicontrollers, session, webapp_schemes, network_list, i, prodnetwork, scheme, scheme_server, jsonarray, j, _builtin_local_schemes, _builtin_remote_schemes;

        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                console.log('WebClient.initprod called');
                _context6.prev = 1;
                WebClientConfig = this.WebClientConfig;
                console.log('WebClient.initprod starting for ' + this.execution_env + 'execution environment');
                clientapicontrollers = this.getClientAPI(); // get session object

                session = clientapicontrollers.getCurrentSessionObject(); //
                // storage (webapp) environment
                //

                _context6.next = 8;
                return this.loadConfig('schemes-webapp')["catch"](function (err) {
                  console.log('WebClient.initprod error loading webapp schemes: ' + err);
                });

              case 8:
                webapp_schemes = _context6.sent;

                if (!webapp_schemes) {
                  _context6.next = 23;
                  break;
                }

                network_list = Object.values(webapp_schemes);
                console.log('WebClient.initprod starting adding prod schemes');
                i = 0;

              case 13:
                if (!(i < network_list.length)) {
                  _context6.next = 23;
                  break;
                }

                prodnetwork = network_list[i];
                prodnetwork.xtra_data = prodnetwork.xtra_data ? prodnetwork.xtra_data : {};
                prodnetwork.xtra_data.origin = 'prod-config';
                _context6.next = 19;
                return clientapicontrollers.createScheme(session, prodnetwork);

              case 19:
                scheme = _context6.sent;

              case 20:
                i++;
                _context6.next = 13;
                break;

              case 23:
                //
                // storage (site) environment
                //
                // look in https://domain.server.ext/config
                //
                // create built-in schemes
                //
                console.log('WebClient.initprod creating schemes'); //
                // create schemes from built-in networks
                //

                /* 			
                			// local
                			var _builtin_local_networks = this.getBuiltinLocalNetworks();
                			if (_builtin_local_networks) {
                				var network_list = Object.values(_builtin_local_networks);
                				console.log('WebClient.initprod starting creating schemes from local networks');
                				for (var i = 0; i < network_list.length; i++) {
                					var prodnetwork = network_list[i];
                					prodnetwork.xtra_data = (prodnetwork.xtra_data ? prodnetwork.xtra_data : {});
                					prodnetwork.xtra_data.origin = 'prod-network-built-in';
                					var scheme = await clientapicontrollers.createScheme(session, prodnetwork);
                				}
                			}
                			
                			// remote
                			var _builtin_remote_networks = this.getBuiltinRemoteNetworks()
                			if (_builtin_remote_networks) {
                				var network_list = Object.values(_builtin_remote_networks);
                				console.log('WebClient.initprod starting creating schemes from remote networks');
                				for (var i = 0; i < network_list.length; i++) {
                					var prodnetwork = network_list[i];
                					prodnetwork.xtra_data = (prodnetwork.xtra_data ? prodnetwork.xtra_data : {});
                					prodnetwork.xtra_data.origin = 'prod-network-built-in';
                					var scheme = await clientapicontrollers.createScheme(session, prodnetwork);
                				}
                			}
                 */
                //
                // import schemes from servers
                //

                if (!WebClientConfig.builtin_scheme_list_servers) {
                  _context6.next = 49;
                  break;
                }

                console.log('WebClient.initprod starting calling scheme list servers');
                i = 0;

              case 27:
                if (!(i < WebClientConfig.builtin_scheme_list_servers.length)) {
                  _context6.next = 49;
                  break;
                }

                scheme_server = WebClientConfig.builtin_scheme_list_servers[i];
                console.log('WebClient.initprod calling scheme list server: ' + scheme_server.name);
                _context6.next = 32;
                return clientapicontrollers.http_get_json(session, scheme_server.url)["catch"](function (err) {
                  jsonarray = null;
                });

              case 32:
                jsonarray = _context6.sent;
                console.log('WebClient.initprod starting calling scheme list servers');
                network_list = jsonarray && jsonarray.data ? jsonarray.data : null;
                j = 0;

              case 36:
                if (!(j < (network_list ? network_list.length : 0))) {
                  _context6.next = 46;
                  break;
                }

                prodnetwork = network_list[j];
                prodnetwork.xtra_data = prodnetwork.xtra_data ? prodnetwork.xtra_data : {};
                prodnetwork.xtra_data.origin = 'prod-server-import';
                _context6.next = 42;
                return clientapicontrollers.createScheme(session, prodnetwork);

              case 42:
                scheme = _context6.sent;

              case 43:
                j++;
                _context6.next = 36;
                break;

              case 46:
                i++;
                _context6.next = 27;
                break;

              case 49:
                //
                // create schemes from built-in schemes
                //
                // local schemes
                _builtin_local_schemes = this.getBuiltinLocalSchemes();

                if (!_builtin_local_schemes) {
                  _context6.next = 64;
                  break;
                }

                network_list = Object.values(_builtin_local_schemes);
                console.log('WebClient.initprod starting creating local schemes');
                i = 0;

              case 54:
                if (!(i < network_list.length)) {
                  _context6.next = 64;
                  break;
                }

                prodnetwork = network_list[i];
                prodnetwork.xtra_data = prodnetwork.xtra_data ? prodnetwork.xtra_data : {};
                prodnetwork.xtra_data.origin = 'prod-local-built-in';
                _context6.next = 60;
                return clientapicontrollers.createScheme(session, prodnetwork);

              case 60:
                scheme = _context6.sent;

              case 61:
                i++;
                _context6.next = 54;
                break;

              case 64:
                // remote schemes
                _builtin_remote_schemes = this.getBuiltinRemoteSchemes();

                if (!_builtin_remote_schemes) {
                  _context6.next = 79;
                  break;
                }

                network_list = Object.values(_builtin_remote_schemes);
                console.log('WebClient.initprod starting creating remote schemes');
                i = 0;

              case 69:
                if (!(i < network_list.length)) {
                  _context6.next = 79;
                  break;
                }

                prodnetwork = network_list[i];
                prodnetwork.xtra_data = prodnetwork.xtra_data ? prodnetwork.xtra_data : {};
                prodnetwork.xtra_data.origin = 'prod-remote-built-in';
                _context6.next = 75;
                return clientapicontrollers.createScheme(session, prodnetwork);

              case 75:
                scheme = _context6.sent;

              case 76:
                i++;
                _context6.next = 69;
                break;

              case 79:
                return _context6.abrupt("return", true);

              case 82:
                _context6.prev = 82;
                _context6.t0 = _context6["catch"](1);
                console.log('exception in WebClient.initprod: ' + _context6.t0);

              case 85:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[1, 82]]);
      }));

      function initprod(_x6) {
        return _initprod.apply(this, arguments);
      }

      return initprod;
    }()
  }, {
    key: "initdev",
    value: function () {
      var _initdev = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(bForce) {
        var WebClientConfig, clientapicontrollers, session, currencies, dev_currencies, array, i, key, currency, dev_schemes, network_list, prodnetwork, scheme, error, importurl, imported, testnetwork, accountarray, accnt, address, name, label, contactinfo, contact, creations, vaultname, passphrase, creation, vaultsession, vaultnetworkconfig, vault, tokenarray, tkn, tokenaddress, web3providerurl, description, tokenuuid, token, privatekey, account, userarray, value, walletname, wallet, walletsession, j, testaccount, _cardname, _cardlabel, _address, card, k, tokenaccount, default_address, networkconfig, usercredentials, blanksession, canauthenticate, sessionaccounts, cards, username, password;

        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                console.log('WebClient.initdev called');
                _context7.prev = 1;
                WebClientConfig = this.WebClientConfig;
                clientapicontrollers = this.getClientAPI(); // get session object

                session = clientapicontrollers.getCurrentSessionObject(); //
                // memory environment
                //
                // load additional currencies if any

                currencies = this.getCurrencies(); // additional currencies for dev

                _context7.next = 8;
                return this.loadConfig('currencies-dev')["catch"](function (err) {
                  console.log('WebClient.initdev error loading dev currencies: ' + err);
                });

              case 8:
                dev_currencies = _context7.sent;

                if (dev_currencies) {
                  array = Object.keys(dev_currencies);

                  for (i = 0; i < (array ? array.length : 0); i++) {
                    key = array[i];
                    currency = dev_currencies[key];
                    currencies[key] = currency;
                  }
                } //
                // storage (webapp) environment
                //
                // add dev schemes to localstorage, if any


                _context7.next = 12;
                return this.loadConfig('schemes-dev')["catch"](function (err) {
                  console.log('WebClient.initdev error loading dev schemes: ' + err);
                });

              case 12:
                dev_schemes = _context7.sent;

                if (!dev_schemes) {
                  _context7.next = 27;
                  break;
                }

                network_list = Object.values(dev_schemes);
                console.log('WebClient.initdev starting adding dev schemes');
                i = 0;

              case 17:
                if (!(i < network_list.length)) {
                  _context7.next = 27;
                  break;
                }

                prodnetwork = network_list[i];
                prodnetwork.xtra_data = prodnetwork.xtra_data ? prodnetwork.xtra_data : {};
                prodnetwork.xtra_data.origin = 'dev-config';
                _context7.next = 23;
                return clientapicontrollers.createScheme(session, prodnetwork);

              case 23:
                scheme = _context7.sent;

              case 24:
                i++;
                _context7.next = 17;
                break;

              case 27:
                if (!(WebClientConfig.initdev !== true && bForce !== true)) {
                  _context7.next = 29;
                  break;
                }

                return _context7.abrupt("return");

              case 29:
                console.log('WebClient.initdev starting for ' + this.execution_env + ' execution environment'); // clear LocalStorage

                error = this._clearWebLocalStorage();
                console.log('LocalStorage' + (error ? ' cleared successfully' : ' NOT cleared because of error: ' + error)); //
                // import schemes from remote server
                // 

                console.log('WebClient.initdev importing schemes');

                if (!WebClientConfig.remoteschemes) {
                  _context7.next = 44;
                  break;
                }

                console.log('WebClient.initdev starting importing schemes');
                i = 0;

              case 36:
                if (!(i < WebClientConfig.remoteschemes.length)) {
                  _context7.next = 44;
                  break;
                }

                importurl = WebClientConfig.remoteschemes[i].importurl;
                _context7.next = 40;
                return clientapicontrollers.importScheme(session, importurl);

              case 40:
                imported = _context7.sent;

              case 41:
                i++;
                _context7.next = 36;
                break;

              case 44:
                //
                // create schemes
                //
                console.log('WebClient.initdev creating schemes');

                if (!WebClientConfig.testnetworks) {
                  _context7.next = 58;
                  break;
                }

                console.log('WebClient.initdev starting creating schemes');
                i = 0;

              case 48:
                if (!(i < WebClientConfig.testnetworks.length)) {
                  _context7.next = 58;
                  break;
                }

                testnetwork = WebClientConfig.testnetworks[i];
                prodnetwork.xtra_data = prodnetwork.xtra_data ? prodnetwork.xtra_data : {};
                prodnetwork.xtra_data.origin = 'dev-built-in';
                _context7.next = 54;
                return clientapicontrollers.createScheme(session, testnetwork);

              case 54:
                scheme = _context7.sent;

              case 55:
                i++;
                _context7.next = 48;
                break;

              case 58:
                //
                // create contacts
                //
                console.log('WebClient.initdev creating contacts');
                accountarray = WebClientConfig.testaccounts;

                if (!accountarray) {
                  _context7.next = 74;
                  break;
                }

                i = 0;

              case 62:
                if (!(i < accountarray.length)) {
                  _context7.next = 74;
                  break;
                }

                accnt = accountarray[i];
                address = accnt.address;
                name = accnt.description;
                label = accnt.description;
                contactinfo = {
                  label: label
                };
                _context7.next = 70;
                return clientapicontrollers.createContact(session, name, address, contactinfo);

              case 70:
                contact = _context7.sent;

              case 71:
                i++;
                _context7.next = 62;
                break;

              case 74:
                //
                // create local vaults and wallets
                //
                creations = [];

                if (!(WebClientConfig.testvaults && WebClientConfig.testvaults.length > 0)) {
                  _context7.next = 146;
                  break;
                }

                console.log('WebClient.initdev creating vaults'); // create all the local test vaults

                i = 0;

              case 78:
                if (!(i < WebClientConfig.testvaults.length)) {
                  _context7.next = 88;
                  break;
                }

                vaultname = WebClientConfig.testvaults[i].name;
                passphrase = WebClientConfig.testvaults[i].passphrase;
                _context7.next = 83;
                return clientapicontrollers.createVault(session, vaultname, passphrase);

              case 83:
                creation = _context7.sent;
                creations[i] = creation;

              case 85:
                i++;
                _context7.next = 78;
                break;

              case 88:
                // go back to first vault
                creation = creations[0];

                if (!creation) {
                  _context7.next = 146;
                  break;
                }

                console.log('WebClient.initdev creating environment for first vault');
                vaultname = WebClientConfig.testvaults[0].name;
                passphrase = WebClientConfig.testvaults[0].passphrase; // local storage on the client

                console.log('WebClient.initdev creating client tokens & accounts for first vault'); // create a local session and
                // impersonate as a vault to save tokens and accounts under 'shared'

                vaultsession = clientapicontrollers.createBlankSessionObject();
                vaultnetworkconfig = clientapicontrollers.getDefaultSchemeConfig(0); //vaultnetworkconfig.ethnodeserver.web3_provider_url = (WebClientConfig.testnetworks[0] ? WebClientConfig.testnetworks[0].ethnodeserver.web3_provider_url : null);

                _context7.next = 98;
                return clientapicontrollers.setSessionNetworkConfig(vaultsession, vaultnetworkconfig);

              case 98:
                _context7.next = 100;
                return clientapicontrollers.openVault(vaultsession, vaultname, passphrase);

              case 100:
                vault = _context7.sent;

                if (!vault) {
                  _context7.next = 140;
                  break;
                }

                clientapicontrollers.impersonateVault(vaultsession, vault); // create tokens

                console.log('WebClient.initdev storing local client tokens for first vault');
                tokenarray = WebClientConfig.testtokens;

                if (!tokenarray) {
                  _context7.next = 122;
                  break;
                }

                i = 0;

              case 107:
                if (!(i < tokenarray.length)) {
                  _context7.next = 122;
                  break;
                }

                tkn = tokenarray[i];
                tokenaddress = tkn.address;
                web3providerurl = tkn.web3providerurl;
                description = tkn.description;
                tokenuuid = tkn.uuid;
                token = clientapicontrollers.importERC20Token(vaultsession, tokenaddress);
                if (web3providerurl) token.setWeb3ProviderUrl(web3providerurl);
                if (description) token.setLocalDescription(description);
                if (tokenuuid) token.uuid = tokenuuid; // we save this token

                _context7.next = 119;
                return clientapicontrollers.saveERC20Token(vaultsession, token);

              case 119:
                i++;
                _context7.next = 107;
                break;

              case 122:
                // create accounts
                console.log('WebClient.initdev storing local accounts for first vault');
                accountarray = WebClientConfig.testaccounts;

                if (!accountarray) {
                  _context7.next = 139;
                  break;
                }

                i = 0;

              case 126:
                if (!(i < accountarray.length)) {
                  _context7.next = 139;
                  break;
                }

                accnt = accountarray[i];
                address = accnt.address;
                privatekey = accnt.private_key;
                description = accnt.description;
                account = clientapicontrollers.createAccountObject(vaultsession, address, privatekey);
                account.setDescription(description);
                session.addAccountObject(account); // we save this account

                _context7.next = 136;
                return clientapicontrollers.saveAccountObject(vaultsession, account);

              case 136:
                i++;
                _context7.next = 126;
                break;

              case 139:
                clientapicontrollers.disconnectVault(vaultsession, vault);

              case 140:
                // store remote user credentials
                userarray = WebClientConfig.testusers;

                if (!userarray) {
                  _context7.next = 146;
                  break;
                }

                key = 'credentials';
                value = userarray;
                _context7.next = 146;
                return clientapicontrollers.putInVault(session, vaultname, key, value)["catch"](function (err) {
                  console.log('error storing credentials in vault ' + vaultname);
                });

              case 146:
                if (!(WebClientConfig.localwallets && WebClientConfig.localwallets.length > 0)) {
                  _context7.next = 343;
                  break;
                }

                console.log('WebClient.initdev creating wallets'); // reset creations

                creations = []; //
                // create all the local test wallets
                // (which will have a vault name based on their uuid)

                i = 0;

              case 150:
                if (!(i < WebClientConfig.localwallets.length)) {
                  _context7.next = 160;
                  break;
                }

                walletname = WebClientConfig.localwallets[i].name;
                passphrase = WebClientConfig.localwallets[i].passphrase;
                _context7.next = 155;
                return clientapicontrollers.createWallet(session, walletname, passphrase);

              case 155:
                creation = _context7.sent;
                creations[i] = creation;

              case 157:
                i++;
                _context7.next = 150;
                break;

              case 160:
                // go back to first wallet
                creation = creations[0];

                if (!creation) {
                  _context7.next = 330;
                  break;
                }

                console.log('WebClient.initdev creating environment for first wallet');
                walletname = WebClientConfig.localwallets[0].name;
                passphrase = WebClientConfig.localwallets[0].passphrase; // wallet

                _context7.next = 167;
                return clientapicontrollers.openWallet(session, walletname, passphrase);

              case 167:
                wallet = _context7.sent;

                if (!wallet) {
                  _context7.next = 330;
                  break;
                }

                // get wallet's local session and
                // save tokens and accounts under 'shared'
                walletsession = wallet._getSession(); // tokens and account stored on the client
                // for client cards

                console.log('WebClient.initdev creating client tokens & accounts for first wallet'); // create tokens

                console.log('WebClient.initdev storing local client tokens for first wallet');
                tokenarray = WebClientConfig.testtokens;

                if (!tokenarray) {
                  _context7.next = 190;
                  break;
                }

                i = 0;

              case 175:
                if (!(i < tokenarray.length)) {
                  _context7.next = 190;
                  break;
                }

                tkn = tokenarray[i];
                tokenaddress = tkn.address;
                web3providerurl = tkn.web3providerurl;
                description = tkn.description;
                tokenuuid = tkn.uuid;
                token = clientapicontrollers.importERC20Token(walletsession, tokenaddress);
                if (web3providerurl) token.setWeb3ProviderUrl(web3providerurl);
                if (description) token.setLocalDescription(description);
                if (tokenuuid) token.uuid = tokenuuid; // we save this token

                _context7.next = 187;
                return clientapicontrollers.saveERC20Token(walletsession, token);

              case 187:
                i++;
                _context7.next = 175;
                break;

              case 190:
                // create accounts
                console.log('WebClient.initdev storing local accounts for first wallet');
                accountarray = WebClientConfig.testaccounts;

                if (!accountarray) {
                  _context7.next = 208;
                  break;
                }

                i = 0;

              case 194:
                if (!(i < accountarray.length)) {
                  _context7.next = 208;
                  break;
                }

                accnt = accountarray[i];
                address = accnt.address;
                privatekey = accnt.private_key;
                description = accnt.description;
                account = clientapicontrollers.createAccountObject(walletsession, address, privatekey);
                account.setDescription(description);
                walletsession.addAccountObject(account);
                walletsession.user.addAccountObject(account); // we save this account

                _context7.next = 205;
                return clientapicontrollers.saveAccountObject(walletsession, account);

              case 205:
                i++;
                _context7.next = 194;
                break;

              case 208:
                if (!(WebClientConfig.testnetworks && WebClientConfig.localtestaccounts)) {
                  _context7.next = 250;
                  break;
                }

                console.log('WebClient.initdev creating local cards'); // create a card in the wallet for each test account
                // for each local test scheme

                i = 0;

              case 211:
                if (!(i < WebClientConfig.testnetworks.length)) {
                  _context7.next = 250;
                  break;
                }

                _context7.next = 214;
                return clientapicontrollers.getSchemeFromUUID(session, WebClientConfig.testnetworks[i].uuid);

              case 214:
                scheme = _context7.sent;

                if (!(scheme && !scheme.isRemote())) {
                  _context7.next = 247;
                  break;
                }

                j = 0;

              case 217:
                if (!(j < WebClientConfig.localtestaccounts.length)) {
                  _context7.next = 247;
                  break;
                }

                testaccount = WebClientConfig.localtestaccounts[j];
                _cardname = testaccount.description;
                _cardlabel = testaccount.description + '-on-' + scheme.getName();
                _address = testaccount.address;
                _context7.next = 224;
                return wallet.createCard(scheme, _cardname, null, _address)["catch"](function (err) {
                  console.log('error while creating local card ' + _cardname + ': ' + err);
                });

              case 224:
                card = _context7.sent;

                if (!card) {
                  _context7.next = 244;
                  break;
                }

                card.setLabel(_cardlabel);
                _context7.next = 229;
                return card.save();

              case 229:
                k = 0;

              case 230:
                if (!(k < WebClientConfig.localtesttokens)) {
                  _context7.next = 244;
                  break;
                }

                tkn = WebClientConfig.localtesttokens[k];
                token = card.getTokenObject(tkn.address);
                _context7.next = 235;
                return card.createTokenAccount(tkn);

              case 235:
                tokenaccount = _context7.sent;
                _context7.next = 238;
                return tokenaccount.init();

              case 238:
                tokenaccount.setDescription(tkn.description);
                _context7.next = 241;
                return tokenaccount.save();

              case 241:
                k++;
                _context7.next = 230;
                break;

              case 244:
                j++;
                _context7.next = 217;
                break;

              case 247:
                i++;
                _context7.next = 211;
                break;

              case 250:
                // if (WebClientConfig.testnetworks && WebClientConfig.localtestaccounts)
                //
                // remote cards
                //
                // remote user credentials
                userarray = WebClientConfig.remotetestusers;

                if (!userarray) {
                  _context7.next = 301;
                  break;
                }

                if (!(WebClientConfig.testnetworks && WebClientConfig.testaccounts && WebClientConfig.testaccounts[0] && WebClientConfig.testaccounts[0].address)) {
                  _context7.next = 301;
                  break;
                }

                console.log('WebClient.initdev creating remote cards');
                default_address = WebClientConfig.testaccounts[0].address; // default address to use

                i = 0;

              case 256:
                if (!(i < WebClientConfig.testnetworks.length)) {
                  _context7.next = 301;
                  break;
                }

                _context7.next = 259;
                return clientapicontrollers.getSchemeFromUUID(session, WebClientConfig.testnetworks[i].uuid);

              case 259:
                scheme = _context7.sent;

                if (!scheme) {
                  _context7.next = 297;
                  break;
                }

                if (!scheme.isRemote()) {
                  _context7.next = 295;
                  break;
                }

                networkconfig = scheme.getNetworkConfig();
                j = 0;

              case 264:
                if (!(j < userarray.length)) {
                  _context7.next = 295;
                  break;
                }

                usercredentials = userarray[j]; // create card if we can authenticate

                _context7.next = 268;
                return clientapicontrollers.createNetworkSession(networkconfig);

              case 268:
                blanksession = _context7.sent;
                _context7.next = 271;
                return clientapicontrollers.authenticate(blanksession, usercredentials.username, usercredentials.password);

              case 271:
                canauthenticate = _context7.sent;

                if (!canauthenticate) {
                  _context7.next = 292;
                  break;
                }

                _context7.next = 275;
                return clientapicontrollers.getSessionAccountObjects(blanksession, true);

              case 275:
                sessionaccounts = _context7.sent;
                _address = default_address;

                if (!sessionaccounts) {
                  _context7.next = 292;
                  break;
                }

                k = 0;

              case 279:
                if (!(k < sessionaccounts.length)) {
                  _context7.next = 292;
                  break;
                }

                _cardlabel = usercredentials.username + '-on-' + scheme.getName();
                _address = sessionaccounts[k].getAddress();
                _context7.next = 284;
                return wallet.createCard(scheme, usercredentials.username, usercredentials.password, _address)["catch"](function (err) {
                  console.log('error while creating remote card ' + usercredentials.username + ': ' + err);
                });

              case 284:
                card = _context7.sent;

                if (!card) {
                  _context7.next = 289;
                  break;
                }

                card.setLabel(_cardlabel);
                _context7.next = 289;
                return card.save();

              case 289:
                k++;
                _context7.next = 279;
                break;

              case 292:
                j++;
                _context7.next = 264;
                break;

              case 295:
                _context7.next = 298;
                break;

              case 297:
                console.log('error: could not find scheme with uuid ' + WebClientConfig.testnetworks[i].uuid);

              case 298:
                i++;
                _context7.next = 256;
                break;

              case 301:
                // if (userarray)
                // create token accounts
                // and store them
                console.log('WebClient.initdev creating token accounts for cards of first wallet');
                _context7.next = 304;
                return wallet.getCardList(true);

              case 304:
                cards = _context7.sent;
                i = 0;

              case 306:
                if (!(i < cards.length)) {
                  _context7.next = 329;
                  break;
                }

                card = cards[i];

                if (!card.isLocked()) {
                  _context7.next = 311;
                  break;
                }

                _context7.next = 311;
                return card.unlock();

              case 311:
                _context7.next = 313;
                return card.getTokenList(true);

              case 313:
                tokenarray = _context7.sent;

                if (!tokenarray) {
                  _context7.next = 326;
                  break;
                }

                j = 0;

              case 316:
                if (!(j < tokenarray.length)) {
                  _context7.next = 326;
                  break;
                }

                tkn = tokenarray[j];
                tokenaddress = tkn.getAddress();
                description = tkn.getAddress();
                _context7.next = 322;
                return card.createTokenAccount(tkn);

              case 322:
                tokenaccount = _context7.sent;

              case 323:
                j++;
                _context7.next = 316;
                break;

              case 326:
                i++;
                _context7.next = 306;
                break;

              case 329:
                // close wallet
                clientapicontrollers.closeWallet(session, wallet);

              case 330:
                //if (creation[0)
                //
                // import remote wallets from remote server
                // 
                console.log('WebClient.initdev importing remote wallets');

                if (!WebClientConfig.remotewallets) {
                  _context7.next = 343;
                  break;
                }

                i = 0;

              case 333:
                if (!(i < WebClientConfig.remotewallets.length)) {
                  _context7.next = 343;
                  break;
                }

                username = WebClientConfig.remotewallets[i].username;
                password = WebClientConfig.remotewallets[i].password;
                importurl = WebClientConfig.remotewallets[i].importurl;
                _context7.next = 339;
                return clientapicontrollers.importWallet(session, importurl, username, password);

              case 339:
                imported = _context7.sent;

              case 340:
                i++;
                _context7.next = 333;
                break;

              case 343:
                console.log('WebClient.initdev successfully finished initialization of dev environment');
                return _context7.abrupt("return", true);

              case 347:
                _context7.prev = 347;
                _context7.t0 = _context7["catch"](1);
                console.log('exception in WebClient.initdev: ' + _context7.t0);
                console.log(_context7.t0.stack);

              case 351:
                console.log('WebClient.initdev end');

              case 352:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[1, 347]]);
      }));

      function initdev(_x7) {
        return _initdev.apply(this, arguments);
      }

      return initdev;
    }() // compulsory  module functions

  }, {
    key: "loadModule",
    value: function loadModule(parentscriptloader, callback) {
      console.log('loadModule called for module ' + this.name);
      if (this.isloading) return;
      this.isloading = true;
      var self = this;
      var modulescriptloader = parentscriptloader.getChildLoader('webclientmoduleloader');
      modulescriptloader.load_scripts(function () {
        //self.init(); // init is called by index.js
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
      var global = this.global;
      global.registerHook('cleanSessionContext_hook', this.name, this.cleanSessionContext_hook);
      global.registerHook('getDefaultSchemeConfig_hook', this.name, this.getDefaultSchemeConfig_hook);
    }
  }, {
    key: "postRegisterModule",
    value: function postRegisterModule() {
      var _this = this;

      console.log('postRegisterModule called for ' + this.name);

      if (!this.isloading) {
        var global = this.global;
        var self = this;
        var rootscriptloader = global.getRootScriptLoader();
        this.loadModule(rootscriptloader, function () {
          if (_this.registerHooks) _this.registerHooks();
        });
      }
    }
  }, {
    key: "getDefaultSchemeConfig_hook",
    value: function getDefaultSchemeConfig_hook(result, params) {
      console.log('getDefaultSchemeConfig_hook called for ' + this.name);
      var global = this.global;
      var schemeconfig = params[0];
      var flag = params[1];

      switch (flag) {
        case 1:
          var WebClientConfig = this.WebClientConfig;
          var default_config = WebClientConfig.default_remote_network_config;

          if (default_config) {
            if (!schemeconfig.restserver) default_config.restserver = {};

            if (default_config.restserver) {
              schemeconfig.restserver.activate = default_config.restserver.activate;
              schemeconfig.restserver.rest_server_url = default_config.restserver.rest_server_url;
              schemeconfig.restserver.rest_server_api_path = default_config.restserver.rest_server_api_path;
            }

            if (!schemeconfig.authserver) schemeconfig.restserver = {};

            if (default_config.authserver) {
              schemeconfig.authserver.activate = default_config.authserver.activate;
              schemeconfig.authserver.rest_server_url = default_config.authserver.rest_server_url;
              schemeconfig.authserver.rest_server_api_path = default_config.authserver.rest_server_api_path;
            }

            if (!schemeconfig.keyserver) schemeconfig.restserver = {};

            if (default_config.keyserver) {
              schemeconfig.keyserver.activate = default_config.keyserver.activate;
              schemeconfig.keyserver.rest_server_url = default_config.keyserver.rest_server_url;
              schemeconfig.keyserver.rest_server_api_path = default_config.keyserver.rest_server_api_path;
            }
          }

          break;

        default:
          break;
      }

      result.push({
        module: this.name,
        handled: true
      });
      return true;
    }
  }, {
    key: "cleanSessionContext_hook",
    value: function cleanSessionContext_hook(result, params) {
      console.log('cleanSessionContext_hook called for ' + this.name);
      var global = this.global;
      var session = params[0]; // we clean the child sessions

      var clientapicontrollers = this.getClientAPI();
      clientapicontrollers.cleanChildSessionObjects(session);
      result.push({
        module: this.name,
        handled: true
      });
      return true;
    } // web functions

  }, {
    key: "getWebControllers",
    value: function getWebControllers() {
      return this.webclientcontrollers;
    }
  }, {
    key: "getClientControllers",
    value: function getClientControllers() {
      return this.webclientcontrollers;
    }
  }, {
    key: "getClientAPI",
    value: function getClientAPI() {
      var webclientcontrollers = this.webclientcontrollers;
      var clientapicontrollers = webclientcontrollers.getClientControllers();
      return clientapicontrollers;
    }
  }, {
    key: "getBuiltinCurrencies",
    value: function getBuiltinCurrencies() {
      if (this.namespace) {
        // we do not load built-in currenciers
        return {};
      } else {
        return require('./currencies.js')["default"];
      }
    }
  }, {
    key: "getCurrencies",
    value: function getCurrencies() {
      if (this.currencies) return this.currencies;
      this.currencies = this.getBuiltinCurrencies();
      return this.currencies;
    }
  }, {
    key: "getCurrency",
    value: function getCurrency(currencyuuid) {
      var currencies = this.getCurrencies();
      var array = Object.values(currencies);

      for (var i = 0; i < (array ? array.length : 0); i++) {
        if (array[i].uuid === currencyuuid) return array[i];
      }
    }
  }, {
    key: "getCurrencyProvider",
    value: function getCurrencyProvider(session, currencyuuid) {
      var currency = this.getCurrency(currencyuuid);

      if (currency && currency.provider) {
        var Provider = require('./providers/' + currency.provider)["default"];

        var provider = new Provider(session, currency);
        return provider;
      }
    }
  }, {
    key: "getBuiltinLocalSchemes",
    value: function getBuiltinLocalSchemes() {
      return this.WebClientConfig.builtin_local_schemes;
    }
  }, {
    key: "getBuiltinRemoteSchemes",
    value: function getBuiltinRemoteSchemes() {
      return this.WebClientConfig.builtin_remote_schemes;
    }
  }, {
    key: "getBuiltinLocalNetworks",
    value: function getBuiltinLocalNetworks() {
      return this.WebClientConfig.builtin_local_networks;
    }
  }, {
    key: "getBuiltinRemoteNetworks",
    value: function getBuiltinRemoteNetworks() {
      return this.WebClientConfig.builtin_remote_networks;
    }
  }, {
    key: "getDefaultRemoteNetwork",
    value: function getDefaultRemoteNetwork() {
      return this.WebClientConfig.default_remote_network_config;
    } // web local storage

  }, {
    key: "_clearWebLocalStorage",
    value: function () {
      var _clearWebLocalStorage2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (!(this.execution_env != 'dev')) {
                  _context8.next = 2;
                  break;
                }

                return _context8.abrupt("return", Promise.reject('can not clear LocalStorage in an execution environment other than dev!'));

              case 2:
                _context8.prev = 2;
                localStorage.clear();
                _context8.next = 9;
                break;

              case 6:
                _context8.prev = 6;
                _context8.t0 = _context8["catch"](2);
                return _context8.abrupt("return", Promise.reject('error clearing LocalStorage'));

              case 9:
                return _context8.abrupt("return", true);

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[2, 6]]);
      }));

      function _clearWebLocalStorage() {
        return _clearWebLocalStorage2.apply(this, arguments);
      }

      return _clearWebLocalStorage;
    }()
  }, {
    key: "getExecutionEnvironment",
    value: function getExecutionEnvironment() {
      if (this.execution_env) return this.execution_env;else return 'prod';
    }
  }, {
    key: "getClientConfig",
    value: function getClientConfig() {
      return this.WebClientConfig;
    }
  }, {
    key: "echo",
    value: function echo(string) {
      console.log('ECHO: ' + string);
    }
  }, {
    key: "echotest",
    value: function () {
      var _echotest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var _this2 = this;

        var WebClientConfig, clientapicontrollers, topsession, localsession, remotesession, username, password, networkuuid, networks, network, i, tokenarray, blocknumber, txhash, tx, data, data2, datastring, tx2, address, balance, tokenaddress, providerurl, position;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                console.log('WebClient.echotest called');
                _context9.prev = 1;

                if (!(this.getExecutionEnvironment() != 'dev')) {
                  _context9.next = 4;
                  break;
                }

                return _context9.abrupt("return");

              case 4:
                WebClientConfig = this.WebClientConfig;

                if (!(WebClientConfig.echotestdev !== true)) {
                  _context9.next = 7;
                  break;
                }

                return _context9.abrupt("return");

              case 7:
                console.log('Executing WebClient.echotest for dev execution environment');
                clientapicontrollers = this.getClientAPI();
                topsession = clientapicontrollers.getCurrentSessionObject();
                this.echo('top session uuid is ' + topsession.getSessionUUID());
                localsession = clientapicontrollers.createChildSessionObject(topsession);
                remotesession = clientapicontrollers.createChildSessionObject(topsession); //
                // session check for local/remote
                //

                if (!(WebClientConfig.authkeymodule_activate === true)) {
                  _context9.next = 33;
                  break;
                }

                if (!WebClientConfig.testusers) {
                  _context9.next = 33;
                  break;
                }

                username = WebClientConfig.testusers[0].username;
                password = WebClientConfig.testusers[0].password;
                networkuuid = WebClientConfig.testusers[0].networkuuid;
                networks = WebClientConfig.testnetworks;
                i = 0;

              case 20:
                if (!(i < (networks ? networks.length : 0))) {
                  _context9.next = 27;
                  break;
                }

                if (!(networkuuid === networks[i].uuid)) {
                  _context9.next = 24;
                  break;
                }

                network = networks[i];
                return _context9.abrupt("break", 27);

              case 24:
                i++;
                _context9.next = 20;
                break;

              case 27:
                if (!network) {
                  _context9.next = 32;
                  break;
                }

                _context9.next = 30;
                return clientapicontrollers.setSessionNetworkConfig(remotesession, network);

              case 30:
                _context9.next = 32;
                return clientapicontrollers.authenticate(remotesession, username, password);

              case 32:
                this.echo('switch to authenticated remote session ' + (remotesession ? remotesession.isAnonymous() ? 'NOT successful' : 'successful' : 'not created'));

              case 33:
                _context9.next = 35;
                return clientapicontrollers.getERC20TokenList(remotesession, true);

              case 35:
                tokenarray = _context9.sent;
                this.echo('list of tokens contains ' + (tokenarray && tokenarray.length ? tokenarray.length : 0) + ' element(s)'); //
                // ethnode
                //
                // web3 node info

                /*clientapicontrollers.getNodeInfo(remotesession, (err, nodeinfo)  => {
                	this.echo('is listening: ' + nodeinfo.islistening);
                });*/
                // current block number

                _context9.next = 39;
                return clientapicontrollers.readCurrentBlockNumber(remotesession)["catch"](function (err) {
                  _this2.echo('error: ' + err);
                });

              case 39:
                blocknumber = _context9.sent;
                this.echo('current block number is: ' + blocknumber); // transaction

                if (!(WebClientConfig.testtransactions && WebClientConfig.testtransactions[0])) {
                  _context9.next = 65;
                  break;
                }

                // using ethchainreader
                txhash = WebClientConfig.testtransactions[0].hash;
                _context9.next = 45;
                return clientapicontrollers.readTransaction(remotesession, txhash)["catch"](function (err) {
                  _this2.echo('error: ' + err);
                });

              case 45:
                tx = _context9.sent;
                this.echo('transaction data is: ' + (tx && tx.input_decoded_utf8 ? tx.input_decoded_utf8 : null));

                if (!tx) {
                  _context9.next = 54;
                  break;
                }

                _context9.next = 50;
                return tx.getTransactionReceiptData()["catch"](function (err) {
                  _this2.echo('error: ' + err);
                });

              case 50:
                data = _context9.sent;
                data2 = data ? {
                  blockNumber: data.blockNumber
                } : null;
                datastring = data2 ? JSON.stringify(data2) : null;
                this.echo('transaction receipt data is: ' + datastring);

              case 54:
                _context9.next = 56;
                return clientapicontrollers.getEthereumTransaction(remotesession, txhash)["catch"](function (err) {
                  _this2.echo('error: ' + err);
                });

              case 56:
                tx2 = _context9.sent;
                this.echo('transaction data is: ' + (tx2 ? tx2.data_decoded_utf8 : null));

                if (!tx2) {
                  _context9.next = 65;
                  break;
                }

                _context9.next = 61;
                return clientapicontrollers.getEthereumTransactionReceipt(remotesession, txhash)["catch"](function (err) {
                  _this2.echo('error: ' + err);
                });

              case 61:
                data = _context9.sent;
                data2 = data ? {
                  blockNumber: data.blockNumber
                } : null;
                datastring = data2 ? JSON.stringify(data2) : null;
                this.echo('transaction receipt data is: ' + datastring);

              case 65:
                if (!(WebClientConfig.testaccounts && WebClientConfig.testaccounts[0] && WebClientConfig.testaccounts[1])) {
                  _context9.next = 83;
                  break;
                }

                address = WebClientConfig.testaccounts[0].address; // web 3 account balance

                _context9.next = 69;
                return clientapicontrollers.getEthAddressBalance(remotesession, address)["catch"](function (err) {
                  _this2.echo('error: ' + err);
                });

              case 69:
                balance = _context9.sent;
                this.echo(address + ' balance is: ' + balance); // tokens

                if (!WebClientConfig.testtokens) {
                  _context9.next = 83;
                  break;
                }

                i = 0;

              case 73:
                if (!(i < WebClientConfig.testtokens.length)) {
                  _context9.next = 83;
                  break;
                }

                tokenaddress = WebClientConfig.testtokens[i].address;
                providerurl = WebClientConfig.testtokens[i].web3providerurl;
                _context9.next = 78;
                return clientapicontrollers.getAddressERC20Position(remotesession, providerurl, tokenaddress, address)["catch"](function (err) {
                  console.log('error: ' + err);
                });

              case 78:
                position = _context9.sent;
                this.echo(address + ' position is: ' + position);

              case 80:
                i++;
                _context9.next = 73;
                break;

              case 83:
                _context9.next = 89;
                break;

              case 85:
                _context9.prev = 85;
                _context9.t0 = _context9["catch"](1);
                this.echo('exception in WebClient.echotest: ' + _context9.t0);
                console.log(_context9.t0.stack);

              case 89:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[1, 85]]);
      }));

      function echotest() {
        return _echotest.apply(this, arguments);
      }

      return echotest;
    }()
  }], [{
    key: "getObject",
    value: function getObject() {
      if (WebClient.webclient) return WebClient.webclient;
      WebClient.webclient = new WebClient();
      return WebClient.webclient;
    }
  }]);

  return WebClient;
}(); //module.exports = WebClient;
// Note: webpack does not handle well import on module.exports


var _default = WebClient;
exports["default"] = _default;