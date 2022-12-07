"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LoginForm = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _reactBootstrap = require("react-bootstrap");

var _Image = _interopRequireDefault(require("react-bootstrap/Image"));

var _reactActivity = require("react-activity");

require("react-activity/dist/react-activity.css");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _facebookLogin573x = _interopRequireDefault(require("../../../../../../assets/facebook-login-573x102.png"));

var _googleLogin573x = _interopRequireDefault(require("../../../../../../assets/google-login-573x102.png"));

var _list = _interopRequireDefault(require("../../utils/list.js"));

var _walletActions = require("@primusmoney/react_client_wallet/imports/view/actions/wallet/wallet-actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var LoginForm = /*#__PURE__*/function (_React$Component) {
  _inherits(LoginForm, _React$Component);

  var _super = _createSuper(LoginForm);

  function LoginForm(props) {
    var _this;

    _classCallCheck(this, LoginForm);

    _this = _super.call(this, props);
    _this.app = _this.props.app;
    _this.getMvcModuleObject = _this.app.getMvcModuleObject;
    _this.getMvcMyQuoteObject = _this.app.getMvcMyQuoteObject;
    var username = '';
    var password = '';
    _this.nav_state_params = null;

    var logging_pending = _this.app.getVariable('logging_pending');

    _this.closing = false;
    _this.login_scheme_list_webapp = null;
    _this.login_scheme_list_dev = null;
    _this.default_local_schemeuuid = null;
    _this.state = {
      processinginfo: 'processing authentication',
      processing: logging_pending ? true : false,
      schemeuuid: null,
      username: username,
      password: password,
      loaded: false,
      message: '',
      supportdisclaimer: ''
    };
    return _this;
  }

  _createClass(LoginForm, [{
    key: "_setState",
    value: function _setState(state) {
      if (this.closing !== true) this.setState(state);
    } // post render commit phase

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      console.log('LoginForm.componentDidUpdate called');
      var mvcmodule = this.getMvcModuleObject();
      var logging_pending = this.app.getVariable('logging_pending');

      if (this.state.processing && this.state.processing != logging_pending) {
        this._setState({
          processing: false
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('LoginForm.componentDidMount called');
      var mvcmyquote = this.getMvcMyQuoteObject();
      var supportdisclaimer = mvcmyquote.t('This webapp has only been tested for Chrome on Android. \
												It may not work for other environments \
												(and actually does not in certain cases e.g. FireFox).');

      this._setState({
        supportdisclaimer: supportdisclaimer
      });

      this.checkNavigationState()["catch"](function (err) {
        console.log('error in LoginForm.checkNavigationState: ' + err);
      });
    }
  }, {
    key: "checkNavigationState",
    value: function () {
      var _checkNavigationState = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var mvcmyquote, rootsessionuuid, localscheme, app_nav_state, app_nav_target, startconditions, urlParams, txhash, currencyuuid, sessionuuid, schemeuuid, params, wallet, dataobj, _params;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid; // load additional login for webapp and dev

                _context.next = 4;
                return mvcmyquote.loadConfig('login-webapp');

              case 4:
                this.login_scheme_list_webapp = _context.sent;

                if (!(this.app.exec_env === 'dev')) {
                  _context.next = 9;
                  break;
                }

                _context.next = 8;
                return mvcmyquote.loadConfig('login-dev');

              case 8:
                this.login_scheme_list_dev = _context.sent;

              case 9:
                _context.next = 11;
                return mvcmyquote.getDefaultLocalSchemeInfo(rootsessionuuid);

              case 11:
                localscheme = _context.sent;
                this.default_local_schemeuuid = localscheme.uuid; // look if a transaction is defined in the url

                app_nav_state = this.app.getNavigationState();
                app_nav_target = app_nav_state.target;

                if (!(app_nav_target && app_nav_target.route == 'login' && app_nav_target.reached == false)) {
                  _context.next = 21;
                  break;
                }

                console.log('LoginForm.checkNavigationState target reached'); // we want to login before completing previous route

                this.nav_state_params = app_nav_target.params; // we reset processing and logging_pending in case they're not clean
                //await this.setProcessing(false);

                app_nav_target.reached = true;
                _context.next = 66;
                break;

              case 21:
                console.log('LoginForm.checkNavigationState starting from a clean slate'); // starting from a clean slate

                startconditions = this.app.getVariable('start_conditions');
                urlParams = startconditions.urlParams;

                if (!urlParams) {
                  _context.next = 66;
                  break;
                }

                txhash = urlParams.get('tx');
                currencyuuid = urlParams.get('ccy');
                sessionuuid = urlParams.get('sessionuuid');
                schemeuuid = urlParams.get('schemeuuid');

                if (!sessionuuid) {
                  _context.next = 53;
                  break;
                }

                // we need to reconnect to a pre-existing
                // (e.g. coming back from oauth2 authentication)
                console.log('LoginForm.checkNavigationState reconnecting to session:' + sessionuuid);

                if (!schemeuuid) {
                  _context.next = 51;
                  break;
                }

                params = {
                  sessionuuid: sessionuuid,
                  schemeuuid: schemeuuid
                };

                if (!(startconditions.walletforscheme_treating !== true)) {
                  _context.next = 51;
                  break;
                }

                console.log('LoginForm.checkNavigationState looking for a wallet for scheme ' + schemeuuid);
                startconditions.walletforscheme_treating = true; // set processing flag on

                _context.next = 38;
                return this.setProcessing(true);

              case 38:
                _context.next = 40;
                return this._getWalletForScheme(params)["catch"](function (err) {
                  console.log('error in LoginForm._getWalletForScheme:' + err);
                });

              case 40:
                wallet = _context.sent;

                if (!wallet) {
                  _context.next = 48;
                  break;
                }

                console.log('LoginForm.checkNavigationState found wallet for session:' + sessionuuid);
                _context.next = 45;
                return this.postLogin('bootstrap');

              case 45:
                startconditions.walletforscheme_treated = true;
                _context.next = 51;
                break;

              case 48:
                console.log('LoginForm.checkNavigationState reset url, could not find wallet for session:' + sessionuuid); // we restart on a clean url

                _context.next = 51;
                return this.app.resetHref();

              case 51:
                _context.next = 66;
                break;

              case 53:
                if (!(txhash && currencyuuid)) {
                  _context.next = 66;
                  break;
                }

                _context.next = 56;
                return this.app.getStartDataObject()["catch"](function (err) {
                  console.log('error calling App.getStartDataObject: ' + err);
                });

              case 56:
                dataobj = _context.sent;

                if (!dataobj) {
                  _context.next = 64;
                  break;
                }

                if (!(dataobj.viewed !== true)) {
                  _context.next = 62;
                  break;
                }

                _params = {
                  dataobject: dataobj
                };
                _context.next = 62;
                return this.app.gotoMyQuotePage(_params)["catch"](function (err) {
                  console.log('error calling App.gotoMyQuotePage: ' + err);
                });

              case 62:
                _context.next = 66;
                break;

              case 64:
                _context.next = 66;
                return this.app.onEmptyStartDataObject(txhash, currencyuuid)["catch"](function (err) {
                  console.log('error calling App.onEmptyStartDataObject: ' + err);
                });

              case 66:
                console.log('LoginForm.checkNavigationState loaded');

                this._setState({
                  loaded: true
                });

              case 68:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function checkNavigationState() {
        return _checkNavigationState.apply(this, arguments);
      }

      return checkNavigationState;
    }() // end of life

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log('LoginForm.componentWillUnmount called');
      this.closing = true;
    }
  }, {
    key: "setProcessing",
    value: function () {
      var _setProcessing = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(bChoice) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log('LoginForm.setProcessing called with:' + bChoice);

                if (bChoice) {
                  this.app.setVariable('logging_pending', true);

                  this._setState({
                    processing: true
                  });
                } else {
                  this.app.setVariable('logging_pending', false);

                  this._setState({
                    processing: false
                  });
                }

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function setProcessing(_x) {
        return _setProcessing.apply(this, arguments);
      }

      return setProcessing;
    }()
  }, {
    key: "_getWalletForScheme",
    value: function () {
      var _getWalletForScheme2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(params) {
        var mvcmodule, mvcmyquote, rootsessionuuid, childsessionuuid, schemeuuid, username, password, persistedwallet, result, prms, ret, walletlist, i, wallet, walletinfo, unlocked, currentwalletname, currentwalletuuid, walletname, walletuuid, islocked;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                mvcmodule = this.getMvcModuleObject();
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                childsessionuuid = params.sessionuuid;
                schemeuuid = params.schemeuuid;
                username = params.username;
                password = params.password;
                // we ask hooks if they handle this mode
                result = [];
                prms = [];
                prms.push(rootsessionuuid);
                prms.push(childsessionuuid);
                prms.push(schemeuuid);
                prms.push(username); //prms.push(password);

                _context3.next = 15;
                return mvcmyquote.invokeAsyncHooks('getWalletForScheme_asynchook', result, prms);

              case 15:
                ret = _context3.sent;

                if (ret && result.persistedwallet) {
                  persistedwallet = result.persistedwallet;
                }

                if (persistedwallet) {
                  _context3.next = 35;
                  break;
                }

                _context3.next = 20;
                return this._doFetchWalletList(mvcmodule, rootsessionuuid)["catch"](function (err) {
                  console.log('error in LoginForm._getWalletForScheme:' + err);
                });

              case 20:
                walletlist = _context3.sent;
                i = 0;

              case 22:
                if (!(i < walletlist.length)) {
                  _context3.next = 35;
                  break;
                }

                wallet = walletlist[i];

                if (!(username && wallet.name !== username)) {
                  _context3.next = 26;
                  break;
                }

                return _context3.abrupt("continue", 32);

              case 26:
                _context3.next = 28;
                return mvcmyquote.getWalletInfo(rootsessionuuid, wallet.uuid)["catch"](function (err) {
                  console.log('error in LoginForm._getWalletForScheme:' + err);
                });

              case 28:
                walletinfo = _context3.sent;

                if (!(walletinfo && walletinfo.schemeuuid === schemeuuid)) {
                  _context3.next = 32;
                  break;
                }

                persistedwallet = walletinfo;
                return _context3.abrupt("break", 35);

              case 32:
                i++;
                _context3.next = 22;
                break;

              case 35:
                if (!(username && password)) {
                  _context3.next = 51;
                  break;
                }

                if (persistedwallet) {
                  _context3.next = 40;
                  break;
                }

                _context3.next = 39;
                return mvcmyquote.makeWallet(rootsessionuuid, username, schemeuuid, password)["catch"](function (err) {
                  console.log('error in LoginForm._getWalletForScheme:' + err);
                });

              case 39:
                persistedwallet = _context3.sent;

              case 40:
                if (persistedwallet) {
                  _context3.next = 43;
                  break;
                }

                this.app.alert('Could not create wallet with these credentials');
                return _context3.abrupt("return");

              case 43:
                _context3.next = 45;
                return this._doOpenWallet(mvcmodule, rootsessionuuid, persistedwallet.uuid, persistedwallet.name, password)["catch"](function (err) {
                  console.log('error in LoginForm._getWalletForScheme:' + err);
                });

              case 45:
                unlocked = _context3.sent;

                if (unlocked) {
                  _context3.next = 49;
                  break;
                }

                console.log('LoginForm._getWalletForScheme wallet authentication failed');
                return _context3.abrupt("return");

              case 49:
                _context3.next = 70;
                break;

              case 51:
                if (persistedwallet) {
                  _context3.next = 57;
                  break;
                }

                _context3.next = 54;
                return mvcmyquote.makeWalletFromSession(childsessionuuid, schemeuuid)["catch"](function (err) {
                  console.log('error in LoginForm._getWalletForScheme:' + err);
                });

              case 54:
                persistedwallet = _context3.sent;
                _context3.next = 59;
                break;

              case 57:
                _context3.next = 59;
                return mvcmyquote.attachSessionToWallet(childsessionuuid, persistedwallet.uuid)["catch"](function (err) {
                  console.log('error in LoginForm._getWalletForScheme:' + err);
                });

              case 59:
                if (persistedwallet) {
                  _context3.next = 62;
                  break;
                }

                this.app.alert('Could not create wallet for oauth2');
                return _context3.abrupt("return");

              case 62:
                // synchronize redux
                currentwalletname = this.props.currentwallet;
                currentwalletuuid = this.props.currentwalletuuid;
                walletname = persistedwallet.name;
                walletuuid = persistedwallet.uuid;
                if (currentwalletname != walletname || currentwalletuuid == walletuuid) this.props.doSetWallet(walletname, walletuuid);
                _context3.next = 69;
                return this._doCheckWalletLock(mvcmodule, rootsessionuuid, walletuuid)["catch"](function (err) {
                  console.log('error in LoginForm._getWalletForScheme:' + err);
                });

              case 69:
                islocked = _context3.sent;

              case 70:
                return _context3.abrupt("return", persistedwallet);

              case 71:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _getWalletForScheme(_x2) {
        return _getWalletForScheme2.apply(this, arguments);
      }

      return _getWalletForScheme;
    }() // user actions

  }, {
    key: "_doFetchWalletList",
    value: function () {
      var _doFetchWalletList2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(mvcmodule, sessionuuid) {
        var _this2 = this;

        var result;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                result = new Promise(function (resolve, reject) {
                  _this2.props.doFetchWalletList(mvcmodule, sessionuuid, function (err, res) {
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

      function _doFetchWalletList(_x3, _x4) {
        return _doFetchWalletList2.apply(this, arguments);
      }

      return _doFetchWalletList;
    }()
  }, {
    key: "_doModifyWallet",
    value: function () {
      var _doModifyWallet2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(mvcmodule, sessionuuid, walletuuid, walletinfo) {
        var _this3 = this;

        var result;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                result = new Promise(function (resolve, reject) {
                  _this3.props.doModifyWallet(mvcmodule, sessionuuid, walletuuid, walletinfo, function (err, res) {
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

      function _doModifyWallet(_x5, _x6, _x7, _x8) {
        return _doModifyWallet2.apply(this, arguments);
      }

      return _doModifyWallet;
    }()
  }, {
    key: "_doImportWallet",
    value: function () {
      var _doImportWallet2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(mvcmodule, sessionuuid, configurl, authname, password, options) {
        var _this4 = this;

        var result;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                result = new Promise(function (resolve, reject) {
                  _this4.props.doImportWallet(mvcmodule, sessionuuid, configurl, authname, password, options, function (err, res) {
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

      function _doImportWallet(_x9, _x10, _x11, _x12, _x13, _x14) {
        return _doImportWallet2.apply(this, arguments);
      }

      return _doImportWallet;
    }()
  }, {
    key: "_doOpenWallet",
    value: function () {
      var _doOpenWallet2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(mvcmodule, sessionuuid, walletuuid, walletname, password) {
        var _this5 = this;

        var result;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                result = new Promise(function (resolve, reject) {
                  _this5.props.doOpenWallet(mvcmodule, sessionuuid, walletuuid, walletname, password, function (err, res) {
                    if (err) reject(err);else resolve(res);
                  });
                });
                return _context7.abrupt("return", result);

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function _doOpenWallet(_x15, _x16, _x17, _x18, _x19) {
        return _doOpenWallet2.apply(this, arguments);
      }

      return _doOpenWallet;
    }()
  }, {
    key: "_doCheckWalletLock",
    value: function () {
      var _doCheckWalletLock2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(mvcmodule, sessionuuid, walletuuid) {
        var _this6 = this;

        var result;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                result = new Promise(function (resolve, reject) {
                  _this6.props.doCheckWalletLock(mvcmodule, sessionuuid, walletuuid, function (err, res) {
                    if (err) reject(err);else resolve(res);
                  });
                });
                return _context8.abrupt("return", result);

              case 2:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function _doCheckWalletLock(_x20, _x21, _x22) {
        return _doCheckWalletLock2.apply(this, arguments);
      }

      return _doCheckWalletLock;
    }()
  }, {
    key: "preLogin",
    value: function () {
      var _preLogin = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(mode) {
        var mvcmyquote, rootsessionuuid, _this$state, schemeuuid, username, password, result, params, ret, _schemeuuid, _username, _password;

        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                console.log('LoginForm.preLogin called');
                _context9.prev = 1;
                // we give a chance for hooks to fill or modify the credentials
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                _this$state = this.state, schemeuuid = _this$state.schemeuuid, username = _this$state.username, password = _this$state.password;
                result = [];
                params = [];
                params.push(mode ? mode : 'none');
                params.push(rootsessionuuid);
                params.push(schemeuuid);
                params.push(username); //params.push(password);

                _context9.next = 13;
                return mvcmyquote.invokeAsyncHooks('preLogin_asynchook', result, params);

              case 13:
                ret = _context9.sent;

                if (ret && result.credentials) {
                  _schemeuuid = result.credentials.schemeuuid;
                  _username = result.credentials.username;
                  _password = result.credentials.password ? result.credentials.password : password;

                  this._setState({
                    username: _username,
                    password: _password,
                    schemeuuid: _schemeuuid
                  });
                }

                _context9.next = 20;
                break;

              case 17:
                _context9.prev = 17;
                _context9.t0 = _context9["catch"](1);
                console.log('exception in LoginForm.preLogin:' + _context9.t0);

              case 20:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[1, 17]]);
      }));

      function preLogin(_x23) {
        return _preLogin.apply(this, arguments);
      }

      return preLogin;
    }()
  }, {
    key: "postLogin",
    value: function () {
      var _postLogin = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(mode) {
        var mvcmyquote, rootsessionuuid, walletuuid, result, params, ret, dataobj, _params2, start_parameters, nav_state_params, _previous_app_state, target;

        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                console.log('LoginForm.postLogin called with mode: ' + (mode ? mode : 'unknown'));
                _context10.prev = 1;
                // we notify hooks login completed and about to jump to dataobject or action
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid;
                result = [];
                params = [];
                params.push(mode ? mode : 'none');
                params.push(rootsessionuuid);
                params.push(walletuuid);
                _context10.next = 12;
                return mvcmyquote.invokeAsyncHooks('postLogin_asynchook', result, params);

              case 12:
                ret = _context10.sent;

                if (!(ret && result.gotoRoute && result.gotoRoute.route)) {
                  _context10.next = 19;
                  break;
                }

                _context10.next = 16;
                return this.app.gotoRoute(result.gotoRoute.route, result.gotoRoute.params);

              case 16:
                _context10.next = 18;
                return this.setProcessing(false);

              case 18:
                return _context10.abrupt("return");

              case 19:
                _context10.next = 24;
                break;

              case 21:
                _context10.prev = 21;
                _context10.t0 = _context10["catch"](1);
                console.log('exception in LoginForm.postLogin:' + _context10.t0);

              case 24:
                _context10.prev = 24;

                if (!(mode == 'bootstrap')) {
                  _context10.next = 48;
                  break;
                }

                _context10.next = 28;
                return this.app.getStartDataObject()["catch"](function (err) {
                  console.log('error calling App.getStartDataObject: ' + err);
                });

              case 28:
                dataobj = _context10.sent;

                if (!dataobj) {
                  _context10.next = 36;
                  break;
                }

                if (!(dataobj.viewed !== true)) {
                  _context10.next = 34;
                  break;
                }

                _params2 = {
                  action: 'view',
                  dataobject: dataobj
                };
                _context10.next = 34;
                return this.app.gotoMyQuotePage(_params2)["catch"](function (err) {
                  console.log('error calling App.gotoMyQuotePage: ' + err);
                });

              case 34:
                _context10.next = 46;
                break;

              case 36:
                _context10.next = 38;
                return this.app.getStartParameters();

              case 38:
                start_parameters = _context10.sent;

                if (!start_parameters.route) {
                  _context10.next = 44;
                  break;
                }

                _context10.next = 42;
                return this.app.gotoRoute(start_parameters.route, start_parameters);

              case 42:
                _context10.next = 46;
                break;

              case 44:
                _context10.next = 46;
                return this.app.gotoRoute('home');

              case 46:
                _context10.next = 55;
                break;

              case 48:
                // action to complete
                nav_state_params = this.nav_state_params;
                _previous_app_state = this.app._getPreviousNavigationState();
                target = _previous_app_state ? _previous_app_state['target'] : null;

                if (!(target && target.route && target.params)) {
                  _context10.next = 55;
                  break;
                }

                if (!target.params.action) target.params.action = nav_state_params && nav_state_params.action ? nav_state_params.action : 'create';
                _context10.next = 55;
                return this.app.gotoRoute(target.route, target.params);

              case 55:
                _context10.next = 60;
                break;

              case 57:
                _context10.prev = 57;
                _context10.t1 = _context10["catch"](24);
                console.log('exception in LoginForm.postLogin:' + _context10.t1);

              case 60:
                _context10.next = 62;
                return this.setProcessing(false);

              case 62:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[1, 21], [24, 57]]);
      }));

      function postLogin(_x24) {
        return _postLogin.apply(this, arguments);
      }

      return postLogin;
    }()
  }, {
    key: "onSubmit",
    value: function () {
      var _onSubmit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        var mvcmyquote, rootsessionuuid, _this$state2, schemeuuid, username, password, params, wallet;

        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                console.log('LoginForm.onSubmit pressed!');
                _context11.prev = 1;
                _context11.next = 4;
                return this.preLogin('submit');

              case 4:
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                _this$state2 = this.state, schemeuuid = _this$state2.schemeuuid, username = _this$state2.username, password = _this$state2.password;
                params = {};
                params.schemeuuid = schemeuuid;
                params.username = username;
                params.password = password;
                _context11.next = 13;
                return this._getWalletForScheme(params)["catch"](function (err) {
                  console.log('error in LoginForm.onSubmit:' + err);
                });

              case 13:
                wallet = _context11.sent;

                if (wallet) {
                  _context11.next = 17;
                  break;
                }

                console.log('LoginForm.onSubmit login failed');
                return _context11.abrupt("return");

              case 17:
                console.log('logged in successful');
                _context11.next = 20;
                return this.postLogin('submit');

              case 20:
                _context11.next = 25;
                break;

              case 22:
                _context11.prev = 22;
                _context11.t0 = _context11["catch"](1);
                console.log('exception in LoginForm.onSubmit:' + _context11.t0);

              case 25:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[1, 22]]);
      }));

      function onSubmit() {
        return _onSubmit.apply(this, arguments);
      }

      return onSubmit;
    }()
  }, {
    key: "oauth2Login",
    value: function () {
      var _oauth2Login = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(servicename, schemeuuid) {
        var mvcmyquote, rootsessionuuid, childsessionuuid, cleanurl, redirectappurl, _previous_app_state, target, actionparams, _root, dataobject_routes, _keys, i, params, authorizeurl;

        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                console.log('LoginForm.oauth2Login called');
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                _context12.next = 5;
                return mvcmyquote.createChildSession(rootsessionuuid);

              case 5:
                childsessionuuid = _context12.sent;
                _context12.next = 8;
                return this.app.getCleanUrl();

              case 8:
                cleanurl = _context12.sent;
                redirectappurl = cleanurl; // oauth2 authentication part

                redirectappurl += '?sessionuuid=' + childsessionuuid;
                redirectappurl += '&schemeuuid=' + schemeuuid; // action to complete

                _previous_app_state = this.app._getPreviousNavigationState();
                target = _previous_app_state ? _previous_app_state['target'] : null;

                if (target && target.route && target.params) {
                  actionparams = target.params;
                  _root = this.app.getVariable('Root');
                  dataobject_routes = _root._getDataObjectRoutes();

                  if (dataobject_routes.includes(target.route) !== true) {
                    _keys = Object.keys(actionparams);

                    for (i = 0; i < _keys.length; i++) {
                      redirectappurl += '&' + _keys[i] + '=' + actionparams[_keys[i]];
                    }
                  } else {
                    if (actionparams.txhash && actionparams.currencyuuid) {
                      redirectappurl += '&route=' + target.route;
                      redirectappurl += '&tx=' + actionparams.txhash;
                      redirectappurl += '&ccy=' + actionparams.currencyuuid;
                    }
                  }
                }

                params = {
                  client: 'web',
                  closewindow: '0',
                  appurl: redirectappurl
                }; //var params = {client: 'web', closewindow: '0', appurl: 'none'};

                _context12.next = 18;
                return mvcmyquote.oauth2AuthorizeUrl(childsessionuuid, schemeuuid, params)["catch"](function (err) {
                  console.log('error in LoginForm.oauth2Login:' + err);
                });

              case 18:
                authorizeurl = _context12.sent;
                _context12.next = 21;
                return this.setProcessing(true);

              case 21:
                _context12.next = 23;
                return this.app.gotoUrl(authorizeurl);

              case 23:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function oauth2Login(_x25, _x26) {
        return _oauth2Login.apply(this, arguments);
      }

      return oauth2Login;
    }()
  }, {
    key: "onClickItem",
    value: function () {
      var _onClickItem = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(item) {
        var type, schemeuuid, mvcmyquote, rootsessionuuid, result, params, ret, _mvcmyquote, _rootsessionuuid, _result, _params3, _ret;

        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                type = item.type;
                schemeuuid = item.uuid;

                this._setState({
                  schemeuuid: schemeuuid
                });

                _context13.prev = 3;

                if (!(item.credentials === true)) {
                  _context13.next = 19;
                  break;
                }

                // we give a chance for hooks to fill the credentials
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                result = [];
                params = [];
                params.push(rootsessionuuid);
                params.push(item);
                _context13.next = 13;
                return mvcmyquote.invokeAsyncHooks('getLoginCredentials_asynchook', result, params);

              case 13:
                ret = _context13.sent;

                if (!(ret && result.credentials)) {
                  _context13.next = 19;
                  break;
                }

                this._setState({
                  username: result.credentials.username,
                  password: result.credentials.password,
                  schemeuuid: result.credentials.schemeuuid
                }); // call onSubmit if requested


                if (!(result.credentials.automatic_submit !== false)) {
                  _context13.next = 19;
                  break;
                }

                _context13.next = 19;
                return this.onSubmit();

              case 19:
                _context13.t0 = type;
                _context13.next = _context13.t0 === 0 ? 22 : _context13.t0 === 1 ? 27 : 27;
                break;

              case 22:
                if (!(item.credentials !== true)) {
                  _context13.next = 26;
                  break;
                }

                throw 'alternative authentication mode with credentials not supported for local authentication';

              case 26:
                return _context13.abrupt("break", 52);

              case 27:
                if (!(item.credentials !== true)) {
                  _context13.next = 51;
                  break;
                }

                _context13.t1 = item.mode;
                _context13.next = _context13.t1 === 'oauth2' ? 31 : 34;
                break;

              case 31:
                _context13.next = 33;
                return this.oauth2Login(item.provider, schemeuuid);

              case 33:
                return _context13.abrupt("break", 49);

              case 34:
                // we ask hooks if they handle this mode
                _mvcmyquote = this.getMvcMyQuoteObject();
                _rootsessionuuid = this.props.rootsessionuuid;
                _result = [];
                _params3 = [];

                _params3.push(_rootsessionuuid);

                _params3.push(item);

                _context13.next = 42;
                return _mvcmyquote.invokeAsyncHooks('altModeLogin_asynchook', _result, _params3);

              case 42:
                _ret = _context13.sent;

                if (!(_ret && _result.gotoRoute && _result.gotoRoute.route)) {
                  _context13.next = 48;
                  break;
                }

                _context13.next = 46;
                return this.app.gotoRoute(_result.gotoRoute.route, _result.gotoRoute.params);

              case 46:
                _context13.next = 49;
                break;

              case 48:
                throw 'authentication mode is not supported: ' + item.mode;

              case 49:
                _context13.next = 51;
                break;

              case 51:
                return _context13.abrupt("break", 52);

              case 52:
                _context13.next = 57;
                break;

              case 54:
                _context13.prev = 54;
                _context13.t2 = _context13["catch"](3);
                console.log('exception in LoginForm.onClickItem:' + _context13.t2);

              case 57:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this, [[3, 54]]);
      }));

      function onClickItem(_x27) {
        return _onClickItem.apply(this, arguments);
      }

      return onClickItem;
    }() // rendering

  }, {
    key: "renderLoginForm",
    value: function renderLoginForm() {
      var _this7 = this;

      var _this$state3 = this.state,
          username = _this$state3.username,
          password = _this$state3.password;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "Form"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormGroup, {
        controlId: "username"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormLabel, null, "User"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormControl, {
        autoFocus: true,
        type: "email",
        value: username,
        onChange: function onChange(e) {
          return _this7._setState({
            username: e.target.value
          });
        }
      })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormGroup, {
        controlId: "password"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormLabel, null, "Password"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormControl, {
        value: password,
        onChange: function onChange(e) {
          return _this7._setState({
            password: e.target.value
          });
        },
        type: "password"
      })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        onClick: this.onSubmit.bind(this),
        type: "submit"
      }, "Login"));
    }
  }, {
    key: "renderItem",
    value: function renderItem(item) {
      var type = item.type;
      var label = item.label;

      if (item.image) {
        // display a logo
        switch (item.name) {
          // built-in
          case 'facebook':
            return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Image["default"], {
              src: _facebookLogin573x["default"],
              fluid: true
            }));

          case 'google':
            return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Image["default"], {
              src: _googleLogin573x["default"],
              fluid: true
            }));
          // webapp additional

          default:
            // path in item.image
            return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Image["default"], {
              src: item.image,
              fluid: true
            }));
        }
      } else {
        // standard text line
        return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", null, label));
      }
    }
  }, {
    key: "_getLoginSchemeList",
    value: function _getLoginSchemeList() {
      // built-in logins

      /*let schemeList = [
      	{name: 'facebook', label: 'facebook', image: 'inline', type: 1, mode: 'oauth2', provider: 'facebook', uuid: 'd8dbb10e-a478-e52c-b96b-29af6f48ae9b'}, 
      	{name: 'google', label: 'google', image: 'inline', type: 1, mode: 'oauth2', provider: 'google', uuid: '47b0806f-c3fa-65f6-b356-8715a2bcfa0c'},
      	{name: 'primusmoney', label: 'connect with primus money', type: 1, credentials: true, uuid: 'd3b4fa61-ed65-11f6-4877-b169441dbe58'}
      ];*/
      var schemeList = [{
        name: 'facebook',
        label: 'facebook',
        image: 'inline',
        type: 1,
        mode: 'oauth2',
        provider: 'facebook',
        uuid: 'd8dbb10e-a478-e52c-b96b-29af6f48ae9b'
      }, {
        name: 'primusmoney',
        label: 'connect with a primus money account',
        type: 1,
        credentials: true,
        uuid: 'd3b4fa61-ed65-11f6-4877-b169441dbe58'
      }]; // webapp additional logins

      if (this.login_scheme_list_webapp) {
        for (var i = 0; i < this.login_scheme_list_webapp.length; i++) {
          schemeList.push(this.login_scheme_list_webapp[i]);
        }
      }

      if (this.app.exec_env === 'dev') {
        // only for dev
        if (this.login_scheme_list_dev) {
          for (var i = 0; i < this.login_scheme_list_dev.length; i++) {
            schemeList.push(this.login_scheme_list_dev[i]);
          }
        }
      } // put schemes with image first


      var image_schemes = [];
      var label_schemes = [];

      for (var i = 0; i < schemeList.length; i++) {
        if (schemeList[i].image) image_schemes.push(schemeList[i]);else label_schemes.push(schemeList[i]);
      }

      var _schemeList = image_schemes.concat(label_schemes); // filter login schemes that have been disabled (if any)


      var boot_webapp = this.app.getConfig();
      var logins_config = boot_webapp.logins;
      var disabled = logins_config && logins_config.disable ? logins_config.disable : [];

      if (disabled && disabled.length) {
        _schemeList = _schemeList.filter(function (scheme) {
          return disabled.includes(scheme.name) !== true;
        });
      }

      return _schemeList;
    }
  }, {
    key: "_isCredentialsScheme",
    value: function _isCredentialsScheme(schemeuuid) {
      if (!schemeuuid) return false;
      var scheme;

      var schemeList = this._getLoginSchemeList();

      for (var i = 0; i < schemeList.length; i++) {
        if (schemeList[i].uuid === schemeuuid) {
          scheme = schemeList[i];
          break;
        }
      }

      if (!scheme) {
        // check if it is the default local scheme
        if (schemeuuid === this.default_local_schemeuuid) return true;
        return false;
      }

      if (scheme.credentials === true) return true;
      return false;
    }
  }, {
    key: "renderAuthList",
    value: function renderAuthList() {
      var _this8 = this;

      var schemeList = this._getLoginSchemeList();

      return /*#__PURE__*/_react["default"].createElement(_list["default"], {
        items: schemeList,
        onClickItem: function onClickItem(item) {
          return _this8.onClickItem(item);
        },
        render: function render(item) {
          return _this8.renderItem(item);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state4 = this.state,
          loaded = _this$state4.loaded,
          processing = _this$state4.processing,
          supportdisclaimer = _this$state4.supportdisclaimer,
          schemeuuid = _this$state4.schemeuuid; // initial

      if (loaded !== true) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "Splash"
        }, /*#__PURE__*/_react["default"].createElement("div", null, this.state.processinginfo), /*#__PURE__*/_react["default"].createElement(_reactActivity.Dots, null));
      } // during processing of submit


      if (processing === true) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "Splash"
        }, /*#__PURE__*/_react["default"].createElement("div", null, this.state.processinginfo), /*#__PURE__*/_react["default"].createElement(_reactActivity.Dots, null));
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "Container LoginContainer"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "AuthBox"
      }, this._isCredentialsScheme(schemeuuid) ? this.renderLoginForm() : this.renderAuthList()), /*#__PURE__*/_react["default"].createElement("div", {
        className: "SupportDisclaimerBox"
      }, supportdisclaimer));
    }
  }]);

  return LoginForm;
}(_react["default"].Component); // propTypes validation


