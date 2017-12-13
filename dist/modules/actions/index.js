'use strict';

exports.__esModule = true;
exports.clearSystemAlert = clearSystemAlert;
exports.willClearSystemAlert = willClearSystemAlert;
exports.clearAllSystemAlerts = clearAllSystemAlerts;
exports.setAlertClear = setAlertClear;
exports.clearAlert = clearAlert;
exports.clearAlerts = clearAlerts;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _types = require('./types');

function clearSystemAlert(alert) {
  return {
    type: _types.CLEAR_SYSTEM_ALERT,
    alert: alert
  };
}

function willClearSystemAlert(alert) {
  return {
    type: _types.WILL_CLEAR_SYSTEM_ALERT,
    alert: alert
  };
}

function clearAllSystemAlerts() {
  return {
    type: _types.CLEAR_ALL_SYSTEM_ALERTS
  };
}

function setAlertClear(alert) {
  var time = arguments.length <= 1 || arguments[1] === undefined ? 5 : arguments[1];

  var timeout = !isNaN(parseInt(time, 10)) ? parseInt(time, 10) : 5;
  var dismissTime = timeout * 1000;
  return function (dispatch) {
    dispatch(willClearSystemAlert(alert));
    setTimeout(function () {
      dispatch(clearSystemAlert(alert));
    }, dismissTime);
  };
}

function clearAlert(alert) {
  return function (dispatch) {
    dispatch(clearSystemAlert(alert));
  };
}

function clearAlerts() {
  return function (dispatch) {
    dispatch(clearAllSystemAlerts());
  };
}