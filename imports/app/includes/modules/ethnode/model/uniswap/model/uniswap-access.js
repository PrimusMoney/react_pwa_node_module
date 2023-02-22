'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var UniswapAccess = /*#__PURE__*/function () {
  function UniswapAccess(session, module) {
    _classCallCheck(this, UniswapAccess);

    this.session = session;
    this.module = module;
    this.global = this.module.global;
  }

  _createClass(UniswapAccess, [{
    key: "getPriceForOutput",
    value: function () {
      var _getPriceForOutput = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(scheme, token1, token2, token2amount, uniswap_conf) {
        var global, session, price, ethnodeserverconfig, web3providerurl, UniswapV2FactoryAddress, UniswapV2Router02Address, networkid, uniswapfactoryinterface, pair_address, uniswappairinterface, reserves, uniswaprouter02interface, quote2, path, WETH;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                global = this.global;
                session = this.session;
                _context.prev = 2;
                price = {};

                if (uniswap_conf) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", price);

              case 6:
                ethnodeserverconfig = scheme.getEthNodeServerConfig();
                web3providerurl = scheme.getWeb3ProviderUrl();
                this.module.addWeb3Provider(scheme); // conf

                UniswapV2FactoryAddress = uniswap_conf.factory;
                UniswapV2Router02Address = uniswap_conf.router; // contract methods

                networkid = ethnodeserverconfig.networkid;
                uniswapfactoryinterface = this.getV2FactoryContratInterface(session, UniswapV2FactoryAddress, web3providerurl);
                _context.next = 15;
                return uniswapfactoryinterface.getPairAddress(token1.address, token2.address);

              case 15:
                pair_address = _context.sent;
                uniswappairinterface = this.getV2PairContratInterface(session, pair_address, web3providerurl);
                _context.next = 19;
                return uniswappairinterface.getReserves();

              case 19:
                reserves = _context.sent;
                uniswaprouter02interface = this.getV2Router02ContratInterface(session, UniswapV2Router02Address, web3providerurl);
                _context.next = 23;
                return uniswaprouter02interface.quote(1, reserves.reserve0, reserves.reserve1);

              case 23:
                quote2 = _context.sent;
                path = [];
                path.push(token1.address);
                path.push(token2.address);
                _context.next = 29;
                return uniswaprouter02interface.WETH();

              case 29:
                WETH = _context.sent;
                _context.next = 32;
                return uniswaprouter02interface.getAmountsIn(token2amount, path);

              case 32:
                price.amounts_in = _context.sent;
                _context.next = 35;
                return uniswaprouter02interface.getAmountsIn(1, path);

              case 35:
                price.unit_amount_in = _context.sent;
                _context.next = 38;
                return uniswaprouter02interface.getAmountsOut(token2amount, path);

              case 38:
                price.amounts_out = _context.sent;
                _context.next = 41;
                return uniswaprouter02interface.getAmountsOut(1, path);

              case 41:
                price.unit_amount_out = _context.sent;
                return _context.abrupt("return", price);

              case 45:
                _context.prev = 45;
                _context.t0 = _context["catch"](2);
                console.log('exception ' + _context.t0);
                console.log(_context.t0.stack);

              case 49:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 45]]);
      }));

      function getPriceForOutput(_x, _x2, _x3, _x4, _x5) {
        return _getPriceForOutput.apply(this, arguments);
      }

      return getPriceForOutput;
    }()
  }, {
    key: "_importERC20Token",
    value: function _importERC20Token(session, tokenaddress) {
      var global = this.global;
      var erc20tokenmodule = global.getModuleObject('erc20');
      var data = {};
      data['description'] = tokenaddress;
      data['address'] = tokenaddress;
      var erc20tokencontrollers = erc20tokenmodule.getControllersObject(); // create (local) contract for these values

      var erc20tokencontract = erc20tokencontrollers.createERC20TokenObject(session, data);
      return erc20tokencontract;
    }
  }, {
    key: "buyEthOnOutput",
    value: function () {
      var _buyEthOnOutput = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(scheme, token1, token1amountmax, weth, ethamount, uniswap_conf, ethtx) {
        var global, session, web3providerurl, UniswapV2FactoryAddress, UniswapV2Router02Address, uniswaprouter02interface, erc20token1contract, routercontractaccount, allowance, alloweraccount, gas, gasPrice, approve, path, deadline, result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                global = this.global;
                session = this.session;
                _context2.prev = 2;
                web3providerurl = scheme.getWeb3ProviderUrl(); // conf

                UniswapV2FactoryAddress = uniswap_conf.factory;
                UniswapV2Router02Address = uniswap_conf.router;
                uniswaprouter02interface = this.getV2Router02ContratInterface(session, UniswapV2Router02Address, web3providerurl); // check first that contract has enough allowance on sender account

                erc20token1contract = this._importERC20Token(session, token1.address);
                routercontractaccount = session.createBlankAccountObject();
                routercontractaccount.setAddress(UniswapV2Router02Address);
                _context2.next = 12;
                return erc20token1contract.allowance(ethtx.getFromAccount(), routercontractaccount);

              case 12:
                allowance = _context2.sent;

                if (!(parseInt(allowance) < token1amountmax)) {
                  _context2.next = 22;
                  break;
                }

                alloweraccount = ethtx.getFromAccount();
                gas = ethtx.getGas(); // we re-use the fees for the original transaction

                gasPrice = ethtx.getGasPrice();
                _context2.next = 19;
                return erc20token1contract.approve(routercontractaccount, token1amountmax, alloweraccount, gas, gasPrice);

              case 19:
                approve = _context2.sent;

                if (approve) {
                  _context2.next = 22;
                  break;
                }

                return _context2.abrupt("return", Promise.reject('could not approve contract on token'));

              case 22:
                path = [];
                path.push(token1.address);
                path.push(weth.address);
                deadline = Date.now() + 5 * 60; // 5 minutes

                _context2.next = 28;
                return uniswaprouter02interface.swapTokensForExactETH(ethamount, token1amountmax, path, deadline, ethtx);

              case 28:
                result = _context2.sent;
                return _context2.abrupt("return", result);

              case 32:
                _context2.prev = 32;
                _context2.t0 = _context2["catch"](2);
                console.log('exception ' + _context2.t0);
                console.log(_context2.t0.stack);

              case 36:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 32]]);
      }));

      function buyEthOnOutput(_x6, _x7, _x8, _x9, _x10, _x11, _x12) {
        return _buyEthOnOutput.apply(this, arguments);
      }

      return buyEthOnOutput;
    }()
  }, {
    key: "buyTokensOnOutput",
    value: function () {
      var _buyTokensOnOutput = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(scheme, token1, token1amountmax, token2, token2amount, uniswap_conf, ethtx) {
        var global, session, web3providerurl, UniswapV2FactoryAddress, UniswapV2Router02Address, uniswaprouter02interface, erc20token1contract, routercontractaccount, allowance, alloweraccount, gas, gasPrice, approve, path, deadline, result;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                global = this.global;
                session = this.session;
                _context3.prev = 2;
                web3providerurl = scheme.getWeb3ProviderUrl(); // conf

                UniswapV2FactoryAddress = uniswap_conf.factory;
                UniswapV2Router02Address = uniswap_conf.router;
                uniswaprouter02interface = this.getV2Router02ContratInterface(session, UniswapV2Router02Address, web3providerurl); // check first that contract has enough allowance on sender account

                erc20token1contract = this._importERC20Token(session, token1.address);
                routercontractaccount = session.createBlankAccountObject();
                routercontractaccount.setAddress(UniswapV2Router02Address);
                _context3.next = 12;
                return erc20token1contract.allowance(ethtx.getFromAccount(), routercontractaccount);

              case 12:
                allowance = _context3.sent;

                if (!(parseInt(allowance) < token1amountmax)) {
                  _context3.next = 22;
                  break;
                }

                alloweraccount = ethtx.getFromAccount();
                gas = ethtx.getGas(); // we re-use the fees for the original transaction

                gasPrice = ethtx.getGasPrice();
                _context3.next = 19;
                return erc20token1contract.approve(routercontractaccount, token1amountmax, alloweraccount, gas, gasPrice);

              case 19:
                approve = _context3.sent;

                if (approve) {
                  _context3.next = 22;
                  break;
                }

                return _context3.abrupt("return", Promise.reject('could not approve contract on token'));

              case 22:
                path = [];
                path.push(token1.address);
                path.push(token2.address);
                deadline = Date.now() + 5 * 60; // 5 minutes

                _context3.next = 28;
                return uniswaprouter02interface.swapTokensForExactTokens(token2amount, token1amountmax, path, deadline, ethtx);

              case 28:
                result = _context3.sent;
                return _context3.abrupt("return", result);

              case 32:
                _context3.prev = 32;
                _context3.t0 = _context3["catch"](2);
                console.log('exception ' + _context3.t0);
                console.log(_context3.t0.stack);

              case 36:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[2, 32]]);
      }));

      function buyTokensOnOutput(_x13, _x14, _x15, _x16, _x17, _x18, _x19) {
        return _buyTokensOnOutput.apply(this, arguments);
      }

      return buyTokensOnOutput;
    }() // v2

  }, {
    key: "getV2FactoryContratInterface",
    value: function getV2FactoryContratInterface(session, contractaddress, web3providerurl) {
      var global = this.global;
      var FactoryContractInterfaceClass = this.module.V2_FactoryContractInterface;
      return new FactoryContractInterfaceClass(session, contractaddress, web3providerurl);
    }
  }, {
    key: "getV2PairContratInterface",
    value: function getV2PairContratInterface(session, contractaddress, web3providerurl) {
      var global = this.global;
      var PairContractInterfaceClass = this.module.V2_PairContractInterface;
      return new PairContractInterfaceClass(session, contractaddress, web3providerurl);
    }
  }, {
    key: "getV2Router02ContratInterface",
    value: function getV2Router02ContratInterface(session, contractaddress, web3providerurl) {
      var global = this.global;
      var Router02InterfaceClass = this.module.V2_Router02ContractInterface;
      return new Router02InterfaceClass(session, contractaddress, web3providerurl);
    }
  }]);

  return UniswapAccess;
}();

if (typeof window !== 'undefined' && typeof window.GlobalClass !== 'undefined' && window.GlobalClass) {
  var _GlobalClass = window.GlobalClass;
} else if (typeof window !== 'undefined') {
  var _GlobalClass = window && window.simplestore && window.simplestore.Global ? window.simplestore.Global : null;
} else if (typeof global !== 'undefined') {
  // we are in node js
  var _GlobalClass = global && global.simplestore && global.simplestore.Global ? global.simplestore.Global : null;
}

_GlobalClass.registerModuleClass('uniswap', 'UniswapAccess', UniswapAccess);