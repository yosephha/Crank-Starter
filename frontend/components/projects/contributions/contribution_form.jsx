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

    if(reward_amount > entered_amount){
      this.setState({amount: reward_amount});
    } else {
      this.props.createContribution(this.state)
      .then((resp) =>  (this.props.history.push(`/projects/${project_id}`)));
    }
  }

  render(){

    const reward = this.props.reward
    return(
      <div className="contribution-reward-box">
        <div className="contribution-reward-details">
          <div className="contribution-reward-left-box">
            <h3 className="c-header">${reward.amount} or more</h3>
            <h3>{reward.title}</h3>
            <p className="c-gray">{reward.description}</p>
            <p>{reward.contributions.length} <span className="c-gray">backers</span></p>
          </div>
          <div className="contribution-reward-right-box">
            <h4 className="c-gray">Estimated Delivery</h4>
            <span>Nov 2017</span>

            <h4 className="c-gray">Ships To</h4>
            <span>Anywhere in the world</span>
          </div>
        </div>

        <div className="contribution-reward-input">
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
      </div>
      )
  }
}

export default withRouter(ContributionForm);
