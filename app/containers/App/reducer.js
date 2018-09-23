/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_EVENTS,
  LOAD_EVENTS_SUCCESS,
  LOAD_EVENTS_ERROR,
  LOAD_SLIDER_EVENTS,
  LOAD_SLIDER_EVENTS_SUCCESS,
  LOAD_SLIDER_EVENTS_ERROR,
  SUBSCRIBE_NEWSLETTER,
  SUBSCRIBE_NEWSLETTER_SUCCESS,
  SUBSCRIBE_NEWSLETTER_ERROR
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  sliderEvents: {
    events:false,
  },
  sliderEventsLoaded:false,
  events: {
    upcoming:false,
  },
  eventsLoaded:false,
  subscription: {
    subscribed:false,
  },
  subscriptionDone:false,
});

function appReducer(state = initialState, action) {
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
        .set('sliderEventsLoaded', true);
    case LOAD_SLIDER_EVENTS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);

    //EVENTS
    case LOAD_EVENTS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['events', 'upcoming'], false);
    case LOAD_EVENTS_SUCCESS:
      return state
        .setIn(['events', 'upcoming'], action.events)
        .set('loading', false)
        .set('eventsLoaded', true);
    case LOAD_EVENTS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);

    //SUBSCRIPTION
    case SUBSCRIBE_NEWSLETTER:
    return state
      .set('loading', true)
      .set('error', false)
      .setIn(['subscription', 'subscribed'], false);
  case SUBSCRIBE_NEWSLETTER_SUCCESS:
    return state
      .setIn(['subscription', 'subscribed'],action.subscription)
      .set('loading', false)
      .set('subscriptionDone', true);
  case SUBSCRIBE_NEWSLETTER_ERROR:
    return state
      .set('error', action.error)
      .set('loading', false);


    default:
      return state;
  }
}

export default appReducer;
