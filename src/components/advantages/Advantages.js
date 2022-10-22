import classes from './Advantages.module.scss';

import advantages from '../../resources/advantages/advantages.png';

const Advantages = () => {
  return (
    <section className={classes.advantages}>
      <img src={advantages} alt="Охоронець" />
      <div></div>
    </section>
  );
};

export default Advantages;
