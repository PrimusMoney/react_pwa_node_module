"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Root = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _reactRouter = require("react-router");

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _sessionActions = require("@primusmoney/react_client_wallet/imports/view/actions/login/session-actions.js");

var _loginActions = require("@primusmoney/react_client_wallet/imports/view/actions/login/login-actions.js");

var _walletActions = require("@primusmoney/react_client_wallet/imports/view/actions/wallet/wallet-actions.js");

var _cardActions = require("@primusmoney/react_client_wallet/imports/view/actions/card/card-actions.js");

var _about = _interopRequireDefault(require("../about/about.js"));

var _home = _interopRequireDefault(require("../home/home.js"));

var _deeplinkScreen = _interopRequireDefault(require("../deeplinks/deeplink-screen.js"));

var _contactListScreen = _interopRequireDefault(require("../contact/contact-list-screen.js"));

var _contactHome = _interopRequireDefault(require("../contact/contact-home.js"));

var _currencyCardHome = _interopRequireDefault(require("../common/currency/currency-card-home.js"));

var _currencyCardListScreen = _interopRequireDefault(require("../common/currency/currency-card-list-screen.js"));

var _splash = _interopRequireDefault(require("../splash/splash.js"));

var _dataWipe = _interopRequireDefault(require("../login/data-wipe.js"));

