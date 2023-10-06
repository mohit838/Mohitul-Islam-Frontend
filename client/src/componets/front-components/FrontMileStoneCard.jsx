import React from "react";

const FrontMileStoneCard = ({ milestoneItems }) => {
  return (
    <div className='front-milestore-single-card'>
      <h2>{milestoneItems?.number}</h2>
      <p>{milestoneItems?.text}</p>
    </div>
  );
};

export default FrontMileStoneCard;
