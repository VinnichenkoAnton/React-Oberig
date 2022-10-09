import Container from '../container/Container';
import NumericItem from '../numericItem/NumericItem';

import classes from './NumericInfo.module.scss';

import established from '../../resources/numericInfo/established.svg';
import workers from '../../resources/numericInfo/workers.svg';
import customers from '../../resources/numericInfo/customers.svg';
import surveillance from '../../resources/numericInfo/surveillance.svg';
const numericItems = [
  { img: established, title: 'Років', amount: '10' },
  { img: workers, title: 'Працівників', amount: '100' },
  { img: customers, title: 'Клієнтів', amount: '200' },
  { img: surveillance, title: "Об'єктів", amount: '50' },
];

const NumericInfo = () => {
  return (
    <section className={classes.numericinfo}>
      <Container>
        <ul className={classes.numericinfo__list}>
          {numericItems.map(({ img, title, amount }, index) => {
            return <NumericItem key={index} img={img} title={title} amount={amount} />;
          })}
        </ul>
      </Container>
    </section>
  );
};

export default NumericInfo;
