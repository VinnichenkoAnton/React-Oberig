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
          content="Сторінка контактів сайту компанії Оберіг. Оберіг - охоронная компанія для фізичних осіб та організацій в с.Гатне"
        />
        <title>Оберіг</title>
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
