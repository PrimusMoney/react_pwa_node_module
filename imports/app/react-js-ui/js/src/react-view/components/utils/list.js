"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var List = function List(_ref) {
  var items = _ref.items,
      onClickItem = _ref.onClickItem,
      render = _ref.render;
  if (!items) return /*#__PURE__*/_react["default"].createElement("div", null);
  return /*#__PURE__*/_react["default"].createElement(_reactBootstrap.ListGroup, null, items ? items.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_reactBootstrap.ListGroup.Item, {
      key: item.uuid,
      value: item.uuid,
      onClick: function onClick() {
        return onClickItem(item);
      }
    }, render ? render(item) : item.label ? item.label : 'unknown');
  }) : /*#__PURE__*/_react["default"].createElement(_reactBootstrap.ListGroup.Item, null, "loading..."));
}; // propTypes validation


List.propTypes = {
  items: _propTypes["default"].array.isRequired,
  onClickItem: _propTypes["default"].func,
  render: _propTypes["default"].func
};
var _default = List;
exports["default"] = _default;
//# sourceMappingURL=list.js.map