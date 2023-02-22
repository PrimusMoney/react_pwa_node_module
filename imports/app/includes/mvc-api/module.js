'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Module = /*#__PURE__*/function () {
  // AVG_TRANSACTION_FEE * TRANSACTION_UNITS_MIN should be higher than DEFAULT_GAS_LIMIT * DEFAULT_GAS_PRICE
  function Module() {
    _classCallCheck(this, Module);

    this.name = 'mvc-currencies';
    this.current_version = "0.30.15.2023.02.22";
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
      var global = this.global;
      var currenciesmodule = global.getModuleObject('currencies');
      return currenciesmodule._canWalletHandleScheme(wallet, scheme);
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
    key: "_getSchemeSessionMap",
    value: function _getSchemeSessionMap(session) {
      var schemesessionmap = session.getSessionVariable('schemesessionmap');

      if (!schemesessionmap) {
        schemesessionmap = Object.create(null);
        session.setSessionVariable('schemesessionmap', schemesessionmap);
      }

      return schemesessionmap;
    }
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

                return _context2.abrupt("return", Promise.reject('could not create child of null session'));

              case 4:
                schemesessionmap = this._getSchemeSessionMap(parentsession); // we could look if a pre-existing session with corresponding web3providerurl could be re-used

                schemeuuid = scheme.getSchemeUUID();

                if (!schemesessionmap[schemeuuid]) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt("return", schemesessionmap[schemeuuid]);

              case 8:
                _context2.next = 10;
                return _apicontrollers.createChildSessionObject(parentsession);

              case 10:
                childsession = _context2.sent;
                childsession.MYCURRENCY = this.current_version;
                if (!parentsession.MYCURRENCY_ROOT) parentsession.MYCURRENCY_ROOT = this.current_version ? this.current_version : 'xxx';
                networkconfig = scheme.getNetworkConfig();
                _context2.next = 16;
                return _apicontrollers.setSessionNetworkConfig(childsession, networkconfig);

              case 16:
                schemesessionmap[schemeuuid] = childsession;
                return _context2.abrupt("return", childsession);

              case 18:
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
        var fetchsession, walletschemeuuid, schemeuuid, _walletsession, network, ethnodeserver, schemesessionmap, walletsession;

        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log('OBSOLETE: Module._getMonitoredSchemeSession should no longer be used, should use Module._getMonitoredCurrencySession!');

                if (scheme) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return", Promise.reject('scheme is not defined'));

              case 3:
                if (!scheme.isRemote()) {
                  _context3.next = 33;
                  break;
                }

                if (!wallet) {
                  _context3.next = 30;
                  break;
                }

                walletschemeuuid = wallet.getSchemeUUID();
                schemeuuid = scheme.getSchemeUUID();

                if (!this._canWalletHandleScheme(wallet, scheme)) {
                  _context3.next = 27;
                  break;
                }

                _walletsession = wallet._getSession();
                network = scheme.getNetworkConfig();
                ethnodeserver = network.ethnodeserver ? network.ethnodeserver : {};

                if (!(ethnodeserver && ethnodeserver.web3_provider_url)) {
                  _context3.next = 24;
                  break;
                }

                // scheme overloaded for serving ethnode access
                schemesessionmap = this._getSchemeSessionMap(_walletsession);
                fetchsession = schemesessionmap[scheme.uuid];

                if (fetchsession) {
                  _context3.next = 22;
                  break;
                }

                _context3.next = 17;
                return this._createDummyWalletSession(_walletsession);

              case 17:
                fetchsession = _context3.sent;
                fetchsession.DUMMY_SESSION_SCHEME = scheme;
                schemesessionmap[scheme.uuid] = fetchsession;
                _context3.next = 22;
                return this._setMonitoredEthereumNodeAccess(fetchsession, ethnodeserver);

              case 22:
                _context3.next = 25;
                break;

              case 24:
                fetchsession = _walletsession;

              case 25:
                _context3.next = 28;
                break;

              case 27:
                return _context3.abrupt("return", Promise.reject('ERR_MISSING_CREDENTIALS'));

              case 28:
                _context3.next = 31;
                break;

              case 30:
                return _context3.abrupt("return", Promise.reject('ERR_MISSING_CREDENTIALS'));

              case 31:
                _context3.next = 43;
                break;

              case 33:
                if (!wallet) {
                  _context3.next = 40;
                  break;
                }

                walletsession = wallet._getSession();
                _context3.next = 37;
                return this._getChildSessionOnScheme(walletsession, scheme);

              case 37:
                fetchsession = _context3.sent;
                _context3.next = 43;
                break;

              case 40:
                _context3.next = 42;
                return this._getChildSessionOnScheme(session, scheme);

              case 42:
                fetchsession = _context3.sent;

              case 43:
                return _context3.abrupt("return", fetchsession);

              case 44:
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

    /* 	// TODO: replace by _apicontrollers.__makeWalletCard for version >= 0.20.18
    	async __makeWalletCard(session, wallet, scheme, authname, password, address) {
    		// to create a remote card on a remote wallet, with different schemes
    		var global = this.global;
    		var Card = global.getModuleClass('wallet', 'Card');;
    
    		var cardjson = {};
    		cardjson.authname = authname;
    		cardjson.address = address;
    		cardjson.password = password;
    
    		cardjson.uuid = session.guid();
    		cardjson.label = authname;
    
    		const card_new =  Card.readFromJson(wallet, scheme, cardjson);
    
    		if (card_new) {
    			await card_new.init();
    
    			if (card_new.isLocked()) {
    				await card_new.unlock();
    			}
    
    			return card_new;
    		}
    		else
    			throw new Error('could not create card');
    
    	}
    	
    	async _makeWalletCard(session, wallet, scheme, privatekey) {
    		// we make client or remote wallets, depending on the scheme
    		var global = this.global;
    		var _apicontrollers = this._getClientAPI();
    
    		if (!wallet)
    			return Promise.reject('wallet is not defined');
    
    		if (!scheme)
    			return Promise.reject('scheme is not defined');
    
    
    		var sessionaccount;
    
    		if (privatekey) {
    			// create a session account from private key
    			if (_apicontrollers.isValidPrivateKey(session, privatekey)) {
    				sessionaccount = await _apicontrollers.getSessionAccountFromPrivateKey(session, wallet, privatekey);
    			}
    	
    			if (!sessionaccount)
    				return Promise.reject('not a valid private key');
    	
    		}
    		else {
    			// we generate a key
    			var _privatekey = _apicontrollers.generatePrivateKey();
    			
    			sessionaccount = await _apicontrollers.getSessionAccountFromPrivateKey(session, wallet, _privatekey);
    	
    			if (!sessionaccount)
    				return Promise.reject('could not generate a private key');
    		}
    
    		var walletsession = wallet._getSession();
    		var walletuser = walletsession.getSessionUserObject();
    
    		if (!walletuser)
    			return Promise.reject('wallet needs to be unlocked');
    
    		
    		var address = sessionaccount.getAddress();
    		var authname = walletuser.getUserName();
    		var password = null;
    
    		// TODO: replace by _apicontrollers.makeWalletCard for version >= 0.20.18
    		//const card_new =  await _apicontrollers.makeWalletCard(session, wallet, scheme, authname, password, address)
    		const card_new =  await this.__makeWalletCard(session, wallet, scheme, authname, password, address)
    		.catch(err => {
    			console.log('error in _makeWalletCard: ' + err);
    		});
    
    		if (card_new) {
    			await card_new.init();
    
    			if (card_new.isLocked()) {
    				await card_new.unlock();
    			}
    
    			return card_new;
    		}
    		else
    			throw new Error('could not create card');
    	}
    
    
    	// TODO: replace by _apicontrollers.createWalletCard for version >= 0.20.18
    	async _createWalletCard(session, wallet, scheme, privatekey) {
    		var global = this.global;
    		var _apicontrollers = this._getClientAPI();
    
    		if (scheme.isRemote() === false)  {
    			return _apicontrollers.createWalletCard(session, wallet, scheme, privatekey);
    		}
    		else {
    			var wallettype = wallet.getWalletType();
    
    			switch(wallettype) {
    				case 0:
    					return Promise.reject('ERR_MISSING_CREDENTIALS');
    				case 1:
    					var walletschemeuuid = wallet.getSchemeUUID();
    
    					if (this._canWalletHandleScheme(wallet, scheme))
    						return this._makeWalletCard(session, wallet, scheme, privatekey);
    					else
    						return Promise.reject('ERR_MISSING_CREDENTIALS');
    				default:
    					return Promise.reject('wrong wallet type: ' + wallettype);
    			}
    	
    		}
    
    	} */
    //
    // Currency functions
    //
    // utils

  }, {
    key: "_getAverageTransactionFee",
    value: function () {
      var _getAverageTransactionFee2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(session, currency, feelevel) {
        var global, ethnodemodule, avg_transaction_fee, ethnodeserver;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                global = this.global;
                ethnodemodule = global.getModuleObject('ethnode');
                avg_transaction_fee = Module.AVG_TRANSACTION_FEE;
                _context4.next = 5;
                return this._getCurrencyEthNodeServer(session, currency);

              case 5:
                ethnodeserver = _context4.sent;
                if (ethnodeserver && ethnodeserver.avg_transaction_fee) avg_transaction_fee = parseFloat(ethnodeserver.avg_transaction_fee.toString());
                return _context4.abrupt("return", avg_transaction_fee * (feelevel && feelevel.avg_transaction_fee_multiplier ? parseInt(feelevel.avg_transaction_fee_multiplier) : 1));

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function _getAverageTransactionFee(_x10, _x11, _x12) {
        return _getAverageTransactionFee2.apply(this, arguments);
      }

      return _getAverageTransactionFee;
    }()
  }, {
    key: "_getTransactionUnitsAsync",
    value: function () {
      var _getTransactionUnitsAsync2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(session, currency, transactioncredits) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", this._getTransactionUnits(session, currency, transactioncredits));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function _getTransactionUnitsAsync(_x13, _x14, _x15) {
        return _getTransactionUnitsAsync2.apply(this, arguments);
      }

      return _getTransactionUnitsAsync;
    }()
  }, {
    key: "_getTransactionUnits",
    value: function () {
      var _getTransactionUnits2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(session, currency, transactioncredits) {
        var global, ethnodemodule, ethcredit, avg_transaction_fee, ethnodeserver, units;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                global = this.global;
                ethnodemodule = global.getModuleObject('ethnode');
                ethcredit = ethnodemodule.getEtherFromwei(transactioncredits);
                avg_transaction_fee = Module.AVG_TRANSACTION_FEE;
                _context6.next = 6;
                return this._getCurrencyEthNodeServer(session, currency);

              case 6:
                ethnodeserver = _context6.sent;
                if (ethnodeserver && ethnodeserver.avg_transaction_fee) avg_transaction_fee = parseFloat(ethnodeserver.avg_transaction_fee.toString());
                units = ethcredit / (avg_transaction_fee > 0 ? avg_transaction_fee : Module.AVG_TRANSACTION_FEE);
                return _context6.abrupt("return", Math.floor(units));

              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function _getTransactionUnits(_x16, _x17, _x18) {
        return _getTransactionUnits2.apply(this, arguments);
      }

      return _getTransactionUnits;
    }() // minimal number of transactions

  }, {
    key: "_getTransactionUnitsThreshold",
    value: function () {
      var _getTransactionUnitsThreshold2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(session, currency, feelevel) {
        var number, ethnodeserver;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                number = Module.TRANSACTION_UNITS_MIN;
                _context7.next = 3;
                return this._getCurrencyEthNodeServer(session, currency);

              case 3:
                ethnodeserver = _context7.sent;
                if (ethnodeserver && ethnodeserver.transaction_units_min) number = parseInt(ethnodeserver.transaction_units_min.toString());
                return _context7.abrupt("return", number * (feelevel && feelevel.transaction_units_min_multiplier ? parseInt(feelevel.transaction_units_min_multiplier) : 1));

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function _getTransactionUnitsThreshold(_x19, _x20, _x21) {
        return _getTransactionUnitsThreshold2.apply(this, arguments);
      }

      return _getTransactionUnitsThreshold;
    }()
  }, {
    key: "_getTransactionCreditsAsync",
    value: function () {
      var _getTransactionCreditsAsync2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(session, currency, transactionunits) {
        var global, transactioninfo, ethnodemodule, walletmodule, weiamount, avg_transaction, credits_decimal, credits;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                global = this.global;
                transactioninfo = {};
                _context8.next = 4;
                return this._getAverageTransactionFee(session, currency);

              case 4:
                transactioninfo.avg_transaction_fee = _context8.sent;
                _context8.next = 7;
                return this._getTransactionUnitsThreshold(session, currency);

              case 7:
                transactioninfo.units_threshold = _context8.sent;
                ethnodemodule = global.getModuleObject('ethnode');
                walletmodule = global.getModuleObject('wallet');
                weiamount = ethnodemodule.getWeiFromEther(transactioninfo.avg_transaction_fee);
                _context8.next = 13;
                return walletmodule.createDecimalAmountAsync(session, weiamount, 18);

              case 13:
                avg_transaction = _context8.sent;
                _context8.next = 16;
                return avg_transaction.multiply(transactionunits);

              case 16:
                credits_decimal = _context8.sent;
                _context8.next = 19;
                return credits_decimal.toInteger();

              case 19:
                credits = _context8.sent;
                return _context8.abrupt("return", credits);

              case 21:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function _getTransactionCreditsAsync(_x22, _x23, _x24) {
        return _getTransactionCreditsAsync2.apply(this, arguments);
      }

      return _getTransactionCreditsAsync;
    }()
  }, {
    key: "_getTransactionCredits",
    value: function () {
      var _getTransactionCredits2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(session, currency, transactionunits) {
        var global, ethnodemodule, avg_transaction_fee, ethnodeserver, transactioncredits, ethcredit;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                global = this.global;
                ethnodemodule = global.getModuleObject('ethnode');
                avg_transaction_fee = Module.AVG_TRANSACTION_FEE;
                _context9.next = 5;
                return this._getCurrencyEthNodeServer(session, currency);

              case 5:
                ethnodeserver = _context9.sent;
                if (ethnodeserver && ethnodeserver.avg_transaction_fee) avg_transaction_fee = parseFloat(ethnodeserver.avg_transaction_fee.toString());
                transactioncredits = transactionunits * (avg_transaction_fee > 0 ? avg_transaction_fee : Module.AVG_TRANSACTION_FEE);
                ethcredit = ethnodemodule.getEtherFromwei(transactioncredits);
                return _context9.abrupt("return", ethcredit);

              case 10:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function _getTransactionCredits(_x25, _x26, _x27) {
        return _getTransactionCredits2.apply(this, arguments);
      }

      return _getTransactionCredits;
    }()
  }, {
    key: "_getGasLimit",
    value: function () {
      var _getGasLimit2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(session, currency, feelevel) {
        var default_gas_limit, ethnodeserver;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                default_gas_limit = Module.DEFAULT_GAS_LIMIT;
                _context10.next = 3;
                return this._getCurrencyEthNodeServer(session, currency);

              case 3:
                ethnodeserver = _context10.sent;
                if (ethnodeserver && ethnodeserver.default_gas_limit) default_gas_limit = parseInt(ethnodeserver.default_gas_limit.toString());
                return _context10.abrupt("return", default_gas_limit * (feelevel && feelevel.default_gas_limit_multiplier ? parseInt(feelevel.default_gas_limit_multiplier) : 1));

              case 6:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function _getGasLimit(_x28, _x29, _x30) {
        return _getGasLimit2.apply(this, arguments);
      }

      return _getGasLimit;
    }()
  }, {
    key: "_getGasPrice",
    value: function () {
      var _getGasPrice2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(session, currency, feelevel) {
        var default_gas_price, ethnodeserver;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                default_gas_price = Module.DEFAULT_GAS_PRICE;
                _context11.next = 3;
                return this._getCurrencyEthNodeServer(session, currency);

              case 3:
                ethnodeserver = _context11.sent;
                if (ethnodeserver && ethnodeserver.default_gas_price) default_gas_price = parseInt(ethnodeserver.default_gas_price.toString());
                return _context11.abrupt("return", default_gas_price * (feelevel && feelevel.default_gas_price_multiplier ? parseInt(feelevel.default_gas_price_multiplier) : 1));

              case 6:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function _getGasPrice(_x31, _x32, _x33) {
        return _getGasPrice2.apply(this, arguments);
      }

      return _getGasPrice;
    }()
  }, {
    key: "_getGasUnit",
    value: function () {
      var _getGasUnit2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(session, currency) {
        var default_gas_unit, ethnodeserver;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                default_gas_unit = Module.DEFAULT_GAS_UNIT;
                _context12.next = 3;
                return this._getCurrencyEthNodeServer(session, currency);

              case 3:
                ethnodeserver = _context12.sent;
                if (ethnodeserver && ethnodeserver.gas_unit) default_gas_unit = parseInt(ethnodeserver.gas_unit.toString());
                return _context12.abrupt("return", default_gas_unit);

              case 6:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function _getGasUnit(_x34, _x35) {
        return _getGasUnit2.apply(this, arguments);
      }

      return _getGasUnit;
    }()
  }, {
    key: "_getUnitsFromCredits",
    value: function () {
      var _getUnitsFromCredits2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(session, currency, credits) {
        var units;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this._getTransactionUnits(session, currency, credits);

              case 2:
                units = _context13.sent;
                return _context13.abrupt("return", units);

              case 4:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function _getUnitsFromCredits(_x36, _x37, _x38) {
        return _getUnitsFromCredits2.apply(this, arguments);
      }

      return _getUnitsFromCredits;
    }()
  }, {
    key: "_createCurrencyAmount",
    value: function () {
      var _createCurrencyAmount2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(session, currency, position) {
        var global, _apicurrencies;

        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                global = this.global;
                _apicurrencies = this._getCurrenciesAPI();
                return _context14.abrupt("return", _apicurrencies.createCurrencyAmount(session, currency, position));

              case 3:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function _createCurrencyAmount(_x39, _x40, _x41) {
        return _createCurrencyAmount2.apply(this, arguments);
      }

      return _createCurrencyAmount;
    }()
  }, {
    key: "_createDecimalAmount",
    value: function () {
      var _createDecimalAmount2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(session, amount, decimals) {
        var global, _apicurrencies;

        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                global = this.global;
                _apicurrencies = this._getCurrenciesAPI();
                return _context15.abrupt("return", _apicurrencies.createDecimalAmount(session, amount, decimals));

              case 3:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function _createDecimalAmount(_x42, _x43, _x44) {
        return _createDecimalAmount2.apply(this, arguments);
      }

      return _createDecimalAmount;
    }()
  }, {
    key: "transferCurrencyAmount",
    value: function () {
      var _transferCurrencyAmount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(sessionuuid, walletuuid, cardfromuuid, cardtouuid, currencyuuid, currencyamount) {
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
            _args16 = arguments;

        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                feelevel = _args16.length > 6 && _args16[6] !== undefined ? _args16[6] : null;
                global = this.global;

                if (sessionuuid) {
                  _context16.next = 4;
                  break;
                }

                return _context16.abrupt("return", Promise.reject('session uuid is undefined'));

              case 4:
                if (walletuuid) {
                  _context16.next = 6;
                  break;
                }

                return _context16.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 6:
                if (currencyuuid) {
                  _context16.next = 8;
                  break;
                }

                return _context16.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 8:
                if (cardfromuuid) {
                  _context16.next = 10;
                  break;
                }

                return _context16.abrupt("return", Promise.reject('from card uuid is undefined'));

              case 10:
                if (cardtouuid) {
                  _context16.next = 12;
                  break;
                }

                return _context16.abrupt("return", Promise.reject('to card uuid is undefined'));

              case 12:
                CurrencyAmountClass = global.getModuleClass('currencies', 'CurrencyAmount');

                if (!(currencyamount instanceof CurrencyAmountClass !== true)) {
                  _context16.next = 15;
                  break;
                }

                return _context16.abrupt("return", Promise.reject('wrong currency amount type'));

              case 15:
                _context16.next = 17;
                return currencyamount.toString();

              case 17:
                amount = _context16.sent;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                _apicontrollers = this._getClientAPI();
                _context16.next = 22;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 22:
                session = _context16.sent;

                if (session) {
                  _context16.next = 25;
                  break;
                }

                return _context16.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 25:
                _context16.next = 27;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 27:
                currency = _context16.sent;

                if (currency) {
                  _context16.next = 30;
                  break;
                }

                return _context16.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 30:
                _context16.next = 32;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 32:
                wallet = _context16.sent;

                if (wallet) {
                  _context16.next = 35;
                  break;
                }

                return _context16.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 35:
                _context16.next = 37;
                return wallet.getCardFromUUID(cardfromuuid);

              case 37:
                fromcard = _context16.sent;

                if (fromcard) {
                  _context16.next = 40;
                  break;
                }

                return _context16.abrupt("return", Promise.reject('could not find card ' + cardfromuuid));

              case 40:
                _context16.next = 42;
                return wallet.getCardFromUUID(cardtouuid);

              case 42:
                tocard = _context16.sent;

                if (tocard) {
                  _context16.next = 45;
                  break;
                }

                return _context16.abrupt("return", Promise.reject('could not find card ' + cardtouuid));

              case 45:
                fromaccount = fromcard._getSessionAccountObject();

                if (fromaccount) {
                  _context16.next = 48;
                  break;
                }

                return _context16.abrupt("return", Promise.reject('card has no private key ' + cardfromuuid));

              case 48:
                _context16.next = 50;
                return this._getMonitoredCardSession(session, wallet, fromcard);

              case 50:
                cardsession = _context16.sent;
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

                _context16.next = 57;
                return this._getCurrencyWeb3ProviderUrl(cardsession, currency);

              case 57:
                providerurl = _context16.sent;
                senderprivatekey = fromaccount.getPrivateKey();
                recipientaddress = toaddress;
                _context16.next = 62;
                return _apicontrollers.createSchemeFee(from_card_scheme, feelevel);

              case 62:
                fee = _context16.sent;
                _context16.next = 65;
                return _apicontrollers.sendERC20Tokens(cardsession, providerurl, tokenaddress, senderprivatekey, recipientaddress, tokenamount, fee)["catch"](function (err) {
                  console.log('error in transferCurrencyAmount: ' + err);
                });

              case 65:
                txhash = _context16.sent;

                if (txhash) {
                  _context16.next = 68;
                  break;
                }

                return _context16.abrupt("return", Promise.reject('could not send currency tokens'));

              case 68:
                return _context16.abrupt("return", txhash);

              case 69:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function transferCurrencyAmount(_x45, _x46, _x47, _x48, _x49, _x50) {
        return _transferCurrencyAmount.apply(this, arguments);
      }

      return transferCurrencyAmount;
    }()
  }, {
    key: "_getCurrencyProvider",
    value: function () {
      var _getCurrencyProvider2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(session, currency) {
        var global, currenciesmodule;
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                if (session) {
                  _context17.next = 2;
                  break;
                }

                return _context17.abrupt("return", Promise.reject('session is undefined'));

              case 2:
                if (currency) {
                  _context17.next = 4;
                  break;
                }

                return _context17.abrupt("return", Promise.reject('currency is undefined'));

              case 4:
                global = this.global;
                currenciesmodule = global.getModuleObject('currencies');
                return _context17.abrupt("return", currenciesmodule.getCurrencyProvider(session, currency.uuid));

              case 7:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function _getCurrencyProvider(_x51, _x52) {
        return _getCurrencyProvider2.apply(this, arguments);
      }

      return _getCurrencyProvider;
    }()
  }, {
    key: "_getCurrencyOps",
    value: function () {
      var _getCurrencyOps2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(session, currency) {
        var currency_provider;
        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                if (session) {
                  _context18.next = 2;
                  break;
                }

                return _context18.abrupt("return", Promise.reject('session is undefined'));

              case 2:
                if (currency) {
                  _context18.next = 4;
                  break;
                }

                return _context18.abrupt("return", Promise.reject('currency is undefined'));

              case 4:
                _context18.next = 6;
                return this._getCurrencyProvider(session, currency);

              case 6:
                currency_provider = _context18.sent;

                if (!currency_provider) {
                  _context18.next = 11;
                  break;
                }

                return _context18.abrupt("return", currency_provider.getOps());

              case 11:
                return _context18.abrupt("return", {
                  canpay: false
                });

              case 12:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function _getCurrencyOps(_x53, _x54) {
        return _getCurrencyOps2.apply(this, arguments);
      }

      return _getCurrencyOps;
    }()
  }, {
    key: "_getCurrencyScheme",
    value: function () {
      var _getCurrencyScheme2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(session, currency) {
        var global, currenciesmodule;
        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                global = this.global;
                currenciesmodule = global.getModuleObject('currencies');
                return _context19.abrupt("return", currenciesmodule.getCurrencyScheme(session, currency));

              case 3:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function _getCurrencyScheme(_x55, _x56) {
        return _getCurrencyScheme2.apply(this, arguments);
      }

      return _getCurrencyScheme;
    }()
  }, {
    key: "_getCurrencyEthNodeServer",
    value: function () {
      var _getCurrencyEthNodeServer2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(session, currency) {
        var global, currenciesmodule;
        return _regeneratorRuntime().wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                global = this.global;
                currenciesmodule = global.getModuleObject('ethnode-currencies');
                return _context20.abrupt("return", currenciesmodule.getCurrencyEthNodeServer(session, currency));

              case 3:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function _getCurrencyEthNodeServer(_x57, _x58) {
        return _getCurrencyEthNodeServer2.apply(this, arguments);
      }

      return _getCurrencyEthNodeServer;
    }()
  }, {
    key: "_getCurrencyWeb3ProviderUrl",
    value: function () {
      var _getCurrencyWeb3ProviderUrl2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(session, currency) {
        var global, currenciesmodule;
        return _regeneratorRuntime().wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                global = this.global;
                currenciesmodule = global.getModuleObject('ethnode-currencies');
                return _context21.abrupt("return", currenciesmodule.getCurrencyWeb3ProviderUrl(session, currency));

              case 3:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function _getCurrencyWeb3ProviderUrl(_x59, _x60) {
        return _getCurrencyWeb3ProviderUrl2.apply(this, arguments);
      }

      return _getCurrencyWeb3ProviderUrl;
    }()
  }, {
    key: "getCurrencyInfo",
    value: function () {
      var _getCurrencyInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(sessionuuid, walletuuid, currencyuuid) {
        var global, _apicontrollers, session, currency, currencyinfo;

        return _regeneratorRuntime().wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                if (sessionuuid) {
                  _context22.next = 2;
                  break;
                }

                return _context22.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (currencyuuid) {
                  _context22.next = 4;
                  break;
                }

                return _context22.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 4:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context22.next = 8;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 8:
                session = _context22.sent;

                if (session) {
                  _context22.next = 11;
                  break;
                }

                return _context22.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 11:
                _context22.next = 13;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 13:
                currency = _context22.sent;

                if (currency) {
                  _context22.next = 16;
                  break;
                }

                return _context22.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 16:
                currencyinfo = {};
                _context22.next = 19;
                return this._getCurrencyWeb3ProviderUrl(session, currency);

              case 19:
                currencyinfo.web3_provider_url = _context22.sent;
                return _context22.abrupt("return", currencyinfo);

              case 21:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function getCurrencyInfo(_x61, _x62, _x63) {
        return _getCurrencyInfo.apply(this, arguments);
      }

      return getCurrencyInfo;
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
      var _findCurrencyFromWeb3ProviderUrl2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(sessionuuid, web3providerurl) {
        var global, _apicontrollers, session, currencies, i, currency, scheme;

        return _regeneratorRuntime().wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                // we retun the first one, it is unsafe and 
                // direct use of currencyuuidis recommended
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context23.next = 4;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 4:
                session = _context23.sent;
                _context23.next = 7;
                return this.getCurrencies(sessionuuid);

              case 7:
                currencies = _context23.sent;
                i = 0;

              case 9:
                if (!(i < currencies.length)) {
                  _context23.next = 28;
                  break;
                }

                currency = currencies[i];

                if (!currency.web3providerurl) {
                  _context23.next = 16;
                  break;
                }

                if (!this._compareUrl(currency.web3providerurl, web3providerurl)) {
                  _context23.next = 14;
                  break;
                }

                return _context23.abrupt("return", currency);

              case 14:
                _context23.next = 25;
                break;

              case 16:
                if (!currency.scheme_uuid) {
                  _context23.next = 24;
                  break;
                }

                _context23.next = 19;
                return _apicontrollers.getSchemeFromUUID(session, currency.scheme_uuid);

              case 19:
                scheme = _context23.sent;

                if (!(scheme && scheme.getWeb3ProviderUrl() == web3providerurl)) {
                  _context23.next = 22;
                  break;
                }

                return _context23.abrupt("return", currency);

              case 22:
                _context23.next = 25;
                break;

              case 24:
                console.log('currency is badly configured ' + currency.uuid);

              case 25:
                i++;
                _context23.next = 9;
                break;

              case 28:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function _findCurrencyFromWeb3ProviderUrl(_x64, _x65) {
        return _findCurrencyFromWeb3ProviderUrl2.apply(this, arguments);
      }

      return _findCurrencyFromWeb3ProviderUrl;
    }()
  }, {
    key: "_getPretradeScheme",
    value: function () {
      var _getPretradeScheme2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(session, currency) {
        var global, _apicontrollers, sessionuuid, pretradeschemeuuid, scheme, clientmodule, builtin_local_schemes, prestradescheme;

        return _regeneratorRuntime().wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                if (session) {
                  _context24.next = 2;
                  break;
                }

                return _context24.abrupt("return", Promise.reject('session is undefined'));

              case 2:
                if (currency) {
                  _context24.next = 4;
                  break;
                }

                return _context24.abrupt("return", Promise.reject('currency is undefined'));

              case 4:
                global = this.global;
                _apicontrollers = this._getClientAPI(); // we look if the currency has a pretrade scheme specified

                sessionuuid = session.getSessionUUID();
                pretradeschemeuuid = currency.pretrade_scheme_uuid ? currency.pretrade_scheme_uuid : null;

                if (pretradeschemeuuid) {
                  _context24.next = 10;
                  break;
                }

                return _context24.abrupt("return");

              case 10:
                _context24.next = 12;
                return _apicontrollers.getSchemeFromUUID(session, pretradeschemeuuid)["catch"](function (err) {});

              case 12:
                scheme = _context24.sent;

                if (!scheme) {
                  _context24.next = 15;
                  break;
                }

                return _context24.abrupt("return", scheme);

              case 15:
                // we return local scheme named firenze as a default, if we can find it
                clientmodule = global.getModuleObject('webclient');

                if (!clientmodule.getBuiltinLocalSchemes) {
                  _context24.next = 23;
                  break;
                }

                builtin_local_schemes = clientmodule.getBuiltinLocalSchemes();
                prestradescheme = builtin_local_schemes.firenze;

                if (!prestradescheme) {
                  _context24.next = 23;
                  break;
                }

                _context24.next = 22;
                return _apicontrollers.getSchemeFromUUID(session, prestradescheme.uuid);

              case 22:
                scheme = _context24.sent;

              case 23:
                return _context24.abrupt("return", scheme);

              case 24:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function _getPretradeScheme(_x66, _x67) {
        return _getPretradeScheme2.apply(this, arguments);
      }

      return _getPretradeScheme;
    }()
  }, {
    key: "_filterCurrencies",
    value: function () {
      var _filterCurrencies2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(session, currencies, walletuuid) {
        var _currencies, i, _apicontrollers, wallet, walletschemeuuid, array, currency, currencyscheme, currencyschemeuuid;

        return _regeneratorRuntime().wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                _currencies = [];

                for (i = 0; i < (currencies ? currencies.length : 0); i++) {
                  _currencies.push(currencies[i]);
                }

                if (!walletuuid) {
                  _context25.next = 23;
                  break;
                }

                _apicontrollers = this._getClientAPI();
                _context25.next = 6;
                return _apicontrollers.getWalletFromUUID(session, walletuuid)["catch"](function (err) {});

              case 6:
                wallet = _context25.sent;

                if (!wallet) {
                  _context25.next = 23;
                  break;
                }

                walletschemeuuid = wallet.getSchemeUUID();
                array = [];
                i = 0;

              case 11:
                if (!(i < (currencies ? currencies.length : 0))) {
                  _context25.next = 22;
                  break;
                }

                currency = currencies[i]; // if currency has a scheme, check if it is remote and it matches the wallet

                _context25.next = 15;
                return this._getCurrencyScheme(session, currency)["catch"](function (err) {});

              case 15:
                currencyscheme = _context25.sent;

                if (currencyscheme) {
                  _context25.next = 18;
                  break;
                }

                return _context25.abrupt("continue", 19);

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
                _context25.next = 11;
                break;

              case 22:
                _currencies = array;

              case 23:
                return _context25.abrupt("return", _currencies);

              case 24:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function _filterCurrencies(_x68, _x69, _x70) {
        return _filterCurrencies2.apply(this, arguments);
      }

      return _filterCurrencies;
    }()
  }, {
    key: "readLocalCurrencies",
    value: function () {
      var _readLocalCurrencies = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(sessionuuid) {
        var global, _apicontrollers, session, _apicurrencies;

        return _regeneratorRuntime().wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                if (sessionuuid) {
                  _context26.next = 2;
                  break;
                }

                return _context26.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context26.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context26.sent;

                if (session) {
                  _context26.next = 9;
                  break;
                }

                return _context26.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                _apicurrencies = this._getCurrenciesAPI();
                return _context26.abrupt("return", _apicurrencies.readLocalCurrencies(session));

              case 11:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function readLocalCurrencies(_x71) {
        return _readLocalCurrencies.apply(this, arguments);
      }

      return readLocalCurrencies;
    }()
  }, {
    key: "saveLocalCurrencies",
    value: function () {
      var _saveLocalCurrencies = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(sessionuuid, currencies) {
        var global, _apicontrollers, session, _apicurrencies;

        return _regeneratorRuntime().wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                if (sessionuuid) {
                  _context27.next = 2;
                  break;
                }

                return _context27.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context27.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context27.sent;

                if (session) {
                  _context27.next = 9;
                  break;
                }

                return _context27.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                _apicurrencies = this._getCurrenciesAPI();
                return _context27.abrupt("return", _apicurrencies.saveLocalCurrencies(session, currencies));

              case 11:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function saveLocalCurrencies(_x72, _x73) {
        return _saveLocalCurrencies.apply(this, arguments);
      }

      return saveLocalCurrencies;
    }()
  }, {
    key: "saveLocalCurrency",
    value: function () {
      var _saveLocalCurrency = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(sessionuuid, currency) {
        var global, _apicontrollers, session, _apicurrencies;

        return _regeneratorRuntime().wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                if (sessionuuid) {
                  _context28.next = 2;
                  break;
                }

                return _context28.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context28.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context28.sent;

                if (session) {
                  _context28.next = 9;
                  break;
                }

                return _context28.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                _apicurrencies = this._getCurrenciesAPI();
                return _context28.abrupt("return", _apicurrencies.saveLocalCurrency(session, currency));

              case 11:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      function saveLocalCurrency(_x74, _x75) {
        return _saveLocalCurrency.apply(this, arguments);
      }

      return saveLocalCurrency;
    }()
  }, {
    key: "getCurrencies",
    value: function () {
      var _getCurrencies = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29(sessionuuid, walletuuid) {
        var global, _apicontrollers, session, currenciesmodule, current_currencies_timestamp, currencies, currencies_timestamp, _currencies, array, i, currency_pretrade_scheme, currency_pretrade_scheme_json, currency_pretrade_ethnode_conf;

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
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context29.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context29.sent;

                if (session) {
                  _context29.next = 9;
                  break;
                }

                return _context29.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                currenciesmodule = global.getModuleObject('currencies');
                current_currencies_timestamp = currenciesmodule.getCurrenciesTimeStamp(); // look if already stored in the session variables

                currencies = session.getSessionVariable('currencies');

                if (!currencies) {
                  _context29.next = 19;
                  break;
                }

                // verify version is up-to-date
                currencies_timestamp = session.getSessionVariable('currencies-timestamp');

                if (!(currencies_timestamp === current_currencies_timestamp)) {
                  _context29.next = 19;
                  break;
                }

                _context29.next = 17;
                return this._filterCurrencies(session, currencies, walletuuid);

              case 17:
                _currencies = _context29.sent;
                return _context29.abrupt("return", _currencies);

              case 19:
                // otherwise retrieve the list of currencies
                global = this.global;
                currencies = currenciesmodule.getCurrencies();
                array = Object.values(currencies); // fill complementary info

                i = 0;

              case 23:
                if (!(i < (array ? array.length : 0))) {
                  _context29.next = 37;
                  break;
                }

                _context29.next = 26;
                return this._getCurrencyOps(session, array[i])["catch"](function (err) {
                  console.log(err);
                });

              case 26:
                array[i].ops = _context29.sent;
                _context29.next = 29;
                return this._getPretradeScheme(session, array[i])["catch"](function (e) {});

              case 29:
                currency_pretrade_scheme = _context29.sent;
                currency_pretrade_scheme_json = currency_pretrade_scheme ? currency_pretrade_scheme.getJsonConfig() : null;
                currency_pretrade_ethnode_conf = currency_pretrade_scheme_json && currency_pretrade_scheme_json.ethnodeserver ? currency_pretrade_scheme_json.ethnodeserver : null;
                array[i].pretrade_web3_provider_url = currency_pretrade_ethnode_conf ? currency_pretrade_ethnode_conf.web3_provider_url : null;
                array[i].pretrade_explorer_url = currency_pretrade_ethnode_conf ? currency_pretrade_ethnode_conf.explorerurl : null;

              case 34:
                i++;
                _context29.next = 23;
                break;

              case 37:
                // store in session
                session.setSessionVariable('currencies', array);
                session.setSessionVariable('currencies-timestamp', current_currencies_timestamp); // send back a copy

                _context29.next = 41;
                return this._filterCurrencies(session, array, walletuuid);

              case 41:
                _currencies = _context29.sent;
                return _context29.abrupt("return", _currencies);

              case 43:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));

      function getCurrencies(_x76, _x77) {
        return _getCurrencies.apply(this, arguments);
      }

      return getCurrencies;
    }()
  }, {
    key: "getCurrencyFromUUID",
    value: function () {
      var _getCurrencyFromUUID = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee30(sessionuuid, currencyuuid) {
        var currencies, i;
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
                _context30.next = 4;
                return this.getCurrencies(sessionuuid);

              case 4:
                currencies = _context30.sent;
                i = 0;

              case 6:
                if (!(i < currencies.length)) {
                  _context30.next = 12;
                  break;
                }

                if (!(currencies[i].uuid === currencyuuid)) {
                  _context30.next = 9;
                  break;
                }

                return _context30.abrupt("return", currencies[i]);

              case 9:
                i++;
                _context30.next = 6;
                break;

              case 12:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));

      function getCurrencyFromUUID(_x78, _x79) {
        return _getCurrencyFromUUID.apply(this, arguments);
      }

      return getCurrencyFromUUID;
    }()
  }, {
    key: "getAllCurrenciesWithAddress",
    value: function () {
      var _getAllCurrenciesWithAddress = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee31(sessionuuid, walletuuid, address) {
        var currencies, arr, tokenaddress, i, _currencyaddress;

        return _regeneratorRuntime().wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                _context31.next = 2;
                return this.getCurrencies(sessionuuid, walletuuid);

              case 2:
                currencies = _context31.sent;
                arr = [];
                tokenaddress = address ? address.trim().toLowerCase() : null;

                for (i = 0; i < (currencies ? currencies.length : 0); i++) {
                  _currencyaddress = currencies[i].address ? currencies[i].address.trim().toLowerCase() : null;
                  if (_currencyaddress == tokenaddress) arr.push(currencies[i]);
                }

                return _context31.abrupt("return", arr);

              case 7:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));

      function getAllCurrenciesWithAddress(_x80, _x81, _x82) {
        return _getAllCurrenciesWithAddress.apply(this, arguments);
      }

      return getAllCurrenciesWithAddress;
    }()
  }, {
    key: "synchronizeCurrency",
    value: function () {
      var _synchronizeCurrency = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee32(sessionuuid, walletuuid, currency) {
        var global, _apicontrollers, session, wallet, currenciesmodule, currencyscheme, childsession, erc20token_contract;

        return _regeneratorRuntime().wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                if (currency) {
                  _context32.next = 2;
                  break;
                }

                return _context32.abrupt("return", Promise.reject('currency is undefined'));

              case 2:
                if (currency.address) {
                  _context32.next = 4;
                  break;
                }

                return _context32.abrupt("return", Promise.reject('currency has not token address'));

              case 4:
                if (sessionuuid) {
                  _context32.next = 6;
                  break;
                }

                return _context32.abrupt("return", Promise.reject('session uuid is undefined'));

              case 6:
                if (walletuuid) {
                  _context32.next = 8;
                  break;
                }

                return _context32.abrupt("return", Promise.reject('wallet uuid is undefined'));

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
                currenciesmodule = global.getModuleObject('currencies');
                _context32.next = 23;
                return currenciesmodule.getCurrencyScheme(session, currency);

              case 23:
                currencyscheme = _context32.sent;

                if (currencyscheme) {
                  _context32.next = 26;
                  break;
                }

                return _context32.abrupt("return", Promise.reject('could not find scheme of currency ' + currency.uuid));

              case 26:
                _context32.next = 28;
                return this._getMonitoredCurrencySession(session, wallet, currency);

              case 28:
                childsession = _context32.sent;
                _context32.next = 31;
                return _apicontrollers.importERC20Token(childsession, currency.address);

              case 31:
                erc20token_contract = _context32.sent;
                _context32.next = 34;
                return erc20token_contract.getChainName();

              case 34:
                currency.name = _context32.sent;
                _context32.next = 37;
                return erc20token_contract.getChainSymbol();

              case 37:
                currency.symbol = _context32.sent;
                _context32.next = 40;
                return erc20token_contract.getChainDecimals();

              case 40:
                currency.decimals = _context32.sent;
                _context32.next = 43;
                return currenciesmodule.saveLocalCurrency(session, currency);

              case 43:
                return _context32.abrupt("return", currency);

              case 44:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));

      function synchronizeCurrency(_x83, _x84, _x85) {
        return _synchronizeCurrency.apply(this, arguments);
      }

      return synchronizeCurrency;
    }()
  }, {
    key: "setCurrencyDescription",
    value: function () {
      var _setCurrencyDescription = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee33(sessionuuid, walletuuid, currencyuuid, description) {
        var global, _apicontrollers, session, wallet, currency, currenciesmodule;

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
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context33.next = 10;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 10:
                session = _context33.sent;

                if (session) {
                  _context33.next = 13;
                  break;
                }

                return _context33.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 13:
                _context33.next = 15;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 15:
                wallet = _context33.sent;

                if (wallet) {
                  _context33.next = 18;
                  break;
                }

                return _context33.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 18:
                _context33.next = 20;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 20:
                currency = _context33.sent;

                if (currency) {
                  _context33.next = 23;
                  break;
                }

                return _context33.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 23:
                currenciesmodule = global.getModuleObject('currencies'); // set description

                currency.description = description; // then save currency

                _context33.next = 27;
                return currenciesmodule.saveLocalCurrency(session, currency);

              case 27:
                return _context33.abrupt("return", currency);

              case 28:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));

      function setCurrencyDescription(_x86, _x87, _x88, _x89) {
        return _setCurrencyDescription.apply(this, arguments);
      }

      return setCurrencyDescription;
    }()
  }, {
    key: "getCurrenciesFromAddress",
    value: function () {
      var _getCurrenciesFromAddress = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee34(sessionuuid, walletuuid, schemeuuid, address) {
        var currencies, arr, tokenaddress, i, _currencyaddress;

        return _regeneratorRuntime().wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                _context34.next = 2;
                return this.getCurrencies(sessionuuid, walletuuid);

              case 2:
                currencies = _context34.sent;
                arr = [];
                tokenaddress = address ? address.trim().toLowerCase() : null;

                for (i = 0; i < (currencies ? currencies.length : 0); i++) {
                  _currencyaddress = currencies[i].address ? currencies[i].address.trim().toLowerCase() : null;
                  if (currencies[i].scheme_uuid == schemeuuid && _currencyaddress == tokenaddress) arr.push(currencies[i]);
                }

                return _context34.abrupt("return", arr);

              case 7:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));

      function getCurrenciesFromAddress(_x90, _x91, _x92, _x93) {
        return _getCurrenciesFromAddress.apply(this, arguments);
      }

      return getCurrenciesFromAddress;
    }()
  }, {
    key: "getTokenCardList",
    value: function () {
      var _getTokenCardList = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee35(sessionuuid, walletuuid, web3providerurl, tokenaddress) {
        var currencies, _web3providerurl, arr, i, _currency, _currency_scheme, _web3_provider_url, cards, _currency_cards;

        return _regeneratorRuntime().wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                if (!(!web3providerurl || !tokenaddress)) {
                  _context35.next = 2;
                  break;
                }

                return _context35.abrupt("return", []);

              case 2:
                _context35.next = 4;
                return this.getCurrencies(sessionuuid, walletuuid);

              case 4:
                currencies = _context35.sent;
                _web3providerurl = web3providerurl.endsWith('/') ? web3providerurl.substring(0, web3providerurl.length - 1) : web3providerurl; // list of currencies

                arr = [];
                i = 0;

              case 8:
                if (!(i < (currencies ? currencies.length : 0))) {
                  _context35.next = 19;
                  break;
                }

                _currency = currencies[i];
                _context35.next = 12;
                return this.getCurrencyScheme(sessionuuid, walletuuid, _currency.uuid)["catch"](function (err) {});

              case 12:
                _currency_scheme = _context35.sent;
                _web3_provider_url = _currency_scheme && _currency_scheme.network && _currency_scheme.network.ethnodeserver ? _currency_scheme.network.ethnodeserver.web3_provider_url : null;
                _web3_provider_url = _web3_provider_url && _web3_provider_url.endsWith('/') ? _web3_provider_url.substring(0, _web3_provider_url.length - 1) : _web3_provider_url;
                if (_web3_provider_url && this._compareUrl(_web3_provider_url, _web3providerurl) && _currency.address == tokenaddress) arr.push(currencies[i]);

              case 16:
                i++;
                _context35.next = 8;
                break;

              case 19:
                // get list of all cards
                cards = [];
                i = 0;

              case 21:
                if (!(i < arr.length)) {
                  _context35.next = 30;
                  break;
                }

                _currency = arr[i];
                _context35.next = 25;
                return this.getCurrencyCardList(sessionuuid, walletuuid, _currency.uuid)["catch"](function (err) {});

              case 25:
                _currency_cards = _context35.sent;
                if (_currency_cards) cards = cards.concat(_currency_cards);

              case 27:
                i++;
                _context35.next = 21;
                break;

              case 30:
                return _context35.abrupt("return", cards);

              case 31:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, this);
      }));

      function getTokenCardList(_x94, _x95, _x96, _x97) {
        return _getTokenCardList.apply(this, arguments);
      }

      return getTokenCardList;
    }()
  }, {
    key: "_getCurrencyCardList",
    value: function () {
      var _getCurrencyCardList2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee36(session, wallet, currency) {
        var global, mvcclientwalletmodule, cards, array, scheme, schemeuuid, currencyuuid, i, _crdschemeuuid, xtradata, _crdcurrencyuuid;

        return _regeneratorRuntime().wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                if (session) {
                  _context36.next = 2;
                  break;
                }

                return _context36.abrupt("return", Promise.reject('session is undefined'));

              case 2:
                if (wallet) {
                  _context36.next = 4;
                  break;
                }

                return _context36.abrupt("return", Promise.reject('wallet is undefined'));

              case 4:
                if (currency) {
                  _context36.next = 6;
                  break;
                }

                return _context36.abrupt("return", Promise.reject('currency is undefined'));

              case 6:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                _context36.next = 10;
                return wallet.getCardList(true);

              case 10:
                cards = _context36.sent;
                array = [];
                _context36.next = 14;
                return this._getCurrencyScheme(session, currency)["catch"](function (err) {});

              case 14:
                scheme = _context36.sent;

                if (scheme) {
                  _context36.next = 17;
                  break;
                }

                return _context36.abrupt("return", Promise.reject('could not find scheme for currency ' + currency.uuid));

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

                return _context36.abrupt("return", array);

              case 21:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this);
      }));

      function _getCurrencyCardList(_x98, _x99, _x100) {
        return _getCurrencyCardList2.apply(this, arguments);
      }

      return _getCurrencyCardList;
    }()
  }, {
    key: "_getCurrencyCard",
    value: function () {
      var _getCurrencyCard2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee37(session, wallet, currency) {
        var cards, card, i, crd, xtra;
        return _regeneratorRuntime().wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                if (session) {
                  _context37.next = 2;
                  break;
                }

                return _context37.abrupt("return", Promise.reject('session is undefined'));

              case 2:
                if (wallet) {
                  _context37.next = 4;
                  break;
                }

                return _context37.abrupt("return", Promise.reject('wallet is undefined'));

              case 4:
                if (currency) {
                  _context37.next = 6;
                  break;
                }

                return _context37.abrupt("return", Promise.reject('currency is undefined'));

              case 6:
                _context37.next = 8;
                return this._getCurrencyCardList(session, wallet, currency)["catch"](function (err) {});

              case 8:
                cards = _context37.sent;

                if (!(cards && cards.length)) {
                  _context37.next = 20;
                  break;
                }

                i = 0;

              case 11:
                if (!(i < cards.length)) {
                  _context37.next = 20;
                  break;
                }

                crd = cards[i];
                xtra = crd.getXtraData('myquote');

                if (!(xtra && xtra.maincard === true)) {
                  _context37.next = 17;
                  break;
                }

                card = crd;
                return _context37.abrupt("break", 20);

              case 17:
                i++;
                _context37.next = 11;
                break;

              case 20:
                return _context37.abrupt("return", card);

              case 21:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this);
      }));

      function _getCurrencyCard(_x101, _x102, _x103) {
        return _getCurrencyCard2.apply(this, arguments);
      }

      return _getCurrencyCard;
    }()
  }, {
    key: "getCurrencyScheme",
    value: function () {
      var _getCurrencyScheme3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee38(sessionuuid, walletuuid, currencyuuid) {
        var global, _apicontrollers, session, wallet, currency, currenciesmodule, scheme, mvcclienwallet, schemeinfo;

        return _regeneratorRuntime().wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                if (sessionuuid) {
                  _context38.next = 2;
                  break;
                }

                return _context38.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context38.next = 4;
                  break;
                }

                return _context38.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (currencyuuid) {
                  _context38.next = 6;
                  break;
                }

                return _context38.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 6:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context38.next = 10;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 10:
                session = _context38.sent;

                if (session) {
                  _context38.next = 13;
                  break;
                }

                return _context38.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 13:
                _context38.next = 15;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 15:
                wallet = _context38.sent;

                if (wallet) {
                  _context38.next = 18;
                  break;
                }

                return _context38.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 18:
                _context38.next = 20;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 20:
                currency = _context38.sent;

                if (currency) {
                  _context38.next = 23;
                  break;
                }

                return _context38.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 23:
                currenciesmodule = global.getModuleObject('currencies');
                _context38.next = 26;
                return currenciesmodule.getCurrencyScheme(session, currency);

              case 26:
                scheme = _context38.sent;
                mvcclienwallet = global.getModuleObject('mvc-client-wallet');
                schemeinfo = {
                  uuid: scheme.getSchemeUUID()
                };

                mvcclienwallet._fillSchemeInfoFromScheme(schemeinfo, scheme);

                return _context38.abrupt("return", schemeinfo);

              case 31:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38, this);
      }));

      function getCurrencyScheme(_x104, _x105, _x106) {
        return _getCurrencyScheme3.apply(this, arguments);
      }

      return getCurrencyScheme;
    }()
  }, {
    key: "_findCardCurrency",
    value: function () {
      var _findCardCurrency2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee39(session, wallet, card) {
        var xtradata, currency;
        return _regeneratorRuntime().wrap(function _callee39$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                xtradata = card.getXtraData('myquote');

                if (!(xtradata && xtradata.currencyuuid)) {
                  _context39.next = 6;
                  break;
                }

                _context39.next = 4;
                return this.getCurrencyFromUUID(session.getSessionUUID(), xtradata.currencyuuid);

              case 4:
                currency = _context39.sent;
                return _context39.abrupt("return", currency);

              case 6:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee39, this);
      }));

      function _findCardCurrency(_x107, _x108, _x109) {
        return _findCardCurrency2.apply(this, arguments);
      }

      return _findCardCurrency;
    }()
  }, {
    key: "findCardCurrency",
    value: function () {
      var _findCardCurrency3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee40(sessionuuid, walletuuid, carduuid) {
        var global, _apicontrollers, session, wallet, card;

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
                if (carduuid) {
                  _context40.next = 6;
                  break;
                }

                return _context40.abrupt("return", Promise.reject('card uuid is undefined'));

              case 6:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context40.next = 10;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 10:
                session = _context40.sent;

                if (session) {
                  _context40.next = 13;
                  break;
                }

                return _context40.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 13:
                _context40.next = 15;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 15:
                wallet = _context40.sent;

                if (wallet) {
                  _context40.next = 18;
                  break;
                }

                return _context40.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 18:
                _context40.next = 20;
                return wallet.getCardFromUUID(carduuid);

              case 20:
                card = _context40.sent;

                if (card) {
                  _context40.next = 23;
                  break;
                }

                return _context40.abrupt("return", Promise.reject('could not find card ' + carduuid));

              case 23:
                return _context40.abrupt("return", this._findCardCurrency(session, wallet, card));

              case 24:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40, this);
      }));

      function findCardCurrency(_x110, _x111, _x112) {
        return _findCardCurrency3.apply(this, arguments);
      }

      return findCardCurrency;
    }()
  }, {
    key: "getCurrencyCard",
    value: function () {
      var _getCurrencyCard3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee41(sessionuuid, walletuuid, currencyuuid) {
        var global, _apicontrollers, session, wallet, currency, card, mvcclientwalletmodule, cardinfo;

        return _regeneratorRuntime().wrap(function _callee41$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                if (sessionuuid) {
                  _context41.next = 2;
                  break;
                }

                return _context41.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context41.next = 4;
                  break;
                }

                return _context41.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (currencyuuid) {
                  _context41.next = 6;
                  break;
                }

                return _context41.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 6:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context41.next = 10;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 10:
                session = _context41.sent;

                if (session) {
                  _context41.next = 13;
                  break;
                }

                return _context41.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 13:
                _context41.next = 15;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 15:
                wallet = _context41.sent;

                if (wallet) {
                  _context41.next = 18;
                  break;
                }

                return _context41.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 18:
                _context41.next = 20;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 20:
                currency = _context41.sent;

                if (currency) {
                  _context41.next = 23;
                  break;
                }

                return _context41.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 23:
                _context41.next = 25;
                return this._getCurrencyCard(session, wallet, currency);

              case 25:
                card = _context41.sent;

                if (card) {
                  _context41.next = 28;
                  break;
                }

                return _context41.abrupt("return", Promise.reject('could not find currency card for wallet ' + walletuuid));

              case 28:
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                cardinfo = {
                  uuid: card.getCardUUID()
                };

                mvcclientwalletmodule._fillCardInfo(cardinfo, card);

                return _context41.abrupt("return", cardinfo);

              case 32:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee41, this);
      }));

      function getCurrencyCard(_x113, _x114, _x115) {
        return _getCurrencyCard3.apply(this, arguments);
      }

      return getCurrencyCard;
    }()
  }, {
    key: "setCurrencyCard",
    value: function () {
      var _setCurrencyCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee42(sessionuuid, walletuuid, currencyuuid, carduuid) {
        var global, _apicontrollers, session, wallet, currency, card, currencycards, i, currencycard, xtradata;

        return _regeneratorRuntime().wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                if (sessionuuid) {
                  _context42.next = 2;
                  break;
                }

                return _context42.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context42.next = 4;
                  break;
                }

                return _context42.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (currencyuuid) {
                  _context42.next = 6;
                  break;
                }

                return _context42.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 6:
                if (carduuid) {
                  _context42.next = 8;
                  break;
                }

                return _context42.abrupt("return", Promise.reject('card uuid is undefined'));

              case 8:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context42.next = 12;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 12:
                session = _context42.sent;

                if (session) {
                  _context42.next = 15;
                  break;
                }

                return _context42.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 15:
                _context42.next = 17;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 17:
                wallet = _context42.sent;

                if (wallet) {
                  _context42.next = 20;
                  break;
                }

                return _context42.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 20:
                _context42.next = 22;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 22:
                currency = _context42.sent;

                if (currency) {
                  _context42.next = 25;
                  break;
                }

                return _context42.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 25:
                _context42.next = 27;
                return wallet.getCardFromUUID(carduuid);

              case 27:
                card = _context42.sent;

                if (card) {
                  _context42.next = 30;
                  break;
                }

                return _context42.abrupt("return", Promise.reject('could not find card ' + carduuid));

              case 30:
                _context42.next = 32;
                return this._getCurrencyCardList(session, wallet, currency)["catch"](function (err) {});

              case 32:
                currencycards = _context42.sent;
                i = 0;

              case 34:
                if (!(i < (currencycards ? currencycards.length : 0))) {
                  _context42.next = 57;
                  break;
                }

                currencycard = currencycards[i];
                xtradata = currencycard.getXtraData('myquote');

                if (!(xtradata && xtradata.maincard === true)) {
                  _context42.next = 45;
                  break;
                }

                // remove flag
                xtradata.maincard = false;
                currencycard.putXtraData('myquote', xtradata);

                if (!currencycard.isLocked()) {
                  _context42.next = 43;
                  break;
                }

                _context42.next = 43;
                return currencycard.unlock();

              case 43:
                _context42.next = 45;
                return currencycard.save();

              case 45:
                if (!(currencycard.getCardUUID() === carduuid)) {
                  _context42.next = 54;
                  break;
                }

                xtradata = xtradata ? xtradata : {};
                xtradata.maincard = true;
                currencycard.putXtraData('myquote', xtradata);

                if (!currencycard.isLocked()) {
                  _context42.next = 52;
                  break;
                }

                _context42.next = 52;
                return currencycard.unlock();

              case 52:
                _context42.next = 54;
                return currencycard.save();

              case 54:
                i++;
                _context42.next = 34;
                break;

              case 57:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee42, this);
      }));

      function setCurrencyCard(_x116, _x117, _x118, _x119) {
        return _setCurrencyCard.apply(this, arguments);
      }

      return setCurrencyCard;
    }()
  }, {
    key: "createCurrencyCard",
    value: function () {
      var _createCurrencyCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee43(sessionuuid, walletuuid, currencyuuid, privatekey) {
        var currency, global, _apicontrollers, session, scheme, wallet, sessionaccount, card_address, sibling_cards, card, _xtradata, _former_currencyuuid, bInsert, i, sibling_card, _sibling_xtradata, _sibling_currencyuuid, _old_card, _old_xtradata, xtradata, bSave, currencycards, mvcclientwalletmodule, cardinfo;

        return _regeneratorRuntime().wrap(function _callee43$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                if (sessionuuid) {
                  _context43.next = 2;
                  break;
                }

                return _context43.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context43.next = 4;
                  break;
                }

                return _context43.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (currencyuuid) {
                  _context43.next = 6;
                  break;
                }

                return _context43.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 6:
                _context43.next = 8;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 8:
                currency = _context43.sent;

                if (currency) {
                  _context43.next = 11;
                  break;
                }

                return _context43.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 11:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context43.next = 15;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 15:
                session = _context43.sent;

                if (session) {
                  _context43.next = 18;
                  break;
                }

                return _context43.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 18:
                _context43.next = 20;
                return this._getCurrencyScheme(session, currency);

              case 20:
                scheme = _context43.sent;
                _context43.next = 23;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 23:
                wallet = _context43.sent;

                if (wallet) {
                  _context43.next = 26;
                  break;
                }

                return _context43.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 26:
                _context43.next = 28;
                return _apicontrollers.getSessionAccountFromPrivateKey(session, wallet, privatekey);

              case 28:
                sessionaccount = _context43.sent;
                card_address = sessionaccount.getAddress();
                _context43.next = 32;
                return wallet.getCardsWithAddress(card_address)["catch"](function (err) {});

              case 32:
                sibling_cards = _context43.sent;
                sibling_cards = sibling_cards ? sibling_cards : []; // create a wallet card
                //const card = await this._createWalletCard(session, wallet, scheme, privatekey); 

                _context43.next = 36;
                return _apicontrollers.createWalletCard(session, wallet, scheme, privatekey);

              case 36:
                card = _context43.sent;

                if (!(sibling_cards.length > 0)) {
                  _context43.next = 75;
                  break;
                }

                _context43.prev = 38;
                // we already had at least a card with same address
                // and createWalletCard returned us the first card
                _xtradata = card.getXtraData('myquote');
                _xtradata = _xtradata ? _xtradata : {};
                _former_currencyuuid = _xtradata.currencyuuid;

                if (!(_former_currencyuuid && _former_currencyuuid != currencyuuid)) {
                  _context43.next = 69;
                  break;
                }

                // we will overload the currency when saving
                // look if we have no other card for this currency
                // to re-add it if necessary
                bInsert = true;
                i = 1;

              case 45:
                if (!(i < sibling_cards.length)) {
                  _context43.next = 55;
                  break;
                }

                sibling_card = sibling_cards[i];
                _sibling_xtradata = sibling_card.getXtraData('myquote');
                _sibling_currencyuuid = _sibling_xtradata.currencyuuid;

                if (!(_sibling_currencyuuid == _former_currencyuuid)) {
                  _context43.next = 52;
                  break;
                }

                bInsert = false;
                return _context43.abrupt("break", 55);

              case 52:
                i++;
                _context43.next = 45;
                break;

              case 55:
                if (!(bInsert === true)) {
                  _context43.next = 69;
                  break;
                }

                _context43.next = 58;
                return wallet.cloneCard(card, scheme)["catch"](function (err) {});

              case 58:
                _old_card = _context43.sent;

                if (!_old_card) {
                  _context43.next = 69;
                  break;
                }

                if (!_old_card.isLocked()) {
                  _context43.next = 63;
                  break;
                }

                _context43.next = 63;
                return _old_card.unlock();

              case 63:
                _old_xtradata = Object.assign({}, _xtradata);
                xtradata = xtradata ? xtradata : {};
                _old_xtradata.currencyuuid = _former_currencyuuid;

                _old_card.putXtraData('myquote', _old_xtradata);

                _context43.next = 69;
                return _old_card.save();

              case 69:
                _context43.next = 74;
                break;

              case 71:
                _context43.prev = 71;
                _context43.t0 = _context43["catch"](38);
                console.log('could not re-insert pre-existing currency card: ' + card_address);

              case 74:
                ;

              case 75:
                if (card) {
                  _context43.next = 77;
                  break;
                }

                return _context43.abrupt("return", Promise.reject('could not create card'));

              case 77:
                if (!card.isLocked()) {
                  _context43.next = 80;
                  break;
                }

                _context43.next = 80;
                return card.unlock();

              case 80:
                // set it's associated to currencyuuid in XtraData
                xtradata = card.getXtraData('myquote');
                xtradata = xtradata ? xtradata : {};
                xtradata.currencyuuid = currencyuuid;
                card.putXtraData('myquote', xtradata); // save

                _context43.next = 86;
                return card.save();

              case 86:
                bSave = _context43.sent;

                if (bSave) {
                  _context43.next = 89;
                  break;
                }

                return _context43.abrupt("return", Promise.reject('could not save card'));

              case 89:
                _context43.next = 91;
                return this._getCurrencyCardList(session, wallet, currency)["catch"](function (err) {});

              case 91:
                currencycards = _context43.sent;

                if (!(!currencycards || currencycards.length == 1)) {
                  _context43.next = 95;
                  break;
                }

                _context43.next = 95;
                return this.setCurrencyCard(sessionuuid, walletuuid, currencyuuid, card.uuid);

              case 95:
                // return cardinfo
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                cardinfo = {};

                mvcclientwalletmodule._fillCardInfo(cardinfo, card);

                return _context43.abrupt("return", cardinfo);

              case 99:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee43, this, [[38, 71]]);
      }));

      function createCurrencyCard(_x120, _x121, _x122, _x123) {
        return _createCurrencyCard.apply(this, arguments);
      }

      return createCurrencyCard;
    }()
  }, {
    key: "makeCurrencyCard",
    value: function () {
      var _makeCurrencyCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee44(sessionuuid, walletuuid, currencyuuid, carduuid) {
        var global, _apicontrollers, session, wallet, currency, card, xtradata, bSave, currencycards, mvcclientwalletmodule, cardinfo;

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
                if (walletuuid) {
                  _context44.next = 4;
                  break;
                }

                return _context44.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (currencyuuid) {
                  _context44.next = 6;
                  break;
                }

                return _context44.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 6:
                if (carduuid) {
                  _context44.next = 8;
                  break;
                }

                return _context44.abrupt("return", Promise.reject('card uuid is undefined'));

              case 8:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context44.next = 12;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 12:
                session = _context44.sent;

                if (session) {
                  _context44.next = 15;
                  break;
                }

                return _context44.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 15:
                _context44.next = 17;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 17:
                wallet = _context44.sent;

                if (wallet) {
                  _context44.next = 20;
                  break;
                }

                return _context44.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 20:
                _context44.next = 22;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 22:
                currency = _context44.sent;

                if (currency) {
                  _context44.next = 25;
                  break;
                }

                return _context44.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 25:
                _context44.next = 27;
                return wallet.getCardFromUUID(carduuid);

              case 27:
                card = _context44.sent;

                if (card) {
                  _context44.next = 30;
                  break;
                }

                return _context44.abrupt("return", Promise.reject('could not find card ' + carduuid));

              case 30:
                if (!card.isLocked()) {
                  _context44.next = 33;
                  break;
                }

                _context44.next = 33;
                return card.unlock();

              case 33:
                // set it's associated to currencyuuid in XtraData
                xtradata = card.getXtraData('myquote');
                xtradata = xtradata ? xtradata : {};
                xtradata.currencyuuid = currencyuuid;
                card.putXtraData('myquote', xtradata); // save

                _context44.next = 39;
                return card.save();

              case 39:
                bSave = _context44.sent;

                if (bSave) {
                  _context44.next = 42;
                  break;
                }

                return _context44.abrupt("return", Promise.reject('could not save card'));

              case 42:
                _context44.next = 44;
                return this._getCurrencyCardList(session, wallet, currency)["catch"](function (err) {});

              case 44:
                currencycards = _context44.sent;

                if (!(!currencycards || currencycards.length == 1)) {
                  _context44.next = 48;
                  break;
                }

                _context44.next = 48;
                return this.setCurrencyCard(sessionuuid, walletuuid, currencyuuid, card.uuid);

              case 48:
                // return cardinfo
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                cardinfo = {};

                mvcclientwalletmodule._fillCardInfo(cardinfo, card);

                return _context44.abrupt("return", cardinfo);

              case 52:
              case "end":
                return _context44.stop();
            }
          }
        }, _callee44, this);
      }));

      function makeCurrencyCard(_x124, _x125, _x126, _x127) {
        return _makeCurrencyCard.apply(this, arguments);
      }

      return makeCurrencyCard;
    }()
  }, {
    key: "getCurrencyCardWithAddress",
    value: function () {
      var _getCurrencyCardWithAddress = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee45(sessionuuid, walletuuid, currencyuuid, address) {
        var currency, global, _apicontrollers, session, scheme, wallet, card, cardarray, i, xtradata, mvcclientwalletmodule, cardinfo;

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
                _context45.next = 8;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 8:
                currency = _context45.sent;

                if (currency) {
                  _context45.next = 11;
                  break;
                }

                return _context45.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 11:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context45.next = 15;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 15:
                session = _context45.sent;

                if (session) {
                  _context45.next = 18;
                  break;
                }

                return _context45.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 18:
                _context45.next = 20;
                return this._getCurrencyScheme(session, currency);

              case 20:
                scheme = _context45.sent;
                _context45.next = 23;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 23:
                wallet = _context45.sent;

                if (wallet) {
                  _context45.next = 26;
                  break;
                }

                return _context45.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 26:
                _context45.next = 28;
                return wallet.getCardsWithAddress(address);

              case 28:
                cardarray = _context45.sent;
                i = 0;

              case 30:
                if (!(i < (cardarray ? cardarray.length : 0))) {
                  _context45.next = 39;
                  break;
                }

                xtradata = cardarray[i].getXtraData('myquote');
                xtradata = xtradata ? xtradata : {};

                if (!(xtradata.currencyuuid == currencyuuid)) {
                  _context45.next = 36;
                  break;
                }

                card = cardarray[i];
                return _context45.abrupt("break", 39);

              case 36:
                i++;
                _context45.next = 30;
                break;

              case 39:
                if (!card) {
                  _context45.next = 46;
                  break;
                }

                // return cardinfo
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                cardinfo = {};

                mvcclientwalletmodule._fillCardInfo(cardinfo, card);

                return _context45.abrupt("return", cardinfo);

              case 46:
                return _context45.abrupt("return", this.createReadOnlyCurrencyCard(sessionuuid, walletuuid, currencyuuid, address));

              case 47:
              case "end":
                return _context45.stop();
            }
          }
        }, _callee45, this);
      }));

      function getCurrencyCardWithAddress(_x128, _x129, _x130, _x131) {
        return _getCurrencyCardWithAddress.apply(this, arguments);
      }

      return getCurrencyCardWithAddress;
    }()
  }, {
    key: "createReadOnlyCurrencyCard",
    value: function () {
      var _createReadOnlyCurrencyCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee46(sessionuuid, walletuuid, currencyuuid, address) {
        var currency, global, _apicontrollers, session, scheme, wallet, authname, password, card, cardsession, xtradata, bSave, mvcclientwalletmodule, cardinfo;

        return _regeneratorRuntime().wrap(function _callee46$(_context46) {
          while (1) {
            switch (_context46.prev = _context46.next) {
              case 0:
                if (sessionuuid) {
                  _context46.next = 2;
                  break;
                }

                return _context46.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context46.next = 4;
                  break;
                }

                return _context46.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (currencyuuid) {
                  _context46.next = 6;
                  break;
                }

                return _context46.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 6:
                _context46.next = 8;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 8:
                currency = _context46.sent;

                if (currency) {
                  _context46.next = 11;
                  break;
                }

                return _context46.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 11:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context46.next = 15;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 15:
                session = _context46.sent;

                if (session) {
                  _context46.next = 18;
                  break;
                }

                return _context46.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 18:
                _context46.next = 20;
                return this._getCurrencyScheme(session, currency);

              case 20:
                scheme = _context46.sent;
                _context46.next = 23;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 23:
                wallet = _context46.sent;

                if (wallet) {
                  _context46.next = 26;
                  break;
                }

                return _context46.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 26:
                _context46.next = 28;
                return wallet.createCard(scheme, authname, password, address);

              case 28:
                card = _context46.sent;

                if (card) {
                  _context46.next = 31;
                  break;
                }

                return _context46.abrupt("return", Promise.reject('could not create card'));

              case 31:
                cardsession = card._getSession();

                if (cardsession) {
                  _context46.next = 35;
                  break;
                }

                _context46.next = 35;
                return card.init();

              case 35:
                if (!card.isLocked()) {
                  _context46.next = 38;
                  break;
                }

                _context46.next = 38;
                return card.unlock();

              case 38:
                // set it's associated to currencyuuid in XtraData
                xtradata = card.getXtraData('myquote');
                xtradata = xtradata ? xtradata : {};
                xtradata.currencyuuid = currencyuuid;
                card.putXtraData('myquote', xtradata); // save

                _context46.next = 44;
                return card.save();

              case 44:
                bSave = _context46.sent;

                if (bSave) {
                  _context46.next = 47;
                  break;
                }

                return _context46.abrupt("return", Promise.reject('could not save card'));

              case 47:
                // return cardinfo
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                cardinfo = {};

                mvcclientwalletmodule._fillCardInfo(cardinfo, card);

                return _context46.abrupt("return", cardinfo);

              case 51:
              case "end":
                return _context46.stop();
            }
          }
        }, _callee46, this);
      }));

      function createReadOnlyCurrencyCard(_x132, _x133, _x134, _x135) {
        return _createReadOnlyCurrencyCard.apply(this, arguments);
      }

      return createReadOnlyCurrencyCard;
    }()
  }, {
    key: "generateCurrencyCard",
    value: function () {
      var _generateCurrencyCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee47(sessionuuid, walletuuid, currencyuuid) {
        var global, _apicontrollers, session, _privatekey;

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
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context47.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context47.sent;

                if (session) {
                  _context47.next = 9;
                  break;
                }

                return _context47.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                // we generate a key
                _privatekey = _apicontrollers.generatePrivateKey(session);
                return _context47.abrupt("return", this.createCurrencyCard(sessionuuid, walletuuid, currencyuuid, _privatekey));

              case 11:
              case "end":
                return _context47.stop();
            }
          }
        }, _callee47, this);
      }));

      function generateCurrencyCard(_x136, _x137, _x138) {
        return _generateCurrencyCard.apply(this, arguments);
      }

      return generateCurrencyCard;
    }()
  }, {
    key: "_getTokenAccountFromAddress",
    value: function () {
      var _getTokenAccountFromAddress2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee48(session, card, tokenaddress) {
        var tokenaccount, token;
        return _regeneratorRuntime().wrap(function _callee48$(_context48) {
          while (1) {
            switch (_context48.prev = _context48.next) {
              case 0:
                _context48.next = 2;
                return card.getTokenAccountFromAddress(tokenaddress)["catch"](function (err) {});

              case 2:
                tokenaccount = _context48.sent;

                if (tokenaccount) {
                  _context48.next = 15;
                  break;
                }

                token = card.getTokenObject(tokenaddress);

                if (!card.isLocked()) {
                  _context48.next = 8;
                  break;
                }

                _context48.next = 8;
                return card.unlock();

              case 8:
                _context48.next = 10;
                return card.createTokenAccount(token);

              case 10:
                tokenaccount = _context48.sent;
                _context48.next = 13;
                return tokenaccount.init();

              case 13:
                _context48.next = 15;
                return tokenaccount._synchronizeWithERC20TokenContract(session);

              case 15:
                return _context48.abrupt("return", tokenaccount);

              case 16:
              case "end":
                return _context48.stop();
            }
          }
        }, _callee48);
      }));

      function _getTokenAccountFromAddress(_x139, _x140, _x141) {
        return _getTokenAccountFromAddress2.apply(this, arguments);
      }

      return _getTokenAccountFromAddress;
    }()
  }, {
    key: "getCurrencyPosition",
    value: function () {
      var _getCurrencyPosition = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee49(sessionuuid, walletuuid, currencyuuid, carduuid) {
        var global, _apicontrollers, session, wallet, currency, tokenaddress, cardinfo, mvcclientwalletmodule, cardaddress, childsession, position, web3providerurl, currency_amount;

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
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context49.next = 10;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 10:
                session = _context49.sent;

                if (session) {
                  _context49.next = 13;
                  break;
                }

                return _context49.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 13:
                _context49.next = 15;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 15:
                wallet = _context49.sent;

                if (wallet) {
                  _context49.next = 18;
                  break;
                }

                return _context49.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 18:
                _context49.next = 20;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 20:
                currency = _context49.sent;

                if (currency) {
                  _context49.next = 23;
                  break;
                }

                return _context49.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 23:
                tokenaddress = currency.address; // using token account to get position

                /* 		var card = await this._getCurrencyCard(session, wallet, currency).catch(err => {});
                
                		var tokenaccount = await this._getTokenAccountFromAddress(session, card, tokenaddress).catch(err => {});
                
                		const position = (tokenaccount ? await tokenaccount.getPosition().catch(err => {}) : 0);
                 */
                // using direct call to ERC20 to speed up result

                if (carduuid) {
                  _context49.next = 30;
                  break;
                }

                _context49.next = 27;
                return this.getCurrencyCard(sessionuuid, walletuuid, currencyuuid);

              case 27:
                cardinfo = _context49.sent;
                _context49.next = 34;
                break;

              case 30:
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                _context49.next = 33;
                return mvcclientwalletmodule.getCardInfo(sessionuuid, walletuuid, carduuid);

              case 33:
                cardinfo = _context49.sent;

              case 34:
                cardaddress = cardinfo.address; // get a childsession on currency scheme

                _context49.next = 37;
                return this._getMonitoredCurrencySession(session, wallet, currency);

              case 37:
                childsession = _context49.sent;
                _context49.next = 40;
                return this._getCurrencyWeb3ProviderUrl(childsession, currency);

              case 40:
                web3providerurl = _context49.sent;
                _context49.next = 43;
                return _apicontrollers.getAddressERC20Position(childsession, web3providerurl, tokenaddress, cardaddress)["catch"](function (err) {
                  position = 0;
                });

              case 43:
                position = _context49.sent;
                _context49.next = 46;
                return this._createCurrencyAmount(childsession, currency, position);

              case 46:
                currency_amount = _context49.sent;
                return _context49.abrupt("return", currency_amount);

              case 48:
              case "end":
                return _context49.stop();
            }
          }
        }, _callee49, this);
      }));

      function getCurrencyPosition(_x142, _x143, _x144, _x145) {
        return _getCurrencyPosition.apply(this, arguments);
      }

      return getCurrencyPosition;
    }()
  }, {
    key: "getCurrencyCardCredits",
    value: function () {
      var _getCurrencyCardCredits = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee50(sessionuuid, walletuuid, currencyuuid) {
        var global, mvcclientwalletmodule, _apicontrollers, session, wallet, currency, card, carduuid, schemeuuid, credits;

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
                if (walletuuid) {
                  _context50.next = 4;
                  break;
                }

                return _context50.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (currencyuuid) {
                  _context50.next = 6;
                  break;
                }

                return _context50.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 6:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                _apicontrollers = this._getClientAPI();
                _context50.next = 11;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 11:
                session = _context50.sent;

                if (session) {
                  _context50.next = 14;
                  break;
                }

                return _context50.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 14:
                _context50.next = 16;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 16:
                wallet = _context50.sent;

                if (wallet) {
                  _context50.next = 19;
                  break;
                }

                return _context50.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 19:
                _context50.next = 21;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 21:
                currency = _context50.sent;

                if (currency) {
                  _context50.next = 24;
                  break;
                }

                return _context50.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 24:
                _context50.next = 26;
                return this._getCurrencyCard(session, wallet, currency);

              case 26:
                card = _context50.sent;
                carduuid = card.getCardUUID();
                schemeuuid = card.getSchemeUUID();
                _context50.next = 31;
                return this.getCreditBalance(sessionuuid, walletuuid, carduuid, currencyuuid);

              case 31:
                credits = _context50.sent;
                _context50.next = 34;
                return this.getCurrencyTransactionUnitsThreshold(sessionuuid, walletuuid, currencyuuid);

              case 34:
                credits.threshold = _context50.sent;
                return _context50.abrupt("return", credits);

              case 36:
              case "end":
                return _context50.stop();
            }
          }
        }, _callee50, this);
      }));

      function getCurrencyCardCredits(_x146, _x147, _x148) {
        return _getCurrencyCardCredits.apply(this, arguments);
      }

      return getCurrencyCardCredits;
    }()
  }, {
    key: "_getEthereumTransaction",
    value: function () {
      var _getEthereumTransaction2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee51(session, txhash) {
        var global, ethereumnodeaccessmodule, result;
        return _regeneratorRuntime().wrap(function _callee51$(_context51) {
          while (1) {
            switch (_context51.prev = _context51.next) {
              case 0:
                global = this.global;
                ethereumnodeaccessmodule = global.getModuleObject('ethereum-node-access');
                result = new Promise(function (resolve, reject) {
                  ethereumnodeaccessmodule.readEthereumTransactionObject(session, txhash, function (err, res) {
                    if (err) reject(err);else {
                      var ethereumnodeaccessmodule = global.getModuleObject('ethereum-node-access');
                      var data = res.data;

                      try {
                        // can throw invalid UTF8 detected
                        res.data_decoded_utf8 = ethereumnodeaccessmodule.web3ToUTF8(session, data);
                      } catch (e) {}

                      resolve(res);
                    }
                  }).then(function (res) {
                    // fixing missing callback call when data == null
                    // in EthereumNodeAccess.readEthereumTransactionObject
                    if (res) return res;else throw new Error('no transaction found with hash ' + txhash);
                  })["catch"](function (err) {
                    reject(err);
                  });
                });
                return _context51.abrupt("return", result);

              case 4:
              case "end":
                return _context51.stop();
            }
          }
        }, _callee51, this);
      }));

      function _getEthereumTransaction(_x149, _x150) {
        return _getEthereumTransaction2.apply(this, arguments);
      }

      return _getEthereumTransaction;
    }()
  }, {
    key: "_readTransaction",
    value: function () {
      var _readTransaction2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee52(session, txhash) {
        var global, ethchainreadermodule, chainreaderinterface, result;
        return _regeneratorRuntime().wrap(function _callee52$(_context52) {
          while (1) {
            switch (_context52.prev = _context52.next) {
              case 0:
                global = this.global;
                ethchainreadermodule = global.getModuleObject('ethchainreader');
                chainreaderinterface = ethchainreadermodule.getChainReaderInterface(session);
                result = new Promise(function (resolve, reject) {
                  chainreaderinterface.getTransaction(txhash, function (err, res) {
                    if (err) reject(err);else {
                      var ethereumnodeaccessmodule = global.getModuleObject('ethereum-node-access');
                      var input = res.input;

                      try {
                        res.input_decoded_utf8 = ethereumnodeaccessmodule.web3ToUTF8(session, input);
                      } catch (e) {}

                      resolve(res);
                    }
                  }).then(function (res) {
                    // fixing missing callback calls when data == null
                    // because of error read property of null in Transaction._createTransactionObject
                    if (res) return res;else throw new Error('no transaction found with hash ' + txhash);
                  })["catch"](function (err) {
                    reject(err);
                  });
                });
                return _context52.abrupt("return", result);

              case 5:
              case "end":
                return _context52.stop();
            }
          }
        }, _callee52, this);
      }));

      function _readTransaction(_x151, _x152) {
        return _readTransaction2.apply(this, arguments);
      }

      return _readTransaction;
    }()
  }, {
    key: "getCurrencyEthereumTransaction",
    value: function () {
      var _getCurrencyEthereumTransaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee53(sessionuuid, walletuuid, currencyuuid, txhash) {
        var global, _apicontrollers, session, wallet, currency, childsession, ethereumtransaction;

        return _regeneratorRuntime().wrap(function _callee53$(_context53) {
          while (1) {
            switch (_context53.prev = _context53.next) {
              case 0:
                if (sessionuuid) {
                  _context53.next = 2;
                  break;
                }

                return _context53.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context53.next = 4;
                  break;
                }

                return _context53.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (currencyuuid) {
                  _context53.next = 6;
                  break;
                }

                return _context53.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 6:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context53.next = 10;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 10:
                session = _context53.sent;

                if (session) {
                  _context53.next = 13;
                  break;
                }

                return _context53.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 13:
                _context53.next = 15;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 15:
                wallet = _context53.sent;

                if (wallet) {
                  _context53.next = 18;
                  break;
                }

                return _context53.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 18:
                _context53.next = 20;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 20:
                currency = _context53.sent;

                if (currency) {
                  _context53.next = 23;
                  break;
                }

                return _context53.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 23:
                _context53.next = 25;
                return this._getMonitoredCurrencySession(session, wallet, currency);

              case 25:
                childsession = _context53.sent;
                _context53.next = 28;
                return this._getEthereumTransaction(childsession, txhash);

              case 28:
                ethereumtransaction = _context53.sent;
                _context53.next = 31;
                return this._readTransaction(childsession, txhash);

              case 31:
                ethereumtransaction._ethtx = _context53.sent;
                return _context53.abrupt("return", ethereumtransaction);

              case 33:
              case "end":
                return _context53.stop();
            }
          }
        }, _callee53, this);
      }));

      function getCurrencyEthereumTransaction(_x153, _x154, _x155, _x156) {
        return _getCurrencyEthereumTransaction.apply(this, arguments);
      }

      return getCurrencyEthereumTransaction;
    }()
  }, {
    key: "getCurrencyEthereumTransactionReceipt",
    value: function () {
      var _getCurrencyEthereumTransactionReceipt = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee54(sessionuuid, walletuuid, currencyuuid, txhash) {
        var global, _apicontrollers, session, wallet, currency, childsession, ethereumtransactionreceipt;

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
                if (currencyuuid) {
                  _context54.next = 6;
                  break;
                }

                return _context54.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 6:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context54.next = 10;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 10:
                session = _context54.sent;

                if (session) {
                  _context54.next = 13;
                  break;
                }

                return _context54.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 13:
                _context54.next = 15;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 15:
                wallet = _context54.sent;

                if (wallet) {
                  _context54.next = 18;
                  break;
                }

                return _context54.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 18:
                _context54.next = 20;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 20:
                currency = _context54.sent;

                if (currency) {
                  _context54.next = 23;
                  break;
                }

                return _context54.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 23:
                _context54.next = 25;
                return this._getMonitoredCurrencySession(session, wallet, currency);

              case 25:
                childsession = _context54.sent;
                _context54.next = 28;
                return _apicontrollers.getEthereumTransactionReceipt(childsession, txhash);

              case 28:
                ethereumtransactionreceipt = _context54.sent;
                return _context54.abrupt("return", ethereumtransactionreceipt);

              case 30:
              case "end":
                return _context54.stop();
            }
          }
        }, _callee54, this);
      }));

      function getCurrencyEthereumTransactionReceipt(_x157, _x158, _x159, _x160) {
        return _getCurrencyEthereumTransactionReceipt.apply(this, arguments);
      }

      return getCurrencyEthereumTransactionReceipt;
    }()
  }, {
    key: "getCurrencyERC20TokenInfo",
    value: function () {
      var _getCurrencyERC20TokenInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee55(sessionuuid, walletuuid, currencyuuid, tokenaddress) {
        var global, _apicontrollers, session, wallet, currency, childsession, erc20token_contract, token;

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
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context55.next = 10;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 10:
                session = _context55.sent;

                if (session) {
                  _context55.next = 13;
                  break;
                }

                return _context55.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 13:
                _context55.next = 15;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 15:
                wallet = _context55.sent;

                if (wallet) {
                  _context55.next = 18;
                  break;
                }

                return _context55.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 18:
                _context55.next = 20;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 20:
                currency = _context55.sent;

                if (currency) {
                  _context55.next = 23;
                  break;
                }

                return _context55.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 23:
                _context55.next = 25;
                return this._getMonitoredCurrencySession(session, wallet, currency);

              case 25:
                childsession = _context55.sent;
                _context55.next = 28;
                return _apicontrollers.importERC20Token(childsession, tokenaddress);

              case 28:
                erc20token_contract = _context55.sent;
                token = {
                  address: tokenaddress
                };
                _context55.next = 32;
                return erc20token_contract.getChainName();

              case 32:
                token.name = _context55.sent;
                _context55.next = 35;
                return erc20token_contract.getChainSymbol();

              case 35:
                token.symbol = _context55.sent;
                _context55.next = 38;
                return erc20token_contract.getChainDecimals();

              case 38:
                token.decimals = _context55.sent;
                return _context55.abrupt("return", token);

              case 40:
              case "end":
                return _context55.stop();
            }
          }
        }, _callee55, this);
      }));

      function getCurrencyERC20TokenInfo(_x161, _x162, _x163, _x164) {
        return _getCurrencyERC20TokenInfo.apply(this, arguments);
      }

      return getCurrencyERC20TokenInfo;
    }()
  }, {
    key: "getCurrencyTransactionInfo",
    value: function () {
      var _getCurrencyTransactionInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee56(sessionuuid, walletuuid, currencyuuid, txhash) {
        var tx_info, global, _apicontrollers, session, wallet, currency, bTokenTx, transaction, tx, tx_receipt;

        return _regeneratorRuntime().wrap(function _callee56$(_context56) {
          while (1) {
            switch (_context56.prev = _context56.next) {
              case 0:
                tx_info = {
                  hash: txhash
                };

                if (sessionuuid) {
                  _context56.next = 3;
                  break;
                }

                return _context56.abrupt("return", tx_info);

              case 3:
                if (walletuuid) {
                  _context56.next = 5;
                  break;
                }

                return _context56.abrupt("return", tx_info);

              case 5:
                if (currencyuuid) {
                  _context56.next = 7;
                  break;
                }

                return _context56.abrupt("return", tx_info);

              case 7:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context56.next = 11;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 11:
                session = _context56.sent;

                if (session) {
                  _context56.next = 14;
                  break;
                }

                return _context56.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 14:
                _context56.next = 16;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 16:
                wallet = _context56.sent;

                if (wallet) {
                  _context56.next = 19;
                  break;
                }

                return _context56.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 19:
                _context56.next = 21;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 21:
                currency = _context56.sent;

                if (currency) {
                  _context56.next = 24;
                  break;
                }

                return _context56.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 24:
                _context56.prev = 24;
                bTokenTx = false; // TODO: find if this is a token transaction
                // get transaction for more specific info

                _context56.next = 28;
                return this.getCurrencyEthereumTransaction(sessionuuid, walletuuid, currencyuuid, txhash)["catch"](function (err) {
                  console.log('could not retrieve transaction in getCurrencyTransactionInfo: ' + err);
                });

              case 28:
                transaction = _context56.sent;
                tx = transaction ? transaction._ethtx : null;

                if (!tx) {
                  _context56.next = 39;
                  break;
                }

                tx_info.time = tx.time;
                tx_info.status_int = 5; // pending
                // get transaction receipt

                _context56.next = 35;
                return this.getCurrencyEthereumTransactionReceipt(sessionuuid, walletuuid, currencyuuid, txhash)["catch"](function (err) {});

              case 35:
                tx_receipt = _context56.sent;

                if (tx_receipt) {
                  tx_info.blockNumber = tx_receipt.blockNumber;
                  tx_info.from_address = tx_receipt.from;
                  tx_info.status = tx_receipt.status;
                  tx_info.status_int = tx_receipt.status ? 10 : -10; // 1 success, -1 fail

                  if (bTokenTx) {
                    // erc20 format
                    tx_info.tokenaddress = tx_receipt.to;
                    tx_info.amount = tx_receipt.logs && tx_receipt.logs[0] ? parseInt(tx_receipt.logs[0].data) : null;
                    tx_info.to_address = tx_receipt.logs && tx_receipt.logs[0] && tx_receipt.logs[0].topics && tx_receipt.logs[0].topics[2] ? '0x' + tx_receipt.logs[0].topics[2].substring(26) : null;
                  }
                }

                _context56.next = 40;
                break;

              case 39:
                tx_info.status_int = -5; // not found

              case 40:
                _context56.next = 45;
                break;

              case 42:
                _context56.prev = 42;
                _context56.t0 = _context56["catch"](24);
                console.log('exception in getCurrencyTransactionInfo: ' + _context56.t0);

              case 45:
                return _context56.abrupt("return", tx_info);

              case 46:
              case "end":
                return _context56.stop();
            }
          }
        }, _callee56, this, [[24, 42]]);
      }));

      function getCurrencyTransactionInfo(_x165, _x166, _x167, _x168) {
        return _getCurrencyTransactionInfo.apply(this, arguments);
      }

      return getCurrencyTransactionInfo;
    }()
  }, {
    key: "_createDummyWalletSession",
    value: function () {
      var _createDummyWalletSession2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee57(walletsession) {
        var global, currenciesmodule;
        return _regeneratorRuntime().wrap(function _callee57$(_context57) {
          while (1) {
            switch (_context57.prev = _context57.next) {
              case 0:
                global = this.global;
                currenciesmodule = global.getModuleObject('currencies');
                return _context57.abrupt("return", currenciesmodule._createDummyWalletSession(walletsession));

              case 3:
              case "end":
                return _context57.stop();
            }
          }
        }, _callee57, this);
      }));

      function _createDummyWalletSession(_x169) {
        return _createDummyWalletSession2.apply(this, arguments);
      }

      return _createDummyWalletSession;
    }()
  }, {
    key: "_setMonitoredEthereumNodeAccess",
    value: function () {
      var _setMonitoredEthereumNodeAccess2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee58(session, ethnodeserver) {
        var global, ethnodecurrenciesmodule;
        return _regeneratorRuntime().wrap(function _callee58$(_context58) {
          while (1) {
            switch (_context58.prev = _context58.next) {
              case 0:
                global = this.global;
                ethnodecurrenciesmodule = global.getModuleObject('ethnode-currencies');
                return _context58.abrupt("return", ethnodecurrenciesmodule._setMonitoredEthereumNodeAccess(session, ethnodeserver));

              case 3:
              case "end":
                return _context58.stop();
            }
          }
        }, _callee58, this);
      }));

      function _setMonitoredEthereumNodeAccess(_x170, _x171) {
        return _setMonitoredEthereumNodeAccess2.apply(this, arguments);
      }

      return _setMonitoredEthereumNodeAccess;
    }()
  }, {
    key: "_getMonitoredCurrencySession",
    value: function () {
      var _getMonitoredCurrencySession2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee59(session, wallet, currency) {
        var global, ethnodecurrenciesmodule;
        return _regeneratorRuntime().wrap(function _callee59$(_context59) {
          while (1) {
            switch (_context59.prev = _context59.next) {
              case 0:
                global = this.global;
                ethnodecurrenciesmodule = global.getModuleObject('ethnode-currencies');
                return _context59.abrupt("return", ethnodecurrenciesmodule._getMonitoredCurrencySession(session, wallet, currency));

              case 3:
              case "end":
                return _context59.stop();
            }
          }
        }, _callee59, this);
      }));

      function _getMonitoredCurrencySession(_x172, _x173, _x174) {
        return _getMonitoredCurrencySession2.apply(this, arguments);
      }

      return _getMonitoredCurrencySession;
    }()
  }, {
    key: "_getMonitoredCardSession",
    value: function () {
      var _getMonitoredCardSession2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee60(session, wallet, card) {
        var currency;
        return _regeneratorRuntime().wrap(function _callee60$(_context60) {
          while (1) {
            switch (_context60.prev = _context60.next) {
              case 0:
                _context60.next = 2;
                return this._findCardCurrency(session, wallet, card);

              case 2:
                currency = _context60.sent;
                return _context60.abrupt("return", this._getMonitoredCurrencySession(session, wallet, currency));

              case 4:
              case "end":
                return _context60.stop();
            }
          }
        }, _callee60, this);
      }));

      function _getMonitoredCardSession(_x175, _x176, _x177) {
        return _getMonitoredCardSession2.apply(this, arguments);
      }

      return _getMonitoredCardSession;
    }()
  }, {
    key: "getCurrencyTransactionUnitsThreshold",
    value: function () {
      var _getCurrencyTransactionUnitsThreshold = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee61(sessionuuid, walletuuid, currencyuuid) {
        var _apicontrollers, session, currency, threshold;

        return _regeneratorRuntime().wrap(function _callee61$(_context61) {
          while (1) {
            switch (_context61.prev = _context61.next) {
              case 0:
                if (sessionuuid) {
                  _context61.next = 2;
                  break;
                }

                return _context61.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (currencyuuid) {
                  _context61.next = 4;
                  break;
                }

                return _context61.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 4:
                _apicontrollers = this._getClientAPI();
                _context61.next = 7;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 7:
                session = _context61.sent;

                if (session) {
                  _context61.next = 10;
                  break;
                }

                return _context61.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 10:
                _context61.next = 12;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 12:
                currency = _context61.sent;

                if (currency) {
                  _context61.next = 15;
                  break;
                }

                return _context61.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 15:
                _context61.next = 17;
                return this._getTransactionUnitsThreshold(session, currency);

              case 17:
                threshold = _context61.sent;
                return _context61.abrupt("return", threshold);

              case 19:
              case "end":
                return _context61.stop();
            }
          }
        }, _callee61, this);
      }));

      function getCurrencyTransactionUnitsThreshold(_x178, _x179, _x180) {
        return _getCurrencyTransactionUnitsThreshold.apply(this, arguments);
      }

      return getCurrencyTransactionUnitsThreshold;
    }()
  }, {
    key: "getCreditBalance",
    value: function () {
      var _getCreditBalance = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee62(sessionuuid, walletuuid, carduuid, currencyuuid) {
        var global, _apicontrollers, session, wallet, card, currency, childsession, ethereumnodeaccess, ethnodemodule, card_address, transactioncredits, transactionunits, credits;

        return _regeneratorRuntime().wrap(function _callee62$(_context62) {
          while (1) {
            switch (_context62.prev = _context62.next) {
              case 0:
                if (sessionuuid) {
                  _context62.next = 2;
                  break;
                }

                return _context62.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context62.next = 4;
                  break;
                }

                return _context62.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (currencyuuid) {
                  _context62.next = 6;
                  break;
                }

                return _context62.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 6:
                if (carduuid) {
                  _context62.next = 8;
                  break;
                }

                return _context62.abrupt("return", Promise.reject('card uuid is undefined'));

              case 8:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context62.next = 12;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 12:
                session = _context62.sent;
                _context62.next = 15;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 15:
                wallet = _context62.sent;
                _context62.next = 18;
                return wallet.getCardFromUUID(carduuid);

              case 18:
                card = _context62.sent;

                if (card) {
                  _context62.next = 21;
                  break;
                }

                return _context62.abrupt("return", Promise.reject('could not find card ' + carduuid));

              case 21:
                _context62.next = 23;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 23:
                currency = _context62.sent;

                if (currency) {
                  _context62.next = 26;
                  break;
                }

                return _context62.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 26:
                _context62.next = 28;
                return this._getMonitoredCurrencySession(session, wallet, currency);

              case 28:
                childsession = _context62.sent;

                if (childsession.ethereum_node_access_instance) {
                  // _getMonitoredCurrencySession has set ethereumnodeaccess for a remote access
                  ethereumnodeaccess = childsession.ethereum_node_access_instance;
                } else {
                  ethnodemodule = global.getModuleObject('ethnode');
                  ethereumnodeaccess = ethnodemodule.getEthereumNodeAccessInstance(childsession);
                } //var transactioncredits = await card.getTransactionCredits();
                //var transactionunits = await card.getTransactionUnits();


                card_address = card.getAddress();
                _context62.next = 33;
                return ethereumnodeaccess.web3_getBalance(card_address);

              case 33:
                transactioncredits = _context62.sent;
                _context62.next = 36;
                return this._getTransactionUnits(session, currency, transactioncredits);

              case 36:
                transactionunits = _context62.sent;
                credits = {
                  transactioncredits: transactioncredits,
                  transactionunits: transactionunits
                }; // add threshold		
                //credits.threshold = await this.getCurrencyTransactionUnitsThreshold(sessionuuid, walletuuid, currencyuuid);

                _context62.next = 40;
                return this._getTransactionUnitsThreshold(session, currency);

              case 40:
                credits.threshold = _context62.sent;
                return _context62.abrupt("return", credits);

              case 42:
              case "end":
                return _context62.stop();
            }
          }
        }, _callee62, this);
      }));

      function getCreditBalance(_x181, _x182, _x183, _x184) {
        return _getCreditBalance.apply(this, arguments);
      }

      return getCreditBalance;
    }()
  }, {
    key: "getCurrencyTransactionContext",
    value: function () {
      var _getCurrencyTransactionContext = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee63(sessionuuid, currencyuuid) {
        var feelevel,
            global,
            _apicontrollers,
            session,
            currency,
            transactioninfo,
            ethnodemodule,
            weiamount,
            avg_transaction,
            credits_threshold,
            _args63 = arguments;

        return _regeneratorRuntime().wrap(function _callee63$(_context63) {
          while (1) {
            switch (_context63.prev = _context63.next) {
              case 0:
                feelevel = _args63.length > 2 && _args63[2] !== undefined ? _args63[2] : null;

                if (sessionuuid) {
                  _context63.next = 3;
                  break;
                }

                return _context63.abrupt("return", Promise.reject('session uuid is undefined'));

              case 3:
                if (currencyuuid) {
                  _context63.next = 5;
                  break;
                }

                return _context63.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 5:
                global = this.global;
                _apicontrollers = this._getClientAPI();
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
                transactioninfo = {};
                _context63.next = 20;
                return this._getGasLimit(session, currency, feelevel);

              case 20:
                transactioninfo.gasLimit = _context63.sent;
                _context63.next = 23;
                return this._getGasPrice(session, currency, feelevel);

              case 23:
                transactioninfo.gasPrice = _context63.sent;
                _context63.next = 26;
                return this._getAverageTransactionFee(session, currency, feelevel);

              case 26:
                transactioninfo.avg_transaction_fee = _context63.sent;
                _context63.next = 29;
                return this._getTransactionUnitsThreshold(session, currency, feelevel);

              case 29:
                transactioninfo.units_threshold = _context63.sent;
                ethnodemodule = global.getModuleObject('ethnode');
                weiamount = ethnodemodule.getWeiFromEther(transactioninfo.avg_transaction_fee);
                _context63.next = 34;
                return this._createDecimalAmount(session, weiamount, 18);

              case 34:
                avg_transaction = _context63.sent;
                _context63.next = 37;
                return avg_transaction.multiply(transactioninfo.units_threshold);

              case 37:
                credits_threshold = _context63.sent;
                _context63.next = 40;
                return credits_threshold.toInteger();

              case 40:
                transactioninfo.credits_threshold = _context63.sent;
                return _context63.abrupt("return", transactioninfo);

              case 42:
              case "end":
                return _context63.stop();
            }
          }
        }, _callee63, this);
      }));

      function getCurrencyTransactionContext(_x185, _x186) {
        return _getCurrencyTransactionContext.apply(this, arguments);
      }

      return getCurrencyTransactionContext;
    }()
  }, {
    key: "_getRecommendedFeeLevel",
    value: function () {
      var _getRecommendedFeeLevel2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee64(session, wallet, card, currency, tx_fee) {
        var feelevel, sessionuuid, ethnodeserver, tx_info, gasLimit, gasPrice, avg_transaction_fee, gas_unit, credit_cost_unit_ratio, units_exec_fee, credits_exec_fee, credits_max_fee, units_max_fee;
        return _regeneratorRuntime().wrap(function _callee64$(_context64) {
          while (1) {
            switch (_context64.prev = _context64.next) {
              case 0:
                // standard fee level
                feelevel = {
                  default_gas_limit_multiplier: 1,
                  default_gas_price_multiplier: 1,
                  avg_transaction_fee_multiplier: 1,
                  transaction_units_min_multiplier: 1
                }; // get scheme transaction info

                sessionuuid = session.getSessionUUID();
                _context64.next = 4;
                return this._getCurrencyEthNodeServer(session, currency);

              case 4:
                ethnodeserver = _context64.sent;
                _context64.next = 7;
                return this.getCurrencyTransactionContext(sessionuuid, currency.uuid, feelevel);

              case 7:
                tx_info = _context64.sent;
                gasLimit = tx_info.gasLimit;
                gasPrice = tx_info.gasPrice;
                avg_transaction_fee = tx_info.avg_transaction_fee;
                gas_unit = ethnodeserver && ethnodeserver.gas_unit ? parseInt(ethnodeserver.gas_unit) : 21000;
                credit_cost_unit_ratio = avg_transaction_fee * 1000000000000000000 / (gas_unit * gasPrice); // execution cost

                if (!tx_fee.estimated_cost_credits) {
                  _context64.next = 20;
                  break;
                }

                credits_exec_fee = tx_fee.estimated_cost_credits;
                _context64.next = 17;
                return this._getUnitsFromCredits(session, currency, credits_exec_fee);

              case 17:
                units_exec_fee = _context64.sent;
                _context64.next = 24;
                break;

              case 20:
                units_exec_fee = tx_fee.estimated_cost_units ? Math.ceil(tx_fee.estimated_cost_units / credit_cost_unit_ratio) : 1;
                _context64.next = 23;
                return this._getTransactionCreditsAsync(session, currency, units_exec_fee);

              case 23:
                credits_exec_fee = _context64.sent;

              case 24:
                // max price
                credits_max_fee = gasLimit * gasPrice;
                _context64.next = 27;
                return this._getUnitsFromCredits(session, currency, credits_max_fee);

              case 27:
                units_max_fee = _context64.sent;
                if (units_exec_fee > units_max_fee) feelevel.default_gas_limit_multiplier = Math.ceil(units_exec_fee / units_max_fee);
                return _context64.abrupt("return", feelevel);

              case 30:
              case "end":
                return _context64.stop();
            }
          }
        }, _callee64, this);
      }));

      function _getRecommendedFeeLevel(_x187, _x188, _x189, _x190, _x191) {
        return _getRecommendedFeeLevel2.apply(this, arguments);
      }

      return _getRecommendedFeeLevel;
    }()
  }, {
    key: "getRecommendedFeeLevel",
    value: function () {
      var _getRecommendedFeeLevel3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee65(sessionuuid, walletuuid, carduuid, currencyuuid, tx_fee) {
        var global, _apicontrollers, session, wallet, currency, card;

        return _regeneratorRuntime().wrap(function _callee65$(_context65) {
          while (1) {
            switch (_context65.prev = _context65.next) {
              case 0:
                if (sessionuuid) {
                  _context65.next = 2;
                  break;
                }

                return _context65.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context65.next = 4;
                  break;
                }

                return _context65.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (currencyuuid) {
                  _context65.next = 6;
                  break;
                }

                return _context65.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 6:
                if (carduuid) {
                  _context65.next = 8;
                  break;
                }

                return _context65.abrupt("return", Promise.reject('card uuid is undefined'));

              case 8:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context65.next = 12;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 12:
                session = _context65.sent;

                if (session) {
                  _context65.next = 15;
                  break;
                }

                return _context65.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 15:
                _context65.next = 17;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 17:
                wallet = _context65.sent;

                if (wallet) {
                  _context65.next = 20;
                  break;
                }

                return _context65.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 20:
                _context65.next = 22;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 22:
                currency = _context65.sent;

                if (currency) {
                  _context65.next = 25;
                  break;
                }

                return _context65.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 25:
                _context65.next = 27;
                return wallet.getCardFromUUID(carduuid);

              case 27:
                card = _context65.sent;

                if (card) {
                  _context65.next = 30;
                  break;
                }

                return _context65.abrupt("return", Promise.reject('could not find card ' + carduuid));

              case 30:
                return _context65.abrupt("return", this._getRecommendedFeeLevel(session, wallet, card, currency, tx_fee));

              case 31:
              case "end":
                return _context65.stop();
            }
          }
        }, _callee65, this);
      }));

      function getRecommendedFeeLevel(_x192, _x193, _x194, _x195, _x196) {
        return _getRecommendedFeeLevel3.apply(this, arguments);
      }

      return getRecommendedFeeLevel;
    }()
  }, {
    key: "computeTransactionFee",
    value: function () {
      var _computeTransactionFee = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee66(sessionuuid, walletuuid, carduuid, currencyuuid, tx_fee) {
        var feelevel,
            global,
            _apicontrollers,
            session,
            wallet,
            currency,
            card,
            ethnodeserver,
            tx_info,
            gasLimit,
            gasPrice,
            avg_transaction_fee,
            gas_unit,
            credit_cost_unit_ratio,
            units_exec_fee,
            credits_exec_fee,
            units_transferred,
            credits_transferred,
            credits_max_fee,
            units_max_fee,
            _args66 = arguments;

        return _regeneratorRuntime().wrap(function _callee66$(_context66) {
          while (1) {
            switch (_context66.prev = _context66.next) {
              case 0:
                feelevel = _args66.length > 5 && _args66[5] !== undefined ? _args66[5] : null;

                if (sessionuuid) {
                  _context66.next = 3;
                  break;
                }

                return _context66.abrupt("return", Promise.reject('session uuid is undefined'));

              case 3:
                if (walletuuid) {
                  _context66.next = 5;
                  break;
                }

                return _context66.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 5:
                if (currencyuuid) {
                  _context66.next = 7;
                  break;
                }

                return _context66.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 7:
                if (carduuid) {
                  _context66.next = 9;
                  break;
                }

                return _context66.abrupt("return", Promise.reject('card uuid is undefined'));

              case 9:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context66.next = 13;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 13:
                session = _context66.sent;

                if (session) {
                  _context66.next = 16;
                  break;
                }

                return _context66.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 16:
                _context66.next = 18;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 18:
                wallet = _context66.sent;

                if (wallet) {
                  _context66.next = 21;
                  break;
                }

                return _context66.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 21:
                _context66.next = 23;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 23:
                currency = _context66.sent;

                if (currency) {
                  _context66.next = 26;
                  break;
                }

                return _context66.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 26:
                _context66.next = 28;
                return wallet.getCardFromUUID(carduuid);

              case 28:
                card = _context66.sent;

                if (card) {
                  _context66.next = 31;
                  break;
                }

                return _context66.abrupt("return", Promise.reject('could not find card ' + carduuid));

              case 31:
                _context66.next = 33;
                return this._getCurrencyEthNodeServer(session, currency);

              case 33:
                ethnodeserver = _context66.sent;
                _context66.next = 36;
                return this.getCurrencyTransactionContext(sessionuuid, currency.uuid, feelevel);

              case 36:
                tx_info = _context66.sent;
                gasLimit = tx_info.gasLimit;
                gasPrice = tx_info.gasPrice;
                avg_transaction_fee = tx_info.avg_transaction_fee;
                gas_unit = ethnodeserver && ethnodeserver.gas_unit ? parseInt(ethnodeserver.gas_unit) : 21000;
                credit_cost_unit_ratio = avg_transaction_fee * gasPrice / gas_unit; // execution cost

                if (!tx_fee.estimated_cost_credits) {
                  _context66.next = 49;
                  break;
                }

                credits_exec_fee = tx_fee.estimated_cost_credits;
                _context66.next = 46;
                return this._getUnitsFromCredits(session, currency, credits_exec_fee);

              case 46:
                units_exec_fee = _context66.sent;
                _context66.next = 53;
                break;

              case 49:
                units_exec_fee = tx_fee.estimated_cost_units ? Math.ceil(tx_fee.estimated_cost_units / credit_cost_unit_ratio) : 1;
                _context66.next = 52;
                return this._getTransactionCreditsAsync(session, currency, units_exec_fee);

              case 52:
                credits_exec_fee = _context66.sent;

              case 53:
                if (!tx_fee.transferred_credits) {
                  _context66.next = 60;
                  break;
                }

                credits_transferred = tx_fee.transferred_credits;
                _context66.next = 57;
                return this._getUnitsFromCredits(session, currency, credits_exec_fee);

              case 57:
                units_transferred = _context66.sent;
                _context66.next = 64;
                break;

              case 60:
                units_transferred = tx_fee.transferred_credit_units;
                _context66.next = 63;
                return this._getTransactionCreditsAsync(session, currency, units_transferred);

              case 63:
                credits_transferred = _context66.sent;

              case 64:
                // max price
                credits_max_fee = gasLimit * gasPrice;
                _context66.next = 67;
                return this._getUnitsFromCredits(session, currency, credits_max_fee);

              case 67:
                units_max_fee = _context66.sent;
                // fill tx_fee
                tx_fee.tx_info = tx_info;
                tx_fee.estimated_fee = {}; // estimated execution fee

                tx_fee.estimated_fee.execution_units = units_exec_fee;
                tx_fee.estimated_fee.execution_credits = credits_exec_fee; // estimated transaction total

                tx_fee.estimated_fee.total_credits = credits_exec_fee + credits_transferred;
                _context66.next = 75;
                return this._getUnitsFromCredits(session, currency, tx_fee.estimated_fee.total_credits);

              case 75:
                tx_fee.estimated_fee.total_units = _context66.sent;
                // max fee
                tx_fee.estimated_fee.max_units = units_max_fee;
                tx_fee.estimated_fee.max_credits = credits_max_fee; // required balance

                if (tx_fee.estimated_fee.max_credits > tx_fee.estimated_fee.total_credits) {
                  tx_fee.required_credits = tx_fee.estimated_fee.max_credits;
                } else {
                  if (tx_fee.estimated_fee.max_credits >= tx_fee.estimated_fee.execution_credits) tx_fee.required_credits = tx_fee.estimated_fee.max_credits + credits_transferred; // because of "Insufficient funds for gas * price + value" web3 error
                  else {
                    tx_fee.required_credits = tx_fee.estimated_fee.total_credits; // won't go through because will reach gas limit

                    tx_fee.limit_overdraft = true;
                  }
                }

                _context66.next = 81;
                return this._getUnitsFromCredits(session, currency, tx_fee.required_credits);

              case 81:
                tx_fee.required_units = _context66.sent;
                return _context66.abrupt("return", tx_fee);

              case 83:
              case "end":
                return _context66.stop();
            }
          }
        }, _callee66, this);
      }));

      function computeTransactionFee(_x197, _x198, _x199, _x200, _x201) {
        return _computeTransactionFee.apply(this, arguments);
      }

      return computeTransactionFee;
    }()
  }, {
    key: "canCompleteTransaction",
    value: function () {
      var _canCompleteTransaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee68(sessionuuid, walletuuid, carduuid, currencyuuid, tx_fee) {
        var _this = this;

        var feelevel,
            _args68 = arguments;
        return _regeneratorRuntime().wrap(function _callee68$(_context68) {
          while (1) {
            switch (_context68.prev = _context68.next) {
              case 0:
                feelevel = _args68.length > 5 && _args68[5] !== undefined ? _args68[5] : null;
                return _context68.abrupt("return", function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee67(tx_fee) {
                    var credits, global, _apicontrollers, session, wallet, currency, card, cardaccount, privatekey, tx_info, scheme_units_threshold, scheme_credits_threshold;

                    return _regeneratorRuntime().wrap(function _callee67$(_context67) {
                      while (1) {
                        switch (_context67.prev = _context67.next) {
                          case 0:
                            if (sessionuuid) {
                              _context67.next = 2;
                              break;
                            }

                            return _context67.abrupt("return", Promise.reject('session uuid is undefined'));

                          case 2:
                            if (walletuuid) {
                              _context67.next = 4;
                              break;
                            }

                            return _context67.abrupt("return", Promise.reject('wallet uuid is undefined'));

                          case 4:
                            if (currencyuuid) {
                              _context67.next = 6;
                              break;
                            }

                            return _context67.abrupt("return", Promise.reject('currency uuid is undefined'));

                          case 6:
                            if (carduuid) {
                              _context67.next = 8;
                              break;
                            }

                            return _context67.abrupt("return", Promise.reject('card uuid is undefined'));

                          case 8:
                            _context67.next = 10;
                            return _this.getCreditBalance(sessionuuid, walletuuid, carduuid, currencyuuid);

                          case 10:
                            credits = _context67.sent;
                            global = _this.global;
                            _apicontrollers = _this._getClientAPI();
                            _context67.next = 15;
                            return _apicontrollers.getSessionObject(sessionuuid);

                          case 15:
                            session = _context67.sent;

                            if (session) {
                              _context67.next = 18;
                              break;
                            }

                            return _context67.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

                          case 18:
                            _context67.next = 20;
                            return _apicontrollers.getWalletFromUUID(session, walletuuid);

                          case 20:
                            wallet = _context67.sent;

                            if (wallet) {
                              _context67.next = 23;
                              break;
                            }

                            return _context67.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

                          case 23:
                            _context67.next = 25;
                            return _this.getCurrencyFromUUID(sessionuuid, currencyuuid);

                          case 25:
                            currency = _context67.sent;

                            if (currency) {
                              _context67.next = 28;
                              break;
                            }

                            return _context67.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

                          case 28:
                            _context67.next = 30;
                            return wallet.getCardFromUUID(carduuid);

                          case 30:
                            card = _context67.sent;

                            if (card) {
                              _context67.next = 33;
                              break;
                            }

                            return _context67.abrupt("return", Promise.reject('could not find card ' + carduuid));

                          case 33:
                            // can the card send transactions
                            cardaccount = card._getSessionAccountObject();

                            if (cardaccount) {
                              _context67.next = 36;
                              break;
                            }

                            return _context67.abrupt("return", false);

                          case 36:
                            privatekey = cardaccount.getPrivateKey();

                            if (privatekey) {
                              _context67.next = 39;
                              break;
                            }

                            return _context67.abrupt("return", false);

                          case 39:
                            _context67.next = 41;
                            return _this.computeTransactionFee(sessionuuid, walletuuid, carduuid, currencyuuid, tx_fee, feelevel);

                          case 41:
                            tx_fee = _context67.sent;

                            if (!(tx_fee.estimated_fee.execution_credits > tx_fee.estimated_fee.max_credits)) {
                              _context67.next = 44;
                              break;
                            }

                            return _context67.abrupt("return", false);

                          case 44:
                            if (!(credits.transactionunits < tx_fee.required_units)) {
                              _context67.next = 46;
                              break;
                            }

                            return _context67.abrupt("return", false);

                          case 46:
                            // check
                            tx_info = tx_fee.tx_info;
                            scheme_units_threshold = tx_info.units_threshold;
                            scheme_credits_threshold = tx_info.credits_threshold;

                            if (!(scheme_credits_threshold > credits.transactioncredits)) {
                              _context67.next = 56;
                              break;
                            }

                            if (!(tx_fee.threshold_enforced === true)) {
                              _context67.next = 55;
                              break;
                            }

                            tx_fee.required_units = scheme_credits_threshold;
                            return _context67.abrupt("return", false);

                          case 55:
                            tx_fee.threshold_unmet = true;

                          case 56:
                            return _context67.abrupt("return", true);

                          case 57:
                          case "end":
                            return _context67.stop();
                        }
                      }
                    }, _callee67);
                  }));

                  return function (_x207) {
                    return _ref.apply(this, arguments);
                  };
                }()(tx_fee));

              case 2:
              case "end":
                return _context68.stop();
            }
          }
        }, _callee68);
      }));

      function canCompleteTransaction(_x202, _x203, _x204, _x205, _x206) {
        return _canCompleteTransaction.apply(this, arguments);
      }

      return canCompleteTransaction;
    }()
  }, {
    key: "topUpCard",
    value: function () {
      var _topUpCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee69(sessionuuid, walletuuid, carduuid, currencyuuid) {
        var _apicontrollers, session, wallet, currency, card, address, ethnodeserver, childsession, topinfo;

        return _regeneratorRuntime().wrap(function _callee69$(_context69) {
          while (1) {
            switch (_context69.prev = _context69.next) {
              case 0:
                if (sessionuuid) {
                  _context69.next = 2;
                  break;
                }

                return _context69.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context69.next = 4;
                  break;
                }

                return _context69.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (carduuid) {
                  _context69.next = 6;
                  break;
                }

                return _context69.abrupt("return", Promise.reject('card uuid is undefined'));

              case 6:
                if (currencyuuid) {
                  _context69.next = 8;
                  break;
                }

                return _context69.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 8:
                _apicontrollers = this._getClientAPI();
                _context69.next = 11;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 11:
                session = _context69.sent;
                _context69.next = 14;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 14:
                wallet = _context69.sent;
                _context69.next = 17;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 17:
                currency = _context69.sent;

                if (currency) {
                  _context69.next = 20;
                  break;
                }

                return _context69.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 20:
                _context69.next = 22;
                return wallet.getCardFromUUID(carduuid);

              case 22:
                card = _context69.sent;
                address = card.getAddress();
                _context69.next = 26;
                return this._getCurrencyEthNodeServer(session, currency);

              case 26:
                ethnodeserver = _context69.sent;
                _context69.next = 29;
                return this._getMonitoredCurrencySession(session, wallet, currency);

              case 29:
                childsession = _context69.sent;
                _context69.next = 32;
                return new Promise(function (resolve, reject) {
                  var restconnection = childsession.createRestConnection(ethnodeserver.rest_server_url, ethnodeserver.rest_server_api_path);

                  if (restconnection) {
                    if (restconnection._isReady()) {
                      var resource = "/faucet/topup/" + address;
                      restconnection.rest_get(resource, function (err, res) {
                        var data = res ? res['data'] : null;

                        if (data) {
                          resolve(data);
                        } else {
                          reject('rest error calling ' + resource + ' : ' + err);
                        }
                      });
                    } else {
                      reject('rest connection can not issue a faucet request');
                    }
                  } else {
                    reject('no rest server to receive faucet request');
                  }
                });

              case 32:
                topinfo = _context69.sent;
                return _context69.abrupt("return", topinfo);

              case 34:
              case "end":
                return _context69.stop();
            }
          }
        }, _callee69, this);
      }));

      function topUpCard(_x208, _x209, _x210, _x211) {
        return _topUpCard.apply(this, arguments);
      }

      return topUpCard;
    }()
  }, {
    key: "_createCurrencyFee",
    value: function () {
      var _createCurrencyFee2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee70(session, currency, feelevel) {
        var global, _apicontrollers, fee;

        return _regeneratorRuntime().wrap(function _callee70$(_context70) {
          while (1) {
            switch (_context70.prev = _context70.next) {
              case 0:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                fee = _apicontrollers.createFee(feelevel);

                if (!currency) {
                  _context70.next = 10;
                  break;
                }

                _context70.next = 6;
                return this._getGasLimit(session, currency, feelevel);

              case 6:
                fee.gaslimit = _context70.sent;
                _context70.next = 9;
                return this._getGasPrice(session, currency, feelevel);

              case 9:
                fee.gasPrice = _context70.sent;

              case 10:
                return _context70.abrupt("return", fee);

              case 11:
              case "end":
                return _context70.stop();
            }
          }
        }, _callee70, this);
      }));

      function _createCurrencyFee(_x212, _x213, _x214) {
        return _createCurrencyFee2.apply(this, arguments);
      }

      return _createCurrencyFee;
    }()
  }, {
    key: "_transferTransactionUnits",
    value: function () {
      var _transferTransactionUnits2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee71(session, wallet, currency, fromaccount, toaddress, units, feelevel) {
        var global, _apicontrollers, childsession, transactioninfo, transaction, ethnodemodule, weiamount, ethamount, valuestring, fee, txhash;

        return _regeneratorRuntime().wrap(function _callee71$(_context71) {
          while (1) {
            switch (_context71.prev = _context71.next) {
              case 0:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context71.next = 4;
                return this._getMonitoredCurrencySession(session, wallet, currency);

              case 4:
                childsession = _context71.sent;
                _context71.next = 7;
                return this.getCurrencyTransactionContext(session.getSessionUUID(), currency.uuid, feelevel);

              case 7:
                transactioninfo = _context71.sent;
                // create transaction object
                transaction = _apicontrollers.createEthereumTransaction(childsession, fromaccount); // parameters

                ethnodemodule = global.getModuleObject('ethnode');
                weiamount = ethnodemodule.getWeiFromEther(transactioninfo.avg_transaction_fee);
                _context71.next = 13;
                return this._createDecimalAmount(childsession, weiamount, 18);

              case 13:
                ethamount = _context71.sent;
                ethamount.multiply(units);
                _context71.next = 17;
                return ethamount.toFixedString();

              case 17:
                valuestring = _context71.sent;
                transaction.setToAddress(toaddress);
                transaction.setValue(valuestring); // fee

                _context71.next = 22;
                return this._createCurrencyFee(session, currency, feelevel);

              case 22:
                fee = _context71.sent;
                transaction.setGas(fee.gaslimit);
                transaction.setGasPrice(fee.gasPrice);
                _context71.next = 27;
                return _apicontrollers.sendEthereumTransaction(childsession, transaction)["catch"](function (err) {
                  console.log('error in transferTransactionUnits: ' + err);
                });

              case 27:
                txhash = _context71.sent;

                if (txhash) {
                  _context71.next = 30;
                  break;
                }

                return _context71.abrupt("return", Promise.reject('could not send ethereum transaction'));

              case 30:
                return _context71.abrupt("return", txhash);

              case 31:
              case "end":
                return _context71.stop();
            }
          }
        }, _callee71, this);
      }));

      function _transferTransactionUnits(_x215, _x216, _x217, _x218, _x219, _x220, _x221) {
        return _transferTransactionUnits2.apply(this, arguments);
      }

      return _transferTransactionUnits;
    }()
  }, {
    key: "transferTransactionUnits",
    value: function () {
      var _transferTransactionUnits3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee72(sessionuuid, walletuuid, cardfromuuid, currencyuuid, cardtouuid, units) {
        var feelevel,
            global,
            _apicontrollers,
            session,
            wallet,
            currency,
            fromcard,
            tocard,
            fromaccount,
            toaddress,
            _args72 = arguments;

        return _regeneratorRuntime().wrap(function _callee72$(_context72) {
          while (1) {
            switch (_context72.prev = _context72.next) {
              case 0:
                feelevel = _args72.length > 6 && _args72[6] !== undefined ? _args72[6] : null;

                if (sessionuuid) {
                  _context72.next = 3;
                  break;
                }

                return _context72.abrupt("return", Promise.reject('session uuid is undefined'));

              case 3:
                if (walletuuid) {
                  _context72.next = 5;
                  break;
                }

                return _context72.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 5:
                if (cardfromuuid) {
                  _context72.next = 7;
                  break;
                }

                return _context72.abrupt("return", Promise.reject('from card uuid is undefined'));

              case 7:
                if (cardtouuid) {
                  _context72.next = 9;
                  break;
                }

                return _context72.abrupt("return", Promise.reject('to card uuid is undefined'));

              case 9:
                if (currencyuuid) {
                  _context72.next = 11;
                  break;
                }

                return _context72.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 11:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context72.next = 15;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 15:
                session = _context72.sent;

                if (session) {
                  _context72.next = 18;
                  break;
                }

                return _context72.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 18:
                _context72.next = 20;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 20:
                wallet = _context72.sent;

                if (wallet) {
                  _context72.next = 23;
                  break;
                }

                return _context72.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 23:
                _context72.next = 25;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 25:
                currency = _context72.sent;

                if (currency) {
                  _context72.next = 28;
                  break;
                }

                return _context72.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 28:
                _context72.next = 30;
                return wallet.getCardFromUUID(cardfromuuid);

              case 30:
                fromcard = _context72.sent;

                if (fromcard) {
                  _context72.next = 33;
                  break;
                }

                return _context72.abrupt("return", Promise.reject('could not find card ' + cardfromuuid));

              case 33:
                _context72.next = 35;
                return wallet.getCardFromUUID(cardtouuid);

              case 35:
                tocard = _context72.sent;

                if (tocard) {
                  _context72.next = 38;
                  break;
                }

                return _context72.abrupt("return", Promise.reject('could not find card ' + cardtouuid));

              case 38:
                fromaccount = fromcard._getSessionAccountObject();

                if (fromaccount) {
                  _context72.next = 41;
                  break;
                }

                return _context72.abrupt("return", Promise.reject('card has no private key ' + cardfromuuid));

              case 41:
                toaddress = tocard.getAddress();
                return _context72.abrupt("return", this._transferTransactionUnits(session, wallet, currency, fromaccount, toaddress, units, feelevel));

              case 43:
              case "end":
                return _context72.stop();
            }
          }
        }, _callee72, this);
      }));

      function transferTransactionUnits(_x222, _x223, _x224, _x225, _x226, _x227) {
        return _transferTransactionUnits3.apply(this, arguments);
      }

      return transferTransactionUnits;
    }()
  }, {
    key: "sendTransactionUnits",
    value: function () {
      var _sendTransactionUnits = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee73(sessionuuid, walletuuid, cardfromuuid, currencyuuid, toaddress, units) {
        var feelevel,
            global,
            _apicontrollers,
            session,
            wallet,
            currency,
            fromcard,
            fromaccount,
            _args73 = arguments;

        return _regeneratorRuntime().wrap(function _callee73$(_context73) {
          while (1) {
            switch (_context73.prev = _context73.next) {
              case 0:
                feelevel = _args73.length > 6 && _args73[6] !== undefined ? _args73[6] : null;

                if (sessionuuid) {
                  _context73.next = 3;
                  break;
                }

                return _context73.abrupt("return", Promise.reject('session uuid is undefined'));

              case 3:
                if (walletuuid) {
                  _context73.next = 5;
                  break;
                }

                return _context73.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 5:
                if (cardfromuuid) {
                  _context73.next = 7;
                  break;
                }

                return _context73.abrupt("return", Promise.reject('card uuid is undefined'));

              case 7:
                if (currencyuuid) {
                  _context73.next = 9;
                  break;
                }

                return _context73.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 9:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context73.next = 13;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 13:
                session = _context73.sent;

                if (session) {
                  _context73.next = 16;
                  break;
                }

                return _context73.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 16:
                _context73.next = 18;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 18:
                wallet = _context73.sent;

                if (wallet) {
                  _context73.next = 21;
                  break;
                }

                return _context73.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 21:
                _context73.next = 23;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 23:
                currency = _context73.sent;

                if (currency) {
                  _context73.next = 26;
                  break;
                }

                return _context73.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 26:
                _context73.next = 28;
                return wallet.getCardFromUUID(cardfromuuid);

              case 28:
                fromcard = _context73.sent;

                if (fromcard) {
                  _context73.next = 31;
                  break;
                }

                return _context73.abrupt("return", Promise.reject('could not find card ' + cardfromuuid));

              case 31:
                fromaccount = fromcard._getSessionAccountObject(); //return mvcclientwalletmodule.transferSchemeTransactionUnits(sessionuuid, walletuuid, schemeuuid, fromprivatekey, toaddress, units, feelevel);

                return _context73.abrupt("return", this._transferTransactionUnits(session, wallet, currency, fromaccount, toaddress, units, feelevel));

              case 33:
              case "end":
                return _context73.stop();
            }
          }
        }, _callee73, this);
      }));

      function sendTransactionUnits(_x228, _x229, _x230, _x231, _x232, _x233) {
        return _sendTransactionUnits.apply(this, arguments);
      }

      return sendTransactionUnits;
    }()
  }, {
    key: "canPayAmount",
    value: function () {
      var _canPayAmount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee74(sessionuuid, walletuuid, carduuid, currencyuuid, amount, tx_fee) {
        var feelevel,
            global,
            mvcclientwalletmodule,
            _apicontrollers,
            session,
            wallet,
            currency,
            card,
            cardaccount,
            privatekey,
            _tx_fee,
            _feelevel,
            canspend,
            currencyposition,
            tokenamountmax,
            _args74 = arguments;

        return _regeneratorRuntime().wrap(function _callee74$(_context74) {
          while (1) {
            switch (_context74.prev = _context74.next) {
              case 0:
                feelevel = _args74.length > 6 && _args74[6] !== undefined ? _args74[6] : null;

                if (sessionuuid) {
                  _context74.next = 3;
                  break;
                }

                return _context74.abrupt("return", Promise.reject('session uuid is undefined'));

              case 3:
                if (walletuuid) {
                  _context74.next = 5;
                  break;
                }

                return _context74.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 5:
                if (carduuid) {
                  _context74.next = 7;
                  break;
                }

                return _context74.abrupt("return", Promise.reject('card uuid is undefined'));

              case 7:
                if (currencyuuid) {
                  _context74.next = 9;
                  break;
                }

                return _context74.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 9:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                _apicontrollers = this._getClientAPI();
                _context74.next = 14;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 14:
                session = _context74.sent;

                if (session) {
                  _context74.next = 17;
                  break;
                }

                return _context74.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 17:
                _context74.next = 19;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 19:
                wallet = _context74.sent;

                if (wallet) {
                  _context74.next = 22;
                  break;
                }

                return _context74.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 22:
                _context74.next = 24;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 24:
                currency = _context74.sent;

                if (currency) {
                  _context74.next = 27;
                  break;
                }

                return _context74.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 27:
                _context74.next = 29;
                return wallet.getCardFromUUID(carduuid);

              case 29:
                card = _context74.sent;

                if (card) {
                  _context74.next = 32;
                  break;
                }

                return _context74.abrupt("return", Promise.reject('could not find a card for currency ' + currencyuuid));

              case 32:
                // can the card send transactions
                cardaccount = card._getSessionAccountObject();

                if (cardaccount) {
                  _context74.next = 35;
                  break;
                }

                return _context74.abrupt("return", false);

              case 35:
                privatekey = cardaccount.getPrivateKey();

                if (privatekey) {
                  _context74.next = 38;
                  break;
                }

                return _context74.abrupt("return", false);

              case 38:
                if (!(currency.ops.cantxfree !== true)) {
                  _context74.next = 52;
                  break;
                }

                _tx_fee = tx_fee ? tx_fee : {
                  transferred_credit_units: 0,
                  estimated_cost_units: 3
                };

                if (!feelevel) {
                  _context74.next = 44;
                  break;
                }

                _feelevel = feelevel;
                _context74.next = 47;
                break;

              case 44:
                _context74.next = 46;
                return this.getRecommendedFeeLevel(sessionuuid, walletuuid, carduuid, _tx_fee);

              case 46:
                _feelevel = _context74.sent;

              case 47:
                _context74.next = 49;
                return this.canCompleteTransaction(sessionuuid, walletuuid, carduuid, _tx_fee, _feelevel)["catch"](function (err) {});

              case 49:
                canspend = _context74.sent;

                if (canspend) {
                  _context74.next = 52;
                  break;
                }

                return _context74.abrupt("return", false);

              case 52:
                _context74.next = 54;
                return this.getCurrencyPosition(sessionuuid, walletuuid, currencyuuid, carduuid);

              case 54:
                currencyposition = _context74.sent;
                _context74.next = 57;
                return currencyposition.toInteger();

              case 57:
                tokenamountmax = _context74.sent;

                if (!(amount > tokenamountmax)) {
                  _context74.next = 60;
                  break;
                }

                return _context74.abrupt("return", false);

              case 60:
                return _context74.abrupt("return", true);

              case 61:
              case "end":
                return _context74.stop();
            }
          }
        }, _callee74, this);
      }));

      function canPayAmount(_x234, _x235, _x236, _x237, _x238, _x239) {
        return _canPayAmount.apply(this, arguments);
      }

      return canPayAmount;
    }()
  }, {
    key: "payAmount",
    value: function () {
      var _payAmount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee75(sessionuuid, walletuuid, carduuid, toaddress, currencyuuid, amount) {
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
            _args75 = arguments;

        return _regeneratorRuntime().wrap(function _callee75$(_context75) {
          while (1) {
            switch (_context75.prev = _context75.next) {
              case 0:
                feelevel = _args75.length > 6 && _args75[6] !== undefined ? _args75[6] : null;

                if (sessionuuid) {
                  _context75.next = 3;
                  break;
                }

                return _context75.abrupt("return", Promise.reject('session uuid is undefined'));

              case 3:
                if (walletuuid) {
                  _context75.next = 5;
                  break;
                }

                return _context75.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 5:
                if (carduuid) {
                  _context75.next = 7;
                  break;
                }

                return _context75.abrupt("return", Promise.reject('card uuid is undefined'));

              case 7:
                if (currencyuuid) {
                  _context75.next = 9;
                  break;
                }

                return _context75.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 9:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                _apicontrollers = this._getClientAPI();
                _context75.next = 14;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 14:
                session = _context75.sent;

                if (session) {
                  _context75.next = 17;
                  break;
                }

                return _context75.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 17:
                _context75.next = 19;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 19:
                wallet = _context75.sent;

                if (wallet) {
                  _context75.next = 22;
                  break;
                }

                return _context75.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 22:
                _context75.next = 24;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 24:
                currency = _context75.sent;

                if (currency) {
                  _context75.next = 27;
                  break;
                }

                return _context75.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 27:
                _context75.next = 29;
                return wallet.getCardFromUUID(carduuid);

              case 29:
                card = _context75.sent;

                if (card) {
                  _context75.next = 32;
                  break;
                }

                return _context75.abrupt("return", Promise.reject('could not find a card for currency ' + currencyuuid));

              case 32:
                _context75.next = 34;
                return this._getCurrencyOps(session, currency);

              case 34:
                ops = _context75.sent;

                if (!(ops.cantxfree !== true && ops.cantopup === true)) {
                  _context75.next = 40;
                  break;
                }

                _context75.next = 38;
                return mvcclientwalletmodule.topUpCard(sessionuuid, walletuuid, carduuid)["catch"](function (err) {
                  console.log('error in payAndReport: ' + err);
                });

              case 38:
                topupinfo = _context75.sent;

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

                _context75.next = 45;
                return this._getMonitoredCardSession(session, wallet, card);

              case 45:
                cardsession = _context75.sent;
                fromaccount = card._getSessionAccountObject();
                _context75.next = 49;
                return this._getCurrencyScheme(session, currency);

              case 49:
                scheme = _context75.sent;
                _context75.next = 52;
                return this._getCurrencyWeb3ProviderUrl(session, currency);

              case 52:
                providerurl = _context75.sent;
                _context75.next = 55;
                return _apicontrollers.createSchemeFee(scheme, feelevel);

              case 55:
                fee = _context75.sent;
                value = 0;
                _context75.next = 59;
                return this.getCreditBalance(sessionuuid, walletuuid, carduuid, currencyuuid)["catch"](function (err) {
                  console.log('error in payAmount: ' + err);
                });

              case 59:
                credits = _context75.sent;
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


                _context75.next = 66;
                return this._createMonitoredEthereumTransaction(wallet, card, cardsession, fromaccount);

              case 66:
                ethtx = _context75.sent;
                ethtx.setToAddress(toaddress);
                ethtx.setGas(fee.gaslimit);
                ethtx.setGasPrice(fee.gasPrice);
                ethtx.setValue(value);
                _context75.next = 73;
                return _apicontrollers.transferERC20Tokens(cardsession, providerurl, tokenaddress, tokenamount_string, ethtx);

              case 73:
                txhash = _context75.sent;
                return _context75.abrupt("return", txhash);

              case 75:
              case "end":
                return _context75.stop();
            }
          }
        }, _callee75, this);
      }));

      function payAmount(_x240, _x241, _x242, _x243, _x244, _x245) {
        return _payAmount.apply(this, arguments);
      }

      return payAmount;
    }()
  }, {
    key: "payAndReport",
    value: function () {
      var _payAndReport = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee76(sessionuuid, walletuuid, toaddress, currencyuuid, amount) {
        var global, mvcclientwalletmodule, _apicontrollers, session, currency, cardinfo, txhash, currency_provider, paymenturl;

        return _regeneratorRuntime().wrap(function _callee76$(_context76) {
          while (1) {
            switch (_context76.prev = _context76.next) {
              case 0:
                if (sessionuuid) {
                  _context76.next = 2;
                  break;
                }

                return _context76.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (currencyuuid) {
                  _context76.next = 4;
                  break;
                }

                return _context76.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 4:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                _apicontrollers = this._getClientAPI();
                _context76.next = 9;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 9:
                session = _context76.sent;

                if (session) {
                  _context76.next = 12;
                  break;
                }

                return _context76.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 12:
                _context76.next = 14;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 14:
                currency = _context76.sent;

                if (currency) {
                  _context76.next = 17;
                  break;
                }

                return _context76.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 17:
                _context76.next = 19;
                return this.getCurrencyCard(sessionuuid, walletuuid, currencyuuid);

              case 19:
                cardinfo = _context76.sent;

                if (cardinfo) {
                  _context76.next = 22;
                  break;
                }

                return _context76.abrupt("return", Promise.reject('could not find a card for currency ' + currencyuuid));

              case 22:
                _context76.next = 24;
                return this.payAmount(sessionuuid, walletuuid, cardinfo.uuid, toaddress, currencyuuid, amount);

              case 24:
                txhash = _context76.sent;
                _context76.next = 27;
                return this._getCurrencyProvider(session, currency);

              case 27:
                currency_provider = _context76.sent;

                if (currency_provider) {
                  _context76.next = 30;
                  break;
                }

                return _context76.abrupt("return", Promise.reject('currency has no provider'));

              case 30:
                paymenturl = currency_provider.getPaymentUrl(txhash);
                return _context76.abrupt("return", paymenturl);

              case 32:
              case "end":
                return _context76.stop();
            }
          }
        }, _callee76, this);
      }));

      function payAndReport(_x246, _x247, _x248, _x249, _x250) {
        return _payAndReport.apply(this, arguments);
      }

      return payAndReport;
    }()
  }, {
    key: "getCurrencyTotalSupply",
    value: function () {
      var _getCurrencyTotalSupply = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee77(sessionuuid, walletuuid, currencyuuid) {
        var global, _apicontrollers, session, wallet, currency, currenciesmodule, childsession, tokenaddress, erc20token, totalsupply;

        return _regeneratorRuntime().wrap(function _callee77$(_context77) {
          while (1) {
            switch (_context77.prev = _context77.next) {
              case 0:
                if (sessionuuid) {
                  _context77.next = 2;
                  break;
                }

                return _context77.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context77.next = 4;
                  break;
                }

                return _context77.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (currencyuuid) {
                  _context77.next = 6;
                  break;
                }

                return _context77.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 6:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context77.next = 10;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 10:
                session = _context77.sent;

                if (session) {
                  _context77.next = 13;
                  break;
                }

                return _context77.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 13:
                _context77.next = 15;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 15:
                wallet = _context77.sent;

                if (wallet) {
                  _context77.next = 18;
                  break;
                }

                return _context77.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 18:
                _context77.next = 20;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 20:
                currency = _context77.sent;

                if (currency) {
                  _context77.next = 23;
                  break;
                }

                return _context77.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 23:
                currenciesmodule = global.getModuleObject('currencies');
                _context77.next = 26;
                return this._getMonitoredCurrencySession(session, wallet, currency);

              case 26:
                childsession = _context77.sent;
                tokenaddress = currency.address;
                _context77.next = 30;
                return _apicontrollers.importERC20Token(childsession, tokenaddress);

              case 30:
                erc20token = _context77.sent;
                _context77.next = 33;
                return erc20token.getChainTotalSupply();

              case 33:
                totalsupply = _context77.sent;
                return _context77.abrupt("return", totalsupply);

              case 35:
              case "end":
                return _context77.stop();
            }
          }
        }, _callee77, this);
      }));

      function getCurrencyTotalSupply(_x251, _x252, _x253) {
        return _getCurrencyTotalSupply.apply(this, arguments);
      }

      return getCurrencyTotalSupply;
    }()
  }, {
    key: "_getAddressFromTokenUUID",
    value: function () {
      var _getAddressFromTokenUUID2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee78(session, wallet, card, tokenuuid) {
        var global, erc20tokenaccount, token, tokenaccountsession, erc20tokencontract, contractinterface, contractinstance, ethereumnodeaccessinstance, tokenaddress;
        return _regeneratorRuntime().wrap(function _callee78$(_context78) {
          while (1) {
            switch (_context78.prev = _context78.next) {
              case 0:
                global = this.global;

                if (!card.isLocked()) {
                  _context78.next = 4;
                  break;
                }

                _context78.next = 4;
                return card.unlock();

              case 4:
                _context78.next = 6;
                return card.importTokenAccount(tokenuuid);

              case 6:
                erc20tokenaccount = _context78.sent;

                if (erc20tokenaccount) {
                  _context78.next = 9;
                  break;
                }

                return _context78.abrupt("return", Promise.reject('could not find token ' + tokenuuid));

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


                _context78.next = 19;
                return contractinterface.getAddressFromTransactionUUID(tokenuuid);

              case 19:
                tokenaddress = _context78.sent;
                return _context78.abrupt("return", tokenaddress);

              case 21:
              case "end":
                return _context78.stop();
            }
          }
        }, _callee78, this);
      }));

      function _getAddressFromTokenUUID(_x254, _x255, _x256, _x257) {
        return _getAddressFromTokenUUID2.apply(this, arguments);
      }

      return _getAddressFromTokenUUID;
    }()
  }, {
    key: "importCurrencyFromTokenUUID",
    value: function () {
      var _importCurrencyFromTokenUUID = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee79(sessionuuid, walletuuid, carduuid, tokenuuid) {
        var global, _apicontrollers, session, wallet, card, tokenaddress;

        return _regeneratorRuntime().wrap(function _callee79$(_context79) {
          while (1) {
            switch (_context79.prev = _context79.next) {
              case 0:
                if (sessionuuid) {
                  _context79.next = 2;
                  break;
                }

                return _context79.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context79.next = 4;
                  break;
                }

                return _context79.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (carduuid) {
                  _context79.next = 6;
                  break;
                }

                return _context79.abrupt("return", Promise.reject('card uuid is undefined'));

              case 6:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context79.next = 10;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 10:
                session = _context79.sent;

                if (session) {
                  _context79.next = 13;
                  break;
                }

                return _context79.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 13:
                _context79.next = 15;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 15:
                wallet = _context79.sent;

                if (wallet) {
                  _context79.next = 18;
                  break;
                }

                return _context79.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 18:
                _context79.next = 20;
                return wallet.getCardFromUUID(carduuid);

              case 20:
                card = _context79.sent;

                if (card) {
                  _context79.next = 23;
                  break;
                }

                return _context79.abrupt("return", Promise.reject('could not find card ' + carduuid));

              case 23:
                _context79.next = 25;
                return this._getAddressFromTokenUUID(session, wallet, card, tokenuuid);

              case 25:
                tokenaddress = _context79.sent;

                if (tokenaddress) {
                  _context79.next = 28;
                  break;
                }

                return _context79.abrupt("return", Promise.reject('could not find address for token ' + tokenuuid));

              case 28:
                return _context79.abrupt("return", this.importCurrencyFromTokenAddress(sessionuuid, walletuuid, carduuid, tokenaddress));

              case 29:
              case "end":
                return _context79.stop();
            }
          }
        }, _callee79, this);
      }));

      function importCurrencyFromTokenUUID(_x258, _x259, _x260, _x261) {
        return _importCurrencyFromTokenUUID.apply(this, arguments);
      }

      return importCurrencyFromTokenUUID;
    }()
  }, {
    key: "importCurrencyFromTokenAddress",
    value: function () {
      var _importCurrencyFromTokenAddress = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee80(sessionuuid, walletuuid, carduuid, tokenaddress) {
        var global, _apicontrollers, session, wallet, card, cardsession, erc20token_contract, currency, currencyuuid;

        return _regeneratorRuntime().wrap(function _callee80$(_context80) {
          while (1) {
            switch (_context80.prev = _context80.next) {
              case 0:
                if (sessionuuid) {
                  _context80.next = 2;
                  break;
                }

                return _context80.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context80.next = 4;
                  break;
                }

                return _context80.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (carduuid) {
                  _context80.next = 6;
                  break;
                }

                return _context80.abrupt("return", Promise.reject('card uuid is undefined'));

              case 6:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context80.next = 10;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 10:
                session = _context80.sent;

                if (session) {
                  _context80.next = 13;
                  break;
                }

                return _context80.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 13:
                _context80.next = 15;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 15:
                wallet = _context80.sent;

                if (wallet) {
                  _context80.next = 18;
                  break;
                }

                return _context80.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 18:
                _context80.next = 20;
                return wallet.getCardFromUUID(carduuid);

              case 20:
                card = _context80.sent;

                if (card) {
                  _context80.next = 23;
                  break;
                }

                return _context80.abrupt("return", Promise.reject('could not find card ' + carduuid));

              case 23:
                _context80.next = 25;
                return this._getMonitoredCardSession(session, wallet, card);

              case 25:
                cardsession = _context80.sent;
                _context80.next = 28;
                return _apicontrollers.importERC20Token(cardsession, tokenaddress);

              case 28:
                erc20token_contract = _context80.sent;
                currency = {
                  uuid: session.guid(),
                  address: tokenaddress,
                  xtra_data: {
                    origin: 'import-from-token-address'
                  }
                };
                _context80.next = 32;
                return erc20token_contract.getChainName();

              case 32:
                currency.name = _context80.sent;
                _context80.next = 35;
                return erc20token_contract.getChainSymbol();

              case 35:
                currency.symbol = _context80.sent;
                _context80.next = 38;
                return erc20token_contract.getChainDecimals();

              case 38:
                currency.decimals = _context80.sent;
                currency.scheme_uuid = card.getSchemeUUID();
                currency.ops = {
                  canpay: true
                };
                currency.provider = 'provider.js'; // save currency

                _context80.next = 44;
                return this.saveLocalCurrency(sessionuuid, currency);

              case 44:
                // make card as a currency card for this new currency
                currencyuuid = currency.uuid;
                _context80.next = 47;
                return this.makeCurrencyCard(sessionuuid, walletuuid, currencyuuid, carduuid);

              case 47:
                return _context80.abrupt("return", currency);

              case 48:
              case "end":
                return _context80.stop();
            }
          }
        }, _callee80, this);
      }));

      function importCurrencyFromTokenAddress(_x262, _x263, _x264, _x265) {
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
      var _getCurrencyCardList3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee81(sessionuuid, walletuuid, currencyuuid) {
        var currency, global, _apicontrollers, session, wallet, scheme_config_list, cards, mvcclientwalletmodule, array, i, carduuid, cardinfo;

        return _regeneratorRuntime().wrap(function _callee81$(_context81) {
          while (1) {
            switch (_context81.prev = _context81.next) {
              case 0:
                if (sessionuuid) {
                  _context81.next = 2;
                  break;
                }

                return _context81.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context81.next = 4;
                  break;
                }

                return _context81.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (currencyuuid) {
                  _context81.next = 6;
                  break;
                }

                return _context81.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 6:
                _context81.next = 8;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 8:
                currency = _context81.sent;

                if (currency) {
                  _context81.next = 11;
                  break;
                }

                return _context81.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 11:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context81.next = 15;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 15:
                session = _context81.sent;

                if (session) {
                  _context81.next = 18;
                  break;
                }

                return _context81.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 18:
                _context81.next = 20;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 20:
                wallet = _context81.sent;

                if (wallet) {
                  _context81.next = 23;
                  break;
                }

                return _context81.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 23:
                _context81.next = 25;
                return _apicontrollers.getSchemeConfigList(session, true);

              case 25:
                scheme_config_list = _context81.sent;
                _context81.next = 28;
                return this._getCurrencyCardList(session, wallet, currency)["catch"](function (err) {});

              case 28:
                cards = _context81.sent;
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

                return _context81.abrupt("return", array);

              case 33:
              case "end":
                return _context81.stop();
            }
          }
        }, _callee81, this);
      }));

      function getCurrencyCardList(_x266, _x267, _x268) {
        return _getCurrencyCardList3.apply(this, arguments);
      }

      return getCurrencyCardList;
    }()
  }, {
    key: "getCurrencySchemeInfo",
    value: function () {
      var _getCurrencySchemeInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee82(sessionuuid, currencyuuid) {
        var currency, global, _apicontrollers, session, scheme, mvcclientwalletmodule, schemeinfo;

        return _regeneratorRuntime().wrap(function _callee82$(_context82) {
          while (1) {
            switch (_context82.prev = _context82.next) {
              case 0:
                if (sessionuuid) {
                  _context82.next = 2;
                  break;
                }

                return _context82.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (currencyuuid) {
                  _context82.next = 4;
                  break;
                }

                return _context82.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 4:
                _context82.next = 6;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 6:
                currency = _context82.sent;

                if (currency) {
                  _context82.next = 9;
                  break;
                }

                return _context82.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 9:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context82.next = 13;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 13:
                session = _context82.sent;

                if (session) {
                  _context82.next = 16;
                  break;
                }

                return _context82.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 16:
                _context82.next = 18;
                return this._getCurrencyScheme(session, currency);

              case 18:
                scheme = _context82.sent;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                schemeinfo = {
                  uuid: scheme.getSchemeUUID()
                };

                mvcclientwalletmodule._fillSchemeInfoFromScheme(schemeinfo, scheme);

                return _context82.abrupt("return", schemeinfo);

              case 23:
              case "end":
                return _context82.stop();
            }
          }
        }, _callee82, this);
      }));

      function getCurrencySchemeInfo(_x269, _x270) {
        return _getCurrencySchemeInfo.apply(this, arguments);
      }

      return getCurrencySchemeInfo;
    }()
  }, {
    key: "getPretradeSchemeInfo",
    value: function () {
      var _getPretradeSchemeInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee83(sessionuuid, currencyuuid) {
        var currency, global, _apicontrollers, session, pretradescheme, mvcclientwalletmodule, pretradeschemeinfo;

        return _regeneratorRuntime().wrap(function _callee83$(_context83) {
          while (1) {
            switch (_context83.prev = _context83.next) {
              case 0:
                if (sessionuuid) {
                  _context83.next = 2;
                  break;
                }

                return _context83.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (currencyuuid) {
                  _context83.next = 4;
                  break;
                }

                return _context83.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 4:
                _context83.next = 6;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 6:
                currency = _context83.sent;

                if (currency) {
                  _context83.next = 9;
                  break;
                }

                return _context83.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 9:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context83.next = 13;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 13:
                session = _context83.sent;

                if (session) {
                  _context83.next = 16;
                  break;
                }

                return _context83.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 16:
                _context83.next = 18;
                return this._getPretradeScheme(session, currency);

              case 18:
                pretradescheme = _context83.sent;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                pretradeschemeinfo = {
                  uuid: pretradescheme.getSchemeUUID()
                };

                mvcclientwalletmodule._fillSchemeInfoFromScheme(pretradeschemeinfo, pretradescheme);

                return _context83.abrupt("return", pretradeschemeinfo);

              case 23:
              case "end":
                return _context83.stop();
            }
          }
        }, _callee83, this);
      }));

      function getPretradeSchemeInfo(_x271, _x272) {
        return _getPretradeSchemeInfo.apply(this, arguments);
      }

      return getPretradeSchemeInfo;
    }()
  }, {
    key: "getPretradeWeb3Url",
    value: function () {
      var _getPretradeWeb3Url = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee84(sessionuuid, currencyuuid) {
        var pretrade_schemeinfo, pretrade_web3providerurl;
        return _regeneratorRuntime().wrap(function _callee84$(_context84) {
          while (1) {
            switch (_context84.prev = _context84.next) {
              case 0:
                _context84.next = 2;
                return this.getPretradeSchemeInfo(sessionuuid, currencyuuid);

              case 2:
                pretrade_schemeinfo = _context84.sent;
                pretrade_web3providerurl = pretrade_schemeinfo.network.ethnodeserver.web3_provider_url;
                return _context84.abrupt("return", pretrade_web3providerurl);

              case 5:
              case "end":
                return _context84.stop();
            }
          }
        }, _callee84, this);
      }));

      function getPretradeWeb3Url(_x273, _x274) {
        return _getPretradeWeb3Url.apply(this, arguments);
      }

      return getPretradeWeb3Url;
    }()
  }, {
    key: "_getCardsOnScheme",
    value: function () {
      var _getCardsOnScheme2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee85(wallet, scheme) {
        var bRefresh,
            schemeuuid,
            cardlist,
            array,
            i,
            card,
            _args85 = arguments;
        return _regeneratorRuntime().wrap(function _callee85$(_context85) {
          while (1) {
            switch (_context85.prev = _context85.next) {
              case 0:
                bRefresh = _args85.length > 2 && _args85[2] !== undefined ? _args85[2] : true;
                schemeuuid = scheme.getSchemeUUID();
                _context85.next = 4;
                return wallet.getCardList(bRefresh);

              case 4:
                cardlist = _context85.sent;
                array = [];

                for (i = 0; i < (cardlist ? cardlist.length : 0); i++) {
                  card = cardlist[i];
                  if (card.getSchemeUUID() === schemeuuid) array.push(card);
                }

                return _context85.abrupt("return", array);

              case 8:
              case "end":
                return _context85.stop();
            }
          }
        }, _callee85);
      }));

      function _getCardsOnScheme(_x275, _x276) {
        return _getCardsOnScheme2.apply(this, arguments);
      }

      return _getCardsOnScheme;
    }()
  }, {
    key: "getPretradeCard",
    value: function () {
      var _getPretradeCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee86(sessionuuid, walletuuid, carduuid, currencyuuid) {
        var global, mvcclientwalletmodule, _apicontrollers, session, wallet, card, currency, pretradecardinfo, pretradescheme, cards, i, pretradecard, canPretradeCardSign, canCardSign, _pretradecard, pretrade_schemeinfo, _privatekey;

        return _regeneratorRuntime().wrap(function _callee86$(_context86) {
          while (1) {
            switch (_context86.prev = _context86.next) {
              case 0:
                if (sessionuuid) {
                  _context86.next = 2;
                  break;
                }

                return _context86.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context86.next = 4;
                  break;
                }

                return _context86.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (carduuid) {
                  _context86.next = 6;
                  break;
                }

                return _context86.abrupt("return", Promise.reject('card uuid is undefined'));

              case 6:
                if (currencyuuid) {
                  _context86.next = 8;
                  break;
                }

                return _context86.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 8:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                _apicontrollers = this._getClientAPI();
                _context86.next = 13;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 13:
                session = _context86.sent;

                if (session) {
                  _context86.next = 16;
                  break;
                }

                return _context86.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 16:
                _context86.next = 18;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 18:
                wallet = _context86.sent;

                if (wallet) {
                  _context86.next = 21;
                  break;
                }

                return _context86.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 21:
                _context86.next = 23;
                return wallet.getCardFromUUID(carduuid)["catch"](function (err) {});

              case 23:
                card = _context86.sent;

                if (card) {
                  _context86.next = 26;
                  break;
                }

                return _context86.abrupt("return", Promise.reject('could not find card ' + carduuid));

              case 26:
                _context86.next = 28;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 28:
                currency = _context86.sent;

                if (currency) {
                  _context86.next = 31;
                  break;
                }

                return _context86.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 31:
                _context86.next = 33;
                return this._getPretradeScheme(session, currency);

              case 33:
                pretradescheme = _context86.sent;
                _context86.next = 36;
                return this._getCardsOnScheme(wallet, pretradescheme, true)["catch"](function (err) {
                  console.log('error in getPretradeCard: ' + err);
                });

              case 36:
                cards = _context86.sent;

                if (!cards) {
                  _context86.next = 55;
                  break;
                }

                i = 0;

              case 39:
                if (!(i < cards.length)) {
                  _context86.next = 55;
                  break;
                }

                pretradecard = cards[i];

                if (!pretradecard.isLocked()) {
                  _context86.next = 44;
                  break;
                }

                _context86.next = 44;
                return pretradecard.unlock();

              case 44:
                _context86.next = 46;
                return pretradecard.canSign();

              case 46:
                canPretradeCardSign = _context86.sent;

                if (!(canPretradeCardSign === true)) {
                  _context86.next = 52;
                  break;
                }

                _context86.next = 50;
                return mvcclientwalletmodule.getCardInfo(sessionuuid, walletuuid, pretradecard.getCardUUID());

              case 50:
                pretradecardinfo = _context86.sent;
                return _context86.abrupt("break", 55);

              case 52:
                i++;
                _context86.next = 39;
                break;

              case 55:
                if (pretradecardinfo) {
                  _context86.next = 95;
                  break;
                }

                if (!card.isLocked()) {
                  _context86.next = 59;
                  break;
                }

                _context86.next = 59;
                return card.unlock();

              case 59:
                _context86.next = 61;
                return card.canSign();

              case 61:
                canCardSign = _context86.sent;

                if (!(canCardSign === true)) {
                  _context86.next = 82;
                  break;
                }

                _context86.next = 65;
                return this.getPretradeSchemeInfo(sessionuuid, currencyuuid);

              case 65:
                pretrade_schemeinfo = _context86.sent;

                if (!(pretrade_schemeinfo.uuid != card.getSchemeUUID())) {
                  _context86.next = 72;
                  break;
                }

                _context86.next = 69;
                return mvcclientwalletmodule.cloneCard(sessionuuid, walletuuid, carduuid, pretrade_schemeinfo.uuid);

              case 69:
                pretradecardinfo = _context86.sent;
                _context86.next = 75;
                break;

              case 72:
                _context86.next = 74;
                return mvcclientwalletmodule.getCardInfo(sessionuuid, walletuuid, carduuid);

              case 74:
                pretradecardinfo = _context86.sent;

              case 75:
                if (pretradecardinfo) {
                  _context86.next = 77;
                  break;
                }

                return _context86.abrupt("return", Promise.reject('could not clone or pick the main card for pretrade use'));

              case 77:
                _context86.next = 79;
                return wallet.getCardFromUUID(pretradecardinfo.uuid);

              case 79:
                _pretradecard = _context86.sent;
                _context86.next = 88;
                break;

              case 82:
                // main card is read-only, we can not use a clone or the card itself
                //return Promise.reject('card is read-only, can not create corresponding pretrade card');
                // let's create a card on the fly
                _privatekey = _apicontrollers.generatePrivateKey(session);
                _context86.next = 85;
                return _apicontrollers.createWalletCard(session, wallet, pretradescheme, _privatekey);

              case 85:
                _pretradecard = _context86.sent;

                if (_pretradecard) {
                  _context86.next = 88;
                  break;
                }

                return _context86.abrupt("return", Promise.reject('could not generate a pretrade card'));

              case 88:
                if (_pretradecard) {
                  _context86.next = 90;
                  break;
                }

                return _context86.abrupt("return", Promise.reject('could not create a pretrade card'));

              case 90:
                _context86.next = 92;
                return this.setPretradeCard(sessionuuid, walletuuid, currencyuuid, _pretradecard.uuid);

              case 92:
                _context86.next = 94;
                return mvcclientwalletmodule.getCardInfo(sessionuuid, walletuuid, _pretradecard.uuid);

              case 94:
                pretradecardinfo = _context86.sent;

              case 95:
                if (pretradecardinfo) {
                  _context86.next = 97;
                  break;
                }

                return _context86.abrupt("return", Promise.reject('could not find a card to register transactions'));

              case 97:
                return _context86.abrupt("return", pretradecardinfo);

              case 98:
              case "end":
                return _context86.stop();
            }
          }
        }, _callee86, this);
      }));

      function getPretradeCard(_x277, _x278, _x279, _x280) {
        return _getPretradeCard.apply(this, arguments);
      }

      return getPretradeCard;
    }()
  }, {
    key: "setPretradeCard",
    value: function () {
      var _setPretradeCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee87(sessionuuid, walletuuid, currencyuuid, carduuid) {
        var global, _apicontrollers, session, wallet, currency, card, pretradescheme, cards, i, _card, xtradata;

        return _regeneratorRuntime().wrap(function _callee87$(_context87) {
          while (1) {
            switch (_context87.prev = _context87.next) {
              case 0:
                if (sessionuuid) {
                  _context87.next = 2;
                  break;
                }

                return _context87.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context87.next = 4;
                  break;
                }

                return _context87.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (currencyuuid) {
                  _context87.next = 6;
                  break;
                }

                return _context87.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 6:
                if (carduuid) {
                  _context87.next = 8;
                  break;
                }

                return _context87.abrupt("return", Promise.reject('card uuid is undefined'));

              case 8:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context87.next = 12;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 12:
                session = _context87.sent;

                if (session) {
                  _context87.next = 15;
                  break;
                }

                return _context87.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 15:
                _context87.next = 17;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 17:
                wallet = _context87.sent;

                if (wallet) {
                  _context87.next = 20;
                  break;
                }

                return _context87.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 20:
                _context87.next = 22;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 22:
                currency = _context87.sent;

                if (currency) {
                  _context87.next = 25;
                  break;
                }

                return _context87.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 25:
                _context87.next = 27;
                return wallet.getCardFromUUID(carduuid);

              case 27:
                card = _context87.sent;

                if (card) {
                  _context87.next = 30;
                  break;
                }

                return _context87.abrupt("return", Promise.reject('could not find card ' + carduuid));

              case 30:
                _context87.next = 32;
                return this._getPretradeScheme(session, currency);

              case 32:
                pretradescheme = _context87.sent;
                _context87.next = 35;
                return this._getCardsOnScheme(wallet, pretradescheme, true)["catch"](function (err) {
                  console.log('error in getPretradeCard: ' + err);
                });

              case 35:
                cards = _context87.sent;

                if (!cards) {
                  _context87.next = 61;
                  break;
                }

                i = 0;

              case 38:
                if (!(i < (cards ? cards.length : 0))) {
                  _context87.next = 61;
                  break;
                }

                _card = cards[i];
                xtradata = _card.getXtraData('myquote');

                if (!(xtradata && xtradata.pretradecard === true)) {
                  _context87.next = 49;
                  break;
                }

                // remove flag
                xtradata.pretradecard = false;

                _card.putXtraData('myquote', xtradata);

                if (!_card.isLocked()) {
                  _context87.next = 47;
                  break;
                }

                _context87.next = 47;
                return _card.unlock();

              case 47:
                _context87.next = 49;
                return _card.save();

              case 49:
                if (!(_card.getCardUUID() === carduuid)) {
                  _context87.next = 58;
                  break;
                }

                xtradata = xtradata ? xtradata : {};
                xtradata.pretradecard = true;

                _card.putXtraData('myquote', xtradata);

                if (!_card.isLocked()) {
                  _context87.next = 56;
                  break;
                }

                _context87.next = 56;
                return _card.unlock();

              case 56:
                _context87.next = 58;
                return _card.save();

              case 58:
                i++;
                _context87.next = 38;
                break;

              case 61:
              case "end":
                return _context87.stop();
            }
          }
        }, _callee87, this);
      }));

      function setPretradeCard(_x281, _x282, _x283, _x284) {
        return _setPretradeCard.apply(this, arguments);
      }

      return setPretradeCard;
    }() //
    // uniswap
    //

  }, {
    key: "getPriceForCreditUnits",
    value: function () {
      var _getPriceForCreditUnits = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee88(sessionuuid, currencyuuid, creditunits) {
        var global, _apicontrollers, session, currency, swapmodule, scheme, ethnodemodule, avg_transaction_fee, weiamount, ethamount, ethcredit, uniswap_v2, token, weth, pricing, priceamount, price_struct;

        return _regeneratorRuntime().wrap(function _callee88$(_context88) {
          while (1) {
            switch (_context88.prev = _context88.next) {
              case 0:
                if (sessionuuid) {
                  _context88.next = 2;
                  break;
                }

                return _context88.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (currencyuuid) {
                  _context88.next = 4;
                  break;
                }

                return _context88.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 4:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context88.next = 8;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 8:
                session = _context88.sent;

                if (session) {
                  _context88.next = 11;
                  break;
                }

                return _context88.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 11:
                _context88.next = 13;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 13:
                currency = _context88.sent;

                if (currency) {
                  _context88.next = 16;
                  break;
                }

                return _context88.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 16:
                swapmodule = global.getModuleObject('uniswap');
                _context88.next = 19;
                return this._getCurrencyScheme(session, currency);

              case 19:
                scheme = _context88.sent;
                // compute corresponding ethereum credits
                ethnodemodule = global.getModuleObject('ethnode');
                _context88.next = 23;
                return this._getAverageTransactionFee(session, currency);

              case 23:
                avg_transaction_fee = _context88.sent;
                weiamount = ethnodemodule.getWeiFromEther(avg_transaction_fee);
                _context88.next = 27;
                return this._createDecimalAmount(session, weiamount, 18);

              case 27:
                ethamount = _context88.sent;
                ethamount.multiply(creditunits);
                _context88.next = 31;
                return ethamount.toInteger();

              case 31:
                ethcredit = _context88.sent;
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
                _context88.next = 46;
                return swapmodule.getPriceForOutput(session, scheme, token, weth, ethcredit, uniswap_v2);

              case 46:
                pricing = _context88.sent;
                priceamount = pricing.amounts_in ? pricing.amounts_in[0] : null;
                price_struct = {};
                price_struct.creditunits_requested = creditunits;
                _context88.next = 52;
                return this._createCurrencyAmount(session, currency, priceamount ? priceamount : -1);

              case 52:
                price_struct.currency_amount = _context88.sent;
                return _context88.abrupt("return", price_struct);

              case 54:
              case "end":
                return _context88.stop();
            }
          }
        }, _callee88, this);
      }));

      function getPriceForCreditUnits(_x285, _x286, _x287) {
        return _getPriceForCreditUnits.apply(this, arguments);
      }

      return getPriceForCreditUnits;
    }()
  }, {
    key: "buyCreditUnits",
    value: function () {
      var _buyCreditUnits = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee89(sessionuuid, walletuuid, carduuid, currencyuuid, creditunits) {
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
            tx_hash,
            _args89 = arguments;

        return _regeneratorRuntime().wrap(function _callee89$(_context89) {
          while (1) {
            switch (_context89.prev = _context89.next) {
              case 0:
                feelevel = _args89.length > 5 && _args89[5] !== undefined ? _args89[5] : null;

                if (sessionuuid) {
                  _context89.next = 3;
                  break;
                }

                return _context89.abrupt("return", Promise.reject('session uuid is undefined'));

              case 3:
                if (walletuuid) {
                  _context89.next = 5;
                  break;
                }

                return _context89.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 5:
                if (carduuid) {
                  _context89.next = 7;
                  break;
                }

                return _context89.abrupt("return", Promise.reject('card uuid is undefined'));

              case 7:
                if (currencyuuid) {
                  _context89.next = 9;
                  break;
                }

                return _context89.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 9:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                _apicontrollers = this._getClientAPI();
                _context89.next = 14;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 14:
                session = _context89.sent;

                if (session) {
                  _context89.next = 17;
                  break;
                }

                return _context89.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 17:
                _context89.next = 19;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 19:
                wallet = _context89.sent;

                if (wallet) {
                  _context89.next = 22;
                  break;
                }

                return _context89.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 22:
                _context89.next = 24;
                return wallet.getCardFromUUID(carduuid);

              case 24:
                card = _context89.sent;

                if (card) {
                  _context89.next = 27;
                  break;
                }

                return _context89.abrupt("return", Promise.reject('could not find card ' + carduuid));

              case 27:
                _context89.next = 29;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 29:
                currency = _context89.sent;

                if (currency) {
                  _context89.next = 32;
                  break;
                }

                return _context89.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 32:
                swapmodule = global.getModuleObject('uniswap');
                _context89.next = 35;
                return this._getCurrencyScheme(session, currency);

              case 35:
                scheme = _context89.sent;
                _context89.next = 38;
                return this._getMonitoredCardSession(session, wallet, card);

              case 38:
                cardsession = _context89.sent;
                fromaccount = card._getSessionAccountObject(); // compute corresponding ethereum credits

                ethnodemodule = global.getModuleObject('ethnode');
                _context89.next = 43;
                return this._getAverageTransactionFee(session, currency);

              case 43:
                avg_transaction_fee = _context89.sent;
                weiamount = ethnodemodule.getWeiFromEther(avg_transaction_fee);
                _context89.next = 47;
                return this._createDecimalAmount(session, weiamount, 18);

              case 47:
                ethamount = _context89.sent;
                ethamount.multiply(creditunits);
                _context89.next = 51;
                return ethamount.toInteger();

              case 51:
                ethcredit = _context89.sent;
                // token info
                uniswap_v2 = currency.uniswap_v2;
                uniswap_v2.version = 'uniswap_v2';
                token = {};
                token.name = currency.name;
                token.address = currency.address;
                token.symbol = currency.symbol;
                token.decimals = currency.decimals;
                _context89.next = 61;
                return this.getCurrencyPosition(sessionuuid, walletuuid, currencyuuid, carduuid);

              case 61:
                currencyposition = _context89.sent;
                _context89.next = 64;
                return currencyposition.toInteger();

              case 64:
                tokenamountmax = _context89.sent;
                weth = {};
                weth.name = uniswap_v2.gas_name;
                weth.address = uniswap_v2.gas_address;
                weth.symbol = uniswap_v2.gas_symbol;
                weth.decimals = uniswap_v2.gas_decimals; // create ethereum transaction object
                //var ethtx = _apicontrollers.createEthereumTransaction(cardsession, fromaccount);

                _context89.next = 72;
                return this._createMonitoredEthereumTransaction(wallet, card, cardsession, fromaccount);

              case 72:
                ethtx = _context89.sent;
                ethtx.setToAddress(fromaccount.getAddress()); // ask to send credits to card
                // fee

                _context89.next = 76;
                return _apicontrollers.createSchemeFee(scheme, feelevel);

              case 76:
                fee = _context89.sent;
                ethtx.setGas(fee.gaslimit);
                ethtx.setGasPrice(fee.gasPrice); // send swap request

                _context89.next = 81;
                return swapmodule.buyEthOnOutput(cardsession, scheme, token, tokenamountmax, weth, ethcredit, uniswap_v2, ethtx);

              case 81:
                tx_hash = _context89.sent;
                return _context89.abrupt("return", tx_hash);

              case 83:
              case "end":
                return _context89.stop();
            }
          }
        }, _callee89, this);
      }));

      function buyCreditUnits(_x288, _x289, _x290, _x291, _x292) {
        return _buyCreditUnits.apply(this, arguments);
      }

      return buyCreditUnits;
    }() //
    // utils
    //

  }, {
    key: "_unformatAmount",
    value: function () {
      var _unformatAmount2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee90(session, amountstring, decimals) {
        var _amountstring, index, split, amountnumberstring, multiplier, i, integerstring;

        return _regeneratorRuntime().wrap(function _callee90$(_context90) {
          while (1) {
            switch (_context90.prev = _context90.next) {
              case 0:
                if (!(amountstring === undefined)) {
                  _context90.next = 2;
                  break;
                }

                return _context90.abrupt("return");

              case 2:
                _amountstring = amountstring.trim(); // remove trailing symbol if some

                index = _amountstring.indexOf(' ');
                if (index > 0) _amountstring = _amountstring.substring(0, index);

                if (!(!_amountstring || isNaN(_amountstring))) {
                  _context90.next = 7;
                  break;
                }

                return _context90.abrupt("return", -1);

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

                return _context90.abrupt("return", amountnumberstring);

              case 10:
              case "end":
                return _context90.stop();
            }
          }
        }, _callee90);
      }));

      function _unformatAmount(_x293, _x294, _x295) {
        return _unformatAmount2.apply(this, arguments);
      }

      return _unformatAmount;
    }()
  }, {
    key: "_formatAmount",
    value: function () {
      var _formatAmount2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee91(session, amount, decimals, options) {
        var _inputamountstring, amountstring, integerpart, leading, i, decimalsshown;

        return _regeneratorRuntime().wrap(function _callee91$(_context91) {
          while (1) {
            switch (_context91.prev = _context91.next) {
              case 0:
                if (!(amount === undefined)) {
                  _context91.next = 2;
                  break;
                }

                return _context91.abrupt("return");

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

                return _context91.abrupt("return", amountstring);

              case 6:
              case "end":
                return _context91.stop();
            }
          }
        }, _callee91);
      }));

      function _formatAmount(_x296, _x297, _x298, _x299) {
        return _formatAmount2.apply(this, arguments);
      }

      return _formatAmount;
    }()
  }, {
    key: "_formatMonetaryAmount",
    value: function () {
      var _formatMonetaryAmount2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee92(session, amount, symbol, decimals, options) {
        var amountstring;
        return _regeneratorRuntime().wrap(function _callee92$(_context92) {
          while (1) {
            switch (_context92.prev = _context92.next) {
              case 0:
                _context92.next = 2;
                return this._formatAmount(session, amount, decimals, options);

              case 2:
                amountstring = _context92.sent;
                return _context92.abrupt("return", amountstring + ' ' + symbol);

              case 4:
              case "end":
                return _context92.stop();
            }
          }
        }, _callee92, this);
      }));

      function _formatMonetaryAmount(_x300, _x301, _x302, _x303, _x304) {
        return _formatMonetaryAmount2.apply(this, arguments);
      }

      return _formatMonetaryAmount;
    }()
  }, {
    key: "_formatTokenAmount",
    value: function () {
      var _formatTokenAmount2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee93(session, tokenamount, token, options) {
        var erc20contrat, decimals, symbol, amountstring;
        return _regeneratorRuntime().wrap(function _callee93$(_context93) {
          while (1) {
            switch (_context93.prev = _context93.next) {
              case 0:
                // TODO: unsupported calls that would need to be
                // wrapped up in a token.init function
                erc20contrat = token._getERC20TokenContract(session); // necessary for _synchronize

                _context93.next = 3;
                return token._synchronizeERC20TokenContract(session);

              case 3:
                // TODO: end
                decimals = token.getDecimals();
                symbol = token.getSymbol();
                _context93.next = 7;
                return this._formatMonetaryAmount(session, tokenamount, symbol, decimals, options);

              case 7:
                amountstring = _context93.sent;
                return _context93.abrupt("return", amountstring);

              case 9:
              case "end":
                return _context93.stop();
            }
          }
        }, _callee93, this);
      }));

      function _formatTokenAmount(_x305, _x306, _x307, _x308) {
        return _formatTokenAmount2.apply(this, arguments);
      }

      return _formatTokenAmount;
    }()
  }, {
    key: "getDecimalAmount",
    value: function () {
      var _getDecimalAmount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee94(sessionuuid, amount) {
        var decimals,
            global,
            _apicontrollers,
            session,
            _args94 = arguments;

        return _regeneratorRuntime().wrap(function _callee94$(_context94) {
          while (1) {
            switch (_context94.prev = _context94.next) {
              case 0:
                decimals = _args94.length > 2 && _args94[2] !== undefined ? _args94[2] : 18;

                if (sessionuuid) {
                  _context94.next = 3;
                  break;
                }

                return _context94.abrupt("return", Promise.reject('session uuid is undefined'));

              case 3:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context94.next = 7;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 7:
                session = _context94.sent;

                if (session) {
                  _context94.next = 10;
                  break;
                }

                return _context94.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 10:
                return _context94.abrupt("return", this._createDecimalAmount(session, amount, decimals));

              case 11:
              case "end":
                return _context94.stop();
            }
          }
        }, _callee94, this);
      }));

      function getDecimalAmount(_x309, _x310) {
        return _getDecimalAmount.apply(this, arguments);
      }

      return getDecimalAmount;
    }()
  }, {
    key: "getCurrencyAmount",
    value: function () {
      var _getCurrencyAmount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee95(sessionuuid, currencyuuid, amount) {
        var global, _apicontrollers, mvcclientwalletmodule, session, currency, decimals, tokenamountstring, isFloat, amountstring;

        return _regeneratorRuntime().wrap(function _callee95$(_context95) {
          while (1) {
            switch (_context95.prev = _context95.next) {
              case 0:
                if (sessionuuid) {
                  _context95.next = 2;
                  break;
                }

                return _context95.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (currencyuuid) {
                  _context95.next = 4;
                  break;
                }

                return _context95.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 4:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                _context95.next = 9;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 9:
                session = _context95.sent;

                if (session) {
                  _context95.next = 12;
                  break;
                }

                return _context95.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 12:
                _context95.next = 14;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 14:
                currency = _context95.sent;

                if (currency) {
                  _context95.next = 17;
                  break;
                }

                return _context95.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 17:
                decimals = currency.decimals;

                if (!(typeof amount === 'string')) {
                  _context95.next = 24;
                  break;
                }

                _context95.next = 21;
                return this._unformatAmount(session, amount, decimals);

              case 21:
                tokenamountstring = _context95.sent;
                _context95.next = 37;
                break;

              case 24:
                if (!Number.isInteger(amount)) {
                  _context95.next = 28;
                  break;
                }

                tokenamountstring = mvcclientwalletmodule.formatAmount(amount, decimals);
                _context95.next = 37;
                break;

              case 28:
                isFloat = function isFloat(n) {
                  return Number(n) === n && n % 1 !== 0;
                };

                if (!isFloat(amount)) {
                  _context95.next = 36;
                  break;
                }

                amountstring = amount.toString();
                _context95.next = 33;
                return this._unformatAmount(session, amountstring, decimals);

              case 33:
                tokenamountstring = _context95.sent;
                _context95.next = 37;
                break;

              case 36:
                return _context95.abrupt("return", Promise.reject('amount is not correct: ' + amount));

              case 37:
                return _context95.abrupt("return", this._createCurrencyAmount(session, currency, tokenamountstring));

              case 38:
              case "end":
                return _context95.stop();
            }
          }
        }, _callee95, this);
      }));

      function getCurrencyAmount(_x311, _x312, _x313) {
        return _getCurrencyAmount.apply(this, arguments);
      }

      return getCurrencyAmount;
    }()
  }, {
    key: "formatCurrencyAmount",
    value: function () {
      var _formatCurrencyAmount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee96(sessionuuid, currencyuuid, currencyamount, options) {
        var global, CurrencyAmountClass, _apicontrollers, session, currency, _options, tokenamountstring, currencyamountstring;

        return _regeneratorRuntime().wrap(function _callee96$(_context96) {
          while (1) {
            switch (_context96.prev = _context96.next) {
              case 0:
                global = this.global;

                if (sessionuuid) {
                  _context96.next = 3;
                  break;
                }

                return _context96.abrupt("return", Promise.reject('session uuid is undefined'));

              case 3:
                if (currencyuuid) {
                  _context96.next = 5;
                  break;
                }

                return _context96.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 5:
                CurrencyAmountClass = global.getModuleClass('currencies', 'CurrencyAmount');

                if (!(currencyamount instanceof CurrencyAmountClass !== true)) {
                  _context96.next = 8;
                  break;
                }

                return _context96.abrupt("return", Promise.reject('wrong currency amount type'));

              case 8:
                _apicontrollers = this._getClientAPI();
                _context96.next = 11;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 11:
                session = _context96.sent;

                if (session) {
                  _context96.next = 14;
                  break;
                }

                return _context96.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 14:
                _context96.next = 16;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 16:
                currency = _context96.sent;

                if (currency) {
                  _context96.next = 19;
                  break;
                }

                return _context96.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 19:
                _options = options ? options : {
                  showdecimals: true,
                  decimalsshown: 2
                };
                _context96.next = 22;
                return currencyamount.toString();

              case 22:
                tokenamountstring = _context96.sent;
                _context96.next = 25;
                return this._formatMonetaryAmount(session, tokenamountstring, currency.symbol, currency.decimals, _options);

              case 25:
                currencyamountstring = _context96.sent;
                return _context96.abrupt("return", currencyamountstring);

              case 27:
              case "end":
                return _context96.stop();
            }
          }
        }, _callee96, this);
      }));

      function formatCurrencyAmount(_x314, _x315, _x316, _x317) {
        return _formatCurrencyAmount.apply(this, arguments);
      }

      return formatCurrencyAmount;
    }()
  }], [{
    key: "DEFAULT_GAS_LIMIT",
    get: function get() {
      return 4850000;
    }
  }, {
    key: "DEFAULT_GAS_PRICE",
    get: function get() {
      return 10000000000;
    }
  }, {
    key: "DEFAULT_GAS_UNIT",
    get: function get() {
      return 21000;
    }
  }, {
    key: "AVG_TRANSACTION_FEE",
    get: function get() {
      return 0.00021;
    }
  }, {
    key: "TRANSACTION_UNITS_MIN",
    get: function get() {
      return 240;
    }
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