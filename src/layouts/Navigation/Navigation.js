import NavigationItem from './NavigationItem/NavigationItem';

import classes from './Navigation.module.scss';

import { navigationList } from '../../data/data';

const Navigation = () => {
  const navItems = navigationList.map((item, i) => {
    return <NavigationItem key={i} text={item.text} to={item.to} />;
  });

  return (
    <nav>
      <ul className={classes.navigation}>{navItems}</ul>
    </nav>
  );
};

export default Navigation;
