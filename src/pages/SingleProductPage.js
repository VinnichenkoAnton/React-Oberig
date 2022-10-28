import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

// import { Helmet } from 'react-helmet';

import Header from '../components/Header/Header';
import SingleProduct from '../components/SingleProduct/SingleProduct';
import Footer from '../components/Footer/Footer';

import { firstTabList } from '../data/data';

const SingleProductPage = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const filteredList = firstTabList.filter((item) => item.id === id);
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
      <Link
        style={{
          display: 'block',
          textAlign: 'center',
          color: '#3f3689',
          fontWeight: '400',
          fontSize: '24px',
          marginTop: '30px',
          textDecoration: 'underline',
        }}
        to="/services"
      >
        Повернутися на попередню сторінку
      </Link>
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

      <Footer />
    </>
  );
};

export default SingleProductPage;
