import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import ProductsList from "./Components/ProductsList/ProductsList";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import ProductPage from "./Components/ProductPage/ProductPage";
import "./App.css";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";

class App extends Component {
  state = {
    itemsInCart: []
  };

  onAddItemInCart = itemId => {
    const itemsInCart = [...this.state.itemsInCart];
    itemsInCart.push(itemId);
    this.setState({ itemsInCart });
  };

  render() {
    const { onAddItemInCart } = this;

    return (
      <div className="App">
        <Navbar onSearch={this.onSearch}></Navbar>
        <div>
          <Switch>
            <Route
              path="/shoppingcart"
              render={props => (
                <ShoppingCart {...props} items={this.state.itemsInCart} />
              )}
            />
            <Route
              path="/products/:name/:id"
              render={props => (
                <ProductPage
                  {...props}
                  onAddItemInCart={onAddItemInCart}
                ></ProductPage>
              )}
            ></Route>
            <Route
              path="/products/:name"
              render={props => (
                <ProductsList
                  {...props}
                  // searchedString={this.state.searchedString}
                />
              )}
            />
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/404" component={ErrorPage} />
            <Redirect to="/404" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
