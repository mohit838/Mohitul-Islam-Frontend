import React from "react";
import { milestones } from "../../../constants/data";
import FrontMileStoneCard from "../../front-components/FrontMileStoneCard";

const Milestone = () => {
  return (
    <section
      id='milestone'
      className='front-milestone-section'
    >
      {/* Milestone Head Title */}
      <div className='milestone-container'>
        <div className='milestone-info-details'>
          <span>Our Milestones</span>
          <h2>{"What sets our studio"}</h2>
          <h2>{"apart for your projects?"}</h2>
        </div>

        {/* Services Card Design */}
        <div className='front-milestone-card'>
          {milestones?.map((item) => (
            <FrontMileStoneCard
              key={item?.id}
              milestoneItems={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestone;
