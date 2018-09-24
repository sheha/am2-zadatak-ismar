/*
 * HomeReducer
 */
import { fromJS } from 'immutable';

import { LOAD_EVENTS } from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  sliderEvents: {
  },
  events: {
    upcoming:false,
  },
  subscription: {
    email:false,
  }

});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    //SLIDER EVENTS
    case LOAD_SLIDER_EVENTS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['sliderEvents', 'events'], false);
    case LOAD_SLIDER_EVENTS_SUCCESS:
      return state
        .setIn(['sliderEvents', 'events'], action.sliderEvents)
        .set('loading', false)
    case LOAD_SLIDER_EVENTS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    // UPCOMING EVENTS
    case LOAD_EVENTS:
    return state
      .set('loading', true)
      .set('error', false)
      .setIn(['events', 'upcoming'], false);
  case LOAD_EVENTS_SUCCESS:
    return state
      .setIn(['events', 'upcoming'], action.events)
      .set('loading', false)
  case LOAD_EVENTS_ERROR:
    return state
      .set('error', action.error)
      .set('loading', false);


    default:
      return state;
  }
}

export default homeReducer;
