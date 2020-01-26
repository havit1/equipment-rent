import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import Search from "../SearchBar/SearchBar";
import { useSelector } from "react-redux";

import "./Navbar.scss";

const Navbar = props => {
  const [burgerState, setBurgerState] = useState(false);
  const signedIn = useSelector(state => state.firebase.auth.uid);
  const userInfo = useSelector(state => state.firebase.profile);

  const updateBurgerState = () => {
    const state = !burgerState;
    setBurgerState(state);
  };

  const getClass = initialClass => {
    return burgerState ? `${initialClass} open` : `${initialClass}`;
  };

  return (
    <React.Fragment>
      <div onClick={updateBurgerState} className="navbar-btn">
        <span className={getClass("navbar-btn__burger")}></span>
      </div>
      <nav className={getClass("navbar")}>
        {/* <Search history={props.history}></Search> */}
        <ul onClick={updateBurgerState} className={getClass("navbar__links")}>
          <li className={getClass("navbar__links-link")}>
            <NavLink activeClassName="activeNavLink" exact to="/">
              Home
            </NavLink>
          </li>
          <li className={getClass("navbar__links-link")}>
            <NavLink activeClassName="activeNavLink" to="/saved-products">
              Bookmarked items
            </NavLink>
          </li>

          <li className={getClass("navbar__links-link")}>
            <NavLink activeClassName="activeNavLink" to="/item-configuration">
              Add new item
            </NavLink>
          </li>

          {!signedIn ? (
            <React.Fragment>
              <li className={getClass("navbar__links-link")}>
                <NavLink activeClassName="activeNavLink" to="/login">
                  Login
                </NavLink>
              </li>
              <li className={getClass("navbar__links-link")}>
                <NavLink activeClassName="activeNavLink" to="/register">
                  Register
                </NavLink>
              </li>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <li className={getClass("navbar__links-link")}>
                <NavLink activeClassName="activeNavLink" to="/logout">
                  Logout
                </NavLink>
              </li>

              {userInfo.initials ? (
                <li className={getClass("navbar__links-link")}>
                  <NavLink activeClassName="activeNavLink" to="/profile">
                    {userInfo.initials}
                  </NavLink>
                </li>
              ) : null}
            </React.Fragment>
          )}
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
