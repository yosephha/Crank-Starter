import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ContributionForm extends React.Component {
  constructor(props){
    super(props);
    debugger
    this.state = ({
      amount: 0,
      backer_id: this.props.currentUser.id,
      reward_id: this.props.reward.id
    });
  }

  render(){
    return(
      <p>
        hello from form
      </p>
      )
  }
}

export default ContributionForm;
