// import { Helmet } from 'react-helmet';

import Header from '../../layouts/Header/Header';
import Slider from '../../components/Slider/Slider';
import ContactsInfo from './sections/ContactsInfo/ContactsInfo';
import ContactsForm from './sections/ContactsForm/ContactsForm';
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
      <Header />
      <Slider controls={true} sliderContent={sliderImagesList} />
      <ContactsInfo />
      <ContactsForm />
      <Footer />
    </>
  );
};

export default ContactsPage;
