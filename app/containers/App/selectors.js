/**
 * The global state selectors
 */

import { createSelector } from "reselect";

const selectGlobal = (state) => state.get("global");

const selectRoute = (state) => state.get("route");

const makeSelectError = () =>
  createSelector(selectGlobal, (globalState) => globalState.error);
const makeSelectLoading = () =>
  createSelector(selectGlobal, (globalState) => globalState.loading);

const makeSelectLocation = () =>
  createSelector(selectRoute, (routeState) => routeState.get("location"));

const makeSelectEvents = () =>
  createSelector(selectGlobal, (globalState) => globalState.events);

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectLocation,
  makeSelectEvents
};
