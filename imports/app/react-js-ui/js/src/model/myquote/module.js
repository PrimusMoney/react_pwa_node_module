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

    this.name = 'mvc-myquote';
    this.current_version = "1.01.1.2020.12.05";
    this.global = null; // put by global on registration

    this.app = null;
    this.controllers = null;
    this.isready = false;
    this.isloading = false;
    this.clientapicontrollers = null; // API gateway
    // operation

    this.contract_path_root_uri = null;
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
      var modulescriptloader = parentscriptloader.getChildLoader('mvcmyquoteloader');
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
      var global = this.global; // initialization
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
      var mvcmodule = global.getModuleObject('mvc');
      this.clientapicontrollers = mvcmodule._getClientAPI();
      return this.clientapicontrollers;
    } //
    // hooks
    //
    //
    // API
    //
    // Client config

  }, {
    key: "getClientExecutionEnvironment",
    value: function getClientExecutionEnvironment() {
      var global = this.global;
      var mvcmodule = global.getModuleObject('mvc');
      return mvcmodule.getClientExecutionEnvironment();
    }
  }, {
    key: "initProdEnvironment",
    value: function () {
      var _initProdEnvironment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var global, mvcmodule;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                return _context.abrupt("return", mvcmodule.initProdEnvironment());

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function initProdEnvironment() {
        return _initProdEnvironment.apply(this, arguments);
      }

      return initProdEnvironment;
    }()
  }, {
    key: "initDevEnvironment",
    value: function () {
      var _initDevEnvironment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var global, mvcmodule;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                return _context2.abrupt("return", mvcmodule.initDevEnvironment());

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function initDevEnvironment() {
        return _initDevEnvironment.apply(this, arguments);
      }

      return initDevEnvironment;
    }()
  }, {
    key: "setContractPathRootUri",
    value: function () {
      var _setContractPathRootUri = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(rooturi) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.contract_path_root_uri = rooturi;

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function setContractPathRootUri(_x) {
        return _setContractPathRootUri.apply(this, arguments);
      }

      return setContractPathRootUri;
    }()
  }, {
    key: "t",
    value: function t(string) {
      var global = this.global;
      var mvcmodule = global.getModuleObject('mvc');
      return mvcmodule.t(string);
    } // events

  }, {
    key: "signalEvent",
    value: function signalEvent(eventname, params) {
      var global = this.global;
      var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
      return mvcclientwalletmodule.signalEvent(eventname, params);
    }
  }, {
    key: "registerEventListener",
    value: function registerEventListener(eventname, listerneruuid, callback) {
      var global = this.global;
      var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
      return mvcclientwalletmodule.registerEventListener(eventname, listerneruuid, callback);
    }
  }, {
    key: "unregisterEventListener",
    value: function unregisterEventListener(eventname, listerneruuid) {
      var global = this.global;
      var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
      return mvcclientwalletmodule.unregisterEventListener(eventname, listerneruuid);
    } //
    // Network
    //

  }, {
    key: "_getXMLHttpRequestClass",
    value: function _getXMLHttpRequestClass() {
      if (typeof XMLHttpRequest !== 'undefined' && XMLHttpRequest) {
        return XMLHttpRequest;
      } else if (typeof window !== 'undefined' && window) {
        // normally (browser or react native), XMLHttpRequest should be directly accessible
        if (typeof window.XMLHttpRequest !== 'undefined') return window.XMLHttpRequest;else if (typeof window.simplestore !== 'undefined' && typeof window.simplestore.XMLHttpRequest !== 'undefined') return window.simplestore.XMLHttpRequest;
      } else if (typeof global !== 'undefined' && typeof global.simplestore !== 'undefined' && typeof global.simplestore.XMLHttpRequest !== 'undefined') {
        return global.simplestore.XMLHttpRequest;
      } else {
        throw 'can not find XMLHttpRequest class!!!';
      }
    }
  }, {
    key: "checkOnline",
    value: function () {
      var _checkOnline = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _this = this;

        var isOnline, global, _apicontrollers, clientmodule, remote_networks, remote_network_list, network, resturl, json;

        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                isOnline = true; // assume unless proven wrong by a rest call

                global = this.global;
                _apicontrollers = this._getClientAPI();
                clientmodule = global.getModuleObject('webclient');
                remote_networks = clientmodule.getBuiltinRemoteNetworks();
                remote_network_list = Object.values(remote_networks);

                if (!(remote_network_list && remote_network_list.length > 0)) {
                  _context4.next = 13;
                  break;
                }

                network = remote_network_list[0];

                if (!network.restserver.rest_server_url) {
                  _context4.next = 13;
                  break;
                }

                // make a rest call to see if we get a proper answer
                resturl = network.restserver.rest_server_url + (network.restserver.rest_server_api_path ? network.restserver.rest_server_api_path : '');
                _context4.next = 12;
                return new Promise(function (resolve, reject) {
                  var _XMLHttpRequest = _this._getXMLHttpRequestClass();

                  var xhttp = new _XMLHttpRequest();
                  xhttp.open('GET', resturl, true);
                  xhttp.setRequestHeader("Content-type", "application/json");
                  xhttp.send();

                  xhttp.onload = function (e) {
                    if (xhttp.status == 200) {
                      var res = {};

                      try {
                        res = JSON.parse(xhttp.responseText);
                      } catch (e) {}

                      resolve(res);
                    } else {
                      reject('wrong result');
                    }
                  };

                  xhttp.onerror = function (e) {
                    reject('rest error is ' + xhttp.statusText);
                  };
                })["catch"](function (err) {
                  isOnline = false;
                });

              case 12:
                json = _context4.sent;

              case 13:
                return _context4.abrupt("return", isOnline);

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function checkOnline() {
        return _checkOnline.apply(this, arguments);
      }

      return checkOnline;
    }() //
    // Storage
    //
    // Settings

  }, {
    key: "readSettings",
    value: function () {
      var _readSettings = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(keys, defaultvalue) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context5.abrupt("return", mvcclientwalletmodule.readSettings(keys, defaultvalue));

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function readSettings(_x2, _x3) {
        return _readSettings.apply(this, arguments);
      }

      return readSettings;
    }()
  }, {
    key: "putSettings",
    value: function () {
      var _putSettings = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(keys, json) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context6.abrupt("return", mvcclientwalletmodule.putSettings(keys, json));

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function putSettings(_x4, _x5) {
        return _putSettings.apply(this, arguments);
      }

      return putSettings;
    }() //
    // Crypto functions
    //

  }, {
    key: "isValidAddress",
    value: function () {
      var _isValidAddress = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(sessionuuid, address) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context7.abrupt("return", mvcclientwalletmodule.isValidAddress(sessionuuid, address));

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function isValidAddress(_x6, _x7) {
        return _isValidAddress.apply(this, arguments);
      }

      return isValidAddress;
    }()
  }, {
    key: "generatePrivateKey",
    value: function () {
      var _generatePrivateKey = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(sessionuuid) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context8.abrupt("return", mvcclientwalletmodule.generatePrivateKey(sessionuuid));

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function generatePrivateKey(_x8) {
        return _generatePrivateKey.apply(this, arguments);
      }

      return generatePrivateKey;
    }()
  }, {
    key: "isValidPrivateKey",
    value: function () {
      var _isValidPrivateKey = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(sessionuuid, privatekey) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context9.abrupt("return", mvcclientwalletmodule.isValidPrivateKey(sessionuuid, privatekey));

              case 3:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function isValidPrivateKey(_x9, _x10) {
        return _isValidPrivateKey.apply(this, arguments);
      }

      return isValidPrivateKey;
    }()
  }, {
    key: "areAddressesEqual",
    value: function () {
      var _areAddressesEqual = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(sessionuuid, address1, address2) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context10.abrupt("return", mvcclientwalletmodule.areAddressesEqual(sessionuuid, address1, address2));

              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function areAddressesEqual(_x11, _x12, _x13) {
        return _areAddressesEqual.apply(this, arguments);
      }

      return areAddressesEqual;
    }() //
    // Session functions
    //

  }, {
    key: "createChildSession",
    value: function () {
      var _createChildSession = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(sessionuuid) {
        var _apicontrollers, session, childsession;

        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (sessionuuid) {
                  _context11.next = 2;
                  break;
                }

                return _context11.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                _apicontrollers = this._getClientAPI();
                _context11.next = 5;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 5:
                session = _context11.sent;

                if (session) {
                  _context11.next = 8;
                  break;
                }

                return _context11.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 8:
                _context11.next = 10;
                return _apicontrollers.createChildSessionObject(session);

              case 10:
                childsession = _context11.sent;

                if (childsession) {
                  _context11.next = 13;
                  break;
                }

                return _context11.abrupt("return", Promise.reject('could not create child session'));

              case 13:
                childsession.MYQUOTE = this.current_version;
                return _context11.abrupt("return", childsession.getSessionUUID());

              case 15:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function createChildSession(_x14) {
        return _createChildSession.apply(this, arguments);
      }

      return createChildSession;
    }() // TODO: should use mvcmodule._getChildSessionOnWeb3Url for version >= 0.20.7
    // keep

  }, {
    key: "_getChildSessionOnWeb3Url",
    value: function () {
      var _getChildSessionOnWeb3Url2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(parentsession, web3providerurl) {
        var global, mvcmodule;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                return _context12.abrupt("return", mvcmodule._getChildSessionOnWeb3Url(parentsession, web3providerurl));

              case 3:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function _getChildSessionOnWeb3Url(_x15, _x16) {
        return _getChildSessionOnWeb3Url2.apply(this, arguments);
      }

      return _getChildSessionOnWeb3Url;
    }() // user

  }, {
    key: "getUserInfo",
    value: function () {
      var _getUserInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(sessionuuid) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context13.abrupt("return", mvcclientwalletmodule.getUserInfo(sessionuuid));

              case 3:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function getUserInfo(_x17) {
        return _getUserInfo.apply(this, arguments);
      }

      return getUserInfo;
    }()
  }, {
    key: "isValidEmailAddress",
    value: function () {
      var _isValidEmailAddress = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(sessionuuid, emailaddress) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context14.abrupt("return", mvcclientwalletmodule.isValidEmailAddress(sessionuuid, emailaddress));

              case 3:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function isValidEmailAddress(_x18, _x19) {
        return _isValidEmailAddress.apply(this, arguments);
      }

      return isValidEmailAddress;
    }() //
    // Storage
    //

  }, {
    key: "getLocalJsonLeaf",
    value: function () {
      var _getLocalJsonLeaf = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(sessionuuid, keys, bForceRefresh) {
        var global, mvcmodule;
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                return _context15.abrupt("return", mvcmodule.getLocalJsonLeaf(sessionuuid, keys, bForceRefresh));

              case 3:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function getLocalJsonLeaf(_x20, _x21, _x22) {
        return _getLocalJsonLeaf.apply(this, arguments);
      }

      return getLocalJsonLeaf;
    }()
  }, {
    key: "saveLocalJson",
    value: function () {
      var _saveLocalJson = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(sessionuuid, keys, json) {
        var global, mvcmodule;
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                return _context16.abrupt("return", mvcmodule.saveLocalJson(sessionuuid, keys, json));

              case 3:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function saveLocalJson(_x23, _x24, _x25) {
        return _saveLocalJson.apply(this, arguments);
      }

      return saveLocalJson;
    }() // TODO: should use _apicontrollers.readClientSideJson for version >= 0.20.8

  }, {
    key: "_readClientSideJson",
    value: function () {
      var _readClientSideJson2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(session, keys) {
        var clientAccess, result;
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                clientAccess = session.getClientStorageAccessInstance();
                result = new Promise(function (resolve, reject) {
                  clientAccess.readClientSideJson(keys, function (err, res) {
                    if (err) reject(err);else resolve(res);
                  }); // does not return a promise
                })["catch"](function (err) {
                  console.log('error in _readClientSideJson: ' + err);
                });
                return _context17.abrupt("return", result);

              case 3:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17);
      }));

      function _readClientSideJson(_x26, _x27) {
        return _readClientSideJson2.apply(this, arguments);
      }

      return _readClientSideJson;
    }() // TODO: should use _apicontrollers.saveClientSideJson for version >= 0.20.8

  }, {
    key: "_saveClientSideJson",
    value: function () {
      var _saveClientSideJson2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(session, keys, json) {
        var clientAccess, result;
        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                clientAccess = session.getClientStorageAccessInstance();
                result = new Promise(function (resolve, reject) {
                  clientAccess.saveClientSideJson(keys, json, function (err, res) {
                    if (err) reject(err);else resolve(res);
                  }); // does not return a promise
                });
                return _context18.abrupt("return", result);

              case 3:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18);
      }));

      function _saveClientSideJson(_x28, _x29, _x30) {
        return _saveClientSideJson2.apply(this, arguments);
      }

      return _saveClientSideJson;
    }()
  }, {
    key: "hasPrivateKey",
    value: function () {
      var _hasPrivateKey = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(sessionuuid, address) {
        var global, mvcmodule;
        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                return _context19.abrupt("return", mvcmodule.hasPrivateKey(sessionuuid, address));

              case 3:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function hasPrivateKey(_x31, _x32) {
        return _hasPrivateKey.apply(this, arguments);
      }

      return hasPrivateKey;
    }() //
    // Ethnode
    //

  }, {
    key: "_createMonitoredEthereumTransaction",
    value: function () {
      var _createMonitoredEthereumTransaction2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(wallet, card, session, fromaccount) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context20.abrupt("return", mvccurrencies._createMonitoredEthereumTransaction(wallet, card, session, fromaccount));

              case 3:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function _createMonitoredEthereumTransaction(_x33, _x34, _x35, _x36) {
        return _createMonitoredEthereumTransaction2.apply(this, arguments);
      }

      return _createMonitoredEthereumTransaction;
    }() //
    // Card encryption functions
    //
    // private key
    // TODO: should use mvcmodule.getWalletDecryptingCard for version >= 0.20.17

  }, {
    key: "getWalletDecryptingCard",
    value: function () {
      var _getWalletDecryptingCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(sessionuuid, walletuuid, address) {
        var global, mvcmodule, _apicontrollers, session, wallet, cards, i, _privatekey;

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
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                _apicontrollers = this._getClientAPI();
                _context21.next = 7;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 7:
                session = _context21.sent;

                if (session) {
                  _context21.next = 10;
                  break;
                }

                return _context21.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 10:
                _context21.next = 12;
                return _apicontrollers.getWalletFromUUID(session, walletuuid)["catch"](function (err) {});

              case 12:
                wallet = _context21.sent;

                if (wallet) {
                  _context21.next = 15;
                  break;
                }

                return _context21.abrupt("return");

              case 15:
                _context21.next = 17;
                return mvcmodule.getCardsWithAddress(sessionuuid, walletuuid, address)["catch"](function (err) {});

              case 17:
                cards = _context21.sent;

                if (cards) {
                  _context21.next = 20;
                  break;
                }

                return _context21.abrupt("return");

              case 20:
                i = 0;

              case 21:
                if (!(i < cards.length)) {
                  _context21.next = 30;
                  break;
                }

                _context21.next = 24;
                return mvcmodule.getCardPrivateKey(sessionuuid, walletuuid, cards[i].uuid)["catch"](function (err) {});

              case 24:
                _privatekey = _context21.sent;

                if (!_privatekey) {
                  _context21.next = 27;
                  break;
                }

                return _context21.abrupt("return", cards[i]);

              case 27:
                i++;
                _context21.next = 21;
                break;

              case 30:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function getWalletDecryptingCard(_x37, _x38, _x39) {
        return _getWalletDecryptingCard.apply(this, arguments);
      }

      return getWalletDecryptingCard;
    }()
  }, {
    key: "getCardPrivateKey",
    value: function () {
      var _getCardPrivateKey = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(sessionuuid, walletuuid, carduuid) {
        var global, mvcmodule;
        return _regeneratorRuntime().wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                return _context22.abrupt("return", mvcmodule.getCardPrivateKey(sessionuuid, walletuuid, carduuid));

              case 3:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function getCardPrivateKey(_x40, _x41, _x42) {
        return _getCardPrivateKey.apply(this, arguments);
      }

      return getCardPrivateKey;
    }()
  }, {
    key: "setCardPrivateKey",
    value: function () {
      var _setCardPrivateKey = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(sessionuuid, walletuuid, carduuid, privatekey) {
        var global, mvcmodule;
        return _regeneratorRuntime().wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                return _context23.abrupt("return", mvcmodule.setCardPrivateKey(sessionuuid, walletuuid, carduuid, privatekey));

              case 3:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function setCardPrivateKey(_x43, _x44, _x45, _x46) {
        return _setCardPrivateKey.apply(this, arguments);
      }

      return setCardPrivateKey;
    }() // symetric encryption

  }, {
    key: "aesEncryptString",
    value: function () {
      var _aesEncryptString = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(sessionuuid, walletuuid, carduuid, plaintext) {
        var global, mvcmodule;
        return _regeneratorRuntime().wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                return _context24.abrupt("return", mvcmodule.aesEncryptString(sessionuuid, walletuuid, carduuid, plaintext));

              case 3:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function aesEncryptString(_x47, _x48, _x49, _x50) {
        return _aesEncryptString.apply(this, arguments);
      }

      return aesEncryptString;
    }()
  }, {
    key: "aesDecryptString",
    value: function () {
      var _aesDecryptString = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(sessionuuid, walletuuid, carduuid, cyphertext) {
        var global, mvcmodule;
        return _regeneratorRuntime().wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                return _context25.abrupt("return", mvcmodule.aesDecryptString(sessionuuid, walletuuid, carduuid, cyphertext));

              case 3:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function aesDecryptString(_x51, _x52, _x53, _x54) {
        return _aesDecryptString.apply(this, arguments);
      }

      return aesDecryptString;
    }() // asymetric encryption

  }, {
    key: "rsaEncryptString",
    value: function () {
      var _rsaEncryptString = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(sessionuuid, walletuuid, carduuid, recipientrsapublickey, plaintext) {
        var global, mvcmodule;
        return _regeneratorRuntime().wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                return _context26.abrupt("return", mvcmodule.rsaEncryptString(sessionuuid, walletuuid, carduuid, recipientrsapublickey, plaintext));

              case 3:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function rsaEncryptString(_x55, _x56, _x57, _x58, _x59) {
        return _rsaEncryptString.apply(this, arguments);
      }

      return rsaEncryptString;
    }()
  }, {
    key: "rsaDecryptString",
    value: function () {
      var _rsaDecryptString = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(sessionuuid, walletuuid, carduuid, senderrsapublickey, cyphertext) {
        var global, mvcmodule;
        return _regeneratorRuntime().wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                return _context27.abrupt("return", mvcmodule.rsaDecryptString(sessionuuid, walletuuid, carduuid, senderrsapublickey, cyphertext));

              case 3:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function rsaDecryptString(_x60, _x61, _x62, _x63, _x64) {
        return _rsaDecryptString.apply(this, arguments);
      }

      return rsaDecryptString;
    }()
  }, {
    key: "signString",
    value: function () {
      var _signString = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(sessionuuid, walletuuid, carduuid, plaintext) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context28.abrupt("return", mvcclientwalletmodule.signString(sessionuuid, walletuuid, carduuid, plaintext));

              case 3:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      function signString(_x65, _x66, _x67, _x68) {
        return _signString.apply(this, arguments);
      }

      return signString;
    }() // TODO: should use mvcclientwalletmodule.validateStringCardSignature for version >= 0.30.11

  }, {
    key: "validateStringCardSignature",
    value: function () {
      var _validateStringCardSignature = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29(sessionuuid, walletuuid, carduuid, plaintext, signature) {
        var global, _apicontrollers, session, wallet, card, address;

        return _regeneratorRuntime().wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                if (plaintext) {
                  _context29.next = 2;
                  break;
                }

                return _context29.abrupt("return", Promise.reject('plain text is undefined'));

              case 2:
                if (signature) {
                  _context29.next = 4;
                  break;
                }

                return _context29.abrupt("return", Promise.reject('signature is undefined'));

              case 4:
                if (sessionuuid) {
                  _context29.next = 6;
                  break;
                }

                return _context29.abrupt("return", Promise.reject('session uuid is undefined'));

              case 6:
                if (walletuuid) {
                  _context29.next = 8;
                  break;
                }

                return _context29.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 8:
                if (carduuid) {
                  _context29.next = 10;
                  break;
                }

                return _context29.abrupt("return", Promise.reject('card uuid is undefined'));

              case 10:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context29.next = 14;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 14:
                session = _context29.sent;

                if (session) {
                  _context29.next = 17;
                  break;
                }

                return _context29.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 17:
                _context29.next = 19;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 19:
                wallet = _context29.sent;

                if (wallet) {
                  _context29.next = 22;
                  break;
                }

                return _context29.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 22:
                _context29.next = 24;
                return wallet.getCardFromUUID(carduuid);

              case 24:
                card = _context29.sent;

                if (card) {
                  _context29.next = 27;
                  break;
                }

                return _context29.abrupt("return", Promise.reject('could not find card ' + carduuid));

              case 27:
                address = card.getAddress();
                return _context29.abrupt("return", _apicontrollers.validateStringSignature(session, address, plaintext, signature));

              case 29:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));

      function validateStringCardSignature(_x69, _x70, _x71, _x72, _x73) {
        return _validateStringCardSignature.apply(this, arguments);
      }

      return validateStringCardSignature;
    }() //
    // Scheme functions
    //

  }, {
    key: "getSessionScheme",
    value: function () {
      var _getSessionScheme = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee30(sessionuuid) {
        var global, _apicontrollers, session, schemeuuid;

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
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context30.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context30.sent;

                if (session) {
                  _context30.next = 9;
                  break;
                }

                return _context30.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                schemeuuid = session.getSessionVariable('schemeuuid');

                if (schemeuuid) {
                  _context30.next = 12;
                  break;
                }

                return _context30.abrupt("return", Promise.reject('no scheme uuid save in session variables'));

              case 12:
                return _context30.abrupt("return", this.getSchemeInfo(sessionuuid, schemeuuid));

              case 13:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));

      function getSessionScheme(_x74) {
        return _getSessionScheme.apply(this, arguments);
      }

      return getSessionScheme;
    }()
  }, {
    key: "getSchemeInfo",
    value: function () {
      var _getSchemeInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee31(sessionuuid, schemeuuid) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context31.abrupt("return", mvcclientwalletmodule.getSchemeInfo(sessionuuid, schemeuuid));

              case 3:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));

      function getSchemeInfo(_x75, _x76) {
        return _getSchemeInfo.apply(this, arguments);
      }

      return getSchemeInfo;
    }() // TODO: replace with mvcclientwalletmodule.findLocalSchemeInfoFromWeb3Url for version >= 0.30.8

  }, {
    key: "_compareUrl",
    value: function _compareUrl(url1, url2) {
      var _url1 = url1 && url1.endsWith('/') ? url1.substring(0, url1.length - 1) : url1;

      var _url2 = url2 && url2.endsWith('/') ? url2.substring(0, url2.length - 1) : url2;

      if (_url1 && _url2 && _url1 == _url2) return true;else return false;
    }
  }, {
    key: "findLocalSchemeInfoFromWeb3Url",
    value: function () {
      var _findLocalSchemeInfoFromWeb3Url = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee32(sessionuuid, web3url, options) {
        var global, _apicontrollers, session, scheme, localschemes, i, networkconfig, ethnodeserverconfig, bValid, _keys, j, mvcclientwalletmodule, schemeuuid;

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
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context32.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context32.sent;

                if (session) {
                  _context32.next = 9;
                  break;
                }

                return _context32.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                _context32.next = 11;
                return _apicontrollers.getLocalSchemeList(session, true);

              case 11:
                localschemes = _context32.sent;
                i = 0;

              case 13:
                if (!(i < localschemes.length)) {
                  _context32.next = 33;
                  break;
                }

                networkconfig = localschemes[i].getNetworkConfig();
                ethnodeserverconfig = networkconfig.ethnodeserver;

                if (!this._compareUrl(ethnodeserverconfig.web3_provider_url, web3url)) {
                  _context32.next = 30;
                  break;
                }

                // validate scheme matches options
                bValid = true;
                _keys = options ? Object.keys(options) : [];
                j = 0;

              case 20:
                if (!(j < _keys.length)) {
                  _context32.next = 27;
                  break;
                }

                if (!(options[_keys[j]] && options[_keys[j]] != ethnodeserverconfig[_keys[j]])) {
                  _context32.next = 24;
                  break;
                }

                bValid = false;
                return _context32.abrupt("break", 27);

              case 24:
                j++;
                _context32.next = 20;
                break;

              case 27:
                if (!bValid) {
                  _context32.next = 30;
                  break;
                }

                scheme = localschemes[i];
                return _context32.abrupt("break", 33);

              case 30:
                i++;
                _context32.next = 13;
                break;

              case 33:
                if (scheme) {
                  _context32.next = 35;
                  break;
                }

                return _context32.abrupt("return", Promise.reject('could not find scheme for ' + web3url));

              case 35:
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                schemeuuid = scheme.getSchemeUUID();
                return _context32.abrupt("return", mvcclientwalletmodule.getSchemeInfo(sessionuuid, schemeuuid));

              case 38:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));

      function findLocalSchemeInfoFromWeb3Url(_x77, _x78, _x79) {
        return _findLocalSchemeInfoFromWeb3Url.apply(this, arguments);
      }

      return findLocalSchemeInfoFromWeb3Url;
    }()
  }, {
    key: "getSchemeTransactionUnitsThreshold",
    value: function () {
      var _getSchemeTransactionUnitsThreshold = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee33(sessionuuid, schemeuuid) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context33.abrupt("return", mvcclientwalletmodule.getSchemeTransactionUnitsThreshold(sessionuuid, schemeuuid));

              case 3:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));

      function getSchemeTransactionUnitsThreshold(_x80, _x81) {
        return _getSchemeTransactionUnitsThreshold.apply(this, arguments);
      }

      return getSchemeTransactionUnitsThreshold;
    }()
  }, {
    key: "getDefaultLocalSchemeInfo",
    value: function () {
      var _getDefaultLocalSchemeInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee34(sessionuuid) {
        var global, mvcmodule;
        return _regeneratorRuntime().wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                return _context34.abrupt("return", mvcmodule.getDefaultLocalSchemeInfo(sessionuuid));

              case 3:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));

      function getDefaultLocalSchemeInfo(_x82) {
        return _getDefaultLocalSchemeInfo.apply(this, arguments);
      }

      return getDefaultLocalSchemeInfo;
    }() // TODO: should use mvcmodule._getAverageTransactionFee for version >= 0.20.7
    // keep until transition to mvc-currencies

  }, {
    key: "_getAverageTransactionFee",
    value: function _getAverageTransactionFee(scheme, feelevel) {
      var global = this.global;
      var mvcmodule = global.getModuleObject('mvc');
      return mvcmodule._getAverageTransactionFee(scheme, feelevel);
    } // TODO: should use mvcmodule._getTransactionCredits for version >= 0.20.7
    // remote

  }, {
    key: "_getTransactionCredits",
    value: function _getTransactionCredits(scheme, transactionunits) {
      var global = this.global;
      var mvcmodule = global.getModuleObject('mvc');
      return mvcmodule._getTransactionCredits(scheme, transactionunits);
    }
  }, {
    key: "getSchemeTransactionInfo",
    value: function () {
      var _getSchemeTransactionInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee35(sessionuuid, schemeuuid) {
        var feelevel,
            global,
            mvcclientwalletmodule,
            _args35 = arguments;
        return _regeneratorRuntime().wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                feelevel = _args35.length > 2 && _args35[2] !== undefined ? _args35[2] : null;
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context35.abrupt("return", mvcclientwalletmodule.getSchemeTransactionInfo(sessionuuid, schemeuuid, feelevel));

              case 4:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, this);
      }));

      function getSchemeTransactionInfo(_x83, _x84) {
        return _getSchemeTransactionInfo.apply(this, arguments);
      }

      return getSchemeTransactionInfo;
    }()
  }, {
    key: "oauth2AuthorizeUrl",
    value: function () {
      var _oauth2AuthorizeUrl = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee36(sessionuuid, schemeuuid, params) {
        var global, mvcmodule;
        return _regeneratorRuntime().wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                return _context36.abrupt("return", mvcmodule.oauth2AuthorizeUrl(sessionuuid, schemeuuid, params));

              case 3:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this);
      }));

      function oauth2AuthorizeUrl(_x85, _x86, _x87) {
        return _oauth2AuthorizeUrl.apply(this, arguments);
      }

      return oauth2AuthorizeUrl;
    }() // TODO: should use mvclientwalletmodule.getUnitsFromCredits for version >= 0.20.17

  }, {
    key: "_getUnitsFromCredits",
    value: function () {
      var _getUnitsFromCredits2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee37(session, scheme, credits) {
        var units;
        return _regeneratorRuntime().wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                units = scheme.getTransactionUnits(credits);
                return _context37.abrupt("return", units);

              case 2:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37);
      }));

      function _getUnitsFromCredits(_x88, _x89, _x90) {
        return _getUnitsFromCredits2.apply(this, arguments);
      }

      return _getUnitsFromCredits;
    }() // TODO: should use mvclientwalletmodule.getUnitsFromCredits for version >= 0.20.17

  }, {
    key: "getUnitsFromCredits",
    value: function () {
      var _getUnitsFromCredits3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee38(sessionuuid, schemeuuid, credits) {
        var global, _apicontrollers, session, scheme;

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
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context38.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context38.sent;

                if (session) {
                  _context38.next = 9;
                  break;
                }

                return _context38.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                _context38.next = 11;
                return _apicontrollers.getSchemeFromUUID(session, schemeuuid)["catch"](function (err) {});

              case 11:
                scheme = _context38.sent;

                if (scheme) {
                  _context38.next = 14;
                  break;
                }

                return _context38.abrupt("return", Promise.reject('could not find scheme ' + schemeuuid));

              case 14:
                return _context38.abrupt("return", this._getUnitsFromCredits(session, scheme, credits));

              case 15:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38, this);
      }));

      function getUnitsFromCredits(_x91, _x92, _x93) {
        return _getUnitsFromCredits3.apply(this, arguments);
      }

      return getUnitsFromCredits;
    }() // TODO: should use mvclientwalletmodule.getCreditsFromUnits for version >= 0.20.17

  }, {
    key: "getCreditsFromUnits",
    value: function () {
      var _getCreditsFromUnits = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee39(sessionuuid, schemeuuid, units) {
        var global, _apicontrollers, session, scheme;

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
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context39.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context39.sent;

                if (session) {
                  _context39.next = 9;
                  break;
                }

                return _context39.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                _context39.next = 11;
                return _apicontrollers.getSchemeFromUUID(session, schemeuuid)["catch"](function (err) {});

              case 11:
                scheme = _context39.sent;

                if (scheme) {
                  _context39.next = 14;
                  break;
                }

                return _context39.abrupt("return", Promise.reject('could not find scheme ' + schemeuuid));

              case 14:
                return _context39.abrupt("return", scheme.getTransactionCreditsAsync(units));

              case 15:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee39, this);
      }));

      function getCreditsFromUnits(_x94, _x95, _x96) {
        return _getCreditsFromUnits.apply(this, arguments);
      }

      return getCreditsFromUnits;
    }() //
    // Wallet functions
    //

  }, {
    key: "getWalletInfo",
    value: function () {
      var _getWalletInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee40(sessionuuid, walletuuid) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee40$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context40.abrupt("return", mvcclientwalletmodule.getWalletInfo(sessionuuid, walletuuid));

              case 3:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40, this);
      }));

      function getWalletInfo(_x97, _x98) {
        return _getWalletInfo.apply(this, arguments);
      }

      return getWalletInfo;
    }()
  }, {
    key: "makeWallet",
    value: function () {
      var _makeWallet = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee41(sessionuuid, authname, schemeuuid, password) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee41$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context41.abrupt("return", mvcclientwalletmodule.makeWallet(sessionuuid, authname, schemeuuid, password));

              case 3:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee41, this);
      }));

      function makeWallet(_x99, _x100, _x101, _x102) {
        return _makeWallet.apply(this, arguments);
      }

      return makeWallet;
    }()
  }, {
    key: "makeWalletFromSession",
    value: function () {
      var _makeWalletFromSession = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee42(sessionuuid, schemeuuid) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context42.abrupt("return", mvcclientwalletmodule.makeWalletFromSession(sessionuuid, schemeuuid));

              case 3:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee42, this);
      }));

      function makeWalletFromSession(_x103, _x104) {
        return _makeWalletFromSession.apply(this, arguments);
      }

      return makeWalletFromSession;
    }() // TODO: should use mvclientwalletmodule.attachSessionToWallet for version >= 0.20.17

  }, {
    key: "attachSessionToWallet",
    value: function () {
      var _attachSessionToWallet = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee43(sessionuuid, walletuuid) {
        var global, _apicontrollers, commonmodule, session, wallet, scheme, mvcclientwalletmodule, network, isanonymous;

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
                global = this.global;
                _apicontrollers = this._getClientAPI();
                commonmodule = global.getModuleObject('common'); // look if session already exists

                _context43.next = 7;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 7:
                session = _context43.sent;

                if (session) {
                  _context43.next = 13;
                  break;
                }

                _context43.next = 11;
                return commonmodule.createBlankSessionObject();

              case 11:
                session = _context43.sent;
                session.setSessionUUID(sessionuuid);

              case 13:
                if (session) {
                  _context43.next = 15;
                  break;
                }

                return _context43.abrupt("return", Promise.reject('could not create session ' + sessionuuid));

              case 15:
                _context43.next = 17;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 17:
                wallet = _context43.sent;

                if (wallet) {
                  _context43.next = 20;
                  break;
                }

                return _context43.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 20:
                _context43.next = 22;
                return wallet.getScheme();

              case 22:
                scheme = _context43.sent;

                if (scheme) {
                  _context43.next = 25;
                  break;
                }

                throw new Error('could not find scheme for wallet ' + walletuuid);

              case 25:
                // set network config to the session
                //var network = scheme.getNetworkConfig();
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                network = mvcclientwalletmodule._getSchemeNetworkConfig(scheme);
                _context43.next = 29;
                return _apicontrollers.setSessionNetworkConfig(session, network);

              case 29:
                // save schemeuuid in session var (because missing 2021.11.13)
                session.setSessionVariable('schemeuuid', scheme.getSchemeUUID());
                _context43.next = 32;
                return mvcclientwalletmodule._isAnonymousAsync(session);

              case 32:
                isanonymous = _context43.sent;

                if (!isanonymous) {
                  _context43.next = 35;
                  break;
                }

                return _context43.abrupt("return", Promise.reject('session needs to be authenticated'));

              case 35:
                _context43.next = 37;
                return mvcclientwalletmodule._attachSessionToWallet(session, wallet);

              case 37:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee43, this);
      }));

      function attachSessionToWallet(_x105, _x106) {
        return _attachSessionToWallet.apply(this, arguments);
      }

      return attachSessionToWallet;
    }()
  }, {
    key: "lockWallet",
    value: function () {
      var _lockWallet = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee44(sessionuuid, walletuuid) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee44$(_context44) {
          while (1) {
            switch (_context44.prev = _context44.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context44.abrupt("return", mvcclientwalletmodule.lockWallet(sessionuuid, walletuuid));

              case 3:
              case "end":
                return _context44.stop();
            }
          }
        }, _callee44, this);
      }));

      function lockWallet(_x107, _x108) {
        return _lockWallet.apply(this, arguments);
      }

      return lockWallet;
    }() //
    // Card functions
    //

  }, {
    key: "getCardListOnWeb3Url",
    value: function () {
      var _getCardListOnWeb3Url = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee45(sessionuuid, walletuuid, web3url) {
        var global, mvcmodule;
        return _regeneratorRuntime().wrap(function _callee45$(_context45) {
          while (1) {
            switch (_context45.prev = _context45.next) {
              case 0:
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                return _context45.abrupt("return", mvcmodule.getCardListOnWeb3Url(sessionuuid, walletuuid, web3url));

              case 3:
              case "end":
                return _context45.stop();
            }
          }
        }, _callee45, this);
      }));

      function getCardListOnWeb3Url(_x109, _x110, _x111) {
        return _getCardListOnWeb3Url.apply(this, arguments);
      }

      return getCardListOnWeb3Url;
    }()
  }, {
    key: "createCard",
    value: function () {
      var _createCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee46(sessionuuid, walletuuid, web3providerurl, privatekey) {
        var global, _apicontrollers, session, wallet, card, bSave, mvcmodule, cardinfo;

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
                if (web3providerurl) {
                  _context46.next = 6;
                  break;
                }

                return _context46.abrupt("return", Promise.reject('web3 url is undefined'));

              case 6:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context46.next = 10;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 10:
                session = _context46.sent;

                if (session) {
                  _context46.next = 13;
                  break;
                }

                return _context46.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 13:
                _context46.next = 15;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 15:
                wallet = _context46.sent;

                if (wallet) {
                  _context46.next = 18;
                  break;
                }

                return _context46.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 18:
                _context46.next = 20;
                return _apicontrollers.createWalletCardFromPrivateKey(session, wallet, web3providerurl, privatekey);

              case 20:
                card = _context46.sent;

                if (card) {
                  _context46.next = 23;
                  break;
                }

                return _context46.abrupt("return", Promise.reject('could not create card'));

              case 23:
                if (!card.isLocked()) {
                  _context46.next = 26;
                  break;
                }

                _context46.next = 26;
                return card.unlock();

              case 26:
                _context46.next = 28;
                return card.save();

              case 28:
                bSave = _context46.sent;

                if (bSave) {
                  _context46.next = 31;
                  break;
                }

                return _context46.abrupt("return", Promise.reject('could not save card'));

              case 31:
                mvcmodule = global.getModuleObject('mvc');
                cardinfo = {};

                mvcmodule._fillCardInfo(cardinfo, card);

                return _context46.abrupt("return", cardinfo);

              case 35:
              case "end":
                return _context46.stop();
            }
          }
        }, _callee46, this);
      }));

      function createCard(_x112, _x113, _x114, _x115) {
        return _createCard.apply(this, arguments);
      }

      return createCard;
    }()
  }, {
    key: "getWalletCard",
    value: function () {
      var _getWalletCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee47(sessionuuid, walletuuid, carduuid) {
        var global, _apicontrollers, session, wallet, card, bSave, mvcclientwalletmodule, cardinfo;

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
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context47.next = 8;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 8:
                session = _context47.sent;

                if (session) {
                  _context47.next = 11;
                  break;
                }

                return _context47.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 11:
                _context47.next = 13;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 13:
                wallet = _context47.sent;

                if (wallet) {
                  _context47.next = 16;
                  break;
                }

                return _context47.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 16:
                _context47.next = 18;
                return wallet.getCardFromUUID(carduuid);

              case 18:
                card = _context47.sent;

                if (card) {
                  _context47.next = 21;
                  break;
                }

                return _context47.abrupt("return", Promise.reject('could not find card ' + carduuid));

              case 21:
                if (!card.isLocked()) {
                  _context47.next = 24;
                  break;
                }

                _context47.next = 24;
                return card.unlock();

              case 24:
                _context47.next = 26;
                return card.save();

              case 26:
                bSave = _context47.sent;

                if (bSave) {
                  _context47.next = 29;
                  break;
                }

                return _context47.abrupt("return", Promise.reject('could not save card'));

              case 29:
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                cardinfo = {};

                mvcclientwalletmodule._fillCardInfo(cardinfo, card);

                return _context47.abrupt("return", cardinfo);

              case 33:
              case "end":
                return _context47.stop();
            }
          }
        }, _callee47, this);
      }));

      function getWalletCard(_x116, _x117, _x118) {
        return _getWalletCard.apply(this, arguments);
      }

      return getWalletCard;
    }()
  }, {
    key: "getCardSchemeInfo",
    value: function () {
      var _getCardSchemeInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee48(sessionuuid, walletuuid, carduuid) {
        var global, mvcmodule;
        return _regeneratorRuntime().wrap(function _callee48$(_context48) {
          while (1) {
            switch (_context48.prev = _context48.next) {
              case 0:
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                return _context48.abrupt("return", mvcmodule.getCardSchemeInfo(sessionuuid, walletuuid, carduuid));

              case 3:
              case "end":
                return _context48.stop();
            }
          }
        }, _callee48, this);
      }));

      function getCardSchemeInfo(_x119, _x120, _x121) {
        return _getCardSchemeInfo.apply(this, arguments);
      }

      return getCardSchemeInfo;
    }()
  }, {
    key: "getCardInfoFromAddressOnScheme",
    value: function () {
      var _getCardInfoFromAddressOnScheme = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee49(sessionuuid, walletuuid, schemeuuid, address) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee49$(_context49) {
          while (1) {
            switch (_context49.prev = _context49.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context49.abrupt("return", mvcclientwalletmodule.getCardInfoFromAddressOnScheme(sessionuuid, walletuuid, schemeuuid, address));

              case 3:
              case "end":
                return _context49.stop();
            }
          }
        }, _callee49, this);
      }));

      function getCardInfoFromAddressOnScheme(_x122, _x123, _x124, _x125) {
        return _getCardInfoFromAddressOnScheme.apply(this, arguments);
      }

      return getCardInfoFromAddressOnScheme;
    }()
  }, {
    key: "getCreditBalance",
    value: function () {
      var _getCreditBalance = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee50(sessionuuid, walletuuid, carduuid) {
        var global, mvcmodule;
        return _regeneratorRuntime().wrap(function _callee50$(_context50) {
          while (1) {
            switch (_context50.prev = _context50.next) {
              case 0:
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                return _context50.abrupt("return", mvcmodule.getCreditBalance(sessionuuid, walletuuid, carduuid));

              case 3:
              case "end":
                return _context50.stop();
            }
          }
        }, _callee50, this);
      }));

      function getCreditBalance(_x126, _x127, _x128) {
        return _getCreditBalance.apply(this, arguments);
      }

      return getCreditBalance;
    }()
  }, {
    key: "topUpCard",
    value: function () {
      var _topUpCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee51(sessionuuid, walletuuid, carduuid) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee51$(_context51) {
          while (1) {
            switch (_context51.prev = _context51.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context51.abrupt("return", mvcclientwalletmodule.topUpCard(sessionuuid, walletuuid, carduuid));

              case 3:
              case "end":
                return _context51.stop();
            }
          }
        }, _callee51, this);
      }));

      function topUpCard(_x129, _x130, _x131) {
        return _topUpCard.apply(this, arguments);
      }

      return topUpCard;
    }()
  }, {
    key: "transferTransactionUnits",
    value: function () {
      var _transferTransactionUnits = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee52(sessionuuid, walletuuid, cardfromuuid, cardtouuid, units) {
        var feelevel,
            global,
            mvcclientwalletmodule,
            _args52 = arguments;
        return _regeneratorRuntime().wrap(function _callee52$(_context52) {
          while (1) {
            switch (_context52.prev = _context52.next) {
              case 0:
                feelevel = _args52.length > 5 && _args52[5] !== undefined ? _args52[5] : null;
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context52.abrupt("return", mvcclientwalletmodule.transferTransactionUnits(sessionuuid, walletuuid, cardfromuuid, cardtouuid, units, feelevel));

              case 4:
              case "end":
                return _context52.stop();
            }
          }
        }, _callee52, this);
      }));

      function transferTransactionUnits(_x132, _x133, _x134, _x135, _x136) {
        return _transferTransactionUnits.apply(this, arguments);
      }

      return transferTransactionUnits;
    }()
  }, {
    key: "sendTransactionUnits",
    value: function () {
      var _sendTransactionUnits = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee53(sessionuuid, walletuuid, cardfromuuid, toaddress, units) {
        var feelevel,
            global,
            _apicontrollers,
            session,
            wallet,
            card,
            cardaccount,
            mvcclientwalletmodule,
            schemeuuid,
            fromprivatekey,
            _args53 = arguments;

        return _regeneratorRuntime().wrap(function _callee53$(_context53) {
          while (1) {
            switch (_context53.prev = _context53.next) {
              case 0:
                feelevel = _args53.length > 5 && _args53[5] !== undefined ? _args53[5] : null;

                if (sessionuuid) {
                  _context53.next = 3;
                  break;
                }

                return _context53.abrupt("return", Promise.reject('session uuid is undefined'));

              case 3:
                if (walletuuid) {
                  _context53.next = 5;
                  break;
                }

                return _context53.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 5:
                if (cardfromuuid) {
                  _context53.next = 7;
                  break;
                }

                return _context53.abrupt("return", Promise.reject('card uuid is undefined'));

              case 7:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context53.next = 11;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 11:
                session = _context53.sent;

                if (session) {
                  _context53.next = 14;
                  break;
                }

                return _context53.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 14:
                _context53.next = 16;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 16:
                wallet = _context53.sent;

                if (wallet) {
                  _context53.next = 19;
                  break;
                }

                return _context53.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 19:
                _context53.next = 21;
                return wallet.getCardFromUUID(cardfromuuid);

              case 21:
                card = _context53.sent;

                if (card) {
                  _context53.next = 24;
                  break;
                }

                return _context53.abrupt("return", Promise.reject('could not find card ' + cardfromuuid));

              case 24:
                cardaccount = card._getSessionAccountObject();

                if (cardaccount) {
                  _context53.next = 27;
                  break;
                }

                return _context53.abrupt("return", Promise.reject('card has no private key ' + cardfromuuid));

              case 27:
                // call mvc-client-wallet
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet'); // TODO: remove fix when corrected in  mvc-client-wallet for version >= 0.30.9

                mvcclientwalletmodule._getMonitoredSchemeSession = this._getMonitoredSchemeSession; // END

                schemeuuid = card.getSchemeUUID();
                fromprivatekey = cardaccount.getPrivateKey();
                return _context53.abrupt("return", mvcclientwalletmodule.transferSchemeTransactionUnits(sessionuuid, walletuuid, schemeuuid, fromprivatekey, toaddress, units, feelevel));

              case 32:
              case "end":
                return _context53.stop();
            }
          }
        }, _callee53, this);
      }));

      function sendTransactionUnits(_x137, _x138, _x139, _x140, _x141) {
        return _sendTransactionUnits.apply(this, arguments);
      }

      return sendTransactionUnits;
    }() // TODO: should use mvcclientwalletmodule._getRecommendedFeeLevel for version >= 0.30.8

  }, {
    key: "_getRecommendedFeeLevel",
    value: function () {
      var _getRecommendedFeeLevel2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee54(session, wallet, card, tx_fee) {
        var feelevel, sessionuuid, card_scheme, tx_info, gasLimit, gasPrice, avg_transaction_fee, gas_unit, credit_cost_unit_ratio, units_exec_fee, credits_exec_fee, credits_max_fee, units_max_fee;
        return _regeneratorRuntime().wrap(function _callee54$(_context54) {
          while (1) {
            switch (_context54.prev = _context54.next) {
              case 0:
                // standard fee level
                feelevel = {
                  default_gas_limit_multiplier: 1,
                  default_gas_price_multiplier: 1,
                  avg_transaction_fee_multiplier: 1,
                  transaction_units_min_multiplier: 1
                }; // get scheme transaction info

                sessionuuid = session.getSessionUUID();
                card_scheme = card.getScheme();
                _context54.next = 5;
                return this.getSchemeTransactionInfo(sessionuuid, card_scheme.uuid, feelevel);

              case 5:
                tx_info = _context54.sent;
                gasLimit = tx_info.gasLimit;
                gasPrice = tx_info.gasPrice;
                avg_transaction_fee = tx_info.avg_transaction_fee;
                gas_unit = card_scheme && card_scheme.network && card_scheme.network.ethnodeserver && card_scheme.network.ethnodeserver.gas_unit ? parseInt(card_scheme.network.ethnodeserver.gas_unit) : 21000;
                credit_cost_unit_ratio = avg_transaction_fee * 1000000000000000000 / (gas_unit * gasPrice); // execution cost

                if (!tx_fee.estimated_cost_credits) {
                  _context54.next = 18;
                  break;
                }

                credits_exec_fee = tx_fee.estimated_cost_credits;
                _context54.next = 15;
                return this._getUnitsFromCredits(session, card_scheme, credits_exec_fee);

              case 15:
                units_exec_fee = _context54.sent;
                _context54.next = 22;
                break;

              case 18:
                units_exec_fee = tx_fee.estimated_cost_units ? Math.ceil(tx_fee.estimated_cost_units / credit_cost_unit_ratio) : 1;
                _context54.next = 21;
                return card_scheme.getTransactionCreditsAsync(units_exec_fee);

              case 21:
                credits_exec_fee = _context54.sent;

              case 22:
                // max price
                credits_max_fee = gasLimit * gasPrice;
                _context54.next = 25;
                return this._getUnitsFromCredits(session, card_scheme, credits_max_fee);

              case 25:
                units_max_fee = _context54.sent;
                if (units_exec_fee > units_max_fee) feelevel.default_gas_limit_multiplier = Math.ceil(units_exec_fee / units_max_fee);
                return _context54.abrupt("return", feelevel);

              case 28:
              case "end":
                return _context54.stop();
            }
          }
        }, _callee54, this);
      }));

      function _getRecommendedFeeLevel(_x142, _x143, _x144, _x145) {
        return _getRecommendedFeeLevel2.apply(this, arguments);
      }

      return _getRecommendedFeeLevel;
    }() // TODO: should use mvcclientwalletmodule.getRecommendedFeeLevel for version >= 0.30.8

  }, {
    key: "getRecommendedFeeLevel",
    value: function () {
      var _getRecommendedFeeLevel3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee55(sessionuuid, walletuuid, carduuid, tx_fee) {
        var global, _apicontrollers, session, wallet, card;

        return _regeneratorRuntime().wrap(function _callee55$(_context55) {
          while (1) {
            switch (_context55.prev = _context55.next) {
              case 0:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context55.next = 4;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 4:
                session = _context55.sent;

                if (session) {
                  _context55.next = 7;
                  break;
                }

                return _context55.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 7:
                _context55.next = 9;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 9:
                wallet = _context55.sent;

                if (wallet) {
                  _context55.next = 12;
                  break;
                }

                return _context55.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 12:
                _context55.next = 14;
                return wallet.getCardFromUUID(carduuid);

              case 14:
                card = _context55.sent;

                if (card) {
                  _context55.next = 17;
                  break;
                }

                return _context55.abrupt("return", Promise.reject('could not find card ' + carduuid));

              case 17:
                return _context55.abrupt("return", this._getRecommendedFeeLevel(session, wallet, card, tx_fee));

              case 18:
              case "end":
                return _context55.stop();
            }
          }
        }, _callee55, this);
      }));

      function getRecommendedFeeLevel(_x146, _x147, _x148, _x149) {
        return _getRecommendedFeeLevel3.apply(this, arguments);
      }

      return getRecommendedFeeLevel;
    }() // TODO: should use mvcclientwalletmodule.computeTransactionFee for version >= 0.30.8

  }, {
    key: "computeTransactionFee",
    value: function () {
      var _computeTransactionFee = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee56(sessionuuid, walletuuid, carduuid, tx_fee) {
        var feelevel,
            global,
            _apicontrollers,
            session,
            wallet,
            card,
            card_scheme,
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
            _args56 = arguments;

        return _regeneratorRuntime().wrap(function _callee56$(_context56) {
          while (1) {
            switch (_context56.prev = _context56.next) {
              case 0:
                feelevel = _args56.length > 4 && _args56[4] !== undefined ? _args56[4] : null;
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context56.next = 5;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 5:
                session = _context56.sent;

                if (session) {
                  _context56.next = 8;
                  break;
                }

                return _context56.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 8:
                _context56.next = 10;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 10:
                wallet = _context56.sent;

                if (wallet) {
                  _context56.next = 13;
                  break;
                }

                return _context56.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 13:
                _context56.next = 15;
                return wallet.getCardFromUUID(carduuid);

              case 15:
                card = _context56.sent;

                if (card) {
                  _context56.next = 18;
                  break;
                }

                return _context56.abrupt("return", Promise.reject('could not find card ' + carduuid));

              case 18:
                // get scheme transaction info
                card_scheme = card.getScheme();
                _context56.next = 21;
                return this.getSchemeTransactionInfo(sessionuuid, card_scheme.uuid, feelevel);

              case 21:
                tx_info = _context56.sent;
                gasLimit = tx_info.gasLimit;
                gasPrice = tx_info.gasPrice;
                avg_transaction_fee = tx_info.avg_transaction_fee;
                gas_unit = card_scheme && card_scheme.network && card_scheme.network.ethnodeserver && card_scheme.network.ethnodeserver.gas_unit ? parseInt(card_scheme.network.ethnodeserver.gas_unit) : 21000;
                credit_cost_unit_ratio = avg_transaction_fee * gasPrice / gas_unit; // execution cost

                if (!tx_fee.estimated_cost_credits) {
                  _context56.next = 34;
                  break;
                }

                credits_exec_fee = tx_fee.estimated_cost_credits;
                _context56.next = 31;
                return this._getUnitsFromCredits(session, card_scheme, credits_exec_fee);

              case 31:
                units_exec_fee = _context56.sent;
                _context56.next = 38;
                break;

              case 34:
                units_exec_fee = tx_fee.estimated_cost_units ? Math.ceil(tx_fee.estimated_cost_units / credit_cost_unit_ratio) : 1;
                _context56.next = 37;
                return card_scheme.getTransactionCreditsAsync(units_exec_fee);

              case 37:
                credits_exec_fee = _context56.sent;

              case 38:
                if (!tx_fee.transferred_credits) {
                  _context56.next = 45;
                  break;
                }

                credits_transferred = tx_fee.transferred_credits;
                _context56.next = 42;
                return this._getUnitsFromCredits(session, card_scheme, credits_exec_fee);

              case 42:
                units_transferred = _context56.sent;
                _context56.next = 49;
                break;

              case 45:
                units_transferred = tx_fee.transferred_credit_units;
                _context56.next = 48;
                return card_scheme.getTransactionCreditsAsync(units_transferred);

              case 48:
                credits_transferred = _context56.sent;

              case 49:
                // max price
                credits_max_fee = gasLimit * gasPrice;
                _context56.next = 52;
                return this._getUnitsFromCredits(session, card_scheme, credits_max_fee);

              case 52:
                units_max_fee = _context56.sent;
                // fill tx_fee
                tx_fee.tx_info = tx_info;
                tx_fee.estimated_fee = {}; // estimated execution fee

                tx_fee.estimated_fee.execution_units = units_exec_fee;
                tx_fee.estimated_fee.execution_credits = credits_exec_fee; // estimated transaction total

                tx_fee.estimated_fee.total_credits = credits_exec_fee + credits_transferred;
                _context56.next = 60;
                return this._getUnitsFromCredits(session, card_scheme, tx_fee.estimated_fee.total_credits);

              case 60:
                tx_fee.estimated_fee.total_units = _context56.sent;
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

                _context56.next = 66;
                return this._getUnitsFromCredits(session, card_scheme, tx_fee.required_credits);

              case 66:
                tx_fee.required_units = _context56.sent;
                return _context56.abrupt("return", tx_fee);

              case 68:
              case "end":
                return _context56.stop();
            }
          }
        }, _callee56, this);
      }));

      function computeTransactionFee(_x150, _x151, _x152, _x153) {
        return _computeTransactionFee.apply(this, arguments);
      }

      return computeTransactionFee;
    }() // TODO: should use mvcclientwalletmodule.canCompleteTransaction for version >= 0.30.8

  }, {
    key: "canCompleteTransaction",
    value: function () {
      var _canCompleteTransaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee58(sessionuuid, walletuuid, carduuid, tx_fee) {
        var _this2 = this;

        var feelevel,
            _args58 = arguments;
        return _regeneratorRuntime().wrap(function _callee58$(_context58) {
          while (1) {
            switch (_context58.prev = _context58.next) {
              case 0:
                feelevel = _args58.length > 4 && _args58[4] !== undefined ? _args58[4] : null;
                return _context58.abrupt("return", function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee57(tx_fee) {
                    var credits, global, _apicontrollers, session, wallet, card, cardaccount, privatekey, tx_info, scheme_units_threshold, scheme_credits_threshold;

                    return _regeneratorRuntime().wrap(function _callee57$(_context57) {
                      while (1) {
                        switch (_context57.prev = _context57.next) {
                          case 0:
                            _context57.next = 2;
                            return _this2.getCreditBalance(sessionuuid, walletuuid, carduuid);

                          case 2:
                            credits = _context57.sent;
                            global = _this2.global;
                            _apicontrollers = _this2._getClientAPI();
                            _context57.next = 7;
                            return _apicontrollers.getSessionObject(sessionuuid);

                          case 7:
                            session = _context57.sent;

                            if (session) {
                              _context57.next = 10;
                              break;
                            }

                            return _context57.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

                          case 10:
                            _context57.next = 12;
                            return _apicontrollers.getWalletFromUUID(session, walletuuid);

                          case 12:
                            wallet = _context57.sent;

                            if (wallet) {
                              _context57.next = 15;
                              break;
                            }

                            return _context57.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

                          case 15:
                            _context57.next = 17;
                            return wallet.getCardFromUUID(carduuid);

                          case 17:
                            card = _context57.sent;

                            if (card) {
                              _context57.next = 20;
                              break;
                            }

                            return _context57.abrupt("return", Promise.reject('could not find card ' + carduuid));

                          case 20:
                            // can the card send transactions
                            cardaccount = card._getSessionAccountObject();

                            if (cardaccount) {
                              _context57.next = 23;
                              break;
                            }

                            return _context57.abrupt("return", false);

                          case 23:
                            privatekey = cardaccount.getPrivateKey();

                            if (privatekey) {
                              _context57.next = 26;
                              break;
                            }

                            return _context57.abrupt("return", false);

                          case 26:
                            _context57.next = 28;
                            return _this2.computeTransactionFee(sessionuuid, walletuuid, carduuid, tx_fee, feelevel);

                          case 28:
                            tx_fee = _context57.sent;

                            if (!(tx_fee.estimated_fee.execution_credits > tx_fee.estimated_fee.max_credits)) {
                              _context57.next = 31;
                              break;
                            }

                            return _context57.abrupt("return", false);

                          case 31:
                            if (!(credits.transactionunits < tx_fee.required_units)) {
                              _context57.next = 33;
                              break;
                            }

                            return _context57.abrupt("return", false);

                          case 33:
                            // check
                            tx_info = tx_fee.tx_info;
                            scheme_units_threshold = tx_info.units_threshold;
                            scheme_credits_threshold = tx_info.credits_threshold;

                            if (!(scheme_credits_threshold > credits.transactioncredits)) {
                              _context57.next = 43;
                              break;
                            }

                            if (!(tx_fee.threshold_enforced === true)) {
                              _context57.next = 42;
                              break;
                            }

                            tx_fee.required_units = scheme_credits_threshold;
                            return _context57.abrupt("return", false);

                          case 42:
                            tx_fee.threshold_unmet = true;

                          case 43:
                            return _context57.abrupt("return", true);

                          case 44:
                          case "end":
                            return _context57.stop();
                        }
                      }
                    }, _callee57);
                  }));

                  return function (_x158) {
                    return _ref.apply(this, arguments);
                  };
                }()(tx_fee));

              case 2:
              case "end":
                return _context58.stop();
            }
          }
        }, _callee58);
      }));

      function canCompleteTransaction(_x154, _x155, _x156, _x157) {
        return _canCompleteTransaction.apply(this, arguments);
      }

      return canCompleteTransaction;
    }() //
    // Currency functions
    //

  }, {
    key: "_createDecimalAmount",
    value: function () {
      var _createDecimalAmount2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee59(session, amount, decimals) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee59$(_context59) {
          while (1) {
            switch (_context59.prev = _context59.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context59.abrupt("return", mvccurrencies._createDecimalAmount(session, amount, decimals));

              case 3:
              case "end":
                return _context59.stop();
            }
          }
        }, _callee59, this);
      }));

      function _createDecimalAmount(_x159, _x160, _x161) {
        return _createDecimalAmount2.apply(this, arguments);
      }

      return _createDecimalAmount;
    }()
  }, {
    key: "transferCurrencyAmount",
    value: function () {
      var _transferCurrencyAmount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee60(sessionuuid, walletuuid, cardfromuuid, cardtouuid, currencyuuid, currencyamount) {
        var feelevel,
            global,
            mvccurrencies,
            _args60 = arguments;
        return _regeneratorRuntime().wrap(function _callee60$(_context60) {
          while (1) {
            switch (_context60.prev = _context60.next) {
              case 0:
                feelevel = _args60.length > 6 && _args60[6] !== undefined ? _args60[6] : null;
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context60.abrupt("return", mvccurrencies.transferCurrencyAmount(sessionuuid, walletuuid, cardfromuuid, cardtouuid, currencyuuid, currencyamount, feelevel));

              case 4:
              case "end":
                return _context60.stop();
            }
          }
        }, _callee60, this);
      }));

      function transferCurrencyAmount(_x162, _x163, _x164, _x165, _x166, _x167) {
        return _transferCurrencyAmount.apply(this, arguments);
      }

      return transferCurrencyAmount;
    }()
  }, {
    key: "_getPretradeScheme",
    value: function () {
      var _getPretradeScheme2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee61(session, currency) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee61$(_context61) {
          while (1) {
            switch (_context61.prev = _context61.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context61.abrupt("return", mvccurrencies._getPretradeScheme(session, currency));

              case 3:
              case "end":
                return _context61.stop();
            }
          }
        }, _callee61, this);
      }));

      function _getPretradeScheme(_x168, _x169) {
        return _getPretradeScheme2.apply(this, arguments);
      }

      return _getPretradeScheme;
    }()
  }, {
    key: "loadConfig",
    value: function () {
      var _loadConfig = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee62(configname) {
        var global, _apicontrollers, clientmodule;

        return _regeneratorRuntime().wrap(function _callee62$(_context62) {
          while (1) {
            switch (_context62.prev = _context62.next) {
              case 0:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                clientmodule = global.getModuleObject('webclient');
                return _context62.abrupt("return", clientmodule.loadConfig(configname));

              case 4:
              case "end":
                return _context62.stop();
            }
          }
        }, _callee62, this);
      }));

      function loadConfig(_x170) {
        return _loadConfig.apply(this, arguments);
      }

      return loadConfig;
    }()
  }, {
    key: "getCurrencies",
    value: function () {
      var _getCurrencies = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee63(sessionuuid, walletuuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee63$(_context63) {
          while (1) {
            switch (_context63.prev = _context63.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context63.abrupt("return", mvccurrencies.getCurrencies(sessionuuid, walletuuid));

              case 3:
              case "end":
                return _context63.stop();
            }
          }
        }, _callee63, this);
      }));

      function getCurrencies(_x171, _x172) {
        return _getCurrencies.apply(this, arguments);
      }

      return getCurrencies;
    }()
  }, {
    key: "getCurrencyFromUUID",
    value: function () {
      var _getCurrencyFromUUID = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee64(sessionuuid, currencyuuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee64$(_context64) {
          while (1) {
            switch (_context64.prev = _context64.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context64.abrupt("return", mvccurrencies.getCurrencyFromUUID(sessionuuid, currencyuuid));

              case 3:
              case "end":
                return _context64.stop();
            }
          }
        }, _callee64, this);
      }));

      function getCurrencyFromUUID(_x173, _x174) {
        return _getCurrencyFromUUID.apply(this, arguments);
      }

      return getCurrencyFromUUID;
    }()
  }, {
    key: "getCurrencyTotalSupply",
    value: function () {
      var _getCurrencyTotalSupply = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee65(sessionuuid, walletuuid, currencyuuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee65$(_context65) {
          while (1) {
            switch (_context65.prev = _context65.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context65.abrupt("return", mvccurrencies.getCurrencyTotalSupply(sessionuuid, walletuuid, currencyuuid));

              case 3:
              case "end":
                return _context65.stop();
            }
          }
        }, _callee65, this);
      }));

      function getCurrencyTotalSupply(_x175, _x176, _x177) {
        return _getCurrencyTotalSupply.apply(this, arguments);
      }

      return getCurrencyTotalSupply;
    }()
  }, {
    key: "importCurrencyFromTokenUUID",
    value: function () {
      var _importCurrencyFromTokenUUID = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee66(sessionuuid, walletuuid, carduuid, tokenuuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee66$(_context66) {
          while (1) {
            switch (_context66.prev = _context66.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context66.abrupt("return", mvccurrencies.importCurrencyFromTokenUUID(sessionuuid, walletuuid, carduuid, tokenuuid));

              case 3:
              case "end":
                return _context66.stop();
            }
          }
        }, _callee66, this);
      }));

      function importCurrencyFromTokenUUID(_x178, _x179, _x180, _x181) {
        return _importCurrencyFromTokenUUID.apply(this, arguments);
      }

      return importCurrencyFromTokenUUID;
    }()
  }, {
    key: "importCurrencyFromTokenAddress",
    value: function () {
      var _importCurrencyFromTokenAddress = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee67(sessionuuid, walletuuid, carduuid, tokenaddress, options) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee67$(_context67) {
          while (1) {
            switch (_context67.prev = _context67.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context67.abrupt("return", mvccurrencies.importCurrencyFromTokenAddress(sessionuuid, walletuuid, carduuid, tokenaddress, options));

              case 3:
              case "end":
                return _context67.stop();
            }
          }
        }, _callee67, this);
      }));

      function importCurrencyFromTokenAddress(_x182, _x183, _x184, _x185, _x186) {
        return _importCurrencyFromTokenAddress.apply(this, arguments);
      }

      return importCurrencyFromTokenAddress;
    }()
  }, {
    key: "_getCurrencyCard",
    value: function () {
      var _getCurrencyCard2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee68(session, wallet, currency) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee68$(_context68) {
          while (1) {
            switch (_context68.prev = _context68.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context68.abrupt("return", mvccurrencies._getCurrencyCard(session, wallet, currency));

              case 3:
              case "end":
                return _context68.stop();
            }
          }
        }, _callee68, this);
      }));

      function _getCurrencyCard(_x187, _x188, _x189) {
        return _getCurrencyCard2.apply(this, arguments);
      }

      return _getCurrencyCard;
    }()
  }, {
    key: "getAllCurrenciesWithAddress",
    value: function () {
      var _getAllCurrenciesWithAddress = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee69(sessionuuid, walletuuid, address) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee69$(_context69) {
          while (1) {
            switch (_context69.prev = _context69.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context69.abrupt("return", mvccurrencies.getAllCurrenciesWithAddress(sessionuuid, walletuuid, address));

              case 3:
              case "end":
                return _context69.stop();
            }
          }
        }, _callee69, this);
      }));

      function getAllCurrenciesWithAddress(_x190, _x191, _x192) {
        return _getAllCurrenciesWithAddress.apply(this, arguments);
      }

      return getAllCurrenciesWithAddress;
    }()
  }, {
    key: "synchronizeCurrency",
    value: function () {
      var _synchronizeCurrency = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee70(sessionuuid, walletuuid, currency) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee70$(_context70) {
          while (1) {
            switch (_context70.prev = _context70.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context70.abrupt("return", mvccurrencies.synchronizeCurrency(sessionuuid, walletuuid, currency));

              case 3:
              case "end":
                return _context70.stop();
            }
          }
        }, _callee70, this);
      }));

      function synchronizeCurrency(_x193, _x194, _x195) {
        return _synchronizeCurrency.apply(this, arguments);
      }

      return synchronizeCurrency;
    }()
  }, {
    key: "setCurrencyDescription",
    value: function () {
      var _setCurrencyDescription = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee71(sessionuuid, walletuuid, currencyuuid, description) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee71$(_context71) {
          while (1) {
            switch (_context71.prev = _context71.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context71.abrupt("return", mvccurrencies.setCurrencyDescription(sessionuuid, walletuuid, currencyuuid, description));

              case 3:
              case "end":
                return _context71.stop();
            }
          }
        }, _callee71, this);
      }));

      function setCurrencyDescription(_x196, _x197, _x198, _x199) {
        return _setCurrencyDescription.apply(this, arguments);
      }

      return setCurrencyDescription;
    }()
  }, {
    key: "getCurrenciesFromAddress",
    value: function () {
      var _getCurrenciesFromAddress = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee72(sessionuuid, walletuuid, schemeuuid, address) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee72$(_context72) {
          while (1) {
            switch (_context72.prev = _context72.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context72.abrupt("return", mvccurrencies.getCurrenciesFromAddress(sessionuuid, walletuuid, schemeuuid, address));

              case 3:
              case "end":
                return _context72.stop();
            }
          }
        }, _callee72, this);
      }));

      function getCurrenciesFromAddress(_x200, _x201, _x202, _x203) {
        return _getCurrenciesFromAddress.apply(this, arguments);
      }

      return getCurrenciesFromAddress;
    }()
  }, {
    key: "_getCurrencyScheme",
    value: function () {
      var _getCurrencyScheme2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee73(session, currency) {
        var global, currenciesmodule, currencyscheme;
        return _regeneratorRuntime().wrap(function _callee73$(_context73) {
          while (1) {
            switch (_context73.prev = _context73.next) {
              case 0:
                global = this.global;
                currenciesmodule = global.getModuleObject('currencies');
                _context73.next = 4;
                return currenciesmodule.getCurrencyScheme(session, currency);

              case 4:
                currencyscheme = _context73.sent;
                return _context73.abrupt("return", currencyscheme);

              case 6:
              case "end":
                return _context73.stop();
            }
          }
        }, _callee73, this);
      }));

      function _getCurrencyScheme(_x204, _x205) {
        return _getCurrencyScheme2.apply(this, arguments);
      }

      return _getCurrencyScheme;
    }()
  }, {
    key: "getCurrencyScheme",
    value: function () {
      var _getCurrencyScheme3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee74(sessionuuid, walletuuid, currencyuuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee74$(_context74) {
          while (1) {
            switch (_context74.prev = _context74.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context74.abrupt("return", mvccurrencies.getCurrencyScheme(sessionuuid, walletuuid, currencyuuid));

              case 3:
              case "end":
                return _context74.stop();
            }
          }
        }, _callee74, this);
      }));

      function getCurrencyScheme(_x206, _x207, _x208) {
        return _getCurrencyScheme3.apply(this, arguments);
      }

      return getCurrencyScheme;
    }()
  }, {
    key: "findCardCurrency",
    value: function () {
      var _findCardCurrency = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee75(sessionuuid, walletuuid, carduuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee75$(_context75) {
          while (1) {
            switch (_context75.prev = _context75.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context75.abrupt("return", mvccurrencies.findCardCurrency(sessionuuid, walletuuid, carduuid));

              case 3:
              case "end":
                return _context75.stop();
            }
          }
        }, _callee75, this);
      }));

      function findCardCurrency(_x209, _x210, _x211) {
        return _findCardCurrency.apply(this, arguments);
      }

      return findCardCurrency;
    }()
  }, {
    key: "getCurrencyCard",
    value: function () {
      var _getCurrencyCard3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee76(sessionuuid, walletuuid, currencyuuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee76$(_context76) {
          while (1) {
            switch (_context76.prev = _context76.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context76.abrupt("return", mvccurrencies.getCurrencyCard(sessionuuid, walletuuid, currencyuuid));

              case 3:
              case "end":
                return _context76.stop();
            }
          }
        }, _callee76, this);
      }));

      function getCurrencyCard(_x212, _x213, _x214) {
        return _getCurrencyCard3.apply(this, arguments);
      }

      return getCurrencyCard;
    }()
  }, {
    key: "setCurrencyCard",
    value: function () {
      var _setCurrencyCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee77(sessionuuid, walletuuid, currencyuuid, carduuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee77$(_context77) {
          while (1) {
            switch (_context77.prev = _context77.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context77.abrupt("return", mvccurrencies.setCurrencyCard(sessionuuid, walletuuid, currencyuuid, carduuid));

              case 3:
              case "end":
                return _context77.stop();
            }
          }
        }, _callee77, this);
      }));

      function setCurrencyCard(_x215, _x216, _x217, _x218) {
        return _setCurrencyCard.apply(this, arguments);
      }

      return setCurrencyCard;
    }()
  }, {
    key: "createCurrencyCard",
    value: function () {
      var _createCurrencyCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee78(sessionuuid, walletuuid, currencyuuid, privatekey) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee78$(_context78) {
          while (1) {
            switch (_context78.prev = _context78.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context78.abrupt("return", mvccurrencies.createCurrencyCard(sessionuuid, walletuuid, currencyuuid, privatekey));

              case 3:
              case "end":
                return _context78.stop();
            }
          }
        }, _callee78, this);
      }));

      function createCurrencyCard(_x219, _x220, _x221, _x222) {
        return _createCurrencyCard.apply(this, arguments);
      }

      return createCurrencyCard;
    }()
  }, {
    key: "getCurrencyCardWithAddress",
    value: function () {
      var _getCurrencyCardWithAddress = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee79(sessionuuid, walletuuid, currencyuuid, address) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee79$(_context79) {
          while (1) {
            switch (_context79.prev = _context79.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context79.abrupt("return", mvccurrencies.getCurrencyCardWithAddress(sessionuuid, walletuuid, currencyuuid, address));

              case 3:
              case "end":
                return _context79.stop();
            }
          }
        }, _callee79, this);
      }));

      function getCurrencyCardWithAddress(_x223, _x224, _x225, _x226) {
        return _getCurrencyCardWithAddress.apply(this, arguments);
      }

      return getCurrencyCardWithAddress;
    }()
  }, {
    key: "createReadOnlyCurrencyCard",
    value: function () {
      var _createReadOnlyCurrencyCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee80(sessionuuid, walletuuid, currencyuuid, address) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee80$(_context80) {
          while (1) {
            switch (_context80.prev = _context80.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context80.abrupt("return", mvccurrencies.createReadOnlyCurrencyCard(sessionuuid, walletuuid, currencyuuid, address));

              case 3:
              case "end":
                return _context80.stop();
            }
          }
        }, _callee80, this);
      }));

      function createReadOnlyCurrencyCard(_x227, _x228, _x229, _x230) {
        return _createReadOnlyCurrencyCard.apply(this, arguments);
      }

      return createReadOnlyCurrencyCard;
    }()
  }, {
    key: "generateCurrencyCard",
    value: function () {
      var _generateCurrencyCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee81(sessionuuid, walletuuid, currencyuuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee81$(_context81) {
          while (1) {
            switch (_context81.prev = _context81.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context81.abrupt("return", mvccurrencies.generateCurrencyCard(sessionuuid, walletuuid, currencyuuid));

              case 3:
              case "end":
                return _context81.stop();
            }
          }
        }, _callee81, this);
      }));

      function generateCurrencyCard(_x231, _x232, _x233) {
        return _generateCurrencyCard.apply(this, arguments);
      }

      return generateCurrencyCard;
    }()
  }, {
    key: "getCurrencyPosition",
    value: function () {
      var _getCurrencyPosition = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee82(sessionuuid, walletuuid, currencyuuid, carduuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee82$(_context82) {
          while (1) {
            switch (_context82.prev = _context82.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context82.abrupt("return", mvccurrencies.getCurrencyPosition(sessionuuid, walletuuid, currencyuuid, carduuid));

              case 3:
              case "end":
                return _context82.stop();
            }
          }
        }, _callee82, this);
      }));

      function getCurrencyPosition(_x234, _x235, _x236, _x237) {
        return _getCurrencyPosition.apply(this, arguments);
      }

      return getCurrencyPosition;
    }()
  }, {
    key: "getCurrencyCardCredits",
    value: function () {
      var _getCurrencyCardCredits = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee83(sessionuuid, walletuuid, currencyuuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee83$(_context83) {
          while (1) {
            switch (_context83.prev = _context83.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context83.abrupt("return", mvccurrencies.getCurrencyCardCredits(sessionuuid, walletuuid, currencyuuid));

              case 3:
              case "end":
                return _context83.stop();
            }
          }
        }, _callee83, this);
      }));

      function getCurrencyCardCredits(_x238, _x239, _x240) {
        return _getCurrencyCardCredits.apply(this, arguments);
      }

      return getCurrencyCardCredits;
    }()
  }, {
    key: "_getMonitoredCardSession",
    value: function () {
      var _getMonitoredCardSession2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee84(session, wallet, card) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee84$(_context84) {
          while (1) {
            switch (_context84.prev = _context84.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context84.abrupt("return", mvccurrencies._getMonitoredCardSession(session, wallet, card));

              case 3:
              case "end":
                return _context84.stop();
            }
          }
        }, _callee84, this);
      }));

      function _getMonitoredCardSession(_x241, _x242, _x243) {
        return _getMonitoredCardSession2.apply(this, arguments);
      }

      return _getMonitoredCardSession;
    }()
  }, {
    key: "canPayAmount",
    value: function () {
      var _canPayAmount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee85(sessionuuid, walletuuid, carduuid, currencyuuid, amount, tx_fee) {
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
            _args85 = arguments;

        return _regeneratorRuntime().wrap(function _callee85$(_context85) {
          while (1) {
            switch (_context85.prev = _context85.next) {
              case 0:
                feelevel = _args85.length > 6 && _args85[6] !== undefined ? _args85[6] : null;

                if (!(amount === 0)) {
                  _context85.next = 3;
                  break;
                }

                return _context85.abrupt("return", true);

              case 3:
                if (sessionuuid) {
                  _context85.next = 5;
                  break;
                }

                return _context85.abrupt("return", Promise.reject('session uuid is undefined'));

              case 5:
                if (walletuuid) {
                  _context85.next = 7;
                  break;
                }

                return _context85.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 7:
                if (carduuid) {
                  _context85.next = 9;
                  break;
                }

                return _context85.abrupt("return", Promise.reject('card uuid is undefined'));

              case 9:
                if (currencyuuid) {
                  _context85.next = 11;
                  break;
                }

                return _context85.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 11:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                _apicontrollers = this._getClientAPI();
                _context85.next = 16;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 16:
                session = _context85.sent;

                if (session) {
                  _context85.next = 19;
                  break;
                }

                return _context85.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 19:
                _context85.next = 21;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 21:
                wallet = _context85.sent;

                if (wallet) {
                  _context85.next = 24;
                  break;
                }

                return _context85.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 24:
                _context85.next = 26;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 26:
                currency = _context85.sent;

                if (currency) {
                  _context85.next = 29;
                  break;
                }

                return _context85.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 29:
                _context85.next = 31;
                return wallet.getCardFromUUID(carduuid);

              case 31:
                card = _context85.sent;

                if (card) {
                  _context85.next = 34;
                  break;
                }

                return _context85.abrupt("return", Promise.reject('could not find a card for currency ' + currencyuuid));

              case 34:
                // can the card send transactions
                cardaccount = card._getSessionAccountObject();

                if (cardaccount) {
                  _context85.next = 37;
                  break;
                }

                return _context85.abrupt("return", false);

              case 37:
                privatekey = cardaccount.getPrivateKey();

                if (privatekey) {
                  _context85.next = 40;
                  break;
                }

                return _context85.abrupt("return", false);

              case 40:
                if (!(currency.ops.cantxfree !== true)) {
                  _context85.next = 54;
                  break;
                }

                _tx_fee = tx_fee ? tx_fee : {
                  transferred_credit_units: 0,
                  estimated_cost_units: 3
                };

                if (!feelevel) {
                  _context85.next = 46;
                  break;
                }

                _feelevel = feelevel;
                _context85.next = 49;
                break;

              case 46:
                _context85.next = 48;
                return this.getRecommendedFeeLevel(sessionuuid, walletuuid, carduuid, _tx_fee);

              case 48:
                _feelevel = _context85.sent;

              case 49:
                _context85.next = 51;
                return this.canCompleteTransaction(sessionuuid, walletuuid, carduuid, _tx_fee, _feelevel)["catch"](function (err) {});

              case 51:
                canspend = _context85.sent;

                if (canspend) {
                  _context85.next = 54;
                  break;
                }

                return _context85.abrupt("return", false);

              case 54:
                _context85.next = 56;
                return this.getCurrencyPosition(sessionuuid, walletuuid, currencyuuid, carduuid);

              case 56:
                currencyposition = _context85.sent;
                _context85.next = 59;
                return currencyposition.toInteger();

              case 59:
                tokenamountmax = _context85.sent;

                if (!(amount > tokenamountmax)) {
                  _context85.next = 62;
                  break;
                }

                return _context85.abrupt("return", false);

              case 62:
                return _context85.abrupt("return", true);

              case 63:
              case "end":
                return _context85.stop();
            }
          }
        }, _callee85, this);
      }));

      function canPayAmount(_x244, _x245, _x246, _x247, _x248, _x249) {
        return _canPayAmount.apply(this, arguments);
      }

      return canPayAmount;
    }()
  }, {
    key: "payAmount",
    value: function () {
      var _payAmount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee86(sessionuuid, walletuuid, carduuid, toaddress, currencyuuid, amount) {
        var feelevel,
            global,
            mvccurrencies,
            _args86 = arguments;
        return _regeneratorRuntime().wrap(function _callee86$(_context86) {
          while (1) {
            switch (_context86.prev = _context86.next) {
              case 0:
                feelevel = _args86.length > 6 && _args86[6] !== undefined ? _args86[6] : null;
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context86.abrupt("return", mvccurrencies.payAmount(sessionuuid, walletuuid, carduuid, toaddress, currencyuuid, amount, feelevel));

              case 4:
              case "end":
                return _context86.stop();
            }
          }
        }, _callee86, this);
      }));

      function payAmount(_x250, _x251, _x252, _x253, _x254, _x255) {
        return _payAmount.apply(this, arguments);
      }

      return payAmount;
    }()
  }, {
    key: "payAndReport",
    value: function () {
      var _payAndReport = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee87(sessionuuid, walletuuid, toaddress, currencyuuid, amount) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee87$(_context87) {
          while (1) {
            switch (_context87.prev = _context87.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context87.abrupt("return", mvccurrencies.payAndReport(sessionuuid, walletuuid, toaddress, currencyuuid, amount));

              case 3:
              case "end":
                return _context87.stop();
            }
          }
        }, _callee87, this);
      }));

      function payAndReport(_x256, _x257, _x258, _x259, _x260) {
        return _payAndReport.apply(this, arguments);
      }

      return payAndReport;
    }()
  }, {
    key: "getClaimPayingToAddress",
    value: function () {
      var _getClaimPayingToAddress = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee88(sessionuuid, walletuuid, claim) {
        var global, _apicontrollers, session, isvalid;

        return _regeneratorRuntime().wrap(function _callee88$(_context88) {
          while (1) {
            switch (_context88.prev = _context88.next) {
              case 0:
                if (!claim.payingto_overload) {
                  _context88.next = 10;
                  break;
                }

                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context88.next = 5;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 5:
                session = _context88.sent;

                if (session) {
                  _context88.next = 8;
                  break;
                }

                return _context88.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 8:
                isvalid = _apicontrollers.isValidAddress(session, claim.payingto_overload);

                if (isvalid) {
                  claim.payingto = claim.payingto_overload;
                }

              case 10:
                return _context88.abrupt("return", claim.payingto ? claim.payingto : claim.owner);

              case 11:
              case "end":
                return _context88.stop();
            }
          }
        }, _callee88, this);
      }));

      function getClaimPayingToAddress(_x261, _x262, _x263) {
        return _getClaimPayingToAddress.apply(this, arguments);
      }

      return getClaimPayingToAddress;
    }()
  }, {
    key: "payClaim",
    value: function () {
      var _payClaim = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee89(sessionuuid, walletuuid, carduuid, claim) {
        var toaddress, currencyuuid, amount, currencyamount, tokenamount_int, txhash;
        return _regeneratorRuntime().wrap(function _callee89$(_context89) {
          while (1) {
            switch (_context89.prev = _context89.next) {
              case 0:
                _context89.next = 2;
                return this.getClaimPayingToAddress(sessionuuid, walletuuid, claim);

              case 2:
                toaddress = _context89.sent;
                currencyuuid = claim.currencyuuid;
                amount = claim.amount;
                _context89.next = 7;
                return this.getCurrencyAmount(sessionuuid, currencyuuid, amount);

              case 7:
                currencyamount = _context89.sent;
                _context89.next = 10;
                return currencyamount.decimalamount.toInteger();

              case 10:
                tokenamount_int = _context89.sent;
                _context89.next = 13;
                return this.payAmount(sessionuuid, walletuuid, carduuid, toaddress, currencyuuid, tokenamount_int);

              case 13:
                txhash = _context89.sent;
                return _context89.abrupt("return", txhash);

              case 15:
              case "end":
                return _context89.stop();
            }
          }
        }, _callee89, this);
      }));

      function payClaim(_x264, _x265, _x266, _x267) {
        return _payClaim.apply(this, arguments);
      }

      return payClaim;
    }()
  }, {
    key: "getTokenCardList",
    value: function () {
      var _getTokenCardList = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee90(sessionuuid, walletuuid, web3providerurl, tokenaddress) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee90$(_context90) {
          while (1) {
            switch (_context90.prev = _context90.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context90.abrupt("return", mvccurrencies.getTokenCardList(sessionuuid, walletuuid, web3providerurl, tokenaddress));

              case 3:
              case "end":
                return _context90.stop();
            }
          }
        }, _callee90, this);
      }));

      function getTokenCardList(_x268, _x269, _x270, _x271) {
        return _getTokenCardList.apply(this, arguments);
      }

      return getTokenCardList;
    }()
  }, {
    key: "getCurrencyCardList",
    value: function () {
      var _getCurrencyCardList = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee91(sessionuuid, walletuuid, currencyuuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee91$(_context91) {
          while (1) {
            switch (_context91.prev = _context91.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context91.abrupt("return", mvccurrencies.getCurrencyCardList(sessionuuid, walletuuid, currencyuuid));

              case 3:
              case "end":
                return _context91.stop();
            }
          }
        }, _callee91, this);
      }));

      function getCurrencyCardList(_x272, _x273, _x274) {
        return _getCurrencyCardList.apply(this, arguments);
      }

      return getCurrencyCardList;
    }()
  }, {
    key: "getCurrencySchemeInfo",
    value: function () {
      var _getCurrencySchemeInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee92(sessionuuid, currencyuuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee92$(_context92) {
          while (1) {
            switch (_context92.prev = _context92.next) {
              case 0:
                console.log('Warning: obsolete, should use getCurencyScheme(sessionuuid, walletuuid, currencyuuid)');
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context92.abrupt("return", mvccurrencies.getCurrencySchemeInfo(sessionuuid, currencyuuid));

              case 4:
              case "end":
                return _context92.stop();
            }
          }
        }, _callee92, this);
      }));

      function getCurrencySchemeInfo(_x275, _x276) {
        return _getCurrencySchemeInfo.apply(this, arguments);
      }

      return getCurrencySchemeInfo;
    }()
  }, {
    key: "getPretradeSchemeInfo",
    value: function () {
      var _getPretradeSchemeInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee93(sessionuuid, currencyuuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee93$(_context93) {
          while (1) {
            switch (_context93.prev = _context93.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context93.abrupt("return", mvccurrencies.getPretradeSchemeInfo(sessionuuid, currencyuuid));

              case 3:
              case "end":
                return _context93.stop();
            }
          }
        }, _callee93, this);
      }));

      function getPretradeSchemeInfo(_x277, _x278) {
        return _getPretradeSchemeInfo.apply(this, arguments);
      }

      return getPretradeSchemeInfo;
    }()
  }, {
    key: "getPretradeWeb3Url",
    value: function () {
      var _getPretradeWeb3Url = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee94(sessionuuid, currencyuuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee94$(_context94) {
          while (1) {
            switch (_context94.prev = _context94.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context94.abrupt("return", mvccurrencies.getPretradeWeb3Url(sessionuuid, currencyuuid));

              case 3:
              case "end":
                return _context94.stop();
            }
          }
        }, _callee94, this);
      }));

      function getPretradeWeb3Url(_x279, _x280) {
        return _getPretradeWeb3Url.apply(this, arguments);
      }

      return getPretradeWeb3Url;
    }()
  }, {
    key: "getPretradeCard",
    value: function () {
      var _getPretradeCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee95(sessionuuid, walletuuid, carduuid, currencyuuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee95$(_context95) {
          while (1) {
            switch (_context95.prev = _context95.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context95.abrupt("return", mvccurrencies.getPretradeCard(sessionuuid, walletuuid, carduuid, currencyuuid));

              case 3:
              case "end":
                return _context95.stop();
            }
          }
        }, _callee95, this);
      }));

      function getPretradeCard(_x281, _x282, _x283, _x284) {
        return _getPretradeCard.apply(this, arguments);
      }

      return getPretradeCard;
    }()
  }, {
    key: "setPretradeCard",
    value: function () {
      var _setPretradeCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee96(sessionuuid, walletuuid, currencyuuid, carduuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee96$(_context96) {
          while (1) {
            switch (_context96.prev = _context96.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context96.abrupt("return", mvccurrencies.setPretradeCard(sessionuuid, walletuuid, currencyuuid, carduuid));

              case 3:
              case "end":
                return _context96.stop();
            }
          }
        }, _callee96, this);
      }));

      function setPretradeCard(_x285, _x286, _x287, _x288) {
        return _setPretradeCard.apply(this, arguments);
      }

      return setPretradeCard;
    }() //
    // Transaction functions
    //
    // Note: 
    // fetch, register and update are for blockchain persistence
    // read, save and modify are for storage persistence

  }, {
    key: "_getBufferClass",
    value: function _getBufferClass() {
      var _Buffer;

      try {
        if (typeof window !== 'undefined' && typeof window.Buffer !== 'undefined') {
          _Buffer = window.Buffer;
        } else {
          _Buffer = require('buffer').Buffer;
        }
      } catch (e) {}

      return _Buffer;
    }
  }, {
    key: "registerTransaction",
    value: function () {
      var _registerTransaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee97(sessionuuid, walletuuid, carduuid, dataobj, assignto, feelevel) {
        var _this3 = this;

        var global, _apicontrollers, session, wallet, card, cardsession, cardsessionuuid, _tohex, datahexstring, fromaccount, toaddress, transaction, fee, from_card_scheme, txhash;

        return _regeneratorRuntime().wrap(function _callee97$(_context97) {
          while (1) {
            switch (_context97.prev = _context97.next) {
              case 0:
                if (sessionuuid) {
                  _context97.next = 2;
                  break;
                }

                return _context97.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context97.next = 4;
                  break;
                }

                return _context97.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (carduuid) {
                  _context97.next = 6;
                  break;
                }

                return _context97.abrupt("return", Promise.reject('card uuid is undefined'));

              case 6:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context97.next = 10;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 10:
                session = _context97.sent;

                if (session) {
                  _context97.next = 13;
                  break;
                }

                return _context97.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 13:
                _context97.next = 15;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 15:
                wallet = _context97.sent;

                if (wallet) {
                  _context97.next = 18;
                  break;
                }

                return _context97.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 18:
                _context97.next = 20;
                return wallet.getCardFromUUID(carduuid);

              case 20:
                card = _context97.sent;

                if (card) {
                  _context97.next = 23;
                  break;
                }

                return _context97.abrupt("return", Promise.reject('could not find card ' + carduuid));

              case 23:
                _context97.next = 25;
                return this._getMonitoredCardSession(session, wallet, card);

              case 25:
                cardsession = _context97.sent;
                cardsessionuuid = cardsession.getSessionUUID();

                _tohex = function _tohex(data) {
                  var _Buffer = _this3._getBufferClass();

                  var datastr = JSON.stringify(data);

                  var buf = _Buffer.from(datastr, 'utf8');

                  return '0x' + buf.toString('hex');
                };

                datahexstring = _tohex(dataobj);
                fromaccount = card._getSessionAccountObject();
                toaddress = assignto ? assignto : fromaccount.getAddress(); //var transaction = _apicontrollers.createEthereumTransaction(cardsession, fromaccount);

                _context97.next = 33;
                return this._createMonitoredEthereumTransaction(wallet, card, cardsession, fromaccount);

              case 33:
                transaction = _context97.sent;

                if (!feelevel) {
                  _context97.next = 41;
                  break;
                }

                from_card_scheme = card.getScheme();
                _context97.next = 38;
                return _apicontrollers.createSchemeFee(from_card_scheme, feelevel);

              case 38:
                fee = _context97.sent;
                _context97.next = 42;
                break;

              case 41:
                fee = _apicontrollers.createFee();

              case 42:
                transaction.setToAddress(toaddress);
                transaction.setValue(0);
                transaction.setGas(fee.gaslimit);
                transaction.setGasPrice(fee.gasPrice);
                transaction.setData(datahexstring);
                _context97.next = 49;
                return _apicontrollers.sendEthereumTransaction(cardsession, transaction)["catch"](function (err) {
                  console.log('error in registerTransaction: ' + err);
                });

              case 49:
                txhash = _context97.sent;

                if (txhash) {
                  _context97.next = 52;
                  break;
                }

                return _context97.abrupt("return", Promise.reject('could not register transaction'));

              case 52:
                // save
                dataobj.txhash = txhash; // add transaction hash to save it, blocknumber will be added later
                // using sessionuuid to save locally (in 'shared') on the client side

                _context97.next = 55;
                return this._saveTransactionObject(sessionuuid, walletuuid, dataobj);

              case 55:
                return _context97.abrupt("return", txhash);

              case 56:
              case "end":
                return _context97.stop();
            }
          }
        }, _callee97, this);
      }));

      function registerTransaction(_x289, _x290, _x291, _x292, _x293, _x294) {
        return _registerTransaction.apply(this, arguments);
      }

      return registerTransaction;
    }()
  }, {
    key: "_fillTransactionDataObject",
    value: function _fillTransactionDataObject(dataobject, tx) {
      var dataobj = {};
      if (!tx) return dataobject;

      try {
        dataobj = JSON.parse(tx.input_decoded_utf8);
      } catch (e) {
        // another type of transaction
        dataobj = {};
      }

      dataobj.blocknumber = tx.block.blocknumber;
      dataobj.blocktime = tx.block.timestamp;
      dataobj.txhash = tx.hash;
      dataobject = Object.assign(dataobject, dataobj);
      return dataobject;
    }
  }, {
    key: "_getMonitoredSchemeSession",
    value: function () {
      var _getMonitoredSchemeSession2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee98(session, wallet, scheme) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee98$(_context98) {
          while (1) {
            switch (_context98.prev = _context98.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context98.abrupt("return", mvccurrencies._getMonitoredSchemeSession(session, wallet, scheme));

              case 3:
              case "end":
                return _context98.stop();
            }
          }
        }, _callee98, this);
      }));

      function _getMonitoredSchemeSession(_x295, _x296, _x297) {
        return _getMonitoredSchemeSession2.apply(this, arguments);
      }

      return _getMonitoredSchemeSession;
    }()
  }, {
    key: "_fetchTransaction",
    value: function () {
      var _fetchTransaction2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee99(session, wallet, pretradescheme, txhash) {
        var bPersist,
            global,
            _apicontrollers,
            fetchsession,
            fetchsessionuuid,
            tx,
            dataobj,
            sessionuuid,
            walletuuid,
            persistdata,
            _args99 = arguments;

        return _regeneratorRuntime().wrap(function _callee99$(_context99) {
          while (1) {
            switch (_context99.prev = _context99.next) {
              case 0:
                bPersist = _args99.length > 4 && _args99[4] !== undefined ? _args99[4] : false;
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context99.next = 5;
                return this._getMonitoredSchemeSession(session, wallet, pretradescheme);

              case 5:
                fetchsession = _context99.sent;
                fetchsessionuuid = fetchsession.getSessionUUID();
                _context99.next = 9;
                return _apicontrollers.readTransaction(fetchsession, txhash)["catch"](function (err) {
                  console.log('error in _fetchTransaction: ' + err);
                });

              case 9:
                tx = _context99.sent;

                if (tx) {
                  _context99.next = 12;
                  break;
                }

                return _context99.abrupt("return", Promise.reject('could not find transaction ' + txhash));

              case 12:
                dataobj = {};

                this._fillTransactionDataObject(dataobj, tx);

                if (!bPersist) {
                  _context99.next = 21;
                  break;
                }

                sessionuuid = session.getSessionUUID();
                walletuuid = wallet ? wallet.getWalletUUID() : null;
                persistdata = Object.assign({}, dataobj);
                persistdata.txhash = txhash; // using sessionuuid to save locally (in 'shared') on the client side

                _context99.next = 21;
                return this._saveTransactionObject(sessionuuid, walletuuid, persistdata);

              case 21:
                return _context99.abrupt("return", dataobj);

              case 22:
              case "end":
                return _context99.stop();
            }
          }
        }, _callee99, this);
      }));

      function _fetchTransaction(_x298, _x299, _x300, _x301) {
        return _fetchTransaction2.apply(this, arguments);
      }

      return _fetchTransaction;
    }()
  }, {
    key: "fetchTransaction",
    value: function () {
      var _fetchTransaction3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee100(sessionuuid, walletuuid, pretradeschemeuuid, txhash) {
        var global, _apicontrollers, session, wallet, pretradescheme;

        return _regeneratorRuntime().wrap(function _callee100$(_context100) {
          while (1) {
            switch (_context100.prev = _context100.next) {
              case 0:
                if (sessionuuid) {
                  _context100.next = 2;
                  break;
                }

                return _context100.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (pretradeschemeuuid) {
                  _context100.next = 4;
                  break;
                }

                return _context100.abrupt("return", Promise.reject('scheme uuid is undefined'));

              case 4:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context100.next = 8;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 8:
                session = _context100.sent;

                if (session) {
                  _context100.next = 11;
                  break;
                }

                return _context100.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 11:
                _context100.next = 13;
                return _apicontrollers.getWalletFromUUID(session, walletuuid)["catch"](function (err) {});

              case 13:
                wallet = _context100.sent;
                _context100.next = 16;
                return _apicontrollers.getSchemeFromUUID(session, pretradeschemeuuid)["catch"](function (err) {});

              case 16:
                pretradescheme = _context100.sent;

                if (!pretradescheme.isRemote()) {
                  _context100.next = 20;
                  break;
                }

                if (!(wallet && wallet.isLocked())) {
                  _context100.next = 20;
                  break;
                }

                return _context100.abrupt("return", Promise.reject('ERR_WALLET_LOCKED'));

              case 20:
                return _context100.abrupt("return", this._fetchTransaction(session, wallet, pretradescheme, txhash, true));

              case 21:
              case "end":
                return _context100.stop();
            }
          }
        }, _callee100, this);
      }));

      function fetchTransaction(_x302, _x303, _x304, _x305) {
        return _fetchTransaction3.apply(this, arguments);
      }

      return fetchTransaction;
    }()
  }, {
    key: "fetchCurrencyTransaction",
    value: function () {
      var _fetchCurrencyTransaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee101(sessionuuid, walletuuid, currencyuuid, txhash) {
        var pretradescheme_info;
        return _regeneratorRuntime().wrap(function _callee101$(_context101) {
          while (1) {
            switch (_context101.prev = _context101.next) {
              case 0:
                _context101.next = 2;
                return this.getPretradeSchemeInfo(sessionuuid, currencyuuid);

              case 2:
                pretradescheme_info = _context101.sent;
                return _context101.abrupt("return", this.fetchTransaction(sessionuuid, walletuuid, pretradescheme_info.uuid, txhash));

              case 4:
              case "end":
                return _context101.stop();
            }
          }
        }, _callee101, this);
      }));

      function fetchCurrencyTransaction(_x306, _x307, _x308, _x309) {
        return _fetchCurrencyTransaction.apply(this, arguments);
      }

      return fetchCurrencyTransaction;
    }()
  }, {
    key: "_getAddressPretradeTransactions",
    value: function () {
      var _getAddressPretradeTransactions2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee102(session, wallet, currency, address) {
        var global, _apicontrollers, mytokensmodule, pretradescheme, childsession, currencyuuid, mytokensaccessinstance, restconnection, transactions, ethereumnodeaccessmodule, ethereumnodeaccessinstance, i, tx;

        return _regeneratorRuntime().wrap(function _callee102$(_context102) {
          while (1) {
            switch (_context102.prev = _context102.next) {
              case 0:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                mytokensmodule = global.getModuleObject('mytokens'); // get a childsession on pretrade's web3providerurl
                //let web3providerurl = currency.pretrade_web3_provider_url;
                //var childsession = await this._getChildSessionOnWeb3Url(session, web3providerurl);

                _context102.next = 5;
                return this._getPretradeScheme(session, currency);

              case 5:
                pretradescheme = _context102.sent;
                _context102.next = 8;
                return this._getMonitoredSchemeSession(session, wallet, pretradescheme);

              case 8:
                childsession = _context102.sent;
                currencyuuid = currency.uuid;
                mytokensaccessinstance = childsession.getSessionVariable('mytokensexplorer-' + currencyuuid);

                if (mytokensaccessinstance) {
                  _context102.next = 19;
                  break;
                }

                _context102.next = 14;
                return _apicontrollers.getEthereumNodeAccessInstance(childsession);

              case 14:
                childsession.ethereum_node_access_instance = _context102.sent;
                // keep!!!
                // create a specific mytokens instance pointing to pretrade_explorer_url to retrieve transactions
                mytokensaccessinstance = mytokensmodule.getMyTokensServerAccessInstance(childsession);
                restconnection = childsession.createRestConnection(currency.pretrade_explorer_url);
                mytokensaccessinstance.setRestConnection(restconnection);
                childsession.setSessionVariable('mytokensexplorer-' + currencyuuid, mytokensaccessinstance);

              case 19:
                _context102.next = 21;
                return mytokensaccessinstance.account_transactions(address);

              case 21:
                transactions = _context102.sent;
                // fake ethchainreader
                ethereumnodeaccessmodule = global.getModuleObject('ethereum-node-access');
                ethereumnodeaccessinstance = ethereumnodeaccessmodule.getEthereumNodeAccessInstance(childsession); // TODO: could be better to use
                // var ethereumnodeaccessinstance = _apicontrollers.getEthereumNodeAccessInstance(childsession);

                for (i = 0; i < (transactions ? transactions.length : 0); i++) {
                  tx = transactions[i];

                  try {
                    // see if input can be decoded in utf8
                    tx.input_decoded_utf8 = ethereumnodeaccessmodule.web3ToUTF8(childsession, tx.input);
                  } catch (e) {}

                  tx.block = tx.block ? tx.block : {};
                  tx.block.blocknumber = tx.blockNumber;
                  tx.block.timestamp = tx.timeStamp;
                }

                return _context102.abrupt("return", transactions);

              case 26:
              case "end":
                return _context102.stop();
            }
          }
        }, _callee102, this);
      }));

      function _getAddressPretradeTransactions(_x310, _x311, _x312, _x313) {
        return _getAddressPretradeTransactions2.apply(this, arguments);
      }

      return _getAddressPretradeTransactions;
    }()
  }, {
    key: "canFetchTransactions",
    value: function () {
      var _canFetchTransactions = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee103(sessionuuid, walletuuid, currencyuuid) {
        var global, _apicontrollers, session, wallet, currency, pretradescheme, fetchsession;

        return _regeneratorRuntime().wrap(function _callee103$(_context103) {
          while (1) {
            switch (_context103.prev = _context103.next) {
              case 0:
                if (sessionuuid) {
                  _context103.next = 2;
                  break;
                }

                return _context103.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context103.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context103.sent;

                if (session) {
                  _context103.next = 9;
                  break;
                }

                return _context103.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                _context103.next = 11;
                return _apicontrollers.getWalletFromUUID(session, walletuuid)["catch"](function (err) {});

              case 11:
                wallet = _context103.sent;
                _context103.next = 14;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 14:
                currency = _context103.sent;

                if (currency) {
                  _context103.next = 17;
                  break;
                }

                return _context103.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 17:
                _context103.next = 19;
                return this._getPretradeScheme(session, currency);

              case 19:
                pretradescheme = _context103.sent;
                _context103.next = 22;
                return this._getMonitoredSchemeSession(session, wallet, pretradescheme)["catch"](function (err) {});

              case 22:
                fetchsession = _context103.sent;

                if (fetchsession) {
                  _context103.next = 25;
                  break;
                }

                return _context103.abrupt("return", false);

              case 25:
                if (!currency.pretrade_explorer_url) {
                  _context103.next = 29;
                  break;
                }

                return _context103.abrupt("return", true);

              case 29:
                return _context103.abrupt("return", false);

              case 30:
              case "end":
                return _context103.stop();
            }
          }
        }, _callee103, this);
      }));

      function canFetchTransactions(_x314, _x315, _x316) {
        return _canFetchTransactions.apply(this, arguments);
      }

      return canFetchTransactions;
    }()
  }, {
    key: "fetchTransactions",
    value: function () {
      var _fetchTransactions = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee104(sessionuuid, walletuuid, currencyuuid, address) {
        var global, _apicontrollers, session, wallet, currency, transactions, txlist, i, tx, dataobject;

        return _regeneratorRuntime().wrap(function _callee104$(_context104) {
          while (1) {
            switch (_context104.prev = _context104.next) {
              case 0:
                if (sessionuuid) {
                  _context104.next = 2;
                  break;
                }

                return _context104.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context104.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context104.sent;

                if (session) {
                  _context104.next = 9;
                  break;
                }

                return _context104.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                _context104.next = 11;
                return _apicontrollers.getWalletFromUUID(session, walletuuid)["catch"](function (err) {});

              case 11:
                wallet = _context104.sent;
                _context104.next = 14;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 14:
                currency = _context104.sent;

                if (currency) {
                  _context104.next = 17;
                  break;
                }

                return _context104.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 17:
                if (currency.pretrade_explorer_url) {
                  _context104.next = 19;
                  break;
                }

                return _context104.abrupt("return", Promise.reject('no explorer for currency ' + currencyuuid));

              case 19:
                _context104.next = 21;
                return this._getAddressPretradeTransactions(session, wallet, currency, address);

              case 21:
                transactions = _context104.sent;
                // we filter quotes
                txlist = {};
                txlist.bounties = [];
                txlist.claims = [];
                txlist.quotes = [];
                txlist.orders = [];
                txlist.invoices = [];
                txlist.paymentnotices = [];
                i = 0;

              case 30:
                if (!(i < (transactions ? transactions.length : 0))) {
                  _context104.next = 53;
                  break;
                }

                tx = transactions[i];
                dataobject = {};

                this._fillTransactionDataObject(dataobject, tx);

                _context104.t0 = dataobject.type == 'quote';
                _context104.next = _context104.t0 === 'bounty' ? 37 : _context104.t0 === 'claim' ? 39 : _context104.t0 === 'quote' ? 41 : _context104.t0 === 'order' ? 43 : _context104.t0 === 'invoice' ? 45 : _context104.t0 === 'paymentnotice' ? 47 : 49;
                break;

              case 37:
                txlist.bounties.push(dataobject);
                return _context104.abrupt("break", 50);

              case 39:
                txlist.claims.push(dataobject);
                return _context104.abrupt("break", 50);

              case 41:
                txlist.quotes.push(dataobject);
                return _context104.abrupt("break", 50);

              case 43:
                txlist.orders.push(dataobject);
                return _context104.abrupt("break", 50);

              case 45:
                txlist.invoices.push(dataobject);
                return _context104.abrupt("break", 50);

              case 47:
                txlist.paymentnotices.push(dataobject);
                return _context104.abrupt("break", 50);

              case 49:
                return _context104.abrupt("break", 50);

              case 50:
                i++;
                _context104.next = 30;
                break;

              case 53:
                return _context104.abrupt("return", txlist);

              case 54:
              case "end":
                return _context104.stop();
            }
          }
        }, _callee104, this);
      }));

      function fetchTransactions(_x317, _x318, _x319, _x320) {
        return _fetchTransactions.apply(this, arguments);
      }

      return fetchTransactions;
    }() //
    // Bounties
    //

  }, {
    key: "readBounties",
    value: function () {
      var _readBounties = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee105(sessionuuid, walletuuid) {
        var global, _apicontrollers, session, keys, bounty_list;

        return _regeneratorRuntime().wrap(function _callee105$(_context105) {
          while (1) {
            switch (_context105.prev = _context105.next) {
              case 0:
                if (sessionuuid) {
                  _context105.next = 2;
                  break;
                }

                return _context105.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context105.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context105.sent;

                if (session) {
                  _context105.next = 9;
                  break;
                }

                return _context105.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                if (!walletuuid) {
                  keys = ['myquote', 'bounties']; // shared keys
                } else {
                  console.log('WARNING: walletuuid specific case not implemented!!!');
                  keys = ['myquote', 'bounties']; // shared keys, also we could look in wallet
                  // with mvcmodule.getFromWallet
                } //let bounty_list = await _apicontrollers.getLocalJsonLeaf(session, keys, true);


                _context105.next = 12;
                return this._readClientSideJson(session, keys);

              case 12:
                bounty_list = _context105.sent;
                if (!bounty_list) bounty_list = [];
                return _context105.abrupt("return", bounty_list);

              case 15:
              case "end":
                return _context105.stop();
            }
          }
        }, _callee105, this);
      }));

      function readBounties(_x321, _x322) {
        return _readBounties.apply(this, arguments);
      }

      return readBounties;
    }()
  }, {
    key: "fetchBounties",
    value: function () {
      var _fetchBounties = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee106(sessionuuid, walletuuid, currencyuuid, vendor_address) {
        var global, _apicontrollers, session, wallet, currency, transactions, bountylist, i, tx, dataobject;

        return _regeneratorRuntime().wrap(function _callee106$(_context106) {
          while (1) {
            switch (_context106.prev = _context106.next) {
              case 0:
                if (sessionuuid) {
                  _context106.next = 2;
                  break;
                }

                return _context106.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context106.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context106.sent;

                if (session) {
                  _context106.next = 9;
                  break;
                }

                return _context106.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                _context106.next = 11;
                return _apicontrollers.getWalletFromUUID(session, walletuuid)["catch"](function (err) {});

              case 11:
                wallet = _context106.sent;
                _context106.next = 14;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 14:
                currency = _context106.sent;

                if (currency) {
                  _context106.next = 17;
                  break;
                }

                return _context106.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 17:
                if (currency.pretrade_explorer_url) {
                  _context106.next = 19;
                  break;
                }

                return _context106.abrupt("return", Promise.reject('no explorer for currency ' + currencyuuid));

              case 19:
                _context106.next = 21;
                return this._getAddressPretradeTransactions(session, wallet, currency, vendor_address);

              case 21:
                transactions = _context106.sent;
                // we filter bounties
                bountylist = [];

                for (i = 0; i < (transactions ? transactions.length : 0); i++) {
                  tx = transactions[i];
                  dataobject = {};

                  this._fillTransactionDataObject(dataobject, tx);

                  if (dataobject.type == 'bounty' && dataobject.owner == vendor_address) {
                    //await this.saveBounty(sessionuuid, null, dataobject);
                    bountylist.push(dataobject);
                  }
                }

                return _context106.abrupt("return", bountylist);

              case 25:
              case "end":
                return _context106.stop();
            }
          }
        }, _callee106, this);
      }));

      function fetchBounties(_x323, _x324, _x325, _x326) {
        return _fetchBounties.apply(this, arguments);
      }

      return fetchBounties;
    }()
  }, {
    key: "fetchBounty",
    value: function () {
      var _fetchBounty = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee107(sessionuuid, walletuuid, currencyuuid, txhash) {
        var missing_credentials, orgbounty, bounty, submission_options;
        return _regeneratorRuntime().wrap(function _callee107$(_context107) {
          while (1) {
            switch (_context107.prev = _context107.next) {
              case 0:
                missing_credentials = false;
                _context107.next = 3;
                return this.fetchCurrencyTransaction(sessionuuid, walletuuid, currencyuuid, txhash)["catch"](function (err) {
                  console.log('error in fetchBounty: ' + err);
                  if (err == 'ERR_MISSING_CREDENTIALS') missing_credentials = true;
                });

              case 3:
                orgbounty = _context107.sent;

                if (!(missing_credentials === true)) {
                  _context107.next = 6;
                  break;
                }

                return _context107.abrupt("return", Promise.reject('ERR_MISSING_CREDENTIALS'));

              case 6:
                if (orgbounty) {
                  _context107.next = 8;
                  break;
                }

                return _context107.abrupt("return", Promise.reject('ERR_BOUNTY_NOT_FOUND'));

              case 8:
                // we post-process the bounty record
                bounty = {}; // copy the record

                Object.assign(bounty, orgbounty);

                if (!orgbounty.ver) {
                  // version 1
                  bounty.one_submission = false;
                } else if (orgbounty.ver == "2") {
                  submission_options = orgbounty.submission_options;
                  bounty.private_submission = submission_options & 1 ? true : false;
                  bounty.one_submission = submission_options & 2 ? true : false;
                } else {
                  console.log('error: bounty on chain has wrong version number ' + orgbounty.ver);
                }

                return _context107.abrupt("return", bounty);

              case 12:
              case "end":
                return _context107.stop();
            }
          }
        }, _callee107, this);
      }));

      function fetchBounty(_x327, _x328, _x329, _x330) {
        return _fetchBounty.apply(this, arguments);
      }

      return fetchBounty;
    }()
  }, {
    key: "registerBounty",
    value: function () {
      var _registerBounty = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee108(sessionuuid, walletuuid, carduuid, bounty) {
        var _bounty, assignto, txhash;

        return _regeneratorRuntime().wrap(function _callee108$(_context108) {
          while (1) {
            switch (_context108.prev = _context108.next) {
              case 0:
                // we pre-process the bounty before pushing it to the chain
                _bounty = {}; // copy the record

                Object.assign(_bounty, bounty); // put version

                _bounty.ver = "2"; // remove boolean flags

                delete _bounty.private_submission;
                delete _bounty.one_submission; // compute submission_options and add it to _bounty

                _bounty.submission_options = 0;
                if (bounty.private_submission) _bounty.submission_options += 1;
                if (bounty.one_submission) _bounty.submission_options += 2; // in ver="2" we assign to bounty card to minimize transaction list to be retrieved

                assignto = bounty.bounty_card_address;
                _context108.next = 11;
                return this.registerTransaction(sessionuuid, walletuuid, carduuid, _bounty, assignto);

              case 11:
                txhash = _context108.sent;
                return _context108.abrupt("return", txhash);

              case 13:
              case "end":
                return _context108.stop();
            }
          }
        }, _callee108, this);
      }));

      function registerBounty(_x331, _x332, _x333, _x334) {
        return _registerBounty.apply(this, arguments);
      }

      return registerBounty;
    }()
  }, {
    key: "saveBounty",
    value: function () {
      var _saveBounty = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee109(sessionuuid, walletuuid, bounty) {
        var global, _apicontrollers, bounty_list, bInList, i, session, txhash, blocknumber, currencyuuid, owner, title, amount, currency, keys, localjson;

        return _regeneratorRuntime().wrap(function _callee109$(_context109) {
          while (1) {
            switch (_context109.prev = _context109.next) {
              case 0:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context109.next = 4;
                return this.readBounties(sessionuuid, walletuuid);

              case 4:
                bounty_list = _context109.sent;
                // look not in list
                bInList = false;
                i = 0;

              case 7:
                if (!(i < bounty_list.length)) {
                  _context109.next = 14;
                  break;
                }

                if (!(bounty_list[i].txhash == bounty.txhash)) {
                  _context109.next = 11;
                  break;
                }

                bInList = true;
                return _context109.abrupt("break", 14);

              case 11:
                i++;
                _context109.next = 7;
                break;

              case 14:
                if (bInList) {
                  _context109.next = 28;
                  break;
                }

                _context109.next = 17;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 17:
                session = _context109.sent;

                if (session) {
                  _context109.next = 20;
                  break;
                }

                return _context109.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 20:
                // bounty parameters to be saved
                txhash = bounty.txhash, blocknumber = bounty.blocknumber, currencyuuid = bounty.currencyuuid, owner = bounty.owner, title = bounty.title, amount = bounty.amount, currency = bounty.currency;

                if (!walletuuid) {
                  keys = ['myquote', 'bounties']; // shared keys
                } else {
                  console.log('WARNING: walletuuid specific case not implemented!!!');
                  keys = ['myquote', 'bounties']; // shared keys, also we could put in wallet
                  // with mvcmodule.putInWallet			
                }

                localjson = {
                  txhash: txhash,
                  blocknumber: blocknumber,
                  currencyuuid: currencyuuid,
                  owner: owner,
                  title: title,
                  amount: amount,
                  currency: currency
                };
                localjson.savetime = Date.now();
                bounty_list.push(localjson); //return _apicontrollers.saveLocalJson(session, keys, bounty_list);

                return _context109.abrupt("return", this._saveClientSideJson(session, keys, bounty_list));

              case 28:
                return _context109.abrupt("return", bounty_list);

              case 29:
              case "end":
                return _context109.stop();
            }
          }
        }, _callee109, this);
      }));

      function saveBounty(_x335, _x336, _x337) {
        return _saveBounty.apply(this, arguments);
      }

      return saveBounty;
    }() // chain persistence

  }, {
    key: "_getBountyAssignAddress",
    value: function _getBountyAssignAddress(session, bounty) {
      var assign_address;
      if (!bounty.ver) assign_address = bounty.owner;
      if (bounty.ver == "2") assign_address = bounty.bounty_card_address; // bounty card has less transactions

      return assign_address;
    }
  }, {
    key: "fetchClaims",
    value: function () {
      var _fetchClaims = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee110(sessionuuid, walletuuid, currencyuuid, bountyhash) {
        var global, _apicontrollers, session, wallet, currency, bounty, assign_address, transactions, claimmap, i, tx, dataobject, latest, first, claimlist, arr, entry;

        return _regeneratorRuntime().wrap(function _callee110$(_context110) {
          while (1) {
            switch (_context110.prev = _context110.next) {
              case 0:
                if (sessionuuid) {
                  _context110.next = 2;
                  break;
                }

                return _context110.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context110.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context110.sent;

                if (session) {
                  _context110.next = 9;
                  break;
                }

                return _context110.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                _context110.next = 11;
                return _apicontrollers.getWalletFromUUID(session, walletuuid)["catch"](function (err) {});

              case 11:
                wallet = _context110.sent;
                _context110.next = 14;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 14:
                currency = _context110.sent;

                if (currency) {
                  _context110.next = 17;
                  break;
                }

                return _context110.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 17:
                if (currency.pretrade_explorer_url) {
                  _context110.next = 19;
                  break;
                }

                return _context110.abrupt("return", Promise.reject('no explorer for currency ' + currencyuuid));

              case 19:
                _context110.next = 21;
                return this.fetchBounty(sessionuuid, walletuuid, currencyuuid, bountyhash);

              case 21:
                bounty = _context110.sent;
                assign_address = this._getBountyAssignAddress(session, bounty); // use explorer to fetch transactions for address

                _context110.next = 25;
                return this._getAddressPretradeTransactions(session, wallet, currency, assign_address);

              case 25:
                transactions = _context110.sent;
                // we filter claims
                claimmap = {};
                i = 0;

              case 28:
                if (!(i < (transactions ? transactions.length : 0))) {
                  _context110.next = 41;
                  break;
                }

                tx = transactions[i];
                dataobject = {};

                this._fillTransactionDataObject(dataobject, tx);

                if (!(dataobject.type == 'claim' && dataobject.bounty == bountyhash)) {
                  _context110.next = 38;
                  break;
                }

                if (dataobject.uuid) {
                  _context110.next = 37;
                  break;
                }

                // add an uuid now
                dataobject.uuid = session.guid();
                _context110.next = 37;
                return this.saveClaim(sessionuuid, null, dataobject);

              case 37:
                if (claimmap[dataobject.uuid]) {
                  // keep the latest (full copy persistence)
                  latest = claimmap[dataobject.uuid].latest;

                  if (dataobject.blocknumber > latest.blocknumber) {
                    claimmap[dataobject.uuid].latest = dataobject;
                  } else if (dataobject.blocknumber == latest.blocknumber && dataobject.ordId > (latest.ordId ? latest.ordId : 0)) {
                    claimmap[dataobject.uuid].latest = dataobject;
                  } // update if first come afterward in list


                  first = claimmap[dataobject.uuid].latest;

                  if (dataobject.blocknumber < first.blocknumber) {
                    claimmap[dataobject.uuid].first = dataobject;
                  } else if (dataobject.blocknumber == latest.blocknumber && (dataobject.ordId ? dataobject.ordId : 0) < (first.ordId ? first.ordId : 0)) {
                    claimmap[dataobject.uuid].first = dataobject;
                  }
                } else {
                  //claimmap[dataobject.uuid] = dataobject;
                  claimmap[dataobject.uuid] = {
                    first: dataobject,
                    latest: dataobject
                  };
                }

              case 38:
                i++;
                _context110.next = 28;
                break;

              case 41:
                claimlist = [];
                arr = Object.values(claimmap);

                for (i = 0; i < (arr ? arr.length : 0); i++) {
                  entry = Object.assign({}, arr[i].latest);
                  entry.update_blocktime = entry.blocktime;
                  entry.update_blocknumber = entry.blocknumber;
                  entry.blocktime = arr[i].first.blocktime;
                  entry.blocknumber = arr[i].first.blocknumber;
                  claimlist.push(entry);
                }

                return _context110.abrupt("return", claimlist);

              case 45:
              case "end":
                return _context110.stop();
            }
          }
        }, _callee110, this);
      }));

      function fetchClaims(_x338, _x339, _x340, _x341) {
        return _fetchClaims.apply(this, arguments);
      }

      return fetchClaims;
    }()
  }, {
    key: "fetchClaim",
    value: function () {
      var _fetchClaim = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee111(sessionuuid, walletuuid, currencyuuid, txhash) {
        var missing_credentials, orgclaim, claim, claims, i, clm;
        return _regeneratorRuntime().wrap(function _callee111$(_context111) {
          while (1) {
            switch (_context111.prev = _context111.next) {
              case 0:
                missing_credentials = false;
                _context111.next = 3;
                return this.fetchCurrencyTransaction(sessionuuid, walletuuid, currencyuuid, txhash)["catch"](function (err) {
                  console.log('error in fetchClaim: ' + err);
                  if (err == 'ERR_MISSING_CREDENTIALS') missing_credentials = true;
                });

              case 3:
                orgclaim = _context111.sent;

                if (!(missing_credentials === true)) {
                  _context111.next = 6;
                  break;
                }

                return _context111.abrupt("return", Promise.reject('ERR_MISSING_CREDENTIALS'));

              case 6:
                if (orgclaim) {
                  _context111.next = 8;
                  break;
                }

                return _context111.abrupt("return", Promise.reject('ERR_CLAIM_NOT_FOUND'));

              case 8:
                if (orgclaim.uuid) {
                  _context111.next = 10;
                  break;
                }

                return _context111.abrupt("return", Promise.reject('claim was not registered with a proper uuid ' + txhash));

              case 10:
                // we scan the claims to see if the original claim has been updated
                // with new record
                claim = orgclaim;
                _context111.next = 13;
                return this.fetchClaims(sessionuuid, walletuuid, currencyuuid, claim.bounty);

              case 13:
                claims = _context111.sent;
                i = 0;

              case 15:
                if (!(i < (claims ? claims.length : 0))) {
                  _context111.next = 23;
                  break;
                }

                clm = claims[i];

                if (!(clm.uuid === orgclaim.uuid)) {
                  _context111.next = 20;
                  break;
                }

                claim = claims[i];
                return _context111.abrupt("break", 23);

              case 20:
                i++;
                _context111.next = 15;
                break;

              case 23:
                return _context111.abrupt("return", claim);

              case 24:
              case "end":
                return _context111.stop();
            }
          }
        }, _callee111, this);
      }));

      function fetchClaim(_x342, _x343, _x344, _x345) {
        return _fetchClaim.apply(this, arguments);
      }

      return fetchClaim;
    }()
  }, {
    key: "canRegisterClaim",
    value: function () {
      var _canRegisterClaim = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee112(sessionuuid, walletuuid, carduuid, claim) {
        var bounty, claims, owner_map, payingto_map, i, clm;
        return _regeneratorRuntime().wrap(function _callee112$(_context112) {
          while (1) {
            switch (_context112.prev = _context112.next) {
              case 0:
                _context112.next = 2;
                return this.fetchBounty(sessionuuid, walletuuid, claim.currencyuuid, claim.bounty);

              case 2:
                bounty = _context112.sent;

                if (!(bounty.one_submission === true)) {
                  _context112.next = 14;
                  break;
                }

                _context112.next = 6;
                return this.fetchClaims(sessionuuid, bounty.currencyuuid, bounty.txhash);

              case 6:
                claims = _context112.sent;
                owner_map = {};
                payingto_map = {};

                for (i = 0; i < (claims ? claims.length : 0); i++) {
                  clm = claims[i];
                  if (clm.owner) owner_map[clm.owner] = clm.owner;
                  if (clm.payingto) payingto_map[clm.payingto] = clm.payingto;
                }

                if (!owner_map[claim.owner]) {
                  _context112.next = 12;
                  break;
                }

                return _context112.abrupt("return", false);

              case 12:
                if (!(claim.payingto && payingto_map[claim.payingto])) {
                  _context112.next = 14;
                  break;
                }

                return _context112.abrupt("return", false);

              case 14:
                return _context112.abrupt("return", true);

              case 15:
              case "end":
                return _context112.stop();
            }
          }
        }, _callee112, this);
      }));

      function canRegisterClaim(_x346, _x347, _x348, _x349) {
        return _canRegisterClaim.apply(this, arguments);
      }

      return canRegisterClaim;
    }()
  }, {
    key: "registerClaim",
    value: function () {
      var _registerClaim = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee113(sessionuuid, walletuuid, carduuid, claim) {
        var global, _apicontrollers, session, wallet, card, cardsession, claimuuid, bounty, assign_address, txhash;

        return _regeneratorRuntime().wrap(function _callee113$(_context113) {
          while (1) {
            switch (_context113.prev = _context113.next) {
              case 0:
                if (sessionuuid) {
                  _context113.next = 2;
                  break;
                }

                return _context113.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context113.next = 4;
                  break;
                }

                return _context113.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (carduuid) {
                  _context113.next = 6;
                  break;
                }

                return _context113.abrupt("return", Promise.reject('card uuid is undefined'));

              case 6:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context113.next = 10;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 10:
                session = _context113.sent;

                if (session) {
                  _context113.next = 13;
                  break;
                }

                return _context113.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 13:
                _context113.next = 15;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 15:
                wallet = _context113.sent;

                if (wallet) {
                  _context113.next = 18;
                  break;
                }

                return _context113.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 18:
                _context113.next = 20;
                return wallet.getCardFromUUID(carduuid);

              case 20:
                card = _context113.sent;

                if (card) {
                  _context113.next = 23;
                  break;
                }

                return _context113.abrupt("return", Promise.reject('could not find card ' + carduuid));

              case 23:
                _context113.next = 25;
                return this._getMonitoredCardSession(session, wallet, card);

              case 25:
                cardsession = _context113.sent;
                // we add an uuid to the claim that will live in multiple txhash
                claimuuid = cardsession.guid();
                claim.uuid = claimuuid;
                _context113.next = 30;
                return this.fetchBounty(sessionuuid, walletuuid, claim.currencyuuid, claim.bounty);

              case 30:
                bounty = _context113.sent;
                assign_address = this._getBountyAssignAddress(session, bounty);
                _context113.next = 34;
                return this.registerTransaction(sessionuuid, walletuuid, carduuid, claim, assign_address);

              case 34:
                txhash = _context113.sent;
                return _context113.abrupt("return", txhash);

              case 36:
              case "end":
                return _context113.stop();
            }
          }
        }, _callee113, this);
      }));

      function registerClaim(_x350, _x351, _x352, _x353) {
        return _registerClaim.apply(this, arguments);
      }

      return registerClaim;
    }()
  }, {
    key: "updateClaim",
    value: function () {
      var _updateClaim = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee114(sessionuuid, walletuuid, carduuid, claim) {
        var global, _apicontrollers, session, wallet, bounty, assign_address, txhash;

        return _regeneratorRuntime().wrap(function _callee114$(_context114) {
          while (1) {
            switch (_context114.prev = _context114.next) {
              case 0:
                if (sessionuuid) {
                  _context114.next = 2;
                  break;
                }

                return _context114.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context114.next = 4;
                  break;
                }

                return _context114.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context114.next = 8;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 8:
                session = _context114.sent;

                if (session) {
                  _context114.next = 11;
                  break;
                }

                return _context114.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 11:
                _context114.next = 13;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 13:
                wallet = _context114.sent;

                if (wallet) {
                  _context114.next = 16;
                  break;
                }

                return _context114.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 16:
                _context114.next = 18;
                return this.fetchBounty(sessionuuid, walletuuid, claim.currencyuuid, claim.bounty);

              case 18:
                bounty = _context114.sent;
                assign_address = this._getBountyAssignAddress(session, bounty);

                if (claim.uuid) {
                  _context114.next = 22;
                  break;
                }

                return _context114.abrupt("return", Promise.reject('claim has no uuid ' + claim.txhash));

              case 22:
                _context114.next = 24;
                return this.registerTransaction(sessionuuid, walletuuid, carduuid, claim, assign_address);

              case 24:
                txhash = _context114.sent;

                if (!txhash) {
                  _context114.next = 28;
                  break;
                }

                _context114.next = 28;
                return this.saveClaim(sessionuuid, walletuuid, claim);

              case 28:
                return _context114.abrupt("return", txhash);

              case 29:
              case "end":
                return _context114.stop();
            }
          }
        }, _callee114, this);
      }));

      function updateClaim(_x354, _x355, _x356, _x357) {
        return _updateClaim.apply(this, arguments);
      }

      return updateClaim;
    }() // storage

  }, {
    key: "_readClaims",
    value: function () {
      var _readClaims2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee115(session, keys) {
        var global, _apicontrollers, claim_list;

        return _regeneratorRuntime().wrap(function _callee115$(_context115) {
          while (1) {
            switch (_context115.prev = _context115.next) {
              case 0:
                global = this.global;
                _apicontrollers = this._getClientAPI(); //var claim_list = await _apicontrollers.getLocalJsonLeaf(session, keys, true);

                _context115.next = 4;
                return this._readClientSideJson(session, keys);

              case 4:
                claim_list = _context115.sent;
                if (!claim_list) claim_list = [];
                return _context115.abrupt("return", claim_list);

              case 7:
              case "end":
                return _context115.stop();
            }
          }
        }, _callee115, this);
      }));

      function _readClaims(_x358, _x359) {
        return _readClaims2.apply(this, arguments);
      }

      return _readClaims;
    }()
  }, {
    key: "readClaims",
    value: function () {
      var _readClaims3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee116(sessionuuid, walletuuid) {
        var global, _apicontrollers, session, keys, claim_list, unhandled_claims, i, claim;

        return _regeneratorRuntime().wrap(function _callee116$(_context116) {
          while (1) {
            switch (_context116.prev = _context116.next) {
              case 0:
                if (sessionuuid) {
                  _context116.next = 2;
                  break;
                }

                return _context116.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context116.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context116.sent;

                if (session) {
                  _context116.next = 9;
                  break;
                }

                return _context116.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                if (!walletuuid) {
                  keys = ['myquote', 'claims']; // shared keys
                } else {
                  console.log('WARNING: walletuuid specific case not implemented!!!');
                  keys = ['myquote', 'claims']; // shared keys, otherwise we could look in wallet
                  // with mvcmodule.getFromWallet
                }

                _context116.next = 12;
                return this._readClaims(session, keys);

              case 12:
                claim_list = _context116.sent;
                // we go through the list to see if some 'unhandled yet' claims
                // need to be checked
                unhandled_claims = [];

                for (i = 0; i < claim_list.length; i++) {
                  if (claim_list[i].status === 0) unhandled_claims.push(claim_list[i]);
                } // then fetch for each claim (could be speeded up if necessary)


                i = 0;

              case 16:
                if (!(i < unhandled_claims.length)) {
                  _context116.next = 26;
                  break;
                }

                _context116.next = 19;
                return this.fetchClaim(sessionuuid, walletuuid, unhandled_claims[i].currencyuuid, unhandled_claims[i].txhash)["catch"](function (err) {});

              case 19:
                claim = _context116.sent;

                if (!(claim && claim.status !== 0)) {
                  _context116.next = 23;
                  break;
                }

                _context116.next = 23;
                return this.saveClaim(sessionuuid, walletuuid, claim);

              case 23:
                i++;
                _context116.next = 16;
                break;

              case 26:
                return _context116.abrupt("return", claim_list);

              case 27:
              case "end":
                return _context116.stop();
            }
          }
        }, _callee116, this);
      }));

      function readClaims(_x360, _x361) {
        return _readClaims3.apply(this, arguments);
      }

      return readClaims;
    }()
  }, {
    key: "saveClaim",
    value: function () {
      var _saveClaim = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee117(sessionuuid, walletuuid, claim) {
        var global, _apicontrollers, session, keys, claim_list, bInList, claim_index, i, uuid, txhash, blocknumber, currencyuuid, owner, bounty, amount, currency, private_submission, answer, status, pretradescheme_info, bountyobject, title, localjson, _title, savetime;

        return _regeneratorRuntime().wrap(function _callee117$(_context117) {
          while (1) {
            switch (_context117.prev = _context117.next) {
              case 0:
                if (sessionuuid) {
                  _context117.next = 2;
                  break;
                }

                return _context117.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context117.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context117.sent;

                if (session) {
                  _context117.next = 9;
                  break;
                }

                return _context117.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                if (!walletuuid) {
                  keys = ['myquote', 'claims']; // shared keys
                } else {
                  console.log('WARNING: walletuuid specific case not implemented!!!');
                  keys = ['myquote', 'claims']; // shared keys, also we could put in wallet
                  // with mvcmodule.putInWallet
                }

                _context117.next = 12;
                return this._readClaims(session, keys);

              case 12:
                claim_list = _context117.sent;
                bInList = false;
                i = 0;

              case 15:
                if (!(i < claim_list.length)) {
                  _context117.next = 27;
                  break;
                }

                if (!(claim.txhash && claim_list[i].txhash == claim.txhash)) {
                  _context117.next = 20;
                  break;
                }

                bInList = true;
                claim_index = i;
                return _context117.abrupt("break", 27);

              case 20:
                if (!(claim.uuid && claim_list[i].uuid == claim.uuid)) {
                  _context117.next = 24;
                  break;
                }

                bInList = true;
                claim_index = i;
                return _context117.abrupt("break", 27);

              case 24:
                i++;
                _context117.next = 15;
                break;

              case 27:
                if (bInList) {
                  _context117.next = 41;
                  break;
                }

                // add new element to the list
                // claim parameters
                uuid = claim.uuid, txhash = claim.txhash, blocknumber = claim.blocknumber, currencyuuid = claim.currencyuuid, owner = claim.owner, bounty = claim.bounty, amount = claim.amount, currency = claim.currency, private_submission = claim.private_submission, answer = claim.answer, status = claim.status; // read bounty to get title

                _context117.next = 31;
                return this.getPretradeSchemeInfo(sessionuuid, currencyuuid);

              case 31:
                pretradescheme_info = _context117.sent;
                _context117.next = 34;
                return this.fetchTransaction(sessionuuid, walletuuid, pretradescheme_info.uuid, bounty)["catch"](function (err) {});

              case 34:
                bountyobject = _context117.sent;
                title = bountyobject ? bountyobject.title : null;
                localjson = {
                  uuid: uuid,
                  txhash: txhash,
                  blocknumber: blocknumber,
                  currencyuuid: currencyuuid,
                  owner: owner,
                  bounty: bounty,
                  title: title,
                  amount: amount,
                  currency: currency,
                  private_submission: private_submission,
                  answer: answer,
                  status: status
                };
                localjson.savetime = Date.now();
                claim_list.push(localjson);
                _context117.next = 46;
                break;

              case 41:
                // we update claim at correct index (transfering additional parameters)
                _title = claim_list[claim_index].title;
                savetime = claim_list[claim_index].savetime;
                claim_list[claim_index] = claim;
                claim_list[claim_index].title = _title;
                claim_list[claim_index].savetime = savetime;

              case 46:
                return _context117.abrupt("return", this._saveClientSideJson(session, keys, claim_list));

              case 47:
              case "end":
                return _context117.stop();
            }
          }
        }, _callee117, this);
      }));

      function saveClaim(_x362, _x363, _x364) {
        return _saveClaim.apply(this, arguments);
      }

      return saveClaim;
    }() //
    // Deeds
    //

  }, {
    key: "_getMonitoredERC721TokenSession",
    value: function () {
      var _getMonitoredERC721TokenSession2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee118(session, wallet, currency) {
        var global, _apicontrollers, currencyscheme, childsession, ethnodemodule, ethereumnodeaccessinstance;

        return _regeneratorRuntime().wrap(function _callee118$(_context118) {
          while (1) {
            switch (_context118.prev = _context118.next) {
              case 0:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context118.next = 4;
                return this._getCurrencyScheme(session, currency);

              case 4:
                currencyscheme = _context118.sent;
                _context118.next = 7;
                return this._getMonitoredSchemeSession(session, wallet, currencyscheme);

              case 7:
                childsession = _context118.sent;

                if (!(currencyscheme.isRemote() === true)) {
                  _context118.next = 16;
                  break;
                }

                // remote (or at least for authkey, we could check that ehtnodeserver is indeed remote)
                ethnodemodule = global.getModuleObject('ethnode');
                ethereumnodeaccessinstance = ethnodemodule.getEthereumNodeAccessInstance(childsession); // TODO: could be better to use
                // var ethereumnodeaccessinstance = _apicontrollers.getEthereumNodeAccessInstance(childsession);

                if (!(this.contract_path_root_uri && ethereumnodeaccessinstance.web3_setArtifactRootUri)) {
                  _context118.next = 14;
                  break;
                }

                _context118.next = 14;
                return ethereumnodeaccessinstance.web3_setArtifactRootUri(this.contract_path_root_uri);

              case 14:
                _context118.next = 16;
                break;

              case 16:
                return _context118.abrupt("return", childsession);

              case 17:
              case "end":
                return _context118.stop();
            }
          }
        }, _callee118, this);
      }));

      function _getMonitoredERC721TokenSession(_x365, _x366, _x367) {
        return _getMonitoredERC721TokenSession2.apply(this, arguments);
      }

      return _getMonitoredERC721TokenSession;
    }() // minter

  }, {
    key: "_createERC721TokenObject",
    value: function () {
      var _createERC721TokenObject2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee119(session, currency, data) {
        var global, mvcerc721module, erc721token;
        return _regeneratorRuntime().wrap(function _callee119$(_context119) {
          while (1) {
            switch (_context119.prev = _context119.next) {
              case 0:
                // for local contract objects (before deployment)
                global = this.global;
                mvcerc721module = global.getModuleObject('mvc-erc721');
                _context119.next = 4;
                return mvcerc721module.createERC721TokenObject(session, currency, data);

              case 4:
                erc721token = _context119.sent;
                return _context119.abrupt("return", erc721token);

              case 6:
              case "end":
                return _context119.stop();
            }
          }
        }, _callee119, this);
      }));

      function _createERC721TokenObject(_x368, _x369, _x370) {
        return _createERC721TokenObject2.apply(this, arguments);
      }

      return _createERC721TokenObject;
    }()
  }, {
    key: "deployDeedMinter",
    value: function () {
      var _deployDeedMinter = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee120(sessionuuid, walletuuid, currencyuuid, carduuid, minter, feelevel) {
        var global, _apicontrollers, session, wallet, currency, card, childsession, data, erc721token, fromaccount, from_card_scheme, ethereumnodeaccessmodule, ethereumtransaction, fee, contractaddress, erc721tokenaddress, txhash;

        return _regeneratorRuntime().wrap(function _callee120$(_context120) {
          while (1) {
            switch (_context120.prev = _context120.next) {
              case 0:
                if (sessionuuid) {
                  _context120.next = 2;
                  break;
                }

                return _context120.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context120.next = 4;
                  break;
                }

                return _context120.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (currencyuuid) {
                  _context120.next = 6;
                  break;
                }

                return _context120.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 6:
                if (carduuid) {
                  _context120.next = 8;
                  break;
                }

                return _context120.abrupt("return", Promise.reject('card uuid is undefined'));

              case 8:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context120.next = 12;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 12:
                session = _context120.sent;

                if (session) {
                  _context120.next = 15;
                  break;
                }

                return _context120.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 15:
                _context120.next = 17;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 17:
                wallet = _context120.sent;

                if (wallet) {
                  _context120.next = 20;
                  break;
                }

                return _context120.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 20:
                _context120.next = 22;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 22:
                currency = _context120.sent;

                if (currency) {
                  _context120.next = 25;
                  break;
                }

                return _context120.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 25:
                _context120.next = 27;
                return wallet.getCardFromUUID(carduuid);

              case 27:
                card = _context120.sent;

                if (card) {
                  _context120.next = 30;
                  break;
                }

                return _context120.abrupt("return", Promise.reject('could not find card ' + carduuid));

              case 30:
                _context120.next = 32;
                return this._getMonitoredERC721TokenSession(session, wallet, currency);

              case 32:
                childsession = _context120.sent;
                // create contract object (local)
                data = Object.create(null);
                data['name'] = minter.name;
                data['symbol'] = minter.symbol;
                data['basetokenuri'] = minter.basetokenuri;
                _context120.next = 39;
                return this._createERC721TokenObject(childsession, currency, data);

              case 39:
                erc721token = _context120.sent;
                fromaccount = card._getSessionAccountObject();
                from_card_scheme = card.getScheme();
                ethereumnodeaccessmodule = global.getModuleObject('ethereum-node-access');
                ethereumtransaction = ethereumnodeaccessmodule.getEthereumTransactionObject(childsession, fromaccount); // fee

                _context120.next = 46;
                return _apicontrollers.createSchemeFee(from_card_scheme, feelevel);

              case 46:
                fee = _context120.sent;
                ethereumtransaction.setGas(fee.gaslimit);
                ethereumtransaction.setGasPrice(fee.gasPrice);
                _context120.next = 51;
                return erc721token.deploy(ethereumtransaction);

              case 51:
                contractaddress = _context120.sent;
                erc721tokenaddress = erc721token.getAddress();

                if (erc721tokenaddress) {
                  _context120.next = 55;
                  break;
                }

                return _context120.abrupt("return", Promise.reject('could not generate a minter for currency ' + currencyuuid));

              case 55:
                minter.address = erc721tokenaddress;
                minter.card_uuid = carduuid;
                minter.card_address = card.getAddress(); // we save the mapping

                _context120.next = 60;
                return this._putAddressLockerContent(session, wallet, currency, card, erc721tokenaddress);

              case 60:
                txhash = _context120.sent;
                minter.txhash = txhash;
                return _context120.abrupt("return", minter);

              case 63:
              case "end":
                return _context120.stop();
            }
          }
        }, _callee120, this);
      }));

      function deployDeedMinter(_x371, _x372, _x373, _x374, _x375, _x376) {
        return _deployDeedMinter.apply(this, arguments);
      }

      return deployDeedMinter;
    }()
  }, {
    key: "_putAddressLockerContent",
    value: function () {
      var _putAddressLockerContent2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee121(session, wallet, currency, card, contentstring) {
        var global, _apicontrollers, childsession, mvcerc721module, fromaccount, from_card_scheme, ethereumnodeaccessmodule, ethereumtransaction, tx_fee, minter_cost_units, _feelevel, fee;

        return _regeneratorRuntime().wrap(function _callee121$(_context121) {
          while (1) {
            switch (_context121.prev = _context121.next) {
              case 0:
                global = this.global;
                _apicontrollers = this._getClientAPI(); // get proper session to access erc21token for currency

                _context121.next = 4;
                return this._getMonitoredERC721TokenSession(session, wallet, currency);

              case 4:
                childsession = _context121.sent;
                mvcerc721module = global.getModuleObject('mvc-erc721');
                fromaccount = card._getSessionAccountObject();
                from_card_scheme = card.getScheme();
                ethereumnodeaccessmodule = global.getModuleObject('ethereum-node-access');
                ethereumtransaction = ethereumnodeaccessmodule.getEthereumTransactionObject(childsession, fromaccount); // compute feelevel then create fee

                tx_fee = {};
                tx_fee.transferred_credit_units = 0;
                minter_cost_units = currency.deeds_v1.locker_put_cost_units ? parseInt(currency.deeds_v1.locker_put_cost_units) : 2;
                tx_fee.estimated_cost_units = minter_cost_units;
                _context121.next = 16;
                return this._getRecommendedFeeLevel(session, wallet, card, tx_fee);

              case 16:
                _feelevel = _context121.sent;
                _context121.next = 19;
                return _apicontrollers.createSchemeFee(from_card_scheme, _feelevel);

              case 19:
                fee = _context121.sent;
                ethereumtransaction.setGas(fee.gaslimit);
                ethereumtransaction.setGasPrice(fee.gasPrice);
                return _context121.abrupt("return", mvcerc721module.putLockerContent(childsession, currency, contentstring, ethereumtransaction));

              case 23:
              case "end":
                return _context121.stop();
            }
          }
        }, _callee121, this);
      }));

      function _putAddressLockerContent(_x377, _x378, _x379, _x380, _x381) {
        return _putAddressLockerContent2.apply(this, arguments);
      }

      return _putAddressLockerContent;
    }()
  }, {
    key: "_getAddressLockerContent",
    value: function () {
      var _getAddressLockerContent2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee122(session, wallet, currency, card_address) {
        var global, _apicontrollers, childsession, mvcerc721module;

        return _regeneratorRuntime().wrap(function _callee122$(_context122) {
          while (1) {
            switch (_context122.prev = _context122.next) {
              case 0:
                global = this.global;
                _apicontrollers = this._getClientAPI(); // get proper session to access erc21token for currency

                _context122.next = 4;
                return this._getMonitoredERC721TokenSession(session, wallet, currency);

              case 4:
                childsession = _context122.sent;
                mvcerc721module = global.getModuleObject('mvc-erc721');
                return _context122.abrupt("return", mvcerc721module.getLockerContent(childsession, currency, card_address));

              case 7:
              case "end":
                return _context122.stop();
            }
          }
        }, _callee122, this);
      }));

      function _getAddressLockerContent(_x382, _x383, _x384, _x385) {
        return _getAddressLockerContent2.apply(this, arguments);
      }

      return _getAddressLockerContent;
    }()
  }, {
    key: "_fetchDeedMinterFromAddress",
    value: function () {
      var _fetchDeedMinterFromAddress2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee123(session, wallet, currency, minteraddress) {
        var global, childsession, minter, data, mvcerc721module, erc721token, name, symbol;
        return _regeneratorRuntime().wrap(function _callee123$(_context123) {
          while (1) {
            switch (_context123.prev = _context123.next) {
              case 0:
                if (minteraddress) {
                  _context123.next = 2;
                  break;
                }

                return _context123.abrupt("return", Promise.reject('can only instantiate minters already on the chain'));

              case 2:
                global = this.global; // get proper session to access erc721token for currency

                _context123.next = 5;
                return this._getMonitoredERC721TokenSession(session, wallet, currency);

              case 5:
                childsession = _context123.sent;
                // we read the token elements
                minter = {
                  address: minteraddress
                }; // create contract object (already deployed)

                data = Object.create(null);
                data['address'] = minteraddress;
                mvcerc721module = global.getModuleObject('mvc-erc721');
                _context123.next = 12;
                return mvcerc721module.createERC721TokenObject(childsession, currency, data);

              case 12:
                erc721token = _context123.sent;
                _context123.next = 15;
                return erc721token.getChainName();

              case 15:
                name = _context123.sent;
                _context123.next = 18;
                return erc721token.getChainSymbol();

              case 18:
                symbol = _context123.sent;
                minter.name = name;
                minter.symbol = symbol;
                minter.currencyuuid = currency.uuid;
                minter.address = minteraddress;
                return _context123.abrupt("return", minter);

              case 24:
              case "end":
                return _context123.stop();
            }
          }
        }, _callee123, this);
      }));

      function _fetchDeedMinterFromAddress(_x386, _x387, _x388, _x389) {
        return _fetchDeedMinterFromAddress2.apply(this, arguments);
      }

      return _fetchDeedMinterFromAddress;
    }()
  }, {
    key: "fetchDeedMinterFromAddress",
    value: function () {
      var _fetchDeedMinterFromAddress3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee124(sessionuuid, walletuuid, currencyuuid, minteraddress) {
        var global, _apicontrollers, session, wallet, currency, minter;

        return _regeneratorRuntime().wrap(function _callee124$(_context124) {
          while (1) {
            switch (_context124.prev = _context124.next) {
              case 0:
                if (sessionuuid) {
                  _context124.next = 2;
                  break;
                }

                return _context124.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (currencyuuid) {
                  _context124.next = 4;
                  break;
                }

                return _context124.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 4:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context124.next = 8;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 8:
                session = _context124.sent;

                if (session) {
                  _context124.next = 11;
                  break;
                }

                return _context124.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 11:
                _context124.next = 13;
                return _apicontrollers.getWalletFromUUID(session, walletuuid)["catch"](function (err) {});

              case 13:
                wallet = _context124.sent;
                _context124.next = 16;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 16:
                currency = _context124.sent;

                if (currency) {
                  _context124.next = 19;
                  break;
                }

                return _context124.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 19:
                _context124.next = 21;
                return this._fetchDeedMinterFromAddress(session, wallet, currency, minteraddress);

              case 21:
                minter = _context124.sent;
                return _context124.abrupt("return", minter);

              case 23:
              case "end":
                return _context124.stop();
            }
          }
        }, _callee124, this);
      }));

      function fetchDeedMinterFromAddress(_x390, _x391, _x392, _x393) {
        return _fetchDeedMinterFromAddress3.apply(this, arguments);
      }

      return fetchDeedMinterFromAddress;
    }()
  }, {
    key: "fetchDeedMinterFromOwner",
    value: function () {
      var _fetchDeedMinterFromOwner = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee125(sessionuuid, walletuuid, currencyuuid, owneraddress) {
        var global, _apicontrollers, session, wallet, currency, minteraddress, minter;

        return _regeneratorRuntime().wrap(function _callee125$(_context125) {
          while (1) {
            switch (_context125.prev = _context125.next) {
              case 0:
                if (sessionuuid) {
                  _context125.next = 2;
                  break;
                }

                return _context125.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (currencyuuid) {
                  _context125.next = 4;
                  break;
                }

                return _context125.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 4:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context125.next = 8;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 8:
                session = _context125.sent;

                if (session) {
                  _context125.next = 11;
                  break;
                }

                return _context125.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 11:
                _context125.next = 13;
                return _apicontrollers.getWalletFromUUID(session, walletuuid)["catch"](function (err) {});

              case 13:
                wallet = _context125.sent;
                _context125.next = 16;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 16:
                currency = _context125.sent;

                if (currency) {
                  _context125.next = 19;
                  break;
                }

                return _context125.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 19:
                _context125.next = 21;
                return this._getAddressLockerContent(session, wallet, currency, owneraddress);

              case 21:
                minteraddress = _context125.sent;
                _context125.next = 24;
                return this._fetchDeedMinterFromAddress(session, wallet, currency, minteraddress);

              case 24:
                minter = _context125.sent;
                return _context125.abrupt("return", minter);

              case 26:
              case "end":
                return _context125.stop();
            }
          }
        }, _callee125, this);
      }));

      function fetchDeedMinterFromOwner(_x394, _x395, _x396, _x397) {
        return _fetchDeedMinterFromOwner.apply(this, arguments);
      }

      return fetchDeedMinterFromOwner;
    }()
  }, {
    key: "fetchDeedMinter",
    value: function () {
      var _fetchDeedMinter = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee126(sessionuuid, walletuuid, currencyuuid, carduuid) {
        var global, _apicontrollers, session, wallet, currency, card, card_address, erc721tokenaddress, minter;

        return _regeneratorRuntime().wrap(function _callee126$(_context126) {
          while (1) {
            switch (_context126.prev = _context126.next) {
              case 0:
                if (sessionuuid) {
                  _context126.next = 2;
                  break;
                }

                return _context126.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context126.next = 4;
                  break;
                }

                return _context126.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (currencyuuid) {
                  _context126.next = 6;
                  break;
                }

                return _context126.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 6:
                if (carduuid) {
                  _context126.next = 8;
                  break;
                }

                return _context126.abrupt("return", Promise.reject('card uuid is undefined'));

              case 8:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context126.next = 12;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 12:
                session = _context126.sent;

                if (session) {
                  _context126.next = 15;
                  break;
                }

                return _context126.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 15:
                _context126.next = 17;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 17:
                wallet = _context126.sent;

                if (wallet) {
                  _context126.next = 20;
                  break;
                }

                return _context126.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 20:
                _context126.next = 22;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 22:
                currency = _context126.sent;

                if (currency) {
                  _context126.next = 25;
                  break;
                }

                return _context126.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 25:
                _context126.next = 27;
                return wallet.getCardFromUUID(carduuid);

              case 27:
                card = _context126.sent;

                if (card) {
                  _context126.next = 30;
                  break;
                }

                return _context126.abrupt("return", Promise.reject('could not find card ' + carduuid));

              case 30:
                card_address = card.getAddress();
                _context126.next = 33;
                return this._getAddressLockerContent(session, wallet, currency, card_address);

              case 33:
                erc721tokenaddress = _context126.sent;

                if (erc721tokenaddress) {
                  _context126.next = 36;
                  break;
                }

                return _context126.abrupt("return");

              case 36:
                _context126.next = 38;
                return this._fetchDeedMinterFromAddress(session, wallet, currency, erc721tokenaddress);

              case 38:
                minter = _context126.sent;
                // add currency uuid
                minter.currencyuuid = currencyuuid; // add card info

                minter.card_uuid = carduuid;
                minter.card_address = card_address;
                return _context126.abrupt("return", minter);

              case 43:
              case "end":
                return _context126.stop();
            }
          }
        }, _callee126, this);
      }));

      function fetchDeedMinter(_x398, _x399, _x400, _x401) {
        return _fetchDeedMinter.apply(this, arguments);
      }

      return fetchDeedMinter;
    }()
  }, {
    key: "_getERC721TokenObject",
    value: function () {
      var _getERC721TokenObject2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee127(session, currency, minter) {
        var global, mvcerc721module, data, erc721token;
        return _regeneratorRuntime().wrap(function _callee127$(_context127) {
          while (1) {
            switch (_context127.prev = _context127.next) {
              case 0:
                if (!(!minter || !minter.address)) {
                  _context127.next = 2;
                  break;
                }

                return _context127.abrupt("return", Promise.reject('can only instantiate minters already on the chain'));

              case 2:
                global = this.global;
                mvcerc721module = global.getModuleObject('mvc-erc721');
                data = Object.create(null);
                data['address'] = minter.address;
                data['name'] = minter.name;
                data['symbol'] = minter.symbol;
                _context127.next = 10;
                return mvcerc721module.createERC721TokenObject(session, currency, data);

              case 10:
                erc721token = _context127.sent;
                return _context127.abrupt("return", erc721token);

              case 12:
              case "end":
                return _context127.stop();
            }
          }
        }, _callee127, this);
      }));

      function _getERC721TokenObject(_x402, _x403, _x404) {
        return _getERC721TokenObject2.apply(this, arguments);
      }

      return _getERC721TokenObject;
    }() // deeds

  }, {
    key: "readDeeds",
    value: function () {
      var _readDeeds = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee128(sessionuuid, walletuuid) {
        var global, _apicontrollers, session, keys, deed_list;

        return _regeneratorRuntime().wrap(function _callee128$(_context128) {
          while (1) {
            switch (_context128.prev = _context128.next) {
              case 0:
                if (sessionuuid) {
                  _context128.next = 2;
                  break;
                }

                return _context128.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context128.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context128.sent;

                if (session) {
                  _context128.next = 9;
                  break;
                }

                return _context128.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                if (!walletuuid) {
                  keys = ['myquote', 'deeds']; // shared keys
                } else {
                  console.log('WARNING: walletuuid specific case not implemented!!!');
                  keys = ['myquote', 'deeds']; // shared keys, also we could look in wallet
                  // with mvcmodule.getFromWallet
                }

                _context128.next = 12;
                return this._readClientSideJson(session, keys);

              case 12:
                deed_list = _context128.sent;
                if (!deed_list) deed_list = [];
                return _context128.abrupt("return", deed_list);

              case 15:
              case "end":
                return _context128.stop();
            }
          }
        }, _callee128, this);
      }));

      function readDeeds(_x405, _x406) {
        return _readDeeds.apply(this, arguments);
      }

      return readDeeds;
    }()
  }, {
    key: "fetchDeeds",
    value: function () {
      var _fetchDeeds = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee129(sessionuuid, walletuuid, currencyuuid, minter) {
        var global, _apicontrollers, session, wallet, currency, card, childsession, erc721token, deeds, totalsupply, i, deed;

        return _regeneratorRuntime().wrap(function _callee129$(_context129) {
          while (1) {
            switch (_context129.prev = _context129.next) {
              case 0:
                if (sessionuuid) {
                  _context129.next = 2;
                  break;
                }

                return _context129.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (currencyuuid) {
                  _context129.next = 4;
                  break;
                }

                return _context129.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 4:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context129.next = 8;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 8:
                session = _context129.sent;

                if (session) {
                  _context129.next = 11;
                  break;
                }

                return _context129.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 11:
                _context129.next = 13;
                return _apicontrollers.getWalletFromUUID(session, walletuuid)["catch"](function (err) {});

              case 13:
                wallet = _context129.sent;
                _context129.next = 16;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 16:
                currency = _context129.sent;

                if (currency) {
                  _context129.next = 19;
                  break;
                }

                return _context129.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 19:
                _context129.next = 21;
                return this._getCurrencyCard(session, wallet, currency);

              case 21:
                card = _context129.sent;

                if (card) {
                  _context129.next = 24;
                  break;
                }

                return _context129.abrupt("return", Promise.reject('could not find currency card for wallet ' + walletuuid));

              case 24:
                _context129.next = 26;
                return this._getMonitoredERC721TokenSession(session, wallet, currency);

              case 26:
                childsession = _context129.sent;
                _context129.next = 29;
                return this._getERC721TokenObject(childsession, currency, minter);

              case 29:
                erc721token = _context129.sent;
                // list of deeds
                deeds = []; // get totalsupply to get list of tokenids

                _context129.next = 33;
                return erc721token.getTotalSupply();

              case 33:
                totalsupply = _context129.sent;
                i = 0;

              case 35:
                if (!(i < totalsupply)) {
                  _context129.next = 43;
                  break;
                }

                _context129.next = 38;
                return this._fetchDeedInfo(currency, erc721token, i);

              case 38:
                deed = _context129.sent;
                deeds.push(deed);

              case 40:
                i++;
                _context129.next = 35;
                break;

              case 43:
                return _context129.abrupt("return", deeds);

              case 44:
              case "end":
                return _context129.stop();
            }
          }
        }, _callee129, this);
      }));

      function fetchDeeds(_x407, _x408, _x409, _x410) {
        return _fetchDeeds.apply(this, arguments);
      }

      return fetchDeeds;
    }()
  }, {
    key: "_getMinterCard",
    value: function () {
      var _getMinterCard2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee130(session, wallet, currency, minter) {
        var carduuid, card;
        return _regeneratorRuntime().wrap(function _callee130$(_context130) {
          while (1) {
            switch (_context130.prev = _context130.next) {
              case 0:
                carduuid = minter.card_uuid;

                if (!(wallet && carduuid)) {
                  _context130.next = 9;
                  break;
                }

                _context130.next = 4;
                return wallet.getCardFromUUID(carduuid);

              case 4:
                card = _context130.sent;

                if (card) {
                  _context130.next = 7;
                  break;
                }

                return _context130.abrupt("return", Promise.reject('could not find card with uuid ' + carduuid));

              case 7:
                _context130.next = 12;
                break;

              case 9:
                _context130.next = 11;
                return this._getCurrencyCard(session, wallet, currency);

              case 11:
                card = _context130.sent;

              case 12:
                return _context130.abrupt("return", card);

              case 13:
              case "end":
                return _context130.stop();
            }
          }
        }, _callee130, this);
      }));

      function _getMinterCard(_x411, _x412, _x413, _x414) {
        return _getMinterCard2.apply(this, arguments);
      }

      return _getMinterCard;
    }()
  }, {
    key: "mintDeed",
    value: function () {
      var _mintDeed = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee131(sessionuuid, walletuuid, currencyuuid, minter) {
        var feelevel,
            global,
            _apicontrollers,
            session,
            wallet,
            currency,
            card,
            childsession,
            erc721token,
            fromaccount,
            from_card_scheme,
            ethereumnodeaccessmodule,
            ethereumtransaction,
            fee,
            totalsupply,
            txhash,
            deed,
            _args131 = arguments;

        return _regeneratorRuntime().wrap(function _callee131$(_context131) {
          while (1) {
            switch (_context131.prev = _context131.next) {
              case 0:
                feelevel = _args131.length > 4 && _args131[4] !== undefined ? _args131[4] : null;

                if (sessionuuid) {
                  _context131.next = 3;
                  break;
                }

                return _context131.abrupt("return", Promise.reject('session uuid is undefined'));

              case 3:
                if (walletuuid) {
                  _context131.next = 5;
                  break;
                }

                return _context131.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 5:
                if (currencyuuid) {
                  _context131.next = 7;
                  break;
                }

                return _context131.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 7:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context131.next = 11;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 11:
                session = _context131.sent;

                if (session) {
                  _context131.next = 14;
                  break;
                }

                return _context131.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 14:
                _context131.next = 16;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 16:
                wallet = _context131.sent;

                if (wallet) {
                  _context131.next = 19;
                  break;
                }

                return _context131.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 19:
                _context131.next = 21;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 21:
                currency = _context131.sent;

                if (currency) {
                  _context131.next = 24;
                  break;
                }

                return _context131.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 24:
                _context131.next = 26;
                return this._getMinterCard(session, wallet, currency, minter);

              case 26:
                card = _context131.sent;

                if (card) {
                  _context131.next = 29;
                  break;
                }

                return _context131.abrupt("return", Promise.reject('could not find minter card'));

              case 29:
                _context131.next = 31;
                return this._getMonitoredERC721TokenSession(session, wallet, currency);

              case 31:
                childsession = _context131.sent;
                _context131.next = 34;
                return this._getERC721TokenObject(childsession, currency, minter);

              case 34:
                erc721token = _context131.sent;
                fromaccount = card._getSessionAccountObject();
                from_card_scheme = card.getScheme(); // mint a token item

                ethereumnodeaccessmodule = global.getModuleObject('ethereum-node-access');
                ethereumtransaction = ethereumnodeaccessmodule.getEthereumTransactionObject(childsession, fromaccount); // fee

                _context131.next = 41;
                return _apicontrollers.createSchemeFee(from_card_scheme, feelevel);

              case 41:
                fee = _context131.sent;
                ethereumtransaction.setGas(fee.gaslimit);
                ethereumtransaction.setGasPrice(fee.gasPrice); // fetch totalsupply

                _context131.next = 46;
                return erc721token.getTotalSupply();

              case 46:
                totalsupply = _context131.sent;
                _context131.next = 49;
                return erc721token.mint(fromaccount, ethereumtransaction);

              case 49:
                txhash = _context131.sent;

                if (txhash) {
                  _context131.next = 52;
                  break;
                }

                return _context131.abrupt("return", Promise.reject('mint of deed did not succeed, no transaction hash returned'));

              case 52:
                deed = {
                  type: 'deed',
                  currencyuuid: currencyuuid,
                  minter: minter.address,
                  tokenid: totalsupply,
                  txhash: 'dd-' + minter.address + '-' + totalsupply,
                  metadata: {},
                  articles: [],
                  clauses: [],
                  minthash: txhash
                };
                return _context131.abrupt("return", deed);

              case 54:
              case "end":
                return _context131.stop();
            }
          }
        }, _callee131, this);
      }));

      function mintDeed(_x415, _x416, _x417, _x418) {
        return _mintDeed.apply(this, arguments);
      }

      return mintDeed;
    }()
  }, {
    key: "saveDeed",
    value: function () {
      var _saveDeed = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee132(sessionuuid, walletuuid, deed) {
        var global, _apicontrollers, deed_list, bInList, i, session, txhash, currencyuuid, minter, tokenid, time, title, keys, localjson;

        return _regeneratorRuntime().wrap(function _callee132$(_context132) {
          while (1) {
            switch (_context132.prev = _context132.next) {
              case 0:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context132.next = 4;
                return this.readDeeds(sessionuuid, walletuuid);

              case 4:
                deed_list = _context132.sent;
                // look not in list
                bInList = false;
                i = 0;

              case 7:
                if (!(i < deed_list.length)) {
                  _context132.next = 14;
                  break;
                }

                if (!(deed_list[i].txhash == deed.txhash)) {
                  _context132.next = 11;
                  break;
                }

                bInList = true;
                return _context132.abrupt("break", 14);

              case 11:
                i++;
                _context132.next = 7;
                break;

              case 14:
                if (bInList) {
                  _context132.next = 33;
                  break;
                }

                _context132.next = 17;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 17:
                session = _context132.sent;

                if (session) {
                  _context132.next = 20;
                  break;
                }

                return _context132.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 20:
                // deed parameters to be saved
                txhash = deed.txhash;
                currencyuuid = deed.currencyuuid;
                minter = deed.minter;
                tokenid = deed.tokenid;
                time = deed.metadata ? deed.metadata.time : null;
                title = deed.metadata ? deed.metadata.title : null;

                if (!walletuuid) {
                  keys = ['myquote', 'deeds']; // shared keys
                } else {
                  console.log('WARNING: walletuuid specific case not implemented!!!');
                  keys = ['myquote', 'deeds']; // shared keys, also we could put in wallet
                  // with mvcmodule.putInWallet			
                }

                localjson = {
                  txhash: txhash,
                  time: time,
                  currencyuuid: currencyuuid,
                  minter: minter,
                  tokenid: tokenid,
                  title: title
                };
                localjson.savetime = Date.now();
                deed_list.push(localjson);
                return _context132.abrupt("return", this._saveClientSideJson(session, keys, deed_list));

              case 33:
                return _context132.abrupt("return", deed_list);

              case 34:
              case "end":
                return _context132.stop();
            }
          }
        }, _callee132, this);
      }));

      function saveDeed(_x419, _x420, _x421) {
        return _saveDeed.apply(this, arguments);
      }

      return saveDeed;
    }()
  }, {
    key: "_fetchDeedInfo",
    value: function () {
      var _fetchDeedInfo2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee133(currency, erc721token, tokenid) {
        var deed, stringrecords, i, clause;
        return _regeneratorRuntime().wrap(function _callee133$(_context133) {
          while (1) {
            switch (_context133.prev = _context133.next) {
              case 0:
                // fetch deed info
                deed = {
                  type: 'deed',
                  tokenid: tokenid
                };
                deed.currencyuuid = currency.uuid;
                deed.minter = erc721token.getAddress();
                deed.txhash = 'dd-' + deed.minter + '-' + tokenid;
                _context133.next = 6;
                return erc721token.getChainTokenURI(tokenid);

              case 6:
                deed.tokenuri = _context133.sent;
                _context133.next = 9;
                return erc721token.ownerOf(tokenid);

              case 9:
                deed.owner = _context133.sent;
                _context133.next = 12;
                return erc721token.getApproved(tokenid);

              case 12:
                deed.approved = _context133.sent;
                // fetch records and fill metadata and articles
                deed.metadata = {};
                deed.articles = [];
                deed.clauses = [];
                _context133.next = 18;
                return erc721token.fetchRecords(tokenid)["catch"](function (err) {
                  console.log('error in fetchRecords: ' + err);
                });

              case 18:
                stringrecords = _context133.sent;
                i = 0;

              case 20:
                if (!(i < stringrecords.length)) {
                  _context133.next = 46;
                  break;
                }

                _context133.prev = 21;
                clause = JSON.parse(stringrecords[i]);
                clause.type = 'clause';
                clause.currencyuuid = deed.currencyuuid;
                clause.txhash = deed.txhash + '-' + i;
                clause.minter = deed.minter;
                clause.tokenid = tokenid;
                clause.index = i;
                _context133.t0 = clause.subtype;
                _context133.next = _context133.t0 === 'metadata' ? 32 : _context133.t0 === 'article' ? 34 : 36;
                break;

              case 32:
                // overload
                Object.assign(deed.metadata, clause);
                return _context133.abrupt("break", 37);

              case 34:
                // addition
                deed.articles.push(clause);
                return _context133.abrupt("break", 37);

              case 36:
                return _context133.abrupt("break", 37);

              case 37:
                deed.clauses.push(clause);
                _context133.next = 43;
                break;

              case 40:
                _context133.prev = 40;
                _context133.t1 = _context133["catch"](21);
                console.log('string record is mal-formed: ' + stringrecords[i]);

              case 43:
                i++;
                _context133.next = 20;
                break;

              case 46:
                return _context133.abrupt("return", deed);

              case 47:
              case "end":
                return _context133.stop();
            }
          }
        }, _callee133, null, [[21, 40]]);
      }));

      function _fetchDeedInfo(_x422, _x423, _x424) {
        return _fetchDeedInfo2.apply(this, arguments);
      }

      return _fetchDeedInfo;
    }()
  }, {
    key: "fetchDeed",
    value: function () {
      var _fetchDeed = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee134(sessionuuid, walletuuid, currencyuuid, minter, tokenid) {
        var global, _apicontrollers, session, wallet, currency, childsession, erc721token, deed;

        return _regeneratorRuntime().wrap(function _callee134$(_context134) {
          while (1) {
            switch (_context134.prev = _context134.next) {
              case 0:
                if (sessionuuid) {
                  _context134.next = 2;
                  break;
                }

                return _context134.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (currencyuuid) {
                  _context134.next = 4;
                  break;
                }

                return _context134.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 4:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context134.next = 8;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 8:
                session = _context134.sent;

                if (session) {
                  _context134.next = 11;
                  break;
                }

                return _context134.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 11:
                _context134.next = 13;
                return _apicontrollers.getWalletFromUUID(session, walletuuid)["catch"](function (err) {});

              case 13:
                wallet = _context134.sent;
                _context134.next = 16;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 16:
                currency = _context134.sent;

                if (currency) {
                  _context134.next = 19;
                  break;
                }

                return _context134.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 19:
                _context134.next = 21;
                return this._getMonitoredERC721TokenSession(session, wallet, currency);

              case 21:
                childsession = _context134.sent;
                _context134.next = 24;
                return this._getERC721TokenObject(childsession, currency, minter);

              case 24:
                erc721token = _context134.sent;
                _context134.next = 27;
                return this._fetchDeedInfo(currency, erc721token, tokenid);

              case 27:
                deed = _context134.sent;
                _context134.next = 30;
                return this.saveDeed(sessionuuid, walletuuid, deed);

              case 30:
                return _context134.abrupt("return", deed);

              case 31:
              case "end":
                return _context134.stop();
            }
          }
        }, _callee134, this);
      }));

      function fetchDeed(_x425, _x426, _x427, _x428, _x429) {
        return _fetchDeed.apply(this, arguments);
      }

      return fetchDeed;
    }()
  }, {
    key: "fetchLastDeed",
    value: function () {
      var _fetchLastDeed = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee135(sessionuuid, walletuuid, currencyuuid, minter) {
        var global, _apicontrollers, session, wallet, currency, childsession, erc721token, totalsupply, lasttokenid;

        return _regeneratorRuntime().wrap(function _callee135$(_context135) {
          while (1) {
            switch (_context135.prev = _context135.next) {
              case 0:
                if (sessionuuid) {
                  _context135.next = 2;
                  break;
                }

                return _context135.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (currencyuuid) {
                  _context135.next = 4;
                  break;
                }

                return _context135.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 4:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context135.next = 8;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 8:
                session = _context135.sent;

                if (session) {
                  _context135.next = 11;
                  break;
                }

                return _context135.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 11:
                _context135.next = 13;
                return _apicontrollers.getWalletFromUUID(session, walletuuid)["catch"](function (err) {});

              case 13:
                wallet = _context135.sent;
                _context135.next = 16;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 16:
                currency = _context135.sent;

                if (currency) {
                  _context135.next = 19;
                  break;
                }

                return _context135.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 19:
                _context135.next = 21;
                return this._getMonitoredERC721TokenSession(session, wallet, currency);

              case 21:
                childsession = _context135.sent;
                _context135.next = 24;
                return this._getERC721TokenObject(childsession, currency, minter);

              case 24:
                erc721token = _context135.sent;
                _context135.next = 27;
                return erc721token.getTotalSupply();

              case 27:
                totalsupply = _context135.sent;
                lasttokenid = totalsupply - 1;
                return _context135.abrupt("return", this.fetchDeed(sessionuuid, walletuuid, currencyuuid, minter, lasttokenid));

              case 30:
              case "end":
                return _context135.stop();
            }
          }
        }, _callee135, this);
      }));

      function fetchLastDeed(_x430, _x431, _x432, _x433) {
        return _fetchLastDeed.apply(this, arguments);
      }

      return fetchLastDeed;
    }()
  }, {
    key: "isCardOwningDeed",
    value: function () {
      var _isCardOwningDeed = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee136(sessionuuid, walletuuid, currencyuuid, carduuid, minter, deed) {
        var owningcardinfo;
        return _regeneratorRuntime().wrap(function _callee136$(_context136) {
          while (1) {
            switch (_context136.prev = _context136.next) {
              case 0:
                _context136.next = 2;
                return this.getDeedOwningCard(sessionuuid, walletuuid, currencyuuid, minter, deed)["catch"](function (err) {});

              case 2:
                owningcardinfo = _context136.sent;

                if (owningcardinfo) {
                  _context136.next = 5;
                  break;
                }

                return _context136.abrupt("return", false);

              case 5:
                if (!(owningcardinfo.uuid == carduuid)) {
                  _context136.next = 9;
                  break;
                }

                return _context136.abrupt("return", true);

              case 9:
                return _context136.abrupt("return", false);

              case 10:
              case "end":
                return _context136.stop();
            }
          }
        }, _callee136, this);
      }));

      function isCardOwningDeed(_x434, _x435, _x436, _x437, _x438, _x439) {
        return _isCardOwningDeed.apply(this, arguments);
      }

      return isCardOwningDeed;
    }() // TODO: clean the calls to getDeedOwningCard and _getDeedOwningCard

  }, {
    key: "_getDeedOwningCard",
    value: function () {
      var _getDeedOwningCard2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee137(session, wallet, currency, minter, deed) {
        var sessionuuid, walletuuid, currencyuuid, address, cardinfo;
        return _regeneratorRuntime().wrap(function _callee137$(_context137) {
          while (1) {
            switch (_context137.prev = _context137.next) {
              case 0:
                sessionuuid = session.getSessionUUID();
                walletuuid = wallet.getWalletUUID();
                currencyuuid = currency.uuid;
                address = deed.owner;
                _context137.next = 6;
                return this.getCurrencyCardWithAddress(sessionuuid, walletuuid, currencyuuid, address)["catch"](function (err) {});

              case 6:
                cardinfo = _context137.sent;

                if (cardinfo) {
                  _context137.next = 9;
                  break;
                }

                return _context137.abrupt("return");

              case 9:
                _context137.next = 11;
                return wallet.getCardFromUUID(cardinfo.uuid);

              case 11:
                return _context137.abrupt("return", _context137.sent);

              case 12:
              case "end":
                return _context137.stop();
            }
          }
        }, _callee137, this);
      }));

      function _getDeedOwningCard(_x440, _x441, _x442, _x443, _x444) {
        return _getDeedOwningCard2.apply(this, arguments);
      }

      return _getDeedOwningCard;
    }()
  }, {
    key: "getDeedOwningCard",
    value: function () {
      var _getDeedOwningCard3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee138(sessionuuid, walletuuid, currencyuuid, minter, deed) {
        var global, mvcmodule, _apicontrollers, session, wallet, currency, address, cardinfo, _privatekey;

        return _regeneratorRuntime().wrap(function _callee138$(_context138) {
          while (1) {
            switch (_context138.prev = _context138.next) {
              case 0:
                if (sessionuuid) {
                  _context138.next = 2;
                  break;
                }

                return _context138.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context138.next = 4;
                  break;
                }

                return _context138.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (currencyuuid) {
                  _context138.next = 6;
                  break;
                }

                return _context138.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 6:
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                _apicontrollers = this._getClientAPI();
                _context138.next = 11;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 11:
                session = _context138.sent;

                if (session) {
                  _context138.next = 14;
                  break;
                }

                return _context138.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 14:
                _context138.next = 16;
                return _apicontrollers.getWalletFromUUID(session, walletuuid)["catch"](function (err) {});

              case 16:
                wallet = _context138.sent;

                if (wallet) {
                  _context138.next = 19;
                  break;
                }

                return _context138.abrupt("return");

              case 19:
                _context138.next = 21;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 21:
                currency = _context138.sent;

                if (currency) {
                  _context138.next = 24;
                  break;
                }

                return _context138.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 24:
                address = deed.owner;
                _context138.next = 27;
                return this.getCurrencyCardWithAddress(sessionuuid, walletuuid, currencyuuid, address)["catch"](function (err) {});

              case 27:
                cardinfo = _context138.sent;

                if (cardinfo) {
                  _context138.next = 30;
                  break;
                }

                return _context138.abrupt("return");

              case 30:
                _context138.next = 32;
                return this.getCardPrivateKey(sessionuuid, walletuuid, cardinfo.uuid);

              case 32:
                _privatekey = _context138.sent;

                if (!_privatekey) {
                  _context138.next = 35;
                  break;
                }

                return _context138.abrupt("return", cardinfo);

              case 35:
              case "end":
                return _context138.stop();
            }
          }
        }, _callee138, this);
      }));

      function getDeedOwningCard(_x445, _x446, _x447, _x448, _x449) {
        return _getDeedOwningCard3.apply(this, arguments);
      }

      return getDeedOwningCard;
    }()
  }, {
    key: "transferDeed",
    value: function () {
      var _transferDeed = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee139(sessionuuid, walletuuid, currencyuuid, minter, deed, toaddress) {
        var feelevel,
            global,
            _apicontrollers,
            session,
            wallet,
            currency,
            card,
            childsession,
            erc721token,
            fromaccount,
            from_card_scheme,
            toaccount,
            ethereumnodeaccessmodule,
            ethereumtransaction,
            fee,
            tokenid,
            txhhash,
            _args139 = arguments;

        return _regeneratorRuntime().wrap(function _callee139$(_context139) {
          while (1) {
            switch (_context139.prev = _context139.next) {
              case 0:
                feelevel = _args139.length > 6 && _args139[6] !== undefined ? _args139[6] : null;

                if (sessionuuid) {
                  _context139.next = 3;
                  break;
                }

                return _context139.abrupt("return", Promise.reject('session uuid is undefined'));

              case 3:
                if (walletuuid) {
                  _context139.next = 5;
                  break;
                }

                return _context139.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 5:
                if (currencyuuid) {
                  _context139.next = 7;
                  break;
                }

                return _context139.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 7:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context139.next = 11;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 11:
                session = _context139.sent;

                if (session) {
                  _context139.next = 14;
                  break;
                }

                return _context139.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 14:
                _context139.next = 16;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 16:
                wallet = _context139.sent;

                if (wallet) {
                  _context139.next = 19;
                  break;
                }

                return _context139.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 19:
                _context139.next = 21;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 21:
                currency = _context139.sent;

                if (currency) {
                  _context139.next = 24;
                  break;
                }

                return _context139.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 24:
                _context139.next = 26;
                return this._getDeedOwningCard(session, wallet, currency, minter, deed);

              case 26:
                card = _context139.sent;

                if (card) {
                  _context139.next = 29;
                  break;
                }

                return _context139.abrupt("return", Promise.reject('could not find minter card'));

              case 29:
                _context139.next = 31;
                return this._getMonitoredERC721TokenSession(session, wallet, currency);

              case 31:
                childsession = _context139.sent;
                _context139.next = 34;
                return this._getERC721TokenObject(childsession, currency, minter);

              case 34:
                erc721token = _context139.sent;
                // sender and recipient
                fromaccount = card._getSessionAccountObject();
                from_card_scheme = card.getScheme();
                toaccount = childsession.createBlankAccountObject();
                toaccount.setAddress(toaddress); // transfer

                ethereumnodeaccessmodule = global.getModuleObject('ethereum-node-access');
                ethereumtransaction = ethereumnodeaccessmodule.getEthereumTransactionObject(childsession, fromaccount); // fee

                _context139.next = 43;
                return _apicontrollers.createSchemeFee(from_card_scheme, feelevel);

              case 43:
                fee = _context139.sent;
                ethereumtransaction.setGas(fee.gaslimit);
                ethereumtransaction.setGasPrice(fee.gasPrice);
                tokenid = deed.tokenid; // TODO: uncomment for @p2pmoney-org/ethereum_erc721 > 0.20.16
                //var _Buffer = this._getBufferClass();
                //var deed_data_str = (deed.data ? JSON.stringify(deed.data) : '{}');
                //var deed_data_buf = _Buffer.from(deed_data_str, 'utf8'); // not used while using @p2pmoney-org/ethereum_core ver 0.20.10
                //var txhhash = await erc721token.safeTransferFrom(fromaccount, toaccount, tokenid, deed_data_buf, ethereumtransaction);

                _context139.next = 49;
                return erc721token.transferFrom(fromaccount, toaccount, tokenid, ethereumtransaction);

              case 49:
                txhhash = _context139.sent;
                return _context139.abrupt("return", txhhash);

              case 51:
              case "end":
                return _context139.stop();
            }
          }
        }, _callee139, this);
      }));

      function transferDeed(_x450, _x451, _x452, _x453, _x454, _x455) {
        return _transferDeed.apply(this, arguments);
      }

      return transferDeed;
    }()
  }, {
    key: "registerClause",
    value: function () {
      var _registerClause = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee140(sessionuuid, walletuuid, currencyuuid, minter, deed, clause) {
        var feelevel,
            global,
            _apicontrollers,
            session,
            wallet,
            currency,
            card,
            childsession,
            erc721token,
            tokenid,
            contentstring,
            ethereumnodeaccessmodule,
            fromaccount,
            from_card_scheme,
            ethereumtransaction,
            fee,
            txhash,
            _args140 = arguments;

        return _regeneratorRuntime().wrap(function _callee140$(_context140) {
          while (1) {
            switch (_context140.prev = _context140.next) {
              case 0:
                feelevel = _args140.length > 6 && _args140[6] !== undefined ? _args140[6] : null;

                if (sessionuuid) {
                  _context140.next = 3;
                  break;
                }

                return _context140.abrupt("return", Promise.reject('session uuid is undefined'));

              case 3:
                if (walletuuid) {
                  _context140.next = 5;
                  break;
                }

                return _context140.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 5:
                if (currencyuuid) {
                  _context140.next = 7;
                  break;
                }

                return _context140.abrupt("return", Promise.reject('currency uuid is undefined'));

              case 7:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context140.next = 11;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 11:
                session = _context140.sent;

                if (session) {
                  _context140.next = 14;
                  break;
                }

                return _context140.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 14:
                _context140.next = 16;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 16:
                wallet = _context140.sent;

                if (wallet) {
                  _context140.next = 19;
                  break;
                }

                return _context140.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 19:
                _context140.next = 21;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 21:
                currency = _context140.sent;

                if (currency) {
                  _context140.next = 24;
                  break;
                }

                return _context140.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 24:
                if (!deed.owner) {
                  _context140.next = 30;
                  break;
                }

                _context140.next = 27;
                return this._getDeedOwningCard(session, wallet, currency, minter, deed);

              case 27:
                card = _context140.sent;
                _context140.next = 33;
                break;

              case 30:
                _context140.next = 32;
                return this._getMinterCard(session, wallet, currency, minter);

              case 32:
                card = _context140.sent;

              case 33:
                if (card) {
                  _context140.next = 35;
                  break;
                }

                return _context140.abrupt("return", Promise.reject('could not find minter card'));

              case 35:
                _context140.next = 37;
                return this._getMonitoredERC721TokenSession(session, wallet, currency);

              case 37:
                childsession = _context140.sent;
                _context140.next = 40;
                return this._getERC721TokenObject(childsession, currency, minter);

              case 40:
                erc721token = _context140.sent;
                tokenid = deed.tokenid;
                contentstring = JSON.stringify(clause);
                ethereumnodeaccessmodule = global.getModuleObject('ethereum-node-access');
                fromaccount = card._getSessionAccountObject();
                from_card_scheme = card.getScheme();
                ethereumtransaction = ethereumnodeaccessmodule.getEthereumTransactionObject(childsession, fromaccount); // fee

                _context140.next = 49;
                return _apicontrollers.createSchemeFee(from_card_scheme, feelevel);

              case 49:
                fee = _context140.sent;
                ethereumtransaction.setGas(fee.gaslimit);
                ethereumtransaction.setGasPrice(fee.gasPrice);
                _context140.next = 54;
                return erc721token.registerRecord(tokenid, contentstring, ethereumtransaction);

              case 54:
                txhash = _context140.sent;
                return _context140.abrupt("return", txhash);

              case 56:
              case "end":
                return _context140.stop();
            }
          }
        }, _callee140, this);
      }));

      function registerClause(_x456, _x457, _x458, _x459, _x460, _x461) {
        return _registerClause.apply(this, arguments);
      }

      return registerClause;
    }() //
    // Quotes
    //

  }, {
    key: "readQuotes",
    value: function () {
      var _readQuotes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee141(sessionuuid, walletuuid) {
        var global, _apicontrollers, session, keys, quote_list;

        return _regeneratorRuntime().wrap(function _callee141$(_context141) {
          while (1) {
            switch (_context141.prev = _context141.next) {
              case 0:
                if (sessionuuid) {
                  _context141.next = 2;
                  break;
                }

                return _context141.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context141.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context141.sent;

                if (session) {
                  _context141.next = 9;
                  break;
                }

                return _context141.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                if (!walletuuid) {
                  keys = ['myquote', 'quotes']; // shared keys
                } else {
                  console.log('WARNING: walletuuid specific case not implemented!!!');
                  keys = ['myquote', 'quotes']; // shared keys, also we could look in wallet
                  // with mvcmodule.getFromWallet
                } //let quote_list = await _apicontrollers.getLocalJsonLeaf(session, keys, true);


                _context141.next = 12;
                return this._readClientSideJson(session, keys);

              case 12:
                quote_list = _context141.sent;
                if (!quote_list) quote_list = [];
                return _context141.abrupt("return", quote_list);

              case 15:
              case "end":
                return _context141.stop();
            }
          }
        }, _callee141, this);
      }));

      function readQuotes(_x462, _x463) {
        return _readQuotes.apply(this, arguments);
      }

      return readQuotes;
    }()
  }, {
    key: "fetchQuotes",
    value: function () {
      var _fetchQuotes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee142(sessionuuid, walletuuid, currencyuuid, vendor_address) {
        var global, _apicontrollers, session, wallet, currency, transactions, quotelist, i, tx, dataobject;

        return _regeneratorRuntime().wrap(function _callee142$(_context142) {
          while (1) {
            switch (_context142.prev = _context142.next) {
              case 0:
                if (sessionuuid) {
                  _context142.next = 2;
                  break;
                }

                return _context142.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context142.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context142.sent;

                if (session) {
                  _context142.next = 9;
                  break;
                }

                return _context142.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                _context142.next = 11;
                return _apicontrollers.getWalletFromUUID(session, walletuuid)["catch"](function (err) {});

              case 11:
                wallet = _context142.sent;
                _context142.next = 14;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 14:
                currency = _context142.sent;

                if (currency) {
                  _context142.next = 17;
                  break;
                }

                return _context142.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 17:
                if (currency.pretrade_explorer_url) {
                  _context142.next = 19;
                  break;
                }

                return _context142.abrupt("return", Promise.reject('no explorer for currency ' + currencyuuid));

              case 19:
                _context142.next = 21;
                return this._getAddressPretradeTransactions(session, wallet, currency, vendor_address);

              case 21:
                transactions = _context142.sent;
                // we filter quotes
                quotelist = [];

                for (i = 0; i < (transactions ? transactions.length : 0); i++) {
                  tx = transactions[i];
                  dataobject = {};

                  this._fillTransactionDataObject(dataobject, tx);

                  if (dataobject.type == 'quote' && dataobject.owner == vendor_address) {
                    //await this.saveQuote(sessionuuid, null, dataobject);
                    quotelist.push(dataobject);
                  }
                }

                return _context142.abrupt("return", quotelist);

              case 25:
              case "end":
                return _context142.stop();
            }
          }
        }, _callee142, this);
      }));

      function fetchQuotes(_x464, _x465, _x466, _x467) {
        return _fetchQuotes.apply(this, arguments);
      }

      return fetchQuotes;
    }()
  }, {
    key: "saveQuote",
    value: function () {
      var _saveQuote = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee143(sessionuuid, walletuuid, quote) {
        var global, _apicontrollers, quote_list, bInList, i, session, txhash, blocknumber, currencyuuid, owner, title, amount, currency, keys, localjson;

        return _regeneratorRuntime().wrap(function _callee143$(_context143) {
          while (1) {
            switch (_context143.prev = _context143.next) {
              case 0:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context143.next = 4;
                return this.readQuotes(sessionuuid, walletuuid);

              case 4:
                quote_list = _context143.sent;
                // look not in list
                bInList = false;
                i = 0;

              case 7:
                if (!(i < quote_list.length)) {
                  _context143.next = 14;
                  break;
                }

                if (!(quote_list[i].txhash == quote.txhash)) {
                  _context143.next = 11;
                  break;
                }

                bInList = true;
                return _context143.abrupt("break", 14);

              case 11:
                i++;
                _context143.next = 7;
                break;

              case 14:
                if (bInList) {
                  _context143.next = 28;
                  break;
                }

                _context143.next = 17;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 17:
                session = _context143.sent;

                if (session) {
                  _context143.next = 20;
                  break;
                }

                return _context143.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 20:
                // quote parameters to be saved
                txhash = quote.txhash, blocknumber = quote.blocknumber, currencyuuid = quote.currencyuuid, owner = quote.owner, title = quote.title, amount = quote.amount, currency = quote.currency;

                if (!walletuuid) {
                  keys = ['myquote', 'quotes']; // shared keys
                } else {
                  console.log('WARNING: walletuuid specific case not implemented!!!');
                  keys = ['myquote', 'quotes']; // shared keys, also we could put in wallet
                  // with mvcmodule.putInWallet			
                }

                localjson = {
                  txhash: txhash,
                  blocknumber: blocknumber,
                  currencyuuid: currencyuuid,
                  owner: owner,
                  title: title,
                  amount: amount,
                  currency: currency
                };
                localjson.savetime = Date.now();
                quote_list.push(localjson); //return _apicontrollers.saveLocalJson(session, keys, quote_list);

                return _context143.abrupt("return", this._saveClientSideJson(session, keys, quote_list));

              case 28:
                return _context143.abrupt("return", quote_list);

              case 29:
              case "end":
                return _context143.stop();
            }
          }
        }, _callee143, this);
      }));

      function saveQuote(_x468, _x469, _x470) {
        return _saveQuote.apply(this, arguments);
      }

      return saveQuote;
    }()
  }, {
    key: "readOrders",
    value: function () {
      var _readOrders = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee144(sessionuuid, walletuuid) {
        var global, _apicontrollers, session, keys, order_list;

        return _regeneratorRuntime().wrap(function _callee144$(_context144) {
          while (1) {
            switch (_context144.prev = _context144.next) {
              case 0:
                if (sessionuuid) {
                  _context144.next = 2;
                  break;
                }

                return _context144.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context144.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context144.sent;

                if (session) {
                  _context144.next = 9;
                  break;
                }

                return _context144.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                if (!walletuuid) {
                  keys = ['myquote', 'orders']; // shared keys
                } else {
                  console.log('WARNING: walletuuid specific case not implemented!!!');
                  keys = ['myquote', 'orders']; // shared keys, otherwise we could look in wallet
                  // with mvcmodule.getFromWallet
                } //let order_list = await _apicontrollers.getLocalJsonLeaf(session, keys, true);


                _context144.next = 12;
                return this._readClientSideJson(session, keys);

              case 12:
                order_list = _context144.sent;
                if (!order_list) order_list = [];
                return _context144.abrupt("return", order_list);

              case 15:
              case "end":
                return _context144.stop();
            }
          }
        }, _callee144, this);
      }));

      function readOrders(_x471, _x472) {
        return _readOrders.apply(this, arguments);
      }

      return readOrders;
    }()
  }, {
    key: "fetchOrders",
    value: function () {
      var _fetchOrders = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee145(sessionuuid, walletuuid, currencyuuid, quotehash) {
        var global, _apicontrollers, session, wallet, currency, quote, vendor_address, transactions, orderlist, i, tx, dataobject;

        return _regeneratorRuntime().wrap(function _callee145$(_context145) {
          while (1) {
            switch (_context145.prev = _context145.next) {
              case 0:
                if (sessionuuid) {
                  _context145.next = 2;
                  break;
                }

                return _context145.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context145.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context145.sent;

                if (session) {
                  _context145.next = 9;
                  break;
                }

                return _context145.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                _context145.next = 11;
                return _apicontrollers.getWalletFromUUID(session, walletuuid)["catch"](function (err) {});

              case 11:
                wallet = _context145.sent;
                _context145.next = 14;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 14:
                currency = _context145.sent;

                if (currency) {
                  _context145.next = 17;
                  break;
                }

                return _context145.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 17:
                if (currency.pretrade_explorer_url) {
                  _context145.next = 19;
                  break;
                }

                return _context145.abrupt("return", Promise.reject('no explorer for currency ' + currencyuuid));

              case 19:
                _context145.next = 21;
                return this.fetchCurrencyTransaction(sessionuuid, walletuuid, currencyuuid, quotehash);

              case 21:
                quote = _context145.sent;
                vendor_address = quote.owner; // use explorer to fetch transactions for vendor's address

                _context145.next = 25;
                return this._getAddressPretradeTransactions(session, wallet, currency, vendor_address);

              case 25:
                transactions = _context145.sent;
                // we filter orders
                orderlist = [];

                for (i = 0; i < (transactions ? transactions.length : 0); i++) {
                  tx = transactions[i];
                  dataobject = {};

                  this._fillTransactionDataObject(dataobject, tx);

                  if (dataobject.type == 'order' && dataobject.quote == quotehash) {
                    //await this.saveOrder(sessionuuid, null, dataobject);
                    orderlist.push(dataobject);
                  }
                }

                return _context145.abrupt("return", orderlist);

              case 29:
              case "end":
                return _context145.stop();
            }
          }
        }, _callee145, this);
      }));

      function fetchOrders(_x473, _x474, _x475, _x476) {
        return _fetchOrders.apply(this, arguments);
      }

      return fetchOrders;
    }()
  }, {
    key: "scanNextBlockForOrders",
    value: function () {
      var _scanNextBlockForOrders = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee146(sessionuuid, walletuuid, currencyuuid, quotehash, blockshift) {
        var global, _apicontrollers, session, keys, scan, quote, new_orders, pretradeweb3rurl, childsession, current_blocknumber, start_block_number, last_block_number, ordernum, ethereumnodeaccessmodule, ethereumnodeaccessinstance, blocknumber, block, transactions, i, tx, dataobject;

        return _regeneratorRuntime().wrap(function _callee146$(_context146) {
          while (1) {
            switch (_context146.prev = _context146.next) {
              case 0:
                if (sessionuuid) {
                  _context146.next = 2;
                  break;
                }

                return _context146.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context146.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context146.sent;

                if (session) {
                  _context146.next = 9;
                  break;
                }

                return _context146.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                keys = ['myquote', 'scan', 'orders', quotehash]; //let scan = await _apicontrollers.getLocalJsonLeaf(session, keys);

                _context146.next = 12;
                return this._readClientSideJson(session, keys);

              case 12:
                scan = _context146.sent;
                if (!scan) scan = {};
                _context146.next = 16;
                return this.fetchCurrencyTransaction(sessionuuid, walletuuid, currencyuuid, quotehash);

              case 16:
                quote = _context146.sent;
                new_orders = []; // get a childsession on currency pretrade web3provider

                _context146.next = 20;
                return this.getPretradeWeb3Url(sessionuuid, currencyuuid);

              case 20:
                pretradeweb3rurl = _context146.sent;
                _context146.next = 23;
                return this._getChildSessionOnWeb3Url(session, pretradeweb3rurl);

              case 23:
                childsession = _context146.sent;
                _context146.next = 26;
                return _apicontrollers.readCurrentBlockNumber(childsession);

              case 26:
                current_blocknumber = _context146.sent;
                start_block_number = (scan.last_block_number ? scan.last_block_number : quote.blocknumber) + 1;
                last_block_number = start_block_number + blockshift < current_blocknumber ? start_block_number + blockshift : current_blocknumber;
                ordernum = scan.ordernum ? scan.ordernum : 0; // read transactions for each block

                ethereumnodeaccessmodule = global.getModuleObject('ethereum-node-access');
                ethereumnodeaccessinstance = ethereumnodeaccessmodule.getEthereumNodeAccessInstance(childsession); // TODO: could be better to use
                // var ethereumnodeaccessinstance = _apicontrollers.getEthereumNodeAccessInstance(childsession);

                blocknumber = start_block_number;

              case 33:
                if (!(blocknumber < last_block_number + 1)) {
                  _context146.next = 59;
                  break;
                }

                _context146.next = 36;
                return new Promise(function (resolve, reject) {
                  ethereumnodeaccessinstance.web3_getBlock(blocknumber, true, function (err, res) {
                    if (err) reject(err);else resolve(res);
                  });
                })["catch"](function (err) {
                  console.log('error in scanNextBlockForOrders: ' + err);
                });

              case 36:
                block = _context146.sent;
                transactions = block.transactions;
                i = 0;

              case 39:
                if (!(i < (transactions ? transactions.length : 0))) {
                  _context146.next = 56;
                  break;
                }

                tx = transactions[i]; // fake ethchainreader

                tx.input_decoded_utf8 = ethereumnodeaccessmodule.web3ToUTF8(childsession, tx.input);
                tx.block = {};
                tx.block.blocknumber = tx.blockNumber;
                tx.block.timestamp = tx.timeStamp;
                dataobject = {};

                this._fillTransactionDataObject(dataobject, tx);

                console.log('found one transaction at ' + blocknumber);

                if (!(dataobject.type == 'order')) {
                  _context146.next = 53;
                  break;
                }

                _context146.next = 51;
                return this.saveOrder(sessionuuid, null, dataobject);

              case 51:
                new_orders.push(dataobject);
                ordernum++;

              case 53:
                i++;
                _context146.next = 39;
                break;

              case 56:
                blocknumber++;
                _context146.next = 33;
                break;

              case 59:
                // save where we are
                scan.last_block_number = last_block_number;
                scan.ordernum = ordernum; //await _apicontrollers.saveLocalJson(session, keys, scan);

                _context146.next = 63;
                return this._saveClientSideJson(session, keys, scan);

              case 63:
                return _context146.abrupt("return", new_orders);

              case 64:
              case "end":
                return _context146.stop();
            }
          }
        }, _callee146, this);
      }));

      function scanNextBlockForOrders(_x477, _x478, _x479, _x480, _x481) {
        return _scanNextBlockForOrders.apply(this, arguments);
      }

      return scanNextBlockForOrders;
    }()
  }, {
    key: "saveOrder",
    value: function () {
      var _saveOrder = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee147(sessionuuid, walletuuid, order) {
        var global, _apicontrollers, order_list, bInList, i, session, txhash, blocknumber, currencyuuid, owner, quote, amount, currency, hadfunds, pretradescheme_info, quoteobject, title, keys, localjson;

        return _regeneratorRuntime().wrap(function _callee147$(_context147) {
          while (1) {
            switch (_context147.prev = _context147.next) {
              case 0:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context147.next = 4;
                return this.readOrders(sessionuuid, walletuuid);

              case 4:
                order_list = _context147.sent;
                bInList = false;
                i = 0;

              case 7:
                if (!(i < order_list.length)) {
                  _context147.next = 14;
                  break;
                }

                if (!(order_list[i].txhash == order.txhash)) {
                  _context147.next = 11;
                  break;
                }

                bInList = true;
                return _context147.abrupt("break", 14);

              case 11:
                i++;
                _context147.next = 7;
                break;

              case 14:
                if (bInList) {
                  _context147.next = 35;
                  break;
                }

                _context147.next = 17;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 17:
                session = _context147.sent;

                if (session) {
                  _context147.next = 20;
                  break;
                }

                return _context147.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 20:
                // order parameters
                txhash = order.txhash, blocknumber = order.blocknumber, currencyuuid = order.currencyuuid, owner = order.owner, quote = order.quote, amount = order.amount, currency = order.currency, hadfunds = order.hadfunds; // read quote to get title

                _context147.next = 23;
                return this.getPretradeSchemeInfo(sessionuuid, currencyuuid);

              case 23:
                pretradescheme_info = _context147.sent;
                _context147.next = 26;
                return this.fetchTransaction(sessionuuid, walletuuid, pretradescheme_info.uuid, quote)["catch"](function (err) {});

              case 26:
                quoteobject = _context147.sent;
                title = quoteobject ? quoteobject.title : null;

                if (!walletuuid) {
                  keys = ['myquote', 'orders']; // shared keys
                } else {
                  console.log('WARNING: walletuuid specific case not implemented!!!');
                  keys = ['myquote', 'orders']; // shared keys, also we could put in wallet
                  // with mvcmodule.putInWallet
                }

                localjson = {
                  txhash: txhash,
                  blocknumber: blocknumber,
                  currencyuuid: currencyuuid,
                  owner: owner,
                  quote: quote,
                  title: title,
                  amount: amount,
                  currency: currency,
                  hadfunds: hadfunds
                };
                localjson.savetime = Date.now();
                order_list.push(localjson); //return _apicontrollers.saveLocalJson(session, keys, order_list);

                return _context147.abrupt("return", this._saveClientSideJson(session, keys, order_list));

              case 35:
                return _context147.abrupt("return", order_list);

              case 36:
              case "end":
                return _context147.stop();
            }
          }
        }, _callee147, this);
      }));

      function saveOrder(_x482, _x483, _x484) {
        return _saveOrder.apply(this, arguments);
      }

      return saveOrder;
    }()
  }, {
    key: "readInvoices",
    value: function () {
      var _readInvoices = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee148(sessionuuid, walletuuid) {
        var global, _apicontrollers, session, keys, invoice_list;

        return _regeneratorRuntime().wrap(function _callee148$(_context148) {
          while (1) {
            switch (_context148.prev = _context148.next) {
              case 0:
                if (sessionuuid) {
                  _context148.next = 2;
                  break;
                }

                return _context148.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context148.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context148.sent;

                if (session) {
                  _context148.next = 9;
                  break;
                }

                return _context148.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                if (!walletuuid) {
                  keys = ['myquote', 'invoices']; // shared keys
                } else {
                  console.log('WARNING: walletuuid specific case not implemented!!!');
                  keys = ['myquote', 'invoices']; // shared keys, otherwise we could look in wallet
                  // with mvcmodule.getFromWallet
                } //let invoice_list = await _apicontrollers.getLocalJsonLeaf(session, keys, true);


                _context148.next = 12;
                return this._readClientSideJson(session, keys);

              case 12:
                invoice_list = _context148.sent;
                if (!invoice_list) invoice_list = [];
                return _context148.abrupt("return", invoice_list);

              case 15:
              case "end":
                return _context148.stop();
            }
          }
        }, _callee148, this);
      }));

      function readInvoices(_x485, _x486) {
        return _readInvoices.apply(this, arguments);
      }

      return readInvoices;
    }()
  }, {
    key: "fetchInvoices",
    value: function () {
      var _fetchInvoices = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee149(sessionuuid, walletuuid, currencyuuid, orderhash) {
        var global, _apicontrollers, session, wallet, currency, order, buyer_address, transactions, invoicelist, i, tx, dataobject;

        return _regeneratorRuntime().wrap(function _callee149$(_context149) {
          while (1) {
            switch (_context149.prev = _context149.next) {
              case 0:
                if (sessionuuid) {
                  _context149.next = 2;
                  break;
                }

                return _context149.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context149.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context149.sent;

                if (session) {
                  _context149.next = 9;
                  break;
                }

                return _context149.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                _context149.next = 11;
                return _apicontrollers.getWalletFromUUID(session, walletuuid)["catch"](function (err) {});

              case 11:
                wallet = _context149.sent;
                _context149.next = 14;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 14:
                currency = _context149.sent;

                if (currency) {
                  _context149.next = 17;
                  break;
                }

                return _context149.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 17:
                if (currency.pretrade_explorer_url) {
                  _context149.next = 19;
                  break;
                }

                return _context149.abrupt("return", Promise.reject('no explorer for currency ' + currencyuuid));

              case 19:
                _context149.next = 21;
                return this.fetchCurrencyTransaction(sessionuuid, walletuuid, currencyuuid, orderhash);

              case 21:
                order = _context149.sent;
                buyer_address = order.owner; // use explorer to fetch transactions for buyer's address

                _context149.next = 25;
                return this._getAddressPretradeTransactions(session, wallet, currency, buyer_address);

              case 25:
                transactions = _context149.sent;
                // we filter invoices
                invoicelist = [];

                for (i = 0; i < (transactions ? transactions.length : 0); i++) {
                  tx = transactions[i];
                  dataobject = {};

                  this._fillTransactionDataObject(dataobject, tx);

                  if (dataobject.type == 'invoice' && dataobject.order == orderhash) {
                    //await this.saveInvoice(sessionuuid, null, dataobject);
                    invoicelist.push(dataobject);
                  }
                }

                return _context149.abrupt("return", invoicelist);

              case 29:
              case "end":
                return _context149.stop();
            }
          }
        }, _callee149, this);
      }));

      function fetchInvoices(_x487, _x488, _x489, _x490) {
        return _fetchInvoices.apply(this, arguments);
      }

      return fetchInvoices;
    }()
  }, {
    key: "saveInvoice",
    value: function () {
      var _saveInvoice = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee150(sessionuuid, walletuuid, invoice) {
        var global, _apicontrollers, invoice_list, bInList, i, session, txhash, blocknumber, currencyuuid, owner, order, amount, currency, pretradescheme_info, orderobject, quoteobject, title, keys, localjson;

        return _regeneratorRuntime().wrap(function _callee150$(_context150) {
          while (1) {
            switch (_context150.prev = _context150.next) {
              case 0:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context150.next = 4;
                return this.readInvoices(sessionuuid, walletuuid);

              case 4:
                invoice_list = _context150.sent;
                bInList = false;
                i = 0;

              case 7:
                if (!(i < invoice_list.length)) {
                  _context150.next = 14;
                  break;
                }

                if (!(invoice_list[i].txhash == invoice.txhash)) {
                  _context150.next = 11;
                  break;
                }

                bInList = true;
                return _context150.abrupt("break", 14);

              case 11:
                i++;
                _context150.next = 7;
                break;

              case 14:
                if (bInList) {
                  _context150.next = 38;
                  break;
                }

                _context150.next = 17;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 17:
                session = _context150.sent;

                if (session) {
                  _context150.next = 20;
                  break;
                }

                return _context150.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 20:
                // invoice parameters
                txhash = invoice.txhash, blocknumber = invoice.blocknumber, currencyuuid = invoice.currencyuuid, owner = invoice.owner, order = invoice.order, amount = invoice.amount, currency = invoice.currency; // read order and quote to get title

                _context150.next = 23;
                return this.getPretradeSchemeInfo(sessionuuid, currencyuuid);

              case 23:
                pretradescheme_info = _context150.sent;
                _context150.next = 26;
                return this.fetchTransaction(sessionuuid, walletuuid, pretradescheme_info.uuid, order)["catch"](function (err) {});

              case 26:
                orderobject = _context150.sent;
                _context150.next = 29;
                return this.fetchTransaction(sessionuuid, walletuuid, pretradescheme_info.uuid, orderobject.quote)["catch"](function (err) {});

              case 29:
                quoteobject = _context150.sent;
                title = quoteobject ? quoteobject.title : null;

                if (!walletuuid) {
                  keys = ['myquote', 'invoices']; // shared keys
                } else {
                  console.log('WARNING: walletuuid specific case not implemented!!!');
                  keys = ['myquote', 'invoices']; // shared keys, also we could put in wallet
                  // with mvcmodule.putInWallet
                }

                localjson = {
                  txhash: txhash,
                  blocknumber: blocknumber,
                  currencyuuid: currencyuuid,
                  owner: owner,
                  order: order,
                  title: title,
                  amount: amount,
                  currency: currency
                };
                localjson.savetime = Date.now();
                invoice_list.push(localjson); //return _apicontrollers.saveLocalJson(session, keys, invoice_list);

                return _context150.abrupt("return", this._saveClientSideJson(session, keys, invoice_list));

              case 38:
                return _context150.abrupt("return", invoice_list);

              case 39:
              case "end":
                return _context150.stop();
            }
          }
        }, _callee150, this);
      }));

      function saveInvoice(_x491, _x492, _x493) {
        return _saveInvoice.apply(this, arguments);
      }

      return saveInvoice;
    }()
  }, {
    key: "readPaymentNotices",
    value: function () {
      var _readPaymentNotices = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee151(sessionuuid, walletuuid) {
        var global, _apicontrollers, session, keys, paymentnotice_list;

        return _regeneratorRuntime().wrap(function _callee151$(_context151) {
          while (1) {
            switch (_context151.prev = _context151.next) {
              case 0:
                if (sessionuuid) {
                  _context151.next = 2;
                  break;
                }

                return _context151.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context151.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context151.sent;

                if (session) {
                  _context151.next = 9;
                  break;
                }

                return _context151.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                if (!walletuuid) {
                  keys = ['myquote', 'paymentnotices']; // shared keys
                } else {
                  console.log('WARNING: walletuuid specific case not implemented!!!');
                  keys = ['myquote', 'paymentnotices']; // shared keys, otherwise we could look in wallet
                  // with mvcmodule.getFromWallet
                } //let paymentnotice_list = await _apicontrollers.getLocalJsonLeaf(session, keys, true);


                _context151.next = 12;
                return this._readClientSideJson(session, keys);

              case 12:
                paymentnotice_list = _context151.sent;
                if (!paymentnotice_list) paymentnotice_list = [];
                return _context151.abrupt("return", paymentnotice_list);

              case 15:
              case "end":
                return _context151.stop();
            }
          }
        }, _callee151, this);
      }));

      function readPaymentNotices(_x494, _x495) {
        return _readPaymentNotices.apply(this, arguments);
      }

      return readPaymentNotices;
    }()
  }, {
    key: "fetchPaymentNotices",
    value: function () {
      var _fetchPaymentNotices = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee152(sessionuuid, walletuuid, currencyuuid, invoicehash) {
        var global, _apicontrollers, session, wallet, currency, invoice, vendor_address, transactions, paymentnoticelist, i, tx, dataobject;

        return _regeneratorRuntime().wrap(function _callee152$(_context152) {
          while (1) {
            switch (_context152.prev = _context152.next) {
              case 0:
                if (sessionuuid) {
                  _context152.next = 2;
                  break;
                }

                return _context152.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context152.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context152.sent;

                if (session) {
                  _context152.next = 9;
                  break;
                }

                return _context152.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                _context152.next = 11;
                return _apicontrollers.getWalletFromUUID(session, walletuuid)["catch"](function (err) {});

              case 11:
                wallet = _context152.sent;
                _context152.next = 14;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 14:
                currency = _context152.sent;

                if (currency) {
                  _context152.next = 17;
                  break;
                }

                return _context152.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 17:
                if (currency.pretrade_explorer_url) {
                  _context152.next = 19;
                  break;
                }

                return _context152.abrupt("return", Promise.reject('no explorer for currency ' + currencyuuid));

              case 19:
                _context152.next = 21;
                return this.fetchCurrencyTransaction(sessionuuid, walletuuid, currencyuuid, invoicehash);

              case 21:
                invoice = _context152.sent;
                vendor_address = invoice.owner; // use explorer to fetch transactions for vendor's address

                _context152.next = 25;
                return this._getAddressPretradeTransactions(session, wallet, currency, vendor_address);

              case 25:
                transactions = _context152.sent;
                // we filter payment notices
                paymentnoticelist = [];

                for (i = 0; i < (transactions ? transactions.length : 0); i++) {
                  tx = transactions[i];
                  dataobject = {};

                  this._fillTransactionDataObject(dataobject, tx);

                  if (dataobject.type == 'paymentnotice' && dataobject.invoice == invoicehash) {
                    //await this.savePaymentNotice(sessionuuid, null, dataobject);
                    paymentnoticelist.push(dataobject);
                  }
                }

                return _context152.abrupt("return", paymentnoticelist);

              case 29:
              case "end":
                return _context152.stop();
            }
          }
        }, _callee152, this);
      }));

      function fetchPaymentNotices(_x496, _x497, _x498, _x499) {
        return _fetchPaymentNotices.apply(this, arguments);
      }

      return fetchPaymentNotices;
    }()
  }, {
    key: "savePaymentNotice",
    value: function () {
      var _savePaymentNotice = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee153(sessionuuid, walletuuid, paymentnotice) {
        var global, _apicontrollers, paymentnotice_list, bInList, i, session, txhash, blocknumber, currencyuuid, owner, invoice, amount, currency, pretradescheme_info, invoiceobject, orderobject, quoteobject, title, keys, localjson;

        return _regeneratorRuntime().wrap(function _callee153$(_context153) {
          while (1) {
            switch (_context153.prev = _context153.next) {
              case 0:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context153.next = 4;
                return this.readPaymentNotices(sessionuuid, walletuuid);

              case 4:
                paymentnotice_list = _context153.sent;
                bInList = false;
                i = 0;

              case 7:
                if (!(i < paymentnotice_list.length)) {
                  _context153.next = 14;
                  break;
                }

                if (!(paymentnotice_list[i].txhash == paymentnotice.txhash)) {
                  _context153.next = 11;
                  break;
                }

                bInList = true;
                return _context153.abrupt("break", 14);

              case 11:
                i++;
                _context153.next = 7;
                break;

              case 14:
                if (bInList) {
                  _context153.next = 41;
                  break;
                }

                _context153.next = 17;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 17:
                session = _context153.sent;

                if (session) {
                  _context153.next = 20;
                  break;
                }

                return _context153.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 20:
                // paymentnotice parameters
                txhash = paymentnotice.txhash, blocknumber = paymentnotice.blocknumber, currencyuuid = paymentnotice.currencyuuid, owner = paymentnotice.owner, invoice = paymentnotice.invoice, amount = paymentnotice.amount, currency = paymentnotice.currency; // read invoice, order and quote to get title

                _context153.next = 23;
                return this.getPretradeSchemeInfo(sessionuuid, currencyuuid);

              case 23:
                pretradescheme_info = _context153.sent;
                _context153.next = 26;
                return this.fetchTransaction(sessionuuid, walletuuid, pretradescheme_info.uuid, invoice)["catch"](function (err) {});

              case 26:
                invoiceobject = _context153.sent;
                _context153.next = 29;
                return this.fetchTransaction(sessionuuid, walletuuid, pretradescheme_info.uuid, invoiceobject.order)["catch"](function (err) {});

              case 29:
                orderobject = _context153.sent;
                _context153.next = 32;
                return this.fetchTransaction(sessionuuid, walletuuid, pretradescheme_info.uuid, orderobject.quote)["catch"](function (err) {});

              case 32:
                quoteobject = _context153.sent;
                title = quoteobject ? quoteobject.title : null;

                if (!walletuuid) {
                  keys = ['myquote', 'paymentnotices']; // shared keys
                } else {
                  console.log('WARNING: walletuuid specific case not implemented!!!');
                  keys = ['myquote', 'paymentnotices']; // shared keys, also we could put in wallet
                  // with mvcmodule.putInWallet
                }

                localjson = {
                  txhash: txhash,
                  blocknumber: blocknumber,
                  currencyuuid: currencyuuid,
                  owner: owner,
                  invoice: invoice,
                  title: title,
                  amount: amount,
                  currency: currency
                };
                localjson.savetime = Date.now();
                paymentnotice_list.push(localjson); //return _apicontrollers.saveLocalJson(session, keys, paymentnotice_list);

                return _context153.abrupt("return", this._saveClientSideJson(session, keys, paymentnotice_list));

              case 41:
                return _context153.abrupt("return", paymentnotice_list);

              case 42:
              case "end":
                return _context153.stop();
            }
          }
        }, _callee153, this);
      }));

      function savePaymentNotice(_x500, _x501, _x502) {
        return _savePaymentNotice.apply(this, arguments);
      }

      return savePaymentNotice;
    }()
  }, {
    key: "_saveTransactionObject",
    value: function () {
      var _saveTransactionObject2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee154(sessionuuid, walletuuid, tx) {
        return _regeneratorRuntime().wrap(function _callee154$(_context154) {
          while (1) {
            switch (_context154.prev = _context154.next) {
              case 0:
                if (tx) {
                  _context154.next = 2;
                  break;
                }

                return _context154.abrupt("return");

              case 2:
                _context154.t0 = tx.type;
                _context154.next = _context154.t0 === 'bounty' ? 5 : _context154.t0 === 'claim' ? 6 : _context154.t0 === 'quote' ? 7 : _context154.t0 === 'order' ? 8 : _context154.t0 === 'invoice' ? 9 : _context154.t0 === 'paymentnotice' ? 10 : 11;
                break;

              case 5:
                return _context154.abrupt("return", this.saveBounty(sessionuuid, walletuuid, tx));

              case 6:
                return _context154.abrupt("return", this.saveClaim(sessionuuid, walletuuid, tx));

              case 7:
                return _context154.abrupt("return", this.saveQuote(sessionuuid, walletuuid, tx));

              case 8:
                return _context154.abrupt("return", this.saveOrder(sessionuuid, walletuuid, tx));

              case 9:
                return _context154.abrupt("return", this.saveInvoice(sessionuuid, walletuuid, tx));

              case 10:
                return _context154.abrupt("return", this.savePaymentNotice(sessionuuid, walletuuid, tx));

              case 11:
                return _context154.abrupt("break", 12);

              case 12:
              case "end":
                return _context154.stop();
            }
          }
        }, _callee154, this);
      }));

      function _saveTransactionObject(_x503, _x504, _x505) {
        return _saveTransactionObject2.apply(this, arguments);
      }

      return _saveTransactionObject;
    }() //
    // uniswap
    //

  }, {
    key: "getPriceForCreditUnits",
    value: function () {
      var _getPriceForCreditUnits = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee155(sessionuuid, currencyuuid, creditunits) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee155$(_context155) {
          while (1) {
            switch (_context155.prev = _context155.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context155.abrupt("return", mvccurrencies.getPriceForCreditUnits(sessionuuid, currencyuuid, creditunits));

              case 3:
              case "end":
                return _context155.stop();
            }
          }
        }, _callee155, this);
      }));

      function getPriceForCreditUnits(_x506, _x507, _x508) {
        return _getPriceForCreditUnits.apply(this, arguments);
      }

      return getPriceForCreditUnits;
    }()
  }, {
    key: "buyCreditUnits",
    value: function () {
      var _buyCreditUnits = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee156(sessionuuid, walletuuid, carduuid, currencyuuid, creditunits) {
        var feelevel,
            global,
            mvccurrencies,
            _args156 = arguments;
        return _regeneratorRuntime().wrap(function _callee156$(_context156) {
          while (1) {
            switch (_context156.prev = _context156.next) {
              case 0:
                feelevel = _args156.length > 5 && _args156[5] !== undefined ? _args156[5] : null;
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context156.abrupt("return", mvccurrencies.buyCreditUnits(sessionuuid, walletuuid, carduuid, currencyuuid, creditunits, feelevel));

              case 4:
              case "end":
                return _context156.stop();
            }
          }
        }, _callee156, this);
      }));

      function buyCreditUnits(_x509, _x510, _x511, _x512, _x513) {
        return _buyCreditUnits.apply(this, arguments);
      }

      return buyCreditUnits;
    }() //
    // utils
    //

  }, {
    key: "getDecimalAmount",
    value: function () {
      var _getDecimalAmount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee157(sessionuuid, amount) {
        var decimals,
            global,
            mvccurrencies,
            _args157 = arguments;
        return _regeneratorRuntime().wrap(function _callee157$(_context157) {
          while (1) {
            switch (_context157.prev = _context157.next) {
              case 0:
                decimals = _args157.length > 2 && _args157[2] !== undefined ? _args157[2] : 18;
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context157.abrupt("return", mvccurrencies.getDecimalAmount(sessionuuid, amount, decimals));

              case 4:
              case "end":
                return _context157.stop();
            }
          }
        }, _callee157, this);
      }));

      function getDecimalAmount(_x514, _x515) {
        return _getDecimalAmount.apply(this, arguments);
      }

      return getDecimalAmount;
    }()
  }, {
    key: "getCurrencyAmount",
    value: function () {
      var _getCurrencyAmount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee158(sessionuuid, currencyuuid, amount) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee158$(_context158) {
          while (1) {
            switch (_context158.prev = _context158.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context158.abrupt("return", mvccurrencies.getCurrencyAmount(sessionuuid, currencyuuid, amount));

              case 3:
              case "end":
                return _context158.stop();
            }
          }
        }, _callee158, this);
      }));

      function getCurrencyAmount(_x516, _x517, _x518) {
        return _getCurrencyAmount.apply(this, arguments);
      }

      return getCurrencyAmount;
    }()
  }, {
    key: "formatCurrencyAmount",
    value: function () {
      var _formatCurrencyAmount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee159(sessionuuid, currencyuuid, currencyamount, options) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee159$(_context159) {
          while (1) {
            switch (_context159.prev = _context159.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context159.abrupt("return", mvccurrencies.formatCurrencyAmount(sessionuuid, currencyuuid, currencyamount, options));

              case 3:
              case "end":
                return _context159.stop();
            }
          }
        }, _callee159, this);
      }));

      function formatCurrencyAmount(_x519, _x520, _x521, _x522) {
        return _formatCurrencyAmount.apply(this, arguments);
      }

      return formatCurrencyAmount;
    }()
  }, {
    key: "formatDate",
    value: function formatDate(unixdate, format) {
      var global = this.global;
      var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
      return mvcclientwalletmodule.formatDate(unixdate, format);
    }
  }, {
    key: "fitString",
    value: function fitString(str, maxlength) {
      var global = this.global;
      var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
      return mvcclientwalletmodule.fitString(str, maxlength);
    }
  }]);

  return Module;
}();

if (typeof GlobalClass === 'undefined' || !GlobalClass) {
  var GlobalClass = typeof window !== 'undefined' && window && window.simplestore && window.simplestore.Global ? window.simplestore.Global : null;
}

if (typeof GlobalClass !== 'undefined' && GlobalClass) {
  GlobalClass.getGlobalObject().registerModuleObject(new Module()); //dependencies

  GlobalClass.getGlobalObject().registerModuleDepency('mvc-myquote', 'common');
  GlobalClass.getGlobalObject().registerModuleDepency('mvc-myquote', 'mvc'); // module classes	
  //GlobalClass.registerModuleClass('mvc-myquote', 'DecimalAmount', DecimalAmount);
  //GlobalClass.registerModuleClass('mvc-myquote', 'CurrencyAmount', CurrencyAmount);
}
//# sourceMappingURL=module.js.map