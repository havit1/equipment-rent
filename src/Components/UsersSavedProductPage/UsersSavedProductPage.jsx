import React from 'react';
import { connect } from 'react-redux';
import cardGenerator from '../Common/cardGenerator';
import { fetchSavedItems } from '../../Actions/usersSavedProductsAction';
import { fetchDeleteItem } from '../../Actions/saveDeleteProductAction';
import './UsersSavedProductPage.scss';

class ShoppingCart extends cardGenerator {
  componentDidMount() {
    document.title = 'Bookmarked items';
    this.props.onLoadSavedItems();
  }

  render() {
    const { savedItems } = this.props;

    return (
      <section className='shopping-cart home-page-background'>
        <ul className='shopping-cart__items'>
          {savedItems.items.length > 0 &&
            savedItems.items.map((product) => (
              <li key={product.id} className='shopping-cart__items-item'>
                <button
                  className='shopping-cart__items-item-delete-button'
                  onClick={() => this.props.onDeleteItem(product.id)}
                ></button>
                {this.renderCard(product, product.category.categoryName, product.category.id, true, 'product-card')}
              </li>
            ))}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    savedItems: state.savedItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadSavedItems: () => dispatch(fetchSavedItems()),
    onDeleteItem: (id) => dispatch(fetchDeleteItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
