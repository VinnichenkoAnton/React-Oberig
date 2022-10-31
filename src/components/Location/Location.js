import Container from '../UI/Container/Container';
import Title from '../Title/Title';

import classes from './Location.module.scss';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Location = () => {
  return (
    <section className={classes.location}>
      <Container>
        <Title text="Ми знаходимось" />
        <div className={classes.location__wrapper}>
          <p className={classes.location__description}>
            Якщо у Вас виникли будь-які запитання, будь ласка, Ви можете завітати до нас в офіс. Мы
            знаходимося в Київській області, село Гатне, вул.Київська, 138
          </p>
          <div className={classes.location__map}>
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

export default Location;
