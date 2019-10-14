import React from "react";
import { Link } from "react-router-dom";
import Search from "../SearchBar/SearchBar";
import "./Navbar.scss";

const Navbar = props => {
  return (
    <div className="navbar">
      <Search history={props.history}></Search>
      <div className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/shoppingcart">Shopping cart</Link>
        <Link to="/add-item">Add new item</Link>
      </div>
    </div>
  );
};

export default Navbar;
