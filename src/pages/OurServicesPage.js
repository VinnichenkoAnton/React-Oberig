import ReactDOM from 'react-dom';
// import { Helmet } from 'react-helmet';

import Header from '../components/Header/Header';
import ContactUs from '../components/ContactUs/ContactUs';
import Slider from '../components/Slider/Slider';
import Tabs from '../components/Tabs/Tabs';
import Footer from '../components/Footer/Footer';

import { sliderImages } from '../data/data';

const AboutCompanyPage = () => {
  return (
    <>
      {/* <Helmet>
        <meta
          name="description"
          content="A main page of the tiny coffee shop for those who like and dont imagine thir life without a cup of cappuccino or espresso"
        />
        <title>Coffee shop</title>
      </Helmet> */}
      {ReactDOM.createPortal(<ContactUs />, document.getElementById('userform'))}
      <Header />
      <Slider controls={true} sliderContent={sliderImages} />
      <Tabs />
      <Footer />
    </>
  );
};

export default AboutCompanyPage;
