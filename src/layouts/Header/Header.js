import { NavLink } from 'react-router-dom';

import Container from '../../components/UI/Container/Container';
import ContactLink from '../../components/ContactLink/ContactLink';
import Navigation from '../Navigation/Navigation';

import classes from './Header.module.scss';

import logo from '../../resources/header/logo.png';
import { headerLinksList } from '../../data/data';

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
          <div className={classes.header__contacts}>
            {headerLinksList.map(({ id, href, Icn, text }) => {
              return <ContactLink key={id} href={href} Icn={Icn} text={text} />;
            })}
          </div>
        </div>
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
