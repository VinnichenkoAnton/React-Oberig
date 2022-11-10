import Container from '../../../../components/UI/Container/Container';
import Title from '../../../../components/Title/Title';
import Slider from '../../../../components/Slider/Slider';

import classes from './Reviews.module.scss';

import { reviewsList } from '../../../../data/data';

const Reviews = () => {
  return (
    <section>
      <Container className={classes.reviews}>
        <Title text="Відгуки про компанію" />
        <Slider height="400px" sliderContent={reviewsList} autoPlay={false} subdivided={true} />
      </Container>
    </section>
  );
};

export default Reviews;
