import React, { useDebugValue } from "react";
import { connect } from "react-redux";
import Joi from "joi-browser";
import Form from "../Common/form";
import "./ItemConfigPage.scss";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { addItemAction } from "../../Actions/addItemAction";

class ItemConfigPage extends Form {
  state = {
    data: {
      name: "",
      category: {},
      price: "",
      ownerPhoneNumber: "",
      ownerEmailAddress: "",
      description: "",
      youtubeLink: ""
    },
    buttonInfo: { class: "btn btn-primary", text: "Save" },
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
    youtubeLink: Joi.string().label("Youtube Link"),
    ownerPhoneNumber: Joi.number()
      .required()
      .label("Phone number"),
    ownerEmailAddress: Joi.string()
      .email()
      .required()
      .label("Email address")
  };

  onSubmit = () => {
    const data = { ...this.state.data };
    const categoryId = this.state.data.category;
    const category = this.props.categories.find(
      category => categoryId === category.id
    );

    data.category = category;

    this.setState({ data }, () => {
      this.props.handleAddNewItem(this.state.data);
      this.props.history.push("/");
    });
  };

  render() {
    const { categories } = this.props;

    if (!categories) return <h1>LOADING</h1>;

    console.log(this.state.data);

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        {this.renderInput("name", "Name")}
        {this.renderInput("price", "Price")}
        {this.renderInput("ownerPhoneNumber", "Phone number")}
        {this.renderInput("ownerEmailAddress", "Email address")}
        {this.renderInput("youtubeLink", "Youtube Link")}
        {this.renderSelect("category", "Category", categories)}
        {this.renderTextarea("description", "Description")}
        {this.renderButton(
          this.state.buttonInfo.text,
          this.state.buttonInfo.class
        )}
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.firestore.ordered.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleAddNewItem: newItem => dispatch(addItemAction(newItem))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(() => [{ collection: `categories` }])
)(ItemConfigPage);
