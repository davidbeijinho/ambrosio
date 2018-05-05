import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Home from '../../pages/Home/Home';
import Trackers from '../../pages/Trackers/Trackers';
import Settings from '../../pages/Settings/Settings';
import TrackerPage from '../../pages/TrackerPage/TrackerPage';
import NotFound from '../../pages/NotFound/NotFound';
import Footer from '../../components/Footer/Footer';
import AddTracker from '../../pages/AddTracker/AddTracker';
import TrackersSettings from '../../pages/TrackersSettings/TrackersSettings';

const Router = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/trackers/list" component={Trackers} />
        <Route path="/trackers/add" component={AddTracker} />
        <Route path="/trackers/settings" component={TrackersSettings} />
        <Route path="/settings" component={Settings} />
        <Route path="/tracker/:id" component={TrackerPage} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default Router;
