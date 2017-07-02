import React from 'react';
import RewardItem from './reward_item';

const RewardIndex = ({project}) => {
  const rewards = project.rewards.map((reward) => (

    <RewardItem key={reward.id} reward={reward} pid={project.id} />
  ));

  return (
    <div className="rewards-index-container">
      {rewards}
    </div>
  );
};

export default RewardIndex;
