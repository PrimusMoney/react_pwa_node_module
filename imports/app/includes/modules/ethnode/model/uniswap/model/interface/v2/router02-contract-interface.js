'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Router02ContractInterface = /*#__PURE__*/function () {
  function Router02ContractInterface(session, contractaddress, web3providerurl) {
    _classCallCheck(this, Router02ContractInterface);

    this.session = session;
    this.address = contractaddress;
    this.web3providerurl = web3providerurl; // operating variables

    this.contractinstance = null;
  }

  _createClass(Router02ContractInterface, [{
    key: "getContractInstance",
    value: function getContractInstance() {
      if (this.contractinstance) return this.contractinstance;
      var session = this.session;
      var global = session.getGlobalObject();
      var ethnodemodule = global.getModuleObject('ethnode');
      this.contractinstance = ethnodemodule.getContractInstance(session, this.address, './contracts/uniswap_v2/IUniswapV2Router02.json', this.web3providerurl);
      return this.contractinstance;
    }
  }, {
    key: "WETH",
    value: function () {
      var _WETH = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var contractinstance, args, WETH;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                contractinstance = this.getContractInstance();
                args = [];
                _context.next = 4;
                return contractinstance.method_call('WETH', args);

              case 4:
                WETH = _context.sent;
                return _context.abrupt("return", WETH);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function WETH() {
        return _WETH.apply(this, arguments);
      }

      return WETH;
    }()
  }, {
    key: "getAmountsIn",
    value: function () {
      var _getAmountsIn = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(amountOut, path) {
        var contractinstance, args, amountIn;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                contractinstance = this.getContractInstance();
                args = [];
                args.push(amountOut);
                args.push(path);
                _context2.next = 6;
                return contractinstance.method_call('getAmountsIn', args);

              case 6:
                amountIn = _context2.sent;
                return _context2.abrupt("return", amountIn);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getAmountsIn(_x, _x2) {
        return _getAmountsIn.apply(this, arguments);
      }

      return getAmountsIn;
    }()
  }, {
    key: "getAmountsOut",
    value: function () {
      var _getAmountsOut = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(amountIn, path) {
        var contractinstance, args, amountOut;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                contractinstance = this.getContractInstance();
                args = [];
                args.push(amountIn);
                args.push(path);
                _context3.next = 6;
                return contractinstance.method_call('getAmountsOut', args);

              case 6:
                amountOut = _context3.sent;
                return _context3.abrupt("return", amountOut);

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getAmountsOut(_x3, _x4) {
        return _getAmountsOut.apply(this, arguments);
      }

      return getAmountsOut;
    }()
  }, {
    key: "quote",
    value: function () {
      var _quote = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(amountA, reserveA, reserveB) {
        var contractinstance, args, amountB;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                contractinstance = this.getContractInstance();
                args = [];
                args.push(amountA);
                args.push(reserveA);
                args.push(reserveB);
                _context4.next = 7;
                return contractinstance.method_call('quote', args);

              case 7:
                amountB = _context4.sent;
                return _context4.abrupt("return", amountB);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function quote(_x5, _x6, _x7) {
        return _quote.apply(this, arguments);
      }

      return quote;
    }() // transactions
    // between token and ETH

  }, {
    key: "swapTokensForExactETH",
    value: function () {
      var _swapTokensForExactETH = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(amountOut, amountInMax, path, deadline, ethtx) {
        var contractinstance, payingaccount, to, gas, gasPrice, transactionuuid, value, contracttransaction, args;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                contractinstance = this.getContractInstance(); // create contract transaction

                payingaccount = ethtx.getPayingAccount();
                payingaccount = payingaccount ? payingaccount : ethtx.getFromAccount();
                to = ethtx.getToAddress();
                gas = ethtx.getGas();
                gasPrice = ethtx.getGasPrice();
                transactionuuid = ethtx.getTransactionUUID();
                value = ethtx.getValue();
                contracttransaction = contractinstance.getContractTransactionObject(payingaccount, gas, gasPrice);
                contracttransaction.setContractTransactionUUID(transactionuuid);
                contracttransaction.setValue(value); // set call argument

                args = [];
                args.push(amountOut);
                args.push(amountInMax);
                args.push(path);
                args.push(to);
                args.push(deadline);
                contracttransaction.setArguments(args);
                contracttransaction.setMethodName('swapTokensForExactETH');
                return _context5.abrupt("return", contractinstance.method_send(contracttransaction));

              case 20:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function swapTokensForExactETH(_x8, _x9, _x10, _x11, _x12) {
        return _swapTokensForExactETH.apply(this, arguments);
      }

      return swapTokensForExactETH;
    }()
  }, {
    key: "swapExactTokensForETH",
    value: function () {
      var _swapExactTokensForETH = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(amountIn, amountOutMin, path, deadline, ethtx) {
        var contractinstance, payingaccount, to, gas, gasPrice, transactionuuid, value, contracttransaction, args;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                contractinstance = this.getContractInstance(); // create contract transaction

                payingaccount = ethtx.getPayingAccount();
                payingaccount = payingaccount ? payingaccount : ethtx.getFromAccount();
                to = ethtx.getToAddress();
                gas = ethtx.getGas();
                gasPrice = ethtx.getGasPrice();
                transactionuuid = ethtx.getTransactionUUID();
                value = ethtx.getValue();
                contracttransaction = contractinstance.getContractTransactionObject(payingaccount, gas, gasPrice);
                contracttransaction.setContractTransactionUUID(transactionuuid);
                contracttransaction.setValue(value); // set call argument

                args = [];
                args.push(amountIn);
                args.push(amountOutMin);
                args.push(path);
                args.push(to);
                args.push(deadline);
                contracttransaction.setArguments(args);
                contracttransaction.setMethodName('swapExactTokensForETH');
                return _context6.abrupt("return", contractinstance.method_send(contracttransaction));

              case 20:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function swapExactTokensForETH(_x13, _x14, _x15, _x16, _x17) {
        return _swapExactTokensForETH.apply(this, arguments);
      }

      return swapExactTokensForETH;
    }() // between tokens

  }, {
    key: "swapTokensForExactTokens",
    value: function () {
      var _swapTokensForExactTokens = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(amountOut, amountInMax, path, deadline, ethtx) {
        var contractinstance, payingaccount, to, gas, gasPrice, transactionuuid, value, contracttransaction, args;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                contractinstance = this.getContractInstance(); // create contract transaction

                payingaccount = ethtx.getPayingAccount();
                payingaccount = payingaccount ? payingaccount : ethtx.getFromAccount();
                to = ethtx.getToAddress();
                gas = ethtx.getGas();
                gasPrice = ethtx.getGasPrice();
                transactionuuid = ethtx.getTransactionUUID();
                value = ethtx.getValue();
                contracttransaction = contractinstance.getContractTransactionObject(payingaccount, gas, gasPrice);
                contracttransaction.setContractTransactionUUID(transactionuuid);
                contracttransaction.setValue(value); // set call argument

                args = [];
                args.push(amountOut);
                args.push(amountInMax);
                args.push(path);
                args.push(to);
                args.push(deadline);
                contracttransaction.setArguments(args);
                contracttransaction.setMethodName('swapTokensForExactTokens');
                return _context7.abrupt("return", contractinstance.method_send(contracttransaction));

              case 20:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function swapTokensForExactTokens(_x18, _x19, _x20, _x21, _x22) {
        return _swapTokensForExactTokens.apply(this, arguments);
      }

      return swapTokensForExactTokens;
    }()
  }, {
    key: "swapExactTokensForTokens",
    value: function () {
      var _swapExactTokensForTokens = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(amountIn, amountOutMin, path, deadline, ethtx) {
        var contractinstance, payingaccount, to, gas, gasPrice, transactionuuid, value, contracttransaction, args;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                contractinstance = this.getContractInstance(); // create contract transaction

                payingaccount = ethtx.getPayingAccount();
                payingaccount = payingaccount ? payingaccount : ethtx.getFromAccount();
                to = ethtx.getToAddress();
                gas = ethtx.getGas();
                gasPrice = ethtx.getGasPrice();
                transactionuuid = ethtx.getTransactionUUID();
                value = ethtx.getValue();
                contracttransaction = contractinstance.getContractTransactionObject(payingaccount, gas, gasPrice);
                contracttransaction.setContractTransactionUUID(transactionuuid);
                contracttransaction.setValue(value); // set call argument

                args = [];
                args.push(amountIn);
                args.push(amountOutMin);
                args.push(path);
                args.push(to);
                args.push(deadline);
                contracttransaction.setArguments(args);
                contracttransaction.setMethodName('swapExactTokensForTokens');
                return _context8.abrupt("return", contractinstance.method_send(contracttransaction));

              case 20:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function swapExactTokensForTokens(_x23, _x24, _x25, _x26, _x27) {
        return _swapExactTokensForTokens.apply(this, arguments);
      }

      return swapExactTokensForTokens;
    }()
  }]);

  return Router02ContractInterface;
}();

if (typeof window !== 'undefined' && typeof window.GlobalClass !== 'undefined' && window.GlobalClass) {
  var _GlobalClass = window.GlobalClass;
} else if (typeof window !== 'undefined') {
  var _GlobalClass = window && window.simplestore && window.simplestore.Global ? window.simplestore.Global : null;
} else if (typeof global !== 'undefined') {
  // we are in node js
  var _GlobalClass = global && global.simplestore && global.simplestore.Global ? global.simplestore.Global : null;
}

_GlobalClass.registerModuleClass('uniswap', 'V2_Router02ContractInterface', Router02ContractInterface);