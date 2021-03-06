/**
 *  get methods for mock api endpoints
 */
import request from 'utils/request';

import {
  call, all
  , put, select, takeLatest, takeEvery
} from 'redux-saga/effects';
import { LOAD_EVENTS } from 'containers/App/constants';
import { eventsLoaded, eventsLoadingError } from './actions';

const HOSTNAME = window.location.hostname;
console.log(HOSTNAME);
export function* getEvents() {
  const requestURL = 'http://'+window.location.hostname + ':3001/events';

  try {
    let data = yield call(request, requestURL);

    yield put(eventsLoaded(data));
  } catch (err) {
    yield put(eventsLoadingError(err));
  }
}

export  function* actionWatcher() {
  yield takeLatest(LOAD_EVENTS, getEvents);
}
export default function* upcomingEventsData() {
  yield all([actionWatcher()]);
}
