import classNames from 'classnames/bind';
import Container from '../UI/Container/Container';
import Title from '../Title/Title';
import AdvantagesItem from './AdvantagesItem/AdvantagesItem';

import classes from './Advantages.module.scss';

import advantages from '../../resources/advantages/advantages.png';
import { advantagesList } from '../../data/data';

const Advantages = () => {
  const itemsAlignedLeft = advantagesList.slice(0, 3).map((item) => {
    return (
      <AdvantagesItem
        key={item.id}
        subtitle={item.subtitle}
        description={item.description}
        Icn={item.icn}
        flexOrderChange={false}
      />
    );
  });
  const itemsAlignedRight = advantagesList.slice(3).map((item) => {
    return (
      <AdvantagesItem
        key={item.id}
        subtitle={item.subtitle}
        description={item.description}
        Icn={item.icn}
        flexOrderChange={true}
      />
    );
  });
  return (
    <section className={classes.advantages}>
      <div className={classes.advantages__img}>
        <img src={advantages} alt="Охоронець" />
      </div>
      <Container>
        <Title text="Наші переваги" />
        <div className={classes.advantages__wrapper}>
          <ul className={classNames(classes.advantages__side, classes.advantages__side_left)}>
            {itemsAlignedLeft}
          </ul>
          <ul className={classNames(classes.advantages__side, classes.advantages__side_right)}>
            {itemsAlignedRight}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Advantages;
