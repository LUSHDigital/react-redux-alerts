import { ErrorMessages } from '../constants/messages';
import { SuccessMessages } from '../constants/messages';
import { getIndexByKey } from '../constants/functions';

import {
  CLEAR_SYSTEM_ALERT,
  WILL_CLEAR_SYSTEM_ALERT,
  CLEAR_ALL_SYSTEM_ALERTS,
  ADD_ALERT,
  API_FAILURE
} from '../actions/types';

// Error reducer
function systemAlerts(state = [], action) {

  let id = Math.floor((Math.random() * 9999) + 1000);
  switch (action.type) {

    case 'LOG_IN_FAIL' :
      return [
        {
          id,
          error: ErrorMessages.login
        }
      ];

    case 'LOG_IN_SUCCESS' :
      return [
        {
          id,
          error: SuccessMessages.login
        }
      ];

    case API_FAILURE :
      return [
        ...state,
        {
          id,
          error: action.payload.errorMessage
        }
      ];

    case ADD_ALERT :
      return [
        ...state,
        {
          id,
          error: action.payload.message
        }
      ];

    case WILL_CLEAR_SYSTEM_ALERT :
      return state;

    case CLEAR_SYSTEM_ALERT :
      const index = getIndexByKey(state, action.alert);
      return [
        ...state.slice(0,index),
        ...state.slice(index + 1)
      ];

    case CLEAR_ALL_SYSTEM_ALERTS :
      return [];

    default:
      return state;
  }
}

export default systemAlerts;