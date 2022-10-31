const TabActivity = ({ id, activeTab, children }) => {
  return activeTab === id ? <>{children}</> : null;
};

export default TabActivity;
