import React, { Component } from "react";
import { getProductInfo } from "../../Actions/products";
import {
  addToShoppingCart,
  removeFromShoppingCart
} from "../../Actions/shoppingCart";
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
        {product.description ? <p>{product.description}</p> : null}
        {product.youtubeLink ? (
          <iframe
            className="product-page__iframe"
            src={product.youtubeLink}
            title={product.youtubeLink}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : null}
        <div className="buttons-wrapper">
          <AddToShopCartBtn
            className={
              this.props.shoppingCartIds.find(
                productId => this.props.product.id === productId
              )
                ? "add-button-done"
                : "add-button"
            }
            text={
              this.props.shoppingCartIds.find(
                productId => this.props.product.id === productId
              )
                ? "Already in shopping cart"
                : "Add item to shopping cart"
            }
            id={product.id}
            onAddToShoppingCart={onAddToShoppingCart}
          ></AddToShopCartBtn>
          {this.props.shoppingCartIds.find(
            productId => this.props.product.id === productId
          ) ? (
            <button
              className="button-remove"
              onClick={() =>
                this.props.onRemoveFromShoppingCart(this.props.product.id)
              }
            >
              X
            </button>
          ) : null}
        </div>
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
    },
    onRemoveFromShoppingCart: id => {
      dispatch(removeFromShoppingCart(id));
    }
  })
)(ProductPage);
