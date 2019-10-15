import React, { Component } from "react";
import Catalogue from "../Catalogue/Catalogue";
import "./HomePage.scss";

class HomePage extends Component {
  render() {
    return (
      <div className="homePage__wrapper">
        <Catalogue></Catalogue>
      </div>
    );
  }
}

export default HomePage;