var _logout3 = _interopRequireDefault(require("../login/logout.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var RouteHistory = /*#__PURE__*/function () {
  function RouteHistory(root) {
    _classCallCheck(this, RouteHistory);

    this.root = root;
  }

  _createClass(RouteHistory, [{
    key: "pop",
    value: function pop() {
      RouteHistory.todo.pop();
    }
  }, {
    key: "push",
    value: function push(path) {
      var last = this.last();
      if (RouteHistory.todo.length && RouteHistory.todo[0] == path) return;
      if (last == path) return; //RouteHistory.history.push(path);

      RouteHistory.todo.unshift(path); // last in last out

      this.setState();
    }
  }, {
    key: "record",
    value: function record(path) {
      console.log('route is being served ' + path);
      RouteHistory.history.push(path);
    }
  }, {
    key: "setState",
    value: function () {
      var _setState = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (RouteHistory.todo.length) this.root._setState({
                  targetpath: [RouteHistory.todo]
                });else this.root._setState({
                  targetpath: null
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setState() {
        return _setState.apply(this, arguments);
      }

      return setState;
    }()
  }, {
    key: "last",
    value: function last() {
      return RouteHistory.history.length ? RouteHistory.history[RouteHistory.history.length - 1] : null;
    }
  }, {
    key: "jumpto",
    value: function jumpto() {
      return RouteHistory.todo.length ? RouteHistory.todo[RouteHistory.todo.length - 1] : null;
    }
  }]);

  return RouteHistory;
}();

RouteHistory.history = [];
RouteHistory.todo = [];

var Root = /*#__PURE__*/function (_React$Component) {
  _inherits(Root, _React$Component);

  var _super = _createSuper(Root);

  function Root(props) {
    var _this;

    _classCallCheck(this, Root);

    _this = _super.call(this, props);
    _this.app = _this.props.app;
    _this.getMvcModuleObject = _this.app.getMvcModuleObject;
    _this.getMvcMyQuoteObject = _this.app.getMvcMyQuoteObject;
    _this.uuid = _this.app.guid(); // to do jumps

    _this.routehistory = new RouteHistory(_assertThisInitialized(_this));
    _this.closingwallet = false;
    _this.devicewalletuuid = null;
    _this.state = {
      loading: true,
      iSessionPending: false,
      isLoggedIn: false,
      hasFatalError: false,
      fatalError: ''
    };
    return _this;
  }

  _createClass(Root, [{
    key: "_setState",
    value: function () {
      var _setState2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(json) {
        var _this2 = this;

        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  _this2.setState(json, function (err, res) {
                    if (err) reject(err);else resolve(res);
                  });
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function _setState(_x) {
        return _setState2.apply(this, arguments);
      }

      return _setState;
    }() // post render commit phase

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      console.log('Root.componentDidUpdate called');
      var mvcmodule = this.getMvcModuleObject();

      if (!this.props.rootsessionuuid) {
        var state = this.state; // to fool react-scripts compiler

        state.isLoggedIn = false; // no session, get one

        if (!this.state.isSessionPending) this.props.doFetchBlankSession(mvcmodule);
      } else {
        // a session, check if it is still valid
        var now = Date.now();
        var lastcheck = this.props.lastLoggedInCheck ? this.props.lastLoggedInCheck : 0;
        if (this.props.isLoggedIn && !this.props.loggedInCheckPending && now - lastcheck > 60000) // 60 000 = 1 minute
          this.props.doCheckLoggedIn(mvcmodule, this.props.rootsessionuuid);
      }
    }
  }, {
    key: "_doFetchBlankSession",
    value: function () {
      var _doFetchBlankSession2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(mvcmodule, sessionuuid) {
        var _this3 = this;

        var result;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                result = new Promise(function (resolve, reject) {
                  _this3.props.doFetchBlankSession(mvcmodule, function (err, res) {
                    if (err) reject(err);else resolve(res);
                  });
                });
                return _context3.abrupt("return", result);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function _doFetchBlankSession(_x2, _x3) {
        return _doFetchBlankSession2.apply(this, arguments);
      }

      return _doFetchBlankSession;
    }()
  }, {
    key: "_doCheckSession",
    value: function () {
      var _doCheckSession2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(mvcmodule, sessionuuid) {
        var _this4 = this;

        var result;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                result = new Promise(function (resolve, reject) {
                  _this4.props.doCheckSession(mvcmodule, sessionuuid, function (err, res) {
                    if (err) reject(err);else resolve(res);
                  });
                });
                return _context4.abrupt("return", result);

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function _doCheckSession(_x4, _x5) {
        return _doCheckSession2.apply(this, arguments);
      }

      return _doCheckSession;
    }()
  }, {
    key: "_doCheckWalletLock",
    value: function () {
      var _doCheckWalletLock2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(mvcmodule, sessionuuid, walletuuid) {
        var _this5 = this;

        var result;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                result = new Promise(function (resolve, reject) {
                  _this5.props.doCheckWalletLock(mvcmodule, sessionuuid, walletuuid, function (err, res) {
                    if (err) reject(err);else resolve(res);
                  });
                });
                return _context5.abrupt("return", result);

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function _doCheckWalletLock(_x6, _x7, _x8) {
        return _doCheckWalletLock2.apply(this, arguments);
      }

      return _doCheckWalletLock;
    }()
  }, {
    key: "_doOpenWallet",
    value: function () {
      var _doOpenWallet2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(mvcmodule, sessionuuid, walletuuid, walletname, password) {
        var _this6 = this;

        var result;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                result = new Promise(function (resolve, reject) {
                  _this6.props.doOpenWallet(mvcmodule, sessionuuid, walletuuid, walletname, password, function (err, res) {
                    if (err) reject(err);else resolve(res);
                  });
                });
                return _context6.abrupt("return", result);

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function _doOpenWallet(_x9, _x10, _x11, _x12, _x13) {
        return _doOpenWallet2.apply(this, arguments);
      }

      return _doOpenWallet;
    }()
  }, {
    key: "_checkOnline",
    value: function () {
      var _checkOnline2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var mvcmyquote;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                mvcmyquote = this.getMvcMyQuoteObject();
                return _context7.abrupt("return", mvcmyquote.checkOnline());

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function _checkOnline() {
        return _checkOnline2.apply(this, arguments);
      }

      return _checkOnline;
    }()
  }, {
    key: "_checkWalletUnlocked",
    value: function () {
      var _checkWalletUnlocked2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var _this7 = this;

        var mvcmodule, rootsessionuuid, walletuuid, iswalletlocked, islocked;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                // used to re-synchronize redux with truth
                mvcmodule = this.getMvcModuleObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid;
                iswalletlocked = this.props.iswalletlocked;

                if (walletuuid) {
                  _context8.next = 6;
                  break;
                }

                return _context8.abrupt("return", false);

              case 6:
                if (!(this.closingwallet === true)) {
                  _context8.next = 8;
                  break;
                }

                return _context8.abrupt("return", false);

              case 8:
                if (!(iswalletlocked === false)) {
                  _context8.next = 21;
                  break;
                }

                _context8.next = 11;
                return this._doCheckWalletLock(mvcmodule, rootsessionuuid, walletuuid)["catch"](function (err) {
                  console.log('error in Root._checkWalletLock:' + err);

                  _this7.app.error(err);

                  _this7.props.doResetWallet();

                  return false;
                });

              case 11:
                islocked = _context8.sent;
                console.log('Root._checkWalletUnlocked islocked = ' + islocked);

                if (!(islocked !== false)) {
                  _context8.next = 18;
                  break;
                }

                this.props.doResetWallet();
                return _context8.abrupt("return", false);

              case 18:
                return _context8.abrupt("return", true);

              case 19:
                _context8.next = 23;
                break;

              case 21:
                this.props.doResetWallet();
                return _context8.abrupt("return", false);

              case 23:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function _checkWalletUnlocked() {
        return _checkWalletUnlocked2.apply(this, arguments);
      }

      return _checkWalletUnlocked;
    }()
  }, {
    key: "_resetWallet",
    value: function () {
      var _resetWallet2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                console.log('Root._resetWallet called');
                this.props.doResetWallet();

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function _resetWallet() {
        return _resetWallet2.apply(this, arguments);
      }

      return _resetWallet;
    }()
  }, {
    key: "_getDeviceWallet",
    value: function () {
      var _getDeviceWallet2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var mvcmyquote, rootsessionuuid, devicewllt;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                _context10.next = 4;
                return mvcmyquote.readSettings('devicewallet');

              case 4:
                devicewllt = _context10.sent;

                if (!(devicewllt && devicewllt.walletuuid)) {
                  _context10.next = 7;
                  break;
                }

                return _context10.abrupt("return", mvcmyquote.getWalletInfo(rootsessionuuid, devicewllt.walletuuid));

              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function _getDeviceWallet() {
        return _getDeviceWallet2.apply(this, arguments);
      }

      return _getDeviceWallet;
    }()
  }, {
    key: "_isDeviceWallet",
    value: function () {
      var _isDeviceWallet2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(walletuuid) {
        var mvcmyquote, rootsessionuuid, currentwalletuuid, devicewllt, _walletuuid;

        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                currentwalletuuid = this.props.currentwalletuuid;
                _context11.next = 5;
                return mvcmyquote.readSettings('devicewallet');

              case 5:
                devicewllt = _context11.sent;
                _walletuuid = walletuuid ? walletuuid : currentwalletuuid;

                if (!(devicewllt && devicewllt.walletuuid && _walletuuid === devicewllt.walletuuid)) {
                  _context11.next = 11;
                  break;
                }

                return _context11.abrupt("return", true);

              case 11:
                return _context11.abrupt("return", false);

              case 12:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function _isDeviceWallet(_x14) {
        return _isDeviceWallet2.apply(this, arguments);
      }

      return _isDeviceWallet;
    }()
  }, {
    key: "_openDeviceWalletPromise",
    value: function () {
      var _openDeviceWalletPromise2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
        var closed, mvcmodule, mvcmyquote, rootsessionuuid, walletuuid, walletname, password, devicewallet, devicewllt, localscheme, localschemeuuid;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (!(this.closingwallet === true && this.closedevicewalletpromise)) {
                  _context12.next = 6;
                  break;
                }

                _context12.next = 3;
                return this.closedevicewalletpromise;

              case 3:
                closed = _context12.sent;
                // reset closing elements
                this.closingwallet = false;
                this.closedevicewalletpromise = null;

              case 6:
                mvcmodule = this.getMvcModuleObject();
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletname = 'devicewallet';
                _context12.next = 12;
                return this._getDeviceWallet();

              case 12:
                devicewallet = _context12.sent;

                if (!(devicewallet && devicewallet.uuid)) {
                  _context12.next = 23;
                  break;
                }

                _context12.next = 16;
                return mvcmyquote.readSettings('devicewallet');

              case 16:
                devicewllt = _context12.sent;
                walletuuid = devicewllt.walletuuid;
                password = devicewllt.password;
                _context12.next = 21;
                return this._doOpenWallet(mvcmodule, rootsessionuuid, walletuuid, walletname, password)["catch"](function (err) {
                  console.log('error in Root._openDeviceWallet: ' + err);
                  throw err;
                });

              case 21:
                this.devicewalletuuid = walletuuid;
                return _context12.abrupt("return", devicewallet);

              case 23:
                // we generate a password
                password = this.app.guid(); // and create a wallet

                _context12.next = 26;
                return mvcmyquote.getDefaultLocalSchemeInfo(rootsessionuuid);

              case 26:
                localscheme = _context12.sent;
                localschemeuuid = localscheme.uuid;
                _context12.next = 30;
                return mvcmyquote.makeWallet(rootsessionuuid, walletname, localschemeuuid, password)["catch"](function (err) {
                  console.log('error in Root._openDeviceWallet: ' + err);
                });

              case 30:
                devicewallet = _context12.sent;

                if (devicewallet) {
                  _context12.next = 33;
                  break;
                }

                return _context12.abrupt("return", Promise.reject('could not create wallet for device'));

              case 33:
                walletuuid = devicewallet.uuid; // we save device wallet info in the settings

                devicewllt = {};
                devicewllt.walletuuid = walletuuid;
                devicewllt.password = password;
                _context12.next = 39;
                return mvcmyquote.putSettings('devicewallet', devicewllt);

              case 39:
                this.devicewalletuuid = walletuuid; // then open wallet

                _context12.next = 42;
                return this._doOpenWallet(mvcmodule, rootsessionuuid, walletuuid, walletname, password)["catch"](function (err) {
                  console.log('error in Root._openDeviceWallet: ' + err);
                  throw err;
                });

              case 42:
                return _context12.abrupt("return", devicewallet);

              case 43:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function _openDeviceWalletPromise() {
        return _openDeviceWalletPromise2.apply(this, arguments);
      }

      return _openDeviceWalletPromise;
    }()
  }, {
    key: "_openDeviceWallet",
    value: function () {
      var _openDeviceWallet2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                console.log('Root._openDeviceWallet called'); // to make _openDeviceWallet re-entrant, we store and return a single promise

                if (!(this.openingdevicewallet === true && this.opendevicewalletpromise)) {
                  _context13.next = 3;
                  break;
                }

                return _context13.abrupt("return", this.opendevicewalletpromise);

              case 3:
                this.openingdevicewallet = true;
                this.opendevicewalletpromise = this._openDeviceWalletPromise();
                return _context13.abrupt("return", this.opendevicewalletpromise);

              case 6:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function _openDeviceWallet() {
        return _openDeviceWallet2.apply(this, arguments);
      }

      return _openDeviceWallet;
    }()
  }, {
    key: "_closeDeviceWallet",
    value: function _closeDeviceWallet() {
      var _this8 = this;

      console.log('Root._closeDeviceWallet called');

      if (this.devicewalletuuid) {
        var _devicewalletuuid = this.devicewalletuuid;
        var rootsessionuuid = this.props.rootsessionuuid;
        var currentwalletuuid = this.props.currentwalletuuid;

        if (currentwalletuuid == _devicewalletuuid) {
          this.closingwallet = true;
          this.devicewalletuuid = null; // reset correspongin opening

          this.openingdevicewallet = false;
          this.opendevicewalletpromise = null;
          var mvcmyquote = this.getMvcMyQuoteObject();
          console.log('locking device wallet'); // we lock the wallet to avoid _checkWalletUnlocked
          // restoring the wallet in the state through the reducer
          // note: lockWallet is async but lock flag should be
          // set immediately

          this.closedevicewalletpromise = mvcmyquote.lockWallet(rootsessionuuid, currentwalletuuid).then(function () {
            _this8.props.doResetWallet();

            _this8.closingwallet = false;
            console.log('Root._closeDeviceWallet wallet is closed');
            return true;
          })["catch"](function (err) {
            console.log('error in Root._closeDeviceWallet ' + err);
            _this8.closingwallet = false;
            return true;
          });
        }
      }
    }
  }, {
    key: "_doOpenCard",
    value: function () {
      var _doOpenCard2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(mvcmodule, sessionuuid, walletuuid, carduuid) {
        var _this9 = this;

        var result;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                result = new Promise(function (resolve, reject) {
                  _this9.props.doOpenCard(mvcmodule, sessionuuid, walletuuid, carduuid, function (err, res) {
                    if (err) reject(err);else resolve(res);
                  });
                });
                return _context14.abrupt("return", result);

              case 2:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }));

      function _doOpenCard(_x15, _x16, _x17, _x18) {
        return _doOpenCard2.apply(this, arguments);
      }

      return _doOpenCard;
    }()
  }, {
    key: "_openCurrencyCard",
    value: function () {
      var _openCurrencyCard2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(currencyuuid) {
        var mvcmodule, mvcmyquote, rootsessionuuid, walletuuid, card, carduuid;
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                mvcmodule = this.getMvcModuleObject();
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid;

                if (walletuuid) {
                  _context15.next = 6;
                  break;
                }

                return _context15.abrupt("return");

              case 6:
                _context15.next = 8;
                return mvcmyquote.getCurrencyCard(rootsessionuuid, walletuuid, currencyuuid)["catch"](function (err) {
                  console.log('error in Root._openCurrencyCard: ' + err);
                });

              case 8:
                card = _context15.sent;

                if (card) {
                  _context15.next = 11;
                  break;
                }

                return _context15.abrupt("return", Promise.reject('could not find main card for currency ' + currencyuuid));

              case 11:
                // we open the card, this sets it as current card in redux
                carduuid = card.uuid;
                _context15.next = 14;
                return this._doOpenCard(mvcmodule, rootsessionuuid, walletuuid, carduuid)["catch"](function (err) {
                  console.log('error in Root._openCurrencyCard: ' + err);
                });

              case 14:
                return _context15.abrupt("return", card);

              case 15:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function _openCurrencyCard(_x19) {
        return _openCurrencyCard2.apply(this, arguments);
      }

      return _openCurrencyCard;
    }()
  }, {
    key: "_createCurrencyCard",
    value: function () {
      var _createCurrencyCard2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(currencyuuid, signingkey, options) {
        var mvcmodule, mvcmyquote, rootsessionuuid, walletuuid, card, validprivatekey, validaddress, carduuid;
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                console.log('Root._createCurrencyCard');

                if (currencyuuid) {
                  _context16.next = 3;
                  break;
                }

                return _context16.abrupt("return", Promise.reject('no currency uuid defined'));

              case 3:
                if (signingkey) {
                  _context16.next = 5;
                  break;
                }

                return _context16.abrupt("return", Promise.reject('no private key defined'));

              case 5:
                mvcmodule = this.getMvcModuleObject();
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid;
                _context16.next = 11;
                return mvcmyquote.isValidPrivateKey(rootsessionuuid, signingkey);

              case 11:
                validprivatekey = _context16.sent;

                if (!validprivatekey) {
                  _context16.next = 18;
                  break;
                }

                _context16.next = 15;
                return mvcmyquote.createCurrencyCard(rootsessionuuid, walletuuid, currencyuuid, signingkey)["catch"](function (err) {
                  console.log('error in Root._createCurrencyCard: ' + err);
                });

              case 15:
                card = _context16.sent;
                _context16.next = 26;
                break;

              case 18:
                if (!(options && options.allow_readonly === true)) {
                  _context16.next = 26;
                  break;
                }

                _context16.next = 21;
                return mvcmyquote.isValidAddress(rootsessionuuid, signingkey);

              case 21:
                validaddress = _context16.sent;

                if (!validaddress) {
                  _context16.next = 26;
                  break;
                }

                _context16.next = 25;
                return mvcmyquote.createReadOnlyCurrencyCard(rootsessionuuid, walletuuid, currencyuuid, signingkey)["catch"](function (err) {
                  console.log('error in Root._createCurrencyCard: ' + err);
                });

              case 25:
                card = _context16.sent;

              case 26:
                if (card) {
                  _context16.next = 29;
                  break;
                }

                this.app.alert('Could not create card from private key or address');
                return _context16.abrupt("return");

              case 29:
                if (!(options && options.maincard === true)) {
                  _context16.next = 32;
                  break;
                }

                _context16.next = 32;
                return mvcmyquote.setCurrencyCard(rootsessionuuid, walletuuid, currencyuuid, card.uuid)["catch"](function (err) {
                  console.log('error in Root._createCurrencyCard: ' + err);
                });

              case 32:
                // we open the card, this sets it as current card in redux
                carduuid = card.uuid;
                _context16.next = 35;
                return this._doOpenCard(mvcmodule, rootsessionuuid, walletuuid, carduuid)["catch"](function (err) {
                  console.log('error in Root._createCurrencyCard: ' + err);
                });

              case 35:
                return _context16.abrupt("return", card);

              case 36:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function _createCurrencyCard(_x20, _x21, _x22) {
        return _createCurrencyCard2.apply(this, arguments);
      }

      return _createCurrencyCard;
    }()
  }, {
    key: "_getCurrencyFeeLevel",
    value: function () {
      var _getCurrencyFeeLevel2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(currencyuuid) {
        var boot_webapp, mvcmyquote, rootsessionuuid, walletuuid, schemeinfo, schemesoverload, i;
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                boot_webapp = this.app.boot_webapp;

                if (!boot_webapp.schemes) {
                  _context17.next = 17;
                  break;
                }

                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid;
                _context17.next = 7;
                return mvcmyquote.getCurrencyScheme(rootsessionuuid, walletuuid, currencyuuid)["catch"](function (err) {
                  console.log('error in Root._getCurrencyFeeLevel: ' + err);
                });

              case 7:
                schemeinfo = _context17.sent;

                if (!schemeinfo) {
                  _context17.next = 17;
                  break;
                }

                schemesoverload = Object.values(boot_webapp.schemes);
                i = 0;

              case 11:
                if (!(i < schemesoverload.length)) {
                  _context17.next = 17;
                  break;
                }

                if (!(schemesoverload[i].uuid == schemeinfo.uuid)) {
                  _context17.next = 14;
                  break;
                }

                return _context17.abrupt("return", schemesoverload[i].ethnodeserver ? schemesoverload[i].ethnodeserver.feelevel : null);

              case 14:
                i++;
                _context17.next = 11;
                break;

              case 17:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function _getCurrencyFeeLevel(_x23) {
        return _getCurrencyFeeLevel2.apply(this, arguments);
      }

      return _getCurrencyFeeLevel;
    }()
  }, {
    key: "_createLocalCard",
    value: function () {
      var _createLocalCard2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(web3providerurl, signingkey) {
        var mvcmodule, mvcmyquote, rootsessionuuid, walletuuid, card, carduuid;
        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                console.log('Root._createLocalCard');

                if (web3providerurl) {
                  _context18.next = 3;
                  break;
                }

                return _context18.abrupt("return", Promise.reject('no web3 provider url defined'));

              case 3:
                if (signingkey) {
                  _context18.next = 5;
                  break;
                }

                return _context18.abrupt("return", Promise.reject('no private key defined'));

              case 5:
                mvcmodule = this.getMvcModuleObject();
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid;
                _context18.next = 11;
                return mvcmyquote.createCard(rootsessionuuid, walletuuid, web3providerurl, signingkey)["catch"](function (err) {
                  console.log('error in Root._createLocalCard: ' + err);
                });

              case 11:
                card = _context18.sent;

                if (card) {
                  _context18.next = 15;
                  break;
                }

                this.app.alert('Could not create card from private key');
                return _context18.abrupt("return");

              case 15:
                // we open the card, this sets it as current card in redux
                carduuid = card.uuid;
                _context18.next = 18;
                return this._doOpenCard(mvcmodule, rootsessionuuid, walletuuid, carduuid)["catch"](function (err) {
                  console.log('error in Root._createLocalCard: ' + err);
                });

              case 18:
                return _context18.abrupt("return", card);

              case 19:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function _createLocalCard(_x24, _x25) {
        return _createLocalCard2.apply(this, arguments);
      }

      return _createLocalCard;
    }()
  }, {
    key: "_openLocalCard",
    value: function () {
      var _openLocalCard2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(schemeuuid, address) {
        var mvcmodule, mvcmyquote, rootsessionuuid, walletuuid, card;
        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                mvcmodule = this.getMvcModuleObject();
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid;

                if (walletuuid) {
                  _context19.next = 6;
                  break;
                }

                return _context19.abrupt("return");

              case 6:
                _context19.next = 8;
                return mvcmyquote.getCardInfoFromAddressOnScheme(rootsessionuuid, walletuuid, schemeuuid, address);

              case 8:
                card = _context19.sent;

                if (card) {
                  _context19.next = 11;
                  break;
                }

                return _context19.abrupt("return", Promise.reject('could not find curency card for address ' + address));

              case 11:
                _context19.next = 13;
                return this._doOpenCard(mvcmodule, rootsessionuuid, walletuuid, card.uuid)["catch"](function (err) {
                  console.log('error in Root._openLocalCard: ' + err);
                });

              case 13:
                return _context19.abrupt("return", card);

              case 14:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function _openLocalCard(_x26, _x27) {
        return _openLocalCard2.apply(this, arguments);
      }

      return _openLocalCard;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this10 = this;

      console.log('Root.componentDidMount called');
      var mvcmodule = this.getMvcModuleObject();
      var mvcmyquote = this.app.getMvcMyQuoteObject();
      var rootsessionuuid = this.props.rootsessionuuid; // register to app

      this.app.setVariable('Root', this);
      mvcmyquote.registerEventListener('on_refreshPage', this.uuid, this.onRefreshPage.bind(this)); // check we have a valid rootsession

      var sessionpromise;

      if (rootsessionuuid) {
        sessionpromise = this._doCheckSession(mvcmodule, rootsessionuuid)["catch"](function (err) {
          if (err === 'ERR_SESSION_NOT_FOUND') return _this10._doFetchBlankSession(mvcmodule);
          throw err;
        });
      } else {
        sessionpromise = this._doFetchBlankSession(mvcmodule);
      }

      sessionpromise.then(function () {
        return _this10.checkNavigationState();
      })["catch"](function (err) {
        console.log('error in Root.componentDidMount: ' + err);
      });
    }
  }, {
    key: "checkNavigationState",
    value: function () {
      var _checkNavigationState = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
        var mvcmyquote, rootsessionuuid, app_start_conditions, start_url;
        return _regeneratorRuntime().wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                app_start_conditions = this.app.getVariable('start_conditions');

                if (!(app_start_conditions && app_start_conditions.treated != true)) {
                  _context20.next = 8;
                  break;
                }

                start_url = app_start_conditions.url;
                _context20.next = 7;
                return this.app.gotoUrl(start_url)["catch"](function (err) {
                  console.log('error in Root.checkNavigationState: ' + err);
                });

              case 7:
                app_start_conditions.treated = true;

              case 8:
                this.setState({
                  loading: false
                });
                return _context20.abrupt("return");

              case 10:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function checkNavigationState() {
        return _checkNavigationState.apply(this, arguments);
      }

      return checkNavigationState;
    }() // end of life

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log('Root.componentWillUnmount called');
      var mvcmyquote = this.app.getMvcMyQuoteObject();
      mvcmyquote.unregisterEventListener('on_refreshPage', this.uuid); // unregister from app

      this.app.setVariable('Root', null);
    }
  }, {
    key: "onRefreshPage",
    value: function () {
      var _onRefreshPage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
        var lastrefresh;
        return _regeneratorRuntime().wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                console.log('Root.onRefreshPage called');
                lastrefresh = Date.now();
                _context21.next = 4;
                return this._setState({
                  lastrefresh: lastrefresh
                });

              case 4:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function onRefreshPage() {
        return _onRefreshPage.apply(this, arguments);
      }

      return onRefreshPage;
    }()
  }, {
    key: "onResetSession",
    value: function () {
      var _onResetSession = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
        return _regeneratorRuntime().wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                console.log('Root.onResetSession pressed!');
                this.setState({
                  hasFatalError: false
                });
                this.props.doResetSession();

              case 3:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function onResetSession() {
        return _onResetSession.apply(this, arguments);
      }

      return onResetSession;
    }() // rendering

  }, {
    key: "onRouteSwitch",
    value: function onRouteSwitch(path) {
      this.routehistory.record(path);
    }
  }, {
    key: "renderRoute",
    value: function renderRoute() {
      var _this11 = this;

      if (this.state.loading) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "RootContainer"
        }, /*#__PURE__*/_react["default"].createElement(_splash["default"], {
          app: this.app
        }));
      }

      var jumpto = this.routehistory.jumpto(); //let jumpto = this.state.targetpath;

      if (jumpto) {
        this.routehistory.pop();
        return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Redirect, {
          to: jumpto
        });
      } else {
        return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch, null, Root.routes.map(function (route, index) {
          return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
            exact: true,
            path: route.path,
            key: route.name,
            render: function render(props) {
              return /*#__PURE__*/_react["default"].createElement(route.screen, _extends({}, props, {
                app: _this11.app,
                path: _this11.onRouteSwitch(route.path)
              }));
            }
          });
        }));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isSessionPending = _this$state.isSessionPending,
          hasFatalError = _this$state.hasFatalError;

      if (isSessionPending) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "RootContainer"
        }, /*#__PURE__*/_react["default"].createElement("div", null, "creating session..."));
      } else {
        if (!hasFatalError) {
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "RootContainer"
          }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.HashRouter, null, this.renderRoute()));
        } else {
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "RootContainer"
          }, /*#__PURE__*/_react["default"].createElement("div", null, "Fatal error"));
        }
      }
    } // navigation

  }, {
    key: "_getRoutePathFromName",
    value: function _getRoutePathFromName(route) {
      for (var i = 0; i < Root.routes.length; i++) {
        var item = Root.routes[i];
        if (item.name == route) return item.path;
      }
    }
  }, {
    key: "_gotoRoute",
    value: function () {
      var _gotoRoute2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(route, params) {
        var dataobj, newparams, path;
        return _regeneratorRuntime().wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                if (!(route == 'dataobject')) {
                  _context23.next = 11;
                  break;
                }

                _context23.next = 3;
                return this._getDataObjectFromCallParams(params);

              case 3:
                dataobj = _context23.sent;

                if (!dataobj) {
                  _context23.next = 10;
                  break;
                }

                newparams = {
                  dataobject: dataobj,
                  action: params.action
                };
                _context23.next = 8;
                return this.app.gotoMyQuotePage(newparams);

              case 8:
                _context23.next = 11;
                break;

              case 10:
                console.log('Root._gotoRoute could not find data object for txhash ' + params.txhash + ' currency ' + params.currencyuuid);

              case 11:
                path = this._getRoutePathFromName(route);
                console.log('Root.gotoRoute called asking to jump to ' + path);

                if (!path) {
                  _context23.next = 17;
                  break;
                }

                this.routehistory.push(path);
                _context23.next = 17;
                return this.app.refreshPage();

              case 17:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function _gotoRoute(_x28, _x29) {
        return _gotoRoute2.apply(this, arguments);
      }

      return _gotoRoute;
    }()
  }, {
    key: "_getDataObjectFromComposedHash",
    value: function () {
      var _getDataObjectFromComposedHash2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(txhash, currencyuuid) {
        var dataobject, arr, stub, minteraddress, tokenid, deed, index, clause;
        return _regeneratorRuntime().wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                arr = txhash ? txhash.split('-') : [];
                stub = arr[0];

                if (!(stub == 'dd')) {
                  _context24.next = 11;
                  break;
                }

                minteraddress = arr[1];
                tokenid = arr[2];
                _context24.next = 7;
                return this._getDeedDataObjectFromMinter(currencyuuid, minteraddress, tokenid);

              case 7:
                deed = _context24.sent;

                if (arr.length < 4) {
                  dataobject = deed;
                } else {
                  index = arr[3];

                  if (deed.clauses && deed.clauses.length >= index) {
                    clause = deed.clauses[index];
                    dataobject = clause;
                  } else {
                    // we could not make sense of this hash, stick to the deed
                    dataobject = deed;
                  }
                }

                _context24.next = 12;
                break;

              case 11:
                return _context24.abrupt("return", Promise.reject('do not recognize transaction hash stub: ' + stub));

              case 12:
                return _context24.abrupt("return", dataobject);

              case 13:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function _getDataObjectFromComposedHash(_x30, _x31) {
        return _getDataObjectFromComposedHash2.apply(this, arguments);
      }

      return _getDataObjectFromComposedHash;
    }()
  }, {
    key: "_getDataObjectFromUrlParams",
    value: function () {
      var _getDataObjectFromUrlParams2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(urlParams) {
        var dataobject, currencyuuid, txhash, card, pos, tokenid;
        return _regeneratorRuntime().wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                if (urlParams) {
                  _context25.next = 2;
                  break;
                }

                return _context25.abrupt("return");

              case 2:
                currencyuuid = urlParams.get('ccy');
                txhash = urlParams.get('tx');
                card = urlParams.get('card');

                if (!txhash) {
                  _context25.next = 18;
                  break;
                }

                pos = txhash ? txhash.indexOf('-') : -1;

                if (!(pos == -1)) {
                  _context25.next = 13;
                  break;
                }

                _context25.next = 10;
                return this.app.getMyQuoteDataObject(txhash, currencyuuid);

              case 10:
                dataobject = _context25.sent;
                _context25.next = 16;
                break;

              case 13:
                _context25.next = 15;
                return this._getDataObjectFromComposedHash(txhash, currencyuuid);

              case 15:
                dataobject = _context25.sent;

              case 16:
                _context25.next = 24;
                break;

              case 18:
                if (!card) {
                  _context25.next = 24;
                  break;
                }

                tokenid = urlParams.get('tokenid');

                if (!tokenid) {
                  _context25.next = 24;
                  break;
                }

                _context25.next = 23;
                return this._getDeedDataObjectFromCard(currencyuuid, card, tokenid);

              case 23:
                dataobject = _context25.sent;

              case 24:
                return _context25.abrupt("return", dataobject);

              case 25:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function _getDataObjectFromUrlParams(_x32) {
        return _getDataObjectFromUrlParams2.apply(this, arguments);
      }

      return _getDataObjectFromUrlParams;
    }()
  }, {
    key: "_getDataObjectFromCallParams",
    value: function () {
      var _getDataObjectFromCallParams2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(params) {
        var dataobject, currencyuuid, txhash, pos;
        return _regeneratorRuntime().wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                currencyuuid = params.currencyuuid;
                txhash = params.txhash;
                pos = txhash ? txhash.indexOf('-') : -1; // TODO: look if there is a '-' in the transaction hash

                if (!(pos == -1)) {
                  _context26.next = 9;
                  break;
                }

                _context26.next = 6;
                return this.app.getMyQuoteDataObject(txhash, currencyuuid);

              case 6:
                dataobject = _context26.sent;
                _context26.next = 12;
                break;

              case 9:
                _context26.next = 11;
                return this._getDataObjectFromComposedHash(txhash, currencyuuid);

              case 11:
                dataobject = _context26.sent;

              case 12:
                return _context26.abrupt("return", dataobject);

              case 13:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function _getDataObjectFromCallParams(_x33) {
        return _getDataObjectFromCallParams2.apply(this, arguments);
      }

      return _getDataObjectFromCallParams;
    }()
  }, {
    key: "_getDataObjectRoutes",
    value: function _getDataObjectRoutes() {
      return ['quote', 'order', 'invoice', 'paymentnotice', 'bounty', 'claim', 'deed', 'clause'];
    }
  }, {
    key: "_gotoUrl",
    value: function () {
      var _gotoUrl2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(url) {
        var cleanurl, URL, queryobject, dataobject_routes, sessionuuid, route, params, urlParams, dataobject, querystring, app_start_conditions, _params;

        return _regeneratorRuntime().wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                _context27.next = 2;
                return this.app.getCleanUrl();

              case 2:
                cleanurl = _context27.sent;

                if (!(url && url.startsWith(cleanurl) !== true)) {
                  _context27.next = 6;
                  break;
                }

                // this is a jump to another site
                window.location.href = url;
                return _context27.abrupt("return");

              case 6:
                // look if a transaction is defined in the url
                URL = require("url");
                queryobject = url ? URL.parse(url, true).query : {};
                dataobject_routes = this._getDataObjectRoutes(); // reconnecting to a session

                sessionuuid = queryobject.sessionuuid;

                if (!sessionuuid) {
                  _context27.next = 14;
                  break;
                }

                // we need to reconnect to a pre-existing session
                // (e.g. coming back from oauth2 authentication)
                this.setState({
                  loading: false
                });
                this.app.gotoRoute('login');
                return _context27.abrupt("return");

              case 14:
                // following a route
                route = queryobject.route;

                if (!(route && dataobject_routes.includes(route) !== true)) {
                  _context27.next = 19;
                  break;
                }

                // a route indicates the way
                params = Object.assign({}, queryobject);
                this.app.gotoRoute(route, params);
                return _context27.abrupt("return");

              case 19:
                if (!url) {
                  _context27.next = 27;
                  break;
                }

                querystring = url.indexOf('?') > 0 ? url.slice(url.indexOf('?')) : url;
                urlParams = new URLSearchParams(querystring);
                _context27.next = 24;
                return this._getDataObjectFromUrlParams(urlParams);

              case 24:
                dataobject = _context27.sent;
                _context27.next = 32;
                break;

              case 27:
                // initial url
                app_start_conditions = this.app.getVariable('start_conditions');
                urlParams = app_start_conditions.urlParams;
                _context27.next = 31;
                return this.app.getStartDataObject();

              case 31:
                dataobject = _context27.sent;

              case 32:
                if (!dataobject) {
                  _context27.next = 84;
                  break;
                }

                _params = {
                  dataobject: dataobject
                };
                _context27.t0 = dataobject.type;
                _context27.next = _context27.t0 === 'bounty' ? 37 : _context27.t0 === 'claim' ? 42 : _context27.t0 === 'deed' ? 47 : _context27.t0 === 'clause' ? 54 : _context27.t0 === 'quote' ? 62 : _context27.t0 === 'order' ? 67 : _context27.t0 === 'invoice' ? 72 : _context27.t0 === 'paymentnotice' ? 77 : 82;
                break;

              case 37:
                _params.action = 'create';
                _params.txhash = dataobject.txhash;
                _params.currencyuuid = dataobject.currencyuuid;
                this.app.gotoRoute('claim', _params);
                return _context27.abrupt("break", 83);

              case 42:
                _params.action = 'view';
                _params.txhash = dataobject.txhash;
                _params.currencyuuid = dataobject.currencyuuid;
                this.app.gotoRoute('claim', _params);
                return _context27.abrupt("break", 83);

              case 47:
                _params.action = 'view';
                _params.txhash = dataobject.txhash;
                _params.currencyuuid = dataobject.currencyuuid;
                _params.address = dataobject.minter;
                _params.tokenid = dataobject.tokenid;
                this.app.gotoRoute('deed', _params);
                return _context27.abrupt("break", 83);

              case 54:
                _params.action = 'view';
                _params.txhash = dataobject.txhash;
                _params.currencyuuid = dataobject.currencyuuid;
                _params.address = dataobject.minter;
                _params.tokenid = dataobject.tokenid;
                _params.index = dataobject.index;
                this.app.gotoRoute('clause', _params);
                return _context27.abrupt("break", 83);

              case 62:
                _params.action = 'view';
                _params.txhash = dataobject.txhash;
                _params.currencyuuid = dataobject.currencyuuid;
                this.app.gotoRoute('quote', _params);
                return _context27.abrupt("break", 83);

              case 67:
                _params.action = 'view';
                _params.txhash = dataobject.txhash;
                _params.currencyuuid = dataobject.currencyuuid;
                this.app.gotoRoute('order', _params);
                return _context27.abrupt("break", 83);

              case 72:
                _params.action = 'view';
                _params.txhash = dataobject.txhash;
                _params.currencyuuid = dataobject.currencyuuid;
                this.app.gotoRoute('invoice', _params);
                return _context27.abrupt("break", 83);

              case 77:
                _params.action = 'view';
                _params.txhash = dataobject.txhash;
                _params.currencyuuid = dataobject.currencyuuid;
                this.app.gotoRoute('paymentnotice', _params);
                return _context27.abrupt("break", 83);

              case 82:
                return _context27.abrupt("break", 83);

              case 83:
                return _context27.abrupt("return");

              case 84:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function _gotoUrl(_x34) {
        return _gotoUrl2.apply(this, arguments);
      }

      return _gotoUrl;
    }()
  }, {
    key: "_gotoMyQuotePage",
    value: function () {
      var _gotoMyQuotePage2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(params) {
        var dataobj, type;
        return _regeneratorRuntime().wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                if (params) {
                  _context28.next = 2;
                  break;
                }

                return _context28.abrupt("return");

              case 2:
                // we define the route according to the quote-order process
                dataobj = params.dataobject;

                if (dataobj) {
                  _context28.next = 5;
                  break;
                }

                return _context28.abrupt("return");

              case 5:
                type = dataobj.type;
                params.txhash = dataobj.txhash ? dataobj.txhash : params.txhash;
                _context28.t0 = type;
                _context28.next = _context28.t0 === 'bounty' ? 10 : _context28.t0 === 'claim' ? 13 : _context28.t0 === 'quote' ? 16 : _context28.t0 === 'order' ? 19 : _context28.t0 === 'invoice' ? 22 : _context28.t0 === 'paymentnotice' ? 25 : 28;
                break;

              case 10:
                params.route = 'bounty';
                params.action = params.action ? params.action : dataobj.target === 'view' ? 'view' : 'create';
                return _context28.abrupt("return", this.app.gotoRoute('bounty', params));

              case 13:
                params.route = 'claim';
                params.action = params.action ? params.action : dataobj.target === 'view' ? 'view' : 'create';
                return _context28.abrupt("return", this.app.gotoRoute('claim', params));

              case 16:
                params.route = 'quote';
                params.action = params.action ? params.action : dataobj.target === 'view' ? 'view' : 'create';
                return _context28.abrupt("return", this.app.gotoRoute('quote', params));

              case 19:
                params.route = 'order';
                params.action = params.action ? params.action : dataobj.target === 'view' ? 'view' : 'create';
                return _context28.abrupt("return", this.app.gotoRoute('order', params));

              case 22:
                params.route = 'invoice';
                params.action = params.action ? params.action : dataobj.target === 'view' ? 'view' : 'create';
                return _context28.abrupt("return", this.app.gotoRoute('invoice', params));

              case 25:
                params.route = 'paymentnotice';
                params.action = params.action ? params.action : dataobj.target === 'view' ? 'view' : 'create';
                return _context28.abrupt("return", this.app.gotoRoute('paymentnotice', params));

              case 28:
                params.route = type;
                return _context28.abrupt("return", this.app.gotoRoute(type, params));

              case 30:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      function _gotoMyQuotePage(_x35) {
        return _gotoMyQuotePage2.apply(this, arguments);
      }

      return _gotoMyQuotePage;
    }()
  }, {
    key: "_getMyQuoteDataObject",
    value: function () {
      var _getMyQuoteDataObject2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29(txhash, currencyuuid) {
        var mvcmyquote, rootsessionuuid, walletuuid, dataobject;
        return _regeneratorRuntime().wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid;

                if (!currencyuuid) {
                  _context29.next = 10;
                  break;
                }

                _context29.next = 6;
                return mvcmyquote.fetchCurrencyTransaction(rootsessionuuid, walletuuid, currencyuuid, txhash)["catch"](function (err) {
                  console.log('error in Root._getMyQuoteDataObject:' + err);
                });

              case 6:
                dataobject = _context29.sent;

                if (!dataobject) {
                  _context29.next = 10;
                  break;
                }

                // add transaction hash that is the accessor to object
                dataobject.txhash = txhash;
                return _context29.abrupt("return", dataobject);

              case 10:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));

      function _getMyQuoteDataObject(_x36, _x37) {
        return _getMyQuoteDataObject2.apply(this, arguments);
      }

      return _getMyQuoteDataObject;
    }()
  }, {
    key: "_getPlainQueryParameters",
    value: function _getPlainQueryParameters(query) {
      var _query = query;

      var URL = require("url");

      var _encodedurl;

      if (query.b64url) {
        try {
          _encodedurl = query.b64url;

          var _url = this.app.decodebase64(_encodedurl);

          _query = _url ? URL.parse(_url, true).query : _query;
        } catch (e) {
          console.log('exception in Root._getPlainQueryParameters:' + e);
        }
      } else if (query.hexurl) {
        try {
          _encodedurl = query.hexurl;

          var _url2 = this.app.decodehex(_encodedurl);

          _query = _url2 ? URL.parse(_url2, true).query : _query;
        } catch (e) {
          console.log('exception in Root._getPlainQueryParameters:' + e);
        }
      }

      return _query;
    }
  }, {
    key: "_getStartParameters",
    value: function () {
      var _getStartParameters2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee30() {
        var app_start_conditions, URL, url, queryobject;
        return _regeneratorRuntime().wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                app_start_conditions = this.app.getVariable('start_conditions');
                URL = require("url");
                url = app_start_conditions.url;
                queryobject = url ? URL.parse(url, true).query : {};
                return _context30.abrupt("return", this._getPlainQueryParameters(queryobject));

              case 5:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));

      function _getStartParameters() {
        return _getStartParameters2.apply(this, arguments);
      }

      return _getStartParameters;
    }()
  }, {
    key: "_getStartDataObject",
    value: function () {
      var _getStartDataObject2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee31() {
        var app_start_conditions, urlParams, start_data_obj, target;
        return _regeneratorRuntime().wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                app_start_conditions = this.app.getVariable('start_conditions');
                urlParams = app_start_conditions.urlParams;
                start_data_obj = app_start_conditions.dataobject;

                if (!start_data_obj) {
                  _context31.next = 5;
                  break;
                }

                return _context31.abrupt("return", start_data_obj);

              case 5:
                if (!urlParams) {
                  _context31.next = 14;
                  break;
                }

                target = urlParams.get('route');
                _context31.next = 9;
                return this._getDataObjectFromUrlParams(urlParams);

              case 9:
                start_data_obj = _context31.sent;

                if (start_data_obj) {
                  _context31.next = 12;
                  break;
                }

                return _context31.abrupt("return");

              case 12:
                start_data_obj.target = target;
                app_start_conditions.dataobject = start_data_obj;

              case 14:
                return _context31.abrupt("return", start_data_obj);

              case 15:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));

      function _getStartDataObject() {
        return _getStartDataObject2.apply(this, arguments);
      }

      return _getStartDataObject;
    }()
  }, {
    key: "_onEmptyStartDataObject",
    value: function () {
      var _onEmptyStartDataObject2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee32(txhash, currencyuuid) {
        var mvcmyquote, rootsessionuuid, walletuuid, canfetch, currency, params, nav_state;
        return _regeneratorRuntime().wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid;
                _context32.next = 5;
                return mvcmyquote.canFetchTransactions(rootsessionuuid, walletuuid, currencyuuid);

              case 5:
                canfetch = _context32.sent;

                if (!canfetch) {
                  _context32.next = 10;
                  break;
                }

                this.app.error('Root did not fill dataobj');
                _context32.next = 24;
                break;

              case 10:
                _context32.next = 12;
                return mvcmyquote.getCurrencyFromUUID(rootsessionuuid, currencyuuid);

              case 12:
                currency = _context32.sent;

                if (!currency) {
                  _context32.next = 23;
                  break;
                }

                this.app.error('You need to login first with corresponding authentication for currency ' + currency.name);
                params = {
                  txhash: txhash,
                  currencyuuid: currencyuuid,
                  action: 'view'
                };
                nav_state = {
                  route: 'dataobject',
                  params: params,
                  reached: false
                };
                nav_state.target = {
                  route: 'dataobject',
                  params: params
                };
                this.app.pushNavigationState(nav_state);
                _context32.next = 21;
                return this.app.gotoRoute('login', params);

              case 21:
                _context32.next = 24;
                break;

              case 23:
                this.app.error('Currency uuid is not recognized: ' + currencyuuid);

              case 24:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));

      function _onEmptyStartDataObject(_x38, _x39) {
        return _onEmptyStartDataObject2.apply(this, arguments);
      }

      return _onEmptyStartDataObject;
    }()
  }, {
    key: "_getDeedDataObjectFromCard",
    value: function () {
      var _getDeedDataObjectFromCard2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee33(currencyuuid, cardaddress, tokenid) {
        var mvcmyquote, rootsessionuuid, walletuuid, minter, dataobject;
        return _regeneratorRuntime().wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid;

                if (!currencyuuid) {
                  _context33.next = 13;
                  break;
                }

                _context33.next = 6;
                return mvcmyquote.fetchDeedMinterFromOwner(rootsessionuuid, walletuuid, currencyuuid, cardaddress);

              case 6:
                minter = _context33.sent;

                if (minter) {
                  _context33.next = 9;
                  break;
                }

                return _context33.abrupt("return", Promise.reject('could not find minter linked to address ' + cardaddress));

              case 9:
                _context33.next = 11;
                return mvcmyquote.fetchDeed(rootsessionuuid, walletuuid, currencyuuid, minter, tokenid)["catch"](function (err) {
                  console.log('error in Root._getDeedDataObjectFromCard:' + err);
                });

              case 11:
                dataobject = _context33.sent;
                return _context33.abrupt("return", dataobject);

              case 13:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));

      function _getDeedDataObjectFromCard(_x40, _x41, _x42) {
        return _getDeedDataObjectFromCard2.apply(this, arguments);
      }

      return _getDeedDataObjectFromCard;
    }()
  }, {
    key: "_getDeedDataObjectFromMinter",
    value: function () {
      var _getDeedDataObjectFromMinter2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee34(currencyuuid, minteraddress, tokenid) {
        var mvcmyquote, rootsessionuuid, walletuuid, minter, dataobject;
        return _regeneratorRuntime().wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid;

                if (!currencyuuid) {
                  _context34.next = 13;
                  break;
                }

                _context34.next = 6;
                return mvcmyquote.fetchDeedMinterFromAddress(rootsessionuuid, walletuuid, currencyuuid, minteraddress);

              case 6:
                minter = _context34.sent;

                if (minter) {
                  _context34.next = 9;
                  break;
                }

                return _context34.abrupt("return", Promise.reject('could not find minter linked to address ' + minteraddress));

              case 9:
                _context34.next = 11;
                return mvcmyquote.fetchDeed(rootsessionuuid, walletuuid, currencyuuid, minter, tokenid)["catch"](function (err) {
                  console.log('error in Root.async_getDeedDataObjectFromMinter:' + err);
                });

              case 11:
                dataobject = _context34.sent;
                return _context34.abrupt("return", dataobject);

              case 13:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));

      function _getDeedDataObjectFromMinter(_x43, _x44, _x45) {
        return _getDeedDataObjectFromMinter2.apply(this, arguments);
      }

      return _getDeedDataObjectFromMinter;
    }()
  }, {
    key: "_logout",
    value: function () {
      var _logout2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee35() {
        return _regeneratorRuntime().wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                this.props.doResetSession();

              case 1:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, this);
      }));

      function _logout() {
        return _logout2.apply(this, arguments);
      }

      return _logout;
    }() // static methods

  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      // fill state
      return {
        isSessionPending: nextProps.isSessionPending
      };
    }
  }, {
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        hasFatalError: true
      };
    }
  }, {
    key: "loadRoutes",
    value: function () {
      var _loadRoutes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee36(app) {
        var Routes, extra_routes, i;
        return _regeneratorRuntime().wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                Routes = require('./routes/routes.js');
                _context36.next = 3;
                return Routes["default"].getRoutes(app);

              case 3:
                extra_routes = _context36.sent;

                for (i = 0; i < extra_routes.length; i++) {
                  Root.routes.push(extra_routes[i]);
                }

              case 5:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36);
      }));

      function loadRoutes(_x46) {
        return _loadRoutes.apply(this, arguments);
      }

      return loadRoutes;
    }()
  }]);

  return Root;
}(_react["default"].Component);

