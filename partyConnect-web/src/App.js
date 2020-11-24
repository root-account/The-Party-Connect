import React from 'react';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';

import Dashboard from "./pages/dashboard.js"
import Profile from "./pages/profile.js"
import Settings from "./pages/settings.js"
import MyEvents from "./pages/MyEvents.js"
import NewEvent from "./pages/NewEvent.js"
import Followers from "./pages/followers.js"
import LoginPage from "./pages/login.js"
import SavedItems from "./pages/savedItems.js"
import CalendarPage from "./pages/calendar.js"

function App() {
  return <Router>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/feed" component={Dashboard} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/Settings" component={Settings} />
      <Route exact path="/my-events" component={MyEvents} />
      <Route exact path="/new-event" component={NewEvent} />
      <Route exact path="/my-followers" component={Followers} />
      <Route exact path="/followers" component={Followers} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/saved" component={SavedItems} />
      <Route exact path="/calendar" component={CalendarPage} />
    </Switch>
  </Router>
}

export default App;