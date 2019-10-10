import React from "react";
import { Link } from "react-router-dom";
import Search from "../SearchBar/SearchBar";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <Search></Search>
      <div className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/shoppingcart">Shopping cart</Link>
      </div>
    </div>
  );
};

export default Navbar;
