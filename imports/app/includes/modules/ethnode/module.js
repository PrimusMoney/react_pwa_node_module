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

    this.name = 'ethnode-currencies';
    this.current_version = "standard";
    this.global = null; // put by global on registration

    this.isready = false;
    this.isloading = false;
    this.web3providers = [];
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

      var modulescriptloader; // look if ethnodecurrenciesloader already created (e.g. for loading in node.js)

      modulescriptloader = global.findScriptLoader('ethnodecurrenciesloader'); // if not, create on as child as parent script loader passed in argument

      if (!modulescriptloader) modulescriptloader = global.getScriptLoader('ethnodecurrenciesloader', parentscriptloader);
      var xtraroot = './includes';
      var interfaceroot = xtraroot + '/interface'; //modulescriptloader.push_script( interfaceroot + '/wallet-server-access.js');

      var moduleroot = xtraroot + '/modules/ethnode'; // uniswap module

      modulescriptloader.push_script(moduleroot + '/uniswap/module.js');
      modulescriptloader.load_scripts(function () {
        self.init();
        if (callback) callback(null, self);
      });
      return modulescriptloader;
    }
  }, {
    key: "_getGlobalObject",
    value: function _getGlobalObject() {
      var _global = this.global ? this.global : null;

      if (!_global) {
        var _GlobalClass2;

        if (typeof window !== 'undefined') {
          _GlobalClass2 = window && window.simplestore && window.simplestore.Global ? window.simplestore.Global : null;
        } else if (typeof global !== 'undefined') {
          // we are in node js
          _GlobalClass2 = global && global.simplestore && global.simplestore.Global ? global.simplestore.Global : null;
        }

        _global = _GlobalClass2.getGlobalObject();
      }

      return _global;
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
      var global = this.global; //hooks

      global.registerHook('setSessionNetworkConfig_asynchook', this.name, this.setSessionNetworkConfig_asynchook); // signal module is ready

      var rootscriptloader = global.getRootScriptLoader();
      rootscriptloader.signalEvent('on_ethnode_currencies_module_ready');
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
    key: "setSessionNetworkConfig_asynchook",
    value: function () {
      var _setSessionNetworkConfig_asynchook = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(result, params) {
        var global, session, networkconfig, ethnodemodule, ethnodeserver, ethereumnodeaccessmodule, _ethnodemodule, provider, _ethereumnodeaccessinstance, ethereumnodeaccessinstance, restconnection, Xtra_EthereumNodeAccess;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('setSessionNetworkConfig_asynchook called for ' + this.name);
                global = this.global;
                session = params[0];
                networkconfig = params[1]; // we fix the problems of ethnode module version 0.30.10
                // and set things for ethnode module until it handles setSessionNetworkConfig_asynchook

                ethnodemodule = global.getModuleObject('ethnode');
                ethnodeserver = networkconfig.ethnodeserver ? networkconfig.ethnodeserver : {};

                if (ethnodeserver.activate === true) {
                  session.overload_ethereum_node_access = true; // fix Xtra_EthereumNodeAccess using rest_server_url, which it should not
                  // and which not set if storage deactivated

                  if (session.getXtraConfigValue('rest_server_url') === ':rest_server_url') {
                    session.xtraconfig['rest_server_url'] = ethnodeserver.rest_server_url;
                    session.xtraconfig['rest_server_api_path'] = ethnodeserver.rest_server_api_path; // reset web3providermap

                    session.web3providermap = {};
                  } // set web3 provider for the local session 


                  if (ethnodeserver.web3_provider_url) ethnodemodule.setWeb3ProviderUrl(ethnodeserver.web3_provider_url, session, function (err, res) {
                    if (err) {
                      console.log('error setting web3 provider url for session ' + session.getSessionUUID() + ': ' + err);
                    }
                  }); // !!! we do not overload rest_server_url for the moment
                  // reset ethereumnodeaccess
                  // in case ethereum_node_access_instance has already been instantiated to EthereumNodeAccess
                  // and not Xtra_EthereumNodeAccess

                  ethereumnodeaccessmodule = global.getModuleObject('ethereum-node-access');
                  ethereumnodeaccessmodule.clearEthereumNodeAccessInstance(session); // set entry in web3providermap
                  // in case enty has already been filled and to avoid wrong ethnode.rest_server
                  // when storageserver and ethnodeserver are different

                  if (session.web3providermap) {
                    _ethnodemodule = global.getModuleObject('ethnode');
                    provider = session.web3providermap[ethnodeserver.web3_provider_url];

                    if (!provider) {
                      _ethereumnodeaccessinstance = _ethnodemodule.getEthereumNodeAccessInstance(session, ethnodeserver.web3_provider_url);
                      provider = _ethnodemodule.createWeb3ProviderObject(session, ethnodeserver.web3_provider_url, _ethereumnodeaccessinstance);
                    } // change Xtra_EthereumNodeAccess RestConnection


                    ethereumnodeaccessinstance = provider.getEthereumNodeAccessInstance();
                    restconnection = session.createRestConnection(ethnodeserver.rest_server_url, ethnodeserver.rest_server_api_path);
                    Xtra_EthereumNodeAccess = global.getGlobalStoredObject('Xtra_EthereumNodeAccess');

                    if (ethereumnodeaccessinstance instanceof Xtra_EthereumNodeAccess !== true) {
                      // someone took the spot for web3_provider_url with another type of EthereumNodeAccess
                      // (happens when returning from oauth2 login)
                      ethereumnodeaccessinstance = new Xtra_EthereumNodeAccess(session);
                      ethereumnodeaccessinstance.web3providerurl = ethnodeserver.web3_provider_url; // otherwise an exception is thrown in Web3Provider.getEthereumNodeAccessInstance

                      provider.ethereumnodeaccessinstance = ethereumnodeaccessinstance;
                    }

                    ethereumnodeaccessinstance.setRestConnection(restconnection);
                  }
                } else if (ethnodeserver.activate === false) {
                  session.overload_ethereum_node_access = false; // set web3 provider for the local session

                  if (ethnodeserver.web3_provider_url) ethnodemodule.setWeb3ProviderUrl(ethnodeserver.web3_provider_url, session, function (err, res) {
                    if (err) {
                      console.log('error setting web3 provider url for session ' + session.getSessionUUID() + ': ' + err);
                    }
                  });
                }

                result.push({
                  module: this.name,
                  handled: true
                });
                return _context.abrupt("return");

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setSessionNetworkConfig_asynchook(_x, _x2) {
        return _setSessionNetworkConfig_asynchook.apply(this, arguments);
      }

      return setSessionNetworkConfig_asynchook;
    }() //
    // API
    //

  }, {
    key: "_getClientAPI",
    value: function _getClientAPI() {
      if (this.clientapicontrollers) return this.clientapicontrollers;
      var global = this.global;
      var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
      this.clientapicontrollers = mvcclientwalletmodule._getClientAPI();
      return this.clientapicontrollers;
    }
  }, {
    key: "getCurrencyEthNodeServer",
    value: function () {
      var _getCurrencyEthNodeServer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(session, currency) {
        var ethnodeserver, scheme, networkconfig, _scheme;

        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (currency) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", Promise.reject('currency is undefined'));

              case 2:
                // look in currency if ethnodeserver is defined
                ethnodeserver = currency.ethnodeserver ? currency.ethnodeserver : null;

                if (ethnodeserver) {
                  _context2.next = 15;
                  break;
                }

                if (!currency.web3providerurl) {
                  _context2.next = 8;
                  break;
                }

                ethnodeserver = {
                  activate: false,
                  web3_provider_url: currency.web3providerurl
                };
                _context2.next = 13;
                break;

              case 8:
                _context2.next = 10;
                return this._getCurrencyScheme(session, currency);

              case 10:
                scheme = _context2.sent;
                networkconfig = scheme.getNetworkConfig();
                ethnodeserver = networkconfig.ethnodeserver ? networkconfig.ethnodeserver : {};

              case 13:
                _context2.next = 25;
                break;

              case 15:
                if (!(ethnodeserver.activate === true)) {
                  _context2.next = 25;
                  break;
                }

                if (currency.scheme_uuid) {
                  _context2.next = 20;
                  break;
                }

                throw 'CONFIGURATION ERROR: currency with uuid ' + currency + ' does not have a scheme uuid!!!';

              case 20:
                _context2.next = 22;
                return this._getCurrencyScheme(session, currency);

              case 22:
                _scheme = _context2.sent;

                if (_scheme.isRemote()) {
                  _context2.next = 25;
                  break;
                }

                throw 'CONFIGURATION ERROR: currency with uuid ' + currency + ' specifies a scheme uuid that is not remote!!!';

              case 25:
                if (!ethnodeserver.uuid) ethnodeserver.uuid = currency.uuid; // give uuid of currency to help putting ethnodeserver in maps

                return _context2.abrupt("return", ethnodeserver);

              case 27:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getCurrencyEthNodeServer(_x3, _x4) {
        return _getCurrencyEthNodeServer.apply(this, arguments);
      }

      return getCurrencyEthNodeServer;
    }()
  }, {
    key: "getCurrencyWeb3ProviderUrl",
    value: function () {
      var _getCurrencyWeb3ProviderUrl = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(session, currency) {
        var ethnodeserver;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.getCurrencyEthNodeServer(session, currency);

              case 2:
                ethnodeserver = _context3.sent;

                if (!ethnodeserver) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt("return", ethnodeserver.web3_provider_url);

              case 7:
                console.log('currency is badly configured ' + currency.uuid);

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getCurrencyWeb3ProviderUrl(_x5, _x6) {
        return _getCurrencyWeb3ProviderUrl.apply(this, arguments);
      }

      return getCurrencyWeb3ProviderUrl;
    }()
  }, {
    key: "_setMonitoredEthereumNodeAccess",
    value: function () {
      var _setMonitoredEthereumNodeAccess2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(session, ethnodeserver) {
        var global, ethnodemodule, web3provider, ethereumnodeaccessinstance, _ethnodemodule2, Xtra_EthereumNodeAccess, restconnection;

        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                global = this.global;

                if (ethnodeserver.web3_provider_url) {
                  ethnodemodule = global.getModuleObject('ethnode');
                  web3provider = ethnodemodule.getWeb3ProviderObject(session, ethnodeserver.web3_provider_url);

                  if (web3provider) {
                    ethereumnodeaccessinstance = web3provider.getEthereumNodeAccessInstance();
                  } else {
                    // provider not created yet				
                    _ethnodemodule2 = global.getModuleObject('ethnode');

                    if (ethnodeserver.activate) {
                      Xtra_EthereumNodeAccess = global.getGlobalStoredObject('Xtra_EthereumNodeAccess');
                      ethereumnodeaccessinstance = new Xtra_EthereumNodeAccess(session);
                      ethereumnodeaccessinstance.web3providerurl = ethnodeserver.web3_provider_url; // otherwise an exception is thrown in Web3Provider.getEthereumNodeAccessInstance

                      restconnection = session.createRestConnection(ethnodeserver.rest_server_url, ethnodeserver.rest_server_api_path);
                      ethereumnodeaccessinstance.setRestConnection(restconnection);
                    } else {
                      ethereumnodeaccessinstance = _ethnodemodule2.getEthereumNodeAccessInstance(session, ethnodeserver.web3_provider_url);
                    }

                    web3provider = _ethnodemodule2.createWeb3ProviderObject(session, ethnodeserver.web3_provider_url, ethereumnodeaccessinstance);

                    _ethnodemodule2.putWeb3ProviderObject(session, web3provider);
                  } // set the legacy implicit values stored in session


                  session.ethereum_node_access_instance = ethereumnodeaccessinstance;
                  session.web3providerurl = ethnodeserver.web3_provider_url;
                }

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function _setMonitoredEthereumNodeAccess(_x7, _x8) {
        return _setMonitoredEthereumNodeAccess2.apply(this, arguments);
      }

      return _setMonitoredEthereumNodeAccess;
    }()
  }, {
    key: "_canWalletHandleScheme",
    value: function _canWalletHandleScheme(wallet, scheme) {
      var global = this.global;
      var currenciesmodule = global.getModuleObject('currencies');
      return currenciesmodule._canWalletHandleScheme(wallet, scheme);
    }
  }, {
    key: "_createDummyWalletSession",
    value: function () {
      var _createDummyWalletSession2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(walletsession) {
        var global, currenciesmodule, fetchsession, ethnodemodule, erc20module;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                global = this.global;
                currenciesmodule = global.getModuleObject('currencies');
                _context5.next = 4;
                return currenciesmodule._createDummyProxySession(walletsession);

              case 4:
                fetchsession = _context5.sent;
                // specific to ethnode
                ethnodemodule = global.getModuleObject('ethnode');
                erc20module = global.getModuleObject('erc20');
                fetchsession.contracts = ethnodemodule.getContractsObject(fetchsession); // register TokenERC20 in the contracts object

                fetchsession.contracts.registerContractClass('TokenERC20', erc20module.ERC20Token);
                fetchsession.web3providermap = walletsession.web3providermap;
                return _context5.abrupt("return", fetchsession);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function _createDummyWalletSession(_x9) {
        return _createDummyWalletSession2.apply(this, arguments);
      }

      return _createDummyWalletSession;
    }()
  }, {
    key: "_getCurrencyScheme",
    value: function () {
      var _getCurrencyScheme2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(session, currency) {
        var global, currenciesmodule;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                global = this.global;
                currenciesmodule = global.getModuleObject('currencies');
                return _context6.abrupt("return", currenciesmodule.getCurrencyScheme(session, currency));

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function _getCurrencyScheme(_x10, _x11) {
        return _getCurrencyScheme2.apply(this, arguments);
      }

      return _getCurrencyScheme;
    }()
  }, {
    key: "_getCurrencySessionMap",
    value: function _getCurrencySessionMap(session) {
      var currencysessionmap = session.getSessionVariable('currencysessionmap');

      if (!currencysessionmap) {
        currencysessionmap = Object.create(null);
        session.setSessionVariable('currencysessionmap', currencysessionmap);
      }

      return currencysessionmap;
    }
  }, {
    key: "_getChildSessionOnCurrency",
    value: function () {
      var _getChildSessionOnCurrency2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(parentsession, currency) {
        var global, _apicontrollers, currencysessionmap, currencyuuid, childsession, scheme, ethnodeserver, networkconfig;

        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                global = this.global;
                _apicontrollers = this._getClientAPI();

                if (parentsession) {
                  _context7.next = 4;
                  break;
                }

                return _context7.abrupt("return", Promise.reject('could not create child of null session'));

              case 4:
                currencysessionmap = this._getCurrencySessionMap(parentsession); // we could look if a pre-existing session with corresponding web3providerurl could be re-used

                currencyuuid = currency.uuid;

                if (!currencysessionmap[currencyuuid]) {
                  _context7.next = 8;
                  break;
                }

                return _context7.abrupt("return", currencysessionmap[currencyuuid]);

              case 8:
                _context7.next = 10;
                return _apicontrollers.createChildSessionObject(parentsession);

              case 10:
                childsession = _context7.sent;
                childsession.MYCURRENCY = this.current_version;
                if (!parentsession.MYCURRENCY_ROOT) parentsession.MYCURRENCY_ROOT = this.current_version ? this.current_version : 'xxx';
                _context7.next = 15;
                return this._getCurrencyScheme(parentsession, currency);

              case 15:
                scheme = _context7.sent;
                if (scheme.isRemote()) childsession.overload_ethereum_node_access = true;else childsession.overload_ethereum_node_access = false; // set ethnode context

                _context7.next = 19;
                return this.getCurrencyEthNodeServer(parentsession, currency);

              case 19:
                ethnodeserver = _context7.sent;
                _context7.next = 22;
                return this._setMonitoredEthereumNodeAccess(childsession, ethnodeserver);

              case 22:
                // call setSessionNetworkConfig that will invoke setSessionNetworkConfig_hook
                networkconfig = scheme.getNetworkConfig();
                _context7.next = 25;
                return _apicontrollers.setSessionNetworkConfig(childsession, networkconfig);

              case 25:
                currencysessionmap[currencyuuid] = childsession;
                return _context7.abrupt("return", childsession);

              case 27:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function _getChildSessionOnCurrency(_x12, _x13) {
        return _getChildSessionOnCurrency2.apply(this, arguments);
      }

      return _getChildSessionOnCurrency;
    }()
  }, {
    key: "_getMonitoredCurrencySession",
    value: function () {
      var _getMonitoredCurrencySession2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(session, wallet, currency) {
        var fetchsession, global, scheme, walletschemeuuid, schemeuuid, _walletsession, currencysessionmap, ethnodeserver, walletsession;

        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                global = this.global;
                _context8.next = 3;
                return this._getCurrencyScheme(session, currency);

              case 3:
                scheme = _context8.sent;

                if (scheme) {
                  _context8.next = 6;
                  break;
                }

                return _context8.abrupt("return", Promise.reject('scheme is not defined'));

              case 6:
                if (!scheme.isRemote()) {
                  _context8.next = 34;
                  break;
                }

                if (!wallet) {
                  _context8.next = 31;
                  break;
                }

                walletschemeuuid = wallet.getSchemeUUID();
                schemeuuid = scheme.getSchemeUUID();

                if (!this._canWalletHandleScheme(wallet, scheme)) {
                  _context8.next = 28;
                  break;
                }

                // use wallet session
                _walletsession = wallet._getSession();
                currencysessionmap = this._getCurrencySessionMap(_walletsession);
                fetchsession = currencysessionmap[currency.uuid];

                if (fetchsession) {
                  _context8.next = 26;
                  break;
                }

                _context8.next = 17;
                return this._createDummyWalletSession(_walletsession);

              case 17:
                fetchsession = _context8.sent;
                fetchsession.DUMMY_SESSION_CURRENCY = currency;
                fetchsession.DUMMY_SESSION_WALLET = wallet;
                currencysessionmap[currency.uuid] = fetchsession;
                _context8.next = 23;
                return this.getCurrencyEthNodeServer(session, currency);

              case 23:
                ethnodeserver = _context8.sent;
                _context8.next = 26;
                return this._setMonitoredEthereumNodeAccess(fetchsession, ethnodeserver);

              case 26:
                _context8.next = 29;
                break;

              case 28:
                return _context8.abrupt("return", Promise.reject('ERR_MISSING_CREDENTIALS'));

              case 29:
                _context8.next = 32;
                break;

              case 31:
                return _context8.abrupt("return", Promise.reject('ERR_MISSING_CREDENTIALS'));

              case 32:
                _context8.next = 44;
                break;

              case 34:
                if (!wallet) {
                  _context8.next = 41;
                  break;
                }

                walletsession = wallet._getSession();
                _context8.next = 38;
                return this._getChildSessionOnCurrency(walletsession, currency);

              case 38:
                fetchsession = _context8.sent;
                _context8.next = 44;
                break;

              case 41:
                _context8.next = 43;
                return this._getChildSessionOnCurrency(session, currency);

              case 43:
                fetchsession = _context8.sent;

              case 44:
                return _context8.abrupt("return", fetchsession);

              case 45:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function _getMonitoredCurrencySession(_x14, _x15, _x16) {
        return _getMonitoredCurrencySession2.apply(this, arguments);
      }

      return _getMonitoredCurrencySession;
    }()
  }, {
    key: "_canCardHandleScheme",
    value: function _canCardHandleScheme(card, scheme) {
      if (!card || !scheme) return false;

      if (scheme.isRemote()) {
        var cardschemeuuid = card.getSchemeUUID(); // TODO: we could look if authserver are the same

        if (cardschemeuuid && cardschemeuuid === scheme.getSchemeUUID()) return true;else return false;
      } else {
        return true;
      }
    }
  }, {
    key: "_createDummyCardSession",
    value: function () {
      var _createDummyCardSession2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(cardsession) {
        var global, currenciesmodule, dummysession, ethnodemodule, erc20module;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                global = this.global;
                currenciesmodule = global.getModuleObject('currencies');
                _context9.next = 4;
                return currenciesmodule._createDummyProxySession(cardsession);

              case 4:
                dummysession = _context9.sent;
                // specific to ethnode
                ethnodemodule = global.getModuleObject('ethnode');
                erc20module = global.getModuleObject('erc20');
                dummysession.contracts = ethnodemodule.getContractsObject(dummysession); // register TokenERC20 in the contracts object

                dummysession.contracts.registerContractClass('TokenERC20', erc20module.ERC20Token);
                dummysession.web3providermap = cardsession.web3providermap;
                return _context9.abrupt("return", dummysession);

              case 11:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function _createDummyCardSession(_x17) {
        return _createDummyCardSession2.apply(this, arguments);
      }

      return _createDummyCardSession;
    }()
  }, {
    key: "_getCardCurrencySessionMap",
    value: function _getCardCurrencySessionMap(session, card, currency) {
      var currencysessionmap;

      if (card) {
        // we specify different currency maps by carduuid
        // in case different cards share the same session (e.g. wallet's session)
        // and so to avoid collisions
        var cardsessionmap = session.getSessionVariable('cardsessionmap');

        if (!cardsessionmap) {
          cardsessionmap = Object.create(null);
          session.setSessionVariable('cardsessionmap', cardsessionmap);
        }

        var carduuid = card.getCardUUID();
        var cardcurrencysessionmap = cardsessionmap[carduuid];

        if (!cardcurrencysessionmap) {
          cardcurrencysessionmap = Object.create(null);
          cardsessionmap[carduuid] = cardcurrencysessionmap;
        }

        currencysessionmap = cardcurrencysessionmap;
      } else {
        currencysessionmap = this._getCurrencySessionMap(session, currency);
      }

      return currencysessionmap;
    }
  }, {
    key: "_getChildSessionOnCardCurrency",
    value: function () {
      var _getChildSessionOnCardCurrency2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(parentsession, card, currency) {
        var global, _apicontrollers, currencysessionmap, currencyuuid, childsession, scheme, ethnodeserver, networkconfig;

        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (card) {
                  _context10.next = 2;
                  break;
                }

                return _context10.abrupt("return", this._getChildSessionOnCurrency(parentsession, currency));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();

                if (parentsession) {
                  _context10.next = 6;
                  break;
                }

                return _context10.abrupt("return", Promise.reject('could not create child of null session'));

              case 6:
                currencysessionmap = this._getCardCurrencySessionMap(parentsession, card, currency); // we could look if a pre-existing session with corresponding web3providerurl could be re-used

                currencyuuid = currency.uuid;

                if (!currencysessionmap[currencyuuid]) {
                  _context10.next = 10;
                  break;
                }

                return _context10.abrupt("return", currencysessionmap[currencyuuid]);

              case 10:
                _context10.next = 12;
                return _apicontrollers.createChildSessionObject(parentsession);

              case 12:
                childsession = _context10.sent;
                childsession.MYCURRENCY = this.current_version;
                if (!parentsession.MYCURRENCY_ROOT) parentsession.MYCURRENCY_ROOT = this.current_version ? this.current_version : 'xxx';
                _context10.next = 17;
                return this._getCurrencyScheme(parentsession, currency);

              case 17:
                scheme = _context10.sent;
                if (scheme.isRemote()) childsession.overload_ethereum_node_access = true;else childsession.overload_ethereum_node_access = false; // set ethnode context

                _context10.next = 21;
                return this.getCurrencyEthNodeServer(parentsession, currency);

              case 21:
                ethnodeserver = _context10.sent;
                _context10.next = 24;
                return this._setMonitoredEthereumNodeAccess(childsession, ethnodeserver);

              case 24:
                // call setSessionNetworkConfig that will invoke setSessionNetworkConfig_hook
                networkconfig = scheme.getNetworkConfig();
                _context10.next = 27;
                return _apicontrollers.setSessionNetworkConfig(childsession, networkconfig);

              case 27:
                currencysessionmap[currencyuuid] = childsession;
                return _context10.abrupt("return", childsession);

              case 29:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function _getChildSessionOnCardCurrency(_x18, _x19, _x20) {
        return _getChildSessionOnCardCurrency2.apply(this, arguments);
      }

      return _getChildSessionOnCardCurrency;
    }()
  }, {
    key: "_getMonitoredCardSessionForCurrency",
    value: function () {
      var _getMonitoredCardSessionForCurrency2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(session, wallet, card, currency) {
        var fetchsession, global, scheme, _cardsession, currencysessionmap, ethnodeserver, cardsession;

        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                global = this.global;
                _context11.next = 3;
                return this._getCurrencyScheme(session, currency);

              case 3:
                scheme = _context11.sent;

                if (scheme) {
                  _context11.next = 6;
                  break;
                }

                return _context11.abrupt("return", Promise.reject('scheme is not defined'));

              case 6:
                if (!scheme.isRemote()) {
                  _context11.next = 32;
                  break;
                }

                if (!card) {
                  _context11.next = 29;
                  break;
                }

                if (!this._canCardHandleScheme(card, scheme)) {
                  _context11.next = 26;
                  break;
                }

                // use wallet session
                _cardsession = card._getSession();
                currencysessionmap = this._getCardCurrencySessionMap(_cardsession, card, currency);
                fetchsession = currencysessionmap[currency.uuid];

                if (fetchsession) {
                  _context11.next = 24;
                  break;
                }

                _context11.next = 15;
                return this._createDummyCardSession(_cardsession);

              case 15:
                fetchsession = _context11.sent;
                fetchsession.DUMMY_SESSION_CURRENCY = currency;
                fetchsession.DUMMY_SESSION_CARD = card;
                currencysessionmap[currency.uuid] = fetchsession;
                _context11.next = 21;
                return this.getCurrencyEthNodeServer(session, currency);

              case 21:
                ethnodeserver = _context11.sent;
                _context11.next = 24;
                return this._setMonitoredEthereumNodeAccess(fetchsession, ethnodeserver);

              case 24:
                _context11.next = 27;
                break;

              case 26:
                return _context11.abrupt("return", Promise.reject('ERR_MISSING_CREDENTIALS'));

              case 27:
                _context11.next = 30;
                break;

              case 29:
                return _context11.abrupt("return", Promise.reject('ERR_MISSING_CREDENTIALS'));

              case 30:
                _context11.next = 42;
                break;

              case 32:
                if (!card) {
                  _context11.next = 39;
                  break;
                }

                cardsession = card._getSession();
                _context11.next = 36;
                return this._getChildSessionOnCardCurrency(cardsession, card, currency);

              case 36:
                fetchsession = _context11.sent;
                _context11.next = 42;
                break;

              case 39:
                _context11.next = 41;
                return this._getChildSessionOnCurrency(session, currency);

              case 41:
                fetchsession = _context11.sent;

              case 42:
                return _context11.abrupt("return", fetchsession);

              case 43:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function _getMonitoredCardSessionForCurrency(_x21, _x22, _x23, _x24) {
        return _getMonitoredCardSessionForCurrency2.apply(this, arguments);
      }

      return _getMonitoredCardSessionForCurrency;
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


_GlobalClass.getGlobalObject().registerModuleDepency('ethnode-currencies', 'common');