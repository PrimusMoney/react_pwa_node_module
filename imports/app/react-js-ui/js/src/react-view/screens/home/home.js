"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.HomeScreen = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _header = _interopRequireDefault(require("../../navigation/header/header.js"));

var _loginForm = _interopRequireDefault(require("../../components/common/login/login-form.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var HomeScreen = /*#__PURE__*/function (_React$Component) {
  _inherits(HomeScreen, _React$Component);

  var _super = _createSuper(HomeScreen);

  function HomeScreen(props) {
    var _this;

    _classCallCheck(this, HomeScreen);

    _this = _super.call(this, props);
    _this.app = _this.props.app;
    _this.getMvcModuleObject = _this.app.getMvcModuleObject; // load dynamic home links

    var HomeLinks = require('./homelinks/homelinks.js');

    _this.homelinks = HomeLinks["default"].getHomeLinks(_this.app);
    _this.state = {};
    return _this;
  }

  _createClass(HomeScreen, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('HomeScreen.componentDidMount called'); // check if should login

      var iswalletlocked = this.state.iswalletlocked;
      console.log('HomeScreen.componentDidMount iswalletlocked = ' + iswalletlocked);

      if (iswalletlocked === false) {
        // check wallet is really unlocked
        this.app.checkWalletUnlocked()["catch"](function (err) {});
      }
    }
  }, {
    key: "renderHomeLink",
    value: function renderHomeLink(item, index) {
      switch (item.type) {
        case 'link':
          return /*#__PURE__*/_react["default"].createElement("div", {
            key: index,
            className: "HomeLink"
          }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
            to: {
              pathname: item.pathname
            }
          }, item.label));

        case 'separator':
          return /*#__PURE__*/_react["default"].createElement("hr", {
            key: index
          });

        default:
          return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
      }
    }
  }, {
    key: "renderHomeLinks",
    value: function renderHomeLinks() {
      var _this2 = this;

      var walletname = this.state.walletname;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "Container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "Banner"
      }, /*#__PURE__*/_react["default"].createElement("div", null, "You are using the account", /*#__PURE__*/_react["default"].createElement("br", null), walletname ? walletname : 'Wallet')), /*#__PURE__*/_react["default"].createElement("div", {
        className: "Block"
      }, this.homelinks.map(function (item, index) {
        return _this2.renderHomeLink(item, index);
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var iswalletlocked = this.state.iswalletlocked;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "HomeScreen"
      }, /*#__PURE__*/_react["default"].createElement(_header["default"], {
        app: this.app
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "HomeBanner"
      }, "Home"), iswalletlocked !== false ? /*#__PURE__*/_react["default"].createElement(_loginForm["default"], {
        app: this.app,
        parent: this
      }) : this.renderHomeLinks());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      // fill state
      return {
        rootsessionuuid: nextProps.rootsessionuuid,
        walletname: nextProps.currentwallet,
        walletuuid: nextProps.currentwalletuuid,
        unlockpending: nextProps.unlockpending,
        iswalletlocked: nextProps.iswalletlocked
      };
    }
  }]);

  return HomeScreen;
}(_react["default"].Component); // propTypes validation


exports.HomeScreen = HomeScreen;
HomeScreen.propTypes = {
  app: _propTypes["default"].object.isRequired,
  rootsessionuuid: _propTypes["default"].string,
  currentwallet: _propTypes["default"].string,
  currentwalletuuid: _propTypes["default"].string,
  unlockpending: _propTypes["default"].bool,
  iswalletlocked: _propTypes["default"].bool
}; //redux

var mapStateToProps = function mapStateToProps(state) {
  return {
    rootsessionuuid: state.session.sessionuuid,
    currentwallet: state.wallets.walletname,
    currentwalletuuid: state.wallets.walletuuid,
    unlockpending: state.wallets.openpending,
    iswalletlocked: state.wallets.islocked
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(HomeScreen);

exports["default"] = _default;
//# sourceMappingURL=home.js.map