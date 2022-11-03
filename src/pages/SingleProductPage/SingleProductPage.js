import { Helmet } from 'react-helmet';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../layouts/Header/Header';
import GoBack from '../../components/GoBack/GoBack';
import SingleProduct from './sections/SingleProduct/SingleProduct';
import Portal from '../../components/Portal/Portal';
import ContactUs from '../../components/ContactUs/ContactUs';
import Footer from '../../layouts/Footer/Footer';

import { firstTabList } from '../../data/data';
import { secondTabList } from '../../data/data';

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
      <Helmet>
        <meta
          name="description"
          content={`На цій сторінці ви можете більше дізнатися про нашу послугу ${singleProduct.title}`}
        />
        <title>{`Оберіг - ${singleProduct.title}`}</title>
      </Helmet>

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
