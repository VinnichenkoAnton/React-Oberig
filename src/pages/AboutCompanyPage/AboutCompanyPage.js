// import { Helmet } from 'react-helmet';

import Portal from '../../components/Portal/Portal';
import Header from '../../layouts/Header/Header';
import ContactUs from '../../components/ContactUs/ContactUs';
import OurTeam from './sections/OurTeam/OurTeam';
import OurHistory from './sections/OurHistory/OurHistory';
import Reviews from './sections/Reviews/Reviews';
import Footer from '../../layouts/Footer/Footer';

const AboutCompanyPage = () => {
  return (
    <>
      {/* <Helmet>
        <meta
          name="description"
          content="Сторінка Про Компанію сайту Оберіг. Оберіг - охоронная компанія для фізичних осіб та організацій в с.Гатне"
        />
        <title>Оберіг</title>
      </Helmet> */}
      <Portal children={<ContactUs />} portalId="userform" />
      <Header />
      <OurTeam />
      <OurHistory />
      <Reviews />
      <Footer />
    </>
  );
};

export default AboutCompanyPage;
