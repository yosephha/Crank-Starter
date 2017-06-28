
import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import GreetingContainer from './greeting/greeting_container';
import FormContainer from './session_form/session_form_container';
import NavBar from './nav_bar/nav_bar_container';
import PostIndexContainer from './projects/project_index_container';
import PostIndex from './projects/project_index';
import NewProjectFormContainer from './projects/project_form_container';
import ProjectDetailContainer from './projects/project_detail_container';
import ProjectDetail from './projects/project_detail';
import ContributionIndexContainer from './projects/contributions/contribution_index_container';

const App = () => (
  <div>
    <header className="header">
      <NavBar />
    </header>
    <div className="mainPage">
      <AuthRoute exact path="/login" component={FormContainer} />
      <AuthRoute exact path="/signup" component={FormContainer} />
      <ProtectedRoute exact path="/projects/new" component={NewProjectFormContainer}/>
      <ProtectedRoute
        exact path="/projects/:id/contribution"
        component={ContributionIndexContainer}
      />
      <Route exact path="/" component={PostIndexContainer} />
      <Route exact path="/projects/:id" component={ProjectDetailContainer} />
    </div>
  </div>
);

export default App;
