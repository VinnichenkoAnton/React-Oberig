import ReactDOM from 'react-dom';
// import { Helmet } from 'react-helmet';

import Header from '../components/Header/Header';
import Container from '../components/UI/Container/Container';
import Title from '../components/Title/Title';
import ContactUs from '../components/ContactUs/ContactUs';
import Footer from '../components/Footer/Footer';

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
      <Container>
        <Title text="Наша команда" />
      </Container>
      <Footer />
    </>
  );
};

export default AboutCompanyPage;
