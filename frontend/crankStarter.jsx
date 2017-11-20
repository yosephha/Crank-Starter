import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { signup, login, logout } from './actions/session_actions';
import Root from './components/root';
import { fetchProjects, createProject, fetchProject } from './actions/project_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);

  //
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.fetchProjects = fetchProjects;
  // window.fetchProject = fetchProject;
  // window.createProject = createProject;
  // window.login = login;
  // window.signup = signup;
  // window.logout = logout;
});
