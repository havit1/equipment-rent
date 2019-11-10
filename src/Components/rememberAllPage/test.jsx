import React, { Component } from "react";
import { connect } from "react-redux";
import categoriesList from "../genres.json";

class rememberAll extends Component {
  onRenderCategories = () => {
    console.log("test");
    const categories =
      this.props.catalogue.length > 0 ? this.state.catalogue : categoriesList;
    this.props.onShowCategories(categories);
    // return (
    //   <div>
    //     <ol>
    //       {this.props.remember.map(categorie => (
    //         <li>
    //           <h1>categorie.name</h1>
    //           <h2>categorie.id</h2>
    //         </li>
    //       ))}
    //     </ol>
    //   </div>
    // );
  };

  render() {
    return (
      <div>
        <h1>
          This page is created to help me remeber everything i forgot for the
          past 2 weeks
        </h1>
        <button onClick={() => this.onRenderCategories()}>DOWNLOAD</button>
        <ol>
          {this.props.remember.map(categorie => (
            <li>
              <h1>categorie.name</h1>
              <h2>categorie.id</h2>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({
    onShowCategories: categories => {
      dispatch({ type: "ON_LOAD_CATEGORIES_REM", payload: categories });
    }
  })
)(rememberAll);
