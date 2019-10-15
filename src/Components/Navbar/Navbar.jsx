import React from "react";
import { Link } from "react-router-dom";
import Search from "../SearchBar/SearchBar";
import "./Navbar.scss";

const Navbar = props => {
  return (
    <div className="navbar">
      <Search history={props.history}></Search>

      <div className="navbar__links">
        <Link className="navbar__links_link" to="/">
          Home
        </Link>
        <Link className="navbar__links_link" to="/shoppingcart">
          Shopping cart
        </Link>
        <Link className="navbar__links_link" to="/add-item">
          Add new item
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
