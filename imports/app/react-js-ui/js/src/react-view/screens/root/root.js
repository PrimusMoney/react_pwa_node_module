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
    console.log('Root constructor called');
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
    } //
    // sessions

  }, {
    key: "_doFetchBlankSession",
    value: function () {
      var _doFetchBlankSession2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(mvcmodule) {
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

      function _doFetchBlankSession(_x2) {
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

      function _doCheckSession(_x3, _x4) {
        return _doCheckSession2.apply(this, arguments);
      }

      return _doCheckSession;
    }() //
    // schemes

  }, {
    key: "_getTransactionInfo",
    value: function () {
      var _getTransactionInfo2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(schemeuuid, txhash) {
        var bTokenTx,
            tx_info,
            mvcmyquote,
            rootsessionuuid,
            walletuuid,
            transaction,
            tx,
            tx_receipt,
            token,
            options,
            _args5 = arguments;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                bTokenTx = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : false;
                tx_info = {
                  hash: txhash
                };
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid;

                if (walletuuid) {
                  _context5.next = 7;
                  break;
                }

                return _context5.abrupt("return", tx_info);

              case 7:
                if (schemeuuid) {
                  _context5.next = 9;
                  break;
                }

                return _context5.abrupt("return", tx_info);

              case 9:
                _context5.prev = 9;
                _context5.next = 12;
                return mvcmyquote.getSchemeEthereumTransaction(rootsessionuuid, walletuuid, schemeuuid, txhash)["catch"](function (err) {
                  console.log('could not retrieve transaction in Root._getTransactionInfo: ' + err);
                });

              case 12:
                transaction = _context5.sent;
                tx = transaction ? transaction._ethtx : null;

                if (!tx) {
                  _context5.next = 45;
                  break;
                }

                tx_info.time = tx.time;
                tx_info.status_int = 5; // pending
                // get transaction receipt

                _context5.next = 19;
                return mvcmyquote.getSchemeEthereumTransactionReceipt(rootsessionuuid, walletuuid, schemeuuid, txhash)["catch"](function (err) {});

              case 19:
                tx_receipt = _context5.sent;

                if (!tx_receipt) {
                  _context5.next = 43;
                  break;
                }

                tx_info.blockNumber = tx_receipt.blockNumber;
                tx_info.from_address = tx_receipt.from;
                tx_info.status = tx_receipt.status;
                tx_info.status_int = tx_receipt.status ? 10 : -10; // 1 success, -1 fail

                if (!bTokenTx) {
                  _context5.next = 43;
                  break;
                }

                // erc20 format
                tx_info.tokenaddress = tx_receipt.to;
                tx_info.amount = tx_receipt.logs && tx_receipt.logs[0] ? parseInt(tx_receipt.logs[0].data) : null;
                tx_info.to_address = tx_receipt.logs && tx_receipt.logs[0] && tx_receipt.logs[0].topics && tx_receipt.logs[0].topics[2] ? '0x' + tx_receipt.logs[0].topics[2].substring(26) : null;

                if (!tx_info.to_address) {
                  _context5.next = 43;
                  break;
                }

                _context5.next = 32;
                return mvcmyquote.getSchemeERC20TokenInfo(rootsessionuuid, walletuuid, schemeuuid, tx_info.tokenaddress);

              case 32:
                token = _context5.sent;

                if (!token) {
                  _context5.next = 43;
                  break;
                }

                options = {
                  showdecimals: true,
                  decimalsshown: 2
                };

                if (!(tx_info.amount != null)) {
                  _context5.next = 41;
                  break;
                }

                _context5.next = 38;
                return mvcmyquote.formatTokenAmountAsync(rootsessionuuid, tx_info.amount, token, options);

              case 38:
                _context5.t0 = _context5.sent;
                _context5.next = 42;
                break;

              case 41:
                _context5.t0 = '';

              case 42:
                tx_info.amount_string = _context5.t0;

              case 43:
                _context5.next = 46;
                break;

              case 45:
                tx_info.status_int = -5; // not found

              case 46:
                _context5.next = 51;
                break;

              case 48:
                _context5.prev = 48;
                _context5.t1 = _context5["catch"](9);
                console.log('exception in Root._getTransactionInfo: ' + _context5.t1);

              case 51:
                return _context5.abrupt("return", tx_info);

              case 52:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[9, 48]]);
      }));

      function _getTransactionInfo(_x5, _x6) {
        return _getTransactionInfo2.apply(this, arguments);
      }

      return _getTransactionInfo;
    }()
  }, {
    key: "_waitForTransactionInfo",
    value: function () {
      var _waitForTransactionInfo2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(schemeuuid, txhash, options) {
        var tx_info, _options, loop, retrieved;

        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                console.log('Root._waitForTransactionInfo called for tx hash: ' + txhash);
                _context6.prev = 1;
                _options = options ? options : {
                  max_loops: 10,
                  sleep: 5000
                };
                loop = 0;
                retrieved = false;
                _options.max_loops = _options.max_loops > 0 ? _options.max_loops : 10;
                _options.sleep = _options.sleep > 0 ? _options.sleep : 5000;

              case 7:
                _context6.next = 9;
                return this._getTransactionInfo(schemeuuid, txhash);

              case 9:
                tx_info = _context6.sent;
                // go out of loop
                retrieved = tx_info && typeof tx_info.status_int !== 'undefined' && // if has a status
                tx_info.status_int != 5 && // if not pending
                tx_info.status_int != -5 // and if not 'not found' (could take time to appear online like for Polygon)
                ? true : false;

                if (!retrieved) {
                  _context6.next = 13;
                  break;
                }

                return _context6.abrupt("break", 19);

              case 13:
                loop++;

                if (!(loop > _options.max_loops)) {
                  _context6.next = 16;
                  break;
                }

                return _context6.abrupt("break", 19);

              case 16:
                _context6.next = 18;
                return this.app.sleep(_options.sleep);

              case 18:
                if (retrieved === false) {
                  _context6.next = 7;
                  break;
                }

              case 19:
                _context6.next = 24;
                break;

              case 21:
                _context6.prev = 21;
                _context6.t0 = _context6["catch"](1);
                console.log('exception in Root._waitForTransactionInfo: ' + _context6.t0);

              case 24:
                return _context6.abrupt("return", tx_info);

              case 25:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[1, 21]]);
      }));

      function _waitForTransactionInfo(_x7, _x8, _x9) {
        return _waitForTransactionInfo2.apply(this, arguments);
      }

      return _waitForTransactionInfo;
    }() //
    // currencies
    //

  }, {
    key: "_getCurrencyTransactionInfo",
    value: function () {
      var _getCurrencyTransactionInfo2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(currencyuuid, txhash) {
        var mvcmyquote, rootsessionuuid, walletuuid;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid;
                return _context7.abrupt("return", mvcmyquote.getCurrencyTransactionInfo(rootsessionuuid, walletuuid, currencyuuid, txhash));

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function _getCurrencyTransactionInfo(_x10, _x11) {
        return _getCurrencyTransactionInfo2.apply(this, arguments);
      }

      return _getCurrencyTransactionInfo;
    }()
  }, {
    key: "_waitForCurrencyTransactionInfo",
    value: function () {
      var _waitForCurrencyTransactionInfo2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(currencyuuid, txhash, options) {
        var tx_info, _options, loop, retrieved;

        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                console.log('Root._waitForTransactionInfo called for tx hash: ' + txhash);
                _context8.prev = 1;
                _options = options ? options : {
                  max_loops: 10,
                  sleep: 5000
                };
                loop = 0;
                retrieved = false;
                _options.max_loops = _options.max_loops > 0 ? _options.max_loops : 10;
                _options.sleep = _options.sleep > 0 ? _options.sleep : 5000;

              case 7:
                _context8.next = 9;
                return this._getCurrencyTransactionInfo(currencyuuid, txhash);

              case 9:
                tx_info = _context8.sent;
                // go out of loop
                retrieved = tx_info && typeof tx_info.status_int !== 'undefined' && // if has a status
                tx_info.status_int != 5 && // if not pending
                tx_info.status_int != -5 // and if not 'not found' (could take time to appear online like for Polygon)
                ? true : false;

                if (!retrieved) {
                  _context8.next = 13;
                  break;
                }

                return _context8.abrupt("break", 19);

              case 13:
                loop++;

                if (!(loop > _options.max_loops)) {
                  _context8.next = 16;
                  break;
                }

                return _context8.abrupt("break", 19);

              case 16:
                _context8.next = 18;
                return this.app.sleep(_options.sleep);

              case 18:
                if (retrieved === false) {
                  _context8.next = 7;
                  break;
                }

              case 19:
                _context8.next = 24;
                break;

              case 21:
                _context8.prev = 21;
                _context8.t0 = _context8["catch"](1);
                console.log('exception in Root._waitForTransactionInfo: ' + _context8.t0);

              case 24:
                return _context8.abrupt("return", tx_info);

              case 25:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[1, 21]]);
      }));

      function _waitForCurrencyTransactionInfo(_x12, _x13, _x14) {
        return _waitForCurrencyTransactionInfo2.apply(this, arguments);
      }

      return _waitForCurrencyTransactionInfo;
    }() //
    // wallets

  }, {
    key: "_doCheckWalletLock",
    value: function () {
      var _doCheckWalletLock2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(mvcmodule, sessionuuid, walletuuid) {
        var _this5 = this;

        var result;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                result = new Promise(function (resolve, reject) {
                  _this5.props.doCheckWalletLock(mvcmodule, sessionuuid, walletuuid, function (err, res) {
                    if (err) reject(err);else resolve(res);
                  });
                });
                return _context9.abrupt("return", result);

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function _doCheckWalletLock(_x15, _x16, _x17) {
        return _doCheckWalletLock2.apply(this, arguments);
      }

      return _doCheckWalletLock;
    }()
  }, {
    key: "_doOpenWallet",
    value: function () {
      var _doOpenWallet2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(mvcmodule, sessionuuid, walletuuid, walletname, password) {
        var _this6 = this;

        var result;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                result = new Promise(function (resolve, reject) {
                  _this6.props.doOpenWallet(mvcmodule, sessionuuid, walletuuid, walletname, password, function (err, res) {
                    if (err) reject(err);else resolve(res);
                  });
                });
                return _context10.abrupt("return", result);

              case 2:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function _doOpenWallet(_x18, _x19, _x20, _x21, _x22) {
        return _doOpenWallet2.apply(this, arguments);
      }

      return _doOpenWallet;
    }()
  }, {
    key: "_doSetWallet",
    value: function () {
      var _doSetWallet2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(walletname, walletuuid) {
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                this.props.doSetWallet(walletname, walletuuid); // note: doSetWallet does not have a callback for react_client_wallet 0.30.20

                /* const result = new Promise((resolve, reject) => { 
                	this.props.doSetWallet(walletname, walletuuid, (err, res) => {
                		if (err) reject(err); else resolve(res);
                	}); 
                });
                
                return result; */

              case 1:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function _doSetWallet(_x23, _x24) {
        return _doSetWallet2.apply(this, arguments);
      }

      return _doSetWallet;
    }()
  }, {
    key: "_checkOnline",
    value: function () {
      var _checkOnline2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
        var mvcmyquote;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                mvcmyquote = this.getMvcMyQuoteObject();
                return _context12.abrupt("return", mvcmyquote.checkOnline());

              case 2:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function _checkOnline() {
        return _checkOnline2.apply(this, arguments);
      }

      return _checkOnline;
    }()
  }, {
    key: "_checkWalletUnlocked",
    value: function () {
      var _checkWalletUnlocked2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
        var _this7 = this;

        var mvcmodule, rootsessionuuid, walletuuid, iswalletlocked, islocked;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                // used to re-synchronize redux with truth
                mvcmodule = this.getMvcModuleObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid;
                iswalletlocked = this.props.iswalletlocked;

                if (walletuuid) {
                  _context13.next = 6;
                  break;
                }

                return _context13.abrupt("return", false);

              case 6:
                if (!(this.closingwallet === true)) {
                  _context13.next = 8;
                  break;
                }

                return _context13.abrupt("return", false);

              case 8:
                if (!(iswalletlocked === false)) {
                  _context13.next = 21;
                  break;
                }

                _context13.next = 11;
                return this._doCheckWalletLock(mvcmodule, rootsessionuuid, walletuuid)["catch"](function (err) {
                  console.log('error in Root._checkWalletLock:' + err);

                  _this7.app.error(err);

                  _this7.props.doResetWallet();

                  return false;
                });

              case 11:
                islocked = _context13.sent;
                console.log('Root._checkWalletUnlocked islocked = ' + islocked);

                if (!(islocked !== false)) {
                  _context13.next = 18;
                  break;
                }

                this.props.doResetWallet();
                return _context13.abrupt("return", false);

              case 18:
                return _context13.abrupt("return", true);

              case 19:
                _context13.next = 23;
                break;

              case 21:
                this.props.doResetWallet();
                return _context13.abrupt("return", false);

              case 23:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function _checkWalletUnlocked() {
        return _checkWalletUnlocked2.apply(this, arguments);
      }

      return _checkWalletUnlocked;
    }()
  }, {
    key: "_openWallet",
    value: function () {
      var _openWallet2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(walletuuid, walletname, password) {
        var mvcmodule, rootsessionuuid;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                mvcmodule = this.getMvcModuleObject();
                rootsessionuuid = this.props.rootsessionuuid;
                return _context14.abrupt("return", this._doOpenWallet(mvcmodule, rootsessionuuid, walletuuid, walletname, password));

              case 3:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function _openWallet(_x25, _x26, _x27) {
        return _openWallet2.apply(this, arguments);
      }

      return _openWallet;
    }()
  }, {
    key: "_setAsCurrentWallet",
    value: function () {
      var _setAsCurrentWallet2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(walletuuid) {
        var mvcmodule, mvcmyquote, rootsessionuuid, wallet_list, wallet, i, _wallet, currentwalletname, currentwalletuuid, walletname;

        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                mvcmodule = this.getMvcModuleObject();
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                _context15.next = 5;
                return mvcmyquote.getWalletList(rootsessionuuid);

              case 5:
                wallet_list = _context15.sent;
                i = 0;

              case 7:
                if (!(i < wallet_list.length)) {
                  _context15.next = 15;
                  break;
                }

                _wallet = wallet_list[i];

                if (!(_wallet.uuid === walletuuid)) {
                  _context15.next = 12;
                  break;
                }

                wallet = _wallet;
                return _context15.abrupt("break", 15);

              case 12:
                i++;
                _context15.next = 7;
                break;

              case 15:
                if (wallet) {
                  _context15.next = 17;
                  break;
                }

                return _context15.abrupt("return", Promise.reject('could not find wallet with uuid: ' + walletuuid));

              case 17:
                currentwalletname = this.props.currentwallet;
                currentwalletuuid = this.props.currentwalletuuid;
                walletname = wallet.name;

                if (currentwalletname != walletname || currentwalletuuid != walletuuid) {
                  this._setWallet(walletname, walletuuid);
                }

                return _context15.abrupt("return", this._doCheckWalletLock(mvcmodule, rootsessionuuid, walletuuid));

              case 22:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function _setAsCurrentWallet(_x28) {
        return _setAsCurrentWallet2.apply(this, arguments);
      }

      return _setAsCurrentWallet;
    }()
  }, {
    key: "_setWallet",
    value: function () {
      var _setWallet2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(walletname, walletuuid) {
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                return _context16.abrupt("return", this._doSetWallet(walletname, walletuuid));

              case 1:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function _setWallet(_x29, _x30) {
        return _setWallet2.apply(this, arguments);
      }

      return _setWallet;
    }()
  }, {
    key: "_resetWallet",
    value: function () {
      var _resetWallet2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                console.log('Root._resetWallet called');
                this.props.doResetWallet();

              case 2:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function _resetWallet() {
        return _resetWallet2.apply(this, arguments);
      }

      return _resetWallet;
    }()
  }, {
    key: "_getDeviceWallet",
    value: function () {
      var _getDeviceWallet2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
        var mvcmyquote, rootsessionuuid, devicewllt;
        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                _context18.next = 4;
                return mvcmyquote.readSettings('devicewallet');

              case 4:
                devicewllt = _context18.sent;

                if (!(devicewllt && devicewllt.walletuuid)) {
                  _context18.next = 7;
                  break;
                }

                return _context18.abrupt("return", mvcmyquote.getWalletInfo(rootsessionuuid, devicewllt.walletuuid));

              case 7:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function _getDeviceWallet() {
        return _getDeviceWallet2.apply(this, arguments);
      }

      return _getDeviceWallet;
    }()
  }, {
    key: "_isDeviceWallet",
    value: function () {
      var _isDeviceWallet2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(walletuuid) {
        var mvcmyquote, rootsessionuuid, currentwalletuuid, devicewllt, _walletuuid;

        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                currentwalletuuid = this.props.currentwalletuuid;
                _context19.next = 5;
                return mvcmyquote.readSettings('devicewallet');

              case 5:
                devicewllt = _context19.sent;
                _walletuuid = walletuuid ? walletuuid : currentwalletuuid;

                if (!(devicewllt && devicewllt.walletuuid && _walletuuid === devicewllt.walletuuid)) {
                  _context19.next = 11;
                  break;
                }

                return _context19.abrupt("return", true);

              case 11:
                return _context19.abrupt("return", false);

              case 12:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function _isDeviceWallet(_x31) {
        return _isDeviceWallet2.apply(this, arguments);
      }

      return _isDeviceWallet;
    }()
  }, {
    key: "_openDeviceWalletPromise",
    value: function () {
      var _openDeviceWalletPromise2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
        var closed, mvcmodule, mvcmyquote, rootsessionuuid, walletuuid, walletname, password, devicewallet, devicewllt, localscheme, localschemeuuid;
        return _regeneratorRuntime().wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                if (!(this.closingwallet === true && this.closedevicewalletpromise)) {
                  _context20.next = 6;
                  break;
                }

                _context20.next = 3;
                return this.closedevicewalletpromise;

              case 3:
                closed = _context20.sent;
                // reset closing elements
                this.closingwallet = false;
                this.closedevicewalletpromise = null;

              case 6:
                mvcmodule = this.getMvcModuleObject();
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletname = 'devicewallet';
                _context20.next = 12;
                return this._getDeviceWallet();

              case 12:
                devicewallet = _context20.sent;

                if (!(devicewallet && devicewallet.uuid)) {
                  _context20.next = 23;
                  break;
                }

                _context20.next = 16;
                return mvcmyquote.readSettings('devicewallet');

              case 16:
                devicewllt = _context20.sent;
                walletuuid = devicewllt.walletuuid;
                password = devicewllt.password;
                _context20.next = 21;
                return this._doOpenWallet(mvcmodule, rootsessionuuid, walletuuid, walletname, password)["catch"](function (err) {
                  console.log('error in Root._openDeviceWallet: ' + err);
                  throw err;
                });

              case 21:
                this.devicewalletuuid = walletuuid;
                return _context20.abrupt("return", devicewallet);

              case 23:
                // we generate a password
                password = this.app.guid(); // and create a wallet

                _context20.next = 26;
                return mvcmyquote.getDefaultLocalSchemeInfo(rootsessionuuid);

              case 26:
                localscheme = _context20.sent;
                localschemeuuid = localscheme.uuid;
                _context20.next = 30;
                return mvcmyquote.makeWallet(rootsessionuuid, walletname, localschemeuuid, password)["catch"](function (err) {
                  console.log('error in Root._openDeviceWallet: ' + err);
                });

              case 30:
                devicewallet = _context20.sent;

                if (devicewallet) {
                  _context20.next = 33;
                  break;
                }

                return _context20.abrupt("return", Promise.reject('could not create wallet for device'));

              case 33:
                walletuuid = devicewallet.uuid; // we save device wallet info in the settings

                devicewllt = {};
                devicewllt.walletuuid = walletuuid;
                devicewllt.password = password;
                _context20.next = 39;
                return mvcmyquote.putSettings('devicewallet', devicewllt);

              case 39:
                this.devicewalletuuid = walletuuid; // then open wallet

                _context20.next = 42;
                return this._doOpenWallet(mvcmodule, rootsessionuuid, walletuuid, walletname, password)["catch"](function (err) {
                  console.log('error in Root._openDeviceWallet: ' + err);
                  throw err;
                });

              case 42:
                return _context20.abrupt("return", devicewallet);

              case 43:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function _openDeviceWalletPromise() {
        return _openDeviceWalletPromise2.apply(this, arguments);
      }

      return _openDeviceWalletPromise;
    }()
  }, {
    key: "_openDeviceWallet",
    value: function () {
      var _openDeviceWallet2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
        return _regeneratorRuntime().wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                console.log('Root._openDeviceWallet called'); // to make _openDeviceWallet re-entrant, we store and return a single promise

                if (!(this.openingdevicewallet === true && this.opendevicewalletpromise)) {
                  _context21.next = 3;
                  break;
                }

                return _context21.abrupt("return", this.opendevicewalletpromise);

              case 3:
                this.openingdevicewallet = true;
                this.opendevicewalletpromise = this._openDeviceWalletPromise();
                return _context21.abrupt("return", this.opendevicewalletpromise);

              case 6:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
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
    } //
    // cards

  }, {
    key: "_doOpenCard",
    value: function () {
      var _doOpenCard2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(mvcmodule, sessionuuid, walletuuid, carduuid) {
        var _this9 = this;

        var result;
        return _regeneratorRuntime().wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                result = new Promise(function (resolve, reject) {
                  _this9.props.doOpenCard(mvcmodule, sessionuuid, walletuuid, carduuid, function (err, res) {
                    if (err) reject(err);else resolve(res);
                  });
                });
                return _context22.abrupt("return", result);

              case 2:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22);
      }));

      function _doOpenCard(_x32, _x33, _x34, _x35) {
        return _doOpenCard2.apply(this, arguments);
      }

      return _doOpenCard;
    }()
  }, {
    key: "_resetCard",
    value: function () {
      var _resetCard2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
        return _regeneratorRuntime().wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                console.log('Root._resetCard called');
                this.props.doResetCard();

              case 2:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function _resetCard() {
        return _resetCard2.apply(this, arguments);
      }

      return _resetCard;
    }()
  }, {
    key: "_openCard",
    value: function () {
      var _openCard2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(carduuid) {
        var mvcmodule, mvcmyquote, rootsessionuuid, walletuuid, success;
        return _regeneratorRuntime().wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                mvcmodule = this.getMvcModuleObject();
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid;

                if (walletuuid) {
                  _context24.next = 6;
                  break;
                }

                return _context24.abrupt("return");

              case 6:
                // we open the card, this sets it as current card in redux
                success = true;
                _context24.next = 9;
                return this._doOpenCard(mvcmodule, rootsessionuuid, walletuuid, carduuid)["catch"](function (err) {
                  console.log('error in Root._openCard: ' + err);
                  success = false;
                });

              case 9:
                return _context24.abrupt("return", success);

              case 10:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function _openCard(_x36) {
        return _openCard2.apply(this, arguments);
      }

      return _openCard;
    }()
  }, {
    key: "_openCurrencyCard",
    value: function () {
      var _openCurrencyCard2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(currencyuuid) {
        var mvcmodule, mvcmyquote, rootsessionuuid, walletuuid, card, carduuid;
        return _regeneratorRuntime().wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                mvcmodule = this.getMvcModuleObject();
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid;

                if (walletuuid) {
                  _context25.next = 6;
                  break;
                }

                return _context25.abrupt("return");

              case 6:
                _context25.next = 8;
                return mvcmyquote.getCurrencyCard(rootsessionuuid, walletuuid, currencyuuid)["catch"](function (err) {
                  console.log('error in Root._openCurrencyCard: ' + err);
                });

              case 8:
                card = _context25.sent;

                if (card) {
                  _context25.next = 11;
                  break;
                }

                return _context25.abrupt("return", Promise.reject('could not find main card for currency ' + currencyuuid));

              case 11:
                // we open the card, this sets it as current card in redux
                carduuid = card.uuid;
                _context25.next = 14;
                return this._doOpenCard(mvcmodule, rootsessionuuid, walletuuid, carduuid)["catch"](function (err) {
                  console.log('error in Root._openCurrencyCard: ' + err);
                });

              case 14:
                return _context25.abrupt("return", card);

              case 15:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function _openCurrencyCard(_x37) {
        return _openCurrencyCard2.apply(this, arguments);
      }

      return _openCurrencyCard;
    }()
  }, {
    key: "_createCurrencyCard",
    value: function () {
      var _createCurrencyCard2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(currencyuuid, signingkey, options) {
        var mvcmodule, mvcmyquote, rootsessionuuid, walletuuid, card, validprivatekey, validaddress, carduuid;
        return _regeneratorRuntime().wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                console.log('Root._createCurrencyCard');

                if (currencyuuid) {
                  _context26.next = 3;
                  break;
                }

                return _context26.abrupt("return", Promise.reject('no currency uuid defined'));

              case 3:
                if (signingkey) {
                  _context26.next = 5;
                  break;
                }

                return _context26.abrupt("return", Promise.reject('no private key defined'));

              case 5:
                mvcmodule = this.getMvcModuleObject();
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid;
                _context26.next = 11;
                return mvcmyquote.isValidPrivateKey(rootsessionuuid, signingkey);

              case 11:
                validprivatekey = _context26.sent;

                if (!validprivatekey) {
                  _context26.next = 18;
                  break;
                }

                _context26.next = 15;
                return mvcmyquote.createCurrencyCard(rootsessionuuid, walletuuid, currencyuuid, signingkey)["catch"](function (err) {
                  console.log('error in Root._createCurrencyCard: ' + err);
                });

              case 15:
                card = _context26.sent;
                _context26.next = 26;
                break;

              case 18:
                if (!(options && options.allow_readonly === true)) {
                  _context26.next = 26;
                  break;
                }

                _context26.next = 21;
                return mvcmyquote.isValidAddress(rootsessionuuid, signingkey);

              case 21:
                validaddress = _context26.sent;

                if (!validaddress) {
                  _context26.next = 26;
                  break;
                }

                _context26.next = 25;
                return mvcmyquote.createReadOnlyCurrencyCard(rootsessionuuid, walletuuid, currencyuuid, signingkey)["catch"](function (err) {
                  console.log('error in Root._createCurrencyCard: ' + err);
                });

              case 25:
                card = _context26.sent;

              case 26:
                if (card) {
                  _context26.next = 29;
                  break;
                }

                this.app.alert('Could not create card from private key or address');
                return _context26.abrupt("return");

              case 29:
                if (!(options && options.maincard === true)) {
                  _context26.next = 32;
                  break;
                }

                _context26.next = 32;
                return mvcmyquote.setCurrencyCard(rootsessionuuid, walletuuid, currencyuuid, card.uuid)["catch"](function (err) {
                  console.log('error in Root._createCurrencyCard: ' + err);
                });

              case 32:
                // we open the card, this sets it as current card in redux
                carduuid = card.uuid;
                _context26.next = 35;
                return this._doOpenCard(mvcmodule, rootsessionuuid, walletuuid, carduuid)["catch"](function (err) {
                  console.log('error in Root._createCurrencyCard: ' + err);
                });

              case 35:
                return _context26.abrupt("return", card);

              case 36:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function _createCurrencyCard(_x38, _x39, _x40) {
        return _createCurrencyCard2.apply(this, arguments);
      }

      return _createCurrencyCard;
    }()
  }, {
    key: "_getCurrencyFeeLevel",
    value: function () {
      var _getCurrencyFeeLevel2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(currencyuuid) {
        var boot_webapp, mvcmyquote, rootsessionuuid, walletuuid, schemeinfo, schemesoverload, i;
        return _regeneratorRuntime().wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                boot_webapp = this.app.boot_webapp;

                if (!boot_webapp.schemes) {
                  _context27.next = 17;
                  break;
                }

                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid;
                _context27.next = 7;
                return mvcmyquote.getCurrencyScheme(rootsessionuuid, walletuuid, currencyuuid)["catch"](function (err) {
                  console.log('error in Root._getCurrencyFeeLevel: ' + err);
                });

              case 7:
                schemeinfo = _context27.sent;

                if (!schemeinfo) {
                  _context27.next = 17;
                  break;
                }

                schemesoverload = Object.values(boot_webapp.schemes);
                i = 0;

              case 11:
                if (!(i < schemesoverload.length)) {
                  _context27.next = 17;
                  break;
                }

                if (!(schemesoverload[i].uuid == schemeinfo.uuid)) {
                  _context27.next = 14;
                  break;
                }

                return _context27.abrupt("return", schemesoverload[i].ethnodeserver ? schemesoverload[i].ethnodeserver.feelevel : null);

              case 14:
                i++;
                _context27.next = 11;
                break;

              case 17:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function _getCurrencyFeeLevel(_x41) {
        return _getCurrencyFeeLevel2.apply(this, arguments);
      }

      return _getCurrencyFeeLevel;
    }()
  }, {
    key: "_createLocalCard",
    value: function () {
      var _createLocalCard2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(web3providerurl, signingkey) {
        var mvcmodule, mvcmyquote, rootsessionuuid, walletuuid, card, carduuid;
        return _regeneratorRuntime().wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                console.log('Root._createLocalCard');

                if (web3providerurl) {
                  _context28.next = 3;
                  break;
                }

                return _context28.abrupt("return", Promise.reject('no web3 provider url defined'));

              case 3:
                if (signingkey) {
                  _context28.next = 5;
                  break;
                }

                return _context28.abrupt("return", Promise.reject('no private key defined'));

              case 5:
                mvcmodule = this.getMvcModuleObject();
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid;
                _context28.next = 11;
                return mvcmyquote.createCard(rootsessionuuid, walletuuid, web3providerurl, signingkey)["catch"](function (err) {
                  console.log('error in Root._createLocalCard: ' + err);
                });

              case 11:
                card = _context28.sent;

                if (card) {
                  _context28.next = 15;
                  break;
                }

                this.app.alert('Could not create card from private key');
                return _context28.abrupt("return");

              case 15:
                // we open the card, this sets it as current card in redux
                carduuid = card.uuid;
                _context28.next = 18;
                return this._doOpenCard(mvcmodule, rootsessionuuid, walletuuid, carduuid)["catch"](function (err) {
                  console.log('error in Root._createLocalCard: ' + err);
                });

              case 18:
                return _context28.abrupt("return", card);

              case 19:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      function _createLocalCard(_x42, _x43) {
        return _createLocalCard2.apply(this, arguments);
      }

      return _createLocalCard;
    }()
  }, {
    key: "_openLocalCard",
    value: function () {
      var _openLocalCard2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29(schemeuuid, address) {
        var mvcmodule, mvcmyquote, rootsessionuuid, walletuuid, card;
        return _regeneratorRuntime().wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                mvcmodule = this.getMvcModuleObject();
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid;

                if (walletuuid) {
                  _context29.next = 6;
                  break;
                }

                return _context29.abrupt("return");

              case 6:
                _context29.next = 8;
                return mvcmyquote.getCardInfoFromAddressOnScheme(rootsessionuuid, walletuuid, schemeuuid, address);

              case 8:
                card = _context29.sent;

                if (card) {
                  _context29.next = 11;
                  break;
                }

                return _context29.abrupt("return", Promise.reject('could not find curency card for address ' + address));

              case 11:
                _context29.next = 13;
                return this._doOpenCard(mvcmodule, rootsessionuuid, walletuuid, card.uuid)["catch"](function (err) {
                  console.log('error in Root._openLocalCard: ' + err);
                });

              case 13:
                return _context29.abrupt("return", card);

              case 14:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));

      function _openLocalCard(_x44, _x45) {
        return _openLocalCard2.apply(this, arguments);
      }

      return _openLocalCard;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('Root.componentDidMount called');
      var mvcmodule = this.getMvcModuleObject();
      var mvcmyquote = this.app.getMvcMyQuoteObject();
      var rootsessionuuid = this.props.rootsessionuuid; // register to app

      this.app.setVariable('Root', this);
      mvcmyquote.registerEventListener('on_refreshPage', this.uuid, this.onRefreshPage.bind(this));
      this.checkNavigationState()["catch"](function (err) {
        console.log('error in Root.checkNavigationState: ' + err);
      });
    }
  }, {
    key: "fetchNavigationState",
    value: function () {
      var _fetchNavigationState = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee30() {
        var app_start_conditions, start_url, mvcmodule, rootsessionuuid, valid;
        return _regeneratorRuntime().wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                console.log('Root.fetchNavigationState called');
                app_start_conditions = this.app.getVariable('start_conditions');

                if (!(app_start_conditions && app_start_conditions.treated != true)) {
                  _context30.next = 7;
                  break;
                }

                start_url = app_start_conditions.url;
                _context30.next = 6;
                return this.app.gotoUrl(start_url)["catch"](function (err) {
                  console.log('error in Root.fetchNavigationState: ' + err);
                });

              case 6:
                app_start_conditions.treated = true;

              case 7:
                // check we have a valid rootsession
                mvcmodule = this.getMvcModuleObject();
                rootsessionuuid = this.props.rootsessionuuid;

                if (!rootsessionuuid) {
                  _context30.next = 19;
                  break;
                }

                _context30.next = 12;
                return this._doCheckSession(mvcmodule, rootsessionuuid)["catch"](function (err) {
                  if (err === 'ERR_SESSION_NOT_FOUND') valid = false;
                });

              case 12:
                valid = _context30.sent;

                if (!(valid == false)) {
                  _context30.next = 17;
                  break;
                }

                _context30.next = 16;
                return this._doFetchBlankSession(mvcmodule)["catch"](function (err) {
                  console.log('error in Root.componentDidMount: ' + err);
                });

              case 16:
                rootsessionuuid = _context30.sent;

              case 17:
                _context30.next = 22;
                break;

              case 19:
                _context30.next = 21;
                return this._doFetchBlankSession(mvcmodule)["catch"](function (err) {
                  console.log('error in Root.componentDidMount: ' + err);
                });

              case 21:
                rootsessionuuid = _context30.sent;

              case 22:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));

      function fetchNavigationState() {
        return _fetchNavigationState.apply(this, arguments);
      }

      return fetchNavigationState;
    }()
  }, {
    key: "checkNavigationState",
    value: function () {
      var _checkNavigationState = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee31() {
        var fetchNavigationStatePromise, data;
        return _regeneratorRuntime().wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                console.log('Root.checkNavigationState called'); // use navigation promises to be re-entrant

                fetchNavigationStatePromise = this.app.getNavigationStatePromise(this.constructor.name, this.uuid);

                if (!fetchNavigationStatePromise) {
                  fetchNavigationStatePromise = this.fetchNavigationState();
                  this.app.addNavigationStatePromise(this.constructor.name, this.uuid, fetchNavigationStatePromise);
                } // retrieve data


                _context31.next = 5;
                return fetchNavigationStatePromise;

              case 5:
                data = _context31.sent;
                // use data to set internal state
                this.setState({
                  loading: false
                });
                return _context31.abrupt("return");

              case 8:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
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
      var _onRefreshPage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee32() {
        var lastrefresh;
        return _regeneratorRuntime().wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                console.log('Root.onRefreshPage called');
                lastrefresh = Date.now();
                _context32.next = 4;
                return this._setState({
                  lastrefresh: lastrefresh
                });

              case 4:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));

      function onRefreshPage() {
        return _onRefreshPage.apply(this, arguments);
      }

      return onRefreshPage;
    }()
  }, {
    key: "onResetSession",
    value: function () {
      var _onResetSession = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee33() {
        return _regeneratorRuntime().wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                console.log('Root.onResetSession pressed!');
                this.setState({
                  hasFatalError: false
                });
                this.props.doResetSession();

              case 3:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
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
      var _this10 = this;

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
        return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Navigate, {
          to: jumpto,
          replace: true
        });
      } else {
        return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Routes, null, Root.routes.map(function (route, index) {
          return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
            path: route.path,
            key: route.name,
            element: /*#__PURE__*/_react["default"].createElement(RouteScreen, _extends({}, _this10.props, {
              app: _this10.app,
              root: _this10,
              route: route
            }))
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
      var _gotoRoute2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee34(route, params) {
        var dataobj, newparams, path;
        return _regeneratorRuntime().wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                if (!(route == 'dataobject')) {
                  _context34.next = 11;
                  break;
                }

                _context34.next = 3;
                return this._getDataObjectFromCallParams(params);

              case 3:
                dataobj = _context34.sent;

                if (!dataobj) {
                  _context34.next = 10;
                  break;
                }

                newparams = {
                  dataobject: dataobj,
                  action: params.action
                };
                _context34.next = 8;
                return this.app.gotoMyQuotePage(newparams);

              case 8:
                _context34.next = 11;
                break;

              case 10:
                console.log('Root._gotoRoute could not find data object for txhash ' + params.txhash + ' currency ' + params.currencyuuid);

              case 11:
                path = this._getRoutePathFromName(route);
                console.log('Root.gotoRoute called asking to jump to ' + path);

                if (!path) {
                  _context34.next = 17;
                  break;
                }

                this.routehistory.push(path);
                _context34.next = 17;
                return this.app.refreshPage();

              case 17:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));

      function _gotoRoute(_x46, _x47) {
        return _gotoRoute2.apply(this, arguments);
      }

      return _gotoRoute;
    }()
  }, {
    key: "_getDataObjectFromComposedHash",
    value: function () {
      var _getDataObjectFromComposedHash2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee35(txhash, currencyuuid) {
        var mvcmyquote, rootsessionuuid, walletuuid, result, params, ret;
        return _regeneratorRuntime().wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid; // invoke async hook to let client treat the composed hash

                result = [];
                params = [];
                params.push(rootsessionuuid);
                params.push(walletuuid);
                params.push(txhash);
                params.push(currencyuuid);
                _context35.next = 11;
                return mvcmyquote.invokeAsyncHooks('getDataObjectFromComposedHash_asynchook', result, params);

              case 11:
                ret = _context35.sent;

                if (!(ret && result.dataobject)) {
                  _context35.next = 14;
                  break;
                }

                return _context35.abrupt("return", result.dataobject);

              case 14:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, this);
      }));

      function _getDataObjectFromComposedHash(_x48, _x49) {
        return _getDataObjectFromComposedHash2.apply(this, arguments);
      }

      return _getDataObjectFromComposedHash;
    }()
  }, {
    key: "_getDataObjectFromUrlParams",
    value: function () {
      var _getDataObjectFromUrlParams2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee36(urlParams) {
        var dataobject, currencyuuid, txhash, card, pos, tokenid;
        return _regeneratorRuntime().wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                if (urlParams) {
                  _context36.next = 2;
                  break;
                }

                return _context36.abrupt("return");

              case 2:
                currencyuuid = urlParams.get('ccy');
                txhash = urlParams.get('tx');
                card = urlParams.get('card');

                if (!txhash) {
                  _context36.next = 18;
                  break;
                }

                pos = txhash ? txhash.indexOf('-') : -1;

                if (!(pos == -1)) {
                  _context36.next = 13;
                  break;
                }

                _context36.next = 10;
                return this.app.getMyQuoteDataObject(txhash, currencyuuid);

              case 10:
                dataobject = _context36.sent;
                _context36.next = 16;
                break;

              case 13:
                _context36.next = 15;
                return this._getDataObjectFromComposedHash(txhash, currencyuuid);

              case 15:
                dataobject = _context36.sent;

              case 16:
                _context36.next = 24;
                break;

              case 18:
                if (!card) {
                  _context36.next = 24;
                  break;
                }

                // not txhash, but a currency, a card and a tokenid
                tokenid = urlParams.get('tokenid');

                if (!tokenid) {
                  _context36.next = 24;
                  break;
                }

                _context36.next = 23;
                return this._getDataObjectFromCard(currencyuuid, card, tokenid);

              case 23:
                dataobject = _context36.sent;

              case 24:
                return _context36.abrupt("return", dataobject);

              case 25:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this);
      }));

      function _getDataObjectFromUrlParams(_x50) {
        return _getDataObjectFromUrlParams2.apply(this, arguments);
      }

      return _getDataObjectFromUrlParams;
    }()
  }, {
    key: "_getDataObjectFromCallParams",
    value: function () {
      var _getDataObjectFromCallParams2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee37(params) {
        var dataobject, currencyuuid, txhash, pos;
        return _regeneratorRuntime().wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                currencyuuid = params.currencyuuid;
                txhash = params.txhash;
                pos = txhash ? txhash.indexOf('-') : -1; // TODO: look if there is a '-' in the transaction hash

                if (!(pos == -1)) {
                  _context37.next = 9;
                  break;
                }

                _context37.next = 6;
                return this.app.getMyQuoteDataObject(txhash, currencyuuid);

              case 6:
                dataobject = _context37.sent;
                _context37.next = 12;
                break;

              case 9:
                _context37.next = 11;
                return this._getDataObjectFromComposedHash(txhash, currencyuuid);

              case 11:
                dataobject = _context37.sent;

              case 12:
                return _context37.abrupt("return", dataobject);

              case 13:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this);
      }));

      function _getDataObjectFromCallParams(_x51) {
        return _getDataObjectFromCallParams2.apply(this, arguments);
      }

      return _getDataObjectFromCallParams;
    }()
  }, {
    key: "_getDataObjectRoutes",
    value: function _getDataObjectRoutes() {
      var arr = [
        /* 'quote', 'order', 'invoice', 'paymentnotice', 'bounty', 'claim', 'deed', 'clause' */
      ]; // built-in
      // add routes that are marked as linked to data objects

      var routes = Root.routes;

      for (var i = 0; i < Root.routes.length; i++) {
        var item = Root.routes[i];
        if (item.dataobject) arr.push(item.name);
      }

      return arr;
    }
  }, {
    key: "_getDataObjectRoutings",
    value: function _getDataObjectRoutings() {
      var map = {}; // add dataobject routing for routes that are marked as linked to data objects

      var routes = Root.routes;

      for (var i = 0; i < Root.routes.length; i++) {
        var item = Root.routes[i];

        if (item.dataobject) {
          var routing = {};
          routing.type = item.dataobject.type;
          routing.path = item.dataobject.path;
          routing.action = item.dataobject.action;
          routing.params = item.dataobject.params;
          map[item.dataobject.type] = routing;
        }
      }

      return map;
    }
  }, {
    key: "_gotoUrl",
    value: function () {
      var _gotoUrl2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee38(url) {
        var cleanurl, mvcmyquote, rootsessionuuid, walletuuid, result, params, ret, URL, queryobject, dataobject_routes, sessionuuid, route, _params, urlParams, dataobject, querystring, app_start_conditions, _params2, routings, types, routing, i, param_name;

        return _regeneratorRuntime().wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                _context38.next = 2;
                return this.app.getCleanUrl();

              case 2:
                cleanurl = _context38.sent;

                if (!(url && url.startsWith(cleanurl) !== true)) {
                  _context38.next = 19;
                  break;
                }

                // this is a jump to another site
                // (or a deep link)
                // give opportunity to hooks to treat alternative url (e.g. openid://)
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid;
                result = [];
                params = [];
                params.push(url);
                params.push(rootsessionuuid);
                params.push(walletuuid);
                _context38.next = 14;
                return mvcmyquote.invokeAsyncHooks('gotoUrl_asynchook', result, params);

              case 14:
                ret = _context38.sent;

                if (!(ret && result.jump === false)) {
                  _context38.next = 17;
                  break;
                }

                return _context38.abrupt("return");

              case 17:
                window.location.href = url;
                return _context38.abrupt("return");

              case 19:
                // look if a session, route or transaction is defined in the url
                URL = require("url");
                queryobject = url ? URL.parse(url, true).query : {};
                dataobject_routes = this._getDataObjectRoutes(); //
                // reconnecting to a session

                sessionuuid = queryobject.sessionuuid;

                if (!sessionuuid) {
                  _context38.next = 27;
                  break;
                }

                // we need to reconnect to a pre-existing session
                // (e.g. coming back from oauth2 authentication)
                this.setState({
                  loading: false
                });
                this.app.gotoRoute('login', {
                  sessionuuid: sessionuuid
                });
                return _context38.abrupt("return");

              case 27:
                //
                // following a route given in the param "route" in the url
                route = queryobject.route;

                if (!(route && dataobject_routes.includes(route) !== true)) {
                  _context38.next = 32;
                  break;
                }

                // a route indicates the way
                // and we don't follow routes reserved for dataobject here
                _params = Object.assign({}, queryobject);
                this.app.gotoRoute(route, _params);
                return _context38.abrupt("return");

              case 32:
                if (!url) {
                  _context38.next = 41;
                  break;
                }

                querystring = url.indexOf('?') > 0 ? url.slice(url.indexOf('?')) : url; // after ?

                querystring = querystring.indexOf('#') > 0 ? querystring.split('#')[0] : querystring; // remove trailing anchor

                urlParams = new URLSearchParams(querystring);
                _context38.next = 38;
                return this._getDataObjectFromUrlParams(urlParams);

              case 38:
                dataobject = _context38.sent;
                _context38.next = 46;
                break;

              case 41:
                // initial url
                app_start_conditions = this.app.getVariable('start_conditions');
                urlParams = app_start_conditions.urlParams;
                _context38.next = 45;
                return this.app.getStartDataObject();

              case 45:
                dataobject = _context38.sent;

              case 46:
                if (!dataobject) {
                  _context38.next = 60;
                  break;
                }

                _params2 = {
                  dataobject: dataobject
                };

                if (!dataobject.type) {
                  _context38.next = 57;
                  break;
                }

                routings = this._getDataObjectRoutings();
                types = Object.keys(routings);

                if (!types.includes(dataobject.type)) {
                  _context38.next = 57;
                  break;
                }

                routing = routings[dataobject.type];
                _params2.action = routing.action;

                for (i = 0; i < (routing.params ? routing.params.length : 0); i++) {
                  param_name = routing.params[i];
                  _params2[param_name] = dataobject[param_name];
                }

                this.app.gotoRoute(routing.path, _params2);
                return _context38.abrupt("return");

              case 57:
                return _context38.abrupt("return");

              case 60:
                // no route and no data object
                this.app.gotoRoute('home');

              case 61:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38, this);
      }));

      function _gotoUrl(_x52) {
        return _gotoUrl2.apply(this, arguments);
      }

      return _gotoUrl;
    }()
  }, {
    key: "_gotoMyQuotePage",
    value: function () {
      var _gotoMyQuotePage2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee39(params) {
        var dataobj, type;
        return _regeneratorRuntime().wrap(function _callee39$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                if (params) {
                  _context39.next = 2;
                  break;
                }

                return _context39.abrupt("return");

              case 2:
                // we define the route according to the quote-order process
                dataobj = params.dataobject;

                if (dataobj) {
                  _context39.next = 5;
                  break;
                }

                return _context39.abrupt("return");

              case 5:
                type = dataobj.type;
                params.txhash = dataobj.txhash ? dataobj.txhash : params.txhash;
                _context39.t0 = type;
                _context39.next = _context39.t0 === 'bounty' ? 10 : _context39.t0 === 'claim' ? 13 : _context39.t0 === 'quote' ? 16 : _context39.t0 === 'order' ? 19 : _context39.t0 === 'invoice' ? 22 : _context39.t0 === 'paymentnotice' ? 25 : 28;
                break;

              case 10:
                params.route = 'bounty';
                params.action = params.action ? params.action : dataobj.target === 'view' ? 'view' : 'create';
                return _context39.abrupt("return", this.app.gotoRoute('bounty', params));

              case 13:
                params.route = 'claim';
                params.action = params.action ? params.action : dataobj.target === 'view' ? 'view' : 'create';
                return _context39.abrupt("return", this.app.gotoRoute('claim', params));

              case 16:
                params.route = 'quote';
                params.action = params.action ? params.action : dataobj.target === 'view' ? 'view' : 'create';
                return _context39.abrupt("return", this.app.gotoRoute('quote', params));

              case 19:
                params.route = 'order';
                params.action = params.action ? params.action : dataobj.target === 'view' ? 'view' : 'create';
                return _context39.abrupt("return", this.app.gotoRoute('order', params));

              case 22:
                params.route = 'invoice';
                params.action = params.action ? params.action : dataobj.target === 'view' ? 'view' : 'create';
                return _context39.abrupt("return", this.app.gotoRoute('invoice', params));

              case 25:
                params.route = 'paymentnotice';
                params.action = params.action ? params.action : dataobj.target === 'view' ? 'view' : 'create';
                return _context39.abrupt("return", this.app.gotoRoute('paymentnotice', params));

              case 28:
                params.route = type;
                return _context39.abrupt("return", this.app.gotoRoute(type, params));

              case 30:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee39, this);
      }));

      function _gotoMyQuotePage(_x53) {
        return _gotoMyQuotePage2.apply(this, arguments);
      }

      return _gotoMyQuotePage;
    }()
  }, {
    key: "_getMyQuoteDataObject",
    value: function () {
      var _getMyQuoteDataObject2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee40(txhash, currencyuuid) {
        var mvcmyquote, rootsessionuuid, walletuuid, result, params, ret, dataobject;
        return _regeneratorRuntime().wrap(function _callee40$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid;

                if (!currencyuuid) {
                  _context40.next = 21;
                  break;
                }

                // give opportunity to client to overload fetchCurrencyTransaction
                result = [];
                params = [];
                params.push(rootsessionuuid);
                params.push(walletuuid);
                params.push(txhash);
                params.push(currencyuuid);
                _context40.next = 12;
                return mvcmyquote.invokeAsyncHooks('getDataObjectFromCurrencyTransaction_asynchook', result, params);

              case 12:
                ret = _context40.sent;

                if (!(ret && result.dataobject)) {
                  _context40.next = 15;
                  break;
                }

                return _context40.abrupt("return", result.dataobject);

              case 15:
                _context40.next = 17;
                return mvcmyquote.fetchCurrencyTransaction(rootsessionuuid, walletuuid, currencyuuid, txhash)["catch"](function (err) {
                  console.log('error in Root._getMyQuoteDataObject:' + err);
                });

              case 17:
                dataobject = _context40.sent;

                if (!dataobject) {
                  _context40.next = 21;
                  break;
                }

                // add transaction hash that is the accessor to object
                dataobject.txhash = txhash;
                return _context40.abrupt("return", dataobject);

              case 21:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40, this);
      }));

      function _getMyQuoteDataObject(_x54, _x55) {
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
      var _getStartParameters2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee41() {
        var app_start_conditions, URL, url, queryobject;
        return _regeneratorRuntime().wrap(function _callee41$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                app_start_conditions = this.app.getVariable('start_conditions');
                URL = require("url");
                url = app_start_conditions.url;
                queryobject = url ? URL.parse(url, true).query : {};
                return _context41.abrupt("return", this._getPlainQueryParameters(queryobject));

              case 5:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee41, this);
      }));

      function _getStartParameters() {
        return _getStartParameters2.apply(this, arguments);
      }

      return _getStartParameters;
    }()
  }, {
    key: "_getStartDataObject",
    value: function () {
      var _getStartDataObject2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee42() {
        var app_start_conditions, urlParams, start_data_obj, target;
        return _regeneratorRuntime().wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                app_start_conditions = this.app.getVariable('start_conditions');
                urlParams = app_start_conditions.urlParams;
                start_data_obj = app_start_conditions.dataobject;

                if (!start_data_obj) {
                  _context42.next = 5;
                  break;
                }

                return _context42.abrupt("return", start_data_obj);

              case 5:
                if (!urlParams) {
                  _context42.next = 14;
                  break;
                }

                target = urlParams.get('route');
                _context42.next = 9;
                return this._getDataObjectFromUrlParams(urlParams);

              case 9:
                start_data_obj = _context42.sent;

                if (start_data_obj) {
                  _context42.next = 12;
                  break;
                }

                return _context42.abrupt("return");

              case 12:
                start_data_obj.target = target;
                app_start_conditions.dataobject = start_data_obj;

              case 14:
                return _context42.abrupt("return", start_data_obj);

              case 15:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee42, this);
      }));

      function _getStartDataObject() {
        return _getStartDataObject2.apply(this, arguments);
      }

      return _getStartDataObject;
    }()
  }, {
    key: "_onEmptyStartDataObject",
    value: function () {
      var _onEmptyStartDataObject2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee43(txhash, currencyuuid) {
        var mvcmyquote, rootsessionuuid, walletuuid, canfetch, currency, params, nav_state;
        return _regeneratorRuntime().wrap(function _callee43$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid;
                _context43.next = 5;
                return mvcmyquote.canFetchTransactions(rootsessionuuid, walletuuid, currencyuuid);

              case 5:
                canfetch = _context43.sent;

                if (!canfetch) {
                  _context43.next = 10;
                  break;
                }

                this.app.error('Root did not fill dataobj');
                _context43.next = 24;
                break;

              case 10:
                _context43.next = 12;
                return mvcmyquote.getCurrencyFromUUID(rootsessionuuid, currencyuuid);

              case 12:
                currency = _context43.sent;

                if (!currency) {
                  _context43.next = 23;
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
                _context43.next = 21;
                return this.app.gotoRoute('login', params);

              case 21:
                _context43.next = 24;
                break;

              case 23:
                this.app.error('Currency uuid is not recognized: ' + currencyuuid);

              case 24:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee43, this);
      }));

      function _onEmptyStartDataObject(_x56, _x57) {
        return _onEmptyStartDataObject2.apply(this, arguments);
      }

      return _onEmptyStartDataObject;
    }()
  }, {
    key: "_getDataObjectFromCard",
    value: function () {
      var _getDataObjectFromCard2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee44(currencyuuid, cardaddress, tokenid) {
        var mvcmyquote, rootsessionuuid, walletuuid, result, params, ret;
        return _regeneratorRuntime().wrap(function _callee44$(_context44) {
          while (1) {
            switch (_context44.prev = _context44.next) {
              case 0:
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid;

                if (!currencyuuid) {
                  _context44.next = 16;
                  break;
                }

                // invoke async hook to let client treat the from card case
                result = [];
                params = [];
                params.push(rootsessionuuid);
                params.push(walletuuid);
                params.push(currencyuuid);
                params.push(cardaddress);
                params.push(tokenid);
                _context44.next = 13;
                return mvcmyquote.invokeAsyncHooks('getDataObjectFromCard_asynchook', result, params);

              case 13:
                ret = _context44.sent;

                if (!(ret && result.dataobject)) {
                  _context44.next = 16;
                  break;
                }

                return _context44.abrupt("return", result.dataobject);

              case 16:
              case "end":
                return _context44.stop();
            }
          }
        }, _callee44, this);
      }));

      function _getDataObjectFromCard(_x58, _x59, _x60) {
        return _getDataObjectFromCard2.apply(this, arguments);
      }

      return _getDataObjectFromCard;
    }() // deed legacy

    /* 	async _getDeedDataObjectFromMinter(currencyuuid, minteraddress, tokenid) {
    		let mvcmyquote = this.getMvcMyQuoteObject();
    
    		let rootsessionuuid = this.props.rootsessionuuid;
    		let walletuuid = this.props.currentwalletuuid;
    
    		if (currencyuuid) {
    
    			let minter = await mvcmyquote.fetchDeedMinterFromAddress(rootsessionuuid, walletuuid, currencyuuid, minteraddress);
    
    			if (!minter)
    				return Promise.reject('could not find minter linked to address ' + minteraddress);
    
    			var dataobject = await mvcmyquote.fetchDeed(rootsessionuuid, walletuuid, currencyuuid, minter, tokenid)
    			.catch(err => {
    				console.log('error in Root.async_getDeedDataObjectFromMinter:' + err);
    			});
    
    			return dataobject;
    		}		
    	} */
    // legacy

  }, {
    key: "_logout",
    value: function () {
      var _logout2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee45() {
        return _regeneratorRuntime().wrap(function _callee45$(_context45) {
          while (1) {
            switch (_context45.prev = _context45.next) {
              case 0:
                this.props.doResetSession();

              case 1:
              case "end":
                return _context45.stop();
            }
          }
        }, _callee45, this);
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
      var _loadRoutes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee46(app) {
        var Routes, extra_routes, i;
        return _regeneratorRuntime().wrap(function _callee46$(_context46) {
          while (1) {
            switch (_context46.prev = _context46.next) {
              case 0:
                Routes = require('./routes/routes.js');
                _context46.next = 3;
                return Routes["default"].getRoutes(app);

              case 3:
                extra_routes = _context46.sent;

                for (i = 0; i < extra_routes.length; i++) {
                  Root.routes.push(extra_routes[i]);
                }

              case 5:
              case "end":
                return _context46.stop();
            }
          }
        }, _callee46);
      }));

      function loadRoutes(_x61) {
        return _loadRoutes.apply(this, arguments);
      }

      return loadRoutes;
    }()
  }]);

  return Root;
}(_react["default"].Component);

exports.Root = Root;

var RouteScreen = function RouteScreen(props) {
  var app = props.app;
  var root = props.root;
  var route = props.route;
  if (route) return /*#__PURE__*/_react["default"].createElement(route.screen, {
    app: app,
    path: root.onRouteSwitch(route.path)
  }); // call onRouteSwitch when displayed to record
  else return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
};

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
  doSetWallet: _propTypes["default"].func.isRequired,
  doCheckWalletLock: _propTypes["default"].func.isRequired,
  doOpenCard: _propTypes["default"].func.isRequired,
  doResetCard: _propTypes["default"].func.isRequired
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
    doSetWallet: function doSetWallet(walletname, walletuuid) {
      return dispatch((0, _walletActions.doSetWallet)(walletname, walletuuid));
    },
    doOpenCard: function doOpenCard(mvcmodule, sessionuuid, walletuuid, carduuid, callback) {
      return dispatch((0, _cardActions.doOpenCard)(mvcmodule, sessionuuid, walletuuid, carduuid, callback));
    },
    doResetCard: function doResetCard() {
      return dispatch((0, _cardActions.doResetCard)());
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Root);

exports["default"] = _default;