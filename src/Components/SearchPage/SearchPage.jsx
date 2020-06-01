import React from 'react';
import { connect } from 'react-redux';
import productsList from '../productsList.json';
import cardGenerator from '../Common/cardGenerator';
import './SearchPage.scss';

class SearchPage extends cardGenerator {
  componentDidMount() {
    this.prevSearch = this.props.submittedSearchString;

    let results = productsList.filter(
      (item) =>
        item.name.toUpperCase().indexOf(
          (this.props.submittedSearchString || this.props.location.pathname.split('/').pop()) //Что-бы после перезагрузки страницы не показывало все товары
            .toUpperCase()
        ) > -1
    );
    this.props.getSearchedProducts(results);
  }

  componentDidUpdate() {
    if (this.prevSearch !== this.props.submittedSearchString) {
      this.componentDidMount(); //Делать новый поиск без потребности перезагружать страницу
    }
  }

  render() {
    return (
      <div className='search-page'>
        {this.props.items.length === 0 ? (
          <h1 className='search-page__no-items-error'>
            '{this.props.submittedSearchString}' doesn't exist here. I'm sorry...
          </h1>
        ) : (
          this.props.items.map((product) => (
            <div key={product.key} className='item-card'>
              {this.renderCard(product, true, true, 'search-page__element')}
            </div>
          ))
        )}
      </div>
    );
  }
}

export default connect(
  (state) => state.search,
  (dispatch) => ({
    getSearchedProducts: (products) => {
      dispatch({ type: 'ON_LOAD_SEARCHED_ITEMS', payload: products });
    },
  })
)(SearchPage);
