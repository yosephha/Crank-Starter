import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = (clearErrors) => (
  <nav className="login-signup">
    <Link to="/login" onClick={clearErrors}>Login</Link>
    <Link to="/signup" onClick={clearErrors}>Sign up!</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <div className="dropdown">
    <img src={ window.img.avatar }
      alt="User icon" className="dropbtn" />

    <div className="dropdown-content">
      <div className="background" />
      <p>You're logged in as <span>{currentUser.username}</span>
      <button className="header-button" onClick={logout}>Log Out</button></p>
    </div>
  </div>
);

const Greeting = ({ currentUser, logout, clearErrors }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks(clearErrors)
);

export default Greeting;
