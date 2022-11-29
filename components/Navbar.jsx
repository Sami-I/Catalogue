import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Clobber</Link>
      </p>
    </div>
  );
};

export default Navbar;
