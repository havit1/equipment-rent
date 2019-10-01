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

  // onFormSubmit = e => {
  //   e.preventDefault();

  //   this.props.onSearch(this.state.searchedString);
  // };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input onChange={this.onChangeSearch} type="text" />
        <Link to={`/products/${this.state.searchedString}`}>
          <button>Search</button>
        </Link>
      </form>
    );
  }
}

export default Search;
