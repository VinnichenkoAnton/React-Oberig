import Container from '../../../../components/UI/Container/Container';
import Title from '../../../../components/Title/Title';
import ContactLink from '../../../../components/ContactLink/ContactLink';

import classes from './ContactsInfo.module.scss';

import { ReactComponent as Phoneicn } from '../../../../resources/header/phoneicn.svg';
import { ReactComponent as Emailicn } from '../../../../resources/header/emailicn.svg';

const ContactsInfo = () => {
  return (
    <section className={classes.continfo}>
      <Container>
        <Title text="Контактна інформація" />
        <div className={classes.continfo__wrapper}>
          <div className={classes.continfo__info}>
            <p className={classes.continfo__description}>
              Якщо у Вас виникли будь-які запитання, будь ласка, Ви можете завітати до нас в офіс.
              Мы знаходимося в Київській області, село Гатне, вул.Київська, 138
            </p>
            <div className={classes.continfo__subtitle}>Телефон</div>
            <ContactLink
              className={classes.continfo__contactlink}
              href="tel:+80735707777"
              Icn={Phoneicn}
              alt="Телефон"
              text="(073)570 77 77"
            />
            <div className={classes.continfo__subtitle}>Або напишіть нам на пошту</div>
            <ContactLink
              className={classes.continfo__contactlink}
              href="mailto:mail@gmail.com"
              Icn={Emailicn}
              alt="Телефон"
              text="mail@gmail.com"
            />
          </div>

          <div className={classes.continfo__map}>
            <iframe
              title="myframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2545.4190019442008!2d30.394320315727978!3d50.358741079462746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c9cf4d9d10cb%3A0xe0d580cdbf6c61af!2z0LLRg9C7LiDQmtC40ZfQstGB0YzQutCwLCAxMzgsINCT0LDRgtC90LUsINCa0LjRl9Cy0YHRjNC60LAg0L7QsdC7LiwgMDgxNjA!5e0!3m2!1sru!2sua!4v1667228260087!5m2!1sru!2sua"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactsInfo;
