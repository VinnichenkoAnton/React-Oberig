import Container from '../UI/Container/Container';
import Title from '../Title/Title';

import classes from './OurTeam.module.scss';

import teamPhoto from '../../resources/ourTeam/teamPhoto.jpg';

const OurTeam = () => {
  return (
    <section className={classes.team}>
      <Container>
        <Title text="Наша команда" />
        <div className={classes.team__wrapper}>
          <img src={teamPhoto} alt="Наша команда" />
        </div>
      </Container>
    </section>
  );
};

export default OurTeam;
