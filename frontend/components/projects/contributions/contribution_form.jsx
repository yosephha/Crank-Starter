import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class ContributionForm extends React.Component {
  constructor(props){
    super(props);

    this.state = ({
      amount: 0,
      backer_id: this.props.currentUser.id,
      reward_id: this.props.reward.id
    });

    this.update = this.update.bind(this);
    this.createContribution = this.createContribution.bind(this);
  }

  update(){
    return (e) => this.setState({['amount']: e.target.value})
  }

  createContribution(e) {
    e.preventDefault();
    const project_id = this.props.project.id;
    const reward_amount = this.props.reward.amount;
    const entered_amount = this.state.amount;

    debugger
    if(reward_amount > entered_amount){
      this.setState({amount: reward_amount});
    } else {
      this.props.createContribution(this.state)
      .then((resp) =>  (this.props.history.push(`/projects/${project_id}`)));
    }
  }

  render(){
    return(
      <div>
        <p>
          FormContainer
        </p>
        <input
          type="number"
          value={this.state.amount}
          onChange={this.update()}
          className="contribution-input"
          />
        <input
          type="submit"
          onClick={this.createContribution}
          className="contribution-submit-button"
          value ='contribute'
          />
      </div>
      )
  }
}

export default withRouter(ContributionForm);
