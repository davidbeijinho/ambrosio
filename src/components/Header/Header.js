import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <nav className="navbar is-primary">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        <img src="imgs/logo.svg" alt="Ambrosio" className="logo" /> Ambrosio
      </Link>
      <div className="navbar-burger burger" data-target="ambrosio-navbar">
        <span />
        <span />
        <span />
      </div>
    </div>

    <div id="ambrosio-navbar" className="navbar-menu">
      <div className="navbar-start">
        <Link className="navbar-item" to="/trackers">Trackers</Link>
        <Link className="navbar-item" to="/settings">Settings</Link>
      </div>
    </div>
  </nav>
);

export default Header;
