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
    document.title = "Product page";
    const { product, match, handleSave, uid, handleRemoveItem } = this.props;

    const REALproduct = product
      ? product.find(product => product.id === match.params.productId)
      : null;
    /* ^^^^ THIS HAS TO BA CHANGED ^^^^ */

    return (
      <section className="product-page">
        {REALproduct && (
          <div className="product-page__wrapper">
            <div className="product-page__image">Cool image</div>
            <div className="product-page__info">
              <h1 className="product-page__info-name">{REALproduct.name}</h1>
              {uid === REALproduct.ownerId ? (
                <div className="product-page__owner-options">
                  <Link
                    className="product-page__link"
                    to={`/item-configuration`}
                  >
                    <button className="product-page__button">Edit</button>
                  </Link>
                  <Link className="product-page__link" to="/">
                    <button
                      className="product-page__button"
                      onClick={() => {
                        handleRemoveItem(REALproduct);
                      }}
                    >
                      Remove this product
                    </button>
                  </Link>
                </div>
              ) : null}
              <h3 className="product-page__info-price">{REALproduct.price}$</h3>
              <p className="product-page__info-description">
                {REALproduct.description}
              </p>
              <div className="product-page__owner">
                <h3 className="product-page__owner-name">
                  Owner: {REALproduct.ownerFirstName}{" "}
                  {REALproduct.ownerLastName}
                </h3>
                <h3 className="product-page__owner-email">
                  Email: {REALproduct.ownerEmailAddress}
                </h3>
                <h3 className="product-page__owner-number">
                  Phone Number: {REALproduct.ownerPhoneNumber}
                </h3>
              </div>
              <button
                onClick={() => handleSave(REALproduct)}
                className="product-page__button"
              >
                Bookmark this product
              </button>
            </div>
          </div>
        )}
      </section>
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
