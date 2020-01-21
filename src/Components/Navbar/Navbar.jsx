import React from "react";
import { NavLink } from "react-router-dom";
// import Search from "../SearchBar/SearchBar";
import { useSelector } from "react-redux";

import "./Navbar.scss";

const Navbar = props => {
  const signedIn = useSelector(state => state.firebase.auth.uid);
  const userInfo = useSelector(state => state.firebase.profile);
  return (
    <nav className="navbar">
      {/* <Search history={props.history}></Search> */}
      <ul className="navbar__links">
        <li className="navbar__links-link">
          <NavLink activeClassName="activeNavLink" exact to="/">
            Home
          </NavLink>
        </li>
        <li className="navbar__links-link">
          <NavLink activeClassName="activeNavLink" to="/saved-products">
            Bookmarked items
          </NavLink>
        </li>

        <li className="navbar__links-link">
          <NavLink activeClassName="activeNavLink" to="/item-configuration">
            Add new item
          </NavLink>
        </li>

        {!signedIn ? (
          <React.Fragment>
            <li className="navbar__links-link">
              <NavLink activeClassName="activeNavLink" to="/login">
                Login
              </NavLink>
            </li>
            <li className="navbar__links-link">
              <NavLink activeClassName="activeNavLink" to="/register">
                Register
              </NavLink>
            </li>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <li className="navbar__links-link">
              <NavLink activeClassName="activeNavLink" to="/logout">
                Logout
              </NavLink>
            </li>

            {userInfo.initials ? (
              <li className="navbar__links-link">
                <NavLink activeClassName="activeNavLink" to="/profile">
                  {userInfo.initials}
                </NavLink>
              </li>
            ) : null}
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
