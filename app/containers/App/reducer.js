/*
 * HomeReducer
 */
import { fromJS } from "immutable";

import {
  LOAD_EVENTS,
  LOAD_EVENTS_SUCCESS,
  LOAD_EVENTS_ERROR
} from "./constants";

// The initial state of the App
const initialState = fromJS({
  loading: false,
  subscription: false,
  error: false,
  events: []
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    // UPCOMING EVENTS
    case LOAD_EVENTS:
      return {
        ...state,
        loading: true
      };
    case LOAD_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        events: action.payload,
        error: false
      };
    case LOAD_EVENTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return {
        ...state
      };
  }
}

export default appReducer;
