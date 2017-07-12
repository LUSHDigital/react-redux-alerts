'use strict';

exports.__esModule = true;

var _constantsMessages = require('../constants/messages');

var _constantsFunctions = require('../constants/functions');

var _actionsTypes = require('../actions/types');

// Error reducer
function systemAlerts(state, action) {
  if (state === undefined) state = [];

  var id = Math.floor(Math.random() * 9999 + 1000);
  switch (action.type) {

    case 'LOG_IN_FAIL':
      return [{
        id: id,
        error: _constantsMessages.ErrorMessages.login
      }];

    case 'LOG_IN_SUCCESS':
      return [{
        id: id,
        error: _constantsMessages.SuccessMessages.login
      }];

    case _actionsTypes.API_FAILURE:
    case _actionsTypes.ADD_ALERT:
      return [].concat(state, [{
        id: id,
        error: action.payload.message
      }]);

    case _actionsTypes.WILL_CLEAR_SYSTEM_ALERT:
      return state;

    case _actionsTypes.CLEAR_SYSTEM_ALERT:
      var index = _constantsFunctions.getIndexByKey(state, action.alert);
      return [].concat(state.slice(0, index), state.slice(index + 1));

    case _actionsTypes.CLEAR_ALL_SYSTEM_ALERTS:
      return [];

    default:
      return state;
  }
}

exports['default'] = systemAlerts;
module.exports = exports['default'];