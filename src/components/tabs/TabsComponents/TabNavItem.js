import Button from '../../UI/Button/Button';

const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <li onClick={handleClick}>
      <Button
        onClick={handleClick}
        type="button"
        buttonActivity={activeTab === id ? '' : 'inactive'}
      >
        {title}
      </Button>
    </li>
  );
};
export default TabNavItem;
