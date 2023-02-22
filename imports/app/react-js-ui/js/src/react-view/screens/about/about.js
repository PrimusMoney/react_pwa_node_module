"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AboutScreen = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _header = _interopRequireDefault(require("../../navigation/header/header.js"));

var _mobileDeviceDetect = require("mobile-device-detect");

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

var AboutScreen = /*#__PURE__*/function (_React$Component) {
  _inherits(AboutScreen, _React$Component);

  var _super = _createSuper(AboutScreen);

  function AboutScreen(props) {
    var _this;

    _classCallCheck(this, AboutScreen);

    _this = _super.call(this, props);
    _this.app = _this.props.app;
    _this.getMvcModuleObject = _this.app.getMvcModuleObject;
    _this.getMvcMyQuoteObject = _this.app.getMvcMyQuoteObject;
    var exec_env = _this.app.exec_env;
    _this.state = {
      exec_env: exec_env,
      liabilitymessage: '',
      privacylink: 'https://www.primusmoney.com/privacy_en',
      versioninfo: {},
      settingsinfo: {},
      walletinfo: {},
      deviceinfo: {},
      connectioninfo: {},
      dev_info: {}
    };
    return _this;
  } // post render commit phase


  _createClass(AboutScreen, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('AboutScreen.componentDidMount called');
      var mvcmodule = this.getMvcModuleObject();
      var mvcmyquote = this.getMvcMyQuoteObject();
      var webapp_name = this.app.basename;
      var app_version = this.app.current_version;
      var mvcmodule_version = mvcmodule.current_version;
      var api_version = mvcmodule.getAPIVersion();
      var versioninfo = {};
      versioninfo.webapp = webapp_name;
      versioninfo.app_ver = app_version;
      versioninfo.mvc_ver = mvcmodule_version;
      versioninfo.api_ver = api_version;
      var deviceinfo = {};
      deviceinfo.osName = _mobileDeviceDetect.osName;
      deviceinfo.osVersion = _mobileDeviceDetect.osVersion;
      deviceinfo.fullBrowserVersion = _mobileDeviceDetect.fullBrowserVersion;
      var liabilitymessage = mvcmyquote.t('This application is for demonstration purposes. It is provided free of charge \
			without any guarantee attached to it. \
			You should not use it in contexts where you may suffer losses relying on its \
			continued availability or proper functioning.'); // privacy url

      var privacylink = this.state.privacylink;
      var app_privacy_url = this.app.getConfig('privacy_url');
      if (app_privacy_url) privacylink = app_privacy_url; // version info

      this.setState({
        versioninfo: versioninfo,
        deviceinfo: deviceinfo,
        liabilitymessage: liabilitymessage,
        privacylink: privacylink
      }); // dev info

      var app_exec_env = this.app.exec_env;

      if (app_exec_env != 'dev') {// return;
      }

      var dev_info = {};
      dev_info.app_exec_env = app_exec_env;
      dev_info.react_version = _react["default"].version;
      dev_info.mvc_exec_env = mvcmodule.getClientExecutionEnvironment();
      this.setState({
        dev_info: dev_info
      }); // async info

      this.checkContext();
    }
  }, {
    key: "checkContext",
    value: function () {
      var _checkContext = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var mvcmodule, mvcmyquote, rootsessionuuid, connectioninfo, isonline, settingsinfo, boot_webapp, webapp_name, firstboot, webapp_firstboot, walletinfo, walletuuid, user, wallet;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                mvcmodule = this.getMvcModuleObject();
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid; // connecton

                connectioninfo = {};
                _context.next = 6;
                return this.mvcmyquote.checkOnline();

              case 6:
                isonline = _context.sent;
                connectioninfo.online_status_string = isonline ? mvcmyquote.t('you are online') : mvcmyquote.t('you appear to be offline'); // app, boot_webapp & local settings

                settingsinfo = {};
                boot_webapp = this.app.getConfig();
                settingsinfo.conf_update_time = boot_webapp.updatetime;
                settingsinfo.app_update_time = this.app.updatetime;
                webapp_name = this.app.basename;
                _context.next = 15;
                return this.mvcmyquote.readSettings(['firstboot']);

              case 15:
                firstboot = _context.sent;
                webapp_firstboot = firstboot[webapp_name] ? firstboot[webapp_name] : firstboot;
                settingsinfo.time_string = webapp_firstboot.time ? mvcmyquote.formatDate(webapp_firstboot.time / 1000, 'YYYY-mm-dd HH:MM:SS') : mvcmyquote.t('never');
                settingsinfo.initial_time_string = webapp_firstboot.initial_time ? mvcmyquote.formatDate(webapp_firstboot.initial_time / 1000, 'YYYY-mm-dd HH:MM:SS') : mvcmyquote.t('n.a.');
                settingsinfo.last_update_string = webapp_firstboot.last_update ? mvcmyquote.formatDate(webapp_firstboot.last_update / 1000, 'YYYY-mm-dd HH:MM:SS') : mvcmyquote.t('never');
                walletinfo = {};
                walletuuid = this.props.currentwalletuuid;
                _context.next = 24;
                return mvcmodule.getUserInfo(rootsessionuuid)["catch"](function (err) {});

              case 24:
                user = _context.sent;
                _context.next = 27;
                return mvcmodule.getWalletInfo(rootsessionuuid, walletuuid)["catch"](function (err) {});

              case 27:
                wallet = _context.sent;

                if (wallet) {
                  walletinfo.name = wallet.name;
                  walletinfo.uuid = walletuuid;
                  walletinfo.useruuid = user ? user.useruuid : null;
                }

                this.setState({
                  settingsinfo: settingsinfo,
                  connectioninfo: connectioninfo,
                  walletinfo: walletinfo
                });

              case 30:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function checkContext() {
        return _checkContext.apply(this, arguments);
      }

      return checkContext;
    }()
  }, {
    key: "onPrivacyLinkClick",
    value: function () {
      var _onPrivacyLinkClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var privacylink;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                privacylink = this.state.privacylink; // jump

                _context2.next = 3;
                return this.app.gotoUrl(privacylink);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onPrivacyLinkClick() {
        return _onPrivacyLinkClick.apply(this, arguments);
      }

      return onPrivacyLinkClick;
    }() // rendering

  }, {
    key: "renderAboutView",
    value: function renderAboutView() {
      var _this$state = this.state,
          versioninfo = _this$state.versioninfo,
          deviceinfo = _this$state.deviceinfo,
          settingsinfo = _this$state.settingsinfo,
          connectioninfo = _this$state.connectioninfo,
          walletinfo = _this$state.walletinfo,
          liabilitymessage = _this$state.liabilitymessage,
          privacylink = _this$state.privacylink,
          exec_env = _this$state.exec_env,
          dev_info = _this$state.dev_info;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "Container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "Title"
      }, "About Primus Money"), /*#__PURE__*/_react["default"].createElement("div", null, "\xA0"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "TextBox"
      }, /*#__PURE__*/_react["default"].createElement("div", null, 'web app: ' + versioninfo.webapp), /*#__PURE__*/_react["default"].createElement("div", null, 'app: ' + versioninfo.app_ver), /*#__PURE__*/_react["default"].createElement("div", null, 'mvc: ' + versioninfo.mvc_ver), /*#__PURE__*/_react["default"].createElement("div", null, 'api: ' + versioninfo.api_ver)), /*#__PURE__*/_react["default"].createElement("div", {
        className: "TextBox"
      }, /*#__PURE__*/_react["default"].createElement("div", null, 'os name: ' + deviceinfo.osName), /*#__PURE__*/_react["default"].createElement("div", null, 'os version: ' + deviceinfo.osVersion), /*#__PURE__*/_react["default"].createElement("div", null, 'browser version: ' + deviceinfo.fullBrowserVersion)), /*#__PURE__*/_react["default"].createElement("div", null, "\xA0"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "TextBox"
      }, /*#__PURE__*/_react["default"].createElement("div", null, 'last setup: ' + (settingsinfo.time_string ? settingsinfo.time_string : 'none')), /*#__PURE__*/_react["default"].createElement("div", null, 'initial setup: ' + (settingsinfo.initial_time_string ? settingsinfo.initial_time_string : 'none')), /*#__PURE__*/_react["default"].createElement("div", null, 'conf update: ' + (settingsinfo.conf_update_time ? settingsinfo.conf_update_time : 'none')), /*#__PURE__*/_react["default"].createElement("div", null, 'app update: ' + (settingsinfo.app_update_time ? settingsinfo.app_update_time : 'none')), /*#__PURE__*/_react["default"].createElement("div", null, 'last update: ' + (settingsinfo.last_update_string ? settingsinfo.last_update_string : 'none'))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "TextBox"
      }, /*#__PURE__*/_react["default"].createElement("div", null, 'online status: ' + (connectioninfo.online_status_string ? connectioninfo.online_status_string : ''))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "TextBox"
      }, /*#__PURE__*/_react["default"].createElement("div", null, 'current wallet: ' + (walletinfo.name ? walletinfo.name : 'none')), /*#__PURE__*/_react["default"].createElement("div", null, 'wallet uuid: ' + (walletinfo.uuid ? walletinfo.uuid : 'none')), /*#__PURE__*/_react["default"].createElement("div", null, 'user uuid: ' + (walletinfo.useruuid ? walletinfo.useruuid : 'none'))), /*#__PURE__*/_react["default"].createElement("div", null, "\xA0"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "TextBox"
      }, /*#__PURE__*/_react["default"].createElement("span", null, "Privacy policy: "), /*#__PURE__*/_react["default"].createElement("span", {
        className: "ShareLink",
        onClick: this.onPrivacyLinkClick.bind(this)
      }, privacylink)), /*#__PURE__*/_react["default"].createElement("div", null, "\xA0"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "TextBox"
      }, liabilitymessage), /*#__PURE__*/_react["default"].createElement("div", null, "\xA0"), exec_env == 'dev' ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "DevInfo"
      }, /*#__PURE__*/_react["default"].createElement("div", null, 'app env: ' + dev_info.app_exec_env), /*#__PURE__*/_react["default"].createElement("div", null, 'react: ' + dev_info.react_version), /*#__PURE__*/_react["default"].createElement("div", null, 'mvc env: ' + dev_info.mvc_exec_env), /*#__PURE__*/_react["default"].createElement("div", null, "isMobile: ", _mobileDeviceDetect.isMobile ? 'true' : 'false'), /*#__PURE__*/_react["default"].createElement("div", null, "isMobileOnly: ", _mobileDeviceDetect.isMobileOnly ? 'true' : 'false'), /*#__PURE__*/_react["default"].createElement("div", null, "isTablet: ", _mobileDeviceDetect.isTablet ? 'true' : 'false'), /*#__PURE__*/_react["default"].createElement("div", null, "isBrowser: ", _mobileDeviceDetect.isBrowser ? 'true' : 'false'), /*#__PURE__*/_react["default"].createElement("div", null, "isSmartTV: ", _mobileDeviceDetect.isSmartTV ? 'true' : 'false'), /*#__PURE__*/_react["default"].createElement("div", null, "isWearable: ", _mobileDeviceDetect.isWearable ? 'true' : 'false'), /*#__PURE__*/_react["default"].createElement("div", null, "isConsole: ", _mobileDeviceDetect.isConsole ? 'true' : 'false'), /*#__PURE__*/_react["default"].createElement("div", null, "isAndroid: ", _mobileDeviceDetect.isAndroid ? 'true' : 'false'), /*#__PURE__*/_react["default"].createElement("div", null, "isWinPhone: ", _mobileDeviceDetect.isWinPhone ? 'true' : 'false'), /*#__PURE__*/_react["default"].createElement("div", null, "isIOS: ", _mobileDeviceDetect.isIOS ? 'true' : 'false'), /*#__PURE__*/_react["default"].createElement("div", null, "isChrome: ", _mobileDeviceDetect.isChrome ? 'true' : 'false'), /*#__PURE__*/_react["default"].createElement("div", null, "isFirefox: ", _mobileDeviceDetect.isFirefox ? 'true' : 'false'), /*#__PURE__*/_react["default"].createElement("div", null, "isSafari: ", _mobileDeviceDetect.isSafari ? 'true' : 'false'), /*#__PURE__*/_react["default"].createElement("div", null, "isOpera: ", _mobileDeviceDetect.isOpera ? 'true' : 'false'), /*#__PURE__*/_react["default"].createElement("div", null, "isIE: ", _mobileDeviceDetect.isIE ? 'true' : 'false'), /*#__PURE__*/_react["default"].createElement("div", null, "isEdge: ", _mobileDeviceDetect.isEdge ? 'true' : 'false'), /*#__PURE__*/_react["default"].createElement("div", null, "isYandex: ", _mobileDeviceDetect.isYandex ? 'true' : 'false'), /*#__PURE__*/_react["default"].createElement("div", null, "isChromium: ", _mobileDeviceDetect.isChromium ? 'true' : 'false'), /*#__PURE__*/_react["default"].createElement("div", null, "isMobileSafari: ", _mobileDeviceDetect.isMobileSafari ? 'true' : 'false'), /*#__PURE__*/_react["default"].createElement("div", null, "deviceDetect: ", typeof _mobileDeviceDetect.deviceDetect !== 'undefined' ? JSON.stringify((0, _mobileDeviceDetect.deviceDetect)()) : null)) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "Screen"
      }, /*#__PURE__*/_react["default"].createElement(_header["default"], {
        app: this.app
      }), this.renderAboutView());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      // fill state
      return {
        rootsessionuuid: nextProps.rootsessionuuid
      };
    }
  }]);

  return AboutScreen;
}(_react["default"].Component); // propTypes validation


exports.AboutScreen = AboutScreen;
AboutScreen.propTypes = {
  app: _propTypes["default"].object.isRequired,
  rootsessionuuid: _propTypes["default"].string,
  currentwalletuuid: _propTypes["default"].string
}; //redux

var mapStateToProps = function mapStateToProps(state) {
  return {
    rootsessionuuid: state.session.sessionuuid,
    currentwalletuuid: state.wallets.walletuuid
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AboutScreen);

exports["default"] = _default;