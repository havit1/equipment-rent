import React, { Component } from "react";
import productsList from "../productsList.json";

class ProductsList extends Component {
  state = {
    allProducts: []
  };

  async componentDidMount() {
    const allProducts = await this.getProducts(this.props.match.params.name);
    this.setState({ allProducts });
  }

  getProducts(productCategory, updateState) {
    return new Promise((resolve, reject) => {
      const products = productsList.filter(c => c.category === productCategory);
      if (products) resolve(products);
    });
  }

  render() {
    return (
      <div>
        <ol>
          {this.state.allProducts.map(product => (
            <li>{product.name}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ProductsList;
