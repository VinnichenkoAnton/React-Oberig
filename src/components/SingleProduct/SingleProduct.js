import Container from '../UI/Container/Container';
import Title from '../Title/Title';

import classes from './SingleProduct.module.scss';

const SingleProduct = ({ img, title, description, eqvprice, monthprice }) => {
  return (
    <section className={classes.product}>
      <Container>
        <div className={classes.product__container}>
          <div className={classes.product__img}>
            <img src={img} alt={title} />
          </div>
          <div className={classes.product__wrapper}>
            <Title text={title} />
            <div className={classes.product__description}>
              Детальна інформація: <span>{description}</span>
            </div>
            <div className={classes.product__price}>
              Вартість обладнання: <span>{eqvprice}</span>
            </div>
            <div className={classes.product__price}>
              Щомісячна абонплата : <span>{monthprice}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SingleProduct;
