import React, { Component } from "react";
import Catalogue from "../Catalogue/Catalogue";
import "./HomePage.scss";

class HomePage extends Component {
  render() {
    document.title = "Home";
    return (
      <div className="home-page">
        <Catalogue></Catalogue>
      </div>
    );
  }
}

export default HomePage;
