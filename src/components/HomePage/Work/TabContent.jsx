import CardWrapper from '@/components/Common/CardWrapper/CardWrapper';
import React from 'react';

const TabContent = ({ activeTab, tabs }) => {
  const activeTabData = tabs.find((tab) => tab?.name === activeTab);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
      {activeTabData &&
        activeTabData?.content?.map((item) => (
          <React.Fragment key={item?.id}>
            <CardWrapper item={item} />
          </React.Fragment>
        ))}
    </div>
  );
};

export default TabContent;
