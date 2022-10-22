import { NavLink } from 'react-router-dom';

import Container from '../UI/Container/Container';
import ContactLink from '../ContactLink/ContactLink';
import Navigation from '../Navigation/Navigation';

import logo from '../../resources/header/logo.png';
import email from '../../resources/header/email.svg';
import phone from '../../resources/header/phone.svg';
import pointer from '../../resources/header/pointer.svg';

import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.header__wrapper}>
          <NavLink to="/" className={classes.header__logo}>
            <div className={classes.header__icn}>
              <img src={logo} alt="Логотип" />
            </div>
            <h1 className={classes.header__title}>Оберіг</h1>
          </NavLink>
          {/* <a href="#" className={classes.header__logo}>
            <img src={logo} alt="Логотип" />
          </a> */}
          <div className={classes.header__contacts}>
            <ContactLink
              href="mailto:mail@gmail.com"
              img={email}
              alt="Пошта"
              text="mail@gmail.com"
            />
            <ContactLink href="tel:+80735707777" img={phone} alt="Телефон" text="(073)570 77 77" />
            <ContactLink
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
