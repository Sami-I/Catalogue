import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image,
  },
}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <p>{largeText1}</p>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
        <img src={urlFor(image)} className="footer-banner-image"></img>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  //Grab banner data from the Sanity dashboard
  const bannerQuery = '*[_type == "banner"]';
  const footerBanner = await client.fetch(bannerQuery);

  return {
    props: { footerBanner },
  };
};

export default FooterBanner;
