import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <section className="hero is-primary">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">Ambrosio</h1>
        <h2 className="subtitle">Your personal assistant</h2>
      </div>
    </div>

    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/trackers">Trackers</Link></li>
    </ul>

  </section>
);

export default Header;
