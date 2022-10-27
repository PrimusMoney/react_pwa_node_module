"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ContactList = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _contactActions = require("@primusmoney/react_client_wallet/imports/view/actions/contact/contact-actions.js");

var _list = _interopRequireDefault(require("../utils/list.js"));

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

var ContactList = /*#__PURE__*/function (_React$Component) {
  _inherits(ContactList, _React$Component);

  var _super = _createSuper(ContactList);

  function ContactList(props) {
    var _this;

    _classCallCheck(this, ContactList);

    _this = _super.call(this, props);
    _this.app = _this.props.app;
    _this.getMvcModuleObject = _this.app.getMvcModuleObject;
    _this.parent = _this.props.parent;
    _this.state = {
      isContactListPending: false,
      contacts: []
    };
    return _this;
  }

  _createClass(ContactList, [{
    key: "_doFetchContactList",
    value: function () {
      var _doFetchContactList2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(mvcmodule, sessionuuid) {
        var _this2 = this;

        var result;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                result = new Promise(function (resolve, reject) {
                  _this2.props.doFetchContactList(mvcmodule, sessionuuid, function (err, res) {
                    if (err) reject(err);else resolve(res);
                  });
                });
                return _context.abrupt("return", result);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function _doFetchContactList(_x, _x2) {
        return _doFetchContactList2.apply(this, arguments);
      }

      return _doFetchContactList;
    }()
  }, {
    key: "_doOpenContact",
    value: function () {
      var _doOpenContact2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(mvcmodule, sessionuuid, contactuuid) {
        var _this3 = this;

        var result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                result = new Promise(function (resolve, reject) {
                  _this3.props.doOpenContact(mvcmodule, sessionuuid, contactuuid, function (err, res) {
                    if (err) reject(err);else resolve(res);
                  });
                });
                return _context2.abrupt("return", result);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function _doOpenContact(_x3, _x4, _x5) {
        return _doOpenContact2.apply(this, arguments);
      }

      return _doOpenContact;
    }() // post render commit phase

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('ContactList.componentDidMount called');
      var mvcmodule = this.getMvcModuleObject();
      var sessionuuid = this.props.rootsessionuuid;

      this._doFetchContactList(mvcmodule, sessionuuid)["catch"](function (err) {
        console.log('error in ContactList.componentDidMount: ' + err);
      });
    } // user actions

  }, {
    key: "onCreateContact",
    value: function () {
      var _onCreateContact = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log('onCreateContact clicked!');
                this.parent.setViewState('CREATE');

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onCreateContact() {
        return _onCreateContact.apply(this, arguments);
      }

      return onCreateContact;
    }()
  }, {
    key: "onImportContactasync",
    value: function () {
      var _onImportContactasync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log('onImportContact clicked!');
                this.parent.setViewState('IMPORT');

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onImportContactasync() {
        return _onImportContactasync.apply(this, arguments);
      }

      return onImportContactasync;
    }()
  }, {
    key: "onRefresh",
    value: function () {
      var _onRefresh = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var mvcmodule, sessionuuid;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                console.log('onRefresh pressed!');
                mvcmodule = this.getMvcModuleObject();
                sessionuuid = this.props.rootsessionuuid;

                this._doFetchContactList(mvcmodule, sessionuuid)["catch"](function (err) {
                  console.log('error in ContactList.componentDidMount: ' + err);
                });

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function onRefresh() {
        return _onRefresh.apply(this, arguments);
      }

      return onRefresh;
    }()
  }, {
    key: "onClickItem",
    value: function () {
      var _onClickItem = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(item) {
        var _this4 = this;

        var sessionuuid, mvcmodule, contactuuid, contactname, contactlabel;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                sessionuuid = this.props.rootsessionuuid;
                mvcmodule = this.getMvcModuleObject();
                contactuuid = item.uuid;
                contactname = item.name;
                contactlabel = item.label;

                this._doOpenContact(mvcmodule, sessionuuid, contactuuid).then(function (open) {
                  if (open) {
                    // jump to ContactView
                    _this4.app.gotoRoute('contact');
                  }
                })["catch"](function (err) {
                  console.log('error in ContactList.onClickItem:' + err);
                });

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function onClickItem(_x6) {
        return _onClickItem.apply(this, arguments);
      }

      return onClickItem;
    }()
    /*renderListBanner() {
    	return (
    		<View style={{flexDirection: 'row'}}>
    			<View style={{flex: 1, justifyContent: 'center'}}>
    				<Text style={this.styles.title}>List of contacts</Text>
    			</View>
    			<View style={{flex: 1, flexDirection: 'row-reverse', marginTop: 10}}>
    				<Icon
    					name='refresh-cw'
    					type='feather'
    					onPress={this.onRefresh}
    				/>
    			</View>
    		</View>
    		);
    }
    	renderItem = ({ item }) => {
    	let type = item.type
    	let mvcmodule = this.getMvcModuleObject();
    	let label = mvcmodule.fitString(item.label, 50);
    	
    	if (type == 0)
    		return (
    				<View style={this.styles.item}>
    					<TouchableOpacity onPress={() => this.onClickItem(item)}>
    						<View style={{flexDirection: 'row'}}>
    						<Icon name='mobile-phone' type='font-awesome'/>
    						<Text style={this.styles.itemlabel}>{label}</Text>
    						</View>
    					</TouchableOpacity>
    				</View>
    			);
    	else if (type == 1)
    		return (
    				<View style={this.styles.item}>
    					<TouchableOpacity onPress={() => this.onClickItem(item)}>
    						<View style={{flexDirection: 'row'}}>
    						<Icon name='earth' type='antdesign'/>
    						<Text style={this.styles.itemlabel}>{label}</Text>
    						</View>
    					</TouchableOpacity>
    				</View>
    			);
    	else
    		return (<></>);
    }
    
    renderCreateImport() {
    	return (
    		<View style={this.styles.screenbuttons}>
    		<TouchableOpacity onPress={this.onCreateContact}>
    			<View style={this.styles.topscreenbutton}>
    				<Text style={this.styles.screenbuttonlabel}>Create contact</Text>
    			</View>
    		</TouchableOpacity>
    		<TouchableOpacity onPress={this.onImportContact}>
    			<View style={this.styles.bottomscreenbutton}>
    				<Text style={this.styles.screenbuttonlabel}>Import contact</Text>
    			</View>
    		</TouchableOpacity>
    		</View>
    	);
    }*/

  }, {
    key: "renderItem",
    value: function renderItem(item) {
      var mvcmodule = this.getMvcModuleObject();
      var type = item.type;
      var label = mvcmodule.fitString(item.label, 50);
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", null, type == 0 ? /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faMobileAlt
      }) : /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faGlobe
      })), /*#__PURE__*/_react["default"].createElement("span", null, label));
    }
  }, {
    key: "renderList",
    value: function renderList() {
      var _this5 = this;

      var isContactListPending = this.state.isContactListPending;

      if (isContactListPending) {
        var message = 'fetching contact list...';
        return /*#__PURE__*/_react["default"].createElement("div", null, message);
      }

      var contacts = this.state.contactList;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_list["default"], {
        items: contacts,
        onClickItem: function onClickItem(item) {
          return _this5.onClickItem(item);
        },
        render: function render(item) {
          return _this5.renderItem(item);
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, this.state.bodyText), /*#__PURE__*/_react["default"].createElement("div", null), this.renderList());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      // fill state
      var contactarray = nextProps.contacts;
      var contactList = [];

      for (var i = 0; i < (contactarray ? contactarray.length : 0); i++) {
        var key = contactarray[i].uuid;
        var uuid = contactarray[i].uuid;
        var name = contactarray[i].name;
        var label = contactarray[i].label;
        var type = contactarray[i].type;
        var description = contactarray[i].label + (contactarray[i].type === 0 ? '- local' : ' - remote');
        contactList.push({
          key: key,
          uuid: uuid,
          name: name,
          label: label,
          type: type,
          description: description
        });
      }

      var bodyText = 'list of ' + contactList.length + ' element(s)';
      return {
        bodyText: bodyText,
        isContactListPending: nextProps.isContactListPending,
        contactList: contactList
      };
    }
  }]);

  return ContactList;
}(_react["default"].Component); // propTypes validation


