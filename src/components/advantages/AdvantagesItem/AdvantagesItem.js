import classNames from 'classnames/bind';
import classes from './AdvantagesItem.module.scss';

const AdvantagesItem = ({ subtitle, description, Icn, flexOrder }) => {
  return (
    <li className={classes.advitem}>
      <div className={classes.advitem__wrapper}>
        <h3 className={classes.advitem__subtitle}>{subtitle}</h3>
        {
          <Icn
            className={classNames(classes.advitem__icn, flexOrder ? classes.advitem__icn_left : '')}
          />
        }
      </div>
      <p className={classes.advitem__description}>{description}</p>
    </li>
  );
};

export default AdvantagesItem;
