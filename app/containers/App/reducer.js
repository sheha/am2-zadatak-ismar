

import { fromJS } from 'immutable';

import {

  SUBSCRIBE_NEWSLETTER,
  SUBSCRIBE_NEWSLETTER_SUCCESS,
  SUBSCRIBE_NEWSLETTER_ERROR
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  subscription: {
    email:false,
  }
});

function appReducer(state = initialState, action) {
  switch (action.type) {

    //SUBSCRIPTION
    case SUBSCRIBE_NEWSLETTER:
    return state
      .set('loading', true)
      .set('error', false)
      .setIn(['subscription', 'email'], false);
  case SUBSCRIBE_NEWSLETTER_SUCCESS:
    return state
      .setIn(['subscription', 'email'],action.subscription)
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
