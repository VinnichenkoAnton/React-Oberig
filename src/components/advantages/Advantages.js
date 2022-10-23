import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames/bind';
import Container from '../UI/Container/Container';
import AdvantagesItem from './AdvantagesItem/AdvantagesItem';

import classes from './Advantages.module.scss';

import advantages from '../../resources/advantages/advantages.png';

import { ReactComponent as Locationicn } from '../../resources/advantages/icns/locationicn.svg';
import { ReactComponent as Allinclusiveicn } from '../../resources/advantages/icns/allinclusiveicn.svg';
import { ReactComponent as Responsibilityicn } from '../../resources/advantages/icns/responsibilityicn.svg';

const advantagesList = [
  {
    id: uuidv4(),
    subtitle: 'ALL inclucive',
    description:
      'Встановлення охоронної сигналізації, сервісне обслуговування та цілодобовий захист',
    icn: Allinclusiveicn,
  },
  {
    id: uuidv4(),
    subtitle: 'Завжди поруч',
    description: 'Понад 50 груп швидкого реагування в районах Києва та передмісті. Прибуття 3-7 хв',
    icn: Locationicn,
  },
  {
    id: uuidv4(),
    subtitle: 'Відповідальність',
    description: 'Матеріальна відповідальність до 100 000 грн. за офіційним договором',
    icn: Responsibilityicn,
  },
  {
    id: uuidv4(),
    subtitle: 'Пультова система',
    description: 'Власний пульт моніторингу працює 24/7',
    icn: Allinclusiveicn,
  },
  {
    id: uuidv4(),
    subtitle: 'Професіоналізм',
    description: 'Професійна підготовка та оснащення наших співробітників',
    icn: Locationicn,
  },
  {
    id: uuidv4(),
    subtitle: 'AJAX & MAKS Pro',
    description: 'Бездротові системи охорони AJAX та MAKS Pro. Великий вибір обладнання',
    icn: Responsibilityicn,
  },
];

const Advantages = () => {
  const itemsAlignedLeft = advantagesList.slice(0, 3).map((item) => {
    return (
      <AdvantagesItem
        key={item.id}
        subtitle={item.subtitle}
        description={item.description}
        Icn={item.icn}
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
        flexOrder={true}
      />
    );
  });
  return (
    <section className={classes.advantages}>
      <div className={classes.advantages__img}>
        <img src={advantages} alt="Охоронець" />
      </div>
      <Container>
        <h2 className={classes.advantages__title}>Наші переваги</h2>
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
