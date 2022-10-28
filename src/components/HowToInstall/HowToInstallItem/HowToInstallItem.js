import classes from './HowToInstallItem.module.scss';

const HowToInstallItem = ({ Icn, title, order }) => {
  return (
    <li className={classes.howtoinstall__item}>
      <div>
        <div className={classes.howtoinstall__icn}>{<Icn />}</div>
      </div>
      <h3 className={classes.howtoinstall__subtitle}>{title}</h3>
      <div className={classes.howtoinstall__order}>{order + 1}</div>
    </li>
  );
};

export default HowToInstallItem;
