import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import { fetchSaveItem } from '../../Actions/saveDeleteProductAction';
import { removeItemAction } from '../../Actions/removeItemAction';

import defaultImage from '../../assets/images/default-image.jpg';

import './ProductPage.scss';

class ProductPage extends Component {
  render() {
    document.title = 'Product page';
    const { product, handleSave, uid, handleRemoveItem } = this.props;

    return (
      <section className={`product-page`}>
        {product && product.length > 0 ? (
          <>
            <div className={`product-page__background-image ${product[0].category.categoryName}`} />

            <div className='product-page__wrapper'>
              <div className='product-page__image-wrapper'>
                {product[0].displayImageUrl ? (
                  <img className='product-page__image' alt='Product' src={`${product[0].displayImageUrl}`} />
                ) : (
                  <img className='product-page__image' alt='Product' src={`${defaultImage}`} />
                )}
              </div>

              <div className='product-page__info'>
                <h1 className='product-page__info-name'>{product[0].name}</h1>
                {uid === product[0].ownerId ? (
                  <div className='product-page__owner-options'>
                    <Link className='product-page__link' to={`/item-configuration`}>
                      <button className='product-page__button' disabled>
                        Edit
                      </button>
                    </Link>
                    <Link className='product-page__link' to='/'>
                      <button
                        className='product-page__button'
                        onClick={() => {
                          handleRemoveItem(product[0]);
                        }}
                      >
                        Remove this product
                      </button>
                    </Link>
                  </div>
                ) : null}
                <h3 className='product-page__info-price'>Price (for a one day): {product[0].price}$</h3>
                <p className='product-page__info-description'>{product[0].description}</p>
                <div className='product-page__owner'>
                  <h3 className='product-page__owner-name'>
                    Owner: {product[0].ownerFirstName} {product[0].ownerLastName}
                  </h3>
                  <h3 className='product-page__owner-email'>Email: {product[0].ownerEmailAddress}</h3>
                  <h3 className='product-page__owner-number'>Phone Number: {product[0].ownerPhoneNumber}</h3>
                </div>
                {product[0].youtubeLink && (
                  <iframe
                    title='youtubeVideo'
                    width='560'
                    height='315'
                    src={`//www.youtube.com/embed/${product[0].youtubeLink}`}
                    frameBorder='0'
                    allowFullScreen
                  ></iframe>
                )}
                <button onClick={() => handleSave(product[0])} className='product-page__button'>
                  Bookmark this product
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className='product-page__background-image home-page-background'>
            <h1 className='product-page__wrapper-error'>This product is not available anymore</h1>
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.firestore.ordered[`categories/${ownProps.match.params.categoryId}/items`],
    uid: state.firebase.auth.uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSave: (item) => {
      dispatch(fetchSaveItem(item));
    },
    handleRemoveItem: (item) => dispatch(removeItemAction(item)),
  };
};

export default compose(
  firestoreConnect((props) => [
    {
      collection: `categories/${props.match.params.categoryId}/items`,
      doc: `${props.match.params.productId}`,
    },
  ]),
  connect(mapStateToProps, mapDispatchToProps)
)(ProductPage);
