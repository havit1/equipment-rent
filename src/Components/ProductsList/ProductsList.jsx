import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import cardGenerator from "../Common/cardGenerator";
import "./ProductsList.scss";

class ProductsList extends cardGenerator {
  render() {
    const { productsList, match } = this.props;

    return (
      <section className={`product-list ${match.params.categoryName}`}>
        <div className="product-list__items">
          {productsList &&
            productsList.map(product => (
              <div className="product-list__items-item" key={product.id}>
                {this.renderCard(
                  product,
                  match.params.categoryName,
                  match.params.categoryId,
                  true,
                  "product-card"
                )}
              </div>
            ))}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    productsList:
      state.firestore.ordered[
        `categories/${ownProps.match.params.categoryId}/items`
      ]
  };
};

export default compose(
  firestoreConnect(props => [
    { collection: `categories/${props.match.params.categoryId}/items` }
  ]),
  connect(mapStateToProps)
)(ProductsList);
