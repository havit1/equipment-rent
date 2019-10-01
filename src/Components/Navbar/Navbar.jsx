import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Search from "../Search/Search";

const Navbar = ({ onSearch }) => {
  return (
    <div className="navbar">
      <Search onSearch={onSearch}></Search>
      <Link to="/">Home</Link>
      <Link to="/shoppingcart">Shopping cart</Link>
    </div>
  );
};

export default Navbar;
