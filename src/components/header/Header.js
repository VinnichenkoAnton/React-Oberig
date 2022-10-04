import Container from '../container/Container';
import logo from '../../resources/logo.png';
import SingleContact from '../singleContact/SingleContact';
import Navigation from '../navigation/Navigation';

import email from '../../resources/email.svg';
import phone from '../../resources/phone.svg';
import pointer from '../../resources/pointer.svg';

import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.header__wrapper}>
          <a href="#" className={classes.header__logo}>
            <img src={logo} alt="Логотип" />
          </a>
          <div className={classes.header__contacts}>
            <SingleContact
              href="mailto:mirdetstva@gmail.com"
              img={email}
              alt="Пошта"
              text="mirdetstva@gmail.com"
            />
            <SingleContact
              href="tel:+80735707777"
              img={phone}
              alt="Телефон"
              text="(073)570 77 77"
            />
            <SingleContact
              href="https://goo.gl/maps/CbXq5kECDMpY6wof7"
              img={pointer}
              alt="Адреса"
              text="вул.Київська, 138, Гатне, Україна"
            />
          </div>
        </div>
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
