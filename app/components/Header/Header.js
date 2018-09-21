import React from 'react';
import { Link } from 'react-router-dom';
//import Banner from './images/banner.jpg';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <a href="">
          {/* <img src={} alt="react-redux-boilerplate" /> */}
        </a>
        <div className="nav-bar">
          <Link className="router-link" to="/">
            Home
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
