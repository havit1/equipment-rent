import React, { Component } from "react";
import { Link } from "react-router-dom";

class Search extends Component {
  state = {
    searchedString: ""
  };

  onChangeSearch = e => {
    const search = e.target.value;
    this.setState({ searchedString: search });
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSearch(this.state.searchedString);
  };

  render() {
    return (
      <Link to={`/products/${this.state.searchedString}`}>
        <form onSubmit={this.onFormSubmit}>
          <input onChange={this.onChangeSearch} type="text" />
          <button>Search</button>
        </form>
      </Link>
    );
  }
}

export default Search;
