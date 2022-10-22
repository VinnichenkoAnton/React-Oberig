import NavigationItem from './NavigationItem/NavigationItem';

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
  const navItems = navItemArr.map((item, i) => {
    return <NavigationItem key={i} text={item.text} to={item.to} />;
  });

  return (
    <nav>
      <ul className={classes.navigation}>{navItems}</ul>
    </nav>
  );
};

export default Navigation;
