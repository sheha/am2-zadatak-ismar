/*
 * REGISTERED REDUX STATE CHANGING ACTIONS
 */

import {
  SUBSCRIBE_NEWSLETTER,
  SUBSCRIBE_NEWSLETTER_SUCCESS,
  SUBSCRIBE_NEWSLETTER_ERROR
} from './constants';






/**
 *  SUBSCRIPTION
 */


export function newsletterSubscribe() {
  return {
    type: SUBSCRIBE_NEWSLETTER,
  };
}


export function newsletterSubscribeSuccess(subscription) {
  return {
    type: SUBSCRIBE_NEWSLETTER_SUCCESS,
    subscription,
  };
}

export function newsletterSubscribeError(error) {
  return {
    type: SUBSCRIBE_NEWSLETTER_ERROR,
    error,
  };
}
