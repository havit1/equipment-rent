import React, { Component } from "react";
import Catalogue from "../Catalogue/Catalogue";

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Home page</h1>
        <Catalogue></Catalogue>
      </div>
    );
  }
}

export default HomePage;
