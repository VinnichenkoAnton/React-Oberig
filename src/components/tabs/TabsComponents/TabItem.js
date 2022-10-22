import classes from '../Tabs.module.scss';

const SecurityTypeCard = ({ title, img, Icn }) => {
  return (
    <li className={classes.tabs__wrapper}>
      <img className={classes.tabs__img} src={img} alt={title} />
      <div className={classes.tabs__overlay}>
        {<Icn />}
        <h3 className={classes.tabs__title}>{title}</h3>
      </div>
    </li>
  );
};

export default SecurityTypeCard;
