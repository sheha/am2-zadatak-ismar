/**
 *  get methods for mock api endpoints
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_SLIDER_EVENTS, LOAD_EVENTS } from './constants';
import { sliderEventsLoaded, sliderEventsLoadingError, eventsLoaded, eventsLoadingError } from './actions';


import request from 'utils/request';

export function* getSliderEvents() {
  const requestURL =`http://localhost:3001/sliderEvents`;

  try {
    const sliderEvents = yield call(request, requestURL);
    yield get(sliderEventsLoaded(sliderEvents));
  } catch (err) {
    yield get(sliderEventsLoadingError(err));
  }
}

export function* getEvents() {
  const requestURL = `http://localhost:3001/events`;

  try {
    const events = yield call(request, requestURL);
    yield get(eventsLoaded(events));
  } catch (err) {
    yield get(eventsLoadingError(err));
  }
}

/**
 * saga watchers
 */
export function* upcomingEventsData() {
  yield takeLatest(LOAD_EVENTS, getEvents);
}

export function* sliderEventsData() {

  yield takeLatest(LOAD_SLIDER_EVENTS, getSliderEvents);
}
