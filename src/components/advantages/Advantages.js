import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames/bind';
import Container from '../UI/Container/Container';
import Title from '../Title/Title';
import AdvantagesItem from './AdvantagesItem/AdvantagesItem';

import classes from './Advantages.module.scss';

import advantages from '../../resources/advantages/advantages.png';

import { ReactComponent as Locationicn } from '../../resources/advantages/icns/locationicn.svg';
import { ReactComponent as Allinclusiveicn } from '../../resources/advantages/icns/allinclusiveicn.svg';
import { ReactComponent as Responsibilityicn } from '../../resources/advantages/icns/responsibilityicn.svg';
import { ReactComponent as Remotecntrlicn } from '../../resources/advantages/icns/remotectrlicn.svg';
import { ReactComponent as Professionalicn } from '../../resources/advantages/icns/professionalicn.svg';
import { ReactComponent as Individualicn } from '../../resources/advantages/icns/individualicn.svg';

const advantagesList = [
  {
    id: uuidv4(),
    subtitle: 'Працюємо під ключ',
    description:
      'Беремо на себе всі питання: охоронна сигналізація, сервісне обслуговування, цілодобовий захист',
    icn: Allinclusiveicn,
  },
  {
    id: uuidv4(),
    subtitle: 'Ми завжди поряд',
    description: 'Групи швидкого реагування завжди на чергуванні поряд з Вами. Прибуття 2-10 хв',
    icn: Locationicn,
  },
  {
    id: uuidv4(),
    subtitle: 'Відповідальність',
    description: "Ми сумлінно виконуємо свої обов'язки і виїзджаємо на кожен виклик",
    icn: Responsibilityicn,
  },
  {
    id: uuidv4(),
    subtitle: 'Пультова система',
    description: 'Власний пульт моніторингу працює 24/7',
    icn: Remotecntrlicn,
  },
  {
    id: uuidv4(),
    subtitle: 'Професіоналізм',
    description: 'У нас працюють лише висококваліфіковані спеціалісти',
    icn: Professionalicn,
  },
  {
    id: uuidv4(),
    subtitle: 'Персональний підхід',
    description: 'Ми працюємо з клієнтом індивідуально для задоволення потреб кожного',
    icn: Individualicn,
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
