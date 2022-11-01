// import { Helmet } from 'react-helmet';

import Portal from '../../components/UI/Portal/Portal';
import ContactUs from '../../components/ContactUs/ContactUs';
import Header from '../../layouts/Header/Header';
import Slider from '../../components/Slider/Slider';
import Location from './/sections/Location/Location';
import CallUs from './sections/CallUs/CallUs';
import ContactsForm from './ContactsForm/ContactsForm';
import Footer from '../../layouts/Footer/Footer';

import { sliderImagesList } from '../../data/data';

const ContactsPage = () => {
  return (
    <>
      {/* <Helmet>
        <meta
          name="description"
          content="A main page of the tiny coffee shop for those who like and dont imagine thir life without a cup of cappuccino or espresso"
        />
        <title>Coffee shop</title>
      </Helmet> */}
      <Portal children={<ContactUs />} portalId="userform" />
      <Header />
      <Slider controls={true} sliderContent={sliderImagesList} />
      <Location />
      <CallUs />
      <ContactsForm />
      <Footer />
    </>
  );
};

export default ContactsPage;
