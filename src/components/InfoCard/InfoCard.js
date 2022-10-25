import classNames from 'classnames/bind';

import classes from './InfoCard.module.scss';

const InfoCard = ({ title, description, img, flexOrderChange }) => {
  return (
    <div className={classes.infocard}>
      <div className={classes.infocard__wrapper}>
        <h3 className={classes.infocard__title}>{title}</h3>
        <p className={classes.infocard__description}>{description}</p>
      </div>
      <div
        className={classNames(
          classes.infocard__img,
          flexOrderChange ? classes.infocard__img_left : classes.infocard__img_right,
        )}
      >
        <img src={img} alt={title} />
      </div>
    </div>
  );
};

export default InfoCard;
