import { useState } from 'react';

import Button from '../UI/button/Button';
import ErrorModal from '../UI/errorModal/ErrorModal';

import classes from './UserForm.module.scss';

const UserForm = () => {
  const [error, setError] = useState(null);
  const [enteredName, setEnteredName] = useState('');
  const [enteredPhone, setEnteredPhone] = useState('');

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const phoneChangeHandler = (e) => {
    setEnteredPhone(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (enteredName.trim().length === 0 || enteredPhone.trim().length < 10) {
      setError({
        title: 'Введіть свої дані',
        message: 'Ви не ввели свої дані в одне з полів для заповнення',
      });
      return;
    }

    console.log(enteredName);
    console.log(enteredPhone);
    setEnteredName('');
    setEnteredPhone('');
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <form onSubmit={formSubmitHandler} className={classes.userform}>
        <div className={classes.userform__wrapper}>
          <input
            className={classes.userform__input}
            id="username"
            name="username"
            type="text"
            onChange={nameChangeHandler}
            value={enteredName}
          />
          <label className={classes.userform__label} htmlFor="username">
            Ім'я
          </label>
        </div>
        <div className={classes.userform__wrapper}>
          <input
            className={classes.userform__input}
            id="userphone"
            name="userphone"
            type="number"
            onChange={phoneChangeHandler}
            value={enteredPhone}
          />
          <label className={classes.userform__label} htmlFor="userphone">
            Телефон
          </label>
        </div>
        <Button type="submit">Відправити</Button>
      </form>
    </>
  );
};

export default UserForm;
