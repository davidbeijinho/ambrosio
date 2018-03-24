import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <nav className="navbar is-primary">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="/imgs/logo.svg" alt="Ambrosio" className="logo" /> Ambrosio
          </Link>
          <div
            className="navbar-burger burger"
            data-target="ambrosio-navbar"
            onClick={this.toggleMenu}
            onKeyPress={this.toggleMenu}
            role="button"
            tabIndex={0}
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        <div id="ambrosio-navbar" className={`navbar-menu  ${this.state.open ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <Link onClick={this.toggleMenu} className="navbar-item" to="/trackers">Trackers</Link>
            <Link onClick={this.toggleMenu} className="navbar-item" to="/settings">Settings</Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
