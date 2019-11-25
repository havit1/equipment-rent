import React from "react";
import { connect } from "react-redux";
import { getProducts } from "../../Actions/products";
import cardGenerator from "../Common/cardGenerator";

import "./ProductsList.scss";

class ProductsList extends cardGenerator {
  componentDidMount() {
    this.props.onGetProducts(this.props.match.params.name);
  }

  render() {
    return (
      <div className="product-list">
        <div className="product-list__wrapper">
          {this.props.products.map(product => (
            <div className="item-card">
              {this.renderCard(product, true, true, "product-list__element")}
            </div>
          ))}
        </div>
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
