import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <div className="nav">
    <ul>
      <li><Link to="/" >Home</Link></li>
      <li><Link to="/trackers">Trackers</Link></li>
      <li><Link to="/settings">Settings</Link></li>
    </ul>
  </div>
);

export default Header;
