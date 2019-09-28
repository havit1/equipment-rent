import React, { Component } from "react";
import Catalogue from "../Catalogue/Catalogue";

class HomePage extends Component {
  state = {
    catalogue: [
      { name: "cameras", id: "1" },
      { name: "microphones", id: "2" },
      { name: "lights", id: "3" }
    ]
  };
  render() {
    return (
      <h1>
        <Catalogue catalogue={this.state.catalogue}></Catalogue>
      </h1>
    );
  }
}

export default HomePage;