exports.LoginForm = LoginForm;
LoginForm.propTypes = {
  app: _propTypes["default"].object.isRequired,
  rootsessionuuid: _propTypes["default"].string,
  isLoginPending: _propTypes["default"].bool,
  isLoggedIn: _propTypes["default"].bool,
  currentwallet: _propTypes["default"].string,
  currentwalletuuid: _propTypes["default"].string,
  doFetchWalletList: _propTypes["default"].func.isRequired,
  doImportWallet: _propTypes["default"].func.isRequired,
  doModifyWallet: _propTypes["default"].func.isRequired,
  doOpenWallet: _propTypes["default"].func.isRequired,
  doLockWallet: _propTypes["default"].func.isRequired,
  doCheckWalletLock: _propTypes["default"].func.isRequired,
  resetWallet: _propTypes["default"].func.isRequired,
  doSetWallet: _propTypes["default"].func.isRequired
}; //redux

var mapStateToProps = function mapStateToProps(state) {
  return {
    rootsessionuuid: state.session.sessionuuid,
    isLoginPending: state.login.pending,
    isLoggedIn: state.login.success,
    lasterror: state.login.error,
    currentwallet: state.wallets.walletname,
    currentwalletuuid: state.wallets.walletuuid
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    doFetchWalletList: function doFetchWalletList(mvcmodule, sessionuuid, callback) {
      return dispatch((0, _walletActions.doFetchWalletList)(mvcmodule, sessionuuid, callback));
    },
    doImportWallet: function doImportWallet(mvcmodule, sessionuuid, configurl, authname, password, options, callback) {
      return dispatch((0, _walletActions.doImportWallet)(mvcmodule, sessionuuid, configurl, authname, password, options, callback));
    },
    doModifyWallet: function doModifyWallet(mvcmodule, sessionuuid, walletuuid, walletinfo, callback) {
      return dispatch((0, _walletActions.doModifyWallet)(mvcmodule, sessionuuid, walletuuid, walletinfo, callback));
    },
    doOpenWallet: function doOpenWallet(mvcmodule, session, walletuuid, walletname, password, callback) {
      return dispatch((0, _walletActions.doOpenWallet)(mvcmodule, session, walletuuid, walletname, password, callback));
    },
    doLockWallet: function doLockWallet() {
      return dispatch((0, _walletActions.doLockWallet)());
    },
    resetWallet: function resetWallet() {
      return dispatch((0, _walletActions.resetWallet)());
    },
    doSetWallet: function doSetWallet(walletname, walletuuid) {
      return dispatch((0, _walletActions.doSetWallet)(walletname, walletuuid));
    },
    doCheckWalletLock: function doCheckWalletLock(mvcmodule, sessionuuid, walletuuid, callback) {
      return dispatch((0, _walletActions.doCheckWalletLock)(mvcmodule, sessionuuid, walletuuid, callback));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LoginForm);

exports["default"] = _default;