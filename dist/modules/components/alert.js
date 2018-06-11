'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  from {\n    width: 0\n  },\n  to {\n    width: 100%\n  }\n'], ['\n  from {\n    width: 0\n  },\n  to {\n    width: 100%\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  width: 100%;\n  background: ', ';\n  color: #fff;\n  padding: 5px 10px;\n  font-size: 12px;\n  text-align: left;\n  position: relative;\n  &.error {\n    background: ', ';\n  }\n  &.warning {\n    background: ', ';\n  }\n  &.info {\n    background: ', ';\n  }\n  &:after {\n    display: block;\n    content: "";\n    width: 100%;\n    left: 0;\n    top: 0;\n    position: absolute;\n    height: ', ';\n    background: rgba(255,255,255,0.3);\n    webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n    webkit-animation: ', ' ', 's linear;\n    animation: ', ' ', 's linear infinite;      \n  }\n'], ['\n  width: 100%;\n  background: ', ';\n  color: #fff;\n  padding: 5px 10px;\n  font-size: 12px;\n  text-align: left;\n  position: relative;\n  &.error {\n    background: ', ';\n  }\n  &.warning {\n    background: ', ';\n  }\n  &.info {\n    background: ', ';\n  }\n  &:after {\n    display: block;\n    content: "";\n    width: 100%;\n    left: 0;\n    top: 0;\n    position: absolute;\n    height: ', ';\n    background: rgba(255,255,255,0.3);\n    webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n    webkit-animation: ', ' ', 's linear;\n    animation: ', ' ', 's linear infinite;      \n  }\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  position: absolute;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 0;\n  width: 30px;\n  height: 100%;\n  opacity: 0.6;\n  cursor: pointer;\n  transition: opacity 0.3s linear;\n  &:hover {\n    opacity: 1;\n  }\n'], ['\n  position: absolute;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 0;\n  width: 30px;\n  height: 100%;\n  opacity: 0.6;\n  cursor: pointer;\n  transition: opacity 0.3s linear;\n  &:hover {\n    opacity: 1;\n  }\n']);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _actions = require('../actions');

var actionCreators = _interopRequireWildcard(_actions);

var loadSwipe = _styledComponents.keyframes(_templateObject);

var AlertWrapper = _styledComponents2['default'].div(_templateObject2, function (props) {
  return props.colours.success;
}, function (props) {
  return props.colours.error;
}, function (props) {
  return props.colours.warning;
}, function (props) {
  return props.colours.info;
}, function (props) {
  return props.dismissible ? '2px' : '0px';
}, loadSwipe, function (props) {
  return props.time ? props.time : 5;
}, loadSwipe, function (props) {
  return props.time ? props.time : 5;
});

var Close = _styledComponents2['default'].a(_templateObject3);

var Alert = (function (_Component) {
  _inherits(Alert, _Component);

  function Alert() {
    _classCallCheck(this, Alert);

    _Component.apply(this, arguments);
  }

  Alert.prototype.componentDidMount = function componentDidMount() {
    var alert = this.props.alert;

    if (this.isDismissible() && this.hasAutoTimeout()) {
      this.props.actions.setAlertClear(alert.id, alert.alert.time);
    }
  };

  Alert.prototype.isDismissible = function isDismissible() {
    var alert = this.props.alert;

    return typeof alert.alert.dismissible === 'undefined' || alert.alert.dismissible;
  };

  Alert.prototype.hasAutoTimeout = function hasAutoTimeout() {
    var alert = this.props.alert;

    return typeof alert.alert.autoTimeout === 'undefined' || alert.alert.autoTimeout;
  };

  Alert.prototype.renderClose = function renderClose() {
    var _this = this;

    var alert = this.props.alert;

    if (this.isDismissible()) {
      return _react2['default'].createElement(
        Close,
        { className: 'alert__close', onClick: function () {
            return _this.props.actions.clearAlert(_this.props.alert.id);
          }, role: 'button', tabIndex: '-1' },
        this.props.closeIcon
      );
    }
    return null;
  };

  Alert.prototype.render = function render() {
    var _props = this.props;
    var alert = _props.alert;
    var colours = _props.colours;

    if (alert) {
      return _react2['default'].createElement(
        AlertWrapper,
        { className: 'alert ' + alert.alert.type, colours: colours, time: alert.alert.time, dismissible: this.isDismissible() && this.hasAutoTimeout() },
        _react2['default'].createElement(
          'div',
          { className: 'container' },
          _react2['default'].createElement(
            'div',
            { className: 'cell' },
            alert.alert.message,
            this.renderClose()
          )
        )
      );
    }
    return null;
  };

  return Alert;
})(_react.Component);

Alert.defaultProps = {
  colours: {
    error: '#D0021B',
    warning: '#F6A623',
    info: '#8F8F8F',
    success: '#00A44C'
  }
};

Alert.propTypes = {
  alert: _propTypes2['default'].any,
  setAlertClear: _propTypes2['default'].func,
  clearAlert: _propTypes2['default'].func,
  colours: _propTypes2['default'].object,
  closeIcon: _propTypes2['default'].any
};

function mapDispatchToProps(dispatch) {
  return { actions: _redux.bindActionCreators(actionCreators, dispatch) };
}

exports['default'] = _reactRedux.connect(null, mapDispatchToProps)(Alert);
module.exports = exports['default'];