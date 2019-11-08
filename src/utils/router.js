// Router Packages
import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Components
import Auth from '../Components/Auth/Auth';
import Dashboard from '../Components/Dashboard/Dashboard';
import Landing from '../Components/Landing/Landing';

// Routes
export default (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route path={['/login', '/register']} component={Auth} />
    <Route path='/dashboard' component={Dashboard} />
  </Switch>
)