import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Greeting from '../greeting/greeting_container';

class NavBar extends React.Component {

  render(){
    return(
      <div className="nav-bar-container">
        <div className="left-nav-bar">
          <div className='nav-icon'>
            <i className="fa fa-compass fa-2x compass" aria-hidden="true"></i>
          </div>
          <div className="nav-bar-explore">
            <Link to="/">Explore</Link>
          </div>

          <div className="nav-bar-startProject">
            start a project
          </div>

          <div className="nav-bar-aboutUs">
            About us
          </div>
        </div>


        <div className="nav-bar-logo">
          <span className="crank">Crank</span> Starter
        </div>

        <div className="right-nav-bar">
          <div className="nav-bar-search">
            <i className="fa fa-search" aria-hidden="true"></i>
          </div>

          <div className="nav-bar-greeting">
            <Greeting />
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
