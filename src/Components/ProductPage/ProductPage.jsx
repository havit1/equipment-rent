import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { fetchSaveItem } from "../../Actions/usersSavedProductsAction";
import "./ProductPage.scss";

class ProductPage extends Component {
  render() {
    const { product, match, handleSave } = this.props;

    const REALproduct = product
      ? product.find(product => product.id === match.params.productId)
      : null;

    /* ^^^^ THIS HAS TO BA CHANGED ^^^^ */

    return (
      <div>
        <div className="product-page">
          {REALproduct && <h1>{REALproduct.name}</h1>}
        </div>
        <button onClick={() => handleSave(REALproduct)}>
          Save this product
        </button>
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

const mapDispatchToProps = dispatch => {
  return {
    handleSave: item => {
      dispatch(fetchSaveItem(item));
    }
  };
};

export default compose(
  firestoreConnect(props => [
    { collection: `categories/${props.match.params.categoryId}/items` }
  ]),
  /* ^^^^ THIS HAS TO BA CHANGED ^^^^ */

  connect(mapStateToProps, mapDispatchToProps)
)(ProductPage);
