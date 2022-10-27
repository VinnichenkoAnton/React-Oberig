import Container from '../UI/Container/Container';
import Title from '../Title/Title';
import Slider from '../Slider/Slider';

import classes from './Reviews.module.scss';

import { reviewsList } from '../../data/data';

const Reviews = () => {
  return (
    <section>
      <Container className={classes.reviews}>
        <Title text="Відгуки про компанію" />
        <Slider sliderContent={reviewsList} autoPlay={false} subdivided={true} />
      </Container>
    </section>
  );
};

export default Reviews;
