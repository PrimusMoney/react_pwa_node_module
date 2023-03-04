"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _RingLoader = _interopRequireDefault(require("react-spinners/RingLoader"));

require("./hall-screen.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function HallScreen(_ref) {
  var exec_env = _ref.exec_env,
      version = _ref.version,
      msg = _ref.msg;
  var the_exec_env = exec_env;
  var the_version = version;
  var the_msg = msg ? msg : 'loading....';
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "HallScreen"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "HallContainer"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "HallMessage"
  }, the_msg), /*#__PURE__*/_react["default"].createElement("div", {
    className: "HallLoadingBlock"
  }, /*#__PURE__*/_react["default"].createElement(_RingLoader["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "HallVersionInfo"
  }, the_version)));
}

var _default = HallScreen;
exports["default"] = _default;