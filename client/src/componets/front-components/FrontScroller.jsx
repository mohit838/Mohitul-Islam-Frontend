import React from 'react';
import { brandName } from '../../constants/data';

const FrontScroller = () => {
  return (
    <section className='front-scroller-service-section'>
      <div className='container mx-auto'>
        <div className='brand-font disable-scrollbar'>
          {brandName?.map((item) => (
            <h4 key={item?.id}>{item?.name}</h4>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrontScroller;
