import React from "react";
import Navbar from "./Navbar/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </div>
    </div>
  );
}

export default App;
