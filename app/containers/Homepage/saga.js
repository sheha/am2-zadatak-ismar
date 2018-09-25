/**
 *  get methods for mock api endpoints
 */
import request from 'utils/request';

import {
  call
  , put, select, takeLatest, takeEvery
} from 'redux-saga/effects';
import { LOAD_EVENTS } from './constants';
import { eventsLoaded, eventsLoadingError } from './actions';


export function* getEvents() {
  const requestURL = 'http://localhost:3001/events';

  try {
    let events = yield call(request, requestURL);
    //console.log(events)
    yield call(eventsLoaded(events));
  } catch (err) {
    // catches an [object Object] is not a function error from the saga watcher,
    // because it is expecting a Iterable instead of Object - it's a version issue,     //  should be resolved in next versions of redux-saga
    //
    yield call(eventsLoadingError(err));
  }
}

/**
 * saga watchers
 */
export default function* upcomingEventsData() {
  yield takeEvery(LOAD_EVENTS, getEvents);
}
