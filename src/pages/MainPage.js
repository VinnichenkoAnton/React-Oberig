// import { Helmet } from 'react-helmet';

import Header from '../components/header/Header';
import Slider from '../components/slider/Slider';
import NumericInfo from '../components/numericInfo/NumericInfo';
import ContactUs from '../components/contactUs/ContactUs';

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
      <Header />
      <Slider />
      <NumericInfo />
      <ContactUs />
    </>
  );
};

export default MainPage;
