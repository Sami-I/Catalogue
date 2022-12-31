import React from "react";
import { useRouter } from "next/router";
import { Product, FooterBanner, HeroBanner } from "../../components";
import { client, urlFor } from "../../lib/client";
import { capitalize } from "../../lib/helpers";

const Category = ({ products, bannerData, category }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {console.log(category)}
      {console.log(products)}
      {products.length === 0 ? (
        <div className="products-heading">
          <h2>ERROR</h2>
        </div>
      ) : (
        <div>
          <div className="products-heading">
            <h2>{capitalize(category)}</h2>
            <p>Both genders</p>
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

export const getServerSideProps = async ({ params: { category } }) => {
  //Grab all of the products from the Sanity dashboard
  const query = `*[_type == "product" && category == "${category}"]`;
  const products = await client.fetch(query);

  //Grab banner data from the Sanity dashboard
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData, category },
  };
};

export default Category;
