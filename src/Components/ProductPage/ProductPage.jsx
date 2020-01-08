import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import "./ProductPage.scss";

class ProductPage extends Component {
  render() {
    const { product, match } = this.props;

    const REALproduct = product
      ? product.find(product => product.id === match.params.productId)
      : null;

    /* ^^^^ THIS HAS TO BA CHANGED ^^^^ */

    return (
      <div className="product-page">
        {REALproduct && <h1>{REALproduct.name}</h1>}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    product:
      state.firestore.ordered[
        `categories/${ownProps.match.params.categoryId}/items`
      ]
  };
};

export default compose(
  firestoreConnect(props => [
    { collection: `categories/${props.match.params.categoryId}/items` }
  ]),
  /* ^^^^ THIS HAS TO BA CHANGED ^^^^ */

  connect(mapStateToProps)
)(ProductPage);
