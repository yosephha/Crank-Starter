
import React from 'react';
// import GreetingContainer from './gretting/greeting_container';
import FormContainer from './session_form/session_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import NavBar from './nav_bar/nav_bar_container';

const App = () => (
  <div>
    <header>
      <h1>Crank Starter</h1>
      <NavBar />
    </header>

    <AuthRoute exact path="/login" component={FormContainer} />
    <AuthRoute exact path="/signup" component={FormContainer} />
  </div>
);

export default App;
