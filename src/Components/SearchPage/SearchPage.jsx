import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import productsList from "../productsList.json";

class SearchPage extends Component {
  componentDidMount() {
    let results = [];
    if (results.length === 0)
      results = [
        ...productsList.filter(
          item => item.name.indexOf(this.props.searchedString) > -1
        )
      ];

    this.props.getSearchedProducts(results);
  }

  render() {
    return (
      <div>
        {this.props.items.map(product => (
          <Link key={product.id} to={`/products/${product.name}/${product.id}`}>
            {product.name}
          </Link>
        ))}
      </div>
    );
  }
}

export default connect(
  state => state.search,
  dispatch => ({
    getSearchedProducts: products => {
      dispatch({ type: "ON_LOAD_SEARCHED_ITEMS", payload: products });
    }
  })
)(SearchPage);
