import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import ProductsList from "./Components/ProductsList/ProductsList";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import ProductPage from "./Components/ProductPage/ProductPage";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import SearchPage from "./Components/SearchPage/SearchPage";
import ItemConfigPage from "./Components/ItemConfigPage/ItemConfigPage";
import LoginPage from "./Components/AuthPages/LoginPage";
import LogoutPage from "./Components/AuthPages/LogoutPage";
import ProtectedRoute from "./Components/Common/protectedRoute";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import RegisterPage from "./Components/AuthPages/RegisterPage";

const App = props => {
  return (
    <div className="page-container">
      <Navbar history={props}></Navbar>
      <div className="main-content">
        <Switch>
          {/* /login is protected route, but inside the component */}
          <Route path="/login" exact component={LoginPage} />
          {/* /register is protected route, but inside the component */}
          <Route path="/register" exact component={RegisterPage} />
          <ProtectedRoute path="/logout" exact component={LogoutPage} />
          <ProtectedRoute
            path="/item-configuration"
            exact
            component={ItemConfigPage}
          />
          <ProtectedRoute path="/shoppingcart" exact component={ShoppingCart} />
          <Route path="/search/:name" component={SearchPage} />
          <Route
            path="/:categoryName/:categoryId/:productId"
            component={ProductPage}
          ></Route>
          <Route path="/:categoryName/:categoryId" component={ProductsList} />
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/404" component={ErrorPage} />
          <Redirect to="/404" />
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(App);
