'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _alert = require('./alert');

var _alert2 = _interopRequireDefault(_alert);

var Alerts = (function (_Component) {
  _inherits(Alerts, _Component);

  function Alerts() {
    _classCallCheck(this, Alerts);

    _Component.apply(this, arguments);
  }

  Alerts.prototype.render = function render() {
    var alerts = this.props.alerts;

    if (alerts.length > 0) {
      return _react2['default'].createElement(
        'div',
        { className: 'alerts__wrapper' },
        alerts.map(function (alert, i) {
          return _react2['default'].createElement(_alert2['default'], { key: i, i: i, alert: alert });
        })
      );
    }
    return null;
  };

  return Alerts;
})(_react.Component);

exports['default'] = Alerts;

Alerts.propTypes = {
  alerts: _propTypes2['default'].array
};

Alerts.defaultProps = {
  alerts: []
};
module.exports = exports['default'];