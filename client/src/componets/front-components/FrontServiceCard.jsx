import React from "react";

const ServiceCard = ({ serviceItems }) => {
  return (
    <div className='front-single-service-card'>
      {/* Icon */}
      <div className=''>{serviceItems?.icon}</div>
      {/* Title */}
      <div className='service-card-title'>{serviceItems?.title}</div>
      {/* Para / text */}
      <div className='service-card-para'>{serviceItems?.desc}</div>
    </div>
  );
};

export default ServiceCard;