exports.Root = Root;
Root.routes = [{
  name: 'root',
  path: '/',
  screen: _home["default"]
}, {
  name: 'home',
  path: '/home',
  screen: _home["default"]
}, {
  name: 'login',
  path: '/login',
  screen: _home["default"]
}, {
  name: 'logout',
  path: '/logout',
  screen: _logout3["default"]
}, {
  name: 'exit',
  path: '/exit',
  screen: _about["default"]
}, {
  name: 'datawipe',
  path: '/datawipe',
  screen: _dataWipe["default"]
}, {
  name: 'deeplink',
  path: '/deeplink',
  screen: _deeplinkScreen["default"]
}, {
  name: 'currencycards',
  path: '/currencycards',
  screen: _currencyCardListScreen["default"]
}, {
  name: 'currencycard',
  path: '/currencycard',
  screen: _currencyCardHome["default"]
}, {
  name: 'about',
  path: '/about',
  screen: _about["default"]
}, {
  name: 'contacts',
  path: '/contacts',
  screen: _contactListScreen["default"]
}, {
  name: 'contact',
  path: '/contact',
  screen: _contactHome["default"]
}]; // propTypes validation

Root.propTypes = {
  app: _propTypes["default"].object.isRequired,
  rootsessionuuid: _propTypes["default"].string,
  isSessionPending: _propTypes["default"].bool,
  isLoggedIn: _propTypes["default"].bool,
  lastLoggedInCheck: _propTypes["default"].number,
  loggedInCheckPending: _propTypes["default"].bool,
  doFetchBlankSession: _propTypes["default"].func.isRequired,
  doCheckSession: _propTypes["default"].func.isRequired,
  doResetSession: _propTypes["default"].func.isRequired,
  doCheckLoggedIn: _propTypes["default"].func.isRequired,
  currentwalletuuid: _propTypes["default"].string,
  iswalletlocked: _propTypes["default"].bool,
  doResetWallet: _propTypes["default"].func.isRequired,
  doOpenWallet: _propTypes["default"].func.isRequired,
  doCheckWalletLock: _propTypes["default"].func.isRequired,
  doOpenCard: _propTypes["default"].func.isRequired
}; //redux

