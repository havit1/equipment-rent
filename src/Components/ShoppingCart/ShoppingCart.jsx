import React, { Component } from "react";
import { Link } from "react-router-dom";
import { loadItems } from "../../Actions/shoppingCart";
import { connect } from "react-redux";
import cardGenerator from "../Common/cardGenerator";
import "./ShoppingCart.scss";

class ShoppingCart extends cardGenerator {
  componentDidMount() {
    this.props.onLoadItems(this.props.shoppingCartIds);
  }

  render() {
    const { shoppingCartInfo } = this.props;
    return (
      <div className="shopping-cart">
        {shoppingCartInfo.map(product => (
          <div key={product.id} className="item-card">
            {this.renderCard(product, true, true, "shopping-cart__element")}
          </div>
        ))}
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({
    onLoadItems: ids => {
      dispatch(loadItems(ids));
    }
  })
)(ShoppingCart);
