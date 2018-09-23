/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');


const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectSliderEvents = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['sliderEvents', 'events'])
);

const makeSelectEvents = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['events', 'upcoming'])
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectEvents,
  makeSelectSliderEvents,
  makeSelectLocation,
};
