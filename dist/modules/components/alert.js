'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _actions = require('../actions');

var actionCreators = _interopRequireWildcard(_actions);

var styles = {
  alert: {
    width: '100%',
    background: function background(props) {
      return props.colours.success;
    },
    color: '#fff',
    padding: '5px 10px',
    fontSize: '12px',
    textAlign: 'left',
    position: 'relative',
    '&.error': {
      background: function background(props) {
        return props.colours.error;
      }
    },
    '&.warning': {
      background: function background(props) {
        return props.colours.warning;
      }
    },
    '&.info': {
      background: function background(props) {
        return props.colours.info;
      }
    },
    '&:after': {
      display: 'block',
      content: '""',
      width: '0',
      left: '0',
      top: '0',
      position: 'absolute',
      height: '2px',
      background: 'rgba(255,255,255,0.3)',
      webkitAnimationFillMode: 'both',
      animationFillMode: 'both',
      webkitAnimation: 'loadSwipe 5s linear',
      animation: 'loadSwipe 5s linear'
    }
  },
  alert__close: {
    position: 'absolute',
    top: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    right: '0',
    width: '30px',
    height: '100%',
    opacity: '0.6',
    cursor: 'pointer',
    transition: 'opacity 0.3s linear',
    '&:hover': {
      opacity: '1.0'
    }
  },
  '@keyframes loadSwipe': {
    '0%': {
      width: '0'
    },
    '100%': {
      width: '100%'
    }
  }
};

var Alert = (function (_Component) {
  _inherits(Alert, _Component);

  function Alert() {
    _classCallCheck(this, Alert);

    _Component.apply(this, arguments);
  }

  Alert.prototype.componentDidMount = function componentDidMount() {
    this.props.actions.setAlertClear(this.props.alert.id);
  };

  Alert.prototype.render = function render() {
    var _this = this;

    var _props = this.props;
    var alert = _props.alert;
    var classes = _props.classes;

    if (alert) {
      return _react2['default'].createElement(
        'div',
        { className: 'alert ' + classes.alert + ' ' + alert.error.type },
        _react2['default'].createElement(
          'div',
          { className: 'cell' },
          alert.error.message.en,
          _react2['default'].createElement(
            'a',
            { className: 'alert__close ' + classes.alert__close, onClick: function () {
                return _this.props.actions.clearAlert(_this.props.alert.id);
              }, role: 'button', tabIndex: '-1' },
            this.props.closeIcon
          )
        )
      );
    }
    return null;
  };

  return Alert;
})(_react.Component);

Alert.propTypes = {
  alert: _propTypes2['default'].any,
  setAlertClear: _propTypes2['default'].func,
  clearAlert: _propTypes2['default'].func,
  colours: _propTypes2['default'].object,
  closeIcon: _propTypes2['default'].any
};

Alert.defaultProps = {
  alert: ''
};

function mapDispatchToProps(dispatch) {
  return { actions: _redux.bindActionCreators(actionCreators, dispatch) };
}

exports['default'] = _reactRedux.connect(null, mapDispatchToProps)(_reactJss2['default'](styles)(Alert));
module.exports = exports['default'];