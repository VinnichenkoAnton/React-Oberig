import NavigationItem from '../navigationItem/NavigationItem';

import classes from './Navigation.module.scss';

const navItemArr = [
  {
    text: 'Головна',
    to: '/',
  },
  {
    text: 'Про компанію',
    to: '/aboutcompany',
  },
  {
    text: 'Наші послуги',
    to: '/services',
  },
  {
    text: 'Контакти',
    to: '/contacts',
  },
];

const Navigation = () => {
  return (
    <nav>
      <ul className={classes.navigation}>
        {navItemArr.map((item, i) => {
          return <NavigationItem key={i} text={item.text} to={item.to} />;
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
