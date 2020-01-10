import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { fetchSaveItem } from "../../Actions/saveDeleteProductAction";
import { removeItemAction } from "../../Actions/removeItemAction";
import { Link } from "react-router-dom";
import "./ProductPage.scss";

class ProductPage extends Component {
  render() {
    const { product, match, handleSave, uid, handleRemoveItem } = this.props;

    const REALproduct = product
      ? product.find(product => product.id === match.params.productId)
      : null;
    /* ^^^^ THIS HAS TO BA CHANGED ^^^^ */

    return (
      <div>
        <div className="product-page">
          {REALproduct && <h1>{REALproduct.name}</h1>}
        </div>
        {REALproduct && uid === REALproduct.ownerId ? (
          <React.Fragment>
            <Link to={`/item-configuration`}>
              <button>Edit</button>
            </Link>
            <Link to="/">
              <button
                onClick={() => {
                  handleRemoveItem(REALproduct);
                }}
              >
                Remove this product
              </button>
            </Link>
          </React.Fragment>
        ) : null}
        <button onClick={() => handleSave(REALproduct)}>
          Bookmark this product
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    product:
      state.firestore.ordered[
        `categories/${ownProps.match.params.categoryId}/items`
      ],
    uid: state.firebase.auth.uid
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSave: item => {
      dispatch(fetchSaveItem(item));
    },
    handleRemoveItem: item => dispatch(removeItemAction(item))
  };
};

export default compose(
  firestoreConnect(props => [
    { collection: `categories/${props.match.params.categoryId}/items` }
  ]),
  /* ^^^^ THIS HAS TO BA CHANGED ^^^^ */

  connect(mapStateToProps, mapDispatchToProps)
)(ProductPage);
