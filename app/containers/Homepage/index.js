import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import {
  makeSelectLoading,
  makeSelectError
} from '../App/selectors';
import { loadSliderEvents, loadEvents } from './actions';
import { makeSelectSliderEvents, makeSelectEvent } from './selectors';

import reducer from './reducer';
import saga from './saga';
import HomePage from './HomePage';

const mapDispatchToProps = (dispatch) => ({
  onHomePageLoad: () => {
    dispatch(loadSliderEvents());
  },
  onLoadMoreEventsClick: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadEvents());
  }
});

const mapStateToProps = createStructuredSelector({
  sliderEvents: makeSelectSliderEvents(),
  events: makeSelectEvent(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(HomePage);
export { mapDispatchToProps };
