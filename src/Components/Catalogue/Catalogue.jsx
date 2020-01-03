import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCategories } from "../../Actions/catalogue";
import "./Catalogue.scss";

class Catalogue extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const { catalogue } = this.props;

    return catalogue.loading ? (
      <h2>Loading</h2>
    ) : catalogue.error ? (
      <h2>{catalogue.error}</h2>
    ) : (
      <ol className="catalogue">
        {catalogue.categories.map(categorie => (
          <li className="catalogue__element" key={categorie.id}>
            <Link to={`/products/${categorie.name}`}>
              <span
                className={`catalogue__element_image image-${categorie.name}`}
              >
                <h1>{categorie.name.toUpperCase()}</h1>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    );
  }
}

const mapStateToProps = state => {
  return {
    catalogue: state.catalogue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(fetchCategories())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);
