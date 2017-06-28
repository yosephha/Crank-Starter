import React from 'react';

const RewardItem = ({reward}) => {
  return (
    <div className="reward-item-container">
      <div className="reward-item">
        <h3>Pledge ${reward.amount} or more</h3>
        <p>{reward.description}</p>
        <p>{reward.contributions.length} backers</p>
      </div>
    </div>
  );
}

export default RewardItem;
