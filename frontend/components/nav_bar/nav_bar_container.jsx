import NavBar from './nav_bar';
import React from 'react';
import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';


const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    login: () => dispatch(login()),
    logout: () => dispatch(logout())
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
