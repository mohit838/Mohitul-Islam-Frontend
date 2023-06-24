const TabNavigation = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="flex item-center justify-center gap-3">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 rounded-2xl ${
            activeTab === tab
              ? 'bg-[#f7ad36] text-[#040507]'
              : 'bg-[#040507] text-white'
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
