'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Module = /*#__PURE__*/function () {
  function Module() {
    _classCallCheck(this, Module);

    this.name = 'mvc-currencies';
    this.current_version = "0.30.10.2021.06.30";
    this.global = null; // put by global on registration

    this.app = null;
    this.controllers = null;
    this.isready = false;
    this.isloading = false;
    this.clientapicontrollers = null; // API gateway

    this.currenciesapicontrollers = null; // API gateway
  }

  _createClass(Module, [{
    key: "init",
    value: function init() {
      console.log('module init called for ' + this.name);
      var global = this.global;
      this.isready = true;
    } // compulsory  module functions

  }, {
    key: "loadModule",
    value: function loadModule(parentscriptloader, callback) {
      console.log('loadModule called for module ' + this.name);
      if (this.isloading) return;
      this.isloading = true;
      var self = this;
      var modulescriptloader = parentscriptloader.getChildLoader('mvccurrenciesloader');
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
    } // optional module functions

  }, {
    key: "registerHooks",
    value: function registerHooks() {
      console.log('module registerHooks called for ' + this.name);
      var global = this.global; // hooks
      // signal module is ready

      var rootscriptloader = global.getRootScriptLoader();
      rootscriptloader.signalEvent('on_mvc_currencies_module_ready');
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
    }
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
    key: "_getCurrenciesAPI",
    value: function _getCurrenciesAPI() {
      if (this.currenciesapicontrollers) return this.currenciesapicontrollers;
      var global = this.global;
      var currenciesmodules = global.getModuleObject('currenciesmodules');
      this.currenciesapicontrollers = currenciesmodules.getControllersObject();
      return this.currenciesapicontrollers;
    } //
    // hooks
    //
    //
    // API
    //
    //
    // Ethnode
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
    key: "_createMonitoredEthereumTransaction",
    value: function () {
      var _createMonitoredEthereumTransaction2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(wallet, card, session, fromaccount) {
        var global, _apicontrollers, transaction;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                transaction = _apicontrollers.createEthereumTransaction(session, fromaccount);
                return _context.abrupt("return", transaction);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _createMonitoredEthereumTransaction(_x, _x2, _x3, _x4) {
        return _createMonitoredEthereumTransaction2.apply(this, arguments);
      }

      return _createMonitoredEthereumTransaction;
    }() //
    // Scheme functions
    //

  }, {
    key: "_getChildSessionOnScheme",
    value: function () {
      var _getChildSessionOnScheme2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(parentsession, scheme) {
        var global, _apicontrollers, schemesessionmap, schemeuuid, childsession, networkconfig;

        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                global = this.global;
                _apicontrollers = this._getClientAPI();

                if (parentsession) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return", Promise.reject('could not find create child of null session'));

              case 4:
                schemesessionmap = parentsession.getSessionVariable('schemesessionmap');

                if (!schemesessionmap) {
                  schemesessionmap = Object.create(null);
                  parentsession.setSessionVariable('schemesessionmap', schemesessionmap);
                } // we could look if a pre-existing session with corresponding web3providerurl could be re-used


                schemeuuid = scheme.getSchemeUUID();

                if (!schemesessionmap[schemeuuid]) {
                  _context2.next = 9;
                  break;
                }

                return _context2.abrupt("return", schemesessionmap[schemeuuid]);

              case 9:
                _context2.next = 11;
                return _apicontrollers.createChildSessionObject(parentsession);

              case 11:
                childsession = _context2.sent;
                childsession.MYQUOTE = this.current_version;
                if (!parentsession.MYQUOTE_ROOT) parentsession.MYQUOTE_ROOT = this.current_version;
                networkconfig = scheme.getNetworkConfig();
                _context2.next = 17;
                return _apicontrollers.setSessionNetworkConfig(childsession, networkconfig);

              case 17:
                schemesessionmap[schemeuuid] = childsession;
                return _context2.abrupt("return", childsession);

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _getChildSessionOnScheme(_x5, _x6) {
        return _getChildSessionOnScheme2.apply(this, arguments);
      }

      return _getChildSessionOnScheme;
    }()
  }, {
    key: "_getMonitoredSchemeSession",
    value: function () {
      var _getMonitoredSchemeSession2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(session, wallet, scheme) {
        var fetchsession, walletschemeuuid, schemeuuid, walletsession;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (scheme) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return", Promise.reject('scheme is not defined'));

              case 2:
                if (!scheme.isRemote()) {
                  _context3.next = 16;
                  break;
                }

                if (!wallet) {
                  _context3.next = 13;
                  break;
                }

                walletschemeuuid = wallet.getSchemeUUID();
                schemeuuid = scheme.getSchemeUUID();

                if (!this._canWalletHandleScheme(wallet, scheme)) {
                  _context3.next = 10;
                  break;
                }

                // use wallet session
                fetchsession = wallet._getSession();
                _context3.next = 11;
                break;

              case 10:
                return _context3.abrupt("return", Promise.reject('ERR_MISSING_CREDENTIALS'));

              case 11:
                _context3.next = 14;
                break;

              case 13:
                return _context3.abrupt("return", Promise.reject('ERR_MISSING_CREDENTIALS'));

              case 14:
                _context3.next = 26;
                break;

              case 16:
                if (!wallet) {
                  _context3.next = 23;
                  break;
                }

                walletsession = wallet._getSession();
                _context3.next = 20;
                return this._getChildSessionOnScheme(walletsession, scheme);

              case 20:
                fetchsession = _context3.sent;
                _context3.next = 26;
                break;

              case 23:
                _context3.next = 25;
                return this._getChildSessionOnScheme(session, scheme);

              case 25:
                fetchsession = _context3.sent;

              case 26:
                return _context3.abrupt("return", fetchsession);

              case 27:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _getMonitoredSchemeSession(_x7, _x8, _x9) {
        return _getMonitoredSchemeSession2.apply(this, arguments);
      }

      return _getMonitoredSchemeSession;
    }() //
    // Card functions
    //
    // TODO: replace by _apicontrollers.__makeWalletCard for version >= 0.20.18

  }, {
    key: "__makeWalletCard",
    value: function () {
      var _makeWalletCard2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(session, wallet, scheme, authname, password, address) {
        var global, Card, cardjson, card_new;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // to create a remote card on a remote wallet, with different schemes
                global = this.global;
                Card = global.getModuleClass('wallet', 'Card');
                ;
                cardjson = {};
                cardjson.authname = authname;
                cardjson.address = address;
                cardjson.password = password;
                cardjson.uuid = session.guid();
                cardjson.label = authname;
                card_new = Card.readFromJson(wallet, scheme, cardjson);

                if (!card_new) {
                  _context4.next = 19;
                  break;
                }

                _context4.next = 13;
                return card_new.init();

              case 13:
                if (!card_new.isLocked()) {
                  _context4.next = 16;
                  break;
                }

                _context4.next = 16;
                return card_new.unlock();

              case 16:
                return _context4.abrupt("return", card_new);

              case 19:
                throw new Error('could not create card');

              case 20:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function __makeWalletCard(_x10, _x11, _x12, _x13, _x14, _x15) {
        return _makeWalletCard2.apply(this, arguments);
      }

      return __makeWalletCard;
    }()
  }, {
    key: "_makeWalletCard",
    value: function () {
      var _makeWalletCard3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(session, wallet, scheme, privatekey) {
        var global, _apicontrollers, sessionaccount, _privatekey, walletsession, walletuser, address, authname, password, card_new;

        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                // we make client or remote wallets, depending on the scheme
                global = this.global;
                _apicontrollers = this._getClientAPI();

                if (wallet) {
                  _context5.next = 4;
                  break;
                }

                return _context5.abrupt("return", Promise.reject('wallet is not defined'));

              case 4:
                if (scheme) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return", Promise.reject('scheme is not defined'));

              case 6:
                if (!privatekey) {
                  _context5.next = 15;
                  break;
                }

                if (!_apicontrollers.isValidPrivateKey(session, privatekey)) {
                  _context5.next = 11;
                  break;
                }

                _context5.next = 10;
                return _apicontrollers.getSessionAccountFromPrivateKey(session, wallet, privatekey);

              case 10:
                sessionaccount = _context5.sent;

              case 11:
                if (sessionaccount) {
                  _context5.next = 13;
                  break;
                }

                return _context5.abrupt("return", Promise.reject('not a valid private key'));

              case 13:
                _context5.next = 21;
                break;

              case 15:
                // we generate a key
                _privatekey = _apicontrollers.generatePrivateKey();
                _context5.next = 18;
                return _apicontrollers.getSessionAccountFromPrivateKey(session, wallet, _privatekey);

              case 18:
                sessionaccount = _context5.sent;

                if (sessionaccount) {
                  _context5.next = 21;
                  break;
                }

                return _context5.abrupt("return", Promise.reject('could not generate a private key'));

              case 21:
                walletsession = wallet._getSession();
                walletuser = walletsession.getSessionUserObject();

                if (walletuser) {
                  _context5.next = 25;
                  break;
                }

                return _context5.abrupt("return", Promise.reject('wallet needs to be unlocked'));

              case 25:
                address = sessionaccount.getAddress();
                authname = walletuser.getUserName();
                password = null; // TODO: replace by _apicontrollers.makeWalletCard for version >= 0.20.18
                //const card_new =  await _apicontrollers.makeWalletCard(session, wallet, scheme, authname, password, address)

                _context5.next = 30;
                return this.__makeWalletCard(session, wallet, scheme, authname, password, address)["catch"](function (err) {
                  console.log('error in _makeWalletCard: ' + err);
                });

              case 30:
                card_new = _context5.sent;

                if (!card_new) {
                  _context5.next = 40;
                  break;
                }

                _context5.next = 34;
                return card_new.init();

              case 34:
                if (!card_new.isLocked()) {
                  _context5.next = 37;
                  break;
                }

                _context5.next = 37;
                return card_new.unlock();

              case 37:
                return _context5.abrupt("return", card_new);

              case 40:
                throw new Error('could not create card');

              case 41:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function _makeWalletCard(_x16, _x17, _x18, _x19) {
        return _makeWalletCard3.apply(this, arguments);
      }

      return _makeWalletCard;
    }() // TODO: replace by _apicontrollers.createWalletCard for version >= 0.20.18

  }, {
    key: "_createWalletCard",
    value: function () {
      var _createWalletCard2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(session, wallet, scheme, privatekey) {
        var global, _apicontrollers, wallettype, walletschemeuuid;

        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                global = this.global;
                _apicontrollers = this._getClientAPI();

                if (!(scheme.isRemote() === false)) {
                  _context6.next = 6;
                  break;
                }

                return _context6.abrupt("return", _apicontrollers.createWalletCard(session, wallet, scheme, privatekey));

              case 6:
                wallettype = wallet.getWalletType();
                _context6.t0 = wallettype;
                _context6.next = _context6.t0 === 0 ? 10 : _context6.t0 === 1 ? 11 : 17;
                break;

              case 10:
                return _context6.abrupt("return", Promise.reject('ERR_MISSING_CREDENTIALS'));

              case 11:
                walletschemeuuid = wallet.getSchemeUUID();

                if (!this._canWalletHandleScheme(wallet, scheme)) {
                  _context6.next = 16;
                  break;
                }

                return _context6.abrupt("return", this._makeWalletCard(session, wallet, scheme, privatekey));

              case 16:
                return _context6.abrupt("return", Promise.reject('ERR_MISSING_CREDENTIALS'));

              case 17:
                return _context6.abrupt("return", Promise.reject('wrong wallet type: ' + wallettype));

              case 18:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function _createWalletCard(_x20, _x21, _x22, _x23) {
        return _createWalletCard2.apply(this, arguments);
      }

      return _createWalletCard;
    }() //
    // Currency functions
    //

  }, {
    key: "_getAverageTransactionFee",
    value: function _getAverageTransactionFee(scheme) {
      var global = this.global;
      var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
      return mvcclientwalletmodule._getAverageTransactionFee(scheme);
    }
  }, {
    key: "_createCurrencyAmount",
    value: function () {
      var _createCurrencyAmount2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(session, currency, position) {
        var global, _apicurrencies;

        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                global = this.global;
                _apicurrencies = this._getCurrenciesAPI();
                return _context7.abrupt("return", _apicurrencies.createCurrencyAmount(session, currency, position));

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function _createCurrencyAmount(_x24, _x25, _x26) {
        return _createCurrencyAmount2.apply(this, arguments);
      }

      return _createCurrencyAmount;
    }()
  }, {
    key: "_createDecimalAmount",
    value: function () {
      var _createDecimalAmount2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(session, amount, decimals) {
        var global, _apicurrencies;

        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                global = this.global;
                _apicurrencies = this._getCurrenciesAPI();
                return _context8.abrupt("return", _apicurrencies.createDecimalAmount(session, amount, decimals));

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function _createDecimalAmount(_x27, _x28, _x29) {
        return _createDecimalAmount2.apply(this, arguments);
      }

      return _createDecimalAmount;
    }()
  }, {
    key: "transferCurrencyAmount",
    value: function () {
      var _transferCurrencyAmount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(sessionuuid, walletuuid, cardfromuuid, cardtouuid, currencyuuid, currencyamount) {
        var feelevel,
            global,
            CurrencyAmountClass,
            amount,
            mvcclientwalletmodule,
            _apicontrollers,
            session,
            currency,
            wallet,
            fromcard,
            tocard,
            fromaccount,
            cardsession,
            from_card_scheme,
            toaddress,
            tokenaddress,
            tokenamount,
            providerurl,
            senderprivatekey,
            recipientaddress,
            fee,
            txhash,
            _args9 = arguments;

        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                feelevel = _args9.length > 6 && _args9[6] !== undefined ? _args9[6] : null;
                global = this.global;

                if (sessionuuid) {
                  _context9.next = 4;
                  break;
                }

                return _context9.abrupt("return", Promise.reject('session uuid is undefined'));

              case 4:
                if (walletuuid) {
                  _context9.next = 6;
                  break;
                }

                return _context9.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 6:
                if (currencyuuid) {
                  _context9.next = 8;
                  break;
                }

                return _context9.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 8:
                if (cardfromuuid) {
                  _context9.next = 10;
                  break;
                }

                return _context9.abrupt("return", Promise.reject('from card uuid is undefined'));

              case 10:
                if (cardtouuid) {
                  _context9.next = 12;
                  break;
                }

                return _context9.abrupt("return", Promise.reject('to card uuid is undefined'));

              case 12:
                CurrencyAmountClass = global.getModuleClass('currencies', 'CurrencyAmount');

                if (!(currencyamount instanceof CurrencyAmountClass !== true)) {
                  _context9.next = 15;
                  break;
                }

                return _context9.abrupt("return", Promise.reject('wrong currency amount type'));

              case 15:
                _context9.next = 17;
                return currencyamount.toString();

              case 17:
                amount = _context9.sent;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                _apicontrollers = this._getClientAPI();
                _context9.next = 22;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 22:
                session = _context9.sent;

                if (session) {
                  _context9.next = 25;
                  break;
                }

                return _context9.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 25:
                _context9.next = 27;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 27:
                currency = _context9.sent;

                if (currency) {
                  _context9.next = 30;
                  break;
                }

                return _context9.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 30:
                _context9.next = 32;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 32:
                wallet = _context9.sent;

                if (wallet) {
                  _context9.next = 35;
                  break;
                }

                return _context9.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 35:
                _context9.next = 37;
                return wallet.getCardFromUUID(cardfromuuid);

              case 37:
                fromcard = _context9.sent;

                if (fromcard) {
                  _context9.next = 40;
                  break;
                }

                return _context9.abrupt("return", Promise.reject('could not find card ' + cardfromuuid));

              case 40:
                _context9.next = 42;
                return wallet.getCardFromUUID(cardtouuid);

              case 42:
                tocard = _context9.sent;

                if (tocard) {
                  _context9.next = 45;
                  break;
                }

                return _context9.abrupt("return", Promise.reject('could not find card ' + cardtouuid));

              case 45:
                fromaccount = fromcard._getSessionAccountObject();

                if (fromaccount) {
                  _context9.next = 48;
                  break;
                }

                return _context9.abrupt("return", Promise.reject('card has no private key ' + cardfromuuid));

              case 48:
                _context9.next = 50;
                return this._getMonitoredCardSession(session, wallet, fromcard);

              case 50:
                cardsession = _context9.sent;
                from_card_scheme = fromcard.getScheme(); // transfer parameters

                toaddress = tocard.getAddress();
                tokenaddress = currency.address;
                tokenamount = amount; // using token account to make transfer

                /* 		
                		var tokenaccount = await this._getTokenAccountFromAddress(cardsession, fromcard, tokenaddress).catch(err => {});
                
                		// create contact from toaddress
                		var name = toaddress;
                		var contactinfo = {};
                		var tocontact = await _apicontrollers.createContact(cardsession, name, toaddress, contactinfo).catch(err => {});
                
                		await tokenaccount.transferTo(contact, tokenamount)
                		.catch(err => {
                			console.log('error in transferCurrencyAmount: ' + err);
                		});
                 */
                // using direct call to ERC20 to speed up call

                _context9.next = 57;
                return this._getCurrencyWeb3ProviderUrl(cardsession, currency);

              case 57:
                providerurl = _context9.sent;
                senderprivatekey = fromaccount.getPrivateKey();
                recipientaddress = toaddress;
                _context9.next = 62;
                return _apicontrollers.createSchemeFee(from_card_scheme, feelevel);

              case 62:
                fee = _context9.sent;
                _context9.next = 65;
                return _apicontrollers.sendERC20Tokens(cardsession, providerurl, tokenaddress, senderprivatekey, recipientaddress, tokenamount, fee)["catch"](function (err) {
                  console.log('error in transferCurrencyAmount: ' + err);
                });

              case 65:
                txhash = _context9.sent;

                if (txhash) {
                  _context9.next = 68;
                  break;
                }

                return _context9.abrupt("return", Promise.reject('could not send currency tokens'));

              case 68:
                return _context9.abrupt("return", txhash);

              case 69:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function transferCurrencyAmount(_x30, _x31, _x32, _x33, _x34, _x35) {
        return _transferCurrencyAmount.apply(this, arguments);
      }

      return transferCurrencyAmount;
    }()
  }, {
    key: "_getCurrencyProvider",
    value: function () {
      var _getCurrencyProvider2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(session, currency) {
        var global, currenciesmodule;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (session) {
                  _context10.next = 2;
                  break;
                }

                return _context10.abrupt("return", Promise.reject('session is undefined'));

              case 2:
                if (currency) {
                  _context10.next = 4;
                  break;
                }

                return _context10.abrupt("return", Promise.reject('currency is undefined'));

              case 4:
                global = this.global;
                currenciesmodule = global.getModuleObject('currencies');
                return _context10.abrupt("return", currenciesmodule.getCurrencyProvider(session, currency.uuid));

              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function _getCurrencyProvider(_x36, _x37) {
        return _getCurrencyProvider2.apply(this, arguments);
      }

      return _getCurrencyProvider;
    }()
  }, {
    key: "_getCurrencyOps",
    value: function () {
      var _getCurrencyOps2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(session, currency) {
        var currency_provider;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (session) {
                  _context11.next = 2;
                  break;
                }

                return _context11.abrupt("return", Promise.reject('session is undefined'));

              case 2:
                if (currency) {
                  _context11.next = 4;
                  break;
                }

                return _context11.abrupt("return", Promise.reject('currency is undefined'));

              case 4:
                _context11.next = 6;
                return this._getCurrencyProvider(session, currency);

              case 6:
                currency_provider = _context11.sent;

                if (!currency_provider) {
                  _context11.next = 11;
                  break;
                }

                return _context11.abrupt("return", currency_provider.getOps());

              case 11:
                return _context11.abrupt("return", {
                  canpay: false
                });

              case 12:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function _getCurrencyOps(_x38, _x39) {
        return _getCurrencyOps2.apply(this, arguments);
      }

      return _getCurrencyOps;
    }() // TODO: use currenciesmodule.getCurrencyScheme

  }, {
    key: "_getCurrencyScheme",
    value: function () {
      var _getCurrencyScheme2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(session, currency) {
        var global, _apicontrollers, currencyschemeuuid, scheme, web3url, defaultlocalscheme;

        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (session) {
                  _context12.next = 2;
                  break;
                }

                return _context12.abrupt("return", Promise.reject('session is undefined'));

              case 2:
                if (currency) {
                  _context12.next = 4;
                  break;
                }

                return _context12.abrupt("return", Promise.reject('currency is undefined'));

              case 4:
                global = this.global;
                _apicontrollers = this._getClientAPI(); // we look if the currency has a trade scheme specified

                currencyschemeuuid = currency.scheme_uuid ? currency.scheme_uuid : null;

                if (!currencyschemeuuid) {
                  _context12.next = 13;
                  break;
                }

                _context12.next = 10;
                return _apicontrollers.getSchemeFromUUID(session, currencyschemeuuid)["catch"](function (err) {});

              case 10:
                scheme = _context12.sent;
                _context12.next = 24;
                break;

              case 13:
                // scheme has probably already been created with web3providerurl
                web3url = currency.web3providerurl;
                _context12.next = 16;
                return _apicontrollers.getSchemeFromWeb3Url(session, web3url)["catch"](function (err) {});

              case 16:
                scheme = _context12.sent;

                if (scheme) {
                  _context12.next = 24;
                  break;
                }

                _context12.next = 20;
                return _apicontrollers.getDefaultScheme(session, 0);

              case 20:
                defaultlocalscheme = _context12.sent;
                _context12.next = 23;
                return defaultlocalscheme.cloneOnWeb3ProviderUrl(web3url)["catch"](function (err) {});

              case 23:
                scheme = _context12.sent;

              case 24:
                if (scheme) {
                  _context12.next = 26;
                  break;
                }

                return _context12.abrupt("return", Promise.reject('could not find scheme for currency ' + currency.uuid));

              case 26:
                return _context12.abrupt("return", scheme);

              case 27:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function _getCurrencyScheme(_x40, _x41) {
        return _getCurrencyScheme2.apply(this, arguments);
      }

      return _getCurrencyScheme;
    }() // TODO: use currenciesmodule.getCurrencyWeb3ProviderUrl

  }, {
    key: "_getCurrencyWeb3ProviderUrl",
    value: function () {
      var _getCurrencyWeb3ProviderUrl2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(session, currency) {
        var scheme;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                if (!currency.web3providerurl) {
                  _context13.next = 4;
                  break;
                }

                return _context13.abrupt("return", currency.web3providerurl);

              case 4:
                _context13.next = 6;
                return this._getCurrencyScheme(session, currency);

              case 6:
                scheme = _context13.sent;

                if (!scheme) {
                  _context13.next = 11;
                  break;
                }

                return _context13.abrupt("return", scheme.getWeb3ProviderUrl());

              case 11:
                console.log('currency is badly configured ' + currency.uuid);

              case 12:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function _getCurrencyWeb3ProviderUrl(_x42, _x43) {
        return _getCurrencyWeb3ProviderUrl2.apply(this, arguments);
      }

      return _getCurrencyWeb3ProviderUrl;
    }()
  }, {
    key: "_compareUrl",
    value: function _compareUrl(url1, url2) {
      var _url1 = url1 && url1.endsWith('/') ? url1.substring(0, url1.length - 1) : url1;

      var _url2 = url2 && url2.endsWith('/') ? url2.substring(0, url2.length - 1) : url2;

      if (_url1 && _url2 && _url1 == _url2) return true;else return false;
    }
  }, {
    key: "_findCurrencyFromWeb3ProviderUrl",
    value: function () {
      var _findCurrencyFromWeb3ProviderUrl2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(sessionuuid, web3providerurl) {
        var global, _apicontrollers, session, currencies, i, currency, scheme;

        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                // we retun the first one, it is unsafe and 
                // direct use of currencyuuidis recommended
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context14.next = 4;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 4:
                session = _context14.sent;
                _context14.next = 7;
                return this.getCurrencies(sessionuuid);

              case 7:
                currencies = _context14.sent;
                i = 0;

              case 9:
                if (!(i < currencies.length)) {
                  _context14.next = 28;
                  break;
                }

                currency = currencies[i];

                if (!currency.web3providerurl) {
                  _context14.next = 16;
                  break;
                }

                if (!this._compareUrl(currency.web3providerurl, web3providerurl)) {
                  _context14.next = 14;
                  break;
                }

                return _context14.abrupt("return", currency);

              case 14:
                _context14.next = 25;
                break;

              case 16:
                if (!currency.scheme_uuid) {
                  _context14.next = 24;
                  break;
                }

                _context14.next = 19;
                return _apicontrollers.getSchemeFromUUID(session, currency.scheme_uuid);

              case 19:
                scheme = _context14.sent;

                if (!(scheme && scheme.getWeb3ProviderUrl() == web3providerurl)) {
                  _context14.next = 22;
                  break;
                }

                return _context14.abrupt("return", currency);

              case 22:
                _context14.next = 25;
                break;

              case 24:
                console.log('currency is badly configured ' + currency.uuid);

              case 25:
                i++;
                _context14.next = 9;
                break;

              case 28:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function _findCurrencyFromWeb3ProviderUrl(_x44, _x45) {
        return _findCurrencyFromWeb3ProviderUrl2.apply(this, arguments);
      }

      return _findCurrencyFromWeb3ProviderUrl;
    }()
  }, {
    key: "_getPretradeScheme",
    value: function () {
      var _getPretradeScheme2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(session, currency) {
        var global, _apicontrollers, sessionuuid, pretradeschemeuuid, scheme, clientmodule, builtin_local_schemes, prestradescheme;

        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                if (session) {
                  _context15.next = 2;
                  break;
                }

                return _context15.abrupt("return", Promise.reject('session is undefined'));

              case 2:
                if (currency) {
                  _context15.next = 4;
                  break;
                }

                return _context15.abrupt("return", Promise.reject('currency is undefined'));

              case 4:
                global = this.global;
                _apicontrollers = this._getClientAPI(); // we look if the currency has a pretrade scheme specified

                sessionuuid = session.getSessionUUID();
                pretradeschemeuuid = currency.pretrade_scheme_uuid ? currency.pretrade_scheme_uuid : null;
                _context15.next = 10;
                return _apicontrollers.getSchemeFromUUID(session, pretradeschemeuuid)["catch"](function (err) {});

              case 10:
                scheme = _context15.sent;

                if (!scheme) {
                  _context15.next = 13;
                  break;
                }

                return _context15.abrupt("return", scheme);

              case 13:
                // we return local scheme named firenze as a default, if we can find it
                clientmodule = global.getModuleObject('webclient');

                if (!clientmodule.getBuiltinLocalSchemes) {
                  _context15.next = 21;
                  break;
                }

                builtin_local_schemes = clientmodule.getBuiltinLocalSchemes();
                prestradescheme = builtin_local_schemes.firenze;

                if (!prestradescheme) {
                  _context15.next = 21;
                  break;
                }

                _context15.next = 20;
                return _apicontrollers.getSchemeFromUUID(session, prestradescheme.uuid);

              case 20:
                scheme = _context15.sent;

              case 21:
                return _context15.abrupt("return", scheme);

              case 22:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function _getPretradeScheme(_x46, _x47) {
        return _getPretradeScheme2.apply(this, arguments);
      }

      return _getPretradeScheme;
    }()
  }, {
    key: "_filterCurrencies",
    value: function () {
      var _filterCurrencies2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(session, currencies, walletuuid) {
        var _currencies, i, _apicontrollers, wallet, walletschemeuuid, array, currency, currencyscheme, currencyschemeuuid;

        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _currencies = [];

                for (i = 0; i < (currencies ? currencies.length : 0); i++) {
                  _currencies.push(currencies[i]);
                }

                if (!walletuuid) {
                  _context16.next = 23;
                  break;
                }

                _apicontrollers = this._getClientAPI();
                _context16.next = 6;
                return _apicontrollers.getWalletFromUUID(session, walletuuid)["catch"](function (err) {});

              case 6:
                wallet = _context16.sent;

                if (!wallet) {
                  _context16.next = 23;
                  break;
                }

                walletschemeuuid = wallet.getSchemeUUID();
                array = [];
                i = 0;

              case 11:
                if (!(i < (currencies ? currencies.length : 0))) {
                  _context16.next = 22;
                  break;
                }

                currency = currencies[i]; // if currency has a scheme, check if it is remote and it matches the wallet

                _context16.next = 15;
                return this._getCurrencyScheme(session, currency)["catch"](function (err) {});

              case 15:
                currencyscheme = _context16.sent;

                if (currencyscheme) {
                  _context16.next = 18;
                  break;
                }

                return _context16.abrupt("continue", 19);

              case 18:
                if (currencyscheme && currencyscheme.isRemote()) {
                  currencyschemeuuid = currencyscheme.getSchemeUUID();

                  if (this._canWalletHandleScheme(wallet, currencyscheme)) {
                    array.push(currencies[i]);
                  }
                } else {
                  array.push(currencies[i]);
                }

              case 19:
                i++;
                _context16.next = 11;
                break;

              case 22:
                _currencies = array;

              case 23:
                return _context16.abrupt("return", _currencies);

              case 24:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function _filterCurrencies(_x48, _x49, _x50) {
        return _filterCurrencies2.apply(this, arguments);
      }

      return _filterCurrencies;
    }()
  }, {
    key: "readLocalCurrencies",
    value: function () {
      var _readLocalCurrencies = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(sessionuuid) {
        var global, _apicontrollers, session, _apicurrencies;

        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                if (sessionuuid) {
                  _context17.next = 2;
                  break;
                }

                return _context17.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context17.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context17.sent;

                if (session) {
                  _context17.next = 9;
                  break;
                }

                return _context17.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                _apicurrencies = this._getCurrenciesAPI();
                return _context17.abrupt("return", _apicurrencies.readLocalCurrencies(session));

              case 11:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function readLocalCurrencies(_x51) {
        return _readLocalCurrencies.apply(this, arguments);
      }

      return readLocalCurrencies;
    }()
  }, {
    key: "saveLocalCurrencies",
    value: function () {
      var _saveLocalCurrencies = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(sessionuuid, currencies) {
        var global, _apicontrollers, session, _apicurrencies;

        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                if (sessionuuid) {
                  _context18.next = 2;
                  break;
                }

                return _context18.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context18.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context18.sent;

                if (session) {
                  _context18.next = 9;
                  break;
                }

                return _context18.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                _apicurrencies = this._getCurrenciesAPI();
                return _context18.abrupt("return", _apicurrencies.saveLocalCurrencies(session, currencies));

              case 11:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function saveLocalCurrencies(_x52, _x53) {
        return _saveLocalCurrencies.apply(this, arguments);
      }

      return saveLocalCurrencies;
    }()
  }, {
    key: "saveLocalCurrency",
    value: function () {
      var _saveLocalCurrency = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(sessionuuid, currency) {
        var global, _apicontrollers, session, _apicurrencies;

        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                if (sessionuuid) {
                  _context19.next = 2;
                  break;
                }

                return _context19.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context19.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context19.sent;

                if (session) {
                  _context19.next = 9;
                  break;
                }

                return _context19.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                _apicurrencies = this._getCurrenciesAPI();
                return _context19.abrupt("return", _apicurrencies.saveLocalCurrency(session, currency));

              case 11:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function saveLocalCurrency(_x54, _x55) {
        return _saveLocalCurrency.apply(this, arguments);
      }

      return saveLocalCurrency;
    }()
  }, {
    key: "getCurrencies",
    value: function () {
      var _getCurrencies = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(sessionuuid, walletuuid) {
        var global, _apicontrollers, session, currenciesmodule, current_currencies_timestamp, currencies, currencies_timestamp, _currencies, array, i, currency_pretrade_scheme, currency_pretrade_ethnode_conf;

        return _regeneratorRuntime().wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                if (sessionuuid) {
                  _context20.next = 2;
                  break;
                }

                return _context20.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context20.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context20.sent;

                if (session) {
                  _context20.next = 9;
                  break;
                }

                return _context20.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                currenciesmodule = global.getModuleObject('currencies');
                current_currencies_timestamp = currenciesmodule.getCurrenciesTimeStamp(); // look if already stored in the session variables

                currencies = session.getSessionVariable('currencies');

                if (!currencies) {
                  _context20.next = 19;
                  break;
                }

                // verify version is up-to-date
                currencies_timestamp = session.getSessionVariable('currencies-timestamp');

                if (!(currencies_timestamp === current_currencies_timestamp)) {
                  _context20.next = 19;
                  break;
                }

                _context20.next = 17;
                return this._filterCurrencies(session, currencies, walletuuid);

              case 17:
                _currencies = _context20.sent;
                return _context20.abrupt("return", _currencies);

              case 19:
                // otherwise retrieve the list of currencies
                global = this.global;
                currencies = currenciesmodule.getCurrencies();
                array = Object.values(currencies); // fill complementary info

                i = 0;

              case 23:
                if (!(i < (array ? array.length : 0))) {
                  _context20.next = 36;
                  break;
                }

                _context20.next = 26;
                return this._getCurrencyOps(session, array[i])["catch"](function (err) {
                  console.log(err);
                });

              case 26:
                array[i].ops = _context20.sent;
                _context20.next = 29;
                return this._getPretradeScheme(session, array[i])["catch"](function (e) {});

              case 29:
                currency_pretrade_scheme = _context20.sent;
                currency_pretrade_ethnode_conf = currency_pretrade_scheme ? currency_pretrade_scheme.getEthNodeServerConfig() : null;
                array[i].pretrade_web3_provider_url = currency_pretrade_ethnode_conf ? currency_pretrade_ethnode_conf.web3_provider_url : null;
                array[i].pretrade_explorer_url = currency_pretrade_ethnode_conf ? currency_pretrade_ethnode_conf.explorerurl : null;

              case 33:
                i++;
                _context20.next = 23;
                break;

              case 36:
                // store in session
                session.setSessionVariable('currencies', array);
                session.setSessionVariable('currencies-timestamp', current_currencies_timestamp); // send back a copy

                _context20.next = 40;
                return this._filterCurrencies(session, array, walletuuid);

              case 40:
                _currencies = _context20.sent;
                return _context20.abrupt("return", _currencies);

              case 42:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function getCurrencies(_x56, _x57) {
        return _getCurrencies.apply(this, arguments);
      }

      return getCurrencies;
    }()
  }, {
    key: "getCurrencyFromUUID",
    value: function () {
      var _getCurrencyFromUUID = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(sessionuuid, currencyuuid) {
        var currencies, i;
        return _regeneratorRuntime().wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                if (sessionuuid) {
                  _context21.next = 2;
                  break;
                }

                return _context21.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                _context21.next = 4;
                return this.getCurrencies(sessionuuid);

              case 4:
                currencies = _context21.sent;
                i = 0;

              case 6:
                if (!(i < currencies.length)) {
                  _context21.next = 12;
                  break;
                }

                if (!(currencies[i].uuid === currencyuuid)) {
                  _context21.next = 9;
                  break;
                }

                return _context21.abrupt("return", currencies[i]);

              case 9:
                i++;
                _context21.next = 6;
                break;

              case 12:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function getCurrencyFromUUID(_x58, _x59) {
        return _getCurrencyFromUUID.apply(this, arguments);
      }

      return getCurrencyFromUUID;
    }()
  }, {
    key: "getAllCurrenciesWithAddress",
    value: function () {
      var _getAllCurrenciesWithAddress = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(sessionuuid, walletuuid, address) {
        var currencies, arr, tokenaddress, i, _currencyaddress;

        return _regeneratorRuntime().wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                _context22.next = 2;
                return this.getCurrencies(sessionuuid, walletuuid);

              case 2:
                currencies = _context22.sent;
                arr = [];
                tokenaddress = address ? address.trim().toLowerCase() : null;

                for (i = 0; i < (currencies ? currencies.length : 0); i++) {
                  _currencyaddress = currencies[i].address ? currencies[i].address.trim().toLowerCase() : null;
                  if (_currencyaddress == tokenaddress) arr.push(currencies[i]);
                }

                return _context22.abrupt("return", arr);

              case 7:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function getAllCurrenciesWithAddress(_x60, _x61, _x62) {
        return _getAllCurrenciesWithAddress.apply(this, arguments);
      }

      return getAllCurrenciesWithAddress;
    }()
  }, {
    key: "synchronizeCurrency",
    value: function () {
      var _synchronizeCurrency = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(sessionuuid, walletuuid, currency) {
        var global, _apicontrollers, session, wallet, currenciesmodule, currencyscheme, childsession, erc20token_contract;

        return _regeneratorRuntime().wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                if (currency) {
                  _context23.next = 2;
                  break;
                }

                return _context23.abrupt("return", Promise.reject('currency is undefined'));

              case 2:
                if (currency.address) {
                  _context23.next = 4;
                  break;
                }

                return _context23.abrupt("return", Promise.reject('currency has not token address'));

              case 4:
                if (sessionuuid) {
                  _context23.next = 6;
                  break;
                }

                return _context23.abrupt("return", Promise.reject('session uuid is undefined'));

              case 6:
                if (walletuuid) {
                  _context23.next = 8;
                  break;
                }

                return _context23.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 8:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context23.next = 12;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 12:
                session = _context23.sent;

                if (session) {
                  _context23.next = 15;
                  break;
                }

                return _context23.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 15:
                _context23.next = 17;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 17:
                wallet = _context23.sent;

                if (wallet) {
                  _context23.next = 20;
                  break;
                }

                return _context23.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 20:
                currenciesmodule = global.getModuleObject('currencies');
                _context23.next = 23;
                return currenciesmodule.getCurrencyScheme(session, currency);

              case 23:
                currencyscheme = _context23.sent;

                if (currencyscheme) {
                  _context23.next = 26;
                  break;
                }

                return _context23.abrupt("return", Promise.reject('could not find scheme of currency ' + currency.uuid));

              case 26:
                _context23.next = 28;
                return this._getMonitoredSchemeSession(session, wallet, currencyscheme);

              case 28:
                childsession = _context23.sent;
                _context23.next = 31;
                return _apicontrollers.importERC20Token(childsession, currency.address);

              case 31:
                erc20token_contract = _context23.sent;
                _context23.next = 34;
                return erc20token_contract.getChainName();

              case 34:
                currency.name = _context23.sent;
                _context23.next = 37;
                return erc20token_contract.getChainSymbol();

              case 37:
                currency.symbol = _context23.sent;
                _context23.next = 40;
                return erc20token_contract.getChainDecimals();

              case 40:
                currency.decimals = _context23.sent;
                _context23.next = 43;
                return currenciesmodule.saveLocalCurrency(session, currency);

              case 43:
                return _context23.abrupt("return", currency);

              case 44:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function synchronizeCurrency(_x63, _x64, _x65) {
        return _synchronizeCurrency.apply(this, arguments);
      }

      return synchronizeCurrency;
    }()
  }, {
    key: "setCurrencyDescription",
    value: function () {
      var _setCurrencyDescription = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(sessionuuid, walletuuid, currencyuuid, description) {
        var global, _apicontrollers, session, wallet, currency, currenciesmodule;

        return _regeneratorRuntime().wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                if (sessionuuid) {
                  _context24.next = 2;
                  break;
                }

                return _context24.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context24.next = 4;
                  break;
                }

                return _context24.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (currencyuuid) {
                  _context24.next = 6;
                  break;
                }

                return _context24.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 6:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context24.next = 10;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 10:
                session = _context24.sent;

                if (session) {
                  _context24.next = 13;
                  break;
                }

                return _context24.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 13:
                _context24.next = 15;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 15:
                wallet = _context24.sent;

                if (wallet) {
                  _context24.next = 18;
                  break;
                }

                return _context24.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 18:
                _context24.next = 20;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 20:
                currency = _context24.sent;

                if (currency) {
                  _context24.next = 23;
                  break;
                }

                return _context24.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 23:
                currenciesmodule = global.getModuleObject('currencies'); // set description

                currency.description = description; // then save currency

                _context24.next = 27;
                return currenciesmodule.saveLocalCurrency(session, currency);

              case 27:
                return _context24.abrupt("return", currency);

              case 28:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function setCurrencyDescription(_x66, _x67, _x68, _x69) {
        return _setCurrencyDescription.apply(this, arguments);
      }

      return setCurrencyDescription;
    }()
  }, {
    key: "getCurrenciesFromAddress",
    value: function () {
      var _getCurrenciesFromAddress = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(sessionuuid, walletuuid, schemeuuid, address) {
        var currencies, arr, tokenaddress, i, _currencyaddress;

        return _regeneratorRuntime().wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                _context25.next = 2;
                return this.getCurrencies(sessionuuid, walletuuid);

              case 2:
                currencies = _context25.sent;
                arr = [];
                tokenaddress = address ? address.trim().toLowerCase() : null;

                for (i = 0; i < (currencies ? currencies.length : 0); i++) {
                  _currencyaddress = currencies[i].address ? currencies[i].address.trim().toLowerCase() : null;
                  if (currencies[i].scheme_uuid == schemeuuid && _currencyaddress == tokenaddress) arr.push(currencies[i]);
                }

                return _context25.abrupt("return", arr);

              case 7:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function getCurrenciesFromAddress(_x70, _x71, _x72, _x73) {
        return _getCurrenciesFromAddress.apply(this, arguments);
      }

      return getCurrenciesFromAddress;
    }()
  }, {
    key: "getTokenCardList",
    value: function () {
      var _getTokenCardList = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(sessionuuid, walletuuid, web3providerurl, tokenaddress) {
        var currencies, _web3providerurl, arr, i, _currency, _currency_scheme, _web3_provider_url, cards, _currency_cards;

        return _regeneratorRuntime().wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                if (!(!web3providerurl || !tokenaddress)) {
                  _context26.next = 2;
                  break;
                }

                return _context26.abrupt("return", []);

              case 2:
                _context26.next = 4;
                return this.getCurrencies(sessionuuid, walletuuid);

              case 4:
                currencies = _context26.sent;
                _web3providerurl = web3providerurl.endsWith('/') ? web3providerurl.substring(0, web3providerurl.length - 1) : web3providerurl; // list of currencies

                arr = [];
                i = 0;

              case 8:
                if (!(i < (currencies ? currencies.length : 0))) {
                  _context26.next = 19;
                  break;
                }

                _currency = currencies[i];
                _context26.next = 12;
                return this.getCurrencyScheme(sessionuuid, walletuuid, _currency.uuid)["catch"](function (err) {});

              case 12:
                _currency_scheme = _context26.sent;
                _web3_provider_url = _currency_scheme && _currency_scheme.network && _currency_scheme.network.ethnodeserver ? _currency_scheme.network.ethnodeserver.web3_provider_url : null;
                _web3_provider_url = _web3_provider_url && _web3_provider_url.endsWith('/') ? _web3_provider_url.substring(0, _web3_provider_url.length - 1) : _web3_provider_url;
                if (_web3_provider_url && this._compareUrl(_web3_provider_url, _web3providerurl) && _currency.address == tokenaddress) arr.push(currencies[i]);

              case 16:
                i++;
                _context26.next = 8;
                break;

              case 19:
                // get list of all cards
                cards = [];
                i = 0;

              case 21:
                if (!(i < arr.length)) {
                  _context26.next = 30;
                  break;
                }

                _currency = arr[i];
                _context26.next = 25;
                return this.getCurrencyCardList(sessionuuid, walletuuid, _currency.uuid)["catch"](function (err) {});

              case 25:
                _currency_cards = _context26.sent;
                if (_currency_cards) cards = cards.concat(_currency_cards);

              case 27:
                i++;
                _context26.next = 21;
                break;

              case 30:
                return _context26.abrupt("return", cards);

              case 31:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function getTokenCardList(_x74, _x75, _x76, _x77) {
        return _getTokenCardList.apply(this, arguments);
      }

      return getTokenCardList;
    }()
  }, {
    key: "_getCurrencyCardList",
    value: function () {
      var _getCurrencyCardList2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(session, wallet, currency) {
        var global, mvcclientwalletmodule, cards, array, scheme, schemeuuid, currencyuuid, i, _crdschemeuuid, xtradata, _crdcurrencyuuid;

        return _regeneratorRuntime().wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                if (session) {
                  _context27.next = 2;
                  break;
                }

                return _context27.abrupt("return", Promise.reject('session is undefined'));

              case 2:
                if (wallet) {
                  _context27.next = 4;
                  break;
                }

                return _context27.abrupt("return", Promise.reject('wallet is undefined'));

              case 4:
                if (currency) {
                  _context27.next = 6;
                  break;
                }

                return _context27.abrupt("return", Promise.reject('currency is undefined'));

              case 6:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                _context27.next = 10;
                return wallet.getCardList(true);

              case 10:
                cards = _context27.sent;
                array = [];
                _context27.next = 14;
                return this._getCurrencyScheme(session, currency)["catch"](function (err) {});

              case 14:
                scheme = _context27.sent;

                if (scheme) {
                  _context27.next = 17;
                  break;
                }

                return _context27.abrupt("return", Promise.reject('could not find scheme for currency ' + currency.uuid));

              case 17:
                schemeuuid = scheme.getSchemeUUID();
                currencyuuid = currency.uuid;

                for (i = 0; i < (cards ? cards.length : 0); i++) {
                  _crdschemeuuid = cards[i].getSchemeUUID();

                  if (_crdschemeuuid == schemeuuid) {
                    // check it is not associated to
                    // another currency on same schemeuuid
                    // looking at XtraData
                    xtradata = cards[i].getXtraData('myquote');
                    xtradata = xtradata ? xtradata : {};
                    _crdcurrencyuuid = xtradata.currencyuuid;
                    if (_crdcurrencyuuid && _crdcurrencyuuid == currencyuuid) array.push(cards[i]);
                  }
                }

                return _context27.abrupt("return", array);

              case 21:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function _getCurrencyCardList(_x78, _x79, _x80) {
        return _getCurrencyCardList2.apply(this, arguments);
      }

      return _getCurrencyCardList;
    }()
  }, {
    key: "_getCurrencyCard",
    value: function () {
      var _getCurrencyCard2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(session, wallet, currency) {
        var cards, card, i, crd, xtra;
        return _regeneratorRuntime().wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                if (session) {
                  _context28.next = 2;
                  break;
                }

                return _context28.abrupt("return", Promise.reject('session is undefined'));

              case 2:
                if (wallet) {
                  _context28.next = 4;
                  break;
                }

                return _context28.abrupt("return", Promise.reject('wallet is undefined'));

              case 4:
                if (currency) {
                  _context28.next = 6;
                  break;
                }

                return _context28.abrupt("return", Promise.reject('currency is undefined'));

              case 6:
                _context28.next = 8;
                return this._getCurrencyCardList(session, wallet, currency)["catch"](function (err) {});

              case 8:
                cards = _context28.sent;

                if (!(cards && cards.length)) {
                  _context28.next = 20;
                  break;
                }

                i = 0;

              case 11:
                if (!(i < cards.length)) {
                  _context28.next = 20;
                  break;
                }

                crd = cards[i];
                xtra = crd.getXtraData('myquote');

                if (!(xtra && xtra.maincard === true)) {
                  _context28.next = 17;
                  break;
                }

                card = crd;
                return _context28.abrupt("break", 20);

              case 17:
                i++;
                _context28.next = 11;
                break;

              case 20:
                return _context28.abrupt("return", card);

              case 21:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      function _getCurrencyCard(_x81, _x82, _x83) {
        return _getCurrencyCard2.apply(this, arguments);
      }

      return _getCurrencyCard;
    }()
  }, {
    key: "getCurrencyScheme",
    value: function () {
      var _getCurrencyScheme3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29(sessionuuid, walletuuid, currencyuuid) {
        var global, _apicontrollers, session, wallet, currency, currenciesmodule, scheme, mvcclienwallet, schemeinfo;

        return _regeneratorRuntime().wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                if (sessionuuid) {
                  _context29.next = 2;
                  break;
                }

                return _context29.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context29.next = 4;
                  break;
                }

                return _context29.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (currencyuuid) {
                  _context29.next = 6;
                  break;
                }

                return _context29.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 6:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context29.next = 10;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 10:
                session = _context29.sent;

                if (session) {
                  _context29.next = 13;
                  break;
                }

                return _context29.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 13:
                _context29.next = 15;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 15:
                wallet = _context29.sent;

                if (wallet) {
                  _context29.next = 18;
                  break;
                }

                return _context29.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 18:
                _context29.next = 20;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 20:
                currency = _context29.sent;

                if (currency) {
                  _context29.next = 23;
                  break;
                }

                return _context29.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 23:
                currenciesmodule = global.getModuleObject('currencies');
                _context29.next = 26;
                return currenciesmodule.getCurrencyScheme(session, currency);

              case 26:
                scheme = _context29.sent;
                mvcclienwallet = global.getModuleObject('mvc-client-wallet');
                schemeinfo = {
                  uuid: scheme.getSchemeUUID()
                };

                mvcclienwallet._fillSchemeInfoFromScheme(schemeinfo, scheme);

                return _context29.abrupt("return", schemeinfo);

              case 31:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));

      function getCurrencyScheme(_x84, _x85, _x86) {
        return _getCurrencyScheme3.apply(this, arguments);
      }

      return getCurrencyScheme;
    }()
  }, {
    key: "findCardCurrency",
    value: function () {
      var _findCardCurrency = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee30(sessionuuid, walletuuid, carduuid) {
        var global, _apicontrollers, session, wallet, card, xtradata, currency;

        return _regeneratorRuntime().wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                if (sessionuuid) {
                  _context30.next = 2;
                  break;
                }

                return _context30.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context30.next = 4;
                  break;
                }

                return _context30.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (carduuid) {
                  _context30.next = 6;
                  break;
                }

                return _context30.abrupt("return", Promise.reject('card uuid is undefined'));

              case 6:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context30.next = 10;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 10:
                session = _context30.sent;

                if (session) {
                  _context30.next = 13;
                  break;
                }

                return _context30.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 13:
                _context30.next = 15;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 15:
                wallet = _context30.sent;

                if (wallet) {
                  _context30.next = 18;
                  break;
                }

                return _context30.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 18:
                _context30.next = 20;
                return wallet.getCardFromUUID(carduuid);

              case 20:
                card = _context30.sent;

                if (card) {
                  _context30.next = 23;
                  break;
                }

                return _context30.abrupt("return", Promise.reject('could not find card ' + carduuid));

              case 23:
                xtradata = card.getXtraData('myquote');

                if (!(xtradata && xtradata.currencyuuid)) {
                  _context30.next = 29;
                  break;
                }

                _context30.next = 27;
                return this.getCurrencyFromUUID(sessionuuid, xtradata.currencyuuid);

              case 27:
                currency = _context30.sent;
                return _context30.abrupt("return", currency);

              case 29:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));

      function findCardCurrency(_x87, _x88, _x89) {
        return _findCardCurrency.apply(this, arguments);
      }

      return findCardCurrency;
    }()
  }, {
    key: "getCurrencyCard",
    value: function () {
      var _getCurrencyCard3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee31(sessionuuid, walletuuid, currencyuuid) {
        var global, _apicontrollers, session, wallet, currency, card, mvcclientwalletmodule, cardinfo;

        return _regeneratorRuntime().wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                if (sessionuuid) {
                  _context31.next = 2;
                  break;
                }

                return _context31.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context31.next = 4;
                  break;
                }

                return _context31.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (currencyuuid) {
                  _context31.next = 6;
                  break;
                }

                return _context31.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 6:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context31.next = 10;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 10:
                session = _context31.sent;

                if (session) {
                  _context31.next = 13;
                  break;
                }

                return _context31.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 13:
                _context31.next = 15;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 15:
                wallet = _context31.sent;

                if (wallet) {
                  _context31.next = 18;
                  break;
                }

                return _context31.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 18:
                _context31.next = 20;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 20:
                currency = _context31.sent;

                if (currency) {
                  _context31.next = 23;
                  break;
                }

                return _context31.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 23:
                _context31.next = 25;
                return this._getCurrencyCard(session, wallet, currency);

              case 25:
                card = _context31.sent;

                if (card) {
                  _context31.next = 28;
                  break;
                }

                return _context31.abrupt("return", Promise.reject('could not find currency card for wallet ' + walletuuid));

              case 28:
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                cardinfo = {
                  uuid: card.getCardUUID()
                };

                mvcclientwalletmodule._fillCardInfo(cardinfo, card);

                return _context31.abrupt("return", cardinfo);

              case 32:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));

      function getCurrencyCard(_x90, _x91, _x92) {
        return _getCurrencyCard3.apply(this, arguments);
      }

      return getCurrencyCard;
    }()
  }, {
    key: "setCurrencyCard",
    value: function () {
      var _setCurrencyCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee32(sessionuuid, walletuuid, currencyuuid, carduuid) {
        var global, _apicontrollers, session, wallet, currency, card, currencycards, i, currencycard, xtradata;

        return _regeneratorRuntime().wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                if (sessionuuid) {
                  _context32.next = 2;
                  break;
                }

                return _context32.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context32.next = 4;
                  break;
                }

                return _context32.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (currencyuuid) {
                  _context32.next = 6;
                  break;
                }

                return _context32.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 6:
                if (carduuid) {
                  _context32.next = 8;
                  break;
                }

                return _context32.abrupt("return", Promise.reject('card uuid is undefined'));

              case 8:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context32.next = 12;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 12:
                session = _context32.sent;

                if (session) {
                  _context32.next = 15;
                  break;
                }

                return _context32.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 15:
                _context32.next = 17;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 17:
                wallet = _context32.sent;

                if (wallet) {
                  _context32.next = 20;
                  break;
                }

                return _context32.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 20:
                _context32.next = 22;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 22:
                currency = _context32.sent;

                if (currency) {
                  _context32.next = 25;
                  break;
                }

                return _context32.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 25:
                _context32.next = 27;
                return wallet.getCardFromUUID(carduuid);

              case 27:
                card = _context32.sent;

                if (card) {
                  _context32.next = 30;
                  break;
                }

                return _context32.abrupt("return", Promise.reject('could not find card ' + carduuid));

              case 30:
                _context32.next = 32;
                return this._getCurrencyCardList(session, wallet, currency)["catch"](function (err) {});

              case 32:
                currencycards = _context32.sent;
                i = 0;

              case 34:
                if (!(i < (currencycards ? currencycards.length : 0))) {
                  _context32.next = 57;
                  break;
                }

                currencycard = currencycards[i];
                xtradata = currencycard.getXtraData('myquote');

                if (!(xtradata && xtradata.maincard === true)) {
                  _context32.next = 45;
                  break;
                }

                // remove flag
                xtradata.maincard = false;
                currencycard.putXtraData('myquote', xtradata);

                if (!currencycard.isLocked()) {
                  _context32.next = 43;
                  break;
                }

                _context32.next = 43;
                return currencycard.unlock();

              case 43:
                _context32.next = 45;
                return currencycard.save();

              case 45:
                if (!(currencycard.getCardUUID() === carduuid)) {
                  _context32.next = 54;
                  break;
                }

                xtradata = xtradata ? xtradata : {};
                xtradata.maincard = true;
                currencycard.putXtraData('myquote', xtradata);

                if (!currencycard.isLocked()) {
                  _context32.next = 52;
                  break;
                }

                _context32.next = 52;
                return currencycard.unlock();

              case 52:
                _context32.next = 54;
                return currencycard.save();

              case 54:
                i++;
                _context32.next = 34;
                break;

              case 57:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));

      function setCurrencyCard(_x93, _x94, _x95, _x96) {
        return _setCurrencyCard.apply(this, arguments);
      }

      return setCurrencyCard;
    }()
  }, {
    key: "createCurrencyCard",
    value: function () {
      var _createCurrencyCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee33(sessionuuid, walletuuid, currencyuuid, privatekey) {
        var currency, global, _apicontrollers, session, scheme, wallet, sessionaccount, card_address, sibling_cards, card, _xtradata, _currencyuuid, _old_card, _old_xtradata, xtradata, bSave, currencycards, mvcclientwalletmodule, cardinfo;

        return _regeneratorRuntime().wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                if (sessionuuid) {
                  _context33.next = 2;
                  break;
                }

                return _context33.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context33.next = 4;
                  break;
                }

                return _context33.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (currencyuuid) {
                  _context33.next = 6;
                  break;
                }

                return _context33.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 6:
                _context33.next = 8;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 8:
                currency = _context33.sent;

                if (currency) {
                  _context33.next = 11;
                  break;
                }

                return _context33.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 11:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context33.next = 15;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 15:
                session = _context33.sent;

                if (session) {
                  _context33.next = 18;
                  break;
                }

                return _context33.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 18:
                _context33.next = 20;
                return this._getCurrencyScheme(session, currency);

              case 20:
                scheme = _context33.sent;
                _context33.next = 23;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 23:
                wallet = _context33.sent;

                if (wallet) {
                  _context33.next = 26;
                  break;
                }

                return _context33.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 26:
                _context33.next = 28;
                return _apicontrollers.getSessionAccountFromPrivateKey(session, wallet, privatekey);

              case 28:
                sessionaccount = _context33.sent;
                card_address = sessionaccount.getAddress();
                _context33.next = 32;
                return wallet.getCardsWithAddress(card_address)["catch"](function (err) {});

              case 32:
                sibling_cards = _context33.sent;
                sibling_cards = sibling_cards ? sibling_cards : []; // TODO: replace by _apicontrollers.createWalletCard for version >= 0.20.18

                _context33.next = 36;
                return this._createWalletCard(session, wallet, scheme, privatekey);

              case 36:
                card = _context33.sent;

                if (!(sibling_cards.length > 0)) {
                  _context33.next = 62;
                  break;
                }

                _context33.prev = 38;
                // we already had a currency card with same address
                _xtradata = card.getXtraData('myquote');
                _xtradata = _xtradata ? _xtradata : {};
                _currencyuuid = _xtradata.currencyuuid;

                if (!(_currencyuuid != currencyuuid)) {
                  _context33.next = 56;
                  break;
                }

                _context33.next = 45;
                return wallet.cloneCard(card, scheme)["catch"](function (err) {});

              case 45:
                _old_card = _context33.sent;

                if (!_old_card) {
                  _context33.next = 56;
                  break;
                }

                if (!_old_card.isLocked()) {
                  _context33.next = 50;
                  break;
                }

                _context33.next = 50;
                return _old_card.unlock();

              case 50:
                _old_xtradata = Object.assign({}, _xtradata);
                xtradata = xtradata ? xtradata : {};
                _old_xtradata.currencyuuid = _currencyuuid;

                _old_card.putXtraData('myquote', _old_xtradata);

                _context33.next = 56;
                return _old_card.save();

              case 56:
                _context33.next = 61;
                break;

              case 58:
                _context33.prev = 58;
                _context33.t0 = _context33["catch"](38);
                console.log('could not re-insert pre-existing currency card: ' + card_address);

              case 61:
                ;

              case 62:
                if (card) {
                  _context33.next = 64;
                  break;
                }

                return _context33.abrupt("return", Promise.reject('could not create card'));

              case 64:
                if (!card.isLocked()) {
                  _context33.next = 67;
                  break;
                }

                _context33.next = 67;
                return card.unlock();

              case 67:
                // set it's associated to currencyuuid in XtraData
                xtradata = card.getXtraData('myquote');
                xtradata = xtradata ? xtradata : {};
                xtradata.currencyuuid = currencyuuid;
                card.putXtraData('myquote', xtradata); // save

                _context33.next = 73;
                return card.save();

              case 73:
                bSave = _context33.sent;

                if (bSave) {
                  _context33.next = 76;
                  break;
                }

                return _context33.abrupt("return", Promise.reject('could not save card'));

              case 76:
                _context33.next = 78;
                return this._getCurrencyCardList(session, wallet, currency)["catch"](function (err) {});

              case 78:
                currencycards = _context33.sent;

                if (!(!currencycards || currencycards.length == 1)) {
                  _context33.next = 82;
                  break;
                }

                _context33.next = 82;
                return this.setCurrencyCard(sessionuuid, walletuuid, currencyuuid, card.uuid);

              case 82:
                // return cardinfo
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                cardinfo = {};

                mvcclientwalletmodule._fillCardInfo(cardinfo, card);

                return _context33.abrupt("return", cardinfo);

              case 86:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this, [[38, 58]]);
      }));

      function createCurrencyCard(_x97, _x98, _x99, _x100) {
        return _createCurrencyCard.apply(this, arguments);
      }

      return createCurrencyCard;
    }()
  }, {
    key: "makeCurrencyCard",
    value: function () {
      var _makeCurrencyCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee34(sessionuuid, walletuuid, currencyuuid, carduuid) {
        var global, _apicontrollers, session, wallet, currency, card, xtradata, bSave, currencycards, mvcclientwalletmodule, cardinfo;

        return _regeneratorRuntime().wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                if (sessionuuid) {
                  _context34.next = 2;
                  break;
                }

                return _context34.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context34.next = 4;
                  break;
                }

                return _context34.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (currencyuuid) {
                  _context34.next = 6;
                  break;
                }

                return _context34.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 6:
                if (carduuid) {
                  _context34.next = 8;
                  break;
                }

                return _context34.abrupt("return", Promise.reject('card uuid is undefined'));

              case 8:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context34.next = 12;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 12:
                session = _context34.sent;

                if (session) {
                  _context34.next = 15;
                  break;
                }

                return _context34.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 15:
                _context34.next = 17;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 17:
                wallet = _context34.sent;

                if (wallet) {
                  _context34.next = 20;
                  break;
                }

                return _context34.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 20:
                _context34.next = 22;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 22:
                currency = _context34.sent;

                if (currency) {
                  _context34.next = 25;
                  break;
                }

                return _context34.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 25:
                _context34.next = 27;
                return wallet.getCardFromUUID(carduuid);

              case 27:
                card = _context34.sent;

                if (card) {
                  _context34.next = 30;
                  break;
                }

                return _context34.abrupt("return", Promise.reject('could not find card ' + carduuid));

              case 30:
                if (!card.isLocked()) {
                  _context34.next = 33;
                  break;
                }

                _context34.next = 33;
                return card.unlock();

              case 33:
                // set it's associated to currencyuuid in XtraData
                xtradata = card.getXtraData('myquote');
                xtradata = xtradata ? xtradata : {};
                xtradata.currencyuuid = currencyuuid;
                card.putXtraData('myquote', xtradata); // save

                _context34.next = 39;
                return card.save();

              case 39:
                bSave = _context34.sent;

                if (bSave) {
                  _context34.next = 42;
                  break;
                }

                return _context34.abrupt("return", Promise.reject('could not save card'));

              case 42:
                _context34.next = 44;
                return this._getCurrencyCardList(session, wallet, currency)["catch"](function (err) {});

              case 44:
                currencycards = _context34.sent;

                if (!(!currencycards || currencycards.length == 1)) {
                  _context34.next = 48;
                  break;
                }

                _context34.next = 48;
                return this.setCurrencyCard(sessionuuid, walletuuid, currencyuuid, card.uuid);

              case 48:
                // return cardinfo
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                cardinfo = {};

                mvcclientwalletmodule._fillCardInfo(cardinfo, card);

                return _context34.abrupt("return", cardinfo);

              case 52:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));

      function makeCurrencyCard(_x101, _x102, _x103, _x104) {
        return _makeCurrencyCard.apply(this, arguments);
      }

      return makeCurrencyCard;
    }()
  }, {
    key: "getCurrencyCardWithAddress",
    value: function () {
      var _getCurrencyCardWithAddress = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee35(sessionuuid, walletuuid, currencyuuid, address) {
        var currency, global, _apicontrollers, session, scheme, wallet, card, cardarray, i, xtradata, mvcclientwalletmodule, cardinfo;

        return _regeneratorRuntime().wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                if (sessionuuid) {
                  _context35.next = 2;
                  break;
                }

                return _context35.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context35.next = 4;
                  break;
                }

                return _context35.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (currencyuuid) {
                  _context35.next = 6;
                  break;
                }

                return _context35.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 6:
                _context35.next = 8;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 8:
                currency = _context35.sent;

                if (currency) {
                  _context35.next = 11;
                  break;
                }

                return _context35.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 11:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context35.next = 15;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 15:
                session = _context35.sent;

                if (session) {
                  _context35.next = 18;
                  break;
                }

                return _context35.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 18:
                _context35.next = 20;
                return this._getCurrencyScheme(session, currency);

              case 20:
                scheme = _context35.sent;
                _context35.next = 23;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 23:
                wallet = _context35.sent;

                if (wallet) {
                  _context35.next = 26;
                  break;
                }

                return _context35.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 26:
                _context35.next = 28;
                return wallet.getCardsWithAddress(address);

              case 28:
                cardarray = _context35.sent;
                i = 0;

              case 30:
                if (!(i < (cardarray ? cardarray.length : 0))) {
                  _context35.next = 39;
                  break;
                }

                xtradata = cardarray[i].getXtraData('myquote');
                xtradata = xtradata ? xtradata : {};

                if (!(xtradata.currencyuuid == currencyuuid)) {
                  _context35.next = 36;
                  break;
                }

                card = cardarray[i];
                return _context35.abrupt("break", 39);

              case 36:
                i++;
                _context35.next = 30;
                break;

              case 39:
                if (!card) {
                  _context35.next = 46;
                  break;
                }

                // return cardinfo
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                cardinfo = {};

                mvcclientwalletmodule._fillCardInfo(cardinfo, card);

                return _context35.abrupt("return", cardinfo);

              case 46:
                return _context35.abrupt("return", this.createReadOnlyCurrencyCard(sessionuuid, walletuuid, currencyuuid, address));

              case 47:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, this);
      }));

      function getCurrencyCardWithAddress(_x105, _x106, _x107, _x108) {
        return _getCurrencyCardWithAddress.apply(this, arguments);
      }

      return getCurrencyCardWithAddress;
    }()
  }, {
    key: "createReadOnlyCurrencyCard",
    value: function () {
      var _createReadOnlyCurrencyCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee36(sessionuuid, walletuuid, currencyuuid, address) {
        var currency, global, _apicontrollers, session, scheme, wallet, authname, password, card, cardsession, xtradata, bSave, mvcclientwalletmodule, cardinfo;

        return _regeneratorRuntime().wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                if (sessionuuid) {
                  _context36.next = 2;
                  break;
                }

                return _context36.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context36.next = 4;
                  break;
                }

                return _context36.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (currencyuuid) {
                  _context36.next = 6;
                  break;
                }

                return _context36.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 6:
                _context36.next = 8;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 8:
                currency = _context36.sent;

                if (currency) {
                  _context36.next = 11;
                  break;
                }

                return _context36.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 11:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context36.next = 15;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 15:
                session = _context36.sent;

                if (session) {
                  _context36.next = 18;
                  break;
                }

                return _context36.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 18:
                _context36.next = 20;
                return this._getCurrencyScheme(session, currency);

              case 20:
                scheme = _context36.sent;
                _context36.next = 23;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 23:
                wallet = _context36.sent;

                if (wallet) {
                  _context36.next = 26;
                  break;
                }

                return _context36.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 26:
                _context36.next = 28;
                return wallet.createCard(scheme, authname, password, address);

              case 28:
                card = _context36.sent;

                if (card) {
                  _context36.next = 31;
                  break;
                }

                return _context36.abrupt("return", Promise.reject('could not create card'));

              case 31:
                cardsession = card._getSession();

                if (cardsession) {
                  _context36.next = 35;
                  break;
                }

                _context36.next = 35;
                return card.init();

              case 35:
                if (!card.isLocked()) {
                  _context36.next = 38;
                  break;
                }

                _context36.next = 38;
                return card.unlock();

              case 38:
                // set it's associated to currencyuuid in XtraData
                xtradata = card.getXtraData('myquote');
                xtradata = xtradata ? xtradata : {};
                xtradata.currencyuuid = currencyuuid;
                card.putXtraData('myquote', xtradata); // save

                _context36.next = 44;
                return card.save();

              case 44:
                bSave = _context36.sent;

                if (bSave) {
                  _context36.next = 47;
                  break;
                }

                return _context36.abrupt("return", Promise.reject('could not save card'));

              case 47:
                // return cardinfo
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                cardinfo = {};

                mvcclientwalletmodule._fillCardInfo(cardinfo, card);

                return _context36.abrupt("return", cardinfo);

              case 51:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this);
      }));

      function createReadOnlyCurrencyCard(_x109, _x110, _x111, _x112) {
        return _createReadOnlyCurrencyCard.apply(this, arguments);
      }

      return createReadOnlyCurrencyCard;
    }()
  }, {
    key: "generateCurrencyCard",
    value: function () {
      var _generateCurrencyCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee37(sessionuuid, walletuuid, currencyuuid) {
        var global, _apicontrollers, session, _privatekey;

        return _regeneratorRuntime().wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                if (sessionuuid) {
                  _context37.next = 2;
                  break;
                }

                return _context37.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context37.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context37.sent;

                if (session) {
                  _context37.next = 9;
                  break;
                }

                return _context37.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                // we generate a key
                _privatekey = _apicontrollers.generatePrivateKey(session);
                return _context37.abrupt("return", this.createCurrencyCard(sessionuuid, walletuuid, currencyuuid, _privatekey));

              case 11:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this);
      }));

      function generateCurrencyCard(_x113, _x114, _x115) {
        return _generateCurrencyCard.apply(this, arguments);
      }

      return generateCurrencyCard;
    }()
  }, {
    key: "_getTokenAccountFromAddress",
    value: function () {
      var _getTokenAccountFromAddress2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee38(session, card, tokenaddress) {
        var tokenaccount, token;
        return _regeneratorRuntime().wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                _context38.next = 2;
                return card.getTokenAccountFromAddress(tokenaddress)["catch"](function (err) {});

              case 2:
                tokenaccount = _context38.sent;

                if (tokenaccount) {
                  _context38.next = 15;
                  break;
                }

                token = card.getTokenObject(tokenaddress);

                if (!card.isLocked()) {
                  _context38.next = 8;
                  break;
                }

                _context38.next = 8;
                return card.unlock();

              case 8:
                _context38.next = 10;
                return card.createTokenAccount(token);

              case 10:
                tokenaccount = _context38.sent;
                _context38.next = 13;
                return tokenaccount.init();

              case 13:
                _context38.next = 15;
                return tokenaccount._synchronizeWithERC20TokenContract(session);

              case 15:
                return _context38.abrupt("return", tokenaccount);

              case 16:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38);
      }));

      function _getTokenAccountFromAddress(_x116, _x117, _x118) {
        return _getTokenAccountFromAddress2.apply(this, arguments);
      }

      return _getTokenAccountFromAddress;
    }()
  }, {
    key: "getCurrencyPosition",
    value: function () {
      var _getCurrencyPosition = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee39(sessionuuid, walletuuid, currencyuuid, carduuid) {
        var global, _apicontrollers, session, wallet, currency, tokenaddress, cardinfo, mvcclientwalletmodule, cardaddress, valuescheme, childsession, position;

        return _regeneratorRuntime().wrap(function _callee39$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                if (sessionuuid) {
                  _context39.next = 2;
                  break;
                }

                return _context39.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context39.next = 4;
                  break;
                }

                return _context39.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (currencyuuid) {
                  _context39.next = 6;
                  break;
                }

                return _context39.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 6:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context39.next = 10;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 10:
                session = _context39.sent;

                if (session) {
                  _context39.next = 13;
                  break;
                }

                return _context39.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 13:
                _context39.next = 15;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 15:
                wallet = _context39.sent;

                if (wallet) {
                  _context39.next = 18;
                  break;
                }

                return _context39.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 18:
                _context39.next = 20;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 20:
                currency = _context39.sent;

                if (currency) {
                  _context39.next = 23;
                  break;
                }

                return _context39.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 23:
                tokenaddress = currency.address; // using token account to get position

                /* 		var card = await this._getCurrencyCard(session, wallet, currency).catch(err => {});
                
                		var tokenaccount = await this._getTokenAccountFromAddress(session, card, tokenaddress).catch(err => {});
                
                		const position = (tokenaccount ? await tokenaccount.getPosition().catch(err => {}) : 0);
                 */
                // using direct call to ERC20 to speed up result

                if (carduuid) {
                  _context39.next = 30;
                  break;
                }

                _context39.next = 27;
                return this.getCurrencyCard(sessionuuid, walletuuid, currencyuuid);

              case 27:
                cardinfo = _context39.sent;
                _context39.next = 34;
                break;

              case 30:
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                _context39.next = 33;
                return mvcclientwalletmodule.getCardInfo(sessionuuid, walletuuid, carduuid);

              case 33:
                cardinfo = _context39.sent;

              case 34:
                cardaddress = cardinfo.address; // get a childsession on currency scheme

                _context39.next = 37;
                return this._getCurrencyScheme(session, currency);

              case 37:
                valuescheme = _context39.sent;
                _context39.next = 40;
                return this._getMonitoredSchemeSession(session, wallet, valuescheme);

              case 40:
                childsession = _context39.sent;
                _context39.next = 43;
                return _apicontrollers.getAddressERC20Position(childsession, null, tokenaddress, cardaddress)["catch"](function (err) {
                  0, _readOnlyError("position");
                });

              case 43:
                position = _context39.sent;
                return _context39.abrupt("return", this._createCurrencyAmount(childsession, currency, position));

              case 45:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee39, this);
      }));

      function getCurrencyPosition(_x119, _x120, _x121, _x122) {
        return _getCurrencyPosition.apply(this, arguments);
      }

      return getCurrencyPosition;
    }()
  }, {
    key: "getCurrencyCardCredits",
    value: function () {
      var _getCurrencyCardCredits = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee40(sessionuuid, walletuuid, currencyuuid) {
        var global, mvcclientwalletmodule, _apicontrollers, session, wallet, currency, card, carduuid, schemeuuid, credits;

        return _regeneratorRuntime().wrap(function _callee40$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                if (sessionuuid) {
                  _context40.next = 2;
                  break;
                }

                return _context40.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context40.next = 4;
                  break;
                }

                return _context40.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (currencyuuid) {
                  _context40.next = 6;
                  break;
                }

                return _context40.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 6:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                _apicontrollers = this._getClientAPI();
                _context40.next = 11;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 11:
                session = _context40.sent;

                if (session) {
                  _context40.next = 14;
                  break;
                }

                return _context40.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 14:
                _context40.next = 16;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 16:
                wallet = _context40.sent;

                if (wallet) {
                  _context40.next = 19;
                  break;
                }

                return _context40.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 19:
                _context40.next = 21;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 21:
                currency = _context40.sent;

                if (currency) {
                  _context40.next = 24;
                  break;
                }

                return _context40.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 24:
                _context40.next = 26;
                return this._getCurrencyCard(session, wallet, currency);

              case 26:
                card = _context40.sent;
                carduuid = card.getCardUUID();
                schemeuuid = card.getSchemeUUID();
                _context40.next = 31;
                return mvcclientwalletmodule.getCreditBalance(sessionuuid, walletuuid, carduuid);

              case 31:
                credits = _context40.sent;
                _context40.next = 34;
                return mvcclientwalletmodule.getSchemeTransactionUnitsThreshold(sessionuuid, schemeuuid);

              case 34:
                credits.threshold = _context40.sent;
                return _context40.abrupt("return", credits);

              case 36:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40, this);
      }));

      function getCurrencyCardCredits(_x123, _x124, _x125) {
        return _getCurrencyCardCredits.apply(this, arguments);
      }

      return getCurrencyCardCredits;
    }()
  }, {
    key: "_getMonitoredCardSession",
    value: function () {
      var _getMonitoredCardSession2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee41(session, wallet, card) {
        var cardsession;
        return _regeneratorRuntime().wrap(function _callee41$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                cardsession = card._getSession();
                /* 		var scheme = card.getScheme();
                
                		if (scheme.isRemote()) {
                			if (wallet) {
                				var walletschemeuuid = wallet.getSchemeUUID();
                				var schemeuuid = scheme.getSchemeUUID();
                	
                				if (this._canWalletHandleScheme(wallet, scheme)) {
                					// use wallet session
                					cardsession = wallet._getSession();
                				}
                			}
                		}
                 */

                return _context41.abrupt("return", cardsession);

              case 2:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee41);
      }));

      function _getMonitoredCardSession(_x126, _x127, _x128) {
        return _getMonitoredCardSession2.apply(this, arguments);
      }

      return _getMonitoredCardSession;
    }()
  }, {
    key: "canPayAmount",
    value: function () {
      var _canPayAmount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee42(sessionuuid, walletuuid, carduuid, toaddress, currencyuuid, amount) {
        var feelevel,
            global,
            mvcclientwalletmodule,
            _apicontrollers,
            session,
            wallet,
            currency,
            card,
            _args42 = arguments;

        return _regeneratorRuntime().wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                feelevel = _args42.length > 6 && _args42[6] !== undefined ? _args42[6] : null;

                if (sessionuuid) {
                  _context42.next = 3;
                  break;
                }

                return _context42.abrupt("return", Promise.reject('session uuid is undefined'));

              case 3:
                if (walletuuid) {
                  _context42.next = 5;
                  break;
                }

                return _context42.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 5:
                if (carduuid) {
                  _context42.next = 7;
                  break;
                }

                return _context42.abrupt("return", Promise.reject('card uuid is undefined'));

              case 7:
                if (currencyuuid) {
                  _context42.next = 9;
                  break;
                }

                return _context42.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 9:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                _apicontrollers = this._getClientAPI();
                _context42.next = 14;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 14:
                session = _context42.sent;

                if (session) {
                  _context42.next = 17;
                  break;
                }

                return _context42.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 17:
                _context42.next = 19;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 19:
                wallet = _context42.sent;

                if (wallet) {
                  _context42.next = 22;
                  break;
                }

                return _context42.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 22:
                _context42.next = 24;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 24:
                currency = _context42.sent;

                if (currency) {
                  _context42.next = 27;
                  break;
                }

                return _context42.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 27:
                _context42.next = 29;
                return wallet.getCardFromUUID(carduuid);

              case 29:
                card = _context42.sent;

                if (card) {
                  _context42.next = 32;
                  break;
                }

                return _context42.abrupt("return", Promise.reject('could not find a card for currency ' + currencyuuid));

              case 32:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee42, this);
      }));

      function canPayAmount(_x129, _x130, _x131, _x132, _x133, _x134) {
        return _canPayAmount.apply(this, arguments);
      }

      return canPayAmount;
    }()
  }, {
    key: "payAmount",
    value: function () {
      var _payAmount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee43(sessionuuid, walletuuid, carduuid, toaddress, currencyuuid, amount) {
        var feelevel,
            global,
            mvcclientwalletmodule,
            _apicontrollers,
            session,
            wallet,
            currency,
            card,
            ops,
            topupinfo,
            tokenaddress,
            tokenamount,
            tokenamount_string,
            cardsession,
            fromaccount,
            scheme,
            providerurl,
            fee,
            value,
            credits,
            ethtx,
            txhash,
            _args43 = arguments;

        return _regeneratorRuntime().wrap(function _callee43$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                feelevel = _args43.length > 6 && _args43[6] !== undefined ? _args43[6] : null;

                if (sessionuuid) {
                  _context43.next = 3;
                  break;
                }

                return _context43.abrupt("return", Promise.reject('session uuid is undefined'));

              case 3:
                if (walletuuid) {
                  _context43.next = 5;
                  break;
                }

                return _context43.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 5:
                if (carduuid) {
                  _context43.next = 7;
                  break;
                }

                return _context43.abrupt("return", Promise.reject('card uuid is undefined'));

              case 7:
                if (currencyuuid) {
                  _context43.next = 9;
                  break;
                }

                return _context43.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 9:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                _apicontrollers = this._getClientAPI();
                _context43.next = 14;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 14:
                session = _context43.sent;

                if (session) {
                  _context43.next = 17;
                  break;
                }

                return _context43.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 17:
                _context43.next = 19;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 19:
                wallet = _context43.sent;

                if (wallet) {
                  _context43.next = 22;
                  break;
                }

                return _context43.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 22:
                _context43.next = 24;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 24:
                currency = _context43.sent;

                if (currency) {
                  _context43.next = 27;
                  break;
                }

                return _context43.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 27:
                _context43.next = 29;
                return wallet.getCardFromUUID(carduuid);

              case 29:
                card = _context43.sent;

                if (card) {
                  _context43.next = 32;
                  break;
                }

                return _context43.abrupt("return", Promise.reject('could not find a card for currency ' + currencyuuid));

              case 32:
                _context43.next = 34;
                return this._getCurrencyOps(session, currency);

              case 34:
                ops = _context43.sent;

                if (!(ops.cantxfree !== true && ops.cantopup === true)) {
                  _context43.next = 40;
                  break;
                }

                _context43.next = 38;
                return mvcclientwalletmodule.topUpCard(sessionuuid, walletuuid, carduuid)["catch"](function (err) {
                  console.log('error in payAndReport: ' + err);
                });

              case 38:
                topupinfo = _context43.sent;

                if (!topupinfo || !topupinfo.top) {
                  console.log('no top up for card ' + carduuid);
                }

              case 40:
                // transfer parameters
                tokenaddress = currency.address;
                tokenamount = amount;
                tokenamount_string = tokenamount.toString(); // use string to avoid "fault='overflow', operation='BigNumber.from'"
                // using token account to make transfer

                /* 		
                		var tokenaccount = await this._getTokenAccountFromAddress(session, card, tokenaddress).catch(err => {});
                
                		// create contact from toaddress
                		var name = toaddress;
                		var contactinfo = {};
                		var tocontact = await _apicontrollers.createContact(session, name, toaddress, contactinfo).catch(err => {});
                
                		await tokenaccount.transferTo(contact, tokenamount_string);
                 */
                // using direct call to ERC20 to speed up call

                _context43.next = 45;
                return this._getMonitoredCardSession(session, wallet, card);

              case 45:
                cardsession = _context43.sent;
                fromaccount = card._getSessionAccountObject();
                _context43.next = 49;
                return this._getCurrencyScheme(session, currency);

              case 49:
                scheme = _context43.sent;
                _context43.next = 52;
                return this._getCurrencyWeb3ProviderUrl(session, currency);

              case 52:
                providerurl = _context43.sent;
                _context43.next = 55;
                return _apicontrollers.createSchemeFee(scheme, feelevel);

              case 55:
                fee = _context43.sent;
                value = 0;
                _context43.next = 59;
                return mvcclientwalletmodule.getCreditBalance(sessionuuid, walletuuid, carduuid)["catch"](function (err) {
                  console.log('error in payAmount: ' + err);
                });

              case 59:
                credits = _context43.sent;
                console.log('sending tokens with gasLimit ' + fee.gaslimit + ' and gas price ' + fee.gasPrice);
                console.log('(fee.gaslimit * fee.gasPrice + value) is ' + (fee.gaslimit * fee.gasPrice + value));
                console.log('transaction credit before transfer is ' + (credits ? credits.transactioncredits : 'unknown'));

                if (credits && credits.transactioncredits < fee.gaslimit * fee.gasPrice + value) {
                  console.log('WARNING: transaction credit is lower than (fee.gaslimit * fee.gasPrice + value). You should raise transaction_units_min for corresponding scheme');
                }
                /* 		
                		var senderprivatekey = fromaccount.getPrivateKey();
                		var recipientaddress = toaddress;
                
                		var txhash = await _apicontrollers.sendERC20Tokens(cardsession, providerurl, tokenaddress, senderprivatekey, recipientaddress, tokenamount, fee);
                
                 */
                // using transferERC20Tokens instead of sendERC20Tokens
                //var ethtx = _apicontrollers.createEthereumTransaction(cardsession, fromaccount);


                _context43.next = 66;
                return this._createMonitoredEthereumTransaction(wallet, card, cardsession, fromaccount);

              case 66:
                ethtx = _context43.sent;
                ethtx.setToAddress(toaddress);
                ethtx.setGas(fee.gaslimit);
                ethtx.setGasPrice(fee.gasPrice);
                ethtx.setValue(value);
                _context43.next = 73;
                return _apicontrollers.transferERC20Tokens(cardsession, providerurl, tokenaddress, tokenamount_string, ethtx);

              case 73:
                txhash = _context43.sent;
                return _context43.abrupt("return", txhash);

              case 75:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee43, this);
      }));

      function payAmount(_x135, _x136, _x137, _x138, _x139, _x140) {
        return _payAmount.apply(this, arguments);
      }

      return payAmount;
    }()
  }, {
    key: "payAndReport",
    value: function () {
      var _payAndReport = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee44(sessionuuid, walletuuid, toaddress, currencyuuid, amount) {
        var global, mvcclientwalletmodule, _apicontrollers, session, currency, cardinfo, txhash, currency_provider, paymenturl;

        return _regeneratorRuntime().wrap(function _callee44$(_context44) {
          while (1) {
            switch (_context44.prev = _context44.next) {
              case 0:
                if (sessionuuid) {
                  _context44.next = 2;
                  break;
                }

                return _context44.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (currencyuuid) {
                  _context44.next = 4;
                  break;
                }

                return _context44.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 4:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                _apicontrollers = this._getClientAPI();
                _context44.next = 9;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 9:
                session = _context44.sent;

                if (session) {
                  _context44.next = 12;
                  break;
                }

                return _context44.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 12:
                _context44.next = 14;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 14:
                currency = _context44.sent;

                if (currency) {
                  _context44.next = 17;
                  break;
                }

                return _context44.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 17:
                _context44.next = 19;
                return this.getCurrencyCard(sessionuuid, walletuuid, currencyuuid);

              case 19:
                cardinfo = _context44.sent;

                if (cardinfo) {
                  _context44.next = 22;
                  break;
                }

                return _context44.abrupt("return", Promise.reject('could not find a card for currency ' + currencyuuid));

              case 22:
                _context44.next = 24;
                return this.payAmount(sessionuuid, walletuuid, cardinfo.uuid, toaddress, currencyuuid, amount);

              case 24:
                txhash = _context44.sent;
                _context44.next = 27;
                return this._getCurrencyProvider(session, currency);

              case 27:
                currency_provider = _context44.sent;

                if (currency_provider) {
                  _context44.next = 30;
                  break;
                }

                return _context44.abrupt("return", Promise.reject('currency has no provider'));

              case 30:
                paymenturl = currency_provider.getPaymentUrl(txhash);
                return _context44.abrupt("return", paymenturl);

              case 32:
              case "end":
                return _context44.stop();
            }
          }
        }, _callee44, this);
      }));

      function payAndReport(_x141, _x142, _x143, _x144, _x145) {
        return _payAndReport.apply(this, arguments);
      }

      return payAndReport;
    }()
  }, {
    key: "getCurrencyTotalSupply",
    value: function () {
      var _getCurrencyTotalSupply = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee45(sessionuuid, walletuuid, currencyuuid) {
        var global, _apicontrollers, session, wallet, currency, currenciesmodule, currencyscheme, childsession, tokenaddress, erc20token;

        return _regeneratorRuntime().wrap(function _callee45$(_context45) {
          while (1) {
            switch (_context45.prev = _context45.next) {
              case 0:
                if (sessionuuid) {
                  _context45.next = 2;
                  break;
                }

                return _context45.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context45.next = 4;
                  break;
                }

                return _context45.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (currencyuuid) {
                  _context45.next = 6;
                  break;
                }

                return _context45.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 6:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context45.next = 10;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 10:
                session = _context45.sent;

                if (session) {
                  _context45.next = 13;
                  break;
                }

                return _context45.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 13:
                _context45.next = 15;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 15:
                wallet = _context45.sent;

                if (wallet) {
                  _context45.next = 18;
                  break;
                }

                return _context45.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 18:
                _context45.next = 20;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 20:
                currency = _context45.sent;

                if (currency) {
                  _context45.next = 23;
                  break;
                }

                return _context45.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 23:
                currenciesmodule = global.getModuleObject('currencies');
                _context45.next = 26;
                return currenciesmodule.getCurrencyScheme(session, currency);

              case 26:
                currencyscheme = _context45.sent;
                _context45.next = 29;
                return this._getMonitoredSchemeSession(session, wallet, currencyscheme);

              case 29:
                childsession = _context45.sent;
                tokenaddress = currency.address;
                _context45.next = 33;
                return _apicontrollers.importERC20Token(childsession, tokenaddress);

              case 33:
                erc20token = _context45.sent;
                return _context45.abrupt("return", erc20token.getChainTotalSupply());

              case 35:
              case "end":
                return _context45.stop();
            }
          }
        }, _callee45, this);
      }));

      function getCurrencyTotalSupply(_x146, _x147, _x148) {
        return _getCurrencyTotalSupply.apply(this, arguments);
      }

      return getCurrencyTotalSupply;
    }()
  }, {
    key: "_getAddressFromTokenUUID",
    value: function () {
      var _getAddressFromTokenUUID2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee46(session, wallet, card, tokenuuid) {
        var global, erc20tokenaccount, token, tokenaccountsession, erc20tokencontract, contractinterface, contractinstance, ethereumnodeaccessinstance, tokenaddress;
        return _regeneratorRuntime().wrap(function _callee46$(_context46) {
          while (1) {
            switch (_context46.prev = _context46.next) {
              case 0:
                global = this.global;

                if (!card.isLocked()) {
                  _context46.next = 4;
                  break;
                }

                _context46.next = 4;
                return card.unlock();

              case 4:
                _context46.next = 6;
                return card.importTokenAccount(tokenuuid);

              case 6:
                erc20tokenaccount = _context46.sent;

                if (erc20tokenaccount) {
                  _context46.next = 9;
                  break;
                }

                return _context46.abrupt("return", Promise.reject('could not find token ' + tokenuuid));

              case 9:
                token = erc20tokenaccount.getToken();
                tokenaccountsession = erc20tokenaccount._getSession();
                erc20tokencontract = token._getERC20TokenContract(tokenaccountsession);
                contractinterface = erc20tokencontract.getContractInterface();
                contractinstance = contractinterface.getContractInstance(); // TODO: remove once EthereumNodeAccessInstance._findTransactionFromUUID(transactionuuid) is fixed

                ethereumnodeaccessinstance = contractinstance.getEthereumNodeAccessInstance();
                ethereumnodeaccessinstance.MYWIDGET_OVERLOAD = Date.now();

                ethereumnodeaccessinstance._findTransactionFromUUID = function (transactionuuid) {
                  var self = ethereumnodeaccessinstance; // get local list

                  var jsonarray = self._readTransactionLogs();

                  for (var i = 0; i < (jsonarray ? jsonarray.length : 0); i++) {
                    var tx_log = jsonarray[i];
                    if (tx_log.transactionuuid == transactionuuid) return tx_log.transactionHash;
                  }
                }; // END


                _context46.next = 19;
                return contractinterface.getAddressFromTransactionUUID(tokenuuid);

              case 19:
                tokenaddress = _context46.sent;
                return _context46.abrupt("return", tokenaddress);

              case 21:
              case "end":
                return _context46.stop();
            }
          }
        }, _callee46, this);
      }));

      function _getAddressFromTokenUUID(_x149, _x150, _x151, _x152) {
        return _getAddressFromTokenUUID2.apply(this, arguments);
      }

      return _getAddressFromTokenUUID;
    }()
  }, {
    key: "importCurrencyFromTokenUUID",
    value: function () {
      var _importCurrencyFromTokenUUID = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee47(sessionuuid, walletuuid, carduuid, tokenuuid) {
        var global, _apicontrollers, session, wallet, card, tokenaddress;

        return _regeneratorRuntime().wrap(function _callee47$(_context47) {
          while (1) {
            switch (_context47.prev = _context47.next) {
              case 0:
                if (sessionuuid) {
                  _context47.next = 2;
                  break;
                }

                return _context47.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context47.next = 4;
                  break;
                }

                return _context47.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (carduuid) {
                  _context47.next = 6;
                  break;
                }

                return _context47.abrupt("return", Promise.reject('card uuid is undefined'));

              case 6:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context47.next = 10;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 10:
                session = _context47.sent;

                if (session) {
                  _context47.next = 13;
                  break;
                }

                return _context47.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 13:
                _context47.next = 15;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 15:
                wallet = _context47.sent;

                if (wallet) {
                  _context47.next = 18;
                  break;
                }

                return _context47.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 18:
                _context47.next = 20;
                return wallet.getCardFromUUID(carduuid);

              case 20:
                card = _context47.sent;

                if (card) {
                  _context47.next = 23;
                  break;
                }

                return _context47.abrupt("return", Promise.reject('could not find card ' + carduuid));

              case 23:
                _context47.next = 25;
                return this._getAddressFromTokenUUID(session, wallet, card, tokenuuid);

              case 25:
                tokenaddress = _context47.sent;

                if (tokenaddress) {
                  _context47.next = 28;
                  break;
                }

                return _context47.abrupt("return", Promise.reject('could not find address for token ' + tokenuuid));

              case 28:
                return _context47.abrupt("return", this.importCurrencyFromTokenAddress(sessionuuid, walletuuid, carduuid, tokenaddress));

              case 29:
              case "end":
                return _context47.stop();
            }
          }
        }, _callee47, this);
      }));

      function importCurrencyFromTokenUUID(_x153, _x154, _x155, _x156) {
        return _importCurrencyFromTokenUUID.apply(this, arguments);
      }

      return importCurrencyFromTokenUUID;
    }()
  }, {
    key: "importCurrencyFromTokenAddress",
    value: function () {
      var _importCurrencyFromTokenAddress = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee48(sessionuuid, walletuuid, carduuid, tokenaddress) {
        var global, _apicontrollers, session, wallet, card, cardsession, erc20token_contract, currency, currencyuuid;

        return _regeneratorRuntime().wrap(function _callee48$(_context48) {
          while (1) {
            switch (_context48.prev = _context48.next) {
              case 0:
                if (sessionuuid) {
                  _context48.next = 2;
                  break;
                }

                return _context48.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context48.next = 4;
                  break;
                }

                return _context48.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (carduuid) {
                  _context48.next = 6;
                  break;
                }

                return _context48.abrupt("return", Promise.reject('card uuid is undefined'));

              case 6:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context48.next = 10;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 10:
                session = _context48.sent;

                if (session) {
                  _context48.next = 13;
                  break;
                }

                return _context48.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 13:
                _context48.next = 15;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 15:
                wallet = _context48.sent;

                if (wallet) {
                  _context48.next = 18;
                  break;
                }

                return _context48.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 18:
                _context48.next = 20;
                return wallet.getCardFromUUID(carduuid);

              case 20:
                card = _context48.sent;

                if (card) {
                  _context48.next = 23;
                  break;
                }

                return _context48.abrupt("return", Promise.reject('could not find card ' + carduuid));

              case 23:
                _context48.next = 25;
                return this._getMonitoredCardSession(session, wallet, card);

              case 25:
                cardsession = _context48.sent;
                _context48.next = 28;
                return _apicontrollers.importERC20Token(cardsession, tokenaddress);

              case 28:
                erc20token_contract = _context48.sent;
                currency = {
                  uuid: session.guid(),
                  address: tokenaddress,
                  xtra_data: {
                    origin: 'import-from-token-address'
                  }
                };
                _context48.next = 32;
                return erc20token_contract.getChainName();

              case 32:
                currency.name = _context48.sent;
                _context48.next = 35;
                return erc20token_contract.getChainSymbol();

              case 35:
                currency.symbol = _context48.sent;
                _context48.next = 38;
                return erc20token_contract.getChainDecimals();

              case 38:
                currency.decimals = _context48.sent;
                currency.scheme_uuid = card.getSchemeUUID();
                currency.ops = {
                  canpay: true
                };
                currency.provider = 'provider.js'; // save currency

                _context48.next = 44;
                return this.saveLocalCurrency(sessionuuid, currency);

              case 44:
                // make card as a currency card for this new currency
                currencyuuid = currency.uuid;
                _context48.next = 47;
                return this.makeCurrencyCard(sessionuuid, walletuuid, currencyuuid, carduuid);

              case 47:
                return _context48.abrupt("return", currency);

              case 48:
              case "end":
                return _context48.stop();
            }
          }
        }, _callee48, this);
      }));

      function importCurrencyFromTokenAddress(_x157, _x158, _x159, _x160) {
        return _importCurrencyFromTokenAddress.apply(this, arguments);
      }

      return importCurrencyFromTokenAddress;
    }()
  }, {
    key: "_getSchemeNetworkConfig",
    value: function _getSchemeNetworkConfig(scheme) {
      var network = scheme.getNetworkConfig();
      return network;
    }
  }, {
    key: "getCurrencyCardList",
    value: function () {
      var _getCurrencyCardList3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee49(sessionuuid, walletuuid, currencyuuid) {
        var currency, global, _apicontrollers, session, wallet, cards, mvcclientwalletmodule, array, i, carduuid, cardinfo;

        return _regeneratorRuntime().wrap(function _callee49$(_context49) {
          while (1) {
            switch (_context49.prev = _context49.next) {
              case 0:
                if (sessionuuid) {
                  _context49.next = 2;
                  break;
                }

                return _context49.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context49.next = 4;
                  break;
                }

                return _context49.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (currencyuuid) {
                  _context49.next = 6;
                  break;
                }

                return _context49.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 6:
                _context49.next = 8;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 8:
                currency = _context49.sent;

                if (currency) {
                  _context49.next = 11;
                  break;
                }

                return _context49.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 11:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context49.next = 15;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 15:
                session = _context49.sent;

                if (session) {
                  _context49.next = 18;
                  break;
                }

                return _context49.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 18:
                _context49.next = 20;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 20:
                wallet = _context49.sent;

                if (wallet) {
                  _context49.next = 23;
                  break;
                }

                return _context49.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 23:
                _context49.next = 25;
                return this._getCurrencyCardList(session, wallet, currency)["catch"](function (err) {});

              case 25:
                cards = _context49.sent;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                array = [];

                for (i = 0; i < (cards ? cards.length : 0); i++) {
                  carduuid = cards[i].getCardUUID();
                  cardinfo = {
                    uuid: carduuid
                  };

                  mvcclientwalletmodule._fillCardInfo(cardinfo, cards[i]);

                  array.push(cardinfo);
                }

                return _context49.abrupt("return", array);

              case 30:
              case "end":
                return _context49.stop();
            }
          }
        }, _callee49, this);
      }));

      function getCurrencyCardList(_x161, _x162, _x163) {
        return _getCurrencyCardList3.apply(this, arguments);
      }

      return getCurrencyCardList;
    }()
  }, {
    key: "getCurrencySchemeInfo",
    value: function () {
      var _getCurrencySchemeInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee50(sessionuuid, currencyuuid) {
        var currency, global, _apicontrollers, session, scheme, mvcclientwalletmodule, schemeinfo;

        return _regeneratorRuntime().wrap(function _callee50$(_context50) {
          while (1) {
            switch (_context50.prev = _context50.next) {
              case 0:
                if (sessionuuid) {
                  _context50.next = 2;
                  break;
                }

                return _context50.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (currencyuuid) {
                  _context50.next = 4;
                  break;
                }

                return _context50.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 4:
                _context50.next = 6;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 6:
                currency = _context50.sent;

                if (currency) {
                  _context50.next = 9;
                  break;
                }

                return _context50.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 9:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context50.next = 13;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 13:
                session = _context50.sent;

                if (session) {
                  _context50.next = 16;
                  break;
                }

                return _context50.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 16:
                _context50.next = 18;
                return this._getCurrencyScheme(session, currency);

              case 18:
                scheme = _context50.sent;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                schemeinfo = {
                  uuid: scheme.getSchemeUUID()
                };

                mvcclientwalletmodule._fillSchemeInfoFromScheme(schemeinfo, scheme);

                return _context50.abrupt("return", schemeinfo);

              case 23:
              case "end":
                return _context50.stop();
            }
          }
        }, _callee50, this);
      }));

      function getCurrencySchemeInfo(_x164, _x165) {
        return _getCurrencySchemeInfo.apply(this, arguments);
      }

      return getCurrencySchemeInfo;
    }()
  }, {
    key: "getPretradeSchemeInfo",
    value: function () {
      var _getPretradeSchemeInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee51(sessionuuid, currencyuuid) {
        var currency, global, _apicontrollers, session, pretradescheme, mvcclientwalletmodule, pretradeschemeinfo;

        return _regeneratorRuntime().wrap(function _callee51$(_context51) {
          while (1) {
            switch (_context51.prev = _context51.next) {
              case 0:
                if (sessionuuid) {
                  _context51.next = 2;
                  break;
                }

                return _context51.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (currencyuuid) {
                  _context51.next = 4;
                  break;
                }

                return _context51.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 4:
                _context51.next = 6;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 6:
                currency = _context51.sent;

                if (currency) {
                  _context51.next = 9;
                  break;
                }

                return _context51.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 9:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context51.next = 13;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 13:
                session = _context51.sent;

                if (session) {
                  _context51.next = 16;
                  break;
                }

                return _context51.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 16:
                _context51.next = 18;
                return this._getPretradeScheme(session, currency);

              case 18:
                pretradescheme = _context51.sent;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                pretradeschemeinfo = {
                  uuid: pretradescheme.getSchemeUUID()
                };

                mvcclientwalletmodule._fillSchemeInfoFromScheme(pretradeschemeinfo, pretradescheme);

                return _context51.abrupt("return", pretradeschemeinfo);

              case 23:
              case "end":
                return _context51.stop();
            }
          }
        }, _callee51, this);
      }));

      function getPretradeSchemeInfo(_x166, _x167) {
        return _getPretradeSchemeInfo.apply(this, arguments);
      }

      return getPretradeSchemeInfo;
    }()
  }, {
    key: "getPretradeWeb3Url",
    value: function () {
      var _getPretradeWeb3Url = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee52(sessionuuid, currencyuuid) {
        var pretrade_schemeinfo, pretrade_web3providerurl;
        return _regeneratorRuntime().wrap(function _callee52$(_context52) {
          while (1) {
            switch (_context52.prev = _context52.next) {
              case 0:
                _context52.next = 2;
                return this.getPretradeSchemeInfo(sessionuuid, currencyuuid);

              case 2:
                pretrade_schemeinfo = _context52.sent;
                pretrade_web3providerurl = pretrade_schemeinfo.network.ethnodeserver.web3_provider_url;
                return _context52.abrupt("return", pretrade_web3providerurl);

              case 5:
              case "end":
                return _context52.stop();
            }
          }
        }, _callee52, this);
      }));

      function getPretradeWeb3Url(_x168, _x169) {
        return _getPretradeWeb3Url.apply(this, arguments);
      }

      return getPretradeWeb3Url;
    }()
  }, {
    key: "_getCardsOnScheme",
    value: function () {
      var _getCardsOnScheme2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee53(wallet, scheme) {
        var bRefresh,
            schemeuuid,
            cardlist,
            array,
            i,
            card,
            _args53 = arguments;
        return _regeneratorRuntime().wrap(function _callee53$(_context53) {
          while (1) {
            switch (_context53.prev = _context53.next) {
              case 0:
                bRefresh = _args53.length > 2 && _args53[2] !== undefined ? _args53[2] : true;
                schemeuuid = scheme.getSchemeUUID();
                _context53.next = 4;
                return wallet.getCardList(bRefresh);

              case 4:
                cardlist = _context53.sent;
                array = [];

                for (i = 0; i < (cardlist ? cardlist.length : 0); i++) {
                  card = cardlist[i];
                  if (card.getSchemeUUID() === schemeuuid) array.push(card);
                }

                return _context53.abrupt("return", array);

              case 8:
              case "end":
                return _context53.stop();
            }
          }
        }, _callee53);
      }));

      function _getCardsOnScheme(_x170, _x171) {
        return _getCardsOnScheme2.apply(this, arguments);
      }

      return _getCardsOnScheme;
    }()
  }, {
    key: "getPretradeCard",
    value: function () {
      var _getPretradeCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee54(sessionuuid, walletuuid, carduuid, currencyuuid) {
        var global, mvcclientwalletmodule, _apicontrollers, session, wallet, card, currency, pretradecardinfo, pretradescheme, cards, i, pretradecard, canPretradeCardSign, canCardSign, _pretradecard, pretrade_schemeinfo, _privatekey;

        return _regeneratorRuntime().wrap(function _callee54$(_context54) {
          while (1) {
            switch (_context54.prev = _context54.next) {
              case 0:
                if (sessionuuid) {
                  _context54.next = 2;
                  break;
                }

                return _context54.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context54.next = 4;
                  break;
                }

                return _context54.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (carduuid) {
                  _context54.next = 6;
                  break;
                }

                return _context54.abrupt("return", Promise.reject('card uuid is undefined'));

              case 6:
                if (currencyuuid) {
                  _context54.next = 8;
                  break;
                }

                return _context54.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 8:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                _apicontrollers = this._getClientAPI();
                _context54.next = 13;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 13:
                session = _context54.sent;

                if (session) {
                  _context54.next = 16;
                  break;
                }

                return _context54.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 16:
                _context54.next = 18;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 18:
                wallet = _context54.sent;

                if (wallet) {
                  _context54.next = 21;
                  break;
                }

                return _context54.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 21:
                _context54.next = 23;
                return wallet.getCardFromUUID(carduuid)["catch"](function (err) {});

              case 23:
                card = _context54.sent;

                if (card) {
                  _context54.next = 26;
                  break;
                }

                return _context54.abrupt("return", Promise.reject('could not find card ' + carduuid));

              case 26:
                _context54.next = 28;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 28:
                currency = _context54.sent;

                if (currency) {
                  _context54.next = 31;
                  break;
                }

                return _context54.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 31:
                _context54.next = 33;
                return this._getPretradeScheme(session, currency);

              case 33:
                pretradescheme = _context54.sent;
                _context54.next = 36;
                return this._getCardsOnScheme(wallet, pretradescheme, true)["catch"](function (err) {
                  console.log('error in getPretradeCard: ' + err);
                });

              case 36:
                cards = _context54.sent;

                if (!cards) {
                  _context54.next = 55;
                  break;
                }

                i = 0;

              case 39:
                if (!(i < cards.length)) {
                  _context54.next = 55;
                  break;
                }

                pretradecard = cards[i];

                if (!pretradecard.isLocked()) {
                  _context54.next = 44;
                  break;
                }

                _context54.next = 44;
                return pretradecard.unlock();

              case 44:
                _context54.next = 46;
                return pretradecard.canSign();

              case 46:
                canPretradeCardSign = _context54.sent;

                if (!(canPretradeCardSign === true)) {
                  _context54.next = 52;
                  break;
                }

                _context54.next = 50;
                return mvcclientwalletmodule.getCardInfo(sessionuuid, walletuuid, pretradecard.getCardUUID());

              case 50:
                pretradecardinfo = _context54.sent;
                return _context54.abrupt("break", 55);

              case 52:
                i++;
                _context54.next = 39;
                break;

              case 55:
                if (pretradecardinfo) {
                  _context54.next = 95;
                  break;
                }

                if (!card.isLocked()) {
                  _context54.next = 59;
                  break;
                }

                _context54.next = 59;
                return card.unlock();

              case 59:
                _context54.next = 61;
                return card.canSign();

              case 61:
                canCardSign = _context54.sent;

                if (!(canCardSign === true)) {
                  _context54.next = 82;
                  break;
                }

                _context54.next = 65;
                return this.getPretradeSchemeInfo(sessionuuid, currencyuuid);

              case 65:
                pretrade_schemeinfo = _context54.sent;

                if (!(pretrade_schemeinfo.uuid != card.getSchemeUUID())) {
                  _context54.next = 72;
                  break;
                }

                _context54.next = 69;
                return mvcclientwalletmodule.cloneCard(sessionuuid, walletuuid, carduuid, pretrade_schemeinfo.uuid);

              case 69:
                pretradecardinfo = _context54.sent;
                _context54.next = 75;
                break;

              case 72:
                _context54.next = 74;
                return mvcclientwalletmodule.getCardInfo(sessionuuid, walletuuid, carduuid);

              case 74:
                pretradecardinfo = _context54.sent;

              case 75:
                if (pretradecardinfo) {
                  _context54.next = 77;
                  break;
                }

                return _context54.abrupt("return", Promise.reject('could not clone or pick the main card for pretrade use'));

              case 77:
                _context54.next = 79;
                return wallet.getCardFromUUID(pretradecardinfo.uuid);

              case 79:
                _pretradecard = _context54.sent;
                _context54.next = 88;
                break;

              case 82:
                // main card is read-only, we can not use a clone or the card itself
                //return Promise.reject('card is read-only, can not create corresponding pretrade card');
                // let's create a card on the fly
                _privatekey = _apicontrollers.generatePrivateKey(session);
                _context54.next = 85;
                return _apicontrollers.createWalletCard(session, wallet, pretradescheme, _privatekey);

              case 85:
                _pretradecard = _context54.sent;

                if (_pretradecard) {
                  _context54.next = 88;
                  break;
                }

                return _context54.abrupt("return", Promise.reject('could not generate a pretrade card'));

              case 88:
                if (_pretradecard) {
                  _context54.next = 90;
                  break;
                }

                return _context54.abrupt("return", Promise.reject('could not create a pretrade card'));

              case 90:
                _context54.next = 92;
                return this.setPretradeCard(sessionuuid, walletuuid, currencyuuid, _pretradecard.uuid);

              case 92:
                _context54.next = 94;
                return mvcclientwalletmodule.getCardInfo(sessionuuid, walletuuid, _pretradecard.uuid);

              case 94:
                pretradecardinfo = _context54.sent;

              case 95:
                if (pretradecardinfo) {
                  _context54.next = 97;
                  break;
                }

                return _context54.abrupt("return", Promise.reject('could not find a card to register transactions'));

              case 97:
                return _context54.abrupt("return", pretradecardinfo);

              case 98:
              case "end":
                return _context54.stop();
            }
          }
        }, _callee54, this);
      }));

      function getPretradeCard(_x172, _x173, _x174, _x175) {
        return _getPretradeCard.apply(this, arguments);
      }

      return getPretradeCard;
    }()
  }, {
    key: "setPretradeCard",
    value: function () {
      var _setPretradeCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee55(sessionuuid, walletuuid, currencyuuid, carduuid) {
        var global, _apicontrollers, session, wallet, currency, card, pretradescheme, cards, i, _card, xtradata;

        return _regeneratorRuntime().wrap(function _callee55$(_context55) {
          while (1) {
            switch (_context55.prev = _context55.next) {
              case 0:
                if (sessionuuid) {
                  _context55.next = 2;
                  break;
                }

                return _context55.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context55.next = 4;
                  break;
                }

                return _context55.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (currencyuuid) {
                  _context55.next = 6;
                  break;
                }

                return _context55.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 6:
                if (carduuid) {
                  _context55.next = 8;
                  break;
                }

                return _context55.abrupt("return", Promise.reject('card uuid is undefined'));

              case 8:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context55.next = 12;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 12:
                session = _context55.sent;

                if (session) {
                  _context55.next = 15;
                  break;
                }

                return _context55.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 15:
                _context55.next = 17;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 17:
                wallet = _context55.sent;

                if (wallet) {
                  _context55.next = 20;
                  break;
                }

                return _context55.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 20:
                _context55.next = 22;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 22:
                currency = _context55.sent;

                if (currency) {
                  _context55.next = 25;
                  break;
                }

                return _context55.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 25:
                _context55.next = 27;
                return wallet.getCardFromUUID(carduuid);

              case 27:
                card = _context55.sent;

                if (card) {
                  _context55.next = 30;
                  break;
                }

                return _context55.abrupt("return", Promise.reject('could not find card ' + carduuid));

              case 30:
                _context55.next = 32;
                return this._getPretradeScheme(session, currency);

              case 32:
                pretradescheme = _context55.sent;
                _context55.next = 35;
                return this._getCardsOnScheme(wallet, pretradescheme, true)["catch"](function (err) {
                  console.log('error in getPretradeCard: ' + err);
                });

              case 35:
                cards = _context55.sent;

                if (!cards) {
                  _context55.next = 61;
                  break;
                }

                i = 0;

              case 38:
                if (!(i < (cards ? cards.length : 0))) {
                  _context55.next = 61;
                  break;
                }

                _card = cards[i];
                xtradata = _card.getXtraData('myquote');

                if (!(xtradata && xtradata.pretradecard === true)) {
                  _context55.next = 49;
                  break;
                }

                // remove flag
                xtradata.pretradecard = false;

                _card.putXtraData('myquote', xtradata);

                if (!_card.isLocked()) {
                  _context55.next = 47;
                  break;
                }

                _context55.next = 47;
                return _card.unlock();

              case 47:
                _context55.next = 49;
                return _card.save();

              case 49:
                if (!(_card.getCardUUID() === carduuid)) {
                  _context55.next = 58;
                  break;
                }

                xtradata = xtradata ? xtradata : {};
                xtradata.pretradecard = true;

                _card.putXtraData('myquote', xtradata);

                if (!_card.isLocked()) {
                  _context55.next = 56;
                  break;
                }

                _context55.next = 56;
                return _card.unlock();

              case 56:
                _context55.next = 58;
                return _card.save();

              case 58:
                i++;
                _context55.next = 38;
                break;

              case 61:
              case "end":
                return _context55.stop();
            }
          }
        }, _callee55, this);
      }));

      function setPretradeCard(_x176, _x177, _x178, _x179) {
        return _setPretradeCard.apply(this, arguments);
      }

      return setPretradeCard;
    }() //
    // uniswap
    //

  }, {
    key: "getPriceForCreditUnits",
    value: function () {
      var _getPriceForCreditUnits = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee56(sessionuuid, currencyuuid, creditunits) {
        var global, _apicontrollers, session, currency, swapmodule, scheme, ethnodemodule, avg_transaction_fee, weiamount, ethamount, ethcredit, uniswap_v2, token, weth, pricing, priceamount, price_struct;

        return _regeneratorRuntime().wrap(function _callee56$(_context56) {
          while (1) {
            switch (_context56.prev = _context56.next) {
              case 0:
                if (sessionuuid) {
                  _context56.next = 2;
                  break;
                }

                return _context56.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (currencyuuid) {
                  _context56.next = 4;
                  break;
                }

                return _context56.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 4:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context56.next = 8;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 8:
                session = _context56.sent;

                if (session) {
                  _context56.next = 11;
                  break;
                }

                return _context56.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 11:
                _context56.next = 13;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 13:
                currency = _context56.sent;

                if (currency) {
                  _context56.next = 16;
                  break;
                }

                return _context56.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 16:
                swapmodule = global.getModuleObject('uniswap');
                _context56.next = 19;
                return this._getCurrencyScheme(session, currency);

              case 19:
                scheme = _context56.sent;
                // compute corresponding ethereum credits
                ethnodemodule = global.getModuleObject('ethnode');
                avg_transaction_fee = this._getAverageTransactionFee(scheme);
                weiamount = ethnodemodule.getWeiFromEther(avg_transaction_fee);
                _context56.next = 25;
                return this._createDecimalAmount(session, weiamount, 18);

              case 25:
                ethamount = _context56.sent;
                ethamount.multiply(creditunits);
                _context56.next = 29;
                return ethamount.toInteger();

              case 29:
                ethcredit = _context56.sent;
                // token info
                uniswap_v2 = currency.uniswap_v2;
                uniswap_v2.version = 'uniswap_v2';
                token = {};
                token.name = currency.name;
                token.address = currency.address;
                token.symbol = currency.symbol;
                token.decimals = currency.decimals;
                weth = {};
                weth.name = uniswap_v2.gas_name;
                weth.address = uniswap_v2.gas_address;
                weth.symbol = uniswap_v2.gas_symbol;
                weth.decimals = uniswap_v2.gas_decimals;
                _context56.next = 44;
                return swapmodule.getPriceForOutput(session, scheme, token, weth, ethcredit, uniswap_v2);

              case 44:
                pricing = _context56.sent;
                priceamount = pricing.amounts_in ? pricing.amounts_in[0] : null;
                price_struct = {};
                price_struct.creditunits_requested = creditunits;
                _context56.next = 50;
                return this._createCurrencyAmount(session, currency, priceamount ? priceamount : -1);

              case 50:
                price_struct.currency_amount = _context56.sent;
                return _context56.abrupt("return", price_struct);

              case 52:
              case "end":
                return _context56.stop();
            }
          }
        }, _callee56, this);
      }));

      function getPriceForCreditUnits(_x180, _x181, _x182) {
        return _getPriceForCreditUnits.apply(this, arguments);
      }

      return getPriceForCreditUnits;
    }()
  }, {
    key: "buyCreditUnits",
    value: function () {
      var _buyCreditUnits = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee57(sessionuuid, walletuuid, carduuid, currencyuuid, creditunits) {
        var feelevel,
            global,
            mvcclientwalletmodule,
            _apicontrollers,
            session,
            wallet,
            card,
            currency,
            swapmodule,
            scheme,
            cardsession,
            fromaccount,
            ethnodemodule,
            avg_transaction_fee,
            weiamount,
            ethamount,
            ethcredit,
            uniswap_v2,
            token,
            currencyposition,
            tokenamountmax,
            weth,
            ethtx,
            fee,
            _args57 = arguments;

        return _regeneratorRuntime().wrap(function _callee57$(_context57) {
          while (1) {
            switch (_context57.prev = _context57.next) {
              case 0:
                feelevel = _args57.length > 5 && _args57[5] !== undefined ? _args57[5] : null;

                if (sessionuuid) {
                  _context57.next = 3;
                  break;
                }

                return _context57.abrupt("return", Promise.reject('session uuid is undefined'));

              case 3:
                if (walletuuid) {
                  _context57.next = 5;
                  break;
                }

                return _context57.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 5:
                if (carduuid) {
                  _context57.next = 7;
                  break;
                }

                return _context57.abrupt("return", Promise.reject('card uuid is undefined'));

              case 7:
                if (currencyuuid) {
                  _context57.next = 9;
                  break;
                }

                return _context57.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 9:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                _apicontrollers = this._getClientAPI();
                _context57.next = 14;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 14:
                session = _context57.sent;

                if (session) {
                  _context57.next = 17;
                  break;
                }

                return _context57.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 17:
                _context57.next = 19;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 19:
                wallet = _context57.sent;

                if (wallet) {
                  _context57.next = 22;
                  break;
                }

                return _context57.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 22:
                _context57.next = 24;
                return wallet.getCardFromUUID(carduuid);

              case 24:
                card = _context57.sent;

                if (card) {
                  _context57.next = 27;
                  break;
                }

                return _context57.abrupt("return", Promise.reject('could not find card ' + carduuid));

              case 27:
                _context57.next = 29;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 29:
                currency = _context57.sent;

                if (currency) {
                  _context57.next = 32;
                  break;
                }

                return _context57.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 32:
                swapmodule = global.getModuleObject('uniswap');
                _context57.next = 35;
                return this._getCurrencyScheme(session, currency);

              case 35:
                scheme = _context57.sent;
                _context57.next = 38;
                return this._getMonitoredCardSession(session, wallet, card);

              case 38:
                cardsession = _context57.sent;
                fromaccount = card._getSessionAccountObject(); // compute corresponding ethereum credits

                ethnodemodule = global.getModuleObject('ethnode');
                avg_transaction_fee = this._getAverageTransactionFee(scheme);
                weiamount = ethnodemodule.getWeiFromEther(avg_transaction_fee);
                _context57.next = 45;
                return this._createDecimalAmount(session, weiamount, 18);

              case 45:
                ethamount = _context57.sent;
                ethamount.multiply(creditunits);
                _context57.next = 49;
                return ethamount.toInteger();

              case 49:
                ethcredit = _context57.sent;
                // token info
                uniswap_v2 = currency.uniswap_v2;
                uniswap_v2.version = 'uniswap_v2';
                token = {};
                token.name = currency.name;
                token.address = currency.address;
                token.symbol = currency.symbol;
                token.decimals = currency.decimals;
                _context57.next = 59;
                return this.getCurrencyPosition(sessionuuid, walletuuid, currencyuuid, carduuid);

              case 59:
                currencyposition = _context57.sent;
                _context57.next = 62;
                return currencyposition.toInteger();

              case 62:
                tokenamountmax = _context57.sent;
                weth = {};
                weth.name = uniswap_v2.gas_name;
                weth.address = uniswap_v2.gas_address;
                weth.symbol = uniswap_v2.gas_symbol;
                weth.decimals = uniswap_v2.gas_decimals; // create ethereum transaction object
                //var ethtx = _apicontrollers.createEthereumTransaction(cardsession, fromaccount);

                _context57.next = 70;
                return this._createMonitoredEthereumTransaction(wallet, card, cardsession, fromaccount);

              case 70:
                ethtx = _context57.sent;
                ethtx.setToAddress(fromaccount.getAddress()); // ask to send credits to card
                // fee

                _context57.next = 74;
                return _apicontrollers.createSchemeFee(scheme, feelevel);

              case 74:
                fee = _context57.sent;
                ethtx.setGas(fee.gaslimit);
                ethtx.setGasPrice(fee.gasPrice); // send swap request

                return _context57.abrupt("return", swapmodule.buyEthOnOutput(cardsession, scheme, token, tokenamountmax, weth, ethcredit, uniswap_v2, ethtx));

              case 78:
              case "end":
                return _context57.stop();
            }
          }
        }, _callee57, this);
      }));

      function buyCreditUnits(_x183, _x184, _x185, _x186, _x187) {
        return _buyCreditUnits.apply(this, arguments);
      }

      return buyCreditUnits;
    }() //
    // utils
    //

  }, {
    key: "_unformatAmount",
    value: function () {
      var _unformatAmount2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee58(session, amountstring, decimals) {
        var _amountstring, index, split, amountnumberstring, multiplier, i, integerstring;

        return _regeneratorRuntime().wrap(function _callee58$(_context58) {
          while (1) {
            switch (_context58.prev = _context58.next) {
              case 0:
                if (!(amountstring === undefined)) {
                  _context58.next = 2;
                  break;
                }

                return _context58.abrupt("return");

              case 2:
                _amountstring = amountstring.trim(); // remove trailing symbol if some

                index = _amountstring.indexOf(' ');
                if (index > 0) _amountstring = _amountstring.substring(0, index);

                if (!(!_amountstring || isNaN(_amountstring))) {
                  _context58.next = 7;
                  break;
                }

                return _context58.abrupt("return", -1);

              case 7:
                split = amountstring.toString().split(".");

                if (typeof split[1] === 'undefined') {
                  // no decimal
                  multiplier = '';

                  for (i = 0; i < decimals; i++) {
                    multiplier += '0';
                  }

                  amountnumberstring = _amountstring + multiplier;
                } else {
                  integerstring = split[0];

                  if (split[1].length < decimals) {
                    integerstring += split[1]; // fill with trailing zeros

                    for (i = 0; i < decimals - split[1].length; i++) {
                      integerstring += '0';
                    }
                  } else {
                    integerstring += split[1].substr(0, decimals);
                  }

                  amountnumberstring = integerstring;
                }

                return _context58.abrupt("return", amountnumberstring);

              case 10:
              case "end":
                return _context58.stop();
            }
          }
        }, _callee58);
      }));

      function _unformatAmount(_x188, _x189, _x190) {
        return _unformatAmount2.apply(this, arguments);
      }

      return _unformatAmount;
    }()
  }, {
    key: "_formatAmount",
    value: function () {
      var _formatAmount2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee59(session, amount, decimals, options) {
        var _inputamountstring, amountstring, integerpart, leading, i, decimalsshown;

        return _regeneratorRuntime().wrap(function _callee59$(_context59) {
          while (1) {
            switch (_context59.prev = _context59.next) {
              case 0:
                if (!(amount === undefined)) {
                  _context59.next = 2;
                  break;
                }

                return _context59.abrupt("return");

              case 2:
                _inputamountstring = amount.toString();

                if (_inputamountstring.length > decimals) {
                  // integer part
                  integerpart = _inputamountstring.substring(0, _inputamountstring.length - decimals);
                  amountstring = integerpart + '.' + _inputamountstring.substring(_inputamountstring.length - decimals);
                } else {
                  leading = '';

                  for (i = 0; i < decimals - _inputamountstring.length; i++) {
                    leading += '0';
                  }

                  amountstring = '0.' + leading + _inputamountstring;
                }

                if (options) {
                  if (typeof options.showdecimals !== 'undefined') {
                    if (options.showdecimals === false) {
                      // we remove . and after
                      amountstring = amountstring.substring(0, amountstring.indexOf('.'));
                    } else {
                      decimalsshown = options.decimalsshown ? options.decimalsshown : decimals;
                      amountstring = amountstring.substring(0, amountstring.indexOf('.') + 1 + decimalsshown);
                    }
                  }
                }

                return _context59.abrupt("return", amountstring);

              case 6:
              case "end":
                return _context59.stop();
            }
          }
        }, _callee59);
      }));

      function _formatAmount(_x191, _x192, _x193, _x194) {
        return _formatAmount2.apply(this, arguments);
      }

      return _formatAmount;
    }()
  }, {
    key: "_formatMonetaryAmount",
    value: function () {
      var _formatMonetaryAmount2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee60(session, amount, symbol, decimals, options) {
        var amountstring;
        return _regeneratorRuntime().wrap(function _callee60$(_context60) {
          while (1) {
            switch (_context60.prev = _context60.next) {
              case 0:
                _context60.next = 2;
                return this._formatAmount(session, amount, decimals, options);

              case 2:
                amountstring = _context60.sent;
                return _context60.abrupt("return", amountstring + ' ' + symbol);

              case 4:
              case "end":
                return _context60.stop();
            }
          }
        }, _callee60, this);
      }));

      function _formatMonetaryAmount(_x195, _x196, _x197, _x198, _x199) {
        return _formatMonetaryAmount2.apply(this, arguments);
      }

      return _formatMonetaryAmount;
    }()
  }, {
    key: "_formatTokenAmount",
    value: function () {
      var _formatTokenAmount2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee61(session, tokenamount, token, options) {
        var erc20contrat, decimals, symbol, amountstring;
        return _regeneratorRuntime().wrap(function _callee61$(_context61) {
          while (1) {
            switch (_context61.prev = _context61.next) {
              case 0:
                // TODO: unsupported calls that would need to be
                // wrapped up in a token.init function
                erc20contrat = token._getERC20TokenContract(session); // necessary for _synchronize

                _context61.next = 3;
                return token._synchronizeERC20TokenContract(session);

              case 3:
                // TODO: end
                decimals = token.getDecimals();
                symbol = token.getSymbol();
                _context61.next = 7;
                return this._formatMonetaryAmount(session, tokenamount, symbol, decimals, options);

              case 7:
                amountstring = _context61.sent;
                return _context61.abrupt("return", amountstring);

              case 9:
              case "end":
                return _context61.stop();
            }
          }
        }, _callee61, this);
      }));

      function _formatTokenAmount(_x200, _x201, _x202, _x203) {
        return _formatTokenAmount2.apply(this, arguments);
      }

      return _formatTokenAmount;
    }()
  }, {
    key: "getDecimalAmount",
    value: function () {
      var _getDecimalAmount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee62(sessionuuid, amount) {
        var decimals,
            global,
            _apicontrollers,
            session,
            _args62 = arguments;

        return _regeneratorRuntime().wrap(function _callee62$(_context62) {
          while (1) {
            switch (_context62.prev = _context62.next) {
              case 0:
                decimals = _args62.length > 2 && _args62[2] !== undefined ? _args62[2] : 18;

                if (sessionuuid) {
                  _context62.next = 3;
                  break;
                }

                return _context62.abrupt("return", Promise.reject('session uuid is undefined'));

              case 3:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context62.next = 7;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 7:
                session = _context62.sent;

                if (session) {
                  _context62.next = 10;
                  break;
                }

                return _context62.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 10:
                return _context62.abrupt("return", this._createDecimalAmount(session, amount, decimals));

              case 11:
              case "end":
                return _context62.stop();
            }
          }
        }, _callee62, this);
      }));

      function getDecimalAmount(_x204, _x205) {
        return _getDecimalAmount.apply(this, arguments);
      }

      return getDecimalAmount;
    }()
  }, {
    key: "getCurrencyAmount",
    value: function () {
      var _getCurrencyAmount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee63(sessionuuid, currencyuuid, amount) {
        var global, _apicontrollers, mvcclientwalletmodule, session, currency, decimals, tokenamountstring, isFloat, amountstring;

        return _regeneratorRuntime().wrap(function _callee63$(_context63) {
          while (1) {
            switch (_context63.prev = _context63.next) {
              case 0:
                if (sessionuuid) {
                  _context63.next = 2;
                  break;
                }

                return _context63.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (currencyuuid) {
                  _context63.next = 4;
                  break;
                }

                return _context63.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 4:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                _context63.next = 9;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 9:
                session = _context63.sent;

                if (session) {
                  _context63.next = 12;
                  break;
                }

                return _context63.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 12:
                _context63.next = 14;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 14:
                currency = _context63.sent;

                if (currency) {
                  _context63.next = 17;
                  break;
                }

                return _context63.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 17:
                decimals = currency.decimals;

                if (!(typeof amount === 'string')) {
                  _context63.next = 24;
                  break;
                }

                _context63.next = 21;
                return this._unformatAmount(session, amount, decimals);

              case 21:
                tokenamountstring = _context63.sent;
                _context63.next = 37;
                break;

              case 24:
                if (!Number.isInteger(amount)) {
                  _context63.next = 28;
                  break;
                }

                tokenamountstring = mvcclientwalletmodule.formatAmount(amount, decimals);
                _context63.next = 37;
                break;

              case 28:
                isFloat = function isFloat(n) {
                  return Number(n) === n && n % 1 !== 0;
                };

                if (!isFloat(amount)) {
                  _context63.next = 36;
                  break;
                }

                amountstring = amount.toString();
                _context63.next = 33;
                return this._unformatAmount(session, amountstring, decimals);

              case 33:
                tokenamountstring = _context63.sent;
                _context63.next = 37;
                break;

              case 36:
                return _context63.abrupt("return", Promise.reject('amount is not correct: ' + amount));

              case 37:
                return _context63.abrupt("return", this._createCurrencyAmount(session, currency, tokenamountstring));

              case 38:
              case "end":
                return _context63.stop();
            }
          }
        }, _callee63, this);
      }));

      function getCurrencyAmount(_x206, _x207, _x208) {
        return _getCurrencyAmount.apply(this, arguments);
      }

      return getCurrencyAmount;
    }()
  }, {
    key: "formatCurrencyAmount",
    value: function () {
      var _formatCurrencyAmount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee64(sessionuuid, currencyuuid, currencyamount, options) {
        var global, CurrencyAmountClass, _apicontrollers, session, currency, _options, tokenamountstring, currencyamountstring;

        return _regeneratorRuntime().wrap(function _callee64$(_context64) {
          while (1) {
            switch (_context64.prev = _context64.next) {
              case 0:
                global = this.global;

                if (sessionuuid) {
                  _context64.next = 3;
                  break;
                }

                return _context64.abrupt("return", Promise.reject('session uuid is undefined'));

              case 3:
                if (currencyuuid) {
                  _context64.next = 5;
                  break;
                }

                return _context64.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 5:
                CurrencyAmountClass = global.getModuleClass('currencies', 'CurrencyAmount');

                if (!(currencyamount instanceof CurrencyAmountClass !== true)) {
                  _context64.next = 8;
                  break;
                }

                return _context64.abrupt("return", Promise.reject('wrong currency amount type'));

              case 8:
                _apicontrollers = this._getClientAPI();
                _context64.next = 11;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 11:
                session = _context64.sent;

                if (session) {
                  _context64.next = 14;
                  break;
                }

                return _context64.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 14:
                _context64.next = 16;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 16:
                currency = _context64.sent;

                if (currency) {
                  _context64.next = 19;
                  break;
                }

                return _context64.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 19:
                _options = options ? options : {
                  showdecimals: true,
                  decimalsshown: 2
                }; // TEST

                /* 		var currencyscheme = await this._getCurrencyScheme(session, currency);
                		var tokenaddress = currency.address;
                
                		var token = await currencyscheme.getTokenObject(tokenaddress);
                		
                		var currencyamountstring = await this._formatTokenAmount(session, tokenamount, token, _options);
                 */
                // TEST: end

                _context64.next = 22;
                return currencyamount.toString();

              case 22:
                tokenamountstring = _context64.sent;
                _context64.next = 25;
                return this._formatMonetaryAmount(session, tokenamountstring, currency.symbol, currency.decimals, _options);

              case 25:
                currencyamountstring = _context64.sent;
                return _context64.abrupt("return", currencyamountstring);

              case 27:
              case "end":
                return _context64.stop();
            }
          }
        }, _callee64, this);
      }));

      function formatCurrencyAmount(_x209, _x210, _x211, _x212) {
        return _formatCurrencyAmount.apply(this, arguments);
      }

      return formatCurrencyAmount;
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

_GlobalClass.getGlobalObject().registerModuleObject(new Module()); //dependencies


_GlobalClass.getGlobalObject().registerModuleDepency('mvc-currencies', 'common');
//# sourceMappingURL=module.js.map