import React from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { firestoreConnect } from 'react-redux-firebase';

import cardGenerator from '../Common/cardGenerator';

import { storage } from '../../config/fbConfig';

import './ProductsList.scss';

class ProductsList extends cardGenerator {
  render() {
    document.title = 'List of products';
    const { productsList, match } = this.props;

    return (
      <section className={`product-list ${match.params.categoryName}`}>
        <ul className='product-list__items'>
          {productsList &&
            productsList.map((product) => (
              <li className='product-list__items-item' key={product.id}>
                {this.renderCard(product, match.params.categoryName, match.params.categoryId, true, 'product-card')}
              </li>
            ))}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    productsList: state.firestore.ordered[`categories/${ownProps.match.params.categoryId}/items`],
  };
};

export default compose(
  firestoreConnect((props) => [{ collection: `categories/${props.match.params.categoryId}/items` }]),
  connect(mapStateToProps)
)(ProductsList);
