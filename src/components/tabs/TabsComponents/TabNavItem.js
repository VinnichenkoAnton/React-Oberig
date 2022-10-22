import classNames from 'classnames/bind';
import Button from '../../UI/Button/Button';

import classes from '../Tabs.module.scss';

const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <li onClick={handleClick}>
      <Button
        type="button"
        className={classNames(
          classes.tabs__btn,
          classes[`tabs__btn_${activeTab === id ? 'active' : ''}`],
        )}
      >
        {title}
      </Button>
    </li>
  );
};
export default TabNavItem;
