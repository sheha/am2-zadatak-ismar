/*
 * App Actions
 *
 * Since this boilerplate uses a uni-directional data flow,
 * specifically redux,
 * these actions are one and only way to actually influence and change state.
 *
 *
 * Registering a new action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_EVENTS,
  LOAD_EVENTS_SUCCESS,
  LOAD_EVENTS_ERROR,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_EVENTS
 */
export function loadEvents() {
  return {
    type: LOAD_EVENTS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_EVENTS_SUCCESS passing the repos
 */
export function eventsLoaded(repos, username) {
  return {
    type: LOAD_EVENTS_SUCCESS,
    repos,
    username,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_EVENTS_ERROR passing the error
 */
export function eventsLoadingError(error) {
  return {
    type: LOAD_EVENTS_ERROR,
    error,
  };
}
