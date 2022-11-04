// import { Helmet } from 'react-helmet';

import Portal from '../../components/Portal/Portal';
import Header from '../../layouts/Header/Header';
import ContactUs from '../../components/ContactUs/ContactUs';
import Slider from '../../components/Slider/Slider';
import Tabs from '../../components/Tabs/Tabs';
import HowToInstall from './sections/HowToInstall/HowToInstall';
import Footer from '../../layouts/Footer/Footer';

import { sliderImagesList } from '../../data/data';

const AboutCompanyPage = () => {
  return (
    <>
      {/* <Helmet>
        <meta
          name="description"
          content="Cторінка Наші Послуги сайту Оберіг. Оберіг - охоронная компанія для фізичних осіб та організацій в с.Гатне"
        />
        <title>Оберіг</title>
      </Helmet> */}
      <Portal children={<ContactUs />} portalId="userform" />
      <Header />
      <Slider controls={true} sliderContent={sliderImagesList} />
      <Tabs />
      <HowToInstall />
      <Footer />
    </>
  );
};

export default AboutCompanyPage;
