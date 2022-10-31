import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// import { Helmet } from 'react-helmet';

import Header from '../components/Header/Header';
import GoBack from '../components/GoBack/GoBack';
import SingleProduct from '../components/SingleProduct/SingleProduct';
import Portal from '../components/UI/Portal/Portal';
import ContactUs from '../components/ContactUs/ContactUs';
import Footer from '../components/Footer/Footer';

import { firstTabList } from '../data/data';
import { secondTabList } from '../data/data';

const SingleProductPage = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const jointTabLists = [...firstTabList, ...secondTabList];
    const filteredList = jointTabLists.filter((item) => item.id === id);
    setSingleProduct(filteredList[0]);
  }, [id]);

  return (
    <>
      {/* <Helmet>
        <meta
          name="description"
          content={`Here you get the description of ${infoForProduct.name}`}
        />
        <title>{`${infoForProduct.name}`}</title>
      </Helmet> */}

      <Header screen="second" title="Our Coffee" />
      <GoBack />

      {singleProduct ? (
        <SingleProduct
          key={singleProduct.id}
          img={singleProduct.img}
          title={singleProduct.title}
          description={singleProduct.description}
          monthprice={singleProduct.monthprice}
          eqvprice={singleProduct.eqvprice}
        />
      ) : null}
      <Portal children={<ContactUs />} portalId="userform" />

      <Footer />
    </>
  );
};

export default SingleProductPage;
