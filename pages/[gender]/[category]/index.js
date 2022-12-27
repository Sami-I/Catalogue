import React from "react";
import { Product, FooterBanner, HeroBanner } from "../../../components";
import { client, urlFor } from "../../../lib/client";

const GenderCategory = ({ products, bannerData, gender, category }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {console.log(bannerData)}
      <div className="products-heading">
        <h2>{gender}</h2>
        <h2>{category}</h2>
        <p>All styles</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async ({ params: { gender, category } }) => {
  console.log(gender);
  //Grab all of the products from the Sanity dashboard
  const query = `*[_type == "product" && gender == '${gender}' && category == '${category}']`;
  const products = await client.fetch(query);

  //Grab banner data from the Sanity dashboard
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData, gender, category },
  };
};

export default GenderCategory;
