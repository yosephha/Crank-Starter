import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import {login, signup, logout} from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root')
  ReactDOM.render(<Root />, rootEl)

  window.login = login;
  window.logout = logout;
  window.signup = signup;
});
