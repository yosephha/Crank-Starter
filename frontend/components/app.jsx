
import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import FormContainer from './session_form/session_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import NavBar from './nav_bar/nav_bar_container';

const App = () => (
  <div>
    <header className="header">
      <NavBar />
    </header>
    <div className="mainPage">
      <AuthRoute exact path="/login" component={FormContainer} />
      <AuthRoute exact path="/signup" component={FormContainer} />
    </div>
  </div>
);

export default App;
