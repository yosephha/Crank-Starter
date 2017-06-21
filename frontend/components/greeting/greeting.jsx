import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = (clearErrors) => (
  <nav className="login-signup">
    <Link to="/login" onClick={clearErrors}>Login</Link>
    <Link to="/signup" onClick={clearErrors}>Sign up!</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">{currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout, clearErrors }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks(clearErrors)
);

export default Greeting;
