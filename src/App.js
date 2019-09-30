import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import ProductsList from "./Components/ProductsList/ProductsList";
import "./App.css";
import Catalogue from "./Components/Catalogue/Catalogue";

class App extends Component {
  state = {
    searchedString: "",
    catalogue: [
      { name: "cameras", id: "1" },
      { name: "microphones", id: "2" },
      { name: "lights", id: "3" }
    ]
  };

  onSearch = searchedString => {
    this.setState({ searchedString });
  };

  render() {
    return (
      <div className="App">
        <Navbar onSearch={this.onSearch}></Navbar>
        <div>
          <Catalogue catalogue={this.state.catalogue}></Catalogue>

          <Switch>
            <Route
              path="/products/:name"
              render={props => (
                <ProductsList
                  {...props}
                  searchedString={this.state.searchedString}
                />
              )}
            />
            <Route path="/" exact component={HomePage}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
