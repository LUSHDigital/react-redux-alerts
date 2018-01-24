'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  width: 100%;\n  position: fixed;\n  top: ', 'px;\n  left: 0;\n  z-index: 9999;\n'], ['\n  width: 100%;\n  position: fixed;\n  top: ', 'px;\n  left: 0;\n  z-index: 9999;\n']);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _alert = require('./alert');

var _alert2 = _interopRequireDefault(_alert);

var AlertsContainer = _styledComponents2['default'].div(_templateObject, function (props) {
  return props.topOffset;
});

var Alerts = (function (_Component) {
  _inherits(Alerts, _Component);

  function Alerts() {
    _classCallCheck(this, Alerts);

    _Component.apply(this, arguments);
  }

  Alerts.prototype.render = function render() {
    var _this = this;

    var _props = this.props;
    var alerts = _props.alerts;
    var topOffset = _props.topOffset;

    if (alerts.length > 0) {
      return _react2['default'].createElement(
        AlertsContainer,
        { className: 'alerts__wrapper', topOffset: topOffset },
        alerts.map(function (alert, i) {
          return _react2['default'].createElement(_alert2['default'], { key: i, i: i,
            alert: alert,
            closeIcon: _this.props.closeIcon,
            colours: _this.props.colours });
        })
      );
    }
    return null;
  };

  return Alerts;
})(_react.Component);

exports['default'] = Alerts;

Alerts.propTypes = {
  alerts: _propTypes2['default'].array,
  closeIcon: _propTypes2['default'].any,
  colours: _propTypes2['default'].object,
  topOffset: _propTypes2['default'].number
};

Alerts.defaultProps = {
  alerts: [],
  closeIcon: _react2['default'].createElement(
    'span',
    null,
    'X'
  ),
  colours: {
    error: '#D0021B',
    warning: '#F6A623',
    info: '#8F8F8F',
    success: '#00A44C'
  },
  topOffset: 0
};
module.exports = exports['default'];