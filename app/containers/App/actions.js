/*
 * REGISTERED REDUX STATE CHANGING ACTIONS
 */

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

/**
 *  SLIDER EVENTS
 */

export function loadSliderEvents() {
  return {
    type: LOAD_SLIDER_EVENTS,
  };
}


export function sliderEventsLoaded(sliderEvents) {
  return {
    type: LOAD_SLIDER_EVENTS_SUCCESS,
    sliderEvents,
  };
}


export function sliderEventsLoadingError(error) {
  return {
    type: LOAD_SLIDER_EVENTS_ERROR,
    error,
  };
}


/**
 *   UPCOMING EVENTS
 */


export function loadEvents() {
  return {
    type: LOAD_EVENTS,
  };
}


export function eventsLoaded(events) {
  return {
    type: LOAD_EVENTS_SUCCESS,
    events,
  };
}


export function eventsLoadingError(error) {
  return {
    type: LOAD_EVENTS_ERROR,
    error,
  };
}

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
