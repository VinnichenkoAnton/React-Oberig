// import { Helmet } from 'react-helmet';

import Portal from '../../components/Portal/Portal';
import Header from '../../layouts/Header/Header';
import Slider from '../../components/Slider/Slider';
import NumericInfo from './sections/NumericInfo/NumericInfo';
import ContactUs from '../../components/ContactUs/ContactUs';
import Tabs from '../../components/Tabs/Tabs';
import Advantages from './sections/Advantages/Advantages';
import Footer from '../../layouts/Footer/Footer';

import { sliderImagesList } from '../../data/data';

const MainPage = () => {
  return (
    <>
      {/* <Helmet>
        <meta
          name="description"
          content="Головна сторінка сайту Оберіг. Оберіг - охоронная компанія для фізичних осіб та організацій в с.Гатне"
        />
        <title>Оберіг</title>
      </Helmet> */}
      <Portal children={<ContactUs />} portalId="userform" />
      <Header />
      <Slider controls={true} sliderContent={sliderImagesList} />
      <NumericInfo />
      <Tabs />
      <Advantages />
      <Footer />
    </>
  );
};

export default MainPage;
