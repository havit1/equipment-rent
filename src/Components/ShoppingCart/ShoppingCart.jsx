import React, { Component } from "react";
import { Link } from "react-router-dom";
import { loadItems } from "../../Actions/shoppingCart";
import { connect } from "react-redux";

class ShoppingCart extends Component {
  componentDidMount() {
    this.props.onLoadItems(this.props.shoppingCartIds);
  }

  render() {
    const { shoppingCartInfo } = this.props;
    return (
      <div>
        <h1>Your shopping cart</h1>
        {shoppingCartInfo.map(product => (
          <Link to={`/products/${product.category}/${product.id}`}>
            <div>
              <h1>{product.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({
    onLoadItems: ids => {
      dispatch(loadItems(ids));
    }
  })
)(ShoppingCart);
