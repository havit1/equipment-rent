import React, { Component } from "react";
import { fetchConcreteProduct } from "../../Actions/concreteProduct";
import { connect } from "react-redux";
import {
  addToShoppingCart,
  removeFromShoppingCart
} from "../../Actions/shoppingCart";
import AddToShopCartBtn from "../Common/AddToShopCartBtn.jsx";
import "./ProductPage.scss";

class ProductPage extends Component {
  componentDidMount() {
    this.props.fetchProduct(
      this.props.match.params.id,
      this.props.match.params.name
    );
  }

  render() {
    const { product, onAddToShoppingCart } = this.props;
    console.log(product);
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
          {/* <AddToShopCartBtn
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
          ></AddToShopCartBtn> */}
          {/* {this.props.shoppingCartIds.find(
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
          ) : null} */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.product.product
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProduct: (productId, category) =>
      dispatch(fetchConcreteProduct(productId, category)),
    onAddToShoppingCart: id => {
      dispatch(addToShoppingCart(id));
    },
    onRemoveFromShoppingCart: id => {
      dispatch(removeFromShoppingCart(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
