import React from 'react';
import { Link } from 'react-router-dom';

const FrontBtn = ({ btnLink, btnText }) => {
  return (
    <div className='custom-btn-front'>
      <Link to={`${btnLink}`}>{btnText}</Link>
    </div>
  );
};

export default FrontBtn;
