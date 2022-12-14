import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

import classes from './404.module.scss';

const Page404 = () => {
  return (
    <div className={classes.nonexisting}>
      <Helmet>
        <meta name="description" content="Сторінка, на яку Ви намагаєтессь перейти не існує" />
        <title>404</title>
      </Helmet>
      <p className={classes.nonexisting__title}>404</p>
      <p className={classes.nonexisting__descr}>Page doesn't exist</p>
      <NavLink className={classes.nonexisting__link} to="..">
        Back to main page
      </NavLink>
    </div>
  );
};

export default Page404;
