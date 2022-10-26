import ReactDOM from 'react-dom';
// import { Helmet } from 'react-helmet';

import Header from '../components/Header/Header';
import Slider from '../components/Slider/Slider';
import NumericInfo from '../components/NumericInfo/NumericInfo';
import ContactUs from '../components/ContactUs/ContactUs';
import Tabs from '../components/Tabs/Tabs';
import Advantages from '../components/Advantages/Advantages';
import Footer from '../components/Footer/Footer';

import { sliderImages } from '../mocks/mocksData';

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
      {ReactDOM.createPortal(<ContactUs />, document.getElementById('userform'))}
      <Header />
      <Slider sliderContent={sliderImages} />
      <NumericInfo />
      <Tabs />
      <Advantages />
      <Footer />
    </>
  );
};

export default MainPage;
