import React from 'react';
import { NavLink } from 'react-router-dom';

const RewardItem = ({reward, pid}) => {

  const description = reward.description ? reward.description : "";
  const modified = (description).length < 125 ?
    description : description.slice(0, 125) + "...";

  return (
    <NavLink to={`/projects/${pid}/contribution`} className="reward-item-container">
      <div className="reward-item">
        <h3>Pledge ${reward.amount} or more</h3>
        <h4 className="reward-title">{reward.title}</h4>
        <p>{modified}</p>
        <p className="reward-title-estimate">ESTIMATED DELIVERY</p>
        <p>Aug 2017</p>
        <p className="reward-title-backers">
          {reward.contributions.length} <span>backers</span>
        </p>
      </div>
    </NavLink>
  );
}

export default RewardItem;
