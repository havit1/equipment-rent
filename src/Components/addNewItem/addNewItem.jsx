import React from "react";
import { connect } from "react-redux";
import items from "../productsList.json";
import Joi from "joi-browser";
import Form from "../Common/form";
import { getGenres } from "../../Actions/catalogue";
import "./addNewItem.scss";

class addData extends Form {
  state = {
    data: {
      name: "",
      category: "",
      id: "",
      price: "",
      description: "",
      youtubeLink: ""
    },
    buttonInfo: { class: "btn btn-primary", text: "Add new item" },
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
    id: Joi.label("Id"),
    youtubeLink: Joi.string().label("Youtube Link")
  };

  componentDidMount() {
    this.props.onGetGenres();
  }

  onSubmit = () => {
    const item = { ...this.state.data };
    item.id = Date.now();
    items.push(item);

    const buttonInfo = { class: "btn-success btn", text: "Added" };
    this.setState({ buttonInfo });
    this.setState({
      data: {
        name: "",
        category: "",
        id: "",
        price: "",
        description: "",
        youtubeLink: ""
      }
    });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        {this.renderInput("name", "Name")}
        {this.renderInput("price", "Price")}
        {this.renderInput("youtubeLink", "Youtube Link")}
        {this.renderSelect("category", "Category", this.props.catalogue)}
        {this.renderInput("description", "Description")}
        {this.renderButton(
          this.state.buttonInfo.text,
          this.state.buttonInfo.class
        )}
      </form>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({
    onSubmitForm: () => {
      dispatch({ type: "ON_ADD_NEW_ITEM" });
    },
    onGetGenres: () => {
      dispatch(getGenres());
    }
  })
)(addData);
