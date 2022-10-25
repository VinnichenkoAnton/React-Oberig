import classNames from 'classnames/bind';
import classes from './AdvantagesItem.module.scss';

const AdvantagesItem = ({ subtitle, description, Icn, flexOrderChange }) => {
  return (
    <li className={classes.advitem}>
      <div className={classes.advitem__wrapper}>
        <h3 className={classes.advitem__subtitle}>{subtitle}</h3>
        {
          <Icn
            className={classNames(
              classes.advitem__icn,
              flexOrderChange ? classes.advitem__icn_left : classes.advitem__icn_right,
            )}
          />
        }
      </div>
      <p className={classes.advitem__description}>{description}</p>
    </li>
  );
};

export default AdvantagesItem;
