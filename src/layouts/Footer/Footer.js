import { NavLink } from 'react-router-dom';

import Container from '../../components/UI/Container/Container';
import ContactLink from '../../components/ContactLink/ContactLink';

import classes from './Footer.module.scss';

import logo from '../../resources/header/logo.png';
import { headerLinksList } from '../../data/data';
import { footerSocialList } from '../../data/data';

const Footer = () => {
  const footerLinksList = headerLinksList.slice(0, -1);
  return (
    <footer className={classes.footer}>
      <Container>
        <div className={classes.footer__wrapper}>
          <NavLink to="/" className={classes.footer__logo}>
            <div className={classes.footer__icn}>
              <img src={logo} alt="Логотип" />
            </div>
            <h1 className={classes.footer__title}>Оберіг</h1>
          </NavLink>
          <div className={classes.footer__contacts}>
            <div className={classes.footer__social}>
              <div className={classes.footer__socialitem}>Ми в соцмережах:</div>
              {footerSocialList.map(({ id, link, Icn }) => {
                return (
                  <a key={id} href={link} className={classes.footer__socialitem}>
                    <Icn />
                  </a>
                );
              })}
            </div>
            {footerLinksList.map(({ id, href, Icn, text }) => {
              return <ContactLink key={id} href={href} Icn={Icn} text={text} />;
            })}
          </div>
        </div>
        <div className={classes.footer__policy}>
          <a href="#" className="footer__policy-link">
            Політика конфіденційності
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
