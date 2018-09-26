/*
 * ONLY REGISTERED ACTIONS GET TO AFFECT STATE
 */

import {
  LOAD_EVENTS,
  LOAD_EVENTS_SUCCESS,
  LOAD_EVENTS_ERROR
} from "../App/constants";

export const loadEvents = () => ({
  type: LOAD_EVENTS
});

export const eventsLoaded = (events) => ({
  type: LOAD_EVENTS_SUCCESS,
  payload: { events }
});

export const eventsLoadingError = (error) => ({
  type: LOAD_EVENTS_ERROR,
  payload: { error }
});
