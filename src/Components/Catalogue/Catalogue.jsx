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
        {catalogue.map(categorie => (
          <li className="catalogue__element" key={categorie.id}>
            <Link to={`/products/${categorie.name}`}>
              <image
                className={`catalogue__element_image image-${categorie.name}`}
              >
                <h1>{categorie.name.toUpperCase()}</h1>
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
