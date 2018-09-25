/**
 *  get methods for mock api endpoints
 */
import request from 'utils/request';

import {
  call
  , put, select, takeLatest
} from 'redux-saga/effects';
import { LOAD_EVENTS } from './constants';
import { eventsLoaded, eventsLoadingError } from './actions';


export function* getEvents() {
  const requestURL = 'http://localhost:3001/events';

  try {
    const events = yield call(request, requestURL);
    console.log(events)
    yield call(eventsLoaded(events));
  } catch (err) {
    yield call(eventsLoadingError(err));
  }
}

/**
 * saga watchers
 */
export default function* upcomingEventsData() {
  yield takeLatest(LOAD_EVENTS, getEvents);
}
