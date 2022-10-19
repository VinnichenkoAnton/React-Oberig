import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import classNames from 'classnames';

import Button from '../UI/button/Button';
import Modal from '../UI/modal/Modal';

import classes from './UserForm.module.scss';

const UserForm = () => {
  const form = useRef();
  const [labelIsUp, setLabelIsUp] = useState({ nameLabel: false, phoneLabel: false });
  const [modal, setModal] = useState(null);
  const [enteredName, setEnteredName] = useState('');
  const [enteredPhone, setEnteredPhone] = useState('');

  const inputBlurHandler = () => {
    if (labelIsUp.nameLabel && enteredName.trim().length === 0) {
      setLabelIsUp({ ...labelIsUp, nameLabel: false });
    }
    if (labelIsUp.phoneLabel && enteredPhone.trim().length === 0) {
      setLabelIsUp({ ...labelIsUp, phoneLabel: false });
    }
  };

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const phoneChangeHandler = (e) => {
    setEnteredPhone(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (enteredName.trim().length === 0 || enteredPhone.trim().length === 0) {
      setModal({
        title: 'Введіть Ваші дані',
        message: 'Ви не ввели дані в одне з полів для заповнення',
      });
      return;
    } else if (enteredPhone.trim().length !== 10) {
      setModal({
        title: 'Перевірте коректність номера телефону',
        message: 'Номер телефону має бути введений в форматі "0441234567"',
      });
      return;
    }

    emailjs.sendForm('service_tsh40vc', 'template_8c8jhfn', form.current, 'dotqKKPoRlk7tw9HH').then(
      (result) => {
        setModal({
          title: 'Дякуємо за звернення',
          message: "Ми зв'яжемося з Вами найближчим часом",
        });
      },
      (error) => {
        setModal({
          title: 'Сталася помилка',
          message:
            'Ми вже працюємо над вирішенням цієї проблеми. Будь ласка, спробуйте трохи пізніше',
        });
      },
    );

    setEnteredName('');
    setEnteredPhone('');
  };

  const errorHandler = () => {
    setModal(null);
  };
  return (
    <>
      {modal && <Modal title={modal.title} message={modal.message} onConfirm={errorHandler} />}
      <form ref={form} onSubmit={formSubmitHandler} className={classes.userform}>
        <div className={classes.userform__card}>
          <h2 className={classes.userform__title}>
            Введіть, будь ласка, Ваші дані й ми звяжемося з вами найближчим часом
          </h2>
        </div>
        <div className={classes.userform__wrapper}>
          <input
            className={classes.userform__input}
            name="username"
            type="text"
            onChange={nameChangeHandler}
            onFocus={() => setLabelIsUp({ ...labelIsUp, nameLabel: true })}
            onBlur={inputBlurHandler}
            value={enteredName}
          />
          <label
            className={classNames(
              classes.userform__label,
              labelIsUp.nameLabel ? classes.userform__label_up : '',
            )}
            htmlFor="username"
          >
            Ім'я
          </label>
        </div>
        <div className={classes.userform__wrapper}>
          <input
            className={classes.userform__input}
            name="userphone"
            type="number"
            onChange={phoneChangeHandler}
            onFocus={() => setLabelIsUp({ ...labelIsUp, phoneLabel: true })}
            onBlur={inputBlurHandler}
            value={enteredPhone}
          />
          <label
            className={classNames(
              classes.userform__label,
              labelIsUp.phoneLabel ? classes.userform__label_up : '',
            )}
            htmlFor="userphone"
          >
            Телефон
          </label>
        </div>
        <Button type="submit" className={classes.userform__btn}>
          Відправити
        </Button>
      </form>
    </>
  );
};

export default UserForm;