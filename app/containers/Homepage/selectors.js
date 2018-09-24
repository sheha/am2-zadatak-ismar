/**
 * Homepage reduced state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectHome = (state) => state.get('home');


const makeSelectEvents = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('events')
);


export {
  selectHome,
  makeSelectEvents
};
