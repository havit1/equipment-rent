import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProducts } from "../../Actions/products";
import "./ProductsList.scss";

class ProductsList extends Component {
  componentDidMount() {
    this.props.onGetProducts(this.props.match.params.name);
  }

  render() {
    return (
      <div className="product-list">
        <ol className="product-list__items">
          {this.props.products.map(product => (
            <li className="product-list__items_item " key={product.id}>
              <Link to={`/products/${product.category}/${product.id}`}>
                {product.name}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({
    onGetProducts: product => {
      dispatch(getProducts(product));
    }
  })
)(ProductsList);
