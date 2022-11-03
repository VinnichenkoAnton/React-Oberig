import { useState } from 'react';

import ContactUsForm from './ContactUsForm/ContactUsForm';

import classes from './ContactUs.module.scss';

import { ReactComponent as Chat } from '../../resources/contactUs/chat.svg';
import { ReactComponent as Close } from '../../resources/contactUs/close.svg';

const ContactUs = () => {
  const [openForm, setOpenForm] = useState(false);
  const clickHandler = () => {
    setOpenForm((prevState) => !prevState);
  };
  return (
    <section className={classes.contactus}>
      {openForm && <ContactUsForm />}
      <button type="button" className={classes.contactus__btn} onClick={clickHandler}>
        {openForm ? (
          <Close className={classes.contactus__icn} />
        ) : (
          <Chat className={classes.contactus__icn} />
        )}
      </button>
    </section>
  );
};

export default ContactUs;
