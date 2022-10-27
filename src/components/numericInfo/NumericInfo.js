import Container from '../UI/Container/Container';
import NumericItem from './NumericItem/NumericItem';
import Title from '../Title/Title';

import classes from './NumericInfo.module.scss';

import { numericInfoList } from '../../data/data';

const NumericInfo = () => {
  const numItems = numericInfoList.map(({ id, img, title, amount }) => {
    return <NumericItem key={id} img={img} title={title} amount={amount} />;
  });

  return (
    <section className={classes.numericinfo}>
      <Container>
        <Title className={classes.numericinfo__header} text="Про нас в числах" />
        <ul className={classes.numericinfo__list}>{numItems}</ul>
      </Container>
    </section>
  );
};

export default NumericInfo;
