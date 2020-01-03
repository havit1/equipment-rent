import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../Actions/products";
import cardGenerator from "../Common/cardGenerator";

import "./ProductsList.scss";

class ProductsList extends cardGenerator {
  componentDidMount() {
    this.props.fetchProducts(this.props.match.params.name);
  }

  render() {
    const { productsList } = this.props;

    return productsList.loading ? (
      <h2>Loading</h2>
    ) : productsList.error ? (
      <h2>{productsList.error}</h2>
    ) : (
      <div className="product-list">
        <div className="product-list__wrapper">
          {productsList.products.map(product => (
            <div className="item-card">
              {this.renderCard(product, true, true, "product-list__element")}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    productsList: state.productsList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: productsCategorie =>
      dispatch(fetchProducts(productsCategorie))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
