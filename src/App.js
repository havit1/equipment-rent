import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import ProductsList from "./Components/ProductsList/ProductsList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div>
        <Switch>
          <Route path="/products/:name" component={ProductsList} />
          <Route path="/" exact component={HomePage}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
