"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Header = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

var _reactBootstrap = require("react-bootstrap");

var _reactRouterBootstrap = require("react-router-bootstrap");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var Header = /*#__PURE__*/function (_React$Component) {
  _inherits(Header, _React$Component);

  var _super = _createSuper(Header);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _super.call(this, props);
    _this.app = _this.props.app;
    _this.getMvcModuleObject = _this.app.getMvcModuleObject;
    _this.closing = false; // load dynamic menu links

    var MenuLinks = require('./menulinks/menulinks.js');

    _this.webapp_menulinks = MenuLinks["default"].getMenuLinks(_this.app);
    _this.state = {
      isLoggedIn: false,
      hasOpenWallet: false,
      isdevicewallet: false,
      hasReturnPath: false
    };
    return _this;
  } // post render commit phase


  _createClass(Header, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      console.log('Header.componentDidUpdate called');

      if (this.props.currentwalletuuid) {
        var rootsessionuuid = this.props.rootsessionuuid;
        var walletuuid = this.props.currentwalletuuid; // check if wallet it is not the device wallet

        if (walletuuid && this.state.isdevicewallet !== true) this.app.isDeviceWallet(walletuuid).then(function (isdevicewallet) {
          if (_this2.closing !== true && isdevicewallet === true) _this2.setState({
            isdevicewallet: isdevicewallet
          });
        })["catch"](function (err) {
          console.log('error in Header.componentDidUpdate: ' + err);
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      console.log('Header.componentDidMount called'); // check wallet is unlocked

      this.app.checkWalletUnlocked().then(function (unlocked) {
        return unlocked;
      })["catch"](function (err) {
        console.log('error in Header.componentDidMount: ' + err);
      }); // check has a return path

      this.app.hasReturnPath().then(function (canreturn) {
        if (canreturn) _this3.setState({
          hasReturnPath: true
        });
        return canreturn;
      })["catch"](function (err) {
        console.log('error in Header.componentDidMount: ' + err);
      });
    } // end of life

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.closing = true;
    } // render

  }, {
    key: "renderLock",
    value: function renderLock() {
      var _this$state = this.state,
          hasOpenWallet = _this$state.hasOpenWallet,
          isdevicewallet = _this$state.isdevicewallet;
      return /*#__PURE__*/_react["default"].createElement("span", null, hasOpenWallet === true ? /*#__PURE__*/_react["default"].createElement("span", {
        className: "Lock"
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        className: "LockIcon",
        icon: _freeSolidSvgIcons.faUnlock
      }), isdevicewallet === true ? /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        className: "DeviceIcon",
        icon: _freeSolidSvgIcons.faMobileAlt
      }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null), " ") : /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        className: "LockIcon",
        icon: _freeSolidSvgIcons.faLock
      }));
    }
  }, {
    key: "renderMenuLink",
    value: function renderMenuLink(item, index) {
      switch (item.type) {
        case 'link':
          return /*#__PURE__*/_react["default"].createElement(_reactRouterBootstrap.LinkContainer, {
            key: index,
            to: item.route
          }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.NavDropdown.Item, null, item.label));

        case 'click':
          return /*#__PURE__*/_react["default"].createElement(_reactRouterBootstrap.LinkContainer, {
            key: index,
            to: item.route
          }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.NavDropdown.Item, {
            onClick: item.onclick
          }, item.label));

        case 'separator':
          return /*#__PURE__*/_react["default"].createElement(_reactBootstrap.NavDropdown.Divider, {
            key: index
          });

        default:
          return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
      }
    }
  }, {
    key: "_getMenuLinks",
    value: function _getMenuLinks() {
      var _this4 = this;

      var _this$state2 = this.state,
          hasOpenWallet = _this$state2.hasOpenWallet,
          hasReturnPath = _this$state2.hasReturnPath;
      var menulinks = [];

      if (hasOpenWallet !== true) {
        menulinks.push({
          type: 'click',
          route: 'login',
          onclick: function onclick() {
            _this4.app.gotoRoute('login');
          },
          label: 'Login'
        });
      }

      menulinks.push({
        type: 'link',
        route: 'logout',
        label: 'Logout'
      });

      if (hasReturnPath) {
        menulinks.push({
          type: 'click',
          route: 'exit',
          onclick: function onclick() {
            _this4.app.returnToCaller();
          },
          label: 'Exit'
        });
      } // add extra links


      if (this.webapp_menulinks && this.webapp_menulinks.length) {
        menulinks = menulinks.concat(this.webapp_menulinks);
      }

      menulinks.push({
        type: 'separator'
      });
      menulinks.push({
        type: 'link',
        route: 'currencycards',
        label: 'Currency Cards'
      });
      menulinks.push({
        type: 'separator'
      });
      menulinks.push({
        type: 'link',
        route: 'deeplink',
        label: 'Enter url'
      });
      menulinks.push({
        type: 'separator'
      });
      menulinks.push({
        type: 'link',
        route: 'datawipe',
        label: 'Wipe all data'
      });
      menulinks.push({
        type: 'separator'
      });
      menulinks.push({
        type: 'link',
        route: 'about',
        label: 'About'
      });
      return menulinks;
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var menulinks = this._getMenuLinks();

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "Header"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Navbar, {
        bg: "light",
        variant: "light",
        expand: "lg"
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Navbar.Brand, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: "/"
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faHome
      }))), this.renderLock(), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.NavDropdown, {
        title: /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: _freeSolidSvgIcons.faBars
        }),
        id: "basic-nav-dropdown"
      }, menulinks.map(function (item, index) {
        return _this5.renderMenuLink(item, index);
      }))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      // fill state
      return {
        isLoggedIn: nextProps.isLoggedIn,
        hasOpenWallet: nextProps.currentwalletuuid && nextProps.iswalletlocked === false ? true : false
      };
    }
  }]);

  return Header;
}(_react["default"].Component); // propTypes validation


exports.Header = Header;
Header.propTypes = {
  app: _propTypes["default"].object.isRequired,
  rootsessionuuid: _propTypes["default"].string,
  isLoggedIn: _propTypes["default"].bool,
  lastLoggedInCheck: _propTypes["default"].number,
  loggedInCheckPending: _propTypes["default"].bool,
  currentwalletuuid: _propTypes["default"].string,
  unlockpending: _propTypes["default"].bool,
  iswalletlocked: _propTypes["default"].bool
}; //redux

var mapStateToProps = function mapStateToProps(state) {
  return {
    rootsessionuuid: state.session.sessionuuid,
    isLoggedIn: state.login.success,
    loggedInCheckPending: state.login.checkpending,
    lastLoggedInCheck: state.login.checkedon,
    currentwallet: state.wallets.walletname,
    currentwalletuuid: state.wallets.walletuuid,
    unlockpending: state.wallets.openpending,
    iswalletlocked: state.wallets.islocked
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Header);

exports["default"] = _default;
//# sourceMappingURL=header.js.map