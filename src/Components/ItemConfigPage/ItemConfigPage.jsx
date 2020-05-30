import React from 'react';
import Joi from 'joi-browser';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import { addItemAction } from '../../Actions/addItemAction';

import Form from '../Common/form';

import './ItemConfigPage.scss';

class ItemConfigPage extends Form {
  state = {
    data: {
      name: '',
      category: {},
      price: '',
      ownerPhoneNumber: '',
      ownerEmailAddress: '',
      description: '',
      youtubeLink: '',
      image: {},
    },
    errors: {},
  };

  schema = {
    name: Joi.string().label('Name'),
    category: Joi.string().label('Category'),
    price: Joi.number().label('Price'),
    // name: Joi.string().required().label('Name'),
    // category: Joi.string().required().label('Category'),
    // price: Joi.number().required().label('Price'),
    description: Joi.label('Description'),
    id: Joi.label('Id'),
    youtubeLink: Joi.string()
      .regex(/^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/)
      .label('Youtube Link')
      .error(() => {
        return { message: 'Please use vaild Youtube link' };
      }),
    ownerPhoneNumber: Joi.number().label('Phone number'),
    // ownerPhoneNumber: Joi.number().required().label('Phone number'),
    ownerEmailAddress: Joi.string().email().label('Email address'),
    // ownerEmailAddress: Joi.string().email().required().label('Email address'),
    image: Joi.any(),
  };

  onSubmit = () => {
    const data = { ...this.state.data };
    const categoryId = this.state.data.category;
    const category = this.props.categories.find((category) => categoryId === category.id);

    data.category = category;

    this.setState({ data }, () => {
      this.props.handleAddNewItem(this.state.data);
      this.props.history.push('/');
    });
  };

  render() {
    document.title = 'Item configuration';

    const { categories } = this.props;

    if (!categories) return <h1>LOADING</h1>;

    return (
      <section className='item-config-page'>
        <div className='item-config-page__form-wrapper'>
          <form className='item-config-page__form' onSubmit={this.handleSubmit}>
            {this.renderInput('name', 'Name')}
            {this.renderInput('price', 'Price')}
            {this.renderSelect('category', 'Category', categories)}
            {this.renderInput('ownerPhoneNumber', 'Phone number')}
            {this.renderInput('ownerEmailAddress', 'Email address')}
            {this.renderInput('youtubeLink', 'Youtube Link')}
            {this.renderTextarea('description', 'Description')}
            {this.renderFileField('image', 'Image')}
            {this.renderButton('Save', 'btn btn-primary')}
          </form>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.firestore.ordered.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddNewItem: (newItem) => dispatch(addItemAction(newItem)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(() => [{ collection: `categories` }])
)(ItemConfigPage);
