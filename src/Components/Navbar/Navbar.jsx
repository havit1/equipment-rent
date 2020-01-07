import React from "react";
import { Link } from "react-router-dom";
import Search from "../SearchBar/SearchBar";
import { useSelector } from "react-redux";

import "./Navbar.scss";

const Navbar = props => {
  const signedIn = useSelector(state => state.firebase.auth.uid);
  const userInfo = useSelector(state => state.firebase.profile);
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

        {!signedIn ? (
          <React.Fragment>
            <Link className="navbar__links_link" to="/login">
              Login
            </Link>
            <Link className="navbar__links_link" to="/register">
              Register
            </Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link className="navbar__links_link" to="/logout">
              Logout
            </Link>
            {userInfo.initials ? (
              <Link className="navbar__links_link" to="/logout">
                {userInfo.initials}
              </Link>
            ) : null}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Navbar;
