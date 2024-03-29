"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CurrencyCardView = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _reactBootstrap = require("react-bootstrap");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _freeRegularSvgIcons = require("@fortawesome/free-regular-svg-icons");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _BeatLoader = _interopRequireDefault(require("react-spinners/BeatLoader"));

var _textCopyIcon = _interopRequireDefault(require("../utils/text-copy-icon.js"));

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

var CurrencyCardView = /*#__PURE__*/function (_React$Component) {
  _inherits(CurrencyCardView, _React$Component);

  var _super = _createSuper(CurrencyCardView);

  function CurrencyCardView(props) {
    var _this;

    _classCallCheck(this, CurrencyCardView);

    _this = _super.call(this, props);
    _this.app = _this.props.app;
    _this.getMvcModuleObject = _this.app.getMvcModuleObject;
    _this.getMvcMyQuoteObject = _this.app.getMvcMyQuoteObject;
    _this.uuid = _this.app.guid();
    _this.callparams = null;
    _this.card = null;
    _this.currency = null;
    _this.currencycards = [];
    _this.checking = false; //this.closing = false;
    //this.opened_devicewallet = false;

    _this.state = {
      opened_devicewallet: false,
      creditbalance: 'loading...',
      position: null,
      position_int: -1,
      position_string: 'loading...',
      address_string: 'loading...',
      privatekey_string: 'loading...',
      web3providerurl_string: 'loading...',
      message_text: 'loading...',
      to_address: '',
      transfer_amount: 0,
      credit_amount: 0,
      need_credit_units: false,
      credit_units_requested: 0,
      priceinfo: '',
      sourcecard: null,
      return_url: null,
      callback_url: null,
      processinginfo: 'processing transfer',
      processing: false
    };
    return _this;
  }

  _createClass(CurrencyCardView, [{
    key: "_setState",
    value: function _setState(state) {
      //if (this.closing !== true)
      this.setState(state);
    }
  }, {
    key: "_readCurrencyCards",
    value: function () {
      var _readCurrencyCards2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var mvcmyquote, rootsessionuuid, walletuuid, currency, cards, _currencycards, j, _privkey, pos, credits;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid;
                currency = this.currency;

                if (currency) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", Promise.reject('currency is not defined'));

              case 6:
                cards = [];
                _context.next = 9;
                return mvcmyquote.getCurrencyCardList(rootsessionuuid, walletuuid, currency.uuid);

              case 9:
                _currencycards = _context.sent;
                j = 0;

              case 11:
                if (!(j < _currencycards.length)) {
                  _context.next = 35;
                  break;
                }

                _currencycards[j].currency = currency;
                _currencycards[j].currencyuuid = currency.uuid;
                _context.next = 16;
                return mvcmyquote.getCardPrivateKey(rootsessionuuid, walletuuid, _currencycards[j].uuid)["catch"](function (err) {});

              case 16:
                _privkey = _context.sent;
                _currencycards[j].cansign = _privkey ? true : false;
                _context.next = 20;
                return mvcmyquote.getCurrencyCardPosition(rootsessionuuid, walletuuid, currency.uuid, _currencycards[j].uuid);

              case 20:
                pos = _context.sent;

                if (!(pos !== undefined)) {
                  _context.next = 28;
                  break;
                }

                _context.next = 24;
                return pos.toInteger();

              case 24:
                _currencycards[j].balance_int = _context.sent;
                _context.next = 27;
                return mvcmyquote.formatCurrencyAmount(rootsessionuuid, currency.uuid, pos);

              case 27:
                _currencycards[j].balance_string = _context.sent;

              case 28:
                _context.next = 30;
                return mvcmyquote.getCurrencyCardCreditBalance(rootsessionuuid, walletuuid, _currencycards[j].uuid);

              case 30:
                credits = _context.sent;
                _currencycards[j].credits = credits;

              case 32:
                j++;
                _context.next = 11;
                break;

              case 35:
                cards = _currencycards;
                return _context.abrupt("return", cards);

              case 37:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _readCurrencyCards() {
        return _readCurrencyCards2.apply(this, arguments);
      }

      return _readCurrencyCards;
    }()
  }, {
    key: "_filterCreditPositiveCards",
    value: function () {
      var _filterCreditPositiveCards2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var items, cards, i, credit_balance, credit_threshold;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                items = [];
                cards = this.currencycards;
                i = 0;

              case 3:
                if (!(i < cards.length)) {
                  _context2.next = 12;
                  break;
                }

                if (!(cards[i].cansign !== true)) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("continue", 9);

              case 6:
                credit_balance = cards[i].credits ? cards[i].credits.transactionunits : 0;
                credit_threshold = cards[i].credits ? cards[i].credits.threshold : 0;

                if (credit_balance > credit_threshold) {
                  items.push(cards[i]);
                }

              case 9:
                i++;
                _context2.next = 3;
                break;

              case 12:
                return _context2.abrupt("return", items);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _filterCreditPositiveCards() {
        return _filterCreditPositiveCards2.apply(this, arguments);
      }

      return _filterCreditPositiveCards;
    }() // post render commit phase

  }, {
    key: "_getCreditsUnitsRequested",
    value: function _getCreditsUnitsRequested(credit_units_requested) {
      return parseInt(credit_units_requested > 0 ? credit_units_requested : 10);
    }
  }, {
    key: "_getCreditsUnitsToBuy",
    value: function _getCreditsUnitsToBuy(credit_units_requested) {
      return this._getCreditsUnitsRequested(credit_units_requested) + 3;
    }
  }, {
    key: "_getPriceInfo",
    value: function () {
      var _getPriceInfo2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(price_struct) {
        var mvcmyquote, rootsessionuuid, currency, currencyuuid, currencyamount, currencyamount_string, priceinfo;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                currency = this.currency;
                currencyuuid = currency.uuid;
                currencyamount = price_struct.currency_amount;
                _context3.next = 7;
                return currencyamount.toDecoratedString();

              case 7:
                currencyamount_string = _context3.sent;
                priceinfo = price_struct.credit_units_requested + ' ' + mvcmyquote.t('transaction units will cost you approximately') + ' ' + currencyamount_string;
                return _context3.abrupt("return", priceinfo);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _getPriceInfo(_x) {
        return _getPriceInfo2.apply(this, arguments);
      }

      return _getPriceInfo;
    }()
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      console.log('CurrencyCardView.componentDidUpdate called');
      var mvcmyquote = this.getMvcMyQuoteObject();
      var rootsessionuuid = this.props.rootsessionuuid;
      var walletuuid = this.props.currentwalletuuid; // entered a new address

      if (this.state.to_address != prevState.to_address) {} // entered a new credit units


      if (this.state.credit_units_requested != prevState.credit_units_requested) {
        // check it's a proper positive integer
        var proper_int_string = String(Math.floor(Number(this.state.credit_units_requested)));

        if (proper_int_string != String(this.state.credit_units_requested)) {
          this._setState({
            credit_units_requested: proper_int_string
          });
        } // update price info


        var currency = this.currency;
        var currencyuuid = currency.uuid;
        var credit_units_requested = this.state.credit_units_requested;
        var priceinfo = '';
        ;

        if (currency && currency.ops && currency.ops.cantxfree !== true && currency.ops.cantopup !== true && currency.ops.canswap === true) {
          // check price to buy requested amount of credit units
          mvcmyquote.getPriceForCreditUnits(rootsessionuuid, currencyuuid, this._getCreditsUnitsToBuy(credit_units_requested)).then(function (price_struct) {
            price_struct.credit_units_requested = _this2._getCreditsUnitsRequested(credit_units_requested);
            return _this2._getPriceInfo(price_struct);
          }).then(function (priceinfo) {
            _this2._setState({
              priceinfo: priceinfo
            });
          })["catch"](function (err) {
            console.log('error in CurrencyCardView.componentDidUpdate: ' + err);
          });
        }
      } // entered a new token amount


      if (this.state.transfer_amount != prevState.transfer_amount) {
        // check it's a proper decimal
        var _currencyuuid = this.currency ? this.currency.uuid : null;

        if (_currencyuuid) {
          /* 				let properdecimalamount;
          				let proper_decimal_string;
          
          				mvcmyquote.getCurrencyAmount(rootsessionuuid, currencyuuid, this.state.transfer_amount)
          				.then(currencyamount => {
          					return currencyamount.getDecimalAmount();
          				})
          				.then(decimalamount => {
          					properdecimalamount = decimalamount;
          					return decimalamount.toFixedString();
          				})
          				.then(decimalamountstring => {
          					proper_decimal_string = decimalamountstring;
          					return mvcmyquote.getDecimalAmount(rootsessionuuid, this.state.transfer_amount);
          				})
          				.then(decimalamount => {
          					return properdecimalamount.equals(decimalamount);
          				})
          				.then(areequals => {
          					if (areequals !== true) {
          						this._setState({transfer_amount: proper_decimal_string});
          					}
          				})
          				.catch(err => {
          					console.log('error in CurrencyCardView.componentDidUpdate: ' + err);
          				}); */
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('CurrencyCardView.componentDidMount called');
      var mvcmyquote = this.getMvcMyQuoteObject();
      var rootsessionuuid = this.props.rootsessionuuid;
      mvcmyquote.registerEventListener('on_refreshPage', this.uuid, this.onRefreshPage.bind(this));
      this.checkNavigationState()["catch"](function (err) {
        console.log('error in CurrencyCardView.checkNavigationState: ' + err);
      });
    }
  }, {
    key: "fetchNavigationState",
    value: function () {
      var _fetchNavigationState = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var mvcmyquote, rootsessionuuid, walletuuid, isdevicewallet, opened_devicewallet, message_text, currency, card, creditbalance, position, position_string, position_int, address, privatekey, web3providerurl, address_string, privatekey_string, web3providerurl_string, need_credit_units, can_buy_credit_units, credit_units_requested, priceinfo, to_address, transfer_amount, decimalamount_string, credit_amount, return_url, callback_url, app_nav_state, app_nav_target, unlocked, online, _params, devicewallet, _params2, params, web3_provider_url, tokenaddress, currencyuuid, carduuid, cardaddress, _to_address, ring, _params3, options, scheme, _existing_currencies, i, _currency_description, maincurrencycard, canpay, _canpay2, cards, _card, _canpay, _currency, _carduuid, _currencyuuid2, _scheme, credits, currencyinfo, tx_fee, transfer_cost_units, feelevel, price_struct, amount_string, amount, decimals, decimalamount;

        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log('CurrencyCardView.fetchNavigationState called');
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid; // navigation state data

                isdevicewallet = false;
                opened_devicewallet = false;
                message_text = '';
                need_credit_units = this.state.need_credit_units;
                can_buy_credit_units = false;
                credit_units_requested = this.state.credit_units_requested;
                priceinfo = '';
                _context4.prev = 11;
                // check navigation
                app_nav_state = this.app.getNavigationState();
                app_nav_target = app_nav_state.target; // check wallet is unlocked

                _context4.next = 16;
                return this.app.checkWalletUnlocked()["catch"](function (err) {});

              case 16:
                unlocked = _context4.sent;

                if (unlocked) {
                  _context4.next = 39;
                  break;
                }

                if (walletuuid) {
                  _context4.next = 34;
                  break;
                }

                _context4.next = 21;
                return this.app.checkOnline();

              case 21:
                online = _context4.sent;

                if (online) {
                  _context4.next = 26;
                  break;
                }

                _params = app_nav_target ? app_nav_target.params : null;
                this.app.gotoRoute('about', _params); //this.app.gotoRoute('offline', params);

                return _context4.abrupt("return");

              case 26:
                _context4.next = 28;
                return this.app.openDeviceWallet()["catch"](function (err) {});

              case 28:
                devicewallet = _context4.sent;
                walletuuid = devicewallet.uuid;
                opened_devicewallet = false;
                isdevicewallet = true;
                _context4.next = 37;
                break;

              case 34:
                _params2 = app_nav_target ? app_nav_target.params : null;
                this.app.gotoRoute('login', _params2);
                return _context4.abrupt("return");

              case 37:
                _context4.next = 42;
                break;

              case 39:
                _context4.next = 41;
                return this.app.isDeviceWallet(walletuuid);

              case 41:
                isdevicewallet = _context4.sent;

              case 42:
                if (!(app_nav_target && app_nav_target.route == 'currencycard' && app_nav_target.reached == false)) {
                  _context4.next = 180;
                  break;
                }

                params = app_nav_target.params;

                if (params) {
                  _context4.next = 47;
                  break;
                }

                this.app.gotoRoute('home');
                return _context4.abrupt("return");

              case 47:
                this.callparams = params;
                web3_provider_url = params.web3url ? this.app.decodebase64(params.web3url) : null;
                tokenaddress = params.tokenaddress;
                ;
                currencyuuid = params.currencyuuid;
                carduuid = params.carduuid;
                cardaddress = params.cardaddress; // transfer

                _to_address = params.to ? params.to : null;
                transfer_amount = params.amount_string ? params.amount_string : params.amount ? params.amount : 0; // security

                ring = params.ring ? parseInt(params.ring) : 1;

                if (!(ring > 1 && this.state.isdevicewallet === true)) {
                  _context4.next = 61;
                  break;
                }

                // we need to be in a more secured ring
                _params3 = app_nav_target ? app_nav_target.params : null;
                this.app.gotoRoute('login', _params3);
                return _context4.abrupt("return");

              case 61:
                if (!currencyuuid) {
                  _context4.next = 67;
                  break;
                }

                _context4.next = 64;
                return mvcmyquote.getCurrencyFromUUID(rootsessionuuid, currencyuuid);

              case 64:
                currency = _context4.sent;
                _context4.next = 116;
                break;

              case 67:
                if (!tokenaddress) {
                  _context4.next = 116;
                  break;
                }

                if (!web3_provider_url) {
                  _context4.next = 116;
                  break;
                }

                options = {}; // no other requirement on ethnodeserverconfig

                _context4.next = 72;
                return mvcmyquote.findLocalSchemeInfoFromWeb3Url(rootsessionuuid, web3_provider_url, options)["catch"](function (err) {
                  console.log('error in CurrencyCardView.fetchNavigationState: ' + err);
                });

              case 72:
                scheme = _context4.sent;

                if (!scheme) {
                  _context4.next = 114;
                  break;
                }

                _context4.next = 76;
                return mvcmyquote.getAllCurrenciesWithAddress(rootsessionuuid, walletuuid, tokenaddress)["catch"](function (err) {
                  console.log('error in CurrencyCardView.fetchNavigationState: ' + err);
                });

              case 76:
                _existing_currencies = _context4.sent;

                if (!(_existing_currencies && _existing_currencies.length > 0)) {
                  _context4.next = 97;
                  break;
                }

                if (!(_existing_currencies.length > 1)) {
                  _context4.next = 93;
                  break;
                }

                currency = _existing_currencies[0]; // take first

                currencyuuid = currency.uuid;

                if (!(currency.scheme_uuid != scheme.uuid)) {
                  _context4.next = 91;
                  break;
                }

                i = 0;

              case 83:
                if (!(i < _existing_currencies.length)) {
                  _context4.next = 91;
                  break;
                }

                if (!(_existing_currencies[i].scheme_uuid == scheme.uuid)) {
                  _context4.next = 88;
                  break;
                }

                currency = _existing_currencies[i];
                currencyuuid = currency.uuid;
                return _context4.abrupt("break", 91);

              case 88:
                i++;
                _context4.next = 83;
                break;

              case 91:
                _context4.next = 95;
                break;

              case 93:
                currency = _existing_currencies[0]; // take first and only one

                currencyuuid = currency.uuid;

              case 95:
                _context4.next = 112;
                break;

              case 97:
                // no registered currency corresponding to this token address
                // we add one
                currency = {};
                currency.uuid = this.app.guid();
                currency.scheme_uuid = scheme.uuid;
                currency.address = tokenaddress;
                currency.ops = {
                  canpay: true
                };
                currency.description = 'currency for incoming payment request';
                currency.provider = 'provider.js';
                currency.xtra_data = {
                  origin: 'incoming-payment-request'
                };
                _context4.next = 107;
                return mvcmyquote.synchronizeCurrency(rootsessionuuid, walletuuid, currency)["catch"](function (err) {
                  console.log('could not import currency from token address: ' + err);
                  currency = null;
                });

              case 107:
                if (!currency) {
                  _context4.next = 112;
                  break;
                }

                currencyuuid = currency.uuid; // set description

                _currency_description = currency.name + ' imported on ' + scheme.name;
                _context4.next = 112;
                return mvcmyquote.setCurrencyDescription(rootsessionuuid, walletuuid, currencyuuid, _currency_description);

              case 112:
                _context4.next = 116;
                break;

              case 114:
                if (transfer_amount && _to_address) this.app.alert('This rpc url is not registered. It is not possible to make payments to it: ' + web3_provider_url);
                this.app.gotoRoute('currencycards', params);

              case 116:
                if (!currency) {
                  this.app.gotoRoute('currencycards', params);
                } //
                // card
                //


                if (!(carduuid && !cardaddress)) {
                  _context4.next = 123;
                  break;
                }

                _context4.next = 120;
                return mvcmyquote.getWalletCard(rootsessionuuid, walletuuid, carduuid)["catch"](function (err) {});

              case 120:
                card = _context4.sent;
                _context4.next = 176;
                break;

              case 123:
                _context4.next = 125;
                return mvcmyquote.getCurrencyCard(rootsessionuuid, walletuuid, currencyuuid)["catch"](function (err) {});

              case 125:
                maincurrencycard = _context4.sent;

                if (!cardaddress) {
                  _context4.next = 139;
                  break;
                }

                _context4.next = 129;
                return mvcmyquote.getCurrencyCardWithAddress(rootsessionuuid, walletuuid, currencyuuid, cardaddress);

              case 129:
                card = _context4.sent;

                if (!(card && transfer_amount && _to_address)) {
                  _context4.next = 136;
                  break;
                }

                _context4.next = 133;
                return mvcmyquote.canPayAmount(rootsessionuuid, walletuuid, card.uuid, currencyuuid, transfer_amount);

              case 133:
                _context4.t0 = _context4.sent;
                _context4.next = 137;
                break;

              case 136:
                _context4.t0 = true;

              case 137:
                canpay = _context4.t0;
                if (!canpay) card = null;

              case 139:
                if (card) {
                  _context4.next = 150;
                  break;
                }

                // look if main card can handle
                card = maincurrencycard;

                if (!(card && transfer_amount && _to_address)) {
                  _context4.next = 147;
                  break;
                }

                _context4.next = 144;
                return mvcmyquote.canPayAmount(rootsessionuuid, walletuuid, card.uuid, currencyuuid, transfer_amount);

              case 144:
                _context4.t1 = _context4.sent;
                _context4.next = 148;
                break;

              case 147:
                _context4.t1 = true;

              case 148:
                _canpay2 = _context4.t1;

                if (!_canpay2) {
                  card = null;
                }

              case 150:
                if (card) {
                  _context4.next = 175;
                  break;
                }

                _context4.next = 153;
                return mvcmyquote.getTokenCardList(rootsessionuuid, walletuuid, web3_provider_url, tokenaddress)["catch"](function (err) {});

              case 153:
                cards = _context4.sent;
                i = 0;

              case 155:
                if (!(i < (cards ? cards.length : 0))) {
                  _context4.next = 175;
                  break;
                }

                _card = cards[i];

                if (!(transfer_amount && _to_address)) {
                  _context4.next = 163;
                  break;
                }

                _context4.next = 160;
                return mvcmyquote.canPayAmount(rootsessionuuid, walletuuid, _card.uuid, currencyuuid, transfer_amount);

              case 160:
                _context4.t2 = _context4.sent;
                _context4.next = 164;
                break;

              case 163:
                _context4.t2 = true;

              case 164:
                _canpay = _context4.t2;

                if (!_canpay) {
                  _context4.next = 172;
                  break;
                }

                card = _card; // find the currency for this card, in case it is different

                _context4.next = 169;
                return mvcmyquote.findCardCurrency(rootsessionuuid, walletuuid, card.uuid)["catch"](function (err) {});

              case 169:
                _currency = _context4.sent;

                if (_currency) {
                  currency = _currency;
                  currencyuuid = currency.uuid;
                } else {
                  console.log('Warning: could not find currency for card: ' + card.uuid);
                }

                return _context4.abrupt("break", 175);

              case 172:
                i++;
                _context4.next = 155;
                break;

              case 175:
                if (!card) {
                  // if not found a card yet, go back to main currency card, if it exists and even if it won't do
                  card = maincurrencycard;
                }

              case 176:
                if (!card) {
                  if (transfer_amount && _to_address) this.app.alert('Could not find a currency card capable of making corresponding payment. You should load credits/funds on an existing card or add a card with enough credits/funds.');
                  if (!params.currencyuuid && currency) params.currencyuuid = currency.uuid;
                  this.app.gotoRoute('currencycards', params);
                } // we have currency and card now (hope they match)


                this.card = card;
                this.currency = currency; // mark target as reached

                app_nav_target.reached = true;

              case 180:
                if (!(this.card && this.currency)) {
                  _context4.next = 265;
                  break;
                }

                card = this.card;
                currency = this.currency;
                _carduuid = card.uuid;
                _currencyuuid2 = currency.uuid;
                _context4.next = 187;
                return mvcmyquote.getSchemeInfo(rootsessionuuid, card.schemeuuid);

              case 187:
                _scheme = _context4.sent;
                _context4.next = 190;
                return mvcmyquote.getCurrencyCardCreditBalance(rootsessionuuid, walletuuid, _carduuid);

              case 190:
                credits = _context4.sent;
                creditbalance = credits.transactionunits;
                _context4.next = 194;
                return mvcmyquote.getCurrencyTransactionUnitsThreshold(rootsessionuuid, walletuuid, _currencyuuid2);

              case 194:
                credits.threshold = _context4.sent;
                _context4.next = 197;
                return mvcmyquote.getCurrencyCardPosition(rootsessionuuid, walletuuid, _currencyuuid2, _carduuid);

              case 197:
                position = _context4.sent;
                _context4.next = 200;
                return mvcmyquote.formatCurrencyAmount(rootsessionuuid, _currencyuuid2, position);

              case 200:
                position_string = _context4.sent;
                _context4.next = 203;
                return position.toInteger();

              case 203:
                position_int = _context4.sent;
                _context4.next = 206;
                return mvcmyquote.getCurrencyInfo(rootsessionuuid, walletuuid, _currencyuuid2);

              case 206:
                currencyinfo = _context4.sent;
                address = card.address;
                _context4.next = 210;
                return mvcmyquote.getCardPrivateKey(rootsessionuuid, walletuuid, _carduuid)["catch"](function (err) {});

              case 210:
                privatekey = _context4.sent;
                web3providerurl = currencyinfo.web3_provider_url;
                address_string = address ? mvcmyquote.fitString(address, 32) : '';
                privatekey_string = privatekey ? mvcmyquote.fitString(privatekey, 32) : '';
                web3providerurl_string = web3providerurl ? mvcmyquote.fitString(web3providerurl, 48) : '';

                if (privatekey) {
                  message_text = mvcmyquote.t('If you generated this card instead of importing it thanks to an external private key \
						it is strongly recommended to copy the private key thanks to the icon next to the \
						corresponding box and save it in a safe  place to be able to re-create the card. If you \
						don\'t, you might loose all the funds that are allocated to this card.');
                } else {
                  message_text = mvcmyquote.t('This card has been imported through its address and no private key is currently stored.\
						Accordingly, this card is read-only and you can not do any transaction through the interface.');
                }

                if (credits.transactionunits < credits.threshold) {
                  need_credit_units = true;
                  credit_units_requested = credits.threshold - credits.transactionunits + 1;
                } // buying


                if (!need_credit_units) {
                  _context4.next = 224;
                  break;
                }

                _context4.next = 220;
                return this._readCurrencyCards();

              case 220:
                this.currencycards = _context4.sent;
                _context4.next = 223;
                return this._filterCreditPositiveCards();

              case 223:
                this.positivecards = _context4.sent;

              case 224:
                if (!(creditbalance > 0)) {
                  _context4.next = 237;
                  break;
                }

                tx_fee = {};
                tx_fee.transferred_credit_units = 0;
                transfer_cost_units = currency.uniswap_v2 && currency.uniswap_v2.swap_max_cost_units ? parseInt(currency.uniswap_v2.swap_max_cost_units) : 8; // max of successive transactions (approve, buy)

                tx_fee.estimated_cost_units = transfer_cost_units;
                _context4.next = 231;
                return mvcmyquote.getRecommendedFeeLevel(rootsessionuuid, walletuuid, _carduuid, tx_fee);

              case 231:
                feelevel = _context4.sent;
                _context4.next = 234;
                return mvcmyquote.canCompleteTransaction(rootsessionuuid, walletuuid, _carduuid, tx_fee, feelevel)["catch"](function (err) {});

              case 234:
                can_buy_credit_units = _context4.sent;
                _context4.next = 238;
                break;

              case 237:
                can_buy_credit_units = false;

              case 238:
                if (!can_buy_credit_units) {
                  _context4.next = 247;
                  break;
                }

                if (!(currency.ops.cantxfree !== true && currency.ops.cantopup !== true && currency.ops.canswap === true)) {
                  _context4.next = 247;
                  break;
                }

                _context4.next = 242;
                return mvcmyquote.getPriceForCreditUnits(rootsessionuuid, _currencyuuid2, this._getCreditsUnitsToBuy(credit_units_requested));

              case 242:
                price_struct = _context4.sent;
                price_struct.credit_units_requested = this._getCreditsUnitsRequested(credit_units_requested);
                _context4.next = 246;
                return this._getPriceInfo(price_struct);

              case 246:
                priceinfo = _context4.sent;

              case 247:
                //
                // transfer
                //
                to_address = this.callparams && this.callparams.to ? this.callparams.to : null;
                credit_amount = this.callparams.credit_amount ? this.callparams.credit_amount : 0;
                amount_string = this.callparams && this.callparams.amount_string ? this.callparams.amount_string : 0;

                if (!amount_string) {
                  _context4.next = 254;
                  break;
                }

                // TODO: check amount_string is well formatted
                decimalamount_string = amount_string;
                _context4.next = 263;
                break;

              case 254:
                amount = this.callparams && this.callparams.amount ? this.callparams.amount : 0;

                if (!(amount > 0)) {
                  _context4.next = 263;
                  break;
                }

                decimals = parseInt(currency.decimals);
                _context4.next = 259;
                return mvcmyquote.getDecimalAmount(rootsessionuuid, amount, decimals);

              case 259:
                decimalamount = _context4.sent;
                _context4.next = 262;
                return decimalamount.toFixedString();

              case 262:
                decimalamount_string = _context4.sent;

              case 263:
                // return url
                return_url = this.callparams && this.callparams.returnurl ? this.app.decodebase64(this.callparams.returnurl) : null;
                callback_url = this.callparams && this.callparams.callbackurl ? this.app.decodebase64(this.callparams.callbackurl) : null;

              case 265:
                return _context4.abrupt("return", {
                  isdevicewallet: isdevicewallet,
                  opened_devicewallet: opened_devicewallet,
                  message_text: message_text,
                  currency: currency,
                  currentcard: card,
                  creditbalance: creditbalance,
                  position: position,
                  position_int: position_int,
                  position_string: position_string,
                  address: address,
                  privatekey: privatekey,
                  web3providerurl: web3providerurl,
                  address_string: address_string,
                  privatekey_string: privatekey_string,
                  web3providerurl_string: web3providerurl_string,
                  need_credit_units: need_credit_units,
                  can_buy_credit_units: can_buy_credit_units,
                  credit_units_requested: credit_units_requested,
                  priceinfo: priceinfo,
                  to_address: to_address,
                  transfer_amount: decimalamount_string,
                  credit_amount: credit_amount,
                  return_url: return_url,
                  callback_url: callback_url
                });

              case 268:
                _context4.prev = 268;
                _context4.t3 = _context4["catch"](11);
                console.log('exception in CurrencyCardView.fetchNavigationState: ' + _context4.t3);

              case 271:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[11, 268]]);
      }));

      function fetchNavigationState() {
        return _fetchNavigationState.apply(this, arguments);
      }

      return fetchNavigationState;
    }()
  }, {
    key: "checkNavigationState",
    value: function () {
      var _checkNavigationState = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(bForce) {
        var fetchNavigationStatePromise, data, isdevicewallet, opened_devicewallet, message_text, currency, currentcard, creditbalance, position, position_string, position_int, address, privatekey, web3providerurl, address_string, privatekey_string, web3providerurl_string, need_credit_units, can_buy_credit_units, credit_units_requested, priceinfo, to_address, transfer_amount, decimalamount_string, credit_amount, return_url, callback_url;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                console.log('CurrencyCardView.checkNavigationState called'); // use navigation promises to be re-entrant

                fetchNavigationStatePromise = this.app.getNavigationStatePromise(this.constructor.name, this.uuid);

                if (!fetchNavigationStatePromise || bForce) {
                  fetchNavigationStatePromise = this.fetchNavigationState();
                  this.app.addNavigationStatePromise(this.constructor.name, this.uuid, fetchNavigationStatePromise);
                }

                this.checking = true;
                _context5.prev = 4;
                _context5.next = 7;
                return fetchNavigationStatePromise;

              case 7:
                data = _context5.sent;
                isdevicewallet = data.isdevicewallet;
                opened_devicewallet = data.opened_devicewallet;
                message_text = data.message_text;
                currency = data.currency;
                currentcard = data.currentcard;
                creditbalance = data.creditbalance;
                position = data.position;
                position_string = data.position_string;
                position_int = data.position_int;
                address = data.address;
                privatekey = data.privatekey;
                web3providerurl = data.web3providerurl;
                address_string = data.address_string;
                privatekey_string = data.privatekey_string;
                web3providerurl_string = data.web3providerurl_string;
                need_credit_units = data.need_credit_units;
                can_buy_credit_units = data.can_buy_credit_units;
                credit_units_requested = data.credit_units_requested;
                priceinfo = data.priceinfo;
                to_address = data.to_address;
                transfer_amount = data.transfer_amount;
                decimalamount_string = data.decimalamount_string;
                credit_amount = data.credit_amount;
                return_url = data.return_url;
                callback_url = data.callback_url;

                this._setState({
                  isdevicewallet: isdevicewallet,
                  opened_devicewallet: opened_devicewallet,
                  message_text: message_text,
                  currency: currency,
                  currentcard: currentcard,
                  creditbalance: creditbalance,
                  position: position,
                  position_int: position_int,
                  position_string: position_string,
                  address: address,
                  privatekey: privatekey,
                  web3providerurl: web3providerurl,
                  address_string: address_string,
                  privatekey_string: privatekey_string,
                  web3providerurl_string: web3providerurl_string,
                  need_credit_units: need_credit_units,
                  can_buy_credit_units: can_buy_credit_units,
                  credit_units_requested: credit_units_requested,
                  priceinfo: priceinfo,
                  to_address: to_address,
                  transfer_amount: decimalamount_string,
                  credit_amount: credit_amount,
                  return_url: return_url,
                  callback_url: callback_url
                });

                _context5.next = 39;
                break;

              case 36:
                _context5.prev = 36;
                _context5.t0 = _context5["catch"](4);
                console.log('exception in CurrencyCardView.checkNavigationState: ' + _context5.t0);

              case 39:
                _context5.prev = 39;
                this.checking = false;
                return _context5.finish(39);

              case 42:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[4, 36, 39, 42]]);
      }));

      function checkNavigationState(_x2) {
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
                console.log('CurrencyCardView.onRefreshPage called');
                if (this.checking !== true) this.checkNavigationState(true)["catch"](function (err) {
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
    }()
  }, {
    key: "onMainCardSwitch",
    value: function () {
      var _onMainCardSwitch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var mvcmyquote, rootsessionuuid, walletuuid, _this$state, currency, currentcard, maincardswitchedat;

        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                console.log('CurrencyCardView.onMainCardSwitch called');
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid; // set current card as main card for its currency

                _this$state = this.state, currency = _this$state.currency, currentcard = _this$state.currentcard;

                if (!(!currency || !currentcard)) {
                  _context7.next = 7;
                  break;
                }

                return _context7.abrupt("return");

              case 7:
                _context7.next = 9;
                return mvcmyquote.setCurrencyCard(rootsessionuuid, walletuuid, currency.uuid, currentcard.uuid);

              case 9:
                maincardswitchedat = Date.now();

                this._setState({
                  maincardswitchedat: maincardswitchedat
                });

              case 11:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function onMainCardSwitch() {
        return _onMainCardSwitch.apply(this, arguments);
      }

      return onMainCardSwitch;
    }()
  }, {
    key: "onLoadCard",
    value: function () {
      var _onLoadCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                console.log('CurrencyCardView.onLoadCard called');
                this.app.alert('Load card pressed');

              case 2:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function onLoadCard() {
        return _onLoadCard.apply(this, arguments);
      }

      return onLoadCard;
    }()
  }, {
    key: "onBack",
    value: function () {
      var _onBack = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var currencyuuid, params;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                console.log('onBack pressed!');
                currencyuuid = this.currency.uuid;
                params = {
                  action: 'view',
                  currencyuuid: currencyuuid
                };
                _context9.next = 5;
                return this.app.gotoRoute('currencycards', params);

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function onBack() {
        return _onBack.apply(this, arguments);
      }

      return onBack;
    }() // end of life

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log('CurrencyCardView.componentWillUnmount called'); //this.closing = true;

      var app = this.app;
      var mvcmyquote = this.getMvcMyQuoteObject();
      mvcmyquote.unregisterEventListener('on_refreshPage', this.uuid);
      if (this.state.opened_devicewallet) this.app.closeDeviceWallet();
    } // user actions

  }, {
    key: "onTransfer",
    value: function () {
      var _onTransfer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var mvcmyquote, rootsessionuuid, walletuuid, _this$state2, currentcard, currency, transfer_amount, to_address, return_url, callback_url, validaddress, tokenamount, tokenamount_int, tx_fee, transfer_cost_units, _feelevel, canspend, txhash_payment, tx_info, turn_off_processing, _url, _url2, _keys, i;

        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                console.log('onTransfer pressed!');
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid;
                _this$state2 = this.state, currentcard = _this$state2.currentcard, currency = _this$state2.currency, transfer_amount = _this$state2.transfer_amount, to_address = _this$state2.to_address, return_url = _this$state2.return_url, callback_url = _this$state2.callback_url;

                this._setState({
                  processing: true,
                  processinginfo: 'transferring currency amount'
                });

                _context10.prev = 6;
                _context10.next = 9;
                return mvcmyquote.isValidAddress(rootsessionuuid, to_address)["catch"](function (err) {
                  console.log('error in CurrencyCardView.onTransfer: ' + err);
                });

              case 9:
                validaddress = _context10.sent;

                if (validaddress) {
                  _context10.next = 14;
                  break;
                }

                this.app.alert('This address is not valid');

                this._setState({
                  processing: false
                });

                return _context10.abrupt("return");

              case 14:
                _context10.next = 16;
                return mvcmyquote.getCurrencyAmount(rootsessionuuid, currency.uuid, transfer_amount);

              case 16:
                tokenamount = _context10.sent;
                _context10.next = 19;
                return tokenamount.toInteger();

              case 19:
                tokenamount_int = _context10.sent;
                // check we have enough transaction credits
                tx_fee = {};
                tx_fee.transferred_credit_units = 0;
                transfer_cost_units = 3;
                tx_fee.estimated_cost_units = transfer_cost_units;
                _context10.next = 26;
                return mvcmyquote.getRecommendedFeeLevel(rootsessionuuid, walletuuid, currentcard.uuid, tx_fee);

              case 26:
                _feelevel = _context10.sent;
                _context10.next = 29;
                return mvcmyquote.canCompleteTransaction(rootsessionuuid, walletuuid, currentcard.uuid, tx_fee, _feelevel)["catch"](function (err) {});

              case 29:
                canspend = _context10.sent;

                if (canspend) {
                  _context10.next = 40;
                  break;
                }

                if (!(tx_fee.estimated_fee.execution_credits > tx_fee.estimated_fee.max_credits)) {
                  _context10.next = 37;
                  break;
                }

                this.app.alert('The execution of this transaction is too large: ' + tx_fee.estimated_fee.execution_units + ' credit units.');

                this._setState({
                  processing: false
                });

                return _context10.abrupt("return");

              case 37:
                this.app.alert('You must add transaction units to the source card. You need at least ' + tx_fee.required_units + ' credit units.');

                this._setState({
                  processing: false
                });

                return _context10.abrupt("return");

              case 40:
                _context10.next = 42;
                return mvcmyquote.payAmount(rootsessionuuid, walletuuid, currentcard.uuid, to_address, currency.uuid, tokenamount_int, _feelevel)["catch"](function (err) {
                  console.log('error in CurrencyCardView.onTransfer: ' + err);
                });

              case 42:
                txhash_payment = _context10.sent;

                if (txhash_payment) {
                  _context10.next = 47;
                  break;
                }

                this.app.alert('Could not transfer amount');
                this.setState({
                  processing: false
                });
                return _context10.abrupt("return");

              case 47:
                _context10.next = 49;
                return this.app.waitForCurrencyTransactionInfo(currency.uuid, txhash_payment, {
                  max_loops: 10,
                  sleep: 5000
                });

              case 49:
                tx_info = _context10.sent;

                if (!(!tx_info || tx_info.status_int !== 10)) {
                  _context10.next = 54;
                  break;
                }

                this.app.alert('Transfer transaction still not visible on chain after 50s: ' + txhash_payment);
                this.setState({
                  processing: false
                });
                return _context10.abrupt("return");

              case 54:
                //
                // post transaction processing
                //
                turn_off_processing = true; // send info to caller's backoffice

                if (!callback_url) {
                  _context10.next = 66;
                  break;
                }

                _context10.prev = 56;
                // transaction hash
                _url = callback_url;

                if (_url.includes('?') !== true) {
                  _url += '?tx=' + txhash_payment;
                  ;
                } else {
                  // transaction hash
                  _url += '&tx=' + txhash_payment;
                }

                _context10.next = 61;
                return new Promise(function (resolve, reject) {
                  // make an XHttpRequest call (simle call, no check on return)
                  var xhttp = new XMLHttpRequest();
                  xhttp.open('GET', _url, true);
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
                  console.log('error in CurrencyCardView.onTransfer notifying callback: ' + err);
                });

              case 61:
                _context10.next = 66;
                break;

              case 63:
                _context10.prev = 63;
                _context10.t0 = _context10["catch"](56);
                console.log('exception in CurrencyCardView.onTransfer notifying callback: ' + _context10.t0);

              case 66:
                if (!return_url) {
                  _context10.next = 75;
                  break;
                }

                // transaction hash
                _url2 = return_url;

                if (_url2.includes('?') !== true) {
                  _url2 += '?tx=' + txhash_payment;
                  ;
                } else {
                  // transaction hash
                  _url2 += '&tx=' + txhash_payment;
                } // and we add all call parameters ending with "id"


                if (this.callparams) {
                  _keys = Object.keys(this.callparams);

                  for (i = 0; i < _keys.length; i++) {
                    if (_keys[i].toLowerCase().endsWith("id")) {
                      _url2 += '&' + _keys[i] + '=' + this.callparams[_keys[i]];
                    }
                  }
                }

                _context10.next = 72;
                return this.app.gotoUrl(_url2);

              case 72:
                turn_off_processing = false; // wait for url jump to happen

                _context10.next = 77;
                break;

              case 75:
                _context10.next = 77;
                return this.app.refreshPage();

              case 77:
                // end of processing
                if (turn_off_processing) this.setState({
                  processing: false
                });
                return _context10.abrupt("return", true);

              case 81:
                _context10.prev = 81;
                _context10.t1 = _context10["catch"](6);
                console.log('exception in onTransfer: ' + _context10.t1);
                this.setState({
                  processing: false
                });
                console.log(_context10.t1.stack);

              case 86:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[6, 81], [56, 63]]);
      }));

      function onTransfer() {
        return _onTransfer.apply(this, arguments);
      }

      return onTransfer;
    }()
  }, {
    key: "onReturn",
    value: function () {
      var _onReturn = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        var return_url;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                console.log('onReturn pressed!');
                return_url = this.state.return_url;

                if (return_url) {
                  _context11.next = 4;
                  break;
                }

                return _context11.abrupt("return");

              case 4:
                _context11.next = 6;
                return this.app.gotoUrl(return_url);

              case 6:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function onReturn() {
        return _onReturn.apply(this, arguments);
      }

      return onReturn;
    }() // buying

  }, {
    key: "onBuyCredits",
    value: function () {
      var _onBuyCredits = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
        var mvcmyquote, rootsessionuuid, walletuuid, _this$state3, currentcard, currency, credit_units_requested, credit_units_tobuy, tx_fee, transfer_cost_units, feelevel, txhash, tx_info;

        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                console.log('onBuyCredits pressed!');
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid;
                _this$state3 = this.state, currentcard = _this$state3.currentcard, currency = _this$state3.currency, credit_units_requested = _this$state3.credit_units_requested;

                this._setState({
                  processing: true,
                  processinginfo: 'buying credit units'
                });

                _context12.prev = 6;
                credit_units_tobuy = this._getCreditsUnitsToBuy(credit_units_requested);
                tx_fee = {};
                tx_fee.transferred_credit_units = 0;
                transfer_cost_units = currency.uniswap_v2 && currency.uniswap_v2.swap_max_cost_units ? parseInt(currency.uniswap_v2.swap_max_cost_units) : 8; // max of successive transactions (approve, buy)

                tx_fee.estimated_cost_units = transfer_cost_units;
                _context12.next = 14;
                return mvcmyquote.getRecommendedFeeLevel(rootsessionuuid, walletuuid, currentcard.uuid, tx_fee);

              case 14:
                feelevel = _context12.sent;
                _context12.next = 17;
                return mvcmyquote.buyCreditUnits(rootsessionuuid, walletuuid, currentcard.uuid, currency.uuid, credit_units_tobuy, feelevel)["catch"](function (err) {
                  console.log('error in CurrencyCardView.onBuyCredits: ' + err);
                });

              case 17:
                txhash = _context12.sent;

                if (txhash) {
                  _context12.next = 22;
                  break;
                }

                this.app.alert('Could not buy credit units');
                this.setState({
                  processing: false
                });
                return _context12.abrupt("return");

              case 22:
                _context12.next = 24;
                return this.app.waitForCurrencyTransactionInfo(currency.uuid, txhash, {
                  max_loops: 10,
                  sleep: 5000
                });

              case 24:
                tx_info = _context12.sent;

                if (!(!tx_info || tx_info.status_int !== 10)) {
                  _context12.next = 29;
                  break;
                }

                this.app.alert('Transfer transaction still not visible on chain after 50s: ' + txhash);
                this.setState({
                  processing: false
                });
                return _context12.abrupt("return");

              case 29:
                this.setState({
                  processing: false
                });
                this.app.refreshPage();
                return _context12.abrupt("return", true);

              case 34:
                _context12.prev = 34;
                _context12.t0 = _context12["catch"](6);
                console.log('exception in onBuyCredits: ' + _context12.t0);
                this.setState({
                  processing: false
                });

              case 38:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this, [[6, 34]]);
      }));

      function onBuyCredits() {
        return _onBuyCredits.apply(this, arguments);
      }

      return onBuyCredits;
    }() // picking from

  }, {
    key: "onSelectSourceCard",
    value: function () {
      var _onSelectSourceCard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(uuid) {
        var cards, sourcecard, i;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                cards = this.currencycards;
                i = 0;

              case 2:
                if (!(i < cards.length)) {
                  _context13.next = 9;
                  break;
                }

                if (!(uuid === cards[i].uuid)) {
                  _context13.next = 6;
                  break;
                }

                sourcecard = cards[i];
                return _context13.abrupt("break", 9);

              case 6:
                i++;
                _context13.next = 2;
                break;

              case 9:
                if (sourcecard) {
                  this._setState({
                    sourcecard: sourcecard
                  });
                }

                return _context13.abrupt("return", true);

              case 11:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function onSelectSourceCard(_x3) {
        return _onSelectSourceCard.apply(this, arguments);
      }

      return onSelectSourceCard;
    }()
  }, {
    key: "onPickCreditsFrom",
    value: function () {
      var _onPickCreditsFrom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
        var mvcmyquote, rootsessionuuid, walletuuid, _this$state4, sourcecard, currentcard, currency, credit_units_requested, feelevel, tx_fee, transfer_cost_units, canspend, units_txhash, tx_info;

        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                console.log('onPickCreditsFrom pressed!');
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid;
                _this$state4 = this.state, sourcecard = _this$state4.sourcecard, currentcard = _this$state4.currentcard, currency = _this$state4.currency, credit_units_requested = _this$state4.credit_units_requested;

                this._setState({
                  processing: true,
                  processinginfo: 'transferring credit units'
                });

                _context14.prev = 6;
                // check we have enough transaction credits
                feelevel = null;
                tx_fee = {};
                tx_fee.transferred_credit_units = parseInt(credit_units_requested);
                transfer_cost_units = 1;
                tx_fee.estimated_cost_units = transfer_cost_units;
                _context14.next = 14;
                return mvcmyquote.canCompleteTransaction(rootsessionuuid, walletuuid, sourcecard.uuid, tx_fee, feelevel)["catch"](function (err) {});

              case 14:
                canspend = _context14.sent;

                if (canspend) {
                  _context14.next = 25;
                  break;
                }

                if (!(tx_fee.estimated_fee.execution_credits > tx_fee.estimated_fee.max_credits)) {
                  _context14.next = 22;
                  break;
                }

                this.app.alert('The execution of this transaction is too large: ' + tx_fee.estimated_fee.execution_units + ' credit units.');

                this._setState({
                  processing: false
                });

                return _context14.abrupt("return");

              case 22:
                this.app.alert('You must add transaction units to the source card. You need at least ' + tx_fee.required_units + ' credit units.');

                this._setState({
                  processing: false
                });

                return _context14.abrupt("return");

              case 25:
                _context14.next = 27;
                return mvcmyquote.transferTransactionUnits(rootsessionuuid, walletuuid, sourcecard.uuid, currentcard.uuid, credit_units_requested);

              case 27:
                units_txhash = _context14.sent;

                if (units_txhash) {
                  _context14.next = 32;
                  break;
                }

                this.app.alert('Could not pick transaction units from source card');
                this.setState({
                  processing: false
                });
                return _context14.abrupt("return");

              case 32:
                _context14.next = 34;
                return this.app.waitForCurrencyTransactionInfo(currency.uuid, units_txhash, {
                  max_loops: 10,
                  sleep: 5000
                });

              case 34:
                tx_info = _context14.sent;

                if (!(!tx_info || tx_info.status_int !== 10)) {
                  _context14.next = 39;
                  break;
                }

                this.app.alert('Transfer transaction still not visible on chain after 50s: ' + units_txhash);
                this.setState({
                  processing: false
                });
                return _context14.abrupt("return");

              case 39:
                this.setState({
                  processing: false
                });
                this.app.refreshPage();
                return _context14.abrupt("return", true);

              case 44:
                _context14.prev = 44;
                _context14.t0 = _context14["catch"](6);
                console.log('exception in onPickCreditsFrom: ' + _context14.t0);
                this.app.error('exception in onPickCreditsFrom: ' + _context14.t0);
                this.app.alert('could not pick transaction units');
                this.setState({
                  processing: false
                });

              case 50:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this, [[6, 44]]);
      }));

      function onPickCreditsFrom() {
        return _onPickCreditsFrom.apply(this, arguments);
      }

      return onPickCreditsFrom;
    }() // moving credits

  }, {
    key: "onMoveCredits",
    value: function () {
      var _onMoveCredits = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
        var mvcmyquote, rootsessionuuid, walletuuid, _this$state5, currentcard, currency, credit_amount, to_address, return_url, validaddress, feelevel, tx_fee, transfer_cost_units, canspend, tocard, units_txhash, tx_info, _url, _keys, i;

        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                console.log('onMoveCredits pressed!');
                mvcmyquote = this.getMvcMyQuoteObject();
                rootsessionuuid = this.props.rootsessionuuid;
                walletuuid = this.props.currentwalletuuid;
                _this$state5 = this.state, currentcard = _this$state5.currentcard, currency = _this$state5.currency, credit_amount = _this$state5.credit_amount, to_address = _this$state5.to_address, return_url = _this$state5.return_url;

                this._setState({
                  processing: true,
                  processinginfo: 'transfering credit units'
                });

                _context15.prev = 6;
                _context15.next = 9;
                return mvcmyquote.isValidAddress(rootsessionuuid, to_address)["catch"](function (err) {
                  console.log('error in CurrencyCardView.onTransfer: ' + err);
                });

              case 9:
                validaddress = _context15.sent;

                if (validaddress) {
                  _context15.next = 14;
                  break;
                }

                this.app.alert('This address is not valid');

                this._setState({
                  processing: false
                });

                return _context15.abrupt("return");

              case 14:
                // check we have enough transaction credits
                feelevel = null;
                tx_fee = {};
                tx_fee.transferred_credit_units = parseInt(credit_amount);
                transfer_cost_units = 1;
                tx_fee.estimated_cost_units = transfer_cost_units;
                _context15.next = 21;
                return mvcmyquote.canCompleteTransaction(rootsessionuuid, walletuuid, currentcard.uuid, tx_fee, feelevel)["catch"](function (err) {});

              case 21:
                canspend = _context15.sent;

                if (canspend) {
                  _context15.next = 32;
                  break;
                }

                if (!(tx_fee.estimated_fee.execution_credits > tx_fee.estimated_fee.max_credits)) {
                  _context15.next = 29;
                  break;
                }

                this.app.alert('The execution of this transaction is too large: ' + tx_fee.estimated_fee.execution_units + ' credit units.');

                this._setState({
                  processing: false
                });

                return _context15.abrupt("return");

              case 29:
                this.app.alert('You must add transaction units to the source card. You need at least ' + tx_fee.required_units + ' credit units.');

                this._setState({
                  processing: false
                });

                return _context15.abrupt("return");

              case 32:
                _context15.next = 34;
                return mvcmyquote.getCardInfoFromAddressOnScheme(rootsessionuuid, walletuuid, currentcard.schemeuuid, to_address)["catch"](function (err) {});

              case 34:
                tocard = _context15.sent;

                if (!tocard) {
                  _context15.next = 41;
                  break;
                }

                _context15.next = 38;
                return mvcmyquote.transferTransactionUnits(rootsessionuuid, walletuuid, currentcard.uuid, tocard.uuid, credit_amount);

              case 38:
                units_txhash = _context15.sent;
                _context15.next = 44;
                break;

              case 41:
                _context15.next = 43;
                return mvcmyquote.sendTransactionUnits(rootsessionuuid, walletuuid, currentcard.uuid, to_address, credit_amount);

              case 43:
                units_txhash = _context15.sent;

              case 44:
                if (units_txhash) {
                  _context15.next = 48;
                  break;
                }

                this.app.alert('Could not pick transaction units from source card');
                this.setState({
                  processing: false
                });
                return _context15.abrupt("return");

              case 48:
                _context15.next = 50;
                return this.app.waitForCurrencyTransactionInfo(currency.uuid, units_txhash, {
                  max_loops: 10,
                  sleep: 5000
                });

              case 50:
                tx_info = _context15.sent;

                if (!(!tx_info || tx_info.status_int !== 10)) {
                  _context15.next = 55;
                  break;
                }

                this.app.alert('Transfer transaction still not visible on chain after 50s: ' + units_txhash);
                this.setState({
                  processing: false
                });
                return _context15.abrupt("return");

              case 55:
                this.setState({
                  processing: false
                });

                if (!return_url) {
                  _context15.next = 64;
                  break;
                }

                // transaction hash
                _url = return_url;

                if (_url.includes('?') !== true) {
                  _url += '?tx=' + units_txhash;
                  ;
                } else {
                  // transaction hash
                  _url += '&tx=' + units_txhash;
                } // and we add all call parameters ending with "id"


                if (this.callparams) {
                  _keys = Object.keys(this.callparams);

                  for (i = 0; i < _keys.length; i++) {
                    if (_keys[i].toLowerCase().endsWith("id")) {
                      _url += '&' + _keys[i] + '=' + this.callparams[_keys[i]];
                    }
                  }
                }

                _context15.next = 62;
                return this.app.gotoUrl(_url);

              case 62:
                _context15.next = 66;
                break;

              case 64:
                _context15.next = 66;
                return this.app.refreshPage();

              case 66:
                return _context15.abrupt("return", true);

              case 69:
                _context15.prev = 69;
                _context15.t0 = _context15["catch"](6);
                console.log('exception in onMoveCredits: ' + _context15.t0);
                this.setState({
                  processing: false
                });

              case 73:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this, [[6, 69]]);
      }));

      function onMoveCredits() {
        return _onMoveCredits.apply(this, arguments);
      }

      return onMoveCredits;
    }() // rendering

  }, {
    key: "renderBuyMoreCreditsPart",
    value: function renderBuyMoreCreditsPart() {
      var _this3 = this;

      var _this$state6 = this.state,
          currency = _this$state6.currency,
          credit_units_requested = _this$state6.credit_units_requested,
          position_int = _this$state6.position_int,
          priceinfo = _this$state6.priceinfo;
      if (currency.ops.canswap !== true) return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
      var credit_units_requested_disabled = credit_units_requested > 0 || parseInt(credit_units_requested) > 0 ? false : true;
      if (position_int == 0) credit_units_requested_disabled = true;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "Separator"
      }, "\xA0"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormGroup, {
        controlId: "buycredits"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormLabel, null, "Buy more credit units"), priceinfo && priceinfo.length ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "TextBox"
      }, priceinfo) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormGroup, {
        className: "DetailCardLine"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormControl, {
        autoFocus: true,
        type: "text",
        value: credit_units_requested,
        onChange: function onChange(e) {
          return _this3.setState({
            credit_units_requested: e.target.value
          });
        }
      }), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        disabled: credit_units_requested_disabled,
        onClick: this.onBuyCredits.bind(this),
        type: "submit"
      }, "Buy"))));
    }
  }, {
    key: "renderPickCreditsFromPart",
    value: function renderPickCreditsFromPart() {
      var _this4 = this;

      var mvcmyquote = this.getMvcMyQuoteObject();
      var _this$state7 = this.state,
          sourcecard = _this$state7.sourcecard,
          credit_units_requested = _this$state7.credit_units_requested;
      var positivecards = this.positivecards;
      var can_pick_credit_units = false;
      var pick_credit_units_disabled = true;

      if (!positivecards || positivecards.length == 0) {
        can_pick_credit_units = true;
      }

      if (sourcecard) {
        if (credit_units_requested > 0 || parseInt(credit_units_requested) > 0) {
          if (credit_units_requested < sourcecard.credits.transactionunits) {
            pick_credit_units_disabled = false;
          } else {
            pick_credit_units_disabled = true;
          }
        } else {
          pick_credit_units_disabled = true;
        }
      } else {
        pick_credit_units_disabled = true;
      }

      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "Separator"
      }, "\xA0"), can_pick_credit_units ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "TextBox"
      }, "There is no other card for this currency that has enough transaction credits to pick some units from it.") : /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormGroup, {
        controlId: "pickcredits"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormLabel, null, "Pick from"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormGroup, {
        controlId: "newcard",
        className: "AddCardLine"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormControl, {
        className: "CardPrivateKeyInput",
        disabled: true,
        autoFocus: true,
        type: "text",
        value: sourcecard ? sourcecard.address : '',
        onChange: function onChange(e) {
          return _this4._setState({
            signingkey: e.target.value
          });
        }
      }), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.DropdownButton, {
        id: "input-dropdown-addon",
        title: "Cur.",
        onSelect: function onSelect(e) {
          return _this4.onSelectSourceCard(e);
        }
      }, positivecards.map(function (item, index) {
        return /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Dropdown.Item, {
          key: item.uuid,
          eventKey: item.uuid,
          value: item.uuid
        }, 'card with ' + item.credits.transactionunits + ' units - ' + mvcmyquote.fitString(item.address, 12));
      })))), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormGroup, {
        controlId: "pickcredits"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormLabel, null, "# credit units"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormGroup, {
        className: "DetailCardLine"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormControl, {
        autoFocus: true,
        type: "text",
        value: credit_units_requested,
        onChange: function onChange(e) {
          return _this4.setState({
            credit_units_requested: e.target.value
          });
        }
      }), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        disabled: pick_credit_units_disabled,
        onClick: this.onPickCreditsFrom.bind(this),
        type: "submit"
      }, "Pick"))));
    }
  }, {
    key: "renderTransferToPart",
    value: function renderTransferToPart() {
      var _this5 = this;

      var _this$state8 = this.state,
          to_address = _this$state8.to_address,
          transfer_amount = _this$state8.transfer_amount,
          return_url = _this$state8.return_url;
      var transfer_disabled = to_address && to_address.length && (transfer_amount > 0 || parseInt(transfer_amount) > 0) ? false : true;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "Separator"
      }, "\xA0"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormGroup, {
        controlId: "transferto"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormLabel, null, "Transfer to address"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormGroup, {
        className: "DetailCardLine"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormControl, {
        autoFocus: true,
        type: "text",
        value: to_address ? to_address : '',
        onChange: function onChange(e) {
          return _this5.setState({
            to_address: e.target.value
          });
        }
      }), return_url ? /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        onClick: this.onReturn.bind(this),
        type: "submit"
      }, "Cancel") : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null))), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormGroup, {
        controlId: "transfer"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormLabel, null, "currency amount"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormGroup, {
        className: "DetailCardLine"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormControl, {
        autoFocus: true,
        type: "text",
        value: transfer_amount ? transfer_amount : '',
        onChange: function onChange(e) {
          return _this5.setState({
            transfer_amount: e.target.value
          });
        }
      }), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        disabled: transfer_disabled,
        onClick: this.onTransfer.bind(this),
        type: "submit"
      }, "Transfer"))));
    }
  }, {
    key: "renderMoveCreditsToPart",
    value: function renderMoveCreditsToPart() {
      var _this6 = this;

      var _this$state9 = this.state,
          to_address = _this$state9.to_address,
          credit_amount = _this$state9.credit_amount;
      var transfer_disabled = to_address && to_address.length && (credit_amount > 0 || parseInt(credit_amount) > 0) ? false : true;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "Separator"
      }, "\xA0"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormGroup, {
        controlId: "move"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormLabel, null, "# credits units"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormGroup, {
        className: "DetailCardLine"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormControl, {
        autoFocus: true,
        type: "text",
        value: credit_amount ? credit_amount : '',
        onChange: function onChange(e) {
          return _this6.setState({
            credit_amount: e.target.value
          });
        }
      }), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
        disabled: transfer_disabled,
        onClick: this.onMoveCredits.bind(this),
        type: "submit"
      }, "Provide"))));
    }
  }, {
    key: "renderTransactionPart",
    value: function renderTransactionPart() {
      var _this$state10 = this.state,
          to_address = _this$state10.to_address,
          currency = _this$state10.currency,
          need_credit_units = _this$state10.need_credit_units,
          can_buy_credit_units = _this$state10.can_buy_credit_units;
      if (currency.ops.canpay !== true) return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);

      if (need_credit_units) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "Form"
        }, this.renderPickCreditsFromPart(), can_buy_credit_units ? this.renderBuyMoreCreditsPart() : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null));
      } else {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "Form"
        }, this.renderTransferToPart(), to_address && to_address.length ? this.renderMoveCreditsToPart() : this.renderBuyMoreCreditsPart());
      }
    }
  }, {
    key: "renderCurrencyCardView",
    value: function renderCurrencyCardView() {
      var _this$state11 = this.state,
          currency = _this$state11.currency,
          currentcard = _this$state11.currentcard,
          creditbalance = _this$state11.creditbalance,
          position_string = _this$state11.position_string,
          privatekey = _this$state11.privatekey,
          address = _this$state11.address,
          web3providerurl = _this$state11.web3providerurl,
          privatekey_string = _this$state11.privatekey_string,
          address_string = _this$state11.address_string,
          web3providerurl_string = _this$state11.web3providerurl_string;
      var maincard = currentcard && currentcard.xtra_data.myquote ? currentcard.xtra_data.myquote.maincard : false;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "Form"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormGroup, {
        className: "CurrencyCard",
        controlId: "balance"
      }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormLabel, null, "# credit units"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormControl, {
        className: "CurrencyCardBalance",
        disabled: true,
        autoFocus: true,
        type: "text",
        value: creditbalance
      })), /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormLabel, null, "Balance"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormControl, {
        className: "CurrencyCardBalance",
        disabled: true,
        autoFocus: true,
        type: "text",
        value: position_string
      })), /*#__PURE__*/_react["default"].createElement("span", {
        className: "CurrencyCardIconCol"
      }, /*#__PURE__*/_react["default"].createElement("span", null, maincard ? /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faStar,
        size: "2x"
      }) : /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeRegularSvgIcons.faStar,
        size: "2x",
        onClick: this.onMainCardSwitch.bind(this)
      })), "    ")), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormGroup, {
        controlId: "address"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormLabel, null, "Address"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormGroup, {
        className: "DetailCardLine"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormControl, {
        className: "CurrencyCardAddress",
        disabled: true,
        autoFocus: true,
        type: "text",
        value: address_string ? address_string : ''
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "ShareIcon"
      }, /*#__PURE__*/_react["default"].createElement(_textCopyIcon["default"], {
        app: this.app,
        text: address,
        message: "address has been copied to clipboard"
      })))), privatekey ? /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormGroup, {
        controlId: "privatekey"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormLabel, null, "Private key"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormGroup, {
        className: "DetailCardLine"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormControl, {
        className: "CurrencyCardAddress",
        disabled: true,
        autoFocus: true,
        type: "text",
        value: privatekey_string ? privatekey_string : ''
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "ShareIcon"
      }, /*#__PURE__*/_react["default"].createElement(_textCopyIcon["default"], {
        app: this.app,
        text: privatekey,
        message: "private key has been copied to clipboard"
      })))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormGroup, {
        controlId: "web3providerurl"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormLabel, null, "RPC URL ", currency && currency.name ? 'for ' + currency.name : ''), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormGroup, {
        className: "DetailCardLine"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormControl, {
        className: "CurrencyCardAddress",
        disabled: true,
        autoFocus: true,
        type: "text",
        value: web3providerurl_string ? web3providerurl_string : ''
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "ShareIcon"
      }, /*#__PURE__*/_react["default"].createElement(_textCopyIcon["default"], {
        app: this.app,
        text: web3providerurl,
        message: "rpc url has been copied to clipboard"
      })))));
    }
  }, {
    key: "render",
    value: function render() {
      var processing = this.state.processing;

      if (processing === true) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "Splash"
        }, /*#__PURE__*/_react["default"].createElement("div", null, this.state.processinginfo), /*#__PURE__*/_react["default"].createElement(_BeatLoader["default"], null));
      }

      var _this$state12 = this.state,
          message_text = _this$state12.message_text,
          privatekey = _this$state12.privatekey;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "Container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "TitleBanner"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "Title"
      }, "Currency Card"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "BackIcon",
        onClick: this.onBack.bind(this)
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faUndo
      }))), this.renderCurrencyCardView(), /*#__PURE__*/_react["default"].createElement("div", {
        className: "TextBox"
      }, message_text), privatekey ? this.renderTransactionPart() : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null));
    }
  }]);

  return CurrencyCardView;
}(_react["default"].Component); // propTypes validation


exports.CurrencyCardView = CurrencyCardView;
CurrencyCardView.propTypes = {
  app: _propTypes["default"].object.isRequired,
  rootsessionuuid: _propTypes["default"].string,
  currentwalletuuid: _propTypes["default"].string,
  iswalletlocked: _propTypes["default"].bool
}; //redux

var mapStateToProps = function mapStateToProps(state) {
  return {
    rootsessionuuid: state.session.sessionuuid,
    pending: state.login.pending,
    success: state.login.success,
    lasterror: state.login.error,
    currentwalletuuid: state.wallets.walletuuid,
    iswalletlocked: state.wallets.islocked
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CurrencyCardView);

exports["default"] = _default;