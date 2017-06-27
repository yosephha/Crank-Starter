import React from 'react';
import ContributionFormContainer from '../contributions/contribution_form_container';

const RewardItem = ({reward}) => {
  debugger
  return (
    <div className="reward-item-container">
      <div className="reward-item">
        <h3>Pledge ${reward.amount} or more</h3>
        <p>{reward.description}</p>
        <p>{reward.contributions.length} backers</p>
        <ContributionFormContainer reward={reward}/>
      </div>
    </div>
  );
}

export default RewardItem;
