import React from "react";
import { Product, FooterBanner, HeroBanner } from "../../../components";
import { client, urlFor } from "../../../lib/client";
import { capitalize } from "../../../lib/helpers";

const GenderCategory = ({
  products,
  bannerData,
  genderValue,
  genderCategory,
}) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {products.length === 0 ? (
        <div className="products-heading">
          <h2>ERROR</h2>
        </div>
      ) : (
        <div>
          <div className="products-heading">
            <h2>{capitalize(genderValue)}</h2>
            <h2>{capitalize(genderCategory)}</h2>
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

export const getServerSideProps = async ({
  params: { genderValue, genderCategory },
}) => {
  console.log(genderValue);
  //Grab all of the products from the Sanity dashboard
  const query = `*[_type == "product" && gender == '${genderValue}' && category == '${genderCategory}']`;
  const products = await client.fetch(query);

  //Grab banner data from the Sanity dashboard
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData, genderValue, genderCategory },
  };
};

export default GenderCategory;
