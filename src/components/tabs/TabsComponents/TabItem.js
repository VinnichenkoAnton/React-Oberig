import { NavLink } from 'react-router-dom';

import classes from '../Tabs.module.scss';

const TabItem = ({ title, img, Icn, id }) => {
  return (
    <NavLink to={`/services/${id}`} className={classes.tabs__wrapper}>
      <img className={classes.tabs__img} src={img} alt={title} />
      <div className={classes.tabs__overlay}>
        {<Icn />}
        <h3 className={classes.tabs__title}>{title}</h3>
      </div>
    </NavLink>
  );
};

export default TabItem;
