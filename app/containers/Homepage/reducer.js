/*
 * HomeReducer
 */
import { fromJS } from 'immutable';

import { LOAD_EVENTS, LOAD_EVENTS_SUCCESS, LOAD_EVENTS_ERROR } from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  events: {
  },
  subscription: {
  }

});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    // UPCOMING EVENTS
    case LOAD_EVENTS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('events', false);
    case LOAD_EVENTS_SUCCESS:
      return state
        .set('events', action.events)
        .set('loading', false);
    case LOAD_EVENTS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);


    default:
      return state;
  }
}

export default homeReducer;
