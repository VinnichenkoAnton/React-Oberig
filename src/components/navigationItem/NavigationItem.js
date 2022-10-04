import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import classes from './NavigationItem.module.scss';

const NavigationItem = ({ color, text, to }) => {
  return (
    <li className={classes.navigationitem}>
      <NavLink
        className={({ isActive }) =>
          classNames(classes.navigationitem_inactive, isActive ? classes.navigationitem_active : '')
        }
        to={to}
      >
        {text}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
