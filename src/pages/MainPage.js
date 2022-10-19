import ReactDOM from 'react-dom';
// import { Helmet } from 'react-helmet';

import Header from '../components/header/Header';
import Slider from '../components/slider/Slider';
import NumericInfo from '../components/numericInfo/NumericInfo';
import ContactUs from '../components/contactUs/ContactUs';
import Tabs from '../components/tabs/Tabs';

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
      <Slider />
      <NumericInfo />
      <Tabs />
    </>
  );
};

export default MainPage;
