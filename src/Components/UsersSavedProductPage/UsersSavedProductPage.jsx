import React from "react";
import { connect } from "react-redux";
import cardGenerator from "../Common/cardGenerator";
import { fetchSavedItems } from "../../Actions/usersSavedProductsAction";
import { fetchDeleteItem } from "../../Actions/saveDeleteProductAction";
import "./UsersSavedProductPage.scss";

class ShoppingCart extends cardGenerator {
  componentDidMount() {
    this.props.onLoadSavedItems();
  }

  render() {
    const { savedItems } = this.props;

    return (
      <div className="shopping-cart">
        {savedItems.items.length &&
          savedItems.items.map(product => (
            <div key={product.id} className="item-card">
              <button onClick={() => this.props.onDeleteItem(product.id)}>
                Delete
              </button>
              {this.renderCard(
                product,
                product.category.categoryName,
                product.category.id,
                true,
                true,
                "shopping-cart__element"
              )}
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    savedItems: state.savedItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadSavedItems: () => dispatch(fetchSavedItems()),
    onDeleteItem: id => dispatch(fetchDeleteItem(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
