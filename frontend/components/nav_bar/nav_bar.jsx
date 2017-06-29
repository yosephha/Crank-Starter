import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Greeting from '../greeting/greeting_container';

class NavBar extends React.Component {

  render(){
    return(
      <div className="nav-bar-container">
        <div className="left-nav-bar">
          <Link to="/categories" className="site-nav__item green-hover">
            <div className='nav-icon'>
              <i className="fa fa-compass nav-icon compass" aria-hidden="true"></i>
            </div>
            <div className="nav-bar-explore">
              <span>Explore</span>
            </div>
          </Link>

          <Link to="/projects/new" className="nav-bar-startProject site-nav__item">
            Start a project
          </Link>
        </div>


        <Link to="/" className="nav-bar-logo site-nav__item">
          <span id="logo">
            <span className="crank">Crank</span>starter
          </span>
        </Link>

        <div className="right-nav-bar site-nav__item">
          <Link to="/search" className="nav-bar-search">
            <i className="fa fa-search" aria-hidden="true"></i>
          </Link>

          <div className="nav-bar-greeting site-nav__item">
            <Greeting />
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
