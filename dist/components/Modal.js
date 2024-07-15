"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Modal.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Modal = _ref => {
  let {
    show,
    onClose,
    children
  } = _ref;
  if (!show) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "modal-close",
    onClick: onClose
  }, "\xD7"), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, children)));
};
Modal.propTypes = {
  show: _propTypes.default.bool.isRequired,
  onClose: _propTypes.default.func.isRequired,
  children: _propTypes.default.node.isRequired
};
var _default = exports.default = Modal;