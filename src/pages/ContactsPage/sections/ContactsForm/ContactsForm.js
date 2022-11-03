import { useState, useRef } from 'react';
import { Formik, Field, Form, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

import Container from '../../../../components/UI/Container/Container';
import Button from '../../../../components/UI/Button/Button';
import Modal from '../../../../components/UI/Modal/Modal';

import classes from './ContactsForm.module.scss';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? <div className={classes.form__error}>{meta.error}</div> : null}
    </>
  );
};

const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <>
      <label className={classes.checkbox}>
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? <div className={classes.form__error}>{meta.error}</div> : null}
    </>
  );
};

const ContactsForm = () => {
  const contForm = useRef();
  const [modal, setModal] = useState(null);

  const errorHandler = () => {
    setModal(null);
  };

  return (
    <>
      {modal && <Modal title={modal.title} message={modal.message} onConfirm={errorHandler} />}
      <section className={classes.form}>
        <Container>
          <Formik
            initialValues={{
              name: '',
              email: '',
              number: '',
              text: '',
              terms: false,
            }}
            validationSchema={Yup.object({
              name: Yup.string()
                .min(2, 'Мінімум 2 символи для заповнення')
                .required("Обов'язкове поле!"),
              email: Yup.string().email('Неправильна email адреса').required("Обов'язкове поле!"),
              number: Yup.string()
                .required("Обов'язкове поле!")
                .min(9, 'Номер телефону має бути введений в форматі "0441234567"')
                .max(9, 'Номер телефону має бути введений в форматі "0441234567"'),
              text: Yup.string().min(1, 'Мінімум 1 символи'),
              terms: Yup.boolean().required('Необхідна згода').oneOf([true], 'Необхідна згода'),
            })}
            onSubmit={(values, { resetForm }) => {
              emailjs
                .sendForm(
                  'service_tsh40vc',
                  'template_evfcg5c',
                  contForm.current,
                  'dotqKKPoRlk7tw9HH',
                )
                .then(
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
              resetForm();
            }}
          >
            <Form ref={contForm}>
              <div className={classes.form__wrapper}>
                <div className={classes.form__item}>
                  <TextInput
                    label="Ваше имя"
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="off"
                  />
                  <TextInput
                    label="Ваша пошта"
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="off"
                  />
                </div>
                <div className={classes.form__item}>
                  <TextInput
                    label="Ваш телефон"
                    id="number"
                    name="number"
                    type="number"
                    autoComplete="off"
                  />
                </div>
              </div>
              <label htmlFor="text">Ваше повідомлення</label>
              <Field id="text" name="text" as="textarea" />
              <ErrorMessage component="div" className={classes.form__error} name="text" />
              <Checkbox className={classes.form__checkbox} name="terms">
                Погоджуєтесь з політикою конфіденційності?
              </Checkbox>
              <Button className={classes.form__button} type="submit">
                Відправити
              </Button>
            </Form>
          </Formik>
        </Container>
      </section>
    </>
  );
};

export default ContactsForm;
