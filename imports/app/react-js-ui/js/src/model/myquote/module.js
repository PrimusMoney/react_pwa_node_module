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
      var global = this.global; //hooks
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
    } // hooks

  }, {
    key: "registerHook",
    value: function () {
      var _registerHook = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(hookname, hookfunction) {
        var global;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                global = this.global; // note: only one hook at a time can be registered for mvc-myquote
                // we could maintain an array to call multiple client functions if necessary

                return _context4.abrupt("return", global.registerHook(hookname, this.name, hookfunction));

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function registerHook(_x2, _x3) {
        return _registerHook.apply(this, arguments);
      }

      return registerHook;
    }()
  }, {
    key: "invokeHooks",
    value: function () {
      var _invokeHooks = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(hookname, result, params) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context5.abrupt("return", mvcclientwalletmodule.invokeHooks(hookname, result, params));

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function invokeHooks(_x4, _x5, _x6) {
        return _invokeHooks.apply(this, arguments);
      }

      return invokeHooks;
    }()
  }, {
    key: "invokeAsyncHooks",
    value: function () {
      var _invokeAsyncHooks = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(hookname, result, params) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context6.abrupt("return", mvcclientwalletmodule.invokeAsyncHooks(hookname, result, params));

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function invokeAsyncHooks(_x7, _x8, _x9) {
        return _invokeAsyncHooks.apply(this, arguments);
      }

      return invokeAsyncHooks;
    }() //
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
      var _checkOnline = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var _this = this;

        var isOnline, global, _apicontrollers, clientmodule, remote_networks, remote_network_list, network, resturl, json;

        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                isOnline = true; // assume unless proven wrong by a rest call

                global = this.global;
                _apicontrollers = this._getClientAPI();
                clientmodule = global.getModuleObject('webclient');
                remote_networks = clientmodule.getBuiltinRemoteNetworks();
                remote_network_list = Object.values(remote_networks);

                if (!(remote_network_list && remote_network_list.length > 0)) {
                  _context7.next = 13;
                  break;
                }

                network = remote_network_list[0];

                if (!network.restserver.rest_server_url) {
                  _context7.next = 13;
                  break;
                }

                // make a rest call to see if we get a proper answer
                resturl = network.restserver.rest_server_url + (network.restserver.rest_server_api_path ? network.restserver.rest_server_api_path : '');
                _context7.next = 12;
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
                json = _context7.sent;

              case 13:
                return _context7.abrupt("return", isOnline);

              case 14:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
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
      var _readSettings = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(keys, defaultvalue) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context8.abrupt("return", mvcclientwalletmodule.readSettings(keys, defaultvalue));

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function readSettings(_x10, _x11) {
        return _readSettings.apply(this, arguments);
      }

      return readSettings;
    }()
  }, {
    key: "putSettings",
    value: function () {
      var _putSettings = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(keys, json) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context9.abrupt("return", mvcclientwalletmodule.putSettings(keys, json));

              case 3:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function putSettings(_x12, _x13) {
        return _putSettings.apply(this, arguments);
      }

      return putSettings;
    }() //
    // Crypto functions
    //

  }, {
    key: "isValidAddress",
    value: function () {
      var _isValidAddress = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(sessionuuid, address) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context10.abrupt("return", mvcclientwalletmodule.isValidAddress(sessionuuid, address));

              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function isValidAddress(_x14, _x15) {
        return _isValidAddress.apply(this, arguments);
      }

      return isValidAddress;
    }()
  }, {
    key: "generatePrivateKey",
    value: function () {
      var _generatePrivateKey = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(sessionuuid) {
        var global, _apicontrollers, session, ethereumjs, cryptokeyPassword, key, _privKey, _privHexKey;

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
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context11.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context11.sent;

                if (session) {
                  _context11.next = 9;
                  break;
                }

                return _context11.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                ethereumjs = ethereumjs = global.getGlobalStoredObject('ethereumjs');
                cryptokeyPassword = session.guid(); // give more entropy than "123456"

                key = ethereumjs.Wallet.generate(cryptokeyPassword);
                _privKey = key.privateKey ? key.privateKey : key._privKey;
                _privHexKey = '0x' + _privKey.toString('hex');
                return _context11.abrupt("return", _privHexKey);

              case 15:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function generatePrivateKey(_x16) {
        return _generatePrivateKey.apply(this, arguments);
      }

      return generatePrivateKey;
    }()
  }, {
    key: "isValidPrivateKey",
    value: function () {
      var _isValidPrivateKey = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(sessionuuid, privatekey) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context12.abrupt("return", mvcclientwalletmodule.isValidPrivateKey(sessionuuid, privatekey));

              case 3:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function isValidPrivateKey(_x17, _x18) {
        return _isValidPrivateKey.apply(this, arguments);
      }

      return isValidPrivateKey;
    }()
  }, {
    key: "areAddressesEqual",
    value: function () {
      var _areAddressesEqual = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(sessionuuid, address1, address2) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context13.abrupt("return", mvcclientwalletmodule.areAddressesEqual(sessionuuid, address1, address2));

              case 3:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function areAddressesEqual(_x19, _x20, _x21) {
        return _areAddressesEqual.apply(this, arguments);
      }

      return areAddressesEqual;
    }() //
    // Session functions
    //

  }, {
    key: "createChildSession",
    value: function () {
      var _createChildSession = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(sessionuuid) {
        var _apicontrollers, session, childsession;

        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                if (sessionuuid) {
                  _context14.next = 2;
                  break;
                }

                return _context14.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                _apicontrollers = this._getClientAPI();
                _context14.next = 5;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 5:
                session = _context14.sent;

                if (session) {
                  _context14.next = 8;
                  break;
                }

                return _context14.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 8:
                _context14.next = 10;
                return _apicontrollers.createChildSessionObject(session);

              case 10:
                childsession = _context14.sent;

                if (childsession) {
                  _context14.next = 13;
                  break;
                }

                return _context14.abrupt("return", Promise.reject('could not create child session'));

              case 13:
                childsession.MYQUOTE = this.current_version;
                return _context14.abrupt("return", childsession.getSessionUUID());

              case 15:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function createChildSession(_x22) {
        return _createChildSession.apply(this, arguments);
      }

      return createChildSession;
    }() // TODO: should use mvcmodule._getChildSessionOnWeb3Url for version >= 0.20.7
    // keep

  }, {
    key: "_getChildSessionOnWeb3Url",
    value: function () {
      var _getChildSessionOnWeb3Url2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(parentsession, web3providerurl) {
        var global, mvcmodule;
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                return _context15.abrupt("return", mvcmodule._getChildSessionOnWeb3Url(parentsession, web3providerurl));

              case 3:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function _getChildSessionOnWeb3Url(_x23, _x24) {
        return _getChildSessionOnWeb3Url2.apply(this, arguments);
      }

      return _getChildSessionOnWeb3Url;
    }() // user

  }, {
    key: "getUserInfo",
    value: function () {
      var _getUserInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(sessionuuid) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context16.abrupt("return", mvcclientwalletmodule.getUserInfo(sessionuuid));

              case 3:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function getUserInfo(_x25) {
        return _getUserInfo.apply(this, arguments);
      }

      return getUserInfo;
    }()
  }, {
    key: "isValidEmailAddress",
    value: function () {
      var _isValidEmailAddress = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(sessionuuid, emailaddress) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context17.abrupt("return", mvcclientwalletmodule.isValidEmailAddress(sessionuuid, emailaddress));

              case 3:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function isValidEmailAddress(_x26, _x27) {
        return _isValidEmailAddress.apply(this, arguments);
      }

      return isValidEmailAddress;
    }() //
    // Storage
    //

  }, {
    key: "getLocalJsonLeaf",
    value: function () {
      var _getLocalJsonLeaf = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(sessionuuid, keys, bForceRefresh) {
        var global, mvcmodule;
        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                return _context18.abrupt("return", mvcmodule.getLocalJsonLeaf(sessionuuid, keys, bForceRefresh));

              case 3:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function getLocalJsonLeaf(_x28, _x29, _x30) {
        return _getLocalJsonLeaf.apply(this, arguments);
      }

      return getLocalJsonLeaf;
    }()
  }, {
    key: "saveLocalJson",
    value: function () {
      var _saveLocalJson = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(sessionuuid, keys, json) {
        var global, mvcmodule;
        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                return _context19.abrupt("return", mvcmodule.saveLocalJson(sessionuuid, keys, json));

              case 3:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function saveLocalJson(_x31, _x32, _x33) {
        return _saveLocalJson.apply(this, arguments);
      }

      return saveLocalJson;
    }() // TODO: should use _apicontrollers.readClientSideJson for version >= 0.20.8

  }, {
    key: "_readClientSideJson",
    value: function () {
      var _readClientSideJson2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(session, keys) {
        var clientAccess, result;
        return _regeneratorRuntime().wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                clientAccess = session.getClientStorageAccessInstance();
                result = new Promise(function (resolve, reject) {
                  clientAccess.readClientSideJson(keys, function (err, res) {
                    if (err) reject(err);else resolve(res);
                  }); // does not return a promise
                })["catch"](function (err) {
                  console.log('error in _readClientSideJson: ' + err);
                });
                return _context20.abrupt("return", result);

              case 3:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20);
      }));

      function _readClientSideJson(_x34, _x35) {
        return _readClientSideJson2.apply(this, arguments);
      }

      return _readClientSideJson;
    }() // TODO: should use _apicontrollers.saveClientSideJson for version >= 0.20.8

  }, {
    key: "_saveClientSideJson",
    value: function () {
      var _saveClientSideJson2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(session, keys, json) {
        var clientAccess, result;
        return _regeneratorRuntime().wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                clientAccess = session.getClientStorageAccessInstance();
                result = new Promise(function (resolve, reject) {
                  clientAccess.saveClientSideJson(keys, json, function (err, res) {
                    if (err) reject(err);else resolve(res);
                  }); // does not return a promise
                });
                return _context21.abrupt("return", result);

              case 3:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21);
      }));

      function _saveClientSideJson(_x36, _x37, _x38) {
        return _saveClientSideJson2.apply(this, arguments);
      }

      return _saveClientSideJson;
    }()
  }, {
    key: "hasPrivateKey",
    value: function () {
      var _hasPrivateKey = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(sessionuuid, address) {
        var global, mvcmodule;
        return _regeneratorRuntime().wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                return _context22.abrupt("return", mvcmodule.hasPrivateKey(sessionuuid, address));

              case 3:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function hasPrivateKey(_x39, _x40) {
        return _hasPrivateKey.apply(this, arguments);
      }

      return hasPrivateKey;
    }() //
    // Card encryption functions
    //
    // private key
    // TODO: should use mvcmodule.getWalletDecryptingCard for version >= 0.20.17

  }, {
    key: "getWalletDecryptingCard",
    value: function () {
      var _getWalletDecryptingCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(sessionuuid, walletuuid, address) {
        var global, mvcmodule, _apicontrollers, session, wallet, cards, i, _privatekey;

        return _regeneratorRuntime().wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                if (sessionuuid) {
                  _context23.next = 2;
                  break;
                }

                return _context23.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                _apicontrollers = this._getClientAPI();
                _context23.next = 7;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 7:
                session = _context23.sent;

                if (session) {
                  _context23.next = 10;
                  break;
                }

                return _context23.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 10:
                _context23.next = 12;
                return _apicontrollers.getWalletFromUUID(session, walletuuid)["catch"](function (err) {});

              case 12:
                wallet = _context23.sent;

                if (wallet) {
                  _context23.next = 15;
                  break;
                }

                return _context23.abrupt("return");

              case 15:
                _context23.next = 17;
                return mvcmodule.getCardsWithAddress(sessionuuid, walletuuid, address)["catch"](function (err) {});

              case 17:
                cards = _context23.sent;

                if (cards) {
                  _context23.next = 20;
                  break;
                }

                return _context23.abrupt("return");

              case 20:
                i = 0;

              case 21:
                if (!(i < cards.length)) {
                  _context23.next = 30;
                  break;
                }

                _context23.next = 24;
                return mvcmodule.getCardPrivateKey(sessionuuid, walletuuid, cards[i].uuid)["catch"](function (err) {});

              case 24:
                _privatekey = _context23.sent;

                if (!_privatekey) {
                  _context23.next = 27;
                  break;
                }

                return _context23.abrupt("return", cards[i]);

              case 27:
                i++;
                _context23.next = 21;
                break;

              case 30:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function getWalletDecryptingCard(_x41, _x42, _x43) {
        return _getWalletDecryptingCard.apply(this, arguments);
      }

      return getWalletDecryptingCard;
    }()
  }, {
    key: "getCardPrivateKey",
    value: function () {
      var _getCardPrivateKey = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(sessionuuid, walletuuid, carduuid) {
        var global, mvcmodule;
        return _regeneratorRuntime().wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                return _context24.abrupt("return", mvcmodule.getCardPrivateKey(sessionuuid, walletuuid, carduuid));

              case 3:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function getCardPrivateKey(_x44, _x45, _x46) {
        return _getCardPrivateKey.apply(this, arguments);
      }

      return getCardPrivateKey;
    }()
  }, {
    key: "setCardPrivateKey",
    value: function () {
      var _setCardPrivateKey = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(sessionuuid, walletuuid, carduuid, privatekey) {
        var global, mvcmodule;
        return _regeneratorRuntime().wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                return _context25.abrupt("return", mvcmodule.setCardPrivateKey(sessionuuid, walletuuid, carduuid, privatekey));

              case 3:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function setCardPrivateKey(_x47, _x48, _x49, _x50) {
        return _setCardPrivateKey.apply(this, arguments);
      }

      return setCardPrivateKey;
    }() // symetric encryption

  }, {
    key: "aesEncryptString",
    value: function () {
      var _aesEncryptString = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(sessionuuid, walletuuid, carduuid, plaintext) {
        var global, mvcmodule;
        return _regeneratorRuntime().wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                return _context26.abrupt("return", mvcmodule.aesEncryptString(sessionuuid, walletuuid, carduuid, plaintext));

              case 3:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function aesEncryptString(_x51, _x52, _x53, _x54) {
        return _aesEncryptString.apply(this, arguments);
      }

      return aesEncryptString;
    }()
  }, {
    key: "aesDecryptString",
    value: function () {
      var _aesDecryptString = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(sessionuuid, walletuuid, carduuid, cyphertext) {
        var global, mvcmodule;
        return _regeneratorRuntime().wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                return _context27.abrupt("return", mvcmodule.aesDecryptString(sessionuuid, walletuuid, carduuid, cyphertext));

              case 3:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function aesDecryptString(_x55, _x56, _x57, _x58) {
        return _aesDecryptString.apply(this, arguments);
      }

      return aesDecryptString;
    }() // asymetric encryption

  }, {
    key: "rsaEncryptString",
    value: function () {
      var _rsaEncryptString = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(sessionuuid, walletuuid, carduuid, recipientrsapublickey, plaintext) {
        var global, mvcmodule;
        return _regeneratorRuntime().wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                return _context28.abrupt("return", mvcmodule.rsaEncryptString(sessionuuid, walletuuid, carduuid, recipientrsapublickey, plaintext));

              case 3:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      function rsaEncryptString(_x59, _x60, _x61, _x62, _x63) {
        return _rsaEncryptString.apply(this, arguments);
      }

      return rsaEncryptString;
    }()
  }, {
    key: "rsaDecryptString",
    value: function () {
      var _rsaDecryptString = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29(sessionuuid, walletuuid, carduuid, senderrsapublickey, cyphertext) {
        var global, mvcmodule;
        return _regeneratorRuntime().wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                return _context29.abrupt("return", mvcmodule.rsaDecryptString(sessionuuid, walletuuid, carduuid, senderrsapublickey, cyphertext));

              case 3:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));

      function rsaDecryptString(_x64, _x65, _x66, _x67, _x68) {
        return _rsaDecryptString.apply(this, arguments);
      }

      return rsaDecryptString;
    }()
  }, {
    key: "signString",
    value: function () {
      var _signString = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee30(sessionuuid, walletuuid, carduuid, plaintext) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context30.abrupt("return", mvcclientwalletmodule.signString(sessionuuid, walletuuid, carduuid, plaintext));

              case 3:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));

      function signString(_x69, _x70, _x71, _x72) {
        return _signString.apply(this, arguments);
      }

      return signString;
    }() // TODO: should use mvcclientwalletmodule.validateStringCardSignature for version >= 0.30.11

  }, {
    key: "validateStringCardSignature",
    value: function () {
      var _validateStringCardSignature = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee31(sessionuuid, walletuuid, carduuid, plaintext, signature) {
        var global, _apicontrollers, session, wallet, card, address;

        return _regeneratorRuntime().wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                if (plaintext) {
                  _context31.next = 2;
                  break;
                }

                return _context31.abrupt("return", Promise.reject('plain text is undefined'));

              case 2:
                if (signature) {
                  _context31.next = 4;
                  break;
                }

                return _context31.abrupt("return", Promise.reject('signature is undefined'));

              case 4:
                if (sessionuuid) {
                  _context31.next = 6;
                  break;
                }

                return _context31.abrupt("return", Promise.reject('session uuid is undefined'));

              case 6:
                if (walletuuid) {
                  _context31.next = 8;
                  break;
                }

                return _context31.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 8:
                if (carduuid) {
                  _context31.next = 10;
                  break;
                }

                return _context31.abrupt("return", Promise.reject('card uuid is undefined'));

              case 10:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context31.next = 14;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 14:
                session = _context31.sent;

                if (session) {
                  _context31.next = 17;
                  break;
                }

                return _context31.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 17:
                _context31.next = 19;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 19:
                wallet = _context31.sent;

                if (wallet) {
                  _context31.next = 22;
                  break;
                }

                return _context31.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 22:
                _context31.next = 24;
                return wallet.getCardFromUUID(carduuid);

              case 24:
                card = _context31.sent;

                if (card) {
                  _context31.next = 27;
                  break;
                }

                return _context31.abrupt("return", Promise.reject('could not find card ' + carduuid));

              case 27:
                address = card.getAddress();
                return _context31.abrupt("return", _apicontrollers.validateStringSignature(session, address, plaintext, signature));

              case 29:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));

      function validateStringCardSignature(_x73, _x74, _x75, _x76, _x77) {
        return _validateStringCardSignature.apply(this, arguments);
      }

      return validateStringCardSignature;
    }() //
    // Scheme functions
    //

  }, {
    key: "getSessionScheme",
    value: function () {
      var _getSessionScheme = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee32(sessionuuid) {
        var global, _apicontrollers, session, schemeuuid;

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
                schemeuuid = session.getSessionVariable('schemeuuid');

                if (schemeuuid) {
                  _context32.next = 12;
                  break;
                }

                return _context32.abrupt("return", Promise.reject('no scheme uuid save in session variables'));

              case 12:
                return _context32.abrupt("return", this.getSchemeInfo(sessionuuid, schemeuuid));

              case 13:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));

      function getSessionScheme(_x78) {
        return _getSessionScheme.apply(this, arguments);
      }

      return getSessionScheme;
    }()
  }, {
    key: "getSchemeInfo",
    value: function () {
      var _getSchemeInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee33(sessionuuid, schemeuuid) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context33.abrupt("return", mvcclientwalletmodule.getSchemeInfo(sessionuuid, schemeuuid));

              case 3:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));

      function getSchemeInfo(_x79, _x80) {
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
      var _findLocalSchemeInfoFromWeb3Url = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee34(sessionuuid, web3url, options) {
        var global, _apicontrollers, session, scheme, localschemes, i, networkconfig, ethnodeserverconfig, bValid, _keys, j, mvcclientwalletmodule, schemeuuid;

        return _regeneratorRuntime().wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                console.log('OBSOLETE: Module.findLocalSchemeInfoFromWeb3Url should no longer be used!');

                if (sessionuuid) {
                  _context34.next = 3;
                  break;
                }

                return _context34.abrupt("return", Promise.reject('session uuid is undefined'));

              case 3:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context34.next = 7;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 7:
                session = _context34.sent;

                if (session) {
                  _context34.next = 10;
                  break;
                }

                return _context34.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 10:
                _context34.next = 12;
                return _apicontrollers.getLocalSchemeList(session, true);

              case 12:
                localschemes = _context34.sent;
                i = 0;

              case 14:
                if (!(i < localschemes.length)) {
                  _context34.next = 34;
                  break;
                }

                networkconfig = localschemes[i].getNetworkConfig();
                ethnodeserverconfig = networkconfig.ethnodeserver;

                if (!this._compareUrl(ethnodeserverconfig.web3_provider_url, web3url)) {
                  _context34.next = 31;
                  break;
                }

                // validate scheme matches options
                bValid = true;
                _keys = options ? Object.keys(options) : [];
                j = 0;

              case 21:
                if (!(j < _keys.length)) {
                  _context34.next = 28;
                  break;
                }

                if (!(options[_keys[j]] && options[_keys[j]] != ethnodeserverconfig[_keys[j]])) {
                  _context34.next = 25;
                  break;
                }

                bValid = false;
                return _context34.abrupt("break", 28);

              case 25:
                j++;
                _context34.next = 21;
                break;

              case 28:
                if (!bValid) {
                  _context34.next = 31;
                  break;
                }

                scheme = localschemes[i];
                return _context34.abrupt("break", 34);

              case 31:
                i++;
                _context34.next = 14;
                break;

              case 34:
                if (scheme) {
                  _context34.next = 36;
                  break;
                }

                return _context34.abrupt("return", Promise.reject('could not find scheme for ' + web3url));

              case 36:
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                schemeuuid = scheme.getSchemeUUID();
                return _context34.abrupt("return", mvcclientwalletmodule.getSchemeInfo(sessionuuid, schemeuuid));

              case 39:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));

      function findLocalSchemeInfoFromWeb3Url(_x81, _x82, _x83) {
        return _findLocalSchemeInfoFromWeb3Url.apply(this, arguments);
      }

      return findLocalSchemeInfoFromWeb3Url;
    }()
  }, {
    key: "getSchemeTransactionUnitsThreshold",
    value: function () {
      var _getSchemeTransactionUnitsThreshold = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee35(sessionuuid, schemeuuid) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context35.abrupt("return", mvcclientwalletmodule.getSchemeTransactionUnitsThreshold(sessionuuid, schemeuuid));

              case 3:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, this);
      }));

      function getSchemeTransactionUnitsThreshold(_x84, _x85) {
        return _getSchemeTransactionUnitsThreshold.apply(this, arguments);
      }

      return getSchemeTransactionUnitsThreshold;
    }()
  }, {
    key: "getDefaultLocalSchemeInfo",
    value: function () {
      var _getDefaultLocalSchemeInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee36(sessionuuid) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context36.abrupt("return", mvcclientwalletmodule.getDefaultLocalSchemeInfo(sessionuuid));

              case 3:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this);
      }));

      function getDefaultLocalSchemeInfo(_x86) {
        return _getDefaultLocalSchemeInfo.apply(this, arguments);
      }

      return getDefaultLocalSchemeInfo;
    }()
  }, {
    key: "isDefaultLocalScheme",
    value: function () {
      var _isDefaultLocalScheme = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee37(sessionuuid, schemeuuid) {
        var localscheme, localschemeuuid;
        return _regeneratorRuntime().wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                _context37.next = 2;
                return this.getDefaultLocalSchemeInfo(sessionuuid);

              case 2:
                localscheme = _context37.sent;
                localschemeuuid = localscheme.uuid;

                if (!(schemeuuid == localschemeuuid)) {
                  _context37.next = 8;
                  break;
                }

                return _context37.abrupt("return", true);

              case 8:
                return _context37.abrupt("return", false);

              case 9:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this);
      }));

      function isDefaultLocalScheme(_x87, _x88) {
        return _isDefaultLocalScheme.apply(this, arguments);
      }

      return isDefaultLocalScheme;
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
      var _getSchemeTransactionInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee38(sessionuuid, schemeuuid) {
        var feelevel,
            global,
            mvcclientwalletmodule,
            _args38 = arguments;
        return _regeneratorRuntime().wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                feelevel = _args38.length > 2 && _args38[2] !== undefined ? _args38[2] : null;
                console.log('OBSOLETE: Module.getSchemeTransactionInfo should no longer be used!');
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context38.abrupt("return", mvcclientwalletmodule.getSchemeTransactionInfo(sessionuuid, schemeuuid, feelevel));

              case 5:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38, this);
      }));

      function getSchemeTransactionInfo(_x89, _x90) {
        return _getSchemeTransactionInfo.apply(this, arguments);
      }

      return getSchemeTransactionInfo;
    }()
  }, {
    key: "_getEthereumTransaction",
    value: function () {
      var _getEthereumTransaction2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee39(session, txhash) {
        var global, ethereumnodeaccessmodule, result;
        return _regeneratorRuntime().wrap(function _callee39$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
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
                return _context39.abrupt("return", result);

              case 4:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee39, this);
      }));

      function _getEthereumTransaction(_x91, _x92) {
        return _getEthereumTransaction2.apply(this, arguments);
      }

      return _getEthereumTransaction;
    }()
  }, {
    key: "_readTransaction",
    value: function () {
      var _readTransaction2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee40(session, txhash) {
        var global, ethchainreadermodule, chainreaderinterface, result;
        return _regeneratorRuntime().wrap(function _callee40$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
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
                return _context40.abrupt("return", result);

              case 5:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40, this);
      }));

      function _readTransaction(_x93, _x94) {
        return _readTransaction2.apply(this, arguments);
      }

      return _readTransaction;
    }()
  }, {
    key: "getSchemeEthereumTransaction",
    value: function () {
      var _getSchemeEthereumTransaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee41(sessionuuid, walletuuid, schemeuuid, txhash) {
        var global, _apicontrollers, session, wallet, scheme, childsession, ethereumtransaction;

        return _regeneratorRuntime().wrap(function _callee41$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                console.log('OBSOLETE: Module.getSchemeEthereumTransaction should no longer be used!');

                if (sessionuuid) {
                  _context41.next = 3;
                  break;
                }

                return _context41.abrupt("return", Promise.reject('session uuid is undefined'));

              case 3:
                if (walletuuid) {
                  _context41.next = 5;
                  break;
                }

                return _context41.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 5:
                if (schemeuuid) {
                  _context41.next = 7;
                  break;
                }

                return _context41.abrupt("return", Promise.reject('scheme uuid is undefined'));

              case 7:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context41.next = 11;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 11:
                session = _context41.sent;

                if (session) {
                  _context41.next = 14;
                  break;
                }

                return _context41.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 14:
                _context41.next = 16;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 16:
                wallet = _context41.sent;

                if (wallet) {
                  _context41.next = 19;
                  break;
                }

                return _context41.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 19:
                _context41.next = 21;
                return _apicontrollers.getSchemeFromUUID(session, schemeuuid)["catch"](function (err) {});

              case 21:
                scheme = _context41.sent;

                if (scheme) {
                  _context41.next = 24;
                  break;
                }

                return _context41.abrupt("return", Promise.reject('could not find scheme ' + schemeuuid));

              case 24:
                _context41.next = 26;
                return this._getMonitoredSchemeSession(session, wallet, scheme);

              case 26:
                childsession = _context41.sent;
                _context41.next = 29;
                return this._getEthereumTransaction(childsession, txhash);

              case 29:
                ethereumtransaction = _context41.sent;
                _context41.next = 32;
                return this._readTransaction(childsession, txhash);

              case 32:
                ethereumtransaction._ethtx = _context41.sent;
                return _context41.abrupt("return", ethereumtransaction);

              case 34:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee41, this);
      }));

      function getSchemeEthereumTransaction(_x95, _x96, _x97, _x98) {
        return _getSchemeEthereumTransaction.apply(this, arguments);
      }

      return getSchemeEthereumTransaction;
    }()
  }, {
    key: "getSchemeEthereumTransactionReceipt",
    value: function () {
      var _getSchemeEthereumTransactionReceipt = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee42(sessionuuid, walletuuid, schemeuuid, txhash) {
        var global, _apicontrollers, session, wallet, scheme, childsession, ethereumtransactionreceipt;

        return _regeneratorRuntime().wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                console.log('OBSOLETE: Module.getSchemeEthereumTransactionReceipt should no longer be used!');

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
                if (schemeuuid) {
                  _context42.next = 7;
                  break;
                }

                return _context42.abrupt("return", Promise.reject('scheme uuid is undefined'));

              case 7:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context42.next = 11;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 11:
                session = _context42.sent;

                if (session) {
                  _context42.next = 14;
                  break;
                }

                return _context42.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 14:
                _context42.next = 16;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 16:
                wallet = _context42.sent;

                if (wallet) {
                  _context42.next = 19;
                  break;
                }

                return _context42.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 19:
                _context42.next = 21;
                return _apicontrollers.getSchemeFromUUID(session, schemeuuid)["catch"](function (err) {});

              case 21:
                scheme = _context42.sent;

                if (scheme) {
                  _context42.next = 24;
                  break;
                }

                return _context42.abrupt("return", Promise.reject('could not find scheme ' + schemeuuid));

              case 24:
                _context42.next = 26;
                return this._getMonitoredSchemeSession(session, wallet, scheme);

              case 26:
                childsession = _context42.sent;
                _context42.next = 29;
                return _apicontrollers.getEthereumTransactionReceipt(childsession, txhash);

              case 29:
                ethereumtransactionreceipt = _context42.sent;
                return _context42.abrupt("return", ethereumtransactionreceipt);

              case 31:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee42, this);
      }));

      function getSchemeEthereumTransactionReceipt(_x99, _x100, _x101, _x102) {
        return _getSchemeEthereumTransactionReceipt.apply(this, arguments);
      }

      return getSchemeEthereumTransactionReceipt;
    }()
  }, {
    key: "getSchemeERC20TokenInfo",
    value: function () {
      var _getSchemeERC20TokenInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee43(sessionuuid, walletuuid, schemeuuid, tokenaddress) {
        var global, _apicontrollers, session, wallet, scheme, childsession, erc20token_contract, token;

        return _regeneratorRuntime().wrap(function _callee43$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                console.log('OBSOLETE: Module.getSchemeERC20TokenInfo should no longer be used!');

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
                if (schemeuuid) {
                  _context43.next = 7;
                  break;
                }

                return _context43.abrupt("return", Promise.reject('scheme uuid is undefined'));

              case 7:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context43.next = 11;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 11:
                session = _context43.sent;

                if (session) {
                  _context43.next = 14;
                  break;
                }

                return _context43.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 14:
                _context43.next = 16;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 16:
                wallet = _context43.sent;

                if (wallet) {
                  _context43.next = 19;
                  break;
                }

                return _context43.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 19:
                _context43.next = 21;
                return _apicontrollers.getSchemeFromUUID(session, schemeuuid)["catch"](function (err) {});

              case 21:
                scheme = _context43.sent;

                if (scheme) {
                  _context43.next = 24;
                  break;
                }

                return _context43.abrupt("return", Promise.reject('could not find scheme ' + schemeuuid));

              case 24:
                _context43.next = 26;
                return this._getMonitoredSchemeSession(session, wallet, scheme);

              case 26:
                childsession = _context43.sent;
                _context43.next = 29;
                return _apicontrollers.importERC20Token(childsession, tokenaddress);

              case 29:
                erc20token_contract = _context43.sent;
                token = {
                  address: tokenaddress
                };
                _context43.next = 33;
                return erc20token_contract.getChainName();

              case 33:
                token.name = _context43.sent;
                _context43.next = 36;
                return erc20token_contract.getChainSymbol();

              case 36:
                token.symbol = _context43.sent;
                _context43.next = 39;
                return erc20token_contract.getChainDecimals();

              case 39:
                token.decimals = _context43.sent;
                return _context43.abrupt("return", token);

              case 41:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee43, this);
      }));

      function getSchemeERC20TokenInfo(_x103, _x104, _x105, _x106) {
        return _getSchemeERC20TokenInfo.apply(this, arguments);
      }

      return getSchemeERC20TokenInfo;
    }()
  }, {
    key: "oauth2AuthorizeUrl",
    value: function () {
      var _oauth2AuthorizeUrl = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee44(sessionuuid, schemeuuid, params) {
        var global, mvcmodule;
        return _regeneratorRuntime().wrap(function _callee44$(_context44) {
          while (1) {
            switch (_context44.prev = _context44.next) {
              case 0:
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                return _context44.abrupt("return", mvcmodule.oauth2AuthorizeUrl(sessionuuid, schemeuuid, params));

              case 3:
              case "end":
                return _context44.stop();
            }
          }
        }, _callee44, this);
      }));

      function oauth2AuthorizeUrl(_x107, _x108, _x109) {
        return _oauth2AuthorizeUrl.apply(this, arguments);
      }

      return oauth2AuthorizeUrl;
    }() // TODO: should use mvclientwalletmodule.getUnitsFromCredits for version >= 0.20.17

  }, {
    key: "_getUnitsFromCredits",
    value: function () {
      var _getUnitsFromCredits2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee45(session, scheme, credits) {
        var units;
        return _regeneratorRuntime().wrap(function _callee45$(_context45) {
          while (1) {
            switch (_context45.prev = _context45.next) {
              case 0:
                units = scheme.getTransactionUnits(credits);
                return _context45.abrupt("return", units);

              case 2:
              case "end":
                return _context45.stop();
            }
          }
        }, _callee45);
      }));

      function _getUnitsFromCredits(_x110, _x111, _x112) {
        return _getUnitsFromCredits2.apply(this, arguments);
      }

      return _getUnitsFromCredits;
    }() // TODO: should use mvclientwalletmodule.getUnitsFromCredits for version >= 0.20.17

  }, {
    key: "getUnitsFromCredits",
    value: function () {
      var _getUnitsFromCredits3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee46(sessionuuid, schemeuuid, credits) {
        var global, _apicontrollers, session, scheme;

        return _regeneratorRuntime().wrap(function _callee46$(_context46) {
          while (1) {
            switch (_context46.prev = _context46.next) {
              case 0:
                console.log('OBSOLETE: Module.getUnitsFromCredits should no longer be used!');

                if (sessionuuid) {
                  _context46.next = 3;
                  break;
                }

                return _context46.abrupt("return", Promise.reject('session uuid is undefined'));

              case 3:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context46.next = 7;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 7:
                session = _context46.sent;

                if (session) {
                  _context46.next = 10;
                  break;
                }

                return _context46.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 10:
                _context46.next = 12;
                return _apicontrollers.getSchemeFromUUID(session, schemeuuid)["catch"](function (err) {});

              case 12:
                scheme = _context46.sent;

                if (scheme) {
                  _context46.next = 15;
                  break;
                }

                return _context46.abrupt("return", Promise.reject('could not find scheme ' + schemeuuid));

              case 15:
                return _context46.abrupt("return", this._getUnitsFromCredits(session, scheme, credits));

              case 16:
              case "end":
                return _context46.stop();
            }
          }
        }, _callee46, this);
      }));

      function getUnitsFromCredits(_x113, _x114, _x115) {
        return _getUnitsFromCredits3.apply(this, arguments);
      }

      return getUnitsFromCredits;
    }() // TODO: should use mvclientwalletmodule.getCreditsFromUnits for version >= 0.20.17

  }, {
    key: "getCreditsFromUnits",
    value: function () {
      var _getCreditsFromUnits = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee47(sessionuuid, schemeuuid, units) {
        var global, _apicontrollers, session, scheme;

        return _regeneratorRuntime().wrap(function _callee47$(_context47) {
          while (1) {
            switch (_context47.prev = _context47.next) {
              case 0:
                console.log('OBSOLETE: Module.getCreditsFromUnits should no longer be used!');

                if (sessionuuid) {
                  _context47.next = 3;
                  break;
                }

                return _context47.abrupt("return", Promise.reject('session uuid is undefined'));

              case 3:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context47.next = 7;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 7:
                session = _context47.sent;

                if (session) {
                  _context47.next = 10;
                  break;
                }

                return _context47.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 10:
                _context47.next = 12;
                return _apicontrollers.getSchemeFromUUID(session, schemeuuid)["catch"](function (err) {});

              case 12:
                scheme = _context47.sent;

                if (scheme) {
                  _context47.next = 15;
                  break;
                }

                return _context47.abrupt("return", Promise.reject('could not find scheme ' + schemeuuid));

              case 15:
                return _context47.abrupt("return", scheme.getTransactionCreditsAsync(units));

              case 16:
              case "end":
                return _context47.stop();
            }
          }
        }, _callee47, this);
      }));

      function getCreditsFromUnits(_x116, _x117, _x118) {
        return _getCreditsFromUnits.apply(this, arguments);
      }

      return getCreditsFromUnits;
    }() //
    // Wallet functions
    //

  }, {
    key: "getWalletList",
    value: function () {
      var _getWalletList = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee48(sessionuuid) {
        var global, _apicontrollers, session, wallet_list, arr, i, walletuuid, wallet_info;

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
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context48.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context48.sent;

                if (session) {
                  _context48.next = 9;
                  break;
                }

                return _context48.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                _context48.next = 11;
                return _apicontrollers.getWalletList(session, true);

              case 11:
                wallet_list = _context48.sent;
                arr = [];
                i = 0;

              case 14:
                if (!(i < wallet_list.length)) {
                  _context48.next = 23;
                  break;
                }

                walletuuid = wallet_list[i].getWalletUUID();
                _context48.next = 18;
                return this.getWalletInfo(sessionuuid, walletuuid);

              case 18:
                wallet_info = _context48.sent;
                arr.push(wallet_info);

              case 20:
                i++;
                _context48.next = 14;
                break;

              case 23:
                return _context48.abrupt("return", arr);

              case 24:
              case "end":
                return _context48.stop();
            }
          }
        }, _callee48, this);
      }));

      function getWalletList(_x119) {
        return _getWalletList.apply(this, arguments);
      }

      return getWalletList;
    }()
  }, {
    key: "isWalletLocked",
    value: function () {
      var _isWalletLocked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee49(sessionuuid, walletuuid) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee49$(_context49) {
          while (1) {
            switch (_context49.prev = _context49.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context49.abrupt("return", mvcclientwalletmodule.isWalletLocked(sessionuuid, walletuuid));

              case 3:
              case "end":
                return _context49.stop();
            }
          }
        }, _callee49, this);
      }));

      function isWalletLocked(_x120, _x121) {
        return _isWalletLocked.apply(this, arguments);
      }

      return isWalletLocked;
    }() // TODO: should use mvclientwalletmodule.unlockWallet for version >= 0.30.11

  }, {
    key: "unlockWallet",
    value: function () {
      var _unlockWallet = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee50(sessionuuid, walletuuid, passphrase) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee50$(_context50) {
          while (1) {
            switch (_context50.prev = _context50.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context50.abrupt("return", mvcclientwalletmodule.unlockWallet(sessionuuid, walletuuid, passphrase));

              case 3:
              case "end":
                return _context50.stop();
            }
          }
        }, _callee50, this);
      }));

      function unlockWallet(_x122, _x123, _x124) {
        return _unlockWallet.apply(this, arguments);
      }

      return unlockWallet;
    }()
  }, {
    key: "setWalletLabel",
    value: function () {
      var _setWalletLabel = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee51(sessionuuid, walletuuid, label) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee51$(_context51) {
          while (1) {
            switch (_context51.prev = _context51.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context51.abrupt("return", mvcclientwalletmodule.setWalletLabel(sessionuuid, walletuuid, label));

              case 3:
              case "end":
                return _context51.stop();
            }
          }
        }, _callee51, this);
      }));

      function setWalletLabel(_x125, _x126, _x127) {
        return _setWalletLabel.apply(this, arguments);
      }

      return setWalletLabel;
    }()
  }, {
    key: "getWalletInfo",
    value: function () {
      var _getWalletInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee52(sessionuuid, walletuuid) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee52$(_context52) {
          while (1) {
            switch (_context52.prev = _context52.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context52.abrupt("return", mvcclientwalletmodule.getWalletInfo(sessionuuid, walletuuid));

              case 3:
              case "end":
                return _context52.stop();
            }
          }
        }, _callee52, this);
      }));

      function getWalletInfo(_x128, _x129) {
        return _getWalletInfo.apply(this, arguments);
      }

      return getWalletInfo;
    }() // TODO: use mvcclientwalletmodule.getWalletUserInfo(sessionuuid, walletuuid) for version >= 0.30.17

  }, {
    key: "getWalletUserInfo",
    value: function () {
      var _getWalletUserInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee53(sessionuuid, walletuuid) {
        var global, _apicontrollers, session, wallet, walletsession;

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
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context53.next = 8;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 8:
                session = _context53.sent;

                if (session) {
                  _context53.next = 11;
                  break;
                }

                return _context53.abrupt("return", Promise.reject('could not create session ' + sessionuuid));

              case 11:
                _context53.next = 13;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 13:
                wallet = _context53.sent;

                if (wallet) {
                  _context53.next = 16;
                  break;
                }

                return _context53.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 16:
                walletsession = wallet._getSession();

                if (walletsession) {
                  _context53.next = 19;
                  break;
                }

                return _context53.abrupt("return", Promise.reject('could not find session for wallet ' + walletuuid));

              case 19:
                return _context53.abrupt("return", _apicontrollers.getUserInfo(walletsession));

              case 20:
              case "end":
                return _context53.stop();
            }
          }
        }, _callee53, this);
      }));

      function getWalletUserInfo(_x130, _x131) {
        return _getWalletUserInfo.apply(this, arguments);
      }

      return getWalletUserInfo;
    }()
  }, {
    key: "makeWallet",
    value: function () {
      var _makeWallet = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee54(sessionuuid, authname, schemeuuid, password) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee54$(_context54) {
          while (1) {
            switch (_context54.prev = _context54.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context54.abrupt("return", mvcclientwalletmodule.makeWallet(sessionuuid, authname, schemeuuid, password));

              case 3:
              case "end":
                return _context54.stop();
            }
          }
        }, _callee54, this);
      }));

      function makeWallet(_x132, _x133, _x134, _x135) {
        return _makeWallet.apply(this, arguments);
      }

      return makeWallet;
    }()
  }, {
    key: "makeWalletFromSession",
    value: function () {
      var _makeWalletFromSession = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee55(sessionuuid, schemeuuid) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee55$(_context55) {
          while (1) {
            switch (_context55.prev = _context55.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context55.abrupt("return", mvcclientwalletmodule.makeWalletFromSession(sessionuuid, schemeuuid));

              case 3:
              case "end":
                return _context55.stop();
            }
          }
        }, _callee55, this);
      }));

      function makeWalletFromSession(_x136, _x137) {
        return _makeWalletFromSession.apply(this, arguments);
      }

      return makeWalletFromSession;
    }()
  }, {
    key: "attachSessionToWallet",
    value: function () {
      var _attachSessionToWallet = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee56(sessionuuid, walletuuid) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee56$(_context56) {
          while (1) {
            switch (_context56.prev = _context56.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context56.abrupt("return", mvcclientwalletmodule.attachSessionToWallet(sessionuuid, walletuuid));

              case 3:
              case "end":
                return _context56.stop();
            }
          }
        }, _callee56, this);
      }));

      function attachSessionToWallet(_x138, _x139) {
        return _attachSessionToWallet.apply(this, arguments);
      }

      return attachSessionToWallet;
    }()
  }, {
    key: "lockWallet",
    value: function () {
      var _lockWallet = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee57(sessionuuid, walletuuid) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee57$(_context57) {
          while (1) {
            switch (_context57.prev = _context57.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context57.abrupt("return", mvcclientwalletmodule.lockWallet(sessionuuid, walletuuid));

              case 3:
              case "end":
                return _context57.stop();
            }
          }
        }, _callee57, this);
      }));

      function lockWallet(_x140, _x141) {
        return _lockWallet.apply(this, arguments);
      }

      return lockWallet;
    }() //
    // Card functions
    //

  }, {
    key: "canCardSign",
    value: function () {
      var _canCardSign = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee58(sessionuuid, walletuuid, carduuid) {
        var global, mvcmodule, _privkey;

        return _regeneratorRuntime().wrap(function _callee58$(_context58) {
          while (1) {
            switch (_context58.prev = _context58.next) {
              case 0:
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                _context58.next = 4;
                return mvcmodule.getCardPrivateKey(sessionuuid, walletuuid, carduuid);

              case 4:
                _privkey = _context58.sent;
                return _context58.abrupt("return", _privkey ? true : false);

              case 6:
              case "end":
                return _context58.stop();
            }
          }
        }, _callee58, this);
      }));

      function canCardSign(_x142, _x143, _x144) {
        return _canCardSign.apply(this, arguments);
      }

      return canCardSign;
    }()
  }, {
    key: "getCardList",
    value: function () {
      var _getCardList = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee59(sessionuuid, walletuuid) {
        var global, _apicontrollers, mvcclientwalletmodule, session, wallet, cards, array, i, cardinfo;

        return _regeneratorRuntime().wrap(function _callee59$(_context59) {
          while (1) {
            switch (_context59.prev = _context59.next) {
              case 0:
                if (sessionuuid) {
                  _context59.next = 2;
                  break;
                }

                return _context59.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context59.next = 4;
                  break;
                }

                return _context59.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                _context59.next = 9;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 9:
                session = _context59.sent;

                if (session) {
                  _context59.next = 12;
                  break;
                }

                return _context59.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 12:
                _context59.next = 14;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 14:
                wallet = _context59.sent;

                if (wallet) {
                  _context59.next = 17;
                  break;
                }

                return _context59.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 17:
                _context59.next = 19;
                return wallet.getCardList(true);

              case 19:
                cards = _context59.sent;
                array = [];
                i = 0;

              case 22:
                if (!(i < cards.length)) {
                  _context59.next = 30;
                  break;
                }

                _context59.next = 25;
                return mvcclientwalletmodule.getCardInfo(sessionuuid, walletuuid, cards[i].uuid);

              case 25:
                cardinfo = _context59.sent;
                array.push(cardinfo);

              case 27:
                i++;
                _context59.next = 22;
                break;

              case 30:
                return _context59.abrupt("return", array);

              case 31:
              case "end":
                return _context59.stop();
            }
          }
        }, _callee59, this);
      }));

      function getCardList(_x145, _x146) {
        return _getCardList.apply(this, arguments);
      }

      return getCardList;
    }()
  }, {
    key: "getCardListOnWeb3Url",
    value: function () {
      var _getCardListOnWeb3Url = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee60(sessionuuid, walletuuid, web3url) {
        var global, mvcmodule;
        return _regeneratorRuntime().wrap(function _callee60$(_context60) {
          while (1) {
            switch (_context60.prev = _context60.next) {
              case 0:
                console.log('OBSOLETE: Module.getCardListOnWeb3Url should no longer be used!');
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                return _context60.abrupt("return", mvcmodule.getCardListOnWeb3Url(sessionuuid, walletuuid, web3url));

              case 4:
              case "end":
                return _context60.stop();
            }
          }
        }, _callee60, this);
      }));

      function getCardListOnWeb3Url(_x147, _x148, _x149) {
        return _getCardListOnWeb3Url.apply(this, arguments);
      }

      return getCardListOnWeb3Url;
    }()
  }, {
    key: "createCard",
    value: function () {
      var _createCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee61(sessionuuid, walletuuid, web3providerurl, privatekey) {
        var global, _apicontrollers, session, wallet, card, bSave, mvcmodule, cardinfo;

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
                if (walletuuid) {
                  _context61.next = 4;
                  break;
                }

                return _context61.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (web3providerurl) {
                  _context61.next = 6;
                  break;
                }

                return _context61.abrupt("return", Promise.reject('web3 url is undefined'));

              case 6:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context61.next = 10;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 10:
                session = _context61.sent;

                if (session) {
                  _context61.next = 13;
                  break;
                }

                return _context61.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 13:
                _context61.next = 15;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 15:
                wallet = _context61.sent;

                if (wallet) {
                  _context61.next = 18;
                  break;
                }

                return _context61.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 18:
                _context61.next = 20;
                return _apicontrollers.createWalletCardFromPrivateKey(session, wallet, web3providerurl, privatekey);

              case 20:
                card = _context61.sent;

                if (card) {
                  _context61.next = 23;
                  break;
                }

                return _context61.abrupt("return", Promise.reject('could not create card'));

              case 23:
                if (!card.isLocked()) {
                  _context61.next = 26;
                  break;
                }

                _context61.next = 26;
                return card.unlock();

              case 26:
                _context61.next = 28;
                return card.save();

              case 28:
                bSave = _context61.sent;

                if (bSave) {
                  _context61.next = 31;
                  break;
                }

                return _context61.abrupt("return", Promise.reject('could not save card'));

              case 31:
                mvcmodule = global.getModuleObject('mvc');
                cardinfo = {};

                mvcmodule._fillCardInfo(cardinfo, card);

                return _context61.abrupt("return", cardinfo);

              case 35:
              case "end":
                return _context61.stop();
            }
          }
        }, _callee61, this);
      }));

      function createCard(_x150, _x151, _x152, _x153) {
        return _createCard.apply(this, arguments);
      }

      return createCard;
    }()
  }, {
    key: "getWalletCard",
    value: function () {
      var _getWalletCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee62(sessionuuid, walletuuid, carduuid) {
        var global, _apicontrollers, session, wallet, card, bSave, mvcclientwalletmodule, cardinfo;

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
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context62.next = 8;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 8:
                session = _context62.sent;

                if (session) {
                  _context62.next = 11;
                  break;
                }

                return _context62.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 11:
                _context62.next = 13;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 13:
                wallet = _context62.sent;

                if (wallet) {
                  _context62.next = 16;
                  break;
                }

                return _context62.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 16:
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
                if (!card.isLocked()) {
                  _context62.next = 24;
                  break;
                }

                _context62.next = 24;
                return card.unlock();

              case 24:
                _context62.next = 26;
                return card.save();

              case 26:
                bSave = _context62.sent;

                if (bSave) {
                  _context62.next = 29;
                  break;
                }

                return _context62.abrupt("return", Promise.reject('could not save card'));

              case 29:
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                cardinfo = {};

                mvcclientwalletmodule._fillCardInfo(cardinfo, card);

                return _context62.abrupt("return", cardinfo);

              case 33:
              case "end":
                return _context62.stop();
            }
          }
        }, _callee62, this);
      }));

      function getWalletCard(_x154, _x155, _x156) {
        return _getWalletCard.apply(this, arguments);
      }

      return getWalletCard;
    }()
  }, {
    key: "getCardSchemeInfo",
    value: function () {
      var _getCardSchemeInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee63(sessionuuid, walletuuid, carduuid) {
        var global, mvcmodule;
        return _regeneratorRuntime().wrap(function _callee63$(_context63) {
          while (1) {
            switch (_context63.prev = _context63.next) {
              case 0:
                global = this.global;
                mvcmodule = global.getModuleObject('mvc');
                return _context63.abrupt("return", mvcmodule.getCardSchemeInfo(sessionuuid, walletuuid, carduuid));

              case 3:
              case "end":
                return _context63.stop();
            }
          }
        }, _callee63, this);
      }));

      function getCardSchemeInfo(_x157, _x158, _x159) {
        return _getCardSchemeInfo.apply(this, arguments);
      }

      return getCardSchemeInfo;
    }()
  }, {
    key: "getCardInfoFromAddressOnScheme",
    value: function () {
      var _getCardInfoFromAddressOnScheme = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee64(sessionuuid, walletuuid, schemeuuid, address) {
        var global, mvcclientwalletmodule;
        return _regeneratorRuntime().wrap(function _callee64$(_context64) {
          while (1) {
            switch (_context64.prev = _context64.next) {
              case 0:
                global = this.global;
                mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
                return _context64.abrupt("return", mvcclientwalletmodule.getCardInfoFromAddressOnScheme(sessionuuid, walletuuid, schemeuuid, address));

              case 3:
              case "end":
                return _context64.stop();
            }
          }
        }, _callee64, this);
      }));

      function getCardInfoFromAddressOnScheme(_x160, _x161, _x162, _x163) {
        return _getCardInfoFromAddressOnScheme.apply(this, arguments);
      }

      return getCardInfoFromAddressOnScheme;
    }() // currency (ethnode) operations

  }, {
    key: "getCreditBalance",
    value: function () {
      var _getCreditBalance = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee65(sessionuuid, walletuuid, carduuid) {
        var global, mvccurrencies, currency;
        return _regeneratorRuntime().wrap(function _callee65$(_context65) {
          while (1) {
            switch (_context65.prev = _context65.next) {
              case 0:
                console.log('OBSOLETE: Module.getCreditBalance should no longer be used!');
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                _context65.next = 5;
                return this.findCardCurrency(sessionuuid, walletuuid, carduuid);

              case 5:
                currency = _context65.sent;
                return _context65.abrupt("return", mvccurrencies.getCreditBalance(sessionuuid, walletuuid, carduuid, currency.uuid));

              case 7:
              case "end":
                return _context65.stop();
            }
          }
        }, _callee65, this);
      }));

      function getCreditBalance(_x164, _x165, _x166) {
        return _getCreditBalance.apply(this, arguments);
      }

      return getCreditBalance;
    }()
  }, {
    key: "getCurrencyCardCreditBalance",
    value: function () {
      var _getCurrencyCardCreditBalance = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee66(sessionuuid, walletuuid, carduuid) {
        var global, mvccurrencies, currency;
        return _regeneratorRuntime().wrap(function _callee66$(_context66) {
          while (1) {
            switch (_context66.prev = _context66.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                _context66.next = 4;
                return this.findCardCurrency(sessionuuid, walletuuid, carduuid);

              case 4:
                currency = _context66.sent;
                return _context66.abrupt("return", mvccurrencies.getCurrencyCardCreditBalance(sessionuuid, walletuuid, carduuid, currency.uuid));

              case 6:
              case "end":
                return _context66.stop();
            }
          }
        }, _callee66, this);
      }));

      function getCurrencyCardCreditBalance(_x167, _x168, _x169) {
        return _getCurrencyCardCreditBalance.apply(this, arguments);
      }

      return getCurrencyCardCreditBalance;
    }()
  }, {
    key: "topUpCard",
    value: function () {
      var _topUpCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee67(sessionuuid, walletuuid, carduuid) {
        var global, mvccurrencies, currency;
        return _regeneratorRuntime().wrap(function _callee67$(_context67) {
          while (1) {
            switch (_context67.prev = _context67.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                _context67.next = 4;
                return this.findCardCurrency(sessionuuid, walletuuid, carduuid);

              case 4:
                currency = _context67.sent;
                return _context67.abrupt("return", mvccurrencies.topUpCard(sessionuuid, walletuuid, carduuid, currency.uuid));

              case 6:
              case "end":
                return _context67.stop();
            }
          }
        }, _callee67, this);
      }));

      function topUpCard(_x170, _x171, _x172) {
        return _topUpCard.apply(this, arguments);
      }

      return topUpCard;
    }()
  }, {
    key: "transferTransactionUnits",
    value: function () {
      var _transferTransactionUnits = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee68(sessionuuid, walletuuid, cardfromuuid, cardtouuid, units) {
        var feelevel,
            global,
            mvccurrencies,
            currency,
            _args68 = arguments;
        return _regeneratorRuntime().wrap(function _callee68$(_context68) {
          while (1) {
            switch (_context68.prev = _context68.next) {
              case 0:
                feelevel = _args68.length > 5 && _args68[5] !== undefined ? _args68[5] : null;
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                _context68.next = 5;
                return this.findCardCurrency(sessionuuid, walletuuid, cardfromuuid);

              case 5:
                currency = _context68.sent;
                return _context68.abrupt("return", mvccurrencies.transferTransactionUnits(sessionuuid, walletuuid, cardfromuuid, currency.uuid, cardtouuid, units, feelevel));

              case 7:
              case "end":
                return _context68.stop();
            }
          }
        }, _callee68, this);
      }));

      function transferTransactionUnits(_x173, _x174, _x175, _x176, _x177) {
        return _transferTransactionUnits.apply(this, arguments);
      }

      return transferTransactionUnits;
    }()
  }, {
    key: "sendTransactionUnits",
    value: function () {
      var _sendTransactionUnits = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee69(sessionuuid, walletuuid, cardfromuuid, toaddress, units) {
        var feelevel,
            global,
            mvccurrencies,
            currency,
            _args69 = arguments;
        return _regeneratorRuntime().wrap(function _callee69$(_context69) {
          while (1) {
            switch (_context69.prev = _context69.next) {
              case 0:
                feelevel = _args69.length > 5 && _args69[5] !== undefined ? _args69[5] : null;
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                _context69.next = 5;
                return this.findCardCurrency(sessionuuid, walletuuid, cardfromuuid);

              case 5:
                currency = _context69.sent;
                return _context69.abrupt("return", mvccurrencies.sendTransactionUnits(sessionuuid, walletuuid, cardfromuuid, currency.uuid, toaddress, units, feelevel));

              case 7:
              case "end":
                return _context69.stop();
            }
          }
        }, _callee69, this);
      }));

      function sendTransactionUnits(_x178, _x179, _x180, _x181, _x182) {
        return _sendTransactionUnits.apply(this, arguments);
      }

      return sendTransactionUnits;
    }()
  }, {
    key: "getCurrencyTransactionUnitsThreshold",
    value: function () {
      var _getCurrencyTransactionUnitsThreshold = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee70(sessionuuid, walletuuid, currencyuuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee70$(_context70) {
          while (1) {
            switch (_context70.prev = _context70.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context70.abrupt("return", mvccurrencies.getCurrencyTransactionUnitsThreshold(sessionuuid, walletuuid, currencyuuid));

              case 3:
              case "end":
                return _context70.stop();
            }
          }
        }, _callee70, this);
      }));

      function getCurrencyTransactionUnitsThreshold(_x183, _x184, _x185) {
        return _getCurrencyTransactionUnitsThreshold.apply(this, arguments);
      }

      return getCurrencyTransactionUnitsThreshold;
    }()
  }, {
    key: "getRecommendedFeeLevel",
    value: function () {
      var _getRecommendedFeeLevel = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee71(sessionuuid, walletuuid, carduuid, tx_fee) {
        var global, mvccurrencies, currency;
        return _regeneratorRuntime().wrap(function _callee71$(_context71) {
          while (1) {
            switch (_context71.prev = _context71.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                _context71.next = 4;
                return this.findCardCurrency(sessionuuid, walletuuid, carduuid);

              case 4:
                currency = _context71.sent;
                return _context71.abrupt("return", mvccurrencies.getRecommendedFeeLevel(sessionuuid, walletuuid, carduuid, currency.uuid, tx_fee));

              case 6:
              case "end":
                return _context71.stop();
            }
          }
        }, _callee71, this);
      }));

      function getRecommendedFeeLevel(_x186, _x187, _x188, _x189) {
        return _getRecommendedFeeLevel.apply(this, arguments);
      }

      return getRecommendedFeeLevel;
    }()
  }, {
    key: "computeTransactionFee",
    value: function () {
      var _computeTransactionFee = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee72(sessionuuid, walletuuid, carduuid, tx_fee) {
        var feelevel,
            global,
            mvccurrencies,
            currency,
            _args72 = arguments;
        return _regeneratorRuntime().wrap(function _callee72$(_context72) {
          while (1) {
            switch (_context72.prev = _context72.next) {
              case 0:
                feelevel = _args72.length > 4 && _args72[4] !== undefined ? _args72[4] : null;
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                _context72.next = 5;
                return this.findCardCurrency(sessionuuid, walletuuid, carduuid);

              case 5:
                currency = _context72.sent;
                return _context72.abrupt("return", mvccurrencies.computeTransactionFee(sessionuuid, walletuuid, carduuid, currency.uuid, tx_fee, feelevel));

              case 7:
              case "end":
                return _context72.stop();
            }
          }
        }, _callee72, this);
      }));

      function computeTransactionFee(_x190, _x191, _x192, _x193) {
        return _computeTransactionFee.apply(this, arguments);
      }

      return computeTransactionFee;
    }()
  }, {
    key: "canCompleteTransaction",
    value: function () {
      var _canCompleteTransaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee73(sessionuuid, walletuuid, carduuid, tx_fee) {
        var feelevel,
            global,
            mvccurrencies,
            currency,
            _args73 = arguments;
        return _regeneratorRuntime().wrap(function _callee73$(_context73) {
          while (1) {
            switch (_context73.prev = _context73.next) {
              case 0:
                feelevel = _args73.length > 4 && _args73[4] !== undefined ? _args73[4] : null;
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                _context73.next = 5;
                return this.findCardCurrency(sessionuuid, walletuuid, carduuid);

              case 5:
                currency = _context73.sent;
                return _context73.abrupt("return", mvccurrencies.canCompleteTransaction(sessionuuid, walletuuid, carduuid, currency.uuid, tx_fee, feelevel));

              case 7:
              case "end":
                return _context73.stop();
            }
          }
        }, _callee73, this);
      }));

      function canCompleteTransaction(_x194, _x195, _x196, _x197) {
        return _canCompleteTransaction.apply(this, arguments);
      }

      return canCompleteTransaction;
    }() //
    // Currency functions
    //

  }, {
    key: "_createDecimalAmount",
    value: function () {
      var _createDecimalAmount2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee74(session, amount, decimals) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee74$(_context74) {
          while (1) {
            switch (_context74.prev = _context74.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context74.abrupt("return", mvccurrencies._createDecimalAmount(session, amount, decimals));

              case 3:
              case "end":
                return _context74.stop();
            }
          }
        }, _callee74, this);
      }));

      function _createDecimalAmount(_x198, _x199, _x200) {
        return _createDecimalAmount2.apply(this, arguments);
      }

      return _createDecimalAmount;
    }()
  }, {
    key: "transferCurrencyAmount",
    value: function () {
      var _transferCurrencyAmount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee75(sessionuuid, walletuuid, cardfromuuid, cardtouuid, currencyuuid, currencyamount) {
        var feelevel,
            global,
            mvccurrencies,
            _args75 = arguments;
        return _regeneratorRuntime().wrap(function _callee75$(_context75) {
          while (1) {
            switch (_context75.prev = _context75.next) {
              case 0:
                feelevel = _args75.length > 6 && _args75[6] !== undefined ? _args75[6] : null;
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context75.abrupt("return", mvccurrencies.transferCurrencyAmount(sessionuuid, walletuuid, cardfromuuid, cardtouuid, currencyuuid, currencyamount, feelevel));

              case 4:
              case "end":
                return _context75.stop();
            }
          }
        }, _callee75, this);
      }));

      function transferCurrencyAmount(_x201, _x202, _x203, _x204, _x205, _x206) {
        return _transferCurrencyAmount.apply(this, arguments);
      }

      return transferCurrencyAmount;
    }()
  }, {
    key: "_getPretradeScheme",
    value: function () {
      var _getPretradeScheme2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee76(session, currency) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee76$(_context76) {
          while (1) {
            switch (_context76.prev = _context76.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context76.abrupt("return", mvccurrencies._getPretradeScheme(session, currency));

              case 3:
              case "end":
                return _context76.stop();
            }
          }
        }, _callee76, this);
      }));

      function _getPretradeScheme(_x207, _x208) {
        return _getPretradeScheme2.apply(this, arguments);
      }

      return _getPretradeScheme;
    }()
  }, {
    key: "loadConfig",
    value: function () {
      var _loadConfig = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee77(configname) {
        var global, _apicontrollers, clientmodule;

        return _regeneratorRuntime().wrap(function _callee77$(_context77) {
          while (1) {
            switch (_context77.prev = _context77.next) {
              case 0:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                clientmodule = global.getModuleObject('webclient');
                return _context77.abrupt("return", clientmodule.loadConfig(configname));

              case 4:
              case "end":
                return _context77.stop();
            }
          }
        }, _callee77, this);
      }));

      function loadConfig(_x209) {
        return _loadConfig.apply(this, arguments);
      }

      return loadConfig;
    }() // mvc-currencies

  }, {
    key: "getCurrencies",
    value: function () {
      var _getCurrencies = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee78(sessionuuid, walletuuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee78$(_context78) {
          while (1) {
            switch (_context78.prev = _context78.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context78.abrupt("return", mvccurrencies.getCurrencies(sessionuuid, walletuuid));

              case 3:
              case "end":
                return _context78.stop();
            }
          }
        }, _callee78, this);
      }));

      function getCurrencies(_x210, _x211) {
        return _getCurrencies.apply(this, arguments);
      }

      return getCurrencies;
    }()
  }, {
    key: "getCurrencyFromUUID",
    value: function () {
      var _getCurrencyFromUUID = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee79(sessionuuid, currencyuuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee79$(_context79) {
          while (1) {
            switch (_context79.prev = _context79.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context79.abrupt("return", mvccurrencies.getCurrencyFromUUID(sessionuuid, currencyuuid));

              case 3:
              case "end":
                return _context79.stop();
            }
          }
        }, _callee79, this);
      }));

      function getCurrencyFromUUID(_x212, _x213) {
        return _getCurrencyFromUUID.apply(this, arguments);
      }

      return getCurrencyFromUUID;
    }()
  }, {
    key: "getCurrencyInfo",
    value: function () {
      var _getCurrencyInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee80(sessionuuid, walletuuid, currencyuuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee80$(_context80) {
          while (1) {
            switch (_context80.prev = _context80.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context80.abrupt("return", mvccurrencies.getCurrencyInfo(sessionuuid, walletuuid, currencyuuid));

              case 3:
              case "end":
                return _context80.stop();
            }
          }
        }, _callee80, this);
      }));

      function getCurrencyInfo(_x214, _x215, _x216) {
        return _getCurrencyInfo.apply(this, arguments);
      }

      return getCurrencyInfo;
    }()
  }, {
    key: "getCurrencyTotalSupply",
    value: function () {
      var _getCurrencyTotalSupply = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee81(sessionuuid, walletuuid, currencyuuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee81$(_context81) {
          while (1) {
            switch (_context81.prev = _context81.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context81.abrupt("return", mvccurrencies.getCurrencyTotalSupply(sessionuuid, walletuuid, currencyuuid));

              case 3:
              case "end":
                return _context81.stop();
            }
          }
        }, _callee81, this);
      }));

      function getCurrencyTotalSupply(_x217, _x218, _x219) {
        return _getCurrencyTotalSupply.apply(this, arguments);
      }

      return getCurrencyTotalSupply;
    }()
  }, {
    key: "importCurrencyFromTokenUUID",
    value: function () {
      var _importCurrencyFromTokenUUID = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee82(sessionuuid, walletuuid, carduuid, tokenuuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee82$(_context82) {
          while (1) {
            switch (_context82.prev = _context82.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context82.abrupt("return", mvccurrencies.importCurrencyFromTokenUUID(sessionuuid, walletuuid, carduuid, tokenuuid));

              case 3:
              case "end":
                return _context82.stop();
            }
          }
        }, _callee82, this);
      }));

      function importCurrencyFromTokenUUID(_x220, _x221, _x222, _x223) {
        return _importCurrencyFromTokenUUID.apply(this, arguments);
      }

      return importCurrencyFromTokenUUID;
    }()
  }, {
    key: "importCurrencyFromTokenAddress",
    value: function () {
      var _importCurrencyFromTokenAddress = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee83(sessionuuid, walletuuid, carduuid, tokenaddress, options) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee83$(_context83) {
          while (1) {
            switch (_context83.prev = _context83.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context83.abrupt("return", mvccurrencies.importCurrencyFromTokenAddress(sessionuuid, walletuuid, carduuid, tokenaddress, options));

              case 3:
              case "end":
                return _context83.stop();
            }
          }
        }, _callee83, this);
      }));

      function importCurrencyFromTokenAddress(_x224, _x225, _x226, _x227, _x228) {
        return _importCurrencyFromTokenAddress.apply(this, arguments);
      }

      return importCurrencyFromTokenAddress;
    }()
  }, {
    key: "getAllCurrenciesWithAddress",
    value: function () {
      var _getAllCurrenciesWithAddress = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee84(sessionuuid, walletuuid, address) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee84$(_context84) {
          while (1) {
            switch (_context84.prev = _context84.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context84.abrupt("return", mvccurrencies.getAllCurrenciesWithAddress(sessionuuid, walletuuid, address));

              case 3:
              case "end":
                return _context84.stop();
            }
          }
        }, _callee84, this);
      }));

      function getAllCurrenciesWithAddress(_x229, _x230, _x231) {
        return _getAllCurrenciesWithAddress.apply(this, arguments);
      }

      return getAllCurrenciesWithAddress;
    }()
  }, {
    key: "synchronizeCurrency",
    value: function () {
      var _synchronizeCurrency = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee85(sessionuuid, walletuuid, currency) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee85$(_context85) {
          while (1) {
            switch (_context85.prev = _context85.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context85.abrupt("return", mvccurrencies.synchronizeCurrency(sessionuuid, walletuuid, currency));

              case 3:
              case "end":
                return _context85.stop();
            }
          }
        }, _callee85, this);
      }));

      function synchronizeCurrency(_x232, _x233, _x234) {
        return _synchronizeCurrency.apply(this, arguments);
      }

      return synchronizeCurrency;
    }()
  }, {
    key: "setCurrencyDescription",
    value: function () {
      var _setCurrencyDescription = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee86(sessionuuid, walletuuid, currencyuuid, description) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee86$(_context86) {
          while (1) {
            switch (_context86.prev = _context86.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context86.abrupt("return", mvccurrencies.setCurrencyDescription(sessionuuid, walletuuid, currencyuuid, description));

              case 3:
              case "end":
                return _context86.stop();
            }
          }
        }, _callee86, this);
      }));

      function setCurrencyDescription(_x235, _x236, _x237, _x238) {
        return _setCurrencyDescription.apply(this, arguments);
      }

      return setCurrencyDescription;
    }()
  }, {
    key: "getCurrenciesFromAddress",
    value: function () {
      var _getCurrenciesFromAddress = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee87(sessionuuid, walletuuid, schemeuuid, address) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee87$(_context87) {
          while (1) {
            switch (_context87.prev = _context87.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context87.abrupt("return", mvccurrencies.getCurrenciesFromAddress(sessionuuid, walletuuid, schemeuuid, address));

              case 3:
              case "end":
                return _context87.stop();
            }
          }
        }, _callee87, this);
      }));

      function getCurrenciesFromAddress(_x239, _x240, _x241, _x242) {
        return _getCurrenciesFromAddress.apply(this, arguments);
      }

      return getCurrenciesFromAddress;
    }()
  }, {
    key: "getCurrencyScheme",
    value: function () {
      var _getCurrencyScheme = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee88(sessionuuid, walletuuid, currencyuuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee88$(_context88) {
          while (1) {
            switch (_context88.prev = _context88.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context88.abrupt("return", mvccurrencies.getCurrencyScheme(sessionuuid, walletuuid, currencyuuid));

              case 3:
              case "end":
                return _context88.stop();
            }
          }
        }, _callee88, this);
      }));

      function getCurrencyScheme(_x243, _x244, _x245) {
        return _getCurrencyScheme.apply(this, arguments);
      }

      return getCurrencyScheme;
    }()
  }, {
    key: "findCardCurrency",
    value: function () {
      var _findCardCurrency = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee89(sessionuuid, walletuuid, carduuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee89$(_context89) {
          while (1) {
            switch (_context89.prev = _context89.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context89.abrupt("return", mvccurrencies.findCardCurrency(sessionuuid, walletuuid, carduuid));

              case 3:
              case "end":
                return _context89.stop();
            }
          }
        }, _callee89, this);
      }));

      function findCardCurrency(_x246, _x247, _x248) {
        return _findCardCurrency.apply(this, arguments);
      }

      return findCardCurrency;
    }()
  }, {
    key: "getCurrencyCard",
    value: function () {
      var _getCurrencyCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee90(sessionuuid, walletuuid, currencyuuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee90$(_context90) {
          while (1) {
            switch (_context90.prev = _context90.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context90.abrupt("return", mvccurrencies.getCurrencyCard(sessionuuid, walletuuid, currencyuuid));

              case 3:
              case "end":
                return _context90.stop();
            }
          }
        }, _callee90, this);
      }));

      function getCurrencyCard(_x249, _x250, _x251) {
        return _getCurrencyCard.apply(this, arguments);
      }

      return getCurrencyCard;
    }()
  }, {
    key: "setCurrencyCard",
    value: function () {
      var _setCurrencyCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee91(sessionuuid, walletuuid, currencyuuid, carduuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee91$(_context91) {
          while (1) {
            switch (_context91.prev = _context91.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context91.abrupt("return", mvccurrencies.setCurrencyCard(sessionuuid, walletuuid, currencyuuid, carduuid));

              case 3:
              case "end":
                return _context91.stop();
            }
          }
        }, _callee91, this);
      }));

      function setCurrencyCard(_x252, _x253, _x254, _x255) {
        return _setCurrencyCard.apply(this, arguments);
      }

      return setCurrencyCard;
    }()
  }, {
    key: "createCurrencyCard",
    value: function () {
      var _createCurrencyCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee92(sessionuuid, walletuuid, currencyuuid, privatekey) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee92$(_context92) {
          while (1) {
            switch (_context92.prev = _context92.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context92.abrupt("return", mvccurrencies.createCurrencyCard(sessionuuid, walletuuid, currencyuuid, privatekey));

              case 3:
              case "end":
                return _context92.stop();
            }
          }
        }, _callee92, this);
      }));

      function createCurrencyCard(_x256, _x257, _x258, _x259) {
        return _createCurrencyCard.apply(this, arguments);
      }

      return createCurrencyCard;
    }()
  }, {
    key: "getCurrencyCardWithAddress",
    value: function () {
      var _getCurrencyCardWithAddress = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee93(sessionuuid, walletuuid, currencyuuid, address) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee93$(_context93) {
          while (1) {
            switch (_context93.prev = _context93.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context93.abrupt("return", mvccurrencies.getCurrencyCardWithAddress(sessionuuid, walletuuid, currencyuuid, address));

              case 3:
              case "end":
                return _context93.stop();
            }
          }
        }, _callee93, this);
      }));

      function getCurrencyCardWithAddress(_x260, _x261, _x262, _x263) {
        return _getCurrencyCardWithAddress.apply(this, arguments);
      }

      return getCurrencyCardWithAddress;
    }()
  }, {
    key: "createReadOnlyCurrencyCard",
    value: function () {
      var _createReadOnlyCurrencyCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee94(sessionuuid, walletuuid, currencyuuid, address) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee94$(_context94) {
          while (1) {
            switch (_context94.prev = _context94.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context94.abrupt("return", mvccurrencies.createReadOnlyCurrencyCard(sessionuuid, walletuuid, currencyuuid, address));

              case 3:
              case "end":
                return _context94.stop();
            }
          }
        }, _callee94, this);
      }));

      function createReadOnlyCurrencyCard(_x264, _x265, _x266, _x267) {
        return _createReadOnlyCurrencyCard.apply(this, arguments);
      }

      return createReadOnlyCurrencyCard;
    }()
  }, {
    key: "generateCurrencyCard",
    value: function () {
      var _generateCurrencyCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee95(sessionuuid, walletuuid, currencyuuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee95$(_context95) {
          while (1) {
            switch (_context95.prev = _context95.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context95.abrupt("return", mvccurrencies.generateCurrencyCard(sessionuuid, walletuuid, currencyuuid));

              case 3:
              case "end":
                return _context95.stop();
            }
          }
        }, _callee95, this);
      }));

      function generateCurrencyCard(_x268, _x269, _x270) {
        return _generateCurrencyCard.apply(this, arguments);
      }

      return generateCurrencyCard;
    }()
  }, {
    key: "getCurrencyPosition",
    value: function () {
      var _getCurrencyPosition = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee96(sessionuuid, walletuuid, currencyuuid, carduuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee96$(_context96) {
          while (1) {
            switch (_context96.prev = _context96.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context96.abrupt("return", mvccurrencies.getCurrencyPosition(sessionuuid, walletuuid, currencyuuid, carduuid));

              case 3:
              case "end":
                return _context96.stop();
            }
          }
        }, _callee96, this);
      }));

      function getCurrencyPosition(_x271, _x272, _x273, _x274) {
        return _getCurrencyPosition.apply(this, arguments);
      }

      return getCurrencyPosition;
    }()
  }, {
    key: "getCurrencyCardPosition",
    value: function () {
      var _getCurrencyCardPosition = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee97(sessionuuid, walletuuid, currencyuuid, carduuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee97$(_context97) {
          while (1) {
            switch (_context97.prev = _context97.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context97.abrupt("return", mvccurrencies.getCurrencyCardPosition(sessionuuid, walletuuid, currencyuuid, carduuid));

              case 3:
              case "end":
                return _context97.stop();
            }
          }
        }, _callee97, this);
      }));

      function getCurrencyCardPosition(_x275, _x276, _x277, _x278) {
        return _getCurrencyCardPosition.apply(this, arguments);
      }

      return getCurrencyCardPosition;
    }()
  }, {
    key: "getCurrencyCardCredits",
    value: function () {
      var _getCurrencyCardCredits = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee98(sessionuuid, walletuuid, currencyuuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee98$(_context98) {
          while (1) {
            switch (_context98.prev = _context98.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context98.abrupt("return", mvccurrencies.getCurrencyCardCredits(sessionuuid, walletuuid, currencyuuid));

              case 3:
              case "end":
                return _context98.stop();
            }
          }
        }, _callee98, this);
      }));

      function getCurrencyCardCredits(_x279, _x280, _x281) {
        return _getCurrencyCardCredits.apply(this, arguments);
      }

      return getCurrencyCardCredits;
    }()
  }, {
    key: "getCurrencyTransactionInfo",
    value: function () {
      var _getCurrencyTransactionInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee99(sessionuuid, walletuuid, currencyuuid, txhash) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee99$(_context99) {
          while (1) {
            switch (_context99.prev = _context99.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context99.abrupt("return", mvccurrencies.getCurrencyTransactionInfo(sessionuuid, walletuuid, currencyuuid, txhash));

              case 3:
              case "end":
                return _context99.stop();
            }
          }
        }, _callee99, this);
      }));

      function getCurrencyTransactionInfo(_x282, _x283, _x284, _x285) {
        return _getCurrencyTransactionInfo.apply(this, arguments);
      }

      return getCurrencyTransactionInfo;
    }()
  }, {
    key: "canPayAmount",
    value: function () {
      var _canPayAmount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee100(sessionuuid, walletuuid, carduuid, currencyuuid, amount, tx_fee) {
        var feelevel,
            global,
            mvccurrencies,
            _args100 = arguments;
        return _regeneratorRuntime().wrap(function _callee100$(_context100) {
          while (1) {
            switch (_context100.prev = _context100.next) {
              case 0:
                feelevel = _args100.length > 6 && _args100[6] !== undefined ? _args100[6] : null;
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context100.abrupt("return", mvccurrencies.canPayAmount(sessionuuid, walletuuid, carduuid, currencyuuid, amount, tx_fee, feelevel));

              case 4:
              case "end":
                return _context100.stop();
            }
          }
        }, _callee100, this);
      }));

      function canPayAmount(_x286, _x287, _x288, _x289, _x290, _x291) {
        return _canPayAmount.apply(this, arguments);
      }

      return canPayAmount;
    }()
  }, {
    key: "payAmount",
    value: function () {
      var _payAmount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee101(sessionuuid, walletuuid, carduuid, toaddress, currencyuuid, amount) {
        var feelevel,
            global,
            mvccurrencies,
            _args101 = arguments;
        return _regeneratorRuntime().wrap(function _callee101$(_context101) {
          while (1) {
            switch (_context101.prev = _context101.next) {
              case 0:
                feelevel = _args101.length > 6 && _args101[6] !== undefined ? _args101[6] : null;
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context101.abrupt("return", mvccurrencies.payAmount(sessionuuid, walletuuid, carduuid, toaddress, currencyuuid, amount, feelevel));

              case 4:
              case "end":
                return _context101.stop();
            }
          }
        }, _callee101, this);
      }));

      function payAmount(_x292, _x293, _x294, _x295, _x296, _x297) {
        return _payAmount.apply(this, arguments);
      }

      return payAmount;
    }()
  }, {
    key: "payAndReport",
    value: function () {
      var _payAndReport = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee102(sessionuuid, walletuuid, toaddress, currencyuuid, amount) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee102$(_context102) {
          while (1) {
            switch (_context102.prev = _context102.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context102.abrupt("return", mvccurrencies.payAndReport(sessionuuid, walletuuid, toaddress, currencyuuid, amount));

              case 3:
              case "end":
                return _context102.stop();
            }
          }
        }, _callee102, this);
      }));

      function payAndReport(_x298, _x299, _x300, _x301, _x302) {
        return _payAndReport.apply(this, arguments);
      }

      return payAndReport;
    }()
  }, {
    key: "getTokenCardList",
    value: function () {
      var _getTokenCardList = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee103(sessionuuid, walletuuid, web3providerurl, tokenaddress) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee103$(_context103) {
          while (1) {
            switch (_context103.prev = _context103.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context103.abrupt("return", mvccurrencies.getTokenCardList(sessionuuid, walletuuid, web3providerurl, tokenaddress));

              case 3:
              case "end":
                return _context103.stop();
            }
          }
        }, _callee103, this);
      }));

      function getTokenCardList(_x303, _x304, _x305, _x306) {
        return _getTokenCardList.apply(this, arguments);
      }

      return getTokenCardList;
    }()
  }, {
    key: "getCurrencyCardList",
    value: function () {
      var _getCurrencyCardList = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee104(sessionuuid, walletuuid, currencyuuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee104$(_context104) {
          while (1) {
            switch (_context104.prev = _context104.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context104.abrupt("return", mvccurrencies.getCurrencyCardList(sessionuuid, walletuuid, currencyuuid));

              case 3:
              case "end":
                return _context104.stop();
            }
          }
        }, _callee104, this);
      }));

      function getCurrencyCardList(_x307, _x308, _x309) {
        return _getCurrencyCardList.apply(this, arguments);
      }

      return getCurrencyCardList;
    }()
  }, {
    key: "getCurrencySchemeInfo",
    value: function () {
      var _getCurrencySchemeInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee105(sessionuuid, currencyuuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee105$(_context105) {
          while (1) {
            switch (_context105.prev = _context105.next) {
              case 0:
                console.log('Warning: obsolete, should use getCurencyScheme(sessionuuid, walletuuid, currencyuuid)');
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context105.abrupt("return", mvccurrencies.getCurrencySchemeInfo(sessionuuid, currencyuuid));

              case 4:
              case "end":
                return _context105.stop();
            }
          }
        }, _callee105, this);
      }));

      function getCurrencySchemeInfo(_x310, _x311) {
        return _getCurrencySchemeInfo.apply(this, arguments);
      }

      return getCurrencySchemeInfo;
    }()
  }, {
    key: "getPretradeSchemeInfo",
    value: function () {
      var _getPretradeSchemeInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee106(sessionuuid, currencyuuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee106$(_context106) {
          while (1) {
            switch (_context106.prev = _context106.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context106.abrupt("return", mvccurrencies.getPretradeSchemeInfo(sessionuuid, currencyuuid));

              case 3:
              case "end":
                return _context106.stop();
            }
          }
        }, _callee106, this);
      }));

      function getPretradeSchemeInfo(_x312, _x313) {
        return _getPretradeSchemeInfo.apply(this, arguments);
      }

      return getPretradeSchemeInfo;
    }()
  }, {
    key: "getPretradeWeb3Url",
    value: function () {
      var _getPretradeWeb3Url = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee107(sessionuuid, currencyuuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee107$(_context107) {
          while (1) {
            switch (_context107.prev = _context107.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context107.abrupt("return", mvccurrencies.getPretradeWeb3Url(sessionuuid, currencyuuid));

              case 3:
              case "end":
                return _context107.stop();
            }
          }
        }, _callee107, this);
      }));

      function getPretradeWeb3Url(_x314, _x315) {
        return _getPretradeWeb3Url.apply(this, arguments);
      }

      return getPretradeWeb3Url;
    }()
  }, {
    key: "getPretradeCard",
    value: function () {
      var _getPretradeCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee108(sessionuuid, walletuuid, carduuid, currencyuuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee108$(_context108) {
          while (1) {
            switch (_context108.prev = _context108.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context108.abrupt("return", mvccurrencies.getPretradeCard(sessionuuid, walletuuid, carduuid, currencyuuid));

              case 3:
              case "end":
                return _context108.stop();
            }
          }
        }, _callee108, this);
      }));

      function getPretradeCard(_x316, _x317, _x318, _x319) {
        return _getPretradeCard.apply(this, arguments);
      }

      return getPretradeCard;
    }()
  }, {
    key: "setPretradeCard",
    value: function () {
      var _setPretradeCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee109(sessionuuid, walletuuid, currencyuuid, carduuid) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee109$(_context109) {
          while (1) {
            switch (_context109.prev = _context109.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context109.abrupt("return", mvccurrencies.setPretradeCard(sessionuuid, walletuuid, currencyuuid, carduuid));

              case 3:
              case "end":
                return _context109.stop();
            }
          }
        }, _callee109, this);
      }));

      function setPretradeCard(_x320, _x321, _x322, _x323) {
        return _setPretradeCard.apply(this, arguments);
      }

      return setPretradeCard;
    }() //
    // claims

  }, {
    key: "_getMonitoredCardSession",
    value: function () {
      var _getMonitoredCardSession2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee110(session, wallet, card) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee110$(_context110) {
          while (1) {
            switch (_context110.prev = _context110.next) {
              case 0:
                // used by registerTransaction and Claims
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context110.abrupt("return", mvccurrencies._getMonitoredCardSession(session, wallet, card));

              case 3:
              case "end":
                return _context110.stop();
            }
          }
        }, _callee110, this);
      }));

      function _getMonitoredCardSession(_x324, _x325, _x326) {
        return _getMonitoredCardSession2.apply(this, arguments);
      }

      return _getMonitoredCardSession;
    }()
  }, {
    key: "getClaimPayingToAddress",
    value: function () {
      var _getClaimPayingToAddress = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee111(sessionuuid, walletuuid, claim) {
        var global, _apicontrollers, session, isvalid;

        return _regeneratorRuntime().wrap(function _callee111$(_context111) {
          while (1) {
            switch (_context111.prev = _context111.next) {
              case 0:
                if (!claim.payingto_overload) {
                  _context111.next = 10;
                  break;
                }

                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context111.next = 5;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 5:
                session = _context111.sent;

                if (session) {
                  _context111.next = 8;
                  break;
                }

                return _context111.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 8:
                isvalid = _apicontrollers.isValidAddress(session, claim.payingto_overload);

                if (isvalid) {
                  claim.payingto = claim.payingto_overload;
                }

              case 10:
                return _context111.abrupt("return", claim.payingto ? claim.payingto : claim.owner);

              case 11:
              case "end":
                return _context111.stop();
            }
          }
        }, _callee111, this);
      }));

      function getClaimPayingToAddress(_x327, _x328, _x329) {
        return _getClaimPayingToAddress.apply(this, arguments);
      }

      return getClaimPayingToAddress;
    }()
  }, {
    key: "payClaim",
    value: function () {
      var _payClaim = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee112(sessionuuid, walletuuid, carduuid, claim) {
        var toaddress, currencyuuid, amount, currencyamount, tokenamount_int, txhash;
        return _regeneratorRuntime().wrap(function _callee112$(_context112) {
          while (1) {
            switch (_context112.prev = _context112.next) {
              case 0:
                _context112.next = 2;
                return this.getClaimPayingToAddress(sessionuuid, walletuuid, claim);

              case 2:
                toaddress = _context112.sent;
                currencyuuid = claim.currencyuuid;
                amount = claim.amount;
                _context112.next = 7;
                return this.getCurrencyAmount(sessionuuid, currencyuuid, amount);

              case 7:
                currencyamount = _context112.sent;
                _context112.next = 10;
                return currencyamount.decimalamount.toInteger();

              case 10:
                tokenamount_int = _context112.sent;
                _context112.next = 13;
                return this.payAmount(sessionuuid, walletuuid, carduuid, toaddress, currencyuuid, tokenamount_int);

              case 13:
                txhash = _context112.sent;
                return _context112.abrupt("return", txhash);

              case 15:
              case "end":
                return _context112.stop();
            }
          }
        }, _callee112, this);
      }));

      function payClaim(_x330, _x331, _x332, _x333) {
        return _payClaim.apply(this, arguments);
      }

      return payClaim;
    }() //
    // Ethnode
    //

  }, {
    key: "_createMonitoredEthereumTransaction",
    value: function () {
      var _createMonitoredEthereumTransaction2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee113(wallet, card, session, fromaccount) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee113$(_context113) {
          while (1) {
            switch (_context113.prev = _context113.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context113.abrupt("return", mvccurrencies._createMonitoredEthereumTransaction(wallet, card, session, fromaccount));

              case 3:
              case "end":
                return _context113.stop();
            }
          }
        }, _callee113, this);
      }));

      function _createMonitoredEthereumTransaction(_x334, _x335, _x336, _x337) {
        return _createMonitoredEthereumTransaction2.apply(this, arguments);
      }

      return _createMonitoredEthereumTransaction;
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
      var _registerTransaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee114(sessionuuid, walletuuid, carduuid, dataobj, assignto, feelevel) {
        var _this2 = this;

        var global, _apicontrollers, session, wallet, card, cardsession, cardsessionuuid, _tohex, datahexstring, fromaccount, toaddress, transaction, fee, from_card_scheme, txhash;

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
                if (carduuid) {
                  _context114.next = 6;
                  break;
                }

                return _context114.abrupt("return", Promise.reject('card uuid is undefined'));

              case 6:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context114.next = 10;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 10:
                session = _context114.sent;

                if (session) {
                  _context114.next = 13;
                  break;
                }

                return _context114.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 13:
                _context114.next = 15;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 15:
                wallet = _context114.sent;

                if (wallet) {
                  _context114.next = 18;
                  break;
                }

                return _context114.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 18:
                _context114.next = 20;
                return wallet.getCardFromUUID(carduuid);

              case 20:
                card = _context114.sent;

                if (card) {
                  _context114.next = 23;
                  break;
                }

                return _context114.abrupt("return", Promise.reject('could not find card ' + carduuid));

              case 23:
                _context114.next = 25;
                return this._getMonitoredCardSession(session, wallet, card);

              case 25:
                cardsession = _context114.sent;
                cardsessionuuid = cardsession.getSessionUUID();

                _tohex = function _tohex(data) {
                  var _Buffer = _this2._getBufferClass();

                  var datastr = JSON.stringify(data);

                  var buf = _Buffer.from(datastr, 'utf8');

                  return '0x' + buf.toString('hex');
                };

                datahexstring = _tohex(dataobj);
                fromaccount = card._getSessionAccountObject();
                toaddress = assignto ? assignto : fromaccount.getAddress(); //var transaction = _apicontrollers.createEthereumTransaction(cardsession, fromaccount);

                _context114.next = 33;
                return this._createMonitoredEthereumTransaction(wallet, card, cardsession, fromaccount);

              case 33:
                transaction = _context114.sent;

                if (!feelevel) {
                  _context114.next = 41;
                  break;
                }

                from_card_scheme = card.getScheme();
                _context114.next = 38;
                return _apicontrollers.createSchemeFee(from_card_scheme, feelevel);

              case 38:
                fee = _context114.sent;
                _context114.next = 42;
                break;

              case 41:
                fee = _apicontrollers.createFee();

              case 42:
                transaction.setToAddress(toaddress);
                transaction.setValue(0);
                transaction.setGas(fee.gaslimit);
                transaction.setGasPrice(fee.gasPrice);
                transaction.setData(datahexstring);
                _context114.next = 49;
                return _apicontrollers.sendEthereumTransaction(cardsession, transaction)["catch"](function (err) {
                  console.log('error in registerTransaction: ' + err);
                });

              case 49:
                txhash = _context114.sent;

                if (txhash) {
                  _context114.next = 52;
                  break;
                }

                return _context114.abrupt("return", Promise.reject('could not register transaction'));

              case 52:
                // save
                dataobj.txhash = txhash; // add transaction hash to save it, blocknumber will be added later
                // using sessionuuid to save locally (in 'shared') on the client side

                _context114.next = 55;
                return this._saveTransactionObject(sessionuuid, walletuuid, dataobj);

              case 55:
                return _context114.abrupt("return", txhash);

              case 56:
              case "end":
                return _context114.stop();
            }
          }
        }, _callee114, this);
      }));

      function registerTransaction(_x338, _x339, _x340, _x341, _x342, _x343) {
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
      var _getMonitoredSchemeSession2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee115(session, wallet, scheme) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee115$(_context115) {
          while (1) {
            switch (_context115.prev = _context115.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context115.abrupt("return", mvccurrencies._getMonitoredSchemeSession(session, wallet, scheme));

              case 3:
              case "end":
                return _context115.stop();
            }
          }
        }, _callee115, this);
      }));

      function _getMonitoredSchemeSession(_x344, _x345, _x346) {
        return _getMonitoredSchemeSession2.apply(this, arguments);
      }

      return _getMonitoredSchemeSession;
    }()
  }, {
    key: "_fetchTransaction",
    value: function () {
      var _fetchTransaction2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee116(session, wallet, pretradescheme, txhash) {
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
            _args116 = arguments;

        return _regeneratorRuntime().wrap(function _callee116$(_context116) {
          while (1) {
            switch (_context116.prev = _context116.next) {
              case 0:
                bPersist = _args116.length > 4 && _args116[4] !== undefined ? _args116[4] : false;
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context116.next = 5;
                return this._getMonitoredSchemeSession(session, wallet, pretradescheme);

              case 5:
                fetchsession = _context116.sent;
                fetchsessionuuid = fetchsession.getSessionUUID();
                _context116.next = 9;
                return _apicontrollers.readTransaction(fetchsession, txhash)["catch"](function (err) {
                  console.log('error in _fetchTransaction: ' + err);
                });

              case 9:
                tx = _context116.sent;

                if (tx) {
                  _context116.next = 12;
                  break;
                }

                return _context116.abrupt("return", Promise.reject('could not find transaction ' + txhash));

              case 12:
                dataobj = {};

                this._fillTransactionDataObject(dataobj, tx);

                if (!bPersist) {
                  _context116.next = 21;
                  break;
                }

                sessionuuid = session.getSessionUUID();
                walletuuid = wallet ? wallet.getWalletUUID() : null;
                persistdata = Object.assign({}, dataobj);
                persistdata.txhash = txhash; // using sessionuuid to save locally (in 'shared') on the client side

                _context116.next = 21;
                return this._saveTransactionObject(sessionuuid, walletuuid, persistdata);

              case 21:
                return _context116.abrupt("return", dataobj);

              case 22:
              case "end":
                return _context116.stop();
            }
          }
        }, _callee116, this);
      }));

      function _fetchTransaction(_x347, _x348, _x349, _x350) {
        return _fetchTransaction2.apply(this, arguments);
      }

      return _fetchTransaction;
    }()
  }, {
    key: "fetchTransaction",
    value: function () {
      var _fetchTransaction3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee117(sessionuuid, walletuuid, pretradeschemeuuid, txhash) {
        var global, _apicontrollers, session, wallet, pretradescheme;

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
                if (pretradeschemeuuid) {
                  _context117.next = 4;
                  break;
                }

                return _context117.abrupt("return", Promise.reject('scheme uuid is undefined'));

              case 4:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context117.next = 8;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 8:
                session = _context117.sent;

                if (session) {
                  _context117.next = 11;
                  break;
                }

                return _context117.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 11:
                _context117.next = 13;
                return _apicontrollers.getWalletFromUUID(session, walletuuid)["catch"](function (err) {});

              case 13:
                wallet = _context117.sent;
                _context117.next = 16;
                return _apicontrollers.getSchemeFromUUID(session, pretradeschemeuuid)["catch"](function (err) {});

              case 16:
                pretradescheme = _context117.sent;

                if (!pretradescheme.isRemote()) {
                  _context117.next = 20;
                  break;
                }

                if (!(wallet && wallet.isLocked())) {
                  _context117.next = 20;
                  break;
                }

                return _context117.abrupt("return", Promise.reject('ERR_WALLET_LOCKED'));

              case 20:
                return _context117.abrupt("return", this._fetchTransaction(session, wallet, pretradescheme, txhash, true));

              case 21:
              case "end":
                return _context117.stop();
            }
          }
        }, _callee117, this);
      }));

      function fetchTransaction(_x351, _x352, _x353, _x354) {
        return _fetchTransaction3.apply(this, arguments);
      }

      return fetchTransaction;
    }()
  }, {
    key: "fetchCurrencyTransaction",
    value: function () {
      var _fetchCurrencyTransaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee118(sessionuuid, walletuuid, currencyuuid, txhash) {
        var pretradescheme_info;
        return _regeneratorRuntime().wrap(function _callee118$(_context118) {
          while (1) {
            switch (_context118.prev = _context118.next) {
              case 0:
                _context118.next = 2;
                return this.getPretradeSchemeInfo(sessionuuid, currencyuuid);

              case 2:
                pretradescheme_info = _context118.sent;
                return _context118.abrupt("return", this.fetchTransaction(sessionuuid, walletuuid, pretradescheme_info.uuid, txhash));

              case 4:
              case "end":
                return _context118.stop();
            }
          }
        }, _callee118, this);
      }));

      function fetchCurrencyTransaction(_x355, _x356, _x357, _x358) {
        return _fetchCurrencyTransaction.apply(this, arguments);
      }

      return fetchCurrencyTransaction;
    }()
  }, {
    key: "_getAddressPretradeTransactions",
    value: function () {
      var _getAddressPretradeTransactions2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee119(session, wallet, currency, address) {
        var global, _apicontrollers, mytokensmodule, pretradescheme, childsession, currencyuuid, mytokensaccessinstance, restconnection, transactions, ethereumnodeaccessmodule, ethereumnodeaccessinstance, i, tx;

        return _regeneratorRuntime().wrap(function _callee119$(_context119) {
          while (1) {
            switch (_context119.prev = _context119.next) {
              case 0:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                mytokensmodule = global.getModuleObject('mytokens'); // get a childsession on pretrade's web3providerurl
                //let web3providerurl = currency.pretrade_web3_provider_url;
                //var childsession = await this._getChildSessionOnWeb3Url(session, web3providerurl);

                _context119.next = 5;
                return this._getPretradeScheme(session, currency);

              case 5:
                pretradescheme = _context119.sent;
                _context119.next = 8;
                return this._getMonitoredSchemeSession(session, wallet, pretradescheme);

              case 8:
                childsession = _context119.sent;
                currencyuuid = currency.uuid;
                mytokensaccessinstance = childsession.getSessionVariable('mytokensexplorer-' + currencyuuid);

                if (mytokensaccessinstance) {
                  _context119.next = 19;
                  break;
                }

                _context119.next = 14;
                return _apicontrollers.getEthereumNodeAccessInstance(childsession);

              case 14:
                childsession.ethereum_node_access_instance = _context119.sent;
                // keep!!!
                // create a specific mytokens instance pointing to pretrade_explorer_url to retrieve transactions
                mytokensaccessinstance = mytokensmodule.getMyTokensServerAccessInstance(childsession);
                restconnection = childsession.createRestConnection(currency.pretrade_explorer_url);
                mytokensaccessinstance.setRestConnection(restconnection);
                childsession.setSessionVariable('mytokensexplorer-' + currencyuuid, mytokensaccessinstance);

              case 19:
                _context119.next = 21;
                return mytokensaccessinstance.account_transactions(address);

              case 21:
                transactions = _context119.sent;
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

                return _context119.abrupt("return", transactions);

              case 26:
              case "end":
                return _context119.stop();
            }
          }
        }, _callee119, this);
      }));

      function _getAddressPretradeTransactions(_x359, _x360, _x361, _x362) {
        return _getAddressPretradeTransactions2.apply(this, arguments);
      }

      return _getAddressPretradeTransactions;
    }()
  }, {
    key: "canFetchTransactions",
    value: function () {
      var _canFetchTransactions = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee120(sessionuuid, walletuuid, currencyuuid) {
        var global, _apicontrollers, session, wallet, currency, pretradescheme, fetchsession;

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
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context120.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context120.sent;

                if (session) {
                  _context120.next = 9;
                  break;
                }

                return _context120.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                _context120.next = 11;
                return _apicontrollers.getWalletFromUUID(session, walletuuid)["catch"](function (err) {});

              case 11:
                wallet = _context120.sent;
                _context120.next = 14;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 14:
                currency = _context120.sent;

                if (currency) {
                  _context120.next = 17;
                  break;
                }

                return _context120.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 17:
                _context120.next = 19;
                return this._getPretradeScheme(session, currency);

              case 19:
                pretradescheme = _context120.sent;
                _context120.next = 22;
                return this._getMonitoredSchemeSession(session, wallet, pretradescheme)["catch"](function (err) {});

              case 22:
                fetchsession = _context120.sent;

                if (fetchsession) {
                  _context120.next = 25;
                  break;
                }

                return _context120.abrupt("return", false);

              case 25:
                if (!currency.pretrade_explorer_url) {
                  _context120.next = 29;
                  break;
                }

                return _context120.abrupt("return", true);

              case 29:
                return _context120.abrupt("return", false);

              case 30:
              case "end":
                return _context120.stop();
            }
          }
        }, _callee120, this);
      }));

      function canFetchTransactions(_x363, _x364, _x365) {
        return _canFetchTransactions.apply(this, arguments);
      }

      return canFetchTransactions;
    }()
  }, {
    key: "fetchTransactions",
    value: function () {
      var _fetchTransactions = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee121(sessionuuid, walletuuid, currencyuuid, address) {
        var global, _apicontrollers, session, wallet, currency, transactions, txlist, i, tx, dataobject;

        return _regeneratorRuntime().wrap(function _callee121$(_context121) {
          while (1) {
            switch (_context121.prev = _context121.next) {
              case 0:
                if (sessionuuid) {
                  _context121.next = 2;
                  break;
                }

                return _context121.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context121.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context121.sent;

                if (session) {
                  _context121.next = 9;
                  break;
                }

                return _context121.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                _context121.next = 11;
                return _apicontrollers.getWalletFromUUID(session, walletuuid)["catch"](function (err) {});

              case 11:
                wallet = _context121.sent;
                _context121.next = 14;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 14:
                currency = _context121.sent;

                if (currency) {
                  _context121.next = 17;
                  break;
                }

                return _context121.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 17:
                if (currency.pretrade_explorer_url) {
                  _context121.next = 19;
                  break;
                }

                return _context121.abrupt("return", Promise.reject('no explorer for currency ' + currencyuuid));

              case 19:
                _context121.next = 21;
                return this._getAddressPretradeTransactions(session, wallet, currency, address);

              case 21:
                transactions = _context121.sent;
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
                  _context121.next = 53;
                  break;
                }

                tx = transactions[i];
                dataobject = {};

                this._fillTransactionDataObject(dataobject, tx);

                _context121.t0 = dataobject.type == 'quote';
                _context121.next = _context121.t0 === 'bounty' ? 37 : _context121.t0 === 'claim' ? 39 : _context121.t0 === 'quote' ? 41 : _context121.t0 === 'order' ? 43 : _context121.t0 === 'invoice' ? 45 : _context121.t0 === 'paymentnotice' ? 47 : 49;
                break;

              case 37:
                txlist.bounties.push(dataobject);
                return _context121.abrupt("break", 50);

              case 39:
                txlist.claims.push(dataobject);
                return _context121.abrupt("break", 50);

              case 41:
                txlist.quotes.push(dataobject);
                return _context121.abrupt("break", 50);

              case 43:
                txlist.orders.push(dataobject);
                return _context121.abrupt("break", 50);

              case 45:
                txlist.invoices.push(dataobject);
                return _context121.abrupt("break", 50);

              case 47:
                txlist.paymentnotices.push(dataobject);
                return _context121.abrupt("break", 50);

              case 49:
                return _context121.abrupt("break", 50);

              case 50:
                i++;
                _context121.next = 30;
                break;

              case 53:
                return _context121.abrupt("return", txlist);

              case 54:
              case "end":
                return _context121.stop();
            }
          }
        }, _callee121, this);
      }));

      function fetchTransactions(_x366, _x367, _x368, _x369) {
        return _fetchTransactions.apply(this, arguments);
      }

      return fetchTransactions;
    }() //
    // Bounties
    //

  }, {
    key: "readBounties",
    value: function () {
      var _readBounties = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee122(sessionuuid, walletuuid) {
        var global, _apicontrollers, session, keys, bounty_list;

        return _regeneratorRuntime().wrap(function _callee122$(_context122) {
          while (1) {
            switch (_context122.prev = _context122.next) {
              case 0:
                if (sessionuuid) {
                  _context122.next = 2;
                  break;
                }

                return _context122.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context122.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context122.sent;

                if (session) {
                  _context122.next = 9;
                  break;
                }

                return _context122.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                if (!walletuuid) {
                  keys = ['myquote', 'bounties']; // shared keys
                } else {
                  console.log('WARNING: walletuuid specific case not implemented!!!');
                  keys = ['myquote', 'bounties']; // shared keys, also we could look in wallet
                  // with mvcmodule.getFromWallet
                } //let bounty_list = await _apicontrollers.getLocalJsonLeaf(session, keys, true);


                _context122.next = 12;
                return this._readClientSideJson(session, keys);

              case 12:
                bounty_list = _context122.sent;
                if (!bounty_list) bounty_list = [];
                return _context122.abrupt("return", bounty_list);

              case 15:
              case "end":
                return _context122.stop();
            }
          }
        }, _callee122, this);
      }));

      function readBounties(_x370, _x371) {
        return _readBounties.apply(this, arguments);
      }

      return readBounties;
    }()
  }, {
    key: "fetchBounties",
    value: function () {
      var _fetchBounties = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee123(sessionuuid, walletuuid, currencyuuid, vendor_address) {
        var global, _apicontrollers, session, wallet, currency, transactions, bountylist, i, tx, dataobject;

        return _regeneratorRuntime().wrap(function _callee123$(_context123) {
          while (1) {
            switch (_context123.prev = _context123.next) {
              case 0:
                if (sessionuuid) {
                  _context123.next = 2;
                  break;
                }

                return _context123.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context123.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context123.sent;

                if (session) {
                  _context123.next = 9;
                  break;
                }

                return _context123.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                _context123.next = 11;
                return _apicontrollers.getWalletFromUUID(session, walletuuid)["catch"](function (err) {});

              case 11:
                wallet = _context123.sent;
                _context123.next = 14;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 14:
                currency = _context123.sent;

                if (currency) {
                  _context123.next = 17;
                  break;
                }

                return _context123.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 17:
                if (currency.pretrade_explorer_url) {
                  _context123.next = 19;
                  break;
                }

                return _context123.abrupt("return", Promise.reject('no explorer for currency ' + currencyuuid));

              case 19:
                _context123.next = 21;
                return this._getAddressPretradeTransactions(session, wallet, currency, vendor_address);

              case 21:
                transactions = _context123.sent;
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

                return _context123.abrupt("return", bountylist);

              case 25:
              case "end":
                return _context123.stop();
            }
          }
        }, _callee123, this);
      }));

      function fetchBounties(_x372, _x373, _x374, _x375) {
        return _fetchBounties.apply(this, arguments);
      }

      return fetchBounties;
    }()
  }, {
    key: "fetchBounty",
    value: function () {
      var _fetchBounty = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee124(sessionuuid, walletuuid, currencyuuid, txhash) {
        var missing_credentials, orgbounty, bounty, submission_options;
        return _regeneratorRuntime().wrap(function _callee124$(_context124) {
          while (1) {
            switch (_context124.prev = _context124.next) {
              case 0:
                missing_credentials = false;
                _context124.next = 3;
                return this.fetchCurrencyTransaction(sessionuuid, walletuuid, currencyuuid, txhash)["catch"](function (err) {
                  console.log('error in fetchBounty: ' + err);
                  if (err == 'ERR_MISSING_CREDENTIALS') missing_credentials = true;
                });

              case 3:
                orgbounty = _context124.sent;

                if (!(missing_credentials === true)) {
                  _context124.next = 6;
                  break;
                }

                return _context124.abrupt("return", Promise.reject('ERR_MISSING_CREDENTIALS'));

              case 6:
                if (orgbounty) {
                  _context124.next = 8;
                  break;
                }

                return _context124.abrupt("return", Promise.reject('ERR_BOUNTY_NOT_FOUND'));

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

                return _context124.abrupt("return", bounty);

              case 12:
              case "end":
                return _context124.stop();
            }
          }
        }, _callee124, this);
      }));

      function fetchBounty(_x376, _x377, _x378, _x379) {
        return _fetchBounty.apply(this, arguments);
      }

      return fetchBounty;
    }()
  }, {
    key: "registerBounty",
    value: function () {
      var _registerBounty = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee125(sessionuuid, walletuuid, carduuid, bounty) {
        var _bounty, assignto, txhash;

        return _regeneratorRuntime().wrap(function _callee125$(_context125) {
          while (1) {
            switch (_context125.prev = _context125.next) {
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
                _context125.next = 11;
                return this.registerTransaction(sessionuuid, walletuuid, carduuid, _bounty, assignto);

              case 11:
                txhash = _context125.sent;
                return _context125.abrupt("return", txhash);

              case 13:
              case "end":
                return _context125.stop();
            }
          }
        }, _callee125, this);
      }));

      function registerBounty(_x380, _x381, _x382, _x383) {
        return _registerBounty.apply(this, arguments);
      }

      return registerBounty;
    }()
  }, {
    key: "saveBounty",
    value: function () {
      var _saveBounty = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee126(sessionuuid, walletuuid, bounty) {
        var global, _apicontrollers, bounty_list, bInList, i, session, txhash, blocknumber, currencyuuid, owner, title, amount, currency, keys, localjson;

        return _regeneratorRuntime().wrap(function _callee126$(_context126) {
          while (1) {
            switch (_context126.prev = _context126.next) {
              case 0:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context126.next = 4;
                return this.readBounties(sessionuuid, walletuuid);

              case 4:
                bounty_list = _context126.sent;
                // look not in list
                bInList = false;
                i = 0;

              case 7:
                if (!(i < bounty_list.length)) {
                  _context126.next = 14;
                  break;
                }

                if (!(bounty_list[i].txhash == bounty.txhash)) {
                  _context126.next = 11;
                  break;
                }

                bInList = true;
                return _context126.abrupt("break", 14);

              case 11:
                i++;
                _context126.next = 7;
                break;

              case 14:
                if (bInList) {
                  _context126.next = 28;
                  break;
                }

                _context126.next = 17;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 17:
                session = _context126.sent;

                if (session) {
                  _context126.next = 20;
                  break;
                }

                return _context126.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

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

                return _context126.abrupt("return", this._saveClientSideJson(session, keys, bounty_list));

              case 28:
                return _context126.abrupt("return", bounty_list);

              case 29:
              case "end":
                return _context126.stop();
            }
          }
        }, _callee126, this);
      }));

      function saveBounty(_x384, _x385, _x386) {
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
      var _fetchClaims = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee127(sessionuuid, walletuuid, currencyuuid, bountyhash) {
        var global, _apicontrollers, session, wallet, currency, bounty, assign_address, transactions, claimmap, i, tx, dataobject, latest, first, claimlist, arr, entry;

        return _regeneratorRuntime().wrap(function _callee127$(_context127) {
          while (1) {
            switch (_context127.prev = _context127.next) {
              case 0:
                if (sessionuuid) {
                  _context127.next = 2;
                  break;
                }

                return _context127.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context127.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context127.sent;

                if (session) {
                  _context127.next = 9;
                  break;
                }

                return _context127.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                _context127.next = 11;
                return _apicontrollers.getWalletFromUUID(session, walletuuid)["catch"](function (err) {});

              case 11:
                wallet = _context127.sent;
                _context127.next = 14;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 14:
                currency = _context127.sent;

                if (currency) {
                  _context127.next = 17;
                  break;
                }

                return _context127.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 17:
                if (currency.pretrade_explorer_url) {
                  _context127.next = 19;
                  break;
                }

                return _context127.abrupt("return", Promise.reject('no explorer for currency ' + currencyuuid));

              case 19:
                _context127.next = 21;
                return this.fetchBounty(sessionuuid, walletuuid, currencyuuid, bountyhash);

              case 21:
                bounty = _context127.sent;
                assign_address = this._getBountyAssignAddress(session, bounty); // use explorer to fetch transactions for address

                _context127.next = 25;
                return this._getAddressPretradeTransactions(session, wallet, currency, assign_address);

              case 25:
                transactions = _context127.sent;
                // we filter claims
                claimmap = {};
                i = 0;

              case 28:
                if (!(i < (transactions ? transactions.length : 0))) {
                  _context127.next = 41;
                  break;
                }

                tx = transactions[i];
                dataobject = {};

                this._fillTransactionDataObject(dataobject, tx);

                if (!(dataobject.type == 'claim' && dataobject.bounty == bountyhash)) {
                  _context127.next = 38;
                  break;
                }

                if (dataobject.uuid) {
                  _context127.next = 37;
                  break;
                }

                // add an uuid now
                dataobject.uuid = session.guid();
                _context127.next = 37;
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
                _context127.next = 28;
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

                return _context127.abrupt("return", claimlist);

              case 45:
              case "end":
                return _context127.stop();
            }
          }
        }, _callee127, this);
      }));

      function fetchClaims(_x387, _x388, _x389, _x390) {
        return _fetchClaims.apply(this, arguments);
      }

      return fetchClaims;
    }()
  }, {
    key: "fetchClaim",
    value: function () {
      var _fetchClaim = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee128(sessionuuid, walletuuid, currencyuuid, txhash) {
        var missing_credentials, orgclaim, claim, claims, i, clm;
        return _regeneratorRuntime().wrap(function _callee128$(_context128) {
          while (1) {
            switch (_context128.prev = _context128.next) {
              case 0:
                missing_credentials = false;
                _context128.next = 3;
                return this.fetchCurrencyTransaction(sessionuuid, walletuuid, currencyuuid, txhash)["catch"](function (err) {
                  console.log('error in fetchClaim: ' + err);
                  if (err == 'ERR_MISSING_CREDENTIALS') missing_credentials = true;
                });

              case 3:
                orgclaim = _context128.sent;

                if (!(missing_credentials === true)) {
                  _context128.next = 6;
                  break;
                }

                return _context128.abrupt("return", Promise.reject('ERR_MISSING_CREDENTIALS'));

              case 6:
                if (orgclaim) {
                  _context128.next = 8;
                  break;
                }

                return _context128.abrupt("return", Promise.reject('ERR_CLAIM_NOT_FOUND'));

              case 8:
                if (orgclaim.uuid) {
                  _context128.next = 10;
                  break;
                }

                return _context128.abrupt("return", Promise.reject('claim was not registered with a proper uuid ' + txhash));

              case 10:
                // we scan the claims to see if the original claim has been updated
                // with new record
                claim = orgclaim;
                _context128.next = 13;
                return this.fetchClaims(sessionuuid, walletuuid, currencyuuid, claim.bounty);

              case 13:
                claims = _context128.sent;
                i = 0;

              case 15:
                if (!(i < (claims ? claims.length : 0))) {
                  _context128.next = 23;
                  break;
                }

                clm = claims[i];

                if (!(clm.uuid === orgclaim.uuid)) {
                  _context128.next = 20;
                  break;
                }

                claim = claims[i];
                return _context128.abrupt("break", 23);

              case 20:
                i++;
                _context128.next = 15;
                break;

              case 23:
                return _context128.abrupt("return", claim);

              case 24:
              case "end":
                return _context128.stop();
            }
          }
        }, _callee128, this);
      }));

      function fetchClaim(_x391, _x392, _x393, _x394) {
        return _fetchClaim.apply(this, arguments);
      }

      return fetchClaim;
    }()
  }, {
    key: "canRegisterClaim",
    value: function () {
      var _canRegisterClaim = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee129(sessionuuid, walletuuid, carduuid, claim) {
        var bounty, claims, owner_map, payingto_map, i, clm;
        return _regeneratorRuntime().wrap(function _callee129$(_context129) {
          while (1) {
            switch (_context129.prev = _context129.next) {
              case 0:
                _context129.next = 2;
                return this.fetchBounty(sessionuuid, walletuuid, claim.currencyuuid, claim.bounty);

              case 2:
                bounty = _context129.sent;

                if (!(bounty.one_submission === true)) {
                  _context129.next = 14;
                  break;
                }

                _context129.next = 6;
                return this.fetchClaims(sessionuuid, bounty.currencyuuid, bounty.txhash);

              case 6:
                claims = _context129.sent;
                owner_map = {};
                payingto_map = {};

                for (i = 0; i < (claims ? claims.length : 0); i++) {
                  clm = claims[i];
                  if (clm.owner) owner_map[clm.owner] = clm.owner;
                  if (clm.payingto) payingto_map[clm.payingto] = clm.payingto;
                }

                if (!owner_map[claim.owner]) {
                  _context129.next = 12;
                  break;
                }

                return _context129.abrupt("return", false);

              case 12:
                if (!(claim.payingto && payingto_map[claim.payingto])) {
                  _context129.next = 14;
                  break;
                }

                return _context129.abrupt("return", false);

              case 14:
                return _context129.abrupt("return", true);

              case 15:
              case "end":
                return _context129.stop();
            }
          }
        }, _callee129, this);
      }));

      function canRegisterClaim(_x395, _x396, _x397, _x398) {
        return _canRegisterClaim.apply(this, arguments);
      }

      return canRegisterClaim;
    }()
  }, {
    key: "registerClaim",
    value: function () {
      var _registerClaim = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee130(sessionuuid, walletuuid, carduuid, claim) {
        var global, _apicontrollers, session, wallet, card, cardsession, claimuuid, bounty, assign_address, txhash;

        return _regeneratorRuntime().wrap(function _callee130$(_context130) {
          while (1) {
            switch (_context130.prev = _context130.next) {
              case 0:
                if (sessionuuid) {
                  _context130.next = 2;
                  break;
                }

                return _context130.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context130.next = 4;
                  break;
                }

                return _context130.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                if (carduuid) {
                  _context130.next = 6;
                  break;
                }

                return _context130.abrupt("return", Promise.reject('card uuid is undefined'));

              case 6:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context130.next = 10;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 10:
                session = _context130.sent;

                if (session) {
                  _context130.next = 13;
                  break;
                }

                return _context130.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 13:
                _context130.next = 15;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 15:
                wallet = _context130.sent;

                if (wallet) {
                  _context130.next = 18;
                  break;
                }

                return _context130.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 18:
                _context130.next = 20;
                return wallet.getCardFromUUID(carduuid);

              case 20:
                card = _context130.sent;

                if (card) {
                  _context130.next = 23;
                  break;
                }

                return _context130.abrupt("return", Promise.reject('could not find card ' + carduuid));

              case 23:
                _context130.next = 25;
                return this._getMonitoredCardSession(session, wallet, card);

              case 25:
                cardsession = _context130.sent;
                // we add an uuid to the claim that will live in multiple txhash
                claimuuid = cardsession.guid();
                claim.uuid = claimuuid;
                _context130.next = 30;
                return this.fetchBounty(sessionuuid, walletuuid, claim.currencyuuid, claim.bounty);

              case 30:
                bounty = _context130.sent;
                assign_address = this._getBountyAssignAddress(session, bounty);
                _context130.next = 34;
                return this.registerTransaction(sessionuuid, walletuuid, carduuid, claim, assign_address);

              case 34:
                txhash = _context130.sent;
                return _context130.abrupt("return", txhash);

              case 36:
              case "end":
                return _context130.stop();
            }
          }
        }, _callee130, this);
      }));

      function registerClaim(_x399, _x400, _x401, _x402) {
        return _registerClaim.apply(this, arguments);
      }

      return registerClaim;
    }()
  }, {
    key: "updateClaim",
    value: function () {
      var _updateClaim = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee131(sessionuuid, walletuuid, carduuid, claim) {
        var global, _apicontrollers, session, wallet, bounty, assign_address, txhash;

        return _regeneratorRuntime().wrap(function _callee131$(_context131) {
          while (1) {
            switch (_context131.prev = _context131.next) {
              case 0:
                if (sessionuuid) {
                  _context131.next = 2;
                  break;
                }

                return _context131.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                if (walletuuid) {
                  _context131.next = 4;
                  break;
                }

                return _context131.abrupt("return", Promise.reject('wallet uuid is undefined'));

              case 4:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context131.next = 8;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 8:
                session = _context131.sent;

                if (session) {
                  _context131.next = 11;
                  break;
                }

                return _context131.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 11:
                _context131.next = 13;
                return _apicontrollers.getWalletFromUUID(session, walletuuid);

              case 13:
                wallet = _context131.sent;

                if (wallet) {
                  _context131.next = 16;
                  break;
                }

                return _context131.abrupt("return", Promise.reject('could not find wallet ' + walletuuid));

              case 16:
                _context131.next = 18;
                return this.fetchBounty(sessionuuid, walletuuid, claim.currencyuuid, claim.bounty);

              case 18:
                bounty = _context131.sent;
                assign_address = this._getBountyAssignAddress(session, bounty);

                if (claim.uuid) {
                  _context131.next = 22;
                  break;
                }

                return _context131.abrupt("return", Promise.reject('claim has no uuid ' + claim.txhash));

              case 22:
                _context131.next = 24;
                return this.registerTransaction(sessionuuid, walletuuid, carduuid, claim, assign_address);

              case 24:
                txhash = _context131.sent;

                if (!txhash) {
                  _context131.next = 28;
                  break;
                }

                _context131.next = 28;
                return this.saveClaim(sessionuuid, walletuuid, claim);

              case 28:
                return _context131.abrupt("return", txhash);

              case 29:
              case "end":
                return _context131.stop();
            }
          }
        }, _callee131, this);
      }));

      function updateClaim(_x403, _x404, _x405, _x406) {
        return _updateClaim.apply(this, arguments);
      }

      return updateClaim;
    }() // storage

  }, {
    key: "_readClaims",
    value: function () {
      var _readClaims2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee132(session, keys) {
        var global, _apicontrollers, claim_list;

        return _regeneratorRuntime().wrap(function _callee132$(_context132) {
          while (1) {
            switch (_context132.prev = _context132.next) {
              case 0:
                global = this.global;
                _apicontrollers = this._getClientAPI(); //var claim_list = await _apicontrollers.getLocalJsonLeaf(session, keys, true);

                _context132.next = 4;
                return this._readClientSideJson(session, keys);

              case 4:
                claim_list = _context132.sent;
                if (!claim_list) claim_list = [];
                return _context132.abrupt("return", claim_list);

              case 7:
              case "end":
                return _context132.stop();
            }
          }
        }, _callee132, this);
      }));

      function _readClaims(_x407, _x408) {
        return _readClaims2.apply(this, arguments);
      }

      return _readClaims;
    }()
  }, {
    key: "readClaims",
    value: function () {
      var _readClaims3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee133(sessionuuid, walletuuid) {
        var global, _apicontrollers, session, keys, claim_list, unhandled_claims, i, claim;

        return _regeneratorRuntime().wrap(function _callee133$(_context133) {
          while (1) {
            switch (_context133.prev = _context133.next) {
              case 0:
                if (sessionuuid) {
                  _context133.next = 2;
                  break;
                }

                return _context133.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context133.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context133.sent;

                if (session) {
                  _context133.next = 9;
                  break;
                }

                return _context133.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                if (!walletuuid) {
                  keys = ['myquote', 'claims']; // shared keys
                } else {
                  console.log('WARNING: walletuuid specific case not implemented!!!');
                  keys = ['myquote', 'claims']; // shared keys, otherwise we could look in wallet
                  // with mvcmodule.getFromWallet
                }

                _context133.next = 12;
                return this._readClaims(session, keys);

              case 12:
                claim_list = _context133.sent;
                // we go through the list to see if some 'unhandled yet' claims
                // need to be checked
                unhandled_claims = [];

                for (i = 0; i < claim_list.length; i++) {
                  if (claim_list[i].status === 0) unhandled_claims.push(claim_list[i]);
                } // then fetch for each claim (could be speeded up if necessary)


                i = 0;

              case 16:
                if (!(i < unhandled_claims.length)) {
                  _context133.next = 26;
                  break;
                }

                _context133.next = 19;
                return this.fetchClaim(sessionuuid, walletuuid, unhandled_claims[i].currencyuuid, unhandled_claims[i].txhash)["catch"](function (err) {});

              case 19:
                claim = _context133.sent;

                if (!(claim && claim.status !== 0)) {
                  _context133.next = 23;
                  break;
                }

                _context133.next = 23;
                return this.saveClaim(sessionuuid, walletuuid, claim);

              case 23:
                i++;
                _context133.next = 16;
                break;

              case 26:
                return _context133.abrupt("return", claim_list);

              case 27:
              case "end":
                return _context133.stop();
            }
          }
        }, _callee133, this);
      }));

      function readClaims(_x409, _x410) {
        return _readClaims3.apply(this, arguments);
      }

      return readClaims;
    }()
  }, {
    key: "saveClaim",
    value: function () {
      var _saveClaim = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee134(sessionuuid, walletuuid, claim) {
        var global, _apicontrollers, session, keys, claim_list, bInList, claim_index, i, uuid, txhash, blocknumber, currencyuuid, owner, bounty, amount, currency, private_submission, answer, status, pretradescheme_info, bountyobject, title, localjson, _title, savetime;

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
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context134.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context134.sent;

                if (session) {
                  _context134.next = 9;
                  break;
                }

                return _context134.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                if (!walletuuid) {
                  keys = ['myquote', 'claims']; // shared keys
                } else {
                  console.log('WARNING: walletuuid specific case not implemented!!!');
                  keys = ['myquote', 'claims']; // shared keys, also we could put in wallet
                  // with mvcmodule.putInWallet
                }

                _context134.next = 12;
                return this._readClaims(session, keys);

              case 12:
                claim_list = _context134.sent;
                bInList = false;
                i = 0;

              case 15:
                if (!(i < claim_list.length)) {
                  _context134.next = 27;
                  break;
                }

                if (!(claim.txhash && claim_list[i].txhash == claim.txhash)) {
                  _context134.next = 20;
                  break;
                }

                bInList = true;
                claim_index = i;
                return _context134.abrupt("break", 27);

              case 20:
                if (!(claim.uuid && claim_list[i].uuid == claim.uuid)) {
                  _context134.next = 24;
                  break;
                }

                bInList = true;
                claim_index = i;
                return _context134.abrupt("break", 27);

              case 24:
                i++;
                _context134.next = 15;
                break;

              case 27:
                if (bInList) {
                  _context134.next = 41;
                  break;
                }

                // add new element to the list
                // claim parameters
                uuid = claim.uuid, txhash = claim.txhash, blocknumber = claim.blocknumber, currencyuuid = claim.currencyuuid, owner = claim.owner, bounty = claim.bounty, amount = claim.amount, currency = claim.currency, private_submission = claim.private_submission, answer = claim.answer, status = claim.status; // read bounty to get title

                _context134.next = 31;
                return this.getPretradeSchemeInfo(sessionuuid, currencyuuid);

              case 31:
                pretradescheme_info = _context134.sent;
                _context134.next = 34;
                return this.fetchTransaction(sessionuuid, walletuuid, pretradescheme_info.uuid, bounty)["catch"](function (err) {});

              case 34:
                bountyobject = _context134.sent;
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
                _context134.next = 46;
                break;

              case 41:
                // we update claim at correct index (transfering additional parameters)
                _title = claim_list[claim_index].title;
                savetime = claim_list[claim_index].savetime;
                claim_list[claim_index] = claim;
                claim_list[claim_index].title = _title;
                claim_list[claim_index].savetime = savetime;

              case 46:
                return _context134.abrupt("return", this._saveClientSideJson(session, keys, claim_list));

              case 47:
              case "end":
                return _context134.stop();
            }
          }
        }, _callee134, this);
      }));

      function saveClaim(_x411, _x412, _x413) {
        return _saveClaim.apply(this, arguments);
      }

      return saveClaim;
    }() //
    // Quotes
    //

  }, {
    key: "readQuotes",
    value: function () {
      var _readQuotes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee135(sessionuuid, walletuuid) {
        var global, _apicontrollers, session, keys, quote_list;

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
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context135.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context135.sent;

                if (session) {
                  _context135.next = 9;
                  break;
                }

                return _context135.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                if (!walletuuid) {
                  keys = ['myquote', 'quotes']; // shared keys
                } else {
                  console.log('WARNING: walletuuid specific case not implemented!!!');
                  keys = ['myquote', 'quotes']; // shared keys, also we could look in wallet
                  // with mvcmodule.getFromWallet
                } //let quote_list = await _apicontrollers.getLocalJsonLeaf(session, keys, true);


                _context135.next = 12;
                return this._readClientSideJson(session, keys);

              case 12:
                quote_list = _context135.sent;
                if (!quote_list) quote_list = [];
                return _context135.abrupt("return", quote_list);

              case 15:
              case "end":
                return _context135.stop();
            }
          }
        }, _callee135, this);
      }));

      function readQuotes(_x414, _x415) {
        return _readQuotes.apply(this, arguments);
      }

      return readQuotes;
    }()
  }, {
    key: "fetchQuotes",
    value: function () {
      var _fetchQuotes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee136(sessionuuid, walletuuid, currencyuuid, vendor_address) {
        var global, _apicontrollers, session, wallet, currency, transactions, quotelist, i, tx, dataobject;

        return _regeneratorRuntime().wrap(function _callee136$(_context136) {
          while (1) {
            switch (_context136.prev = _context136.next) {
              case 0:
                if (sessionuuid) {
                  _context136.next = 2;
                  break;
                }

                return _context136.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context136.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context136.sent;

                if (session) {
                  _context136.next = 9;
                  break;
                }

                return _context136.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                _context136.next = 11;
                return _apicontrollers.getWalletFromUUID(session, walletuuid)["catch"](function (err) {});

              case 11:
                wallet = _context136.sent;
                _context136.next = 14;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 14:
                currency = _context136.sent;

                if (currency) {
                  _context136.next = 17;
                  break;
                }

                return _context136.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 17:
                if (currency.pretrade_explorer_url) {
                  _context136.next = 19;
                  break;
                }

                return _context136.abrupt("return", Promise.reject('no explorer for currency ' + currencyuuid));

              case 19:
                _context136.next = 21;
                return this._getAddressPretradeTransactions(session, wallet, currency, vendor_address);

              case 21:
                transactions = _context136.sent;
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

                return _context136.abrupt("return", quotelist);

              case 25:
              case "end":
                return _context136.stop();
            }
          }
        }, _callee136, this);
      }));

      function fetchQuotes(_x416, _x417, _x418, _x419) {
        return _fetchQuotes.apply(this, arguments);
      }

      return fetchQuotes;
    }()
  }, {
    key: "saveQuote",
    value: function () {
      var _saveQuote = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee137(sessionuuid, walletuuid, quote) {
        var global, _apicontrollers, quote_list, bInList, i, session, txhash, blocknumber, currencyuuid, owner, title, amount, currency, keys, localjson;

        return _regeneratorRuntime().wrap(function _callee137$(_context137) {
          while (1) {
            switch (_context137.prev = _context137.next) {
              case 0:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context137.next = 4;
                return this.readQuotes(sessionuuid, walletuuid);

              case 4:
                quote_list = _context137.sent;
                // look not in list
                bInList = false;
                i = 0;

              case 7:
                if (!(i < quote_list.length)) {
                  _context137.next = 14;
                  break;
                }

                if (!(quote_list[i].txhash == quote.txhash)) {
                  _context137.next = 11;
                  break;
                }

                bInList = true;
                return _context137.abrupt("break", 14);

              case 11:
                i++;
                _context137.next = 7;
                break;

              case 14:
                if (bInList) {
                  _context137.next = 28;
                  break;
                }

                _context137.next = 17;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 17:
                session = _context137.sent;

                if (session) {
                  _context137.next = 20;
                  break;
                }

                return _context137.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

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

                return _context137.abrupt("return", this._saveClientSideJson(session, keys, quote_list));

              case 28:
                return _context137.abrupt("return", quote_list);

              case 29:
              case "end":
                return _context137.stop();
            }
          }
        }, _callee137, this);
      }));

      function saveQuote(_x420, _x421, _x422) {
        return _saveQuote.apply(this, arguments);
      }

      return saveQuote;
    }()
  }, {
    key: "readOrders",
    value: function () {
      var _readOrders = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee138(sessionuuid, walletuuid) {
        var global, _apicontrollers, session, keys, order_list;

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
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context138.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context138.sent;

                if (session) {
                  _context138.next = 9;
                  break;
                }

                return _context138.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                if (!walletuuid) {
                  keys = ['myquote', 'orders']; // shared keys
                } else {
                  console.log('WARNING: walletuuid specific case not implemented!!!');
                  keys = ['myquote', 'orders']; // shared keys, otherwise we could look in wallet
                  // with mvcmodule.getFromWallet
                } //let order_list = await _apicontrollers.getLocalJsonLeaf(session, keys, true);


                _context138.next = 12;
                return this._readClientSideJson(session, keys);

              case 12:
                order_list = _context138.sent;
                if (!order_list) order_list = [];
                return _context138.abrupt("return", order_list);

              case 15:
              case "end":
                return _context138.stop();
            }
          }
        }, _callee138, this);
      }));

      function readOrders(_x423, _x424) {
        return _readOrders.apply(this, arguments);
      }

      return readOrders;
    }()
  }, {
    key: "fetchOrders",
    value: function () {
      var _fetchOrders = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee139(sessionuuid, walletuuid, currencyuuid, quotehash) {
        var global, _apicontrollers, session, wallet, currency, quote, vendor_address, transactions, orderlist, i, tx, dataobject;

        return _regeneratorRuntime().wrap(function _callee139$(_context139) {
          while (1) {
            switch (_context139.prev = _context139.next) {
              case 0:
                if (sessionuuid) {
                  _context139.next = 2;
                  break;
                }

                return _context139.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context139.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context139.sent;

                if (session) {
                  _context139.next = 9;
                  break;
                }

                return _context139.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                _context139.next = 11;
                return _apicontrollers.getWalletFromUUID(session, walletuuid)["catch"](function (err) {});

              case 11:
                wallet = _context139.sent;
                _context139.next = 14;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 14:
                currency = _context139.sent;

                if (currency) {
                  _context139.next = 17;
                  break;
                }

                return _context139.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 17:
                if (currency.pretrade_explorer_url) {
                  _context139.next = 19;
                  break;
                }

                return _context139.abrupt("return", Promise.reject('no explorer for currency ' + currencyuuid));

              case 19:
                _context139.next = 21;
                return this.fetchCurrencyTransaction(sessionuuid, walletuuid, currencyuuid, quotehash);

              case 21:
                quote = _context139.sent;
                vendor_address = quote.owner; // use explorer to fetch transactions for vendor's address

                _context139.next = 25;
                return this._getAddressPretradeTransactions(session, wallet, currency, vendor_address);

              case 25:
                transactions = _context139.sent;
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

                return _context139.abrupt("return", orderlist);

              case 29:
              case "end":
                return _context139.stop();
            }
          }
        }, _callee139, this);
      }));

      function fetchOrders(_x425, _x426, _x427, _x428) {
        return _fetchOrders.apply(this, arguments);
      }

      return fetchOrders;
    }()
  }, {
    key: "scanNextBlockForOrders",
    value: function () {
      var _scanNextBlockForOrders = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee140(sessionuuid, walletuuid, currencyuuid, quotehash, blockshift) {
        var global, _apicontrollers, session, keys, scan, quote, new_orders, pretradeweb3rurl, childsession, current_blocknumber, start_block_number, last_block_number, ordernum, ethereumnodeaccessmodule, ethereumnodeaccessinstance, blocknumber, block, transactions, i, tx, dataobject;

        return _regeneratorRuntime().wrap(function _callee140$(_context140) {
          while (1) {
            switch (_context140.prev = _context140.next) {
              case 0:
                if (sessionuuid) {
                  _context140.next = 2;
                  break;
                }

                return _context140.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context140.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context140.sent;

                if (session) {
                  _context140.next = 9;
                  break;
                }

                return _context140.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                keys = ['myquote', 'scan', 'orders', quotehash]; //let scan = await _apicontrollers.getLocalJsonLeaf(session, keys);

                _context140.next = 12;
                return this._readClientSideJson(session, keys);

              case 12:
                scan = _context140.sent;
                if (!scan) scan = {};
                _context140.next = 16;
                return this.fetchCurrencyTransaction(sessionuuid, walletuuid, currencyuuid, quotehash);

              case 16:
                quote = _context140.sent;
                new_orders = []; // get a childsession on currency pretrade web3provider

                _context140.next = 20;
                return this.getPretradeWeb3Url(sessionuuid, currencyuuid);

              case 20:
                pretradeweb3rurl = _context140.sent;
                _context140.next = 23;
                return this._getChildSessionOnWeb3Url(session, pretradeweb3rurl);

              case 23:
                childsession = _context140.sent;
                _context140.next = 26;
                return _apicontrollers.readCurrentBlockNumber(childsession);

              case 26:
                current_blocknumber = _context140.sent;
                start_block_number = (scan.last_block_number ? scan.last_block_number : quote.blocknumber) + 1;
                last_block_number = start_block_number + blockshift < current_blocknumber ? start_block_number + blockshift : current_blocknumber;
                ordernum = scan.ordernum ? scan.ordernum : 0; // read transactions for each block

                ethereumnodeaccessmodule = global.getModuleObject('ethereum-node-access');
                ethereumnodeaccessinstance = ethereumnodeaccessmodule.getEthereumNodeAccessInstance(childsession); // TODO: could be better to use
                // var ethereumnodeaccessinstance = _apicontrollers.getEthereumNodeAccessInstance(childsession);

                blocknumber = start_block_number;

              case 33:
                if (!(blocknumber < last_block_number + 1)) {
                  _context140.next = 59;
                  break;
                }

                _context140.next = 36;
                return new Promise(function (resolve, reject) {
                  ethereumnodeaccessinstance.web3_getBlock(blocknumber, true, function (err, res) {
                    if (err) reject(err);else resolve(res);
                  });
                })["catch"](function (err) {
                  console.log('error in scanNextBlockForOrders: ' + err);
                });

              case 36:
                block = _context140.sent;
                transactions = block.transactions;
                i = 0;

              case 39:
                if (!(i < (transactions ? transactions.length : 0))) {
                  _context140.next = 56;
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
                  _context140.next = 53;
                  break;
                }

                _context140.next = 51;
                return this.saveOrder(sessionuuid, null, dataobject);

              case 51:
                new_orders.push(dataobject);
                ordernum++;

              case 53:
                i++;
                _context140.next = 39;
                break;

              case 56:
                blocknumber++;
                _context140.next = 33;
                break;

              case 59:
                // save where we are
                scan.last_block_number = last_block_number;
                scan.ordernum = ordernum; //await _apicontrollers.saveLocalJson(session, keys, scan);

                _context140.next = 63;
                return this._saveClientSideJson(session, keys, scan);

              case 63:
                return _context140.abrupt("return", new_orders);

              case 64:
              case "end":
                return _context140.stop();
            }
          }
        }, _callee140, this);
      }));

      function scanNextBlockForOrders(_x429, _x430, _x431, _x432, _x433) {
        return _scanNextBlockForOrders.apply(this, arguments);
      }

      return scanNextBlockForOrders;
    }()
  }, {
    key: "saveOrder",
    value: function () {
      var _saveOrder = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee141(sessionuuid, walletuuid, order) {
        var global, _apicontrollers, order_list, bInList, i, session, txhash, blocknumber, currencyuuid, owner, quote, amount, currency, hadfunds, pretradescheme_info, quoteobject, title, keys, localjson;

        return _regeneratorRuntime().wrap(function _callee141$(_context141) {
          while (1) {
            switch (_context141.prev = _context141.next) {
              case 0:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context141.next = 4;
                return this.readOrders(sessionuuid, walletuuid);

              case 4:
                order_list = _context141.sent;
                bInList = false;
                i = 0;

              case 7:
                if (!(i < order_list.length)) {
                  _context141.next = 14;
                  break;
                }

                if (!(order_list[i].txhash == order.txhash)) {
                  _context141.next = 11;
                  break;
                }

                bInList = true;
                return _context141.abrupt("break", 14);

              case 11:
                i++;
                _context141.next = 7;
                break;

              case 14:
                if (bInList) {
                  _context141.next = 35;
                  break;
                }

                _context141.next = 17;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 17:
                session = _context141.sent;

                if (session) {
                  _context141.next = 20;
                  break;
                }

                return _context141.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 20:
                // order parameters
                txhash = order.txhash, blocknumber = order.blocknumber, currencyuuid = order.currencyuuid, owner = order.owner, quote = order.quote, amount = order.amount, currency = order.currency, hadfunds = order.hadfunds; // read quote to get title

                _context141.next = 23;
                return this.getPretradeSchemeInfo(sessionuuid, currencyuuid);

              case 23:
                pretradescheme_info = _context141.sent;
                _context141.next = 26;
                return this.fetchTransaction(sessionuuid, walletuuid, pretradescheme_info.uuid, quote)["catch"](function (err) {});

              case 26:
                quoteobject = _context141.sent;
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

                return _context141.abrupt("return", this._saveClientSideJson(session, keys, order_list));

              case 35:
                return _context141.abrupt("return", order_list);

              case 36:
              case "end":
                return _context141.stop();
            }
          }
        }, _callee141, this);
      }));

      function saveOrder(_x434, _x435, _x436) {
        return _saveOrder.apply(this, arguments);
      }

      return saveOrder;
    }()
  }, {
    key: "readInvoices",
    value: function () {
      var _readInvoices = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee142(sessionuuid, walletuuid) {
        var global, _apicontrollers, session, keys, invoice_list;

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
                if (!walletuuid) {
                  keys = ['myquote', 'invoices']; // shared keys
                } else {
                  console.log('WARNING: walletuuid specific case not implemented!!!');
                  keys = ['myquote', 'invoices']; // shared keys, otherwise we could look in wallet
                  // with mvcmodule.getFromWallet
                } //let invoice_list = await _apicontrollers.getLocalJsonLeaf(session, keys, true);


                _context142.next = 12;
                return this._readClientSideJson(session, keys);

              case 12:
                invoice_list = _context142.sent;
                if (!invoice_list) invoice_list = [];
                return _context142.abrupt("return", invoice_list);

              case 15:
              case "end":
                return _context142.stop();
            }
          }
        }, _callee142, this);
      }));

      function readInvoices(_x437, _x438) {
        return _readInvoices.apply(this, arguments);
      }

      return readInvoices;
    }()
  }, {
    key: "fetchInvoices",
    value: function () {
      var _fetchInvoices = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee143(sessionuuid, walletuuid, currencyuuid, orderhash) {
        var global, _apicontrollers, session, wallet, currency, order, buyer_address, transactions, invoicelist, i, tx, dataobject;

        return _regeneratorRuntime().wrap(function _callee143$(_context143) {
          while (1) {
            switch (_context143.prev = _context143.next) {
              case 0:
                if (sessionuuid) {
                  _context143.next = 2;
                  break;
                }

                return _context143.abrupt("return", Promise.reject('session uuid is undefined'));

              case 2:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context143.next = 6;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 6:
                session = _context143.sent;

                if (session) {
                  _context143.next = 9;
                  break;
                }

                return _context143.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 9:
                _context143.next = 11;
                return _apicontrollers.getWalletFromUUID(session, walletuuid)["catch"](function (err) {});

              case 11:
                wallet = _context143.sent;
                _context143.next = 14;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 14:
                currency = _context143.sent;

                if (currency) {
                  _context143.next = 17;
                  break;
                }

                return _context143.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 17:
                if (currency.pretrade_explorer_url) {
                  _context143.next = 19;
                  break;
                }

                return _context143.abrupt("return", Promise.reject('no explorer for currency ' + currencyuuid));

              case 19:
                _context143.next = 21;
                return this.fetchCurrencyTransaction(sessionuuid, walletuuid, currencyuuid, orderhash);

              case 21:
                order = _context143.sent;
                buyer_address = order.owner; // use explorer to fetch transactions for buyer's address

                _context143.next = 25;
                return this._getAddressPretradeTransactions(session, wallet, currency, buyer_address);

              case 25:
                transactions = _context143.sent;
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

                return _context143.abrupt("return", invoicelist);

              case 29:
              case "end":
                return _context143.stop();
            }
          }
        }, _callee143, this);
      }));

      function fetchInvoices(_x439, _x440, _x441, _x442) {
        return _fetchInvoices.apply(this, arguments);
      }

      return fetchInvoices;
    }()
  }, {
    key: "saveInvoice",
    value: function () {
      var _saveInvoice = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee144(sessionuuid, walletuuid, invoice) {
        var global, _apicontrollers, invoice_list, bInList, i, session, txhash, blocknumber, currencyuuid, owner, order, amount, currency, pretradescheme_info, orderobject, quoteobject, title, keys, localjson;

        return _regeneratorRuntime().wrap(function _callee144$(_context144) {
          while (1) {
            switch (_context144.prev = _context144.next) {
              case 0:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context144.next = 4;
                return this.readInvoices(sessionuuid, walletuuid);

              case 4:
                invoice_list = _context144.sent;
                bInList = false;
                i = 0;

              case 7:
                if (!(i < invoice_list.length)) {
                  _context144.next = 14;
                  break;
                }

                if (!(invoice_list[i].txhash == invoice.txhash)) {
                  _context144.next = 11;
                  break;
                }

                bInList = true;
                return _context144.abrupt("break", 14);

              case 11:
                i++;
                _context144.next = 7;
                break;

              case 14:
                if (bInList) {
                  _context144.next = 38;
                  break;
                }

                _context144.next = 17;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 17:
                session = _context144.sent;

                if (session) {
                  _context144.next = 20;
                  break;
                }

                return _context144.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 20:
                // invoice parameters
                txhash = invoice.txhash, blocknumber = invoice.blocknumber, currencyuuid = invoice.currencyuuid, owner = invoice.owner, order = invoice.order, amount = invoice.amount, currency = invoice.currency; // read order and quote to get title

                _context144.next = 23;
                return this.getPretradeSchemeInfo(sessionuuid, currencyuuid);

              case 23:
                pretradescheme_info = _context144.sent;
                _context144.next = 26;
                return this.fetchTransaction(sessionuuid, walletuuid, pretradescheme_info.uuid, order)["catch"](function (err) {});

              case 26:
                orderobject = _context144.sent;
                _context144.next = 29;
                return this.fetchTransaction(sessionuuid, walletuuid, pretradescheme_info.uuid, orderobject.quote)["catch"](function (err) {});

              case 29:
                quoteobject = _context144.sent;
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

                return _context144.abrupt("return", this._saveClientSideJson(session, keys, invoice_list));

              case 38:
                return _context144.abrupt("return", invoice_list);

              case 39:
              case "end":
                return _context144.stop();
            }
          }
        }, _callee144, this);
      }));

      function saveInvoice(_x443, _x444, _x445) {
        return _saveInvoice.apply(this, arguments);
      }

      return saveInvoice;
    }()
  }, {
    key: "readPaymentNotices",
    value: function () {
      var _readPaymentNotices = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee145(sessionuuid, walletuuid) {
        var global, _apicontrollers, session, keys, paymentnotice_list;

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
                if (!walletuuid) {
                  keys = ['myquote', 'paymentnotices']; // shared keys
                } else {
                  console.log('WARNING: walletuuid specific case not implemented!!!');
                  keys = ['myquote', 'paymentnotices']; // shared keys, otherwise we could look in wallet
                  // with mvcmodule.getFromWallet
                } //let paymentnotice_list = await _apicontrollers.getLocalJsonLeaf(session, keys, true);


                _context145.next = 12;
                return this._readClientSideJson(session, keys);

              case 12:
                paymentnotice_list = _context145.sent;
                if (!paymentnotice_list) paymentnotice_list = [];
                return _context145.abrupt("return", paymentnotice_list);

              case 15:
              case "end":
                return _context145.stop();
            }
          }
        }, _callee145, this);
      }));

      function readPaymentNotices(_x446, _x447) {
        return _readPaymentNotices.apply(this, arguments);
      }

      return readPaymentNotices;
    }()
  }, {
    key: "fetchPaymentNotices",
    value: function () {
      var _fetchPaymentNotices = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee146(sessionuuid, walletuuid, currencyuuid, invoicehash) {
        var global, _apicontrollers, session, wallet, currency, invoice, vendor_address, transactions, paymentnoticelist, i, tx, dataobject;

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
                _context146.next = 11;
                return _apicontrollers.getWalletFromUUID(session, walletuuid)["catch"](function (err) {});

              case 11:
                wallet = _context146.sent;
                _context146.next = 14;
                return this.getCurrencyFromUUID(sessionuuid, currencyuuid);

              case 14:
                currency = _context146.sent;

                if (currency) {
                  _context146.next = 17;
                  break;
                }

                return _context146.abrupt("return", Promise.reject('could not find currency ' + currencyuuid));

              case 17:
                if (currency.pretrade_explorer_url) {
                  _context146.next = 19;
                  break;
                }

                return _context146.abrupt("return", Promise.reject('no explorer for currency ' + currencyuuid));

              case 19:
                _context146.next = 21;
                return this.fetchCurrencyTransaction(sessionuuid, walletuuid, currencyuuid, invoicehash);

              case 21:
                invoice = _context146.sent;
                vendor_address = invoice.owner; // use explorer to fetch transactions for vendor's address

                _context146.next = 25;
                return this._getAddressPretradeTransactions(session, wallet, currency, vendor_address);

              case 25:
                transactions = _context146.sent;
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

                return _context146.abrupt("return", paymentnoticelist);

              case 29:
              case "end":
                return _context146.stop();
            }
          }
        }, _callee146, this);
      }));

      function fetchPaymentNotices(_x448, _x449, _x450, _x451) {
        return _fetchPaymentNotices.apply(this, arguments);
      }

      return fetchPaymentNotices;
    }()
  }, {
    key: "savePaymentNotice",
    value: function () {
      var _savePaymentNotice = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee147(sessionuuid, walletuuid, paymentnotice) {
        var global, _apicontrollers, paymentnotice_list, bInList, i, session, txhash, blocknumber, currencyuuid, owner, invoice, amount, currency, pretradescheme_info, invoiceobject, orderobject, quoteobject, title, keys, localjson;

        return _regeneratorRuntime().wrap(function _callee147$(_context147) {
          while (1) {
            switch (_context147.prev = _context147.next) {
              case 0:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context147.next = 4;
                return this.readPaymentNotices(sessionuuid, walletuuid);

              case 4:
                paymentnotice_list = _context147.sent;
                bInList = false;
                i = 0;

              case 7:
                if (!(i < paymentnotice_list.length)) {
                  _context147.next = 14;
                  break;
                }

                if (!(paymentnotice_list[i].txhash == paymentnotice.txhash)) {
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
                  _context147.next = 41;
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
                // paymentnotice parameters
                txhash = paymentnotice.txhash, blocknumber = paymentnotice.blocknumber, currencyuuid = paymentnotice.currencyuuid, owner = paymentnotice.owner, invoice = paymentnotice.invoice, amount = paymentnotice.amount, currency = paymentnotice.currency; // read invoice, order and quote to get title

                _context147.next = 23;
                return this.getPretradeSchemeInfo(sessionuuid, currencyuuid);

              case 23:
                pretradescheme_info = _context147.sent;
                _context147.next = 26;
                return this.fetchTransaction(sessionuuid, walletuuid, pretradescheme_info.uuid, invoice)["catch"](function (err) {});

              case 26:
                invoiceobject = _context147.sent;
                _context147.next = 29;
                return this.fetchTransaction(sessionuuid, walletuuid, pretradescheme_info.uuid, invoiceobject.order)["catch"](function (err) {});

              case 29:
                orderobject = _context147.sent;
                _context147.next = 32;
                return this.fetchTransaction(sessionuuid, walletuuid, pretradescheme_info.uuid, orderobject.quote)["catch"](function (err) {});

              case 32:
                quoteobject = _context147.sent;
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

                return _context147.abrupt("return", this._saveClientSideJson(session, keys, paymentnotice_list));

              case 41:
                return _context147.abrupt("return", paymentnotice_list);

              case 42:
              case "end":
                return _context147.stop();
            }
          }
        }, _callee147, this);
      }));

      function savePaymentNotice(_x452, _x453, _x454) {
        return _savePaymentNotice.apply(this, arguments);
      }

      return savePaymentNotice;
    }()
  }, {
    key: "_saveTransactionObject",
    value: function () {
      var _saveTransactionObject2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee148(sessionuuid, walletuuid, tx) {
        return _regeneratorRuntime().wrap(function _callee148$(_context148) {
          while (1) {
            switch (_context148.prev = _context148.next) {
              case 0:
                if (tx) {
                  _context148.next = 2;
                  break;
                }

                return _context148.abrupt("return");

              case 2:
                _context148.t0 = tx.type;
                _context148.next = _context148.t0 === 'bounty' ? 5 : _context148.t0 === 'claim' ? 6 : _context148.t0 === 'quote' ? 7 : _context148.t0 === 'order' ? 8 : _context148.t0 === 'invoice' ? 9 : _context148.t0 === 'paymentnotice' ? 10 : 11;
                break;

              case 5:
                return _context148.abrupt("return", this.saveBounty(sessionuuid, walletuuid, tx));

              case 6:
                return _context148.abrupt("return", this.saveClaim(sessionuuid, walletuuid, tx));

              case 7:
                return _context148.abrupt("return", this.saveQuote(sessionuuid, walletuuid, tx));

              case 8:
                return _context148.abrupt("return", this.saveOrder(sessionuuid, walletuuid, tx));

              case 9:
                return _context148.abrupt("return", this.saveInvoice(sessionuuid, walletuuid, tx));

              case 10:
                return _context148.abrupt("return", this.savePaymentNotice(sessionuuid, walletuuid, tx));

              case 11:
                return _context148.abrupt("break", 12);

              case 12:
              case "end":
                return _context148.stop();
            }
          }
        }, _callee148, this);
      }));

      function _saveTransactionObject(_x455, _x456, _x457) {
        return _saveTransactionObject2.apply(this, arguments);
      }

      return _saveTransactionObject;
    }() //
    // uniswap
    //

  }, {
    key: "getPriceForCreditUnits",
    value: function () {
      var _getPriceForCreditUnits = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee149(sessionuuid, currencyuuid, creditunits) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee149$(_context149) {
          while (1) {
            switch (_context149.prev = _context149.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context149.abrupt("return", mvccurrencies.getPriceForCreditUnits(sessionuuid, currencyuuid, creditunits));

              case 3:
              case "end":
                return _context149.stop();
            }
          }
        }, _callee149, this);
      }));

      function getPriceForCreditUnits(_x458, _x459, _x460) {
        return _getPriceForCreditUnits.apply(this, arguments);
      }

      return getPriceForCreditUnits;
    }()
  }, {
    key: "buyCreditUnits",
    value: function () {
      var _buyCreditUnits = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee150(sessionuuid, walletuuid, carduuid, currencyuuid, creditunits) {
        var feelevel,
            global,
            mvccurrencies,
            _args150 = arguments;
        return _regeneratorRuntime().wrap(function _callee150$(_context150) {
          while (1) {
            switch (_context150.prev = _context150.next) {
              case 0:
                feelevel = _args150.length > 5 && _args150[5] !== undefined ? _args150[5] : null;
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context150.abrupt("return", mvccurrencies.buyCreditUnits(sessionuuid, walletuuid, carduuid, currencyuuid, creditunits, feelevel));

              case 4:
              case "end":
                return _context150.stop();
            }
          }
        }, _callee150, this);
      }));

      function buyCreditUnits(_x461, _x462, _x463, _x464, _x465) {
        return _buyCreditUnits.apply(this, arguments);
      }

      return buyCreditUnits;
    }() //
    // utils
    //

  }, {
    key: "formatTokenAmount",
    value: function formatTokenAmount(amount, token, options) {
      var global = this.global;
      var mvcclientwalletmodule = global.getModuleObject('mvc-client-wallet');
      return mvcclientwalletmodule.formatTokenAmount(amount, token, options);
    }
  }, {
    key: "formatTokenAmountAsync",
    value: function () {
      var _formatTokenAmountAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee151(sessionuuid, amount, token, options) {
        var global, _apicontrollers, session, decimals, symbol, tokenamountdec, tokenamountstring, currencyamountstring;

        return _regeneratorRuntime().wrap(function _callee151$(_context151) {
          while (1) {
            switch (_context151.prev = _context151.next) {
              case 0:
                if (amount) {
                  _context151.next = 2;
                  break;
                }

                return _context151.abrupt("return");

              case 2:
                if (sessionuuid) {
                  _context151.next = 4;
                  break;
                }

                return _context151.abrupt("return", Promise.reject('session uuid is undefined'));

              case 4:
                global = this.global;
                _apicontrollers = this._getClientAPI();
                _context151.next = 8;
                return _apicontrollers.getSessionObject(sessionuuid);

              case 8:
                session = _context151.sent;

                if (session) {
                  _context151.next = 11;
                  break;
                }

                return _context151.abrupt("return", Promise.reject('could not find session ' + sessionuuid));

              case 11:
                decimals = token.decimals;
                symbol = token.symbol;
                _context151.next = 15;
                return this._createDecimalAmountFromTokenAmount(session, amount, decimals);

              case 15:
                tokenamountdec = _context151.sent;
                _context151.next = 18;
                return tokenamountdec.toString();

              case 18:
                tokenamountstring = _context151.sent;
                _context151.next = 21;
                return this._formatMonetaryAmountString(session, tokenamountstring, symbol, decimals, options);

              case 21:
                currencyamountstring = _context151.sent;
                return _context151.abrupt("return", currencyamountstring);

              case 23:
              case "end":
                return _context151.stop();
            }
          }
        }, _callee151, this);
      }));

      function formatTokenAmountAsync(_x466, _x467, _x468, _x469) {
        return _formatTokenAmountAsync.apply(this, arguments);
      }

      return formatTokenAmountAsync;
    }()
  }, {
    key: "getDecimalAmount",
    value: function () {
      var _getDecimalAmount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee152(sessionuuid, amount) {
        var decimals,
            global,
            mvccurrencies,
            _args152 = arguments;
        return _regeneratorRuntime().wrap(function _callee152$(_context152) {
          while (1) {
            switch (_context152.prev = _context152.next) {
              case 0:
                decimals = _args152.length > 2 && _args152[2] !== undefined ? _args152[2] : 18;
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context152.abrupt("return", mvccurrencies.getDecimalAmount(sessionuuid, amount, decimals));

              case 4:
              case "end":
                return _context152.stop();
            }
          }
        }, _callee152, this);
      }));

      function getDecimalAmount(_x470, _x471) {
        return _getDecimalAmount.apply(this, arguments);
      }

      return getDecimalAmount;
    }()
  }, {
    key: "getCurrencyAmount",
    value: function () {
      var _getCurrencyAmount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee153(sessionuuid, currencyuuid, amount) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee153$(_context153) {
          while (1) {
            switch (_context153.prev = _context153.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context153.abrupt("return", mvccurrencies.getCurrencyAmount(sessionuuid, currencyuuid, amount));

              case 3:
              case "end":
                return _context153.stop();
            }
          }
        }, _callee153, this);
      }));

      function getCurrencyAmount(_x472, _x473, _x474) {
        return _getCurrencyAmount.apply(this, arguments);
      }

      return getCurrencyAmount;
    }()
  }, {
    key: "formatCurrencyAmount",
    value: function () {
      var _formatCurrencyAmount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee154(sessionuuid, currencyuuid, currencyamount, options) {
        var global, mvccurrencies;
        return _regeneratorRuntime().wrap(function _callee154$(_context154) {
          while (1) {
            switch (_context154.prev = _context154.next) {
              case 0:
                global = this.global;
                mvccurrencies = global.getModuleObject('mvc-currencies');
                return _context154.abrupt("return", mvccurrencies.formatCurrencyAmount(sessionuuid, currencyuuid, currencyamount, options));

              case 3:
              case "end":
                return _context154.stop();
            }
          }
        }, _callee154, this);
      }));

      function formatCurrencyAmount(_x475, _x476, _x477, _x478) {
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