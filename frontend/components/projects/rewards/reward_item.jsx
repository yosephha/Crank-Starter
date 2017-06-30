import React from 'react';



const RewardItem = ({reward}) => {

  const description = reward.description ? reward.description : "";
  const modified = (description).length < 125 ?
    description : description.slice(0, 125) + "...";

  return (
    <div className="reward-item-container">
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
    </div>
  );
}

export default RewardItem;
