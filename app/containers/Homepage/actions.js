/*
 * ONLY REGISTERED ACTIONS GET TO AFFECT STATE
 */

import {
  LOAD_SLIDER_EVENTS,
  LOAD_SLIDER_EVENTS_SUCCESS,
  LOAD_SLIDER_EVENTS_ERROR,
  LOAD_EVENTS,
  LOAD_EVENTS_SUCCESS,
  LOAD_EVENTS_ERROR,
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
