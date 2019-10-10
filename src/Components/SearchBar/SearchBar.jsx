import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./SearchBar.scss";

class Search extends Component {
  onSubmitForm = e => {
    e.preventDefault();
    const string = this.props.searchedString;
  };

  render() {
    return (
      <form onSubmit={this.onSubmitForm} className="navbar__search-form">
        <input
          ref={input => {
            this.trackInput = input;
          }}
          onChange={this.props.onSearchChange}
          type="text"
        />
        <Link to={`/search/${this.props.searchedString}`}>
          <button>Search</button>
        </Link>
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
    }
  })
)(Search);
