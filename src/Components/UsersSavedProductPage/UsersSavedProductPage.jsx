import React from "react";
import { connect } from "react-redux";
import cardGenerator from "../Common/cardGenerator";
import "./UsersSavedProductPage.scss";

class ShoppingCart extends cardGenerator {
  componentDidMount() {}

  render() {
    const { shoppingCartInfo } = this.props;
    return (
      <div className="shopping-cart">
        {shoppingCartInfo.length > 0 ? (
          shoppingCartInfo.map(product => (
            <div key={product.id} className="item-card">
              {this.renderCard(product, true, true, "shopping-cart__element")}
            </div>
          ))
        ) : (
          <h1>Nothing in you'r shopping cart at the moment...</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
