import React from "react";
import { connect } from "react-redux";
import cardGenerator from "../Common/cardGenerator";

import "./ProductsList.scss";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class ProductsList extends cardGenerator {
  render() {
    const { productsList, match } = this.props;
    return (
      <div className="product-list">
        <div className="product-list__wrapper">
          {productsList &&
            productsList.map(product => (
              <div className="item-card" key={product.id}>
                {this.renderCard(
                  product,
                  match.params.categoryName,
                  match.params.categoryId,
                  true,
                  true,
                  "product-list__element"
                )}
              </div>
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  if (state.firestore.status) {
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
