import { useNavigate } from 'react-router-dom';

import classes from './GoBack.module.scss';

const GoBack = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.goback} onClick={() => navigate(-1)}>
      Повернутися на попередню сторінку
    </div>
  );
};

export default GoBack;
