import React from 'react';

import {
  CLEAR_SYSTEM_ALERT,
  WILL_CLEAR_SYSTEM_ALERT,
  CLEAR_ALL_SYSTEM_ALERTS
} from './types';

export function clearSystemAlert(alert) {
  return {
    type: CLEAR_SYSTEM_ALERT,
    alert
  };
}

export function willClearSystemAlert(alert) {
  return {
    type: WILL_CLEAR_SYSTEM_ALERT,
    alert
  };
}

export function clearAllSystemAlerts() {
  return {
    type: CLEAR_ALL_SYSTEM_ALERTS
  };
}

export function setAlertClear(alert, time = 5) {
  const timeout = !isNaN(parseInt(time, 10)) ? parseInt(time, 10) : 5;
  const dismissTime = timeout * 1000;
  return function(dispatch) {
    dispatch(willClearSystemAlert(alert));
    setTimeout(() => {
      dispatch(clearSystemAlert(alert));
    }, dismissTime)
  }
}

export function clearAlert(alert) {
  return function(dispatch) {
    dispatch(clearSystemAlert(alert));
  }
}

export function clearAlerts() {
  return function(dispatch) {
    dispatch(clearAllSystemAlerts());
  }
}