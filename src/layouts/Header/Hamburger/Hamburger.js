import classes from './Hamburger.module.scss';

import classNames from 'classnames';

const Hamburger = ({ isActive, onClick }) => {
  const hamburgerClasses = classNames(
    classes.hamburger__span,
    isActive ? classes.hamburger__span_active : '',
  );
  return (
    <div className={classes.hamburger} onClick={onClick}>
      <span className={hamburgerClasses}></span>
      <span className={hamburgerClasses}></span>
      <span className={hamburgerClasses}></span>
    </div>
  );
};

export default Hamburger;
