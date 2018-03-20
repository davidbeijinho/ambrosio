import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import Trackers from '../pages/Trackers';
import Tracker from '../pages/Tracker';
import Footer from '../components/Footer';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/tracker/aa" component={Tracker} />
      <Route path="/trackers" component={Trackers} />
      {/* <Route path="/topics" component={Topics}/> */}
      <Footer />
    </Switch>
  </BrowserRouter>
);

export default App;
