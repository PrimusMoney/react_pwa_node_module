"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _react2 = require("redux-persist/lib/integration/react");

var _store = require("./src/react-view/store/store.js");

var _logo = _interopRequireDefault(require("../assets/logo.svg"));

require("bootstrap/dist/css/bootstrap.min.css");

require("../css/app.css");

var _mobileDeviceDetect = require("mobile-device-detect");

var _splash = _interopRequireDefault(require("./src/react-view/screens/splash/splash.js"));

var _root2 = _interopRequireDefault(require("./src/react-view/screens/root/root.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppStore = /*#__PURE__*/_createClass(function AppStore() {
  _classCallCheck(this, AppStore);
});

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    var app_id = window.simplestore.app_id ? ++window.simplestore.app_id : window.simplestore.app_id = 1;
    _this.app_id = 'app-' + app_id;
    console.log('App constructor called for: ' + _this.app_id);
    _this.exec_env = App.EXEC_ENV;
    _this.current_version = '0.25.06.2023.03.03';
    App.theapp = _assertThisInitialized(_this);
    App.theapp_id = _this.app_id;
    _this.basename = App.BASE_NAME ? App.BASE_NAME : "my-pwa";
    _this.updatetime = 'January 30, 2023';
    _this.App = App;
    _this.mvcmodule = null;
    _this.mvcmyquote = null;
    _this.mvcmypwa = null;
    _this.nav_states = [{}];
    _this.initial_url = null;
    _this.settings = Object.create(null);
    _this.varmap = Object.create(null);
    _this.boot_webapp = {};
    _this.window_listeners = {};
    _this.navigation_state_promises = {};
    _this.state = {
      name: 'PoA wallets',
      loading: true,
      bodyText: 'loading'
    };
    return _this;
  }

  _createClass(App, [{
    key: "onLoaded",
    value: function () {
      var _onLoaded = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _globalscope, React_Client_Wallet, react_client_wallet, react_client_wallet_init, mvcmodule, clientglobal, Client, clientmodule, subdomain, boot_webapp, boot_time, updatetime, cleanurl, default_first_boot, this_boot, newprodenvtime, webapp_name, webapp_firstboot, newwebappprodenvtime, start, url, urlParams, sessionuuid, wallet;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _globalscope = window;
                console.log('App.onLoaded called for: ' + this.app_id); // mvc module
                // @primusmoney/react_client_wallet
                //var React_Client_Wallet = require('@primusmoney/react_client_wallet');

                _context.next = 4;
                return Promise.resolve().then(function () {
                  return _interopRequireWildcard(require('@primusmoney/react_client_wallet'));
                });

              case 4:
                React_Client_Wallet = _context.sent["default"];
                // segment code
                react_client_wallet = React_Client_Wallet.getObject();
                _context.next = 8;
                return react_client_wallet.init();

              case 8:
                react_client_wallet_init = _context.sent;
                // mvc module (used by some ModuleObject for communicating with app)
                mvcmodule = react_client_wallet.getMvcAPI();
                clientglobal = react_client_wallet.getGlobalObject(); // set app object

                mvcmodule.setAppObject(this);
                this.mvcmodule = mvcmodule;

                if (!AppStore.mvcmodule) {
                  // because App can be constructed multiple times
                  AppStore.mvcmodule = this.mvcmodule;
                } // set client module


                Client = require('../../js/src/web-client.js')["default"];
                clientmodule = Client.getObject();

                if (this.exec_env === 'prod') {
                  clientglobal.muteConsoleLog();
                } else if (this.exec_env === 'dev') {
                  clientmodule.execution_env = 'dev';
                } // load additional modules (currencies api)


                require('../../includes/mvc-api/module-load.js'); // boot webapp (before initializing clientmodule)
                // GET subdomain (if any)


                _context.next = 20;
                return this.getSubDomain();

              case 20:
                subdomain = _context.sent;
                boot_time = Date.now();

                if (!subdomain) {
                  _context.next = 29;
                  break;
                }

                _context.next = 25;
                return clientmodule.loadConfig('./' + subdomain + '/boot-webapp', boot_time);

              case 25:
                boot_webapp = _context.sent;

                if (!boot_webapp) {
                  _context.next = 29;
                  break;
                }

                _context.next = 29;
                return clientmodule.setNameSpace(subdomain);

              case 29:
                if (boot_webapp) {
                  _context.next = 33;
                  break;
                }

                _context.next = 32;
                return clientmodule.loadConfig('boot-webapp', boot_time);

              case 32:
                boot_webapp = _context.sent;

              case 33:
                if (!(boot_webapp && boot_webapp.updatetime)) {
                  _context.next = 37;
                  break;
                }

                updatetime = new Date(boot_webapp.updatetime).getTime();
                _context.next = 37;
                return clientmodule.setUpdatetime(updatetime);

              case 37:
                _context.next = 39;
                return clientmodule.init();

              case 39:
                this.mvcmodule.setClientModuleObject(clientmodule); // create mvc myquote

                require('./src/model/myquote/module-load.js');

                this.mvcmyquote = clientglobal.getModuleObject('mvc-myquote');
                this.mvcmypwa = clientglobal.getModuleObject('mvc-myquote');

                if (!AppStore.mvcmyquote) {
                  // because App can be constructed multiple times
                  AppStore.mvcmyquote = this.mvcmyquote;
                } // set cleanurl as root uri for contracts in mvcmyquote


                _context.next = 46;
                return this.getCleanUrl();

              case 46:
                cleanurl = _context.sent;
                _context.next = 49;
                return this.mvcmyquote.setContractPathRootUri(cleanurl);

              case 49:
                if (boot_webapp) {
                  _context.next = 53;
                  break;
                }

                _context.next = 52;
                return this.mvcmyquote.loadConfig('boot-webapp');

              case 52:
                boot_webapp = _context.sent;

              case 53:
                this.boot_webapp = boot_webapp ? boot_webapp : {}; // load Root routes depending on what sub-apps are enabled

                _context.next = 56;
                return _root2["default"].loadRoutes(this);

              case 56:
                if (this.exec_env == 'dev') {
                  console.log('App.onLoaded execution environment is DEV'); // put app in simplestore for debugging purposes

                  _globalscope.simplestore.app = this;
                } else {
                  // look if boot-webapp.json forces to turn environment to dev
                  if (this.boot_webapp.env === 'dev') {
                    this.exec_env = 'dev';
                    _globalscope.simplestore.app = this;
                    clientglobal.setExecutionEnvironment('dev');
                    console.log('Execution environment turned to dev in App.onLoaded');
                  }

                  ;
                } // webapp name


                if (this.boot_webapp.name) this.basename = this.boot_webapp.name; // first startup

                default_first_boot = {
                  initprod: false
                };
                this_boot = {
                  initprod: true,
                  version: this.current_version,
                  time: Date.now()
                };
                _context.next = 62;
                return this.mvcmyquote.readSettings(['firstboot'], default_first_boot);

              case 62:
                this.settings['firstboot'] = _context.sent;

                if (!(this.settings['firstboot'].initprod !== true)) {
                  _context.next = 76;
                  break;
                }

                _context.prev = 64;
                _context.next = 67;
                return this.mvcmyquote.initProdEnvironment()["catch"](function (err) {
                  console.log('error while setting up prod environment: ' + err);
                });

              case 67:
                _context.next = 69;
                return this.mvcmyquote.putSettings(['firstboot'], this_boot)["catch"](function (err) {
                  console.log('error while saving firstboot setting: ' + err);
                });

              case 69:
                _context.next = 74;
                break;

              case 71:
                _context.prev = 71;
                _context.t0 = _context["catch"](64);
                console.log('exception while setting up prod environment: ' + _context.t0);

              case 74:
                _context.next = 123;
                break;

              case 76:
                // check if not too old
                newprodenvtime = new Date(this.updatetime).getTime();

                if (!(this.settings['firstboot'].time < newprodenvtime)) {
                  _context.next = 92;
                  break;
                }

                _context.prev = 78;
                _context.next = 81;
                return this.mvcmyquote.initProdEnvironment()["catch"](function (err) {
                  console.log('error while setting up prod environment: ' + err);
                });

              case 81:
                this_boot.last_update = newprodenvtime;
                this_boot.initial_time = this.settings['firstboot'].initial_time ? this.settings['firstboot'].initial_time : this.settings['firstboot'].time;
                _context.next = 85;
                return this.mvcmyquote.putSettings(['firstboot'], this_boot)["catch"](function (err) {
                  console.log('error while saving firstboot setting: ' + err);
                });

              case 85:
                _context.next = 90;
                break;

              case 87:
                _context.prev = 87;
                _context.t1 = _context["catch"](78);
                console.log('exception while setting up prod environment: ' + _context.t1);

              case 90:
                _context.next = 123;
                break;

              case 92:
                if (!boot_webapp) {
                  _context.next = 123;
                  break;
                }

                webapp_name = boot_webapp.name ? boot_webapp.name : 'noname';
                webapp_firstboot = this.settings['firstboot'][webapp_name] ? this.settings['firstboot'][webapp_name] : {
                  initprod: false
                };
                this_boot[webapp_name] = {
                  initprod: true,
                  version: this.current_version,
                  time: Date.now()
                };

                if (!(webapp_firstboot.initprod !== true)) {
                  _context.next = 109;
                  break;
                }

                _context.prev = 97;
                _context.next = 100;
                return this.mvcmyquote.initProdEnvironment()["catch"](function (err) {
                  console.log('error while setting up prod environment: ' + err);
                });

              case 100:
                _context.next = 102;
                return this.mvcmyquote.putSettings(['firstboot'], this_boot)["catch"](function (err) {
                  console.log('error while saving firstboot setting: ' + err);
                });

              case 102:
                _context.next = 107;
                break;

              case 104:
                _context.prev = 104;
                _context.t2 = _context["catch"](97);
                console.log('exception while setting up prod environment: ' + _context.t2);

              case 107:
                _context.next = 123;
                break;

              case 109:
                // check if not too old
                newwebappprodenvtime = new Date(boot_webapp.updatetime).getTime();

                if (!(webapp_firstboot.time < newwebappprodenvtime)) {
                  _context.next = 123;
                  break;
                }

                _context.prev = 111;
                _context.next = 114;
                return this.mvcmyquote.initProdEnvironment()["catch"](function (err) {
                  console.log('error while setting up prod environment: ' + err);
                });

              case 114:
                this_boot[webapp_name].last_update = newwebappprodenvtime;
                this_boot[webapp_name].initial_time = webapp_firstboot.initial_time ? webapp_firstboot.initial_time : this_boot[webapp_name].time;
                _context.next = 118;
                return this.mvcmyquote.putSettings(['firstboot'], this_boot)["catch"](function (err) {
                  console.log('error while saving firstboot setting: ' + err);
                });

              case 118:
                _context.next = 123;
                break;

              case 120:
                _context.prev = 120;
                _context.t3 = _context["catch"](111);
                console.log('exception while setting up prod environment: ' + _context.t3);

              case 123:
                // read query string parameters for start conditions
                start = {};
                url = window.location.href;
                urlParams = new URLSearchParams(window.location.search);
                sessionuuid = urlParams.get('sessionuuid');
                wallet = urlParams.get('wallet');
                start.url = url;
                start.urlParams = urlParams;
                start.sessionuuid = sessionuuid;
                start.wallet = wallet;
                this.setVariable('start_conditions', start);
                _context.next = 135;
                return this.checkBrowser();

              case 135:
                console.log('App.onLoaded setting loading to false');
                this.setState({
                  loading: false
                });

              case 137:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[64, 71], [78, 87], [97, 104], [111, 120]]);
      }));

      function onLoaded() {
        return _onLoaded.apply(this, arguments);
      }

      return onLoaded;
    }()
  }, {
    key: "checkBrowser",
    value: function () {
      var _checkBrowser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var ischrome;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                ischrome = _mobileDeviceDetect.isChrome;

                if (!ischrome) {//this.alert(this.mvcmyquote.t('This application is only supported on Chrome for the moment. It may not operate properly in the browser you are currently using.'));
                }

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function checkBrowser() {
        return _checkBrowser.apply(this, arguments);
      }

      return checkBrowser;
    }()
  }, {
    key: "getFullBrowserVersion",
    value: function () {
      var _getFullBrowserVersion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", _mobileDeviceDetect.fullBrowserVersion);

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getFullBrowserVersion() {
        return _getFullBrowserVersion.apply(this, arguments);
      }

      return getFullBrowserVersion;
    }()
  }, {
    key: "getDeviceInfo",
    value: function () {
      var _getDeviceInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", typeof _mobileDeviceDetect.deviceDetect !== 'undefined' ? JSON.stringify((0, _mobileDeviceDetect.deviceDetect)()) : 'unknown');

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function getDeviceInfo() {
        return _getDeviceInfo.apply(this, arguments);
      }

      return getDeviceInfo;
    }()
  }, {
    key: "_setState",
    value: function () {
      var _setState2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(json) {
        var _this2 = this;

        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", new Promise(function (resolve, reject) {
                  _this2.setState(json, function (err, res) {
                    if (err) reject(err);else resolve(res);
                  });
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function _setState(_x2) {
        return _setState2.apply(this, arguments);
      }

      return _setState;
    }()
  }, {
    key: "refreshPage",
    value: function () {
      var _refreshPage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var lastrefresh, mvcmyquote;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                console.log('App.refreshPage called');
                lastrefresh = Date.now();
                _context6.next = 4;
                return this._setState({
                  lastrefresh: lastrefresh
                });

              case 4:
                mvcmyquote = this.mvcmyquote;
                if (mvcmyquote) mvcmyquote.signalEvent('on_refreshPage');
                return _context6.abrupt("return", true);

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function refreshPage() {
        return _refreshPage.apply(this, arguments);
      }

      return refreshPage;
    }() // config

  }, {
    key: "getConfig",
    value: function getConfig(key) {
      if (key) return this.boot_webapp[key];else return this.boot_webapp;
    } // variables

  }, {
    key: "getVariable",
    value: function getVariable(key) {
      return this.varmap[key];
    }
  }, {
    key: "setVariable",
    value: function setVariable(key, value) {
      console.log('App.setVariable ' + key + ' to ' + (value ? value : ' null'));
      this.varmap[key] = value;
    } // accessible to childrens to use core api

  }, {
    key: "getMvcModuleObject",
    value: function getMvcModuleObject() {
      if (this.mvcmodule) return this.mvcmodule;else {
        if (AppStore.mvcmodule) this.mvcmodule = AppStore.mvcmodule;
        ;
        return AppStore.mvcmodule;
      }
    }
  }, {
    key: "getMvcMyQuoteObject",
    value: function getMvcMyQuoteObject() {
      if (this.mvcmyquote) return this.mvcmyquote;else {
        if (AppStore.mvcmyquote) this.mvcmyquote = AppStore.mvcmyquote;
        ;
        return AppStore.mvcmyquote;
      }
    }
  }, {
    key: "getMvcMyPWAObject",
    value: function getMvcMyPWAObject() {
      if (this.mvcmypwa) return this.mvcmypwa;else {
        if (AppStore.mvcmyquote) this.mvcmypwa = AppStore.mvcmyquote;
        return AppStore.mvcmyquote;
      }
    }
  }, {
    key: "checkOnline",
    value: function () {
      var _checkOnline = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var _root;

        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _root = this.getVariable('Root');

                if (!_root) {
                  _context7.next = 5;
                  break;
                }

                return _context7.abrupt("return", _root._checkOnline());

              case 5:
                return _context7.abrupt("return", Promise.reject('could not find root component'));

              case 6:
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
    }()
  }, {
    key: "checkWalletUnlocked",
    value: function () {
      var _checkWalletUnlocked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var _root;

        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _root = this.getVariable('Root');

                if (!_root) {
                  _context8.next = 5;
                  break;
                }

                return _context8.abrupt("return", _root._checkWalletUnlocked());

              case 5:
                return _context8.abrupt("return", Promise.reject('could not find root component'));

              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function checkWalletUnlocked() {
        return _checkWalletUnlocked.apply(this, arguments);
      }

      return checkWalletUnlocked;
    }()
  }, {
    key: "openWallet",
    value: function () {
      var _openWallet = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(walletuuid, walletname, password) {
        var _root;

        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _root = this.getVariable('Root');

                if (!_root) {
                  _context9.next = 5;
                  break;
                }

                return _context9.abrupt("return", _root._openWallet(walletuuid, walletname, password));

              case 5:
                return _context9.abrupt("return", Promise.reject('could not find root component'));

              case 6:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function openWallet(_x3, _x4, _x5) {
        return _openWallet.apply(this, arguments);
      }

      return openWallet;
    }()
  }, {
    key: "setWallet",
    value: function () {
      var _setWallet = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(walletuuid, walletname) {
        var _root;

        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _root = this.getVariable('Root');

                if (!_root) {
                  _context10.next = 5;
                  break;
                }

                return _context10.abrupt("return", _root._setWallet(walletuuid, walletname));

              case 5:
                return _context10.abrupt("return", Promise.reject('could not find root component'));

              case 6:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function setWallet(_x6, _x7) {
        return _setWallet.apply(this, arguments);
      }

      return setWallet;
    }()
  }, {
    key: "resetWallet",
    value: function () {
      var _resetWallet = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        var _root;

        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _root = this.getVariable('Root');

                if (!_root) {
                  _context11.next = 5;
                  break;
                }

                return _context11.abrupt("return", _root._resetWallet());

              case 5:
                return _context11.abrupt("return", Promise.reject('could not find root component'));

              case 6:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function resetWallet() {
        return _resetWallet.apply(this, arguments);
      }

      return resetWallet;
    }()
  }, {
    key: "getDeviceWallet",
    value: function () {
      var _getDeviceWallet = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
        var _root;

        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _root = this.getVariable('Root');

                if (!_root) {
                  _context12.next = 5;
                  break;
                }

                return _context12.abrupt("return", _root._getDeviceWallet());

              case 5:
                return _context12.abrupt("return", Promise.reject('could not find root component'));

              case 6:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function getDeviceWallet() {
        return _getDeviceWallet.apply(this, arguments);
      }

      return getDeviceWallet;
    }()
  }, {
    key: "isDeviceWallet",
    value: function () {
      var _isDeviceWallet = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(walletuuid) {
        var _root;

        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _root = this.getVariable('Root');

                if (!_root) {
                  _context13.next = 5;
                  break;
                }

                return _context13.abrupt("return", _root._isDeviceWallet(walletuuid));

              case 5:
                return _context13.abrupt("return", Promise.reject('could not find root component'));

              case 6:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function isDeviceWallet(_x8) {
        return _isDeviceWallet.apply(this, arguments);
      }

      return isDeviceWallet;
    }()
  }, {
    key: "openDeviceWallet",
    value: function () {
      var _openDeviceWallet = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
        var _root;

        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _root = this.getVariable('Root');

                if (!_root) {
                  _context14.next = 5;
                  break;
                }

                return _context14.abrupt("return", _root._openDeviceWallet());

              case 5:
                return _context14.abrupt("return", Promise.reject('could not find root component'));

              case 6:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function openDeviceWallet() {
        return _openDeviceWallet.apply(this, arguments);
      }

      return openDeviceWallet;
    }()
  }, {
    key: "closeDeviceWallet",
    value: function closeDeviceWallet() {
      // needs to be synchronous to be called in componentWillUnmount
      var _root = this.getVariable('Root');

      if (_root) {
        return _root._closeDeviceWallet();
      } else {
        console.log('could not find root component');
      }
    } // component life cycle

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('App.componentDidMount called for: ' + this.app_id);

      if (typeof App.theapp === 'undefined' || App.theapp === null) {
        App.theapp = this;
        App.theapp_id = this.app_id;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log('App.componentWillUnmount called for: ' + this.app_id);

      if (App.theapp_id == this.app_id) {
        App.theapp = null;
        App.theapp_id = null;
      }
    } // render

  }, {
    key: "render",
    value: function render() {
      if (this.state.loading) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "App"
        }, /*#__PURE__*/_react["default"].createElement(_splash["default"], {
          app: this
        }));
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "App"
      }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
        store: _store.store
      }, /*#__PURE__*/_react["default"].createElement(_react2.PersistGate, {
        persistor: _store.persistor
      }, /*#__PURE__*/_react["default"].createElement(_root2["default"], {
        app: this
      }))));
    } // alert

  }, {
    key: "alert",
    value: function (_alert) {
      function alert(_x) {
        return _alert.apply(this, arguments);
      }

      alert.toString = function () {
        return _alert.toString();
      };

      return alert;
    }(
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(message) {
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                alert(message);

              case 1:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15);
      }));

      return function (_x9) {
        return _ref.apply(this, arguments);
      };
    }())
  }, {
    key: "error",
    value: function () {
      var _error = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(message) {
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                if (!(this.exec_env === 'dev')) {
                  _context16.next = 2;
                  break;
                }

                return _context16.abrupt("return", this.alert(message));

              case 2:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function error(_x10) {
        return _error.apply(this, arguments);
      }

      return error;
    }()
  }, {
    key: "confirm",
    value: function () {
      var _confirm = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(message) {
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                return _context17.abrupt("return", window.confirm(message));

              case 1:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17);
      }));

      function confirm(_x11) {
        return _confirm.apply(this, arguments);
      }

      return confirm;
    }() // navigation

  }, {
    key: "gotoRoute",
    value: function () {
      var _gotoRoute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(route) {
        var params,
            steps,
            current_nav_state,
            _root,
            _args18 = arguments;

        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                params = _args18.length > 1 && _args18[1] !== undefined ? _args18[1] : [];
                steps = route.split("/");
                current_nav_state = {}; //this.nav_states.push(current_nav_state);

                current_nav_state.target = {
                  route: route,
                  steps: steps,
                  params: params,
                  reached: false
                };
                this.pushNavigationState(current_nav_state);
                _root = this.getVariable('Root');

                if (!_root) {
                  _context18.next = 11;
                  break;
                }

                _context18.next = 9;
                return _root._gotoRoute(route, params);

              case 9:
                _context18.next = 12;
                break;

              case 11:
                console.log('root component was not ready to process route: ' + route); // we will let root (or other components) check navigation state to post-process this route

              case 12:
                _context18.next = 14;
                return this.refreshPage();

              case 14:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function gotoRoute(_x12) {
        return _gotoRoute.apply(this, arguments);
      }

      return gotoRoute;
    }()
  }, {
    key: "gotoUrl",
    value: function () {
      var _gotoUrl = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(url) {
        var _root, URL, _URL$parse, query, _encodedurl, _url, _url2;

        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                console.log('App.gotoUrl called for ' + (url ? url : 'initial url'));
                _root = this.getVariable('Root');

                if (!_root) {
                  _context19.next = 36;
                  break;
                }

                if (!url) {
                  _context19.next = 33;
                  break;
                }

                URL = require("url");
                _URL$parse = URL.parse(url, true), query = _URL$parse.query;

                if (!query.b64url) {
                  _context19.next = 18;
                  break;
                }

                _context19.prev = 7;
                _encodedurl = query.b64url;
                _url = this.decodebase64(_encodedurl);
                return _context19.abrupt("return", this.gotoUrl(_url));

              case 13:
                _context19.prev = 13;
                _context19.t0 = _context19["catch"](7);
                throw new Error('exception in App.gotoUrl: ' + _context19.t0);

              case 16:
                _context19.next = 31;
                break;

              case 18:
                if (!query.hexurl) {
                  _context19.next = 30;
                  break;
                }

                _context19.prev = 19;
                _encodedurl = query.hexurl;
                _url2 = this.decodehex(_encodedurl);
                return _context19.abrupt("return", this.gotoUrl(_url2));

              case 25:
                _context19.prev = 25;
                _context19.t1 = _context19["catch"](19);
                throw new Error('exception in App.gotoUrl: ' + _context19.t1);

              case 28:
                _context19.next = 31;
                break;

              case 30:
                return _context19.abrupt("return", _root._gotoUrl(url));

              case 31:
                _context19.next = 34;
                break;

              case 33:
                return _context19.abrupt("return", _root._gotoUrl(url));

              case 34:
                _context19.next = 37;
                break;

              case 36:
                console.log('root component was not ready to process url: ' + url);

              case 37:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this, [[7, 13], [19, 25]]);
      }));

      function gotoUrl(_x13) {
        return _gotoUrl.apply(this, arguments);
      }

      return gotoUrl;
    }()
  }, {
    key: "hasReturnPath",
    value: function () {
      var _hasReturnPath = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
        var start_parameters, _return_url;

        return _regeneratorRuntime().wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                _context20.next = 2;
                return this.getStartParameters();

              case 2:
                start_parameters = _context20.sent;

                if (!start_parameters.returnurl) {
                  _context20.next = 7;
                  break;
                }

                _return_url = this.decodebase64(start_parameters.returnurl);

                if (!(_return_url && (_return_url.startsWith('http://') || _return_url.startsWith('https://')))) {
                  _context20.next = 7;
                  break;
                }

                return _context20.abrupt("return", true);

              case 7:
                return _context20.abrupt("return", false);

              case 8:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function hasReturnPath() {
        return _hasReturnPath.apply(this, arguments);
      }

      return hasReturnPath;
    }()
  }, {
    key: "returnToCaller",
    value: function () {
      var _returnToCaller = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
        var start_parameters, _return_url;

        return _regeneratorRuntime().wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                _context21.next = 2;
                return this.getStartParameters();

              case 2:
                start_parameters = _context21.sent;

                if (!start_parameters.returnurl) {
                  _context21.next = 7;
                  break;
                }

                _return_url = this.decodebase64(start_parameters.returnurl);

                if (!(_return_url && (_return_url.startsWith('http://') || _return_url.startsWith('https://')))) {
                  _context21.next = 7;
                  break;
                }

                return _context21.abrupt("return", this.gotoUrl(_return_url));

              case 7:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function returnToCaller() {
        return _returnToCaller.apply(this, arguments);
      }

      return returnToCaller;
    }() //
    // schemes

  }, {
    key: "getTransactionInfo",
    value: function () {
      var _getTransactionInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(schemeuuid, txhash) {
        var bTokenTx,
            _root,
            _args22 = arguments;

        return _regeneratorRuntime().wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                bTokenTx = _args22.length > 2 && _args22[2] !== undefined ? _args22[2] : false;
                _root = this.getVariable('Root');

                if (!_root) {
                  _context22.next = 6;
                  break;
                }

                return _context22.abrupt("return", _root._getTransactionInfo(schemeuuid, txhash, bTokenTx));

              case 6:
                console.log('root component was not ready ');

              case 7:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function getTransactionInfo(_x14, _x15) {
        return _getTransactionInfo.apply(this, arguments);
      }

      return getTransactionInfo;
    }()
  }, {
    key: "waitForTransactionInfo",
    value: function () {
      var _waitForTransactionInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(schemeuuid, txhash, options) {
        var _root;

        return _regeneratorRuntime().wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                _root = this.getVariable('Root');

                if (!_root) {
                  _context23.next = 5;
                  break;
                }

                return _context23.abrupt("return", _root._waitForTransactionInfo(schemeuuid, txhash, options));

              case 5:
                console.log('root component was not ready ');

              case 6:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function waitForTransactionInfo(_x16, _x17, _x18) {
        return _waitForTransactionInfo.apply(this, arguments);
      }

      return waitForTransactionInfo;
    }() //
    // currencies

  }, {
    key: "getCurrencyTransactionInfo",
    value: function () {
      var _getCurrencyTransactionInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(currencyuuid, txhash) {
        var _root;

        return _regeneratorRuntime().wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                _root = this.getVariable('Root');

                if (!_root) {
                  _context24.next = 5;
                  break;
                }

                return _context24.abrupt("return", _root._getCurrencyTransactionInfo(currencyuuid, txhash));

              case 5:
                console.log('root component was not ready ');

              case 6:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function getCurrencyTransactionInfo(_x19, _x20) {
        return _getCurrencyTransactionInfo.apply(this, arguments);
      }

      return getCurrencyTransactionInfo;
    }()
  }, {
    key: "waitForCurrencyTransactionInfo",
    value: function () {
      var _waitForCurrencyTransactionInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(currencyuuid, txhash, options) {
        var _root;

        return _regeneratorRuntime().wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                _root = this.getVariable('Root');

                if (!_root) {
                  _context25.next = 5;
                  break;
                }

                return _context25.abrupt("return", _root._waitForCurrencyTransactionInfo(currencyuuid, txhash, options));

              case 5:
                console.log('root component was not ready ');

              case 6:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function waitForCurrencyTransactionInfo(_x21, _x22, _x23) {
        return _waitForCurrencyTransactionInfo.apply(this, arguments);
      }

      return waitForCurrencyTransactionInfo;
    }() //
    // cards

  }, {
    key: "openCard",
    value: function () {
      var _openCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(carduuid) {
        var _root;

        return _regeneratorRuntime().wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                _root = this.getVariable('Root');

                if (!_root) {
                  _context26.next = 5;
                  break;
                }

                return _context26.abrupt("return", _root._openCard(carduuid));

              case 5:
                console.log('root component was not ready to open card: ' + carduuid);

              case 6:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function openCard(_x24) {
        return _openCard.apply(this, arguments);
      }

      return openCard;
    }()
  }, {
    key: "resetCard",
    value: function () {
      var _resetCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27() {
        var _root;

        return _regeneratorRuntime().wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                _root = this.getVariable('Root');

                if (!_root) {
                  _context27.next = 5;
                  break;
                }

                return _context27.abrupt("return", _root._resetCard());

              case 5:
                console.log('root component was not ready to rest card');

              case 6:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function resetCard() {
        return _resetCard.apply(this, arguments);
      }

      return resetCard;
    }()
  }, {
    key: "openCurrencyCard",
    value: function () {
      var _openCurrencyCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(currencyuuid) {
        var _root;

        return _regeneratorRuntime().wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                _root = this.getVariable('Root');

                if (!_root) {
                  _context28.next = 5;
                  break;
                }

                return _context28.abrupt("return", _root._openCurrencyCard(currencyuuid));

              case 5:
                console.log('root component was not ready to open card for currency: ' + currencyuuid);

              case 6:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      function openCurrencyCard(_x25) {
        return _openCurrencyCard.apply(this, arguments);
      }

      return openCurrencyCard;
    }()
  }, {
    key: "createCurrencyCard",
    value: function () {
      var _createCurrencyCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29(currencyuuid, signingkey) {
        var options,
            _root,
            _args29 = arguments;

        return _regeneratorRuntime().wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                options = _args29.length > 2 && _args29[2] !== undefined ? _args29[2] : {};
                _root = this.getVariable('Root');

                if (!_root) {
                  _context29.next = 6;
                  break;
                }

                return _context29.abrupt("return", _root._createCurrencyCard(currencyuuid, signingkey, options));

              case 6:
                console.log('root component was not ready to make card for currency: ' + currencyuuid);

              case 7:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));

      function createCurrencyCard(_x26, _x27) {
        return _createCurrencyCard.apply(this, arguments);
      }

      return createCurrencyCard;
    }()
  }, {
    key: "getCurrencyFeeLevel",
    value: function () {
      var _getCurrencyFeeLevel = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee30(currencyuuid) {
        var _root;

        return _regeneratorRuntime().wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                _root = this.getVariable('Root');

                if (!_root) {
                  _context30.next = 5;
                  break;
                }

                return _context30.abrupt("return", _root._getCurrencyFeeLevel(currencyuuid));

              case 5:
                console.log('root component was not ready to get fee level for currency: ' + currencyuuid);

              case 6:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));

      function getCurrencyFeeLevel(_x28) {
        return _getCurrencyFeeLevel.apply(this, arguments);
      }

      return getCurrencyFeeLevel;
    }()
  }, {
    key: "createLocalCard",
    value: function () {
      var _createLocalCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee31(web3providerurl, signingkey) {
        var _root;

        return _regeneratorRuntime().wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                _root = this.getVariable('Root');

                if (!_root) {
                  _context31.next = 5;
                  break;
                }

                return _context31.abrupt("return", _root._createLocalCard(web3providerurl, signingkey));

              case 5:
                console.log('root component was not ready to make card for web3 provider: ' + web3providerurl);

              case 6:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));

      function createLocalCard(_x29, _x30) {
        return _createLocalCard.apply(this, arguments);
      }

      return createLocalCard;
    }()
  }, {
    key: "openLocalCard",
    value: function () {
      var _openLocalCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee32(schemeuuid, address) {
        var _root;

        return _regeneratorRuntime().wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                _root = this.getVariable('Root');

                if (!_root) {
                  _context32.next = 5;
                  break;
                }

                return _context32.abrupt("return", _root._openLocalCard(schemeuuid, address));

              case 5:
                console.log('root component was not ready to open local card: ' + address);

              case 6:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));

      function openLocalCard(_x31, _x32) {
        return _openLocalCard.apply(this, arguments);
      }

      return openLocalCard;
    }()
  }, {
    key: "gotoMyQuotePage",
    value: function () {
      var _gotoMyQuotePage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee33(params) {
        var _root;

        return _regeneratorRuntime().wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                _root = this.getVariable('Root');

                if (!_root) {
                  _context33.next = 5;
                  break;
                }

                return _context33.abrupt("return", _root._gotoMyQuotePage(params));

              case 5:
                console.log('root component was not ready to process action: ' + (params && params.dataobject ? params.dataobject.type : null));

              case 6:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));

      function gotoMyQuotePage(_x33) {
        return _gotoMyQuotePage.apply(this, arguments);
      }

      return gotoMyQuotePage;
    }()
  }, {
    key: "getMyQuoteDataObject",
    value: function () {
      var _getMyQuoteDataObject = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee34(txhash, currencyuuid) {
        var _root;

        return _regeneratorRuntime().wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                _root = this.getVariable('Root');

                if (!_root) {
                  _context34.next = 5;
                  break;
                }

                return _context34.abrupt("return", _root._getMyQuoteDataObject(txhash, currencyuuid));

              case 5:
                console.log('root component was not ready to process txhash: ' + txhash);

              case 6:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));

      function getMyQuoteDataObject(_x34, _x35) {
        return _getMyQuoteDataObject.apply(this, arguments);
      }

      return getMyQuoteDataObject;
    }()
  }, {
    key: "getStartParameters",
    value: function () {
      var _getStartParameters = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee35() {
        var _root;

        return _regeneratorRuntime().wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                _root = this.getVariable('Root');

                if (!_root) {
                  _context35.next = 5;
                  break;
                }

                return _context35.abrupt("return", _root._getStartParameters());

              case 5:
                console.log('root component was not ready to process start data object');

              case 6:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, this);
      }));

      function getStartParameters() {
        return _getStartParameters.apply(this, arguments);
      }

      return getStartParameters;
    }()
  }, {
    key: "getStartDataObject",
    value: function () {
      var _getStartDataObject = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee36() {
        var _root;

        return _regeneratorRuntime().wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                _root = this.getVariable('Root');

                if (!_root) {
                  _context36.next = 5;
                  break;
                }

                return _context36.abrupt("return", _root._getStartDataObject());

              case 5:
                console.log('root component was not ready to process start data object');

              case 6:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this);
      }));

      function getStartDataObject() {
        return _getStartDataObject.apply(this, arguments);
      }

      return getStartDataObject;
    }()
  }, {
    key: "onEmptyStartDataObject",
    value: function () {
      var _onEmptyStartDataObject = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee37(txhash, currencyuuid) {
        var _root;

        return _regeneratorRuntime().wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                _root = this.getVariable('Root');

                if (!_root) {
                  _context37.next = 5;
                  break;
                }

                return _context37.abrupt("return", _root._onEmptyStartDataObject(txhash, currencyuuid));

              case 5:
                console.log('root component was not ready to handle empty data object');

              case 6:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this);
      }));

      function onEmptyStartDataObject(_x36, _x37) {
        return _onEmptyStartDataObject.apply(this, arguments);
      }

      return onEmptyStartDataObject;
    }()
  }, {
    key: "getCleanUrl",
    value: function () {
      var _getCleanUrl = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee38() {
        var cleanurl;
        return _regeneratorRuntime().wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                cleanurl = window.location.href;

                if (cleanurl.indexOf('#') != -1) {
                  // strip anchors
                  cleanurl = cleanurl.slice(0, cleanurl.indexOf('#'));
                }

                if (cleanurl.indexOf('?') != -1) {
                  // strip parameters
                  cleanurl = cleanurl.slice(0, cleanurl.indexOf('?'));
                }

                return _context38.abrupt("return", cleanurl);

              case 4:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38);
      }));

      function getCleanUrl() {
        return _getCleanUrl.apply(this, arguments);
      }

      return getCleanUrl;
    }()
  }, {
    key: "isValidUrl",
    value: function () {
      var _isValidUrl = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee39(url_string) {
        var inputElement;
        return _regeneratorRuntime().wrap(function _callee39$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                inputElement = document.createElement('input');
                inputElement.type = 'url';
                inputElement.value = url_string;

                if (inputElement.checkValidity()) {
                  _context39.next = 7;
                  break;
                }

                return _context39.abrupt("return", false);

              case 7:
                return _context39.abrupt("return", true);

              case 8:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee39);
      }));

      function isValidUrl(_x38) {
        return _isValidUrl.apply(this, arguments);
      }

      return isValidUrl;
    }()
  }, {
    key: "isInternalUrl",
    value: function () {
      var _isInternalUrl = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee40(url) {
        var cleanurl;
        return _regeneratorRuntime().wrap(function _callee40$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                _context40.next = 2;
                return this.getCleanUrl();

              case 2:
                cleanurl = _context40.sent;

                if (!(url && url.startsWith(cleanurl) === true)) {
                  _context40.next = 5;
                  break;
                }

                return _context40.abrupt("return", true);

              case 5:
                return _context40.abrupt("return", false);

              case 6:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40, this);
      }));

      function isInternalUrl(_x39) {
        return _isInternalUrl.apply(this, arguments);
      }

      return isInternalUrl;
    }()
  }, {
    key: "getSubDomain",
    value: function () {
      var _getSubDomain = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee41() {
        var fullurl, hostname, ipformat, subdomain;
        return _regeneratorRuntime().wrap(function _callee41$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                fullurl = window.location.href;
                hostname = window.location.hostname;

                if (!(hostname == 'localhost')) {
                  _context41.next = 4;
                  break;
                }

                return _context41.abrupt("return");

              case 4:
                ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

                if (!hostname.match(ipformat)) {
                  _context41.next = 7;
                  break;
                }

                return _context41.abrupt("return");

              case 7:
                subdomain = hostname.split('.')[0]; // only first if multiple (e.g. https://webapp.www.example.com)

                return _context41.abrupt("return", subdomain);

              case 9:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee41);
      }));

      function getSubDomain() {
        return _getSubDomain.apply(this, arguments);
      }

      return getSubDomain;
    }()
  }, {
    key: "getShareLink",
    value: function () {
      var _getShareLink = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee42(txhash, currencyuuid) {
        var sharelink;
        return _regeneratorRuntime().wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                _context42.next = 2;
                return this.getCleanUrl();

              case 2:
                sharelink = _context42.sent;
                sharelink += '?tx=' + txhash;
                sharelink += '&ccy=' + currencyuuid;
                return _context42.abrupt("return", sharelink);

              case 6:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee42, this);
      }));

      function getShareLink(_x40, _x41) {
        return _getShareLink.apply(this, arguments);
      }

      return getShareLink;
    }()
  }, {
    key: "sendShareLink",
    value: function () {
      var _sendShareLink = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee43(sharelinkmessage) {
        var to, subject, message, cleanurl, QS, applink, body, apphexlink;
        return _regeneratorRuntime().wrap(function _callee43$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                to = sharelinkmessage.to[0];
                subject = sharelinkmessage.subject;
                message = sharelinkmessage.message;
                _context43.next = 5;
                return this.getCleanUrl();

              case 5:
                cleanurl = _context43.sent;
                QS = require('querystring');
                applink = cleanurl + sharelinkmessage.route + '?' + (sharelinkmessage.params ? QS.stringify(sharelinkmessage.params) : '');
                body = '';
                body += message ? message + '\r\n\r\n' : '';
                body += 'Please use the url below by entering it in the address bar of your browser or entering it directly in the web app (right hamburger menu/Enter url)\r\n-------------\r\n\r\n';

                if (sharelinkmessage.linkformat === 'hex') {
                  apphexlink = 'primusmoney://hexurl/';
                  apphexlink += Buffer.from(applink).toString('hex');
                  body += apphexlink;
                } else {
                  body += applink;
                } // encode to transform \n into %0A and \r into %0D
                //let encodedbody = encodeURIComponent(body);


                return _context43.abrupt("return", this.sendEmail(to, subject, body));

              case 13:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee43, this);
      }));

      function sendShareLink(_x42) {
        return _sendShareLink.apply(this, arguments);
      }

      return sendShareLink;
    }()
  }, {
    key: "sendEmail",
    value: function () {
      var _sendEmail = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee44(to, subject, body) {
        var options,
            url,
            _args44 = arguments;
        return _regeneratorRuntime().wrap(function _callee44$(_context44) {
          while (1) {
            switch (_context44.prev = _context44.next) {
              case 0:
                options = _args44.length > 3 && _args44[3] !== undefined ? _args44[3] : {};
                url = 'mailto:' + (to ? to : '');
                url += '?subject=' + subject;
                url += '&body=' + encodeURIComponent(body);
                if (options.cc) url += '&cc=' + options.cc;
                if (options.bcc) url += '&bcc=' + options.bcc;
                window.location.href = url;
                return _context44.abrupt("return", true);

              case 8:
              case "end":
                return _context44.stop();
            }
          }
        }, _callee44);
      }));

      function sendEmail(_x43, _x44, _x45) {
        return _sendEmail.apply(this, arguments);
      }

      return sendEmail;
    }()
  }, {
    key: "getBaseTokenURI",
    value: function () {
      var _getBaseTokenURI = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee45(currencyuuid, cardaddress) {
        var basetokenuri;
        return _regeneratorRuntime().wrap(function _callee45$(_context45) {
          while (1) {
            switch (_context45.prev = _context45.next) {
              case 0:
                _context45.next = 2;
                return this.getCleanUrl();

              case 2:
                basetokenuri = _context45.sent;
                basetokenuri += '?ccy=' + currencyuuid;
                basetokenuri += '&card=' + cardaddress;
                basetokenuri += '&tokenid=';
                return _context45.abrupt("return", basetokenuri);

              case 7:
              case "end":
                return _context45.stop();
            }
          }
        }, _callee45, this);
      }));

      function getBaseTokenURI(_x46, _x47) {
        return _getBaseTokenURI.apply(this, arguments);
      }

      return getBaseTokenURI;
    }()
  }, {
    key: "resetHref",
    value: function () {
      var _resetHref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee46() {
        var cleanurl;
        return _regeneratorRuntime().wrap(function _callee46$(_context46) {
          while (1) {
            switch (_context46.prev = _context46.next) {
              case 0:
                _context46.next = 2;
                return this.getCleanUrl();

              case 2:
                cleanurl = _context46.sent;
                // jump
                window.location.href = cleanurl;

              case 4:
              case "end":
                return _context46.stop();
            }
          }
        }, _callee46, this);
      }));

      function resetHref() {
        return _resetHref.apply(this, arguments);
      }

      return resetHref;
    }()
  }, {
    key: "gotoHome",
    value: function () {
      var _gotoHome = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee47() {
        return _regeneratorRuntime().wrap(function _callee47$(_context47) {
          while (1) {
            switch (_context47.prev = _context47.next) {
              case 0:
                console.log('App.gotoHome called');
                return _context47.abrupt("return", this.gotoRoute('home'));

              case 2:
              case "end":
                return _context47.stop();
            }
          }
        }, _callee47, this);
      }));

      function gotoHome() {
        return _gotoHome.apply(this, arguments);
      }

      return gotoHome;
    }()
  }, {
    key: "gotoLoginPage",
    value: function () {
      var _gotoLoginPage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee48() {
        return _regeneratorRuntime().wrap(function _callee48$(_context48) {
          while (1) {
            switch (_context48.prev = _context48.next) {
              case 0:
                console.log('App.gotoLoginPage called');
                return _context48.abrupt("return", this.gotoRoute('login'));

              case 2:
              case "end":
                return _context48.stop();
            }
          }
        }, _callee48, this);
      }));

      function gotoLoginPage() {
        return _gotoLoginPage.apply(this, arguments);
      }

      return gotoLoginPage;
    }()
  }, {
    key: "logout",
    value: function () {
      var _logout = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee49() {
        var _root;

        return _regeneratorRuntime().wrap(function _callee49$(_context49) {
          while (1) {
            switch (_context49.prev = _context49.next) {
              case 0:
                _root = this.getVariable('Root');

                if (!_root) {
                  _context49.next = 6;
                  break;
                }

                _context49.next = 4;
                return _root._logout();

              case 4:
                _context49.next = 7;
                break;

              case 6:
                console.log('root component was not ready to process logout');

              case 7:
                return _context49.abrupt("return", this.resetHref());

              case 8:
              case "end":
                return _context49.stop();
            }
          }
        }, _callee49, this);
      }));

      function logout() {
        return _logout.apply(this, arguments);
      }

      return logout;
    }()
  }, {
    key: "wipedata",
    value: function () {
      var _wipedata = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee50() {
        return _regeneratorRuntime().wrap(function _callee50$(_context50) {
          while (1) {
            switch (_context50.prev = _context50.next) {
              case 0:
                _context50.next = 2;
                return localStorage.clear();

              case 2:
                return _context50.abrupt("return", this.logout());

              case 3:
              case "end":
                return _context50.stop();
            }
          }
        }, _callee50, this);
      }));

      function wipedata() {
        return _wipedata.apply(this, arguments);
      }

      return wipedata;
    }()
  }, {
    key: "_getCurrentNavigationState",
    value: function _getCurrentNavigationState() {
      if (this.nav_states.length) return this.nav_states[this.nav_states.length - 1];
    }
  }, {
    key: "_getPreviousNavigationState",
    value: function _getPreviousNavigationState() {
      if (this.nav_states.length > 2) return this.nav_states[this.nav_states.length - 2];
    }
  }, {
    key: "pushNavigationState",
    value: function pushNavigationState(navstate) {
      this.nav_states.push(navstate);
    }
  }, {
    key: "getNavigationState",
    value: function getNavigationState(key, defaultval) {
      var current_nav_state = this._getCurrentNavigationState();

      if (key) return typeof current_nav_state[key] != 'undefined' ? current_nav_state[key] : defaultval;else return current_nav_state;
    }
  }, {
    key: "setNavigationState",
    value: function setNavigationState(key, value) {
      var current_nav_state = this._getCurrentNavigationState();

      current_nav_state[key] = value;
    }
  }, {
    key: "goBack",
    value: function () {
      var _goBack = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee51() {
        var current_nav_state;
        return _regeneratorRuntime().wrap(function _callee51$(_context51) {
          while (1) {
            switch (_context51.prev = _context51.next) {
              case 0:
                current_nav_state = this._getCurrentNavigationState();

                if (current_nav_state.back) {
                  // TODO: go to the corresponding navigation state
                  console.log('WARNING: App.goBack is not implemented yet, going to Home');
                  this.gotoHome();
                } else {
                  this.gotoHome();
                }

              case 2:
              case "end":
                return _context51.stop();
            }
          }
        }, _callee51, this);
      }));

      function goBack() {
        return _goBack.apply(this, arguments);
      }

      return goBack;
    }() // window listeners

  }, {
    key: "addWindowEventListener",
    value: function addWindowEventListener(event_name, func, uuid) {
      this.window_listeners[event_name + (uuid ? '-' + uuid : '')] = func;
      window.addEventListener(event_name, func, false);
    }
  }, {
    key: "removeWindowEventListener",
    value: function removeWindowEventListener(event_name, uuid) {
      var func = this.window_listeners[event_name + (uuid ? '-' + uuid : '')];

      if (func) {
        window.removeEventListener(event_name, func);
        delete this.window_listeners[event_name + (uuid ? '-' + uuid : '')];
      }
    }
  }, {
    key: "dispatchWindowEvent",
    value: function dispatchWindowEvent(eventname, data) {
      var event = new CustomEvent(eventname, {
        detail: data
      });
      window.dispatchEvent(event);
    } // promises from components fetching data

  }, {
    key: "addNavigationStatePromise",
    value: function addNavigationStatePromise(componentname, uuid, promise) {
      var key = componentname ? componentname + (uuid ? '-' + uuid : '') : uuid ? uuid : null;
      if (!key) return;
      this.navigation_state_promises[key] = promise;
    }
  }, {
    key: "removeNavigationStatePromise",
    value: function removeNavigationStatePromise(componentname, uuid) {
      var key = componentname ? componentname + (uuid ? '-' + uuid : '') : uuid ? uuid : null;
      if (!key) return;
      if (this.navigation_state_promises[key]) delete this.navigation_state_promises[key];
    }
  }, {
    key: "getNavigationStatePromise",
    value: function getNavigationStatePromise(componentname, uuid) {
      var key = componentname ? componentname + (uuid ? '-' + uuid : '') : uuid ? uuid : null;
      if (!key) return;
      return this.navigation_state_promises[key];
    } // utils

  }, {
    key: "t",
    value: function t(str) {
      return this.mvcmodule.t(str);
    }
  }, {
    key: "guid",
    value: function guid() {
      if (this.mvcmodule) return this.mvcmodule.guid();

      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
      }

      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
  }, {
    key: "sleep",
    value: function () {
      var _sleep = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee52(ms) {
        return _regeneratorRuntime().wrap(function _callee52$(_context52) {
          while (1) {
            switch (_context52.prev = _context52.next) {
              case 0:
                return _context52.abrupt("return", new Promise(function (resolve) {
                  return setTimeout(resolve, ms);
                }));

              case 1:
              case "end":
                return _context52.stop();
            }
          }
        }, _callee52);
      }));

      function sleep(_x48) {
        return _sleep.apply(this, arguments);
      }

      return sleep;
    }()
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
    key: "encodebase64",
    value: function encodebase64(str) {
      var _Buffer = this._getBufferClass();

      return _Buffer.from(str).toString('base64');
    }
  }, {
    key: "decodebase64",
    value: function decodebase64(b64) {
      var _Buffer = this._getBufferClass();

      return _Buffer.from(b64, 'base64').toString('utf8');
      ;
    }
  }, {
    key: "encodehex",
    value: function encodehex(str) {
      var _Buffer = this._getBufferClass();

      return _Buffer.from(str).toString('base64');
    }
  }, {
    key: "decodehex",
    value: function decodehex(hex) {
      var _Buffer = this._getBufferClass();

      return _Buffer.from(hex, 'hex').toString('utf8');
      ;
    }
  }, {
    key: "getAppClass",
    value: function getAppClass() {
      return App;
    } // static methods

  }], [{
    key: "getAppObject",
    value: function getAppObject() {
      return App.theapp;
    }
  }, {
    key: "getAppStore",
    value: function getAppStore() {
      return AppStore;
    }
  }]);

  return App;
}(_react["default"].Component);

var _default = App;
exports["default"] = _default;