import { NavLink } from 'react-router-dom';

// import { Helmet } from 'react-helmet';

import classes from './404.module.scss';

const Page404 = () => {
  return (
    <div className={classes.nonexisting}>
      {/* <Helmet>
        <meta name="description" content="The page you are trying to get doesnt exist" />
        <title>404</title>
      </Helmet> */}
      <p className={classes.nonexisting__title}>404</p>
      <p className={classes.nonexisting__descr}>Page doesn't exist</p>
      <NavLink
        className={classes.nonexisting__link}
        style={{
          display: 'block',
          textAlign: 'center',
          fontWeight: '400',
          fontSize: '24px',
          marginTop: '30px',
          textDecoration: 'underline',
        }}
        to=".."
      >
        Back to main page
      </NavLink>
    </div>
  );
};

export default Page404;
