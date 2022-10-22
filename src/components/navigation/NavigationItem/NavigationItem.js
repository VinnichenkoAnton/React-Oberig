import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import classes from './NavigationItem.module.scss';

const NavigationItem = ({ text, to }) => {
  return (
    <li className={classes.navitem}>
      <NavLink
        className={({ isActive }) =>
          classNames(classes.navitem_inactive, isActive ? classes.navitem_active : '')
        }
        to={to}
      >
        {text}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
