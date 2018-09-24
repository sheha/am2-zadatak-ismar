import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavbarBrand,
} from 'reactstrap';
import MediaQuery from 'react-responsive';

import './style.scss';

import Logo from './images/logo.svg';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <MediaQuery query={"(max-width: 767px)"}>
        <div className="header">

            <nav className="mobile">
              <ul className="mobile__nav">
                <li className="active">
                  <Link to="/">HOME</Link>

                </li>
                <li>EVENTS</li>
                <li>MEDIA</li>
                <li>CONTRACT</li>
                <li style={{ whiteSpace: "nowrap" }}>ABOUT US</li>
              </ul>
            </nav>
          </div>

        </MediaQuery>
        <MediaQuery query={"(min-width: 768px) and (max-width: 1024px)"}>
          <div className="header">


            <nav className="mobile">
              <ul className="mobile__nav">
                <li className="active">
                  <Link to="/">HOME</Link>

                </li>
                <li>EVENTS</li>
                <li>MEDIA</li>
                <li>CONTRACT</li>
                <li style={{ whiteSpace: "nowrap" }}>ABOUT US</li>
              </ul>
            </nav>
          </div>
        </MediaQuery>
        <MediaQuery query={"(min-width: 1025px)"}>
          <div className="header">
            <NavbarBrand href="/">
              <img className={`header__logo`} alt="logo" src={`${Logo}`} />
            </NavbarBrand>

            <div className="header__spacing"></div>
            <nav>
              <ul>
                <li className="active">
                  <Link to="/">HOME</Link>

                </li>
                <li>EVENTS</li>
                <li>MEDIA</li>
                <li>CONTRACT</li>
                <li style={{ whiteSpace: "nowrap" }}>ABOUT US</li>
              </ul>
            </nav>
          </div>
        </MediaQuery>



      </div>
      // <MediaQuery query={"(max-width: 767px)"}></MediaQuery>
      // <MediaQuery  query={"(min-width: 768px) and (max-width: 1024px)"}></MediaQuery>





    );
  }

}

export default Header;
