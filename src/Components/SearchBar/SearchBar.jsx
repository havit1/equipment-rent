import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchBar.scss';

class Search extends Component {
  state = {
    searchedString: '',
  };

  onInputChange = (e) => {
    let searchedString = e.currentTarget.value;
    this.setState({ searchedString });
  };

  onSubmitSearch = (e) => {
    e.preventDefault();

    this.props.history.push(`/search/${this.props.searchedString.toLowerCase()}`);
  };

  render() {
    return (
      <form className='search-form'>
        {/* <input
          onChange={this.onInputChange}
          value={this.state.searchedString}
          className="search-form__input"
          type="text"
        />
        <button className="search-form__button">Search</button> */}
        <h3 style={{ color: 'white' }}>
          NO SEARCH, BECAUSE FIRESTORE DOESN'T SUPPORT "COLLECTION GROUP QUERIES" AT THE MOMENT
        </h3>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
