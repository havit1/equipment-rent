import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getGenres } from "../../Actions/catalogue";
import "./Catalogue.scss";

class Catalogue extends Component {
  componentDidMount() {
    this.props.onGetCategories();
  }

  render() {
    const { catalogue } = this.props;

    return (
      <ol className="catalogue">
        {catalogue.map(product => (
          <li className="catalogue__element" key={product}>
            <Link to={`/products/${product}`}>
              <image className="catalogue__element_image">
                <h1>{product.toUpperCase()}</h1>
              </image>
            </Link>
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
