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
    const { catalogue } = this.state;
    return (
      <div>
        <h1>Home page</h1>
        <Catalogue catalogue={catalogue}></Catalogue>
      </div>
    );
  }
}

export default HomePage;
