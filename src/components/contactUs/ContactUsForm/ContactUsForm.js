import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import Button from '../../UI/Button/Button';
import Modal from '../../UI/Modal/Modal';
import Input from '../../UI/Input/Input';

import classes from './ContactUsForm.module.scss';

const ContactUsForm = () => {
  const form = useRef();
  const [modal, setModal] = useState(null);
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
      () => {
        setModal({
          title: 'Дякуємо за звернення',
          message: "Ми зв'яжемося з Вами найближчим часом",
        });
      },
      () => {
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
      <form ref={form} onSubmit={formSubmitHandler} className={classes.contactusform}>
        <div className={classes.contactusform__card}>
          <h2 className={classes.contactusform__title}>
            Введіть, будь ласка, Ваші дані й ми звяжемося з вами найближчим часом
          </h2>
        </div>
        <Input
          text="Ім'я"
          enteredValue={enteredName}
          onChange={nameChangeHandler}
          attributes={{ name: 'username', type: 'text' }}
        />
        <Input
          text="Телефон"
          enteredValue={enteredPhone}
          onChange={phoneChangeHandler}
          attributes={{ name: 'userphone', type: 'number' }}
        />
        <Button type="submit" className={classes.contactusform__btn}>
          Відправити
        </Button>
      </form>
    </>
  );
};

export default ContactUsForm;
