/**
 * Homepage reduced state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');
const selectHome = (state) => state.get('home');

const makeSelectSliderEvents = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['sliderEvents', 'events'])
);

const makeSelectEvents = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['events', 'upcoming'])
);


export {
  selectHome,
  makeSelectSliderEvents,
  makeSelectEvents
};
