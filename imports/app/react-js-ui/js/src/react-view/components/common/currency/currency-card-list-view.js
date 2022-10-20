"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CurrencyCardListView = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _reactBootstrap = require("react-bootstrap");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

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

var CurrencyCardListView = /*#__PURE__*/function (_React$Component) {
  _inherits(CurrencyCardListView, _React$Component);

  var _super = _createSuper(CurrencyCardListView);

  function CurrencyCardListView(props) {
    var _this;

    _classCallCheck(this, CurrencyCardListView);

    _this = _super.call(this, props);
    _this.app = _this.props.app;
    _this.getMvcModuleObject = _this.app.getMvcModuleObject;
    _this.getMvcMyQuoteObject = _this.app.getMvcMyQuoteObject;
    _this.uuid = _this.app.guid();
    _this.closing = false;
    _this.cards = [];
    _this.state = {
      currencies: [],
      items: [],
      currency: null,
      signingkey: null,
      isaprivatekey: false
    };
    return _this;
  }

  _createClass(CurrencyCardListView, [{
    key: "_setState",
    value: function _setState(state) {
      if (this.closing !== true) this.setState(state);
    } // post render commit phase

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      console.log('CurrencyCardListView.componentDidUpdate called');
      var mvcmyquote = this.getMvcMyQuoteObject();
      var rootsessionuuid = this.props.rootsessionuuid;
      var walletuuid = this.props.currentwalletuuid; // entered a private key

      if (this.state.signingkey != prevState.signingkey) {
        mvcmyquote.isValidPrivateKey(rootsessionuuid, this.state.signingkey).then(function (isaprivatekey) {
          _this2._setState({
            isaprivatekey: isaprivatekey
          });
        })["catch"](function (err) {});
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('CurrencyCardListView.componentDidMount called');
      var mvcmyquote = this.getMvcMyQuoteObject();
      var rootsessionuuid = this.props.rootsessionuuid;
      mvcmyquote.registerEventListener('on_refreshPage', this.uuid, this.onRefreshPage.bind(this));
      this.checkNavigationState()["catch"](function (err) {
        console.log('error in CurrencyCardListView.checkNavigationState: ' + err);
      });
    }
  }, {
    key: "_readCards",
    value: function () {
      var _readCards2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var mvcmyquote, rootsessionuuid, walletuuid, currencies, cards, i, currency, _currencycards, j, _privkey, pos;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid;
                _context.next = 5;
                return this._readVisibleCurrencies();

              case 5:
                currencies = _context.sent;

                if (currencies) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", Promise.reject('could not get list of currencies'));

              case 8:
                cards = [];
                i = 0;

              case 10:
                if (!(i < currencies.length)) {
                  _context.next = 44;
                  break;
                }

                currency = currencies[i];
                _context.next = 14;
                return mvcmyquote.getCurrencyCardList(rootsessionuuid, walletuuid, currency.uuid)["catch"](function (err) {
                  console.log('error in CurrencyCardListView._readCards: ' + err);
                });

              case 14:
                _currencycards = _context.sent;

                if (_currencycards) {
                  _context.next = 17;
                  break;
                }

                return _context.abrupt("continue", 41);

              case 17:
                j = 0;

              case 18:
                if (!(j < _currencycards.length)) {
                  _context.next = 39;
                  break;
                }

                _currencycards[j].currency = currency;
                _currencycards[j].currencyuuid = currency.uuid; // composite key for list

                _currencycards[j].comp_key = _currencycards[j].uuid + '|' + _currencycards[j].currencyuuid;
                _context.next = 24;
                return mvcmyquote.getCardPrivateKey(rootsessionuuid, walletuuid, _currencycards[j].uuid)["catch"](function (err) {});

              case 24:
                _privkey = _context.sent;
                _currencycards[j].cansign = _privkey ? true : false;
                _context.next = 28;
                return mvcmyquote.getCurrencyPosition(rootsessionuuid, walletuuid, currency.uuid, _currencycards[j].uuid);

              case 28:
                pos = _context.sent;

                if (!(pos !== undefined)) {
                  _context.next = 36;
                  break;
                }

                _context.next = 32;
                return pos.toInteger();

              case 32:
                _currencycards[j].balance_int = _context.sent;
                _context.next = 35;
                return mvcmyquote.formatCurrencyAmount(rootsessionuuid, currency.uuid, pos);

              case 35:
                _currencycards[j].balance_string = _context.sent;

              case 36:
                j++;
                _context.next = 18;
                break;

              case 39:
                // merge
                cards = cards.concat(_currencycards);

                if (!this.state.currency) {
                  // if we are currently loading all the cards
                  // update displayed list to get a progressive display
                  this._setState({
                    items: cards
                  });
                }

              case 41:
                i++;
                _context.next = 10;
                break;

              case 44:
                return _context.abrupt("return", cards);

              case 45:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _readCards() {
        return _readCards2.apply(this, arguments);
      }

      return _readCards;
    }()
  }, {
    key: "_filterCards",
    value: function () {
      var _filterCards2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(currency) {
        var items, cards, i;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                items = [];
                cards = this.cards;

                if (currency) {
                  // filter items
                  for (i = 0; i < cards.length; i++) {
                    if (currency.uuid === cards[i].currencyuuid) {
                      items.push(cards[i]);
                    }
                  }
                } else {
                  items = cards;
                }

                return _context2.abrupt("return", items);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _filterCards(_x) {
        return _filterCards2.apply(this, arguments);
      }

      return _filterCards;
    }()
  }, {
    key: "_selectCurrency",
    value: function () {
      var _selectCurrency2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(currencyuuid) {
        var currencies, currency, i, items;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                currencies = this.state.currencies;
                i = 0;

              case 2:
                if (!(i < currencies.length)) {
                  _context3.next = 9;
                  break;
                }

                if (!(currencyuuid === currencies[i].uuid)) {
                  _context3.next = 6;
                  break;
                }

                currency = currencies[i];
                return _context3.abrupt("break", 9);

              case 6:
                i++;
                _context3.next = 2;
                break;

              case 9:
                if (!currency) {
                  _context3.next = 14;
                  break;
                }

                _context3.next = 12;
                return this._filterCards(currency);

              case 12:
                items = _context3.sent;

                this._setState({
                  currency: currency,
                  items: items
                });

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _selectCurrency(_x2) {
        return _selectCurrency2.apply(this, arguments);
      }

      return _selectCurrency;
    }()
  }, {
    key: "_readVisibleCurrencies",
    value: function () {
      var _readVisibleCurrencies2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var mvcmyquote, rootsessionuuid, walletuuid, currencies, arr, i;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid;
                _context4.next = 5;
                return mvcmyquote.getCurrencies(rootsessionuuid, walletuuid);

              case 5:
                currencies = _context4.sent;

                if (currencies) {
                  _context4.next = 8;
                  break;
                }

                return _context4.abrupt("return", Promise.reject('could not get list of currencies'));

              case 8:
                arr = [];
                i = 0;

              case 10:
                if (!(i < currencies.length)) {
                  _context4.next = 17;
                  break;
                }

                if (!(currencies[i].hidden && currencies[i].hidden == true)) {
                  _context4.next = 13;
                  break;
                }

                return _context4.abrupt("continue", 14);

              case 13:
                arr.push(currencies[i]);

              case 14:
                i++;
                _context4.next = 10;
                break;

              case 17:
                return _context4.abrupt("return", arr);

              case 18:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function _readVisibleCurrencies() {
        return _readVisibleCurrencies2.apply(this, arguments);
      }

      return _readVisibleCurrencies;
    }()
  }, {
    key: "checkNavigationState",
    value: function () {
      var _checkNavigationState = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var mvcmyquote, rootsessionuuid, walletuuid, app_nav_state, app_nav_target, unlocked, devicewallet, _params, params, currencyuuid, currency, currencies, items, _items;

        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid;
                _context5.prev = 3;
                // check if navigation asks for a specific currency
                app_nav_state = this.app.getNavigationState();
                app_nav_target = app_nav_state.target; // check wallet is unlocked

                _context5.next = 8;
                return this.app.checkWalletUnlocked()["catch"](function (err) {});

              case 8:
                unlocked = _context5.sent;

                if (unlocked) {
                  _context5.next = 21;
                  break;
                }

                if (this.closing) {
                  _context5.next = 18;
                  break;
                }

                _context5.next = 13;
                return this.app.openDeviceWallet()["catch"](function (err) {});

              case 13:
                devicewallet = _context5.sent;
                walletuuid = devicewallet.uuid;

                this._setState({
                  isdevicewallet: true
                });

                _context5.next = 21;
                break;

              case 18:
                _params = app_nav_target ? app_nav_target.params : null;
                this.app.gotoRoute('login', _params);
                return _context5.abrupt("return");

              case 21:
                if (!(app_nav_target && app_nav_target.route == 'currencycards' && app_nav_target.reached == false)) {
                  _context5.next = 30;
                  break;
                }

                params = app_nav_target.params;
                currencyuuid = params.currencyuuid;

                if (!currencyuuid) {
                  _context5.next = 29;
                  break;
                }

                _context5.next = 27;
                return mvcmyquote.getCurrencyFromUUID(rootsessionuuid, currencyuuid);

              case 27:
                currency = _context5.sent;

                this._setState({
                  currency: currency
                });

              case 29:
                // mark target as reached
                app_nav_target.reached = true;

              case 30:
                _context5.next = 32;
                return this._readVisibleCurrencies();

              case 32:
                currencies = _context5.sent;

                if (currencies) {
                  _context5.next = 35;
                  break;
                }

                return _context5.abrupt("return", Promise.reject('could not get list of currencies'));

              case 35:
                _context5.next = 37;
                return this._readCards();

              case 37:
                this.cards = _context5.sent;
                items = this.cards;

                this._setState({
                  currencies: currencies,
                  items: items
                });

                if (!this.state.currency) {
                  _context5.next = 45;
                  break;
                }

                _context5.next = 43;
                return this._filterCards(this.state.currency);

              case 43:
                _items = _context5.sent;

                this._setState({
                  items: _items
                });

              case 45:
                _context5.next = 50;
                break;

              case 47:
                _context5.prev = 47;
                _context5.t0 = _context5["catch"](3);
                console.log('exception in CurrencyCardListView.checkNavigationState: ' + _context5.t0);

              case 50:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[3, 47]]);
      }));

      function checkNavigationState() {
        return _checkNavigationState.apply(this, arguments);
      }

      return checkNavigationState;
    }()
  }, {
    key: "onRefreshPage",
    value: function () {
      var _onRefreshPage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                console.log('CurrencyCardListView.onRefreshPage called');
                this.checkNavigationState()["catch"](function (err) {
                  console.log('error in checkNavigationState: ' + err);
                });

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function onRefreshPage() {
        return _onRefreshPage.apply(this, arguments);
      }

      return onRefreshPage;
    }() // end of life

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log('CurrencyCardListView.componentWillUnmount called');
      this.closing = true;
      var app = this.app;
      var mvcmyquote = this.getMvcMyQuoteObject();
      mvcmyquote.unregisterEventListener('on_refreshPage', this.uuid);
      this.app.closeDeviceWallet();
    } // user actions

  }, {
    key: "onGenerateCard",
    value: function () {
      var _onGenerateCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var mvcmyquote, rootsessionuuid, privatekey;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                console.log('onGenerateCard pressed!');

                if (!this.state.currentcard) {
                  _context7.next = 3;
                  break;
                }

                return _context7.abrupt("return");

              case 3:
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                _context7.next = 7;
                return mvcmyquote.generatePrivateKey(rootsessionuuid);

              case 7:
                privatekey = _context7.sent;

                this._setState({
                  signingkey: privatekey
                });

              case 9:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function onGenerateCard() {
        return _onGenerateCard.apply(this, arguments);
      }

      return onGenerateCard;
    }()
  }, {
    key: "onAddCard",
    value: function () {
      var _onAddCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var _this3 = this;

        var _this$state, currency, signingkey, currencyuuid, options, card;

        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                console.log('onAddCard pressed!');
                _this$state = this.state, currency = _this$state.currency, signingkey = _this$state.signingkey;

                if (!(currency && currency.uuid)) {
                  _context8.next = 9;
                  break;
                }

                currencyuuid = currency.uuid;
                options = {
                  allow_readonly: false
                };
                _context8.next = 7;
                return this.app.createCurrencyCard(currencyuuid, signingkey, options)["catch"](function (err) {
                  _this3.app.alert('Could not created currency card');
                });

              case 7:
                card = _context8.sent;

                if (card) {
                  this.app.refreshPage();
                }

              case 9:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function onAddCard() {
        return _onAddCard.apply(this, arguments);
      }

      return onAddCard;
    }()
  }, {
    key: "onSelectCurrency",
    value: function () {
      var _onSelectCurrency = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(uuid) {
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", this._selectCurrency(uuid));

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function onSelectCurrency(_x3) {
        return _onSelectCurrency.apply(this, arguments);
      }

      return onSelectCurrency;
    }()
  }, {
    key: "onClickItem",
    value: function () {
      var _onClickItem = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(item) {
        var currencyuuid, carduuid, params;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                currencyuuid = item.currencyuuid;
                carduuid = item.uuid;
                /* let cardaddress = item.address;
                	let params = {currencyuuid, carduuid, cardaddress}; */

                params = {
                  currencyuuid: currencyuuid,
                  carduuid: carduuid
                };
                this.app.gotoRoute('currencycard', params);

              case 4:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function onClickItem(_x4) {
        return _onClickItem.apply(this, arguments);
      }

      return onClickItem;
    }()
  }, {
    key: "renderCurrencyForm",
    value: function renderCurrencyForm() {
      var _this4 = this;

      var _this$state2 = this.state,
          currency = _this$state2.currency,
          currencies = _this$state2.currencies,
          signingkey = _this$state2.signingkey,
          isaprivatekey = _this$state2.isaprivatekey;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "Form"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormGroup, {
        controlId: "currency"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormLabel, null, "Currency"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormGroup, {
        controlId: "pickccy",
        className: "PickCurrencyLine"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.InputGroup, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormControl, {
        className: "CurrencyName",
        disabled: true,
        autoFocus: true,
        type: "text",
        value: currency ? currency.description ? currency.description : currency.name : ''
      }), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.DropdownButton, {
        id: "input-dropdown-addon",
        title: "Cur.",
        onSelect: function onSelect(e) {
          return _this4.onSelectCurrency(e);
        }
      }, currencies.map(function (item, index) {
        return /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Dropdown.Item, {
          key: item.uuid,
          eventKey: item.uuid,
          value: item.uuid
        }, item.symbol);
      }))))), currency ? /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormGroup, {
        controlId: "newcurrencycard"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormLabel, null, "Private Key\xA0", currency && currency.name ? 'for ' + (currency.description ? currency.description : currency.name) : ''), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormGroup, {
        controlId: "newcard",
        className: "AddCardLine"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormControl, {
        className: "CardPrivateKeyInput",
        autoFocus: true,
        type: "text",
        value: signingkey ? signingkey : '',
        onChange: function onChange(e) {
          return _this4._setState({
            signingkey: e.target.value
          });
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "GenerateCardIcon"
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faUserLock,
        size: "3x",
        onClick: this.onGenerateCard.bind(this)
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "AddCardButton"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        disabled: isaprivatekey ? false : true,
        onClick: this.onAddCard.bind(this),
        type: "submit"
      }, "Add")))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null));
    }
  }, {
    key: "renderItem",
    value: function renderItem(item) {
      var _this5 = this;

      var mvcmyquote = this.app.getMvcMyQuoteObject();
      var uuid = item.uuid;
      var comp_key = item.comp_key;
      var address = mvcmyquote.fitString(item.address, 21);
      var currencysymbol = item.currency.symbol;
      var cansign = item.cansign;
      var maincard = item.xtra_data.myquote ? item.xtra_data.myquote.maincard : false;
      var balance_string = item.balance_string;
      return /*#__PURE__*/_react["default"].createElement("tr", {
        key: comp_key,
        onClick: function onClick() {
          return _this5.onClickItem(item);
        }
      }, /*#__PURE__*/_react["default"].createElement("th", null, address), /*#__PURE__*/_react["default"].createElement("th", null, /*#__PURE__*/_react["default"].createElement("span", {
        className: "CurrencyCardIcons"
      }, cansign ? /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faKey
      }) : /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faGlasses
      }), maincard ? /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faStar
      }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null))), /*#__PURE__*/_react["default"].createElement("th", null, balance_string));
    }
  }, {
    key: "renderList",
    value: function renderList() {
      var _this6 = this;

      var items = this.state.items;
      return /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Table, {
        responsive: true
      }, /*#__PURE__*/_react["default"].createElement("thead", {
        className: "ListHeader"
      }, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "Address"), /*#__PURE__*/_react["default"].createElement("th", null, "Type"), /*#__PURE__*/_react["default"].createElement("th", null, "Balance"))), /*#__PURE__*/_react["default"].createElement("tbody", {
        className: "ListItem"
      }, items.map(function (item, index) {
        return _this6.renderItem(item);
      })));
    } // rendering

  }, {
    key: "render",
    value: function render() {
      var items = this.state.items;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "Container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "Title"
      }, "List of currency cards"), this.renderCurrencyForm(), this.renderList());
    }
  }]);

  return CurrencyCardListView;
}(_react["default"].Component); // propTypes validation


exports.CurrencyCardListView = CurrencyCardListView;
CurrencyCardListView.propTypes = {
  app: _propTypes["default"].object.isRequired,
  rootsessionuuid: _propTypes["default"].string
}; //redux

var mapStateToProps = function mapStateToProps(state) {
  return {
    rootsessionuuid: state.session.sessionuuid,
    pending: state.login.pending,
    success: state.login.success,
    lasterror: state.login.error,
    currentwalletuuid: state.wallets.walletuuid
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CurrencyCardListView);

exports["default"] = _default;
//# sourceMappingURL=currency-card-list-view.js.map