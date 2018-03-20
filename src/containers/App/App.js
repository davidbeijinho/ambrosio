import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Home from '../../pages/Home/Home';
import Trackers from '../../pages/Trackers/Trackers';
import Settings from '../../pages/Settings/Settings';
import TrackerPage from '../../pages/TrackerPage/TrackerPage';
import NotFound from '../../pages/NotFound/NotFound';
import Footer from '../../components/Footer/Footer';

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tracker/:id" component={TrackerPage} />
        <Route path="/trackers" component={Trackers} />
        <Route path="/settings" component={Settings} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
