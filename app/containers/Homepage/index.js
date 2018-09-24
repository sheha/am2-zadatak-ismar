import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import {
  makeSelectLoading,
  makeSelectError
} from '../App/selectors';
import { loadEvents } from './actions';
import { makeSelectEvents } from './selectors';

import reducer from './reducer';
import saga  from './saga';
import HomePage from './HomePage';

const mapDispatchToProps = (dispatch) => ({

  onLoadMoreEventsClick: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadEvents());
  }
});

const mapStateToProps = createStructuredSelector({
  events: makeSelectEvents(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(HomePage);
export { mapDispatchToProps };
