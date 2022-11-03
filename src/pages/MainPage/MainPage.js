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
          content="A main page of the tiny coffee shop for those who like and dont imagine thir life without a cup of cappuccino or espresso"
        />
        <title>Coffee shop</title>
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
