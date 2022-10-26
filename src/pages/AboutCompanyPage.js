import ReactDOM from 'react-dom';
// import { Helmet } from 'react-helmet';

import Header from '../components/Header/Header';

import ContactUs from '../components/ContactUs/ContactUs';
import OurTeam from '../components/OurTeam/OurTeam';
import Footer from '../components/Footer/Footer';
import OurHistory from '../components/OurHistory/OurHistory';
import Reviews from '../components/Reviews/Reviews';
import Slider from '../components/Slider/Slider';

import { sliderImages } from '../mocks/mocksData';

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
      <OurTeam />
      <OurHistory />
      <Reviews />
      <Slider sliderContent={sliderImages} />
      <Footer />
    </>
  );
};

export default AboutCompanyPage;
