import React, { Component } from "react";
import productsList from "../productsList.json";
import AddToShopCartBtn from "../Common/AddToShopCartBtn.jsx";

class ProductPage extends Component {
  state = {
    product: {}
  };

  async componentDidMount() {
    const product = await this.getProducts(this.props.match.params.id);
    this.setState({ product });
  }

  getProducts(productId) {
    return new Promise((resolve, reject) => {
      const product = productsList.find(({ id }) => id === productId);
      if (product) resolve(product);
    });
  }

  render() {
    const { product } = this.state;
    const { onAddItemInCart } = this.props;
    return (
      <div>
        <h1>{product.name}</h1>
        <h2>{product.id}</h2>
        <AddToShopCartBtn
          id={product.id}
          onAddItemInCart={onAddItemInCart}
        ></AddToShopCartBtn>
      </div>
    );
  }
}

export default ProductPage;
