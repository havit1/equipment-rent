import React, { Component } from "react";
import { Link } from "react-router-dom";
import productsList from "../productsList.json";

class ShoppingCart extends Component {
  state = {
    goods: []
  };

  async componentDidMount() {
    let goods = [];

    for (let item of this.props.items) {
      const product = await this.getTheGood(item);
      goods.push(product);
    }

    this.setState({ goods });
  }

  getTheGood(productId) {
    return new Promise((resolve, reject) => {
      const product = productsList.find(({ id }) => id === productId);
      if (product) resolve(product);
      if (!product) reject("ERROR!!!");
    });
  }

  render() {
    return (
      <div>
        <h1>Your shopping cart</h1>
        {this.state.goods.length > 0 ? (
          <ul>
            {this.state.goods.map(item => (
              <Link to={`/products/${item.category}/${item.id}`}>
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>
        ) : (
          <h1>No items in shopping cart</h1>
        )}
      </div>
    );
  }
}

export default ShoppingCart;
