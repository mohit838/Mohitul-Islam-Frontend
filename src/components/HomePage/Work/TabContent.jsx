const TabContent = ({ activeTab, tabs }) => {
  const activeTabData = tabs.find((tab) => tab.name === activeTab);

  return (
    <div>
      {activeTabData &&
        activeTabData.content.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            {/* Display the rest of the item data */}
          </div>
        ))}
    </div>
  );
};

export default TabContent;
