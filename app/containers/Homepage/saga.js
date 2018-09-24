/**
 *  get methods for mock api endpoints
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_EVENTS } from './constants';
import { eventsLoaded, eventsLoadingError } from './actions';


import request from 'utils/request';



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
export default  function* upcomingEventsData() {
  yield takeLatest(LOAD_EVENTS, getEvents);
}
