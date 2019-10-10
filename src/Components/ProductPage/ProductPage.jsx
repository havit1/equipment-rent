import React, { Component } from "react";
import { getProductInfo } from "../../Actions/products";
import { addToShoppingCart } from "../../Actions/shoppingCart";
import { connect } from "react-redux";
import AddToShopCartBtn from "../Common/AddToShopCartBtn.jsx";

class ProductPage extends Component {
  componentDidMount() {
    this.props.onGetProductInfo(this.props.match.params.id);
  }

  render() {
    const { product, onAddToShoppingCart } = this.props;
    return (
      <div>
        <h1>{product.name}</h1>
        <h2>{product.id}</h2>
        <AddToShopCartBtn
          id={product.id}
          onAddToShoppingCart={onAddToShoppingCart}
        ></AddToShopCartBtn>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({
    onGetProductInfo: id => {
      dispatch(getProductInfo(id));
    },
    onAddToShoppingCart: id => {
      dispatch(addToShoppingCart(id));
    }
  })
)(ProductPage);