exports.ContactList = ContactList;
ContactList.propTypes = {
  app: _propTypes["default"].object.isRequired,
  parent: _propTypes["default"].object.isRequired,
  options: _propTypes["default"].object,
  rootsessionuuid: _propTypes["default"].string,
  isContactListPending: _propTypes["default"].bool,
  contacts: _propTypes["default"].array,
  fetchContactListError: _propTypes["default"].any,
  doFetchContactList: _propTypes["default"].func.isRequired,
  doOpenContact: _propTypes["default"].func.isRequired
};
ContactList.defaultProps = {
  options: {}
}; //redux

var mapStateToProps = function mapStateToProps(state) {
  return {
    rootsessionuuid: state.session.sessionuuid,
    isContactListPending: state.contacts.pending,
    contacts: state.contacts.array,
    fetchContactListError: state.contacts.error
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    doFetchContactList: function doFetchContactList(mvcmodule, sessionuuid, callback) {
      return dispatch((0, _contactActions.doFetchContactList)(mvcmodule, sessionuuid, callback));
    },
    doOpenContact: function doOpenContact(mvcmodule, sessionuuid, contactuuid, callback) {
      return dispatch((0, _contactActions.doOpenContact)(mvcmodule, sessionuuid, contactuuid, callback));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ContactList);

exports["default"] = _default;