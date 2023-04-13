"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _RingLoader = _interopRequireDefault(require("react-spinners/RingLoader"));

require("./splash.css");

var _logo = _interopRequireDefault(require("./assets/logo512.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Splash(_ref) {
  var exec_env = _ref.exec_env,
      version = _ref.version,
      msg = _ref.msg;
  var the_exec_env = exec_env;
  var the_version = version;
  var the_msg = msg ? msg : 'loading....';
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "SplashScreen"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "SplashContainer"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _logo["default"],
    className: "SplashLogo",
    alt: "Primus Money"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "SplashMessage"
  }, the_msg), /*#__PURE__*/_react["default"].createElement("div", {
    className: "SplashLoadingBlock"
  }, /*#__PURE__*/_react["default"].createElement(_RingLoader["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "SplashVersionInfo"
  }, the_version)));
}

var _default = Splash;
exports["default"] = _default;