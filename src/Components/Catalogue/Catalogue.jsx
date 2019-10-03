import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getGenres } from "../../Actions/catalogue";

class Catalogue extends Component {
  componentDidMount() {
    console.log("Hello");
    this.props.onGetCategories();
  }

  render() {
    const { catalogue } = this.props;

    return (
      <ol>
        {catalogue.map(product => (
          <li key={product}>
            <Link to={`/products/${product}`}>{product}</Link>
          </li>
        ))}
      </ol>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({
    onGetCategories: () => {
      dispatch(getGenres());
    }
  })
)(Catalogue);
