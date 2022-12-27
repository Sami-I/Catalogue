import React from "react";
import Head from "next/head";
import SiteNavbar from "./SiteNavbar";
import HeroBanner from "./HeroBanner";
import FooterBanner from "./FooterBanner";
import Footer from "./Footer";
import { client } from "../lib/client";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Catalogue</title>
      </Head>
      <header>
        <SiteNavbar></SiteNavbar>
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer>FOOTER</Footer>
      </footer>
    </div>
  );
};

export default Layout;
