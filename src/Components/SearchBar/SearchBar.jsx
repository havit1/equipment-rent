import React, { Component } from "react";
import { connect } from "react-redux";
import "./SearchBar.scss";

class Search extends Component {
  onSubmitSearch = e => {
    e.preventDefault();

    this.props.onSubmitSearch(this.props.searchedString);

    this.props.history.push(
      `/search/${this.props.searchedString.toLowerCase()}`
    );
  };

  render() {
    return (
      <form onSubmit={this.onSubmitSearch} className="navbar__search-form">
        <input
          onChange={this.props.onSearchChange}
          ref={input => {
            this.trackInput = input;
          }}
          type="text"
        />
        <button onClick={() => (this.trackInput.value = "")}>Search</button>
      </form>
    );
  }
}

export default connect(
  state => state.search,
  dispatch => ({
    onSearchChange: e => {
      dispatch({
        type: "ON_UPDATE_SEARCH_STRING",
        payload: e.currentTarget.value ? e.currentTarget.value : null
      });
    },
    onSubmitSearch: string => {
      dispatch({
        type: "ON_SUBMIT_SEARCH",
        payload: string
      });
    }
  })
)(Search);
