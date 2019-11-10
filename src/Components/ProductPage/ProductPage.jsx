import React, { Component } from "react";
import { getProductInfo } from "../../Actions/products";
import { addToShoppingCart } from "../../Actions/shoppingCart";
import { connect } from "react-redux";
import AddToShopCartBtn from "../Common/AddToShopCartBtn.jsx";
import "./ProductPage.scss";

class ProductPage extends Component {
  componentDidMount() {
    this.props.onGetProductInfo(this.props.match.params.id);
  }

  render() {
    const { product, onAddToShoppingCart } = this.props;
    return (
      <div className="product-page">
        <h1 className="product-page__name">{product.name}</h1>
        <h2 className="product-page__id">id: {product.id}</h2>
        <iframe
          className="product-page__iframe"
          src="https://www.youtube.com/embed/hmOZEAgXE3U"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
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