var mapStateToProps = function mapStateToProps(state) {
  return {
    isSessionPending: state.session.pending,
    rootsessionuuid: state.session.sessionuuid,
    username: state.login.username,
    isLoggedIn: state.login.success,
    loggedInCheckPending: state.login.checkpending,
    lastLoggedInCheck: state.login.checkedon,
    currentwalletuuid: state.wallets.walletuuid,
    iswalletlocked: state.wallets.islocked
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    doFetchBlankSession: function doFetchBlankSession(mvcmodule, callback) {
      return dispatch((0, _sessionActions.doFetchBlankSession)(mvcmodule, callback));
    },
    doCheckSession: function doCheckSession(mvcmodule, sessionuuid, callback) {
      return dispatch((0, _sessionActions.doCheckSession)(mvcmodule, sessionuuid, callback));
    },
    doResetSession: function doResetSession() {
      return dispatch((0, _sessionActions.doResetSession)());
    },
    doCheckLoggedIn: function doCheckLoggedIn(mvcmodule, sessionuuid, callback) {
      return dispatch((0, _loginActions.doCheckLoggedIn)(mvcmodule, sessionuuid, callback));
    },
    doResetWallet: function doResetWallet() {
      return dispatch((0, _walletActions.doResetWallet)());
    },
    doOpenWallet: function doOpenWallet(mvcmodule, session, walletuuid, walletname, password, callback) {
      return dispatch((0, _walletActions.doOpenWallet)(mvcmodule, session, walletuuid, walletname, password, callback));
    },
    doCheckWalletLock: function doCheckWalletLock(mvcmodule, sessionuuid, walletuuid, callback) {
      return dispatch((0, _walletActions.doCheckWalletLock)(mvcmodule, sessionuuid, walletuuid, callback));
    },
    doOpenCard: function doOpenCard(mvcmodule, sessionuuid, walletuuid, carduuid, callback) {
      return dispatch((0, _cardActions.doOpenCard)(mvcmodule, sessionuuid, walletuuid, carduuid, callback));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Root);

exports["default"] = _default;
//# sourceMappingURL=root.js.map