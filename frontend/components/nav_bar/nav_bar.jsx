import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  render(){
    if (this.props.currentUser){
      const name = this.props.currentUser.username;
      return (
        <section>
          <h1>Welcome to the page, {name}</h1>
          <button onClick={this.props.logout}>
            Logout
          </button>
        </section>
      );
    } else {
      return (
        <section>
          <Link to="/signup">SignUp!</Link>
          {'  or  '}
          <Link to="/login">Login</Link>
        </section>
      );
    }

  }
}

export default NavBar;
