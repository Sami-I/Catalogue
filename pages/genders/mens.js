import React from "react";
import { useRouter } from "next/router";
import { Product, FooterBanner, HeroBanner } from "../../components";
import { client, urlFor } from "../../lib/client";
import { capitalize } from "../../lib/helpers";

const Mens = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {console.log(bannerData)}
      {products.length === 0 ? (
        <div className="products-heading">
          <h2>ERROR</h2>
        </div>
      ) : (
        <div>
          <div className="products-heading">
            <h2>Mens</h2>
            <p>All styles</p>
          </div>
          <div className="products-container">
            {products?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </div>
      )}
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  //Grab all of the products from the Sanity dashboard
  const query = `*[_type == "product" && gender == "mens"]`;
  const products = await client.fetch(query);

  //Grab banner data from the Sanity dashboard
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Mens;
