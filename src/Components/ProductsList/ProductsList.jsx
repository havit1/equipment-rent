import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../Actions/products";
import cardGenerator from "../Common/cardGenerator";

import "./ProductsList.scss";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class ProductsList extends cardGenerator {
  render() {
    const { productsList } = this.props;

    return (
      //   productsList.loading ? (
      //   <h2>Loading</h2>
      // ) : productsList.error ? (
      //   <h2>{productsList.error}</h2>
      // ) : (
      <div className="product-list">
        <div className="product-list__wrapper">
          {productsList &&
            productsList.map(product => (
              <div className="item-card" key={product.id}>
                {this.renderCard(product, true, true, "product-list__element")}
              </div>
            ))}
        </div>
      </div>
    );
    // );
  }
}

const mapStateToProps = (state, ownProps) => {
  if (state.firestore.status) {
    console.log("I'M LOADING HERE", state.firestore.status);
  }
  return {
    productsList:
      state.firestore.ordered[
        `categories/${ownProps.match.params.categoryId}/items`
      ]
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => [
    { collection: `categories/${props.match.params.categoryId}/items` }
  ])
)(ProductsList);
