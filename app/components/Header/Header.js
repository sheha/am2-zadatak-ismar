import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import './style.scss';

import Logo from './images/logo.svg';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor (props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="header">
        {/* <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <img className={`header__logo`} alt="logo" src={`${Logo}`}/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" tabs>
              <NavItem>
                <NavLink href="/">HOME</NavLink>
              </NavItem>
              <NavItem>
                <NavLink >EVENTS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink >MEDIA</NavLink>
              </NavItem>
              <NavItem>
                <NavLink >CONTRACT</NavLink>
              </NavItem>
              </Nav>
          </Collapse>
        </Navbar> */}
          <NavbarBrand href="/">
            <img className={`header__logo`} alt="logo" src={`${Logo}`}/>
        </NavbarBrand>
        <nav>
            <ul>
            <li className="active">
              <Link to="/">HOME</Link>

              </li>
                <li>EVENTS</li>
                <li>MEDIA</li>
                <li>CONTRACT</li>
                <li>ABOUT US</li>
            </ul>
        </nav>
      </div>

    );}

}

export default Header;
