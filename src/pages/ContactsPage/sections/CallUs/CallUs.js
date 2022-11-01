import Container from '../../../../components/UI/Container/Container';
import Title from '../../../../components/Title/Title';
import ContactLink from '../../../../components/ContactLink/ContactLink';

import classes from './CallUs.module.scss';

import { ReactComponent as Phoneicn } from '../../../../resources/header/phoneicn.svg';
import { ReactComponent as Emailicn } from '../../../../resources/header/emailicn.svg';

const CallUs = () => {
  return (
    <section className={classes.callus}>
      <Container>
        <Title text="Зв'яжіться з нами" />
        <div className={classes.callus__subtitle}>Телефон</div>
        <ContactLink
          className={classes.callus__contactlink}
          href="tel:+80735707777"
          Icn={Phoneicn}
          alt="Телефон"
          text="(073)570 77 77"
        />
        <div className={classes.callus__subtitle}>Або напишіть нам на пошту</div>
        <ContactLink
          className={classes.callus__contactlink}
          href="mailto:mail@gmail.com"
          Icn={Emailicn}
          alt="Телефон"
          text="mail@gmail.com"
        />
      </Container>
    </section>
  );
};

export default CallUs;
