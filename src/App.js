import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import ProductsList from "./Components/ProductsList/ProductsList";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import ProductPage from "./Components/ProductPage/ProductPage";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import "./App.scss";
import SearchPage from "./Components/SearchPage/SearchPage";

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <Navbar history={this.props.history}></Navbar>
        <div>
          <Switch>
            <Route path="/shoppingcart" component={ShoppingCart} />
            <Route path="/search/:name" component={SearchPage} />
            <Route path="/products/:name/:id" component={ProductPage}></Route>
            <Route path="/products/:name" component={ProductsList} />
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/404" component={ErrorPage} />
            <Redirect to="/404" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
