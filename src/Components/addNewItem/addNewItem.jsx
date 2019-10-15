import React, { Component } from "react";
import { connect } from "react-redux";
import genres from "../genres.json";
import items from "../productsList.json";
import Joi from "joi-browser";
import Form from "../Common/form";

class addData extends Form {
  state = {
    genres: [],
    data: {
      name: "",
      category: "",
      id: "",
      price: "",
      description: ""
    },
    errors: {}
  };

  schema = {
    name: Joi.string()
      .required()
      .label("Name"),
    category: Joi.string()
      .required()
      .label("Category"),
    price: Joi.number()
      .required()
      .label("Price"),
    description: Joi.label("Description"),
    id: Joi.label("Id")
  };

  componentDidMount() {
    this.setState({ genres });
  }

  onSubmit = () => {
    const item = { ...this.state.data };
    item.id = Date.now();
    console.log(item);
    items.push(item);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("name", "Name")}
        {this.renderInput("price", "Price")}
        {this.renderSelect("category", "Category", this.state.genres)}
        {this.renderInput("description", "Description")}
        {this.renderButton("Add new item")}
      </form>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({
    onSubmitForm: () => {
      dispatch({ type: "ON_ADD_NEW_ITEM" });
    }
  })
)(addData);
