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

  async componentDidUpdate() {
    if (this.props.match.params.name !== this.state.allProducts[0].category) {
      // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
      const allProducts = await this.getProducts(this.props.match.params.name);
      this.setState({ allProducts });
    }
  }

  getProducts(productCategory, updateState) {
    return new Promise((resolve, reject) => {
      const products = productsList.filter(c => c.category === productCategory);
      if (products) resolve(products);
    });
  }

  render() {
    const { allProducts } = this.state;
    const { searchedString } = this.props;

    const searchedProduct = searchedString
      ? searchedString => {
          allProducts.filter(g => g.category === searchedString);
        }
      : allProducts;

    return (
      <div>
        <ol>
          {searchedProduct.map(product => (
            <li>{product.name}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ProductsList;
