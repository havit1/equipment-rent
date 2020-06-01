import React, { Component } from 'react';
import { signUp } from '../../Actions/authActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './RegisterPage.scss';

class RegisterPage extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    document.title = 'Register';

    const { uid, authError } = this.props;
    if (uid) return <Redirect to='/' />;

    return (
      <section className='register-page'>
        <div className='register-page__form-wrapper'>
          <form className='register-page__form-wrapper-form' onSubmit={this.handleSubmit}>
            <h2>Register</h2>
            <div>
              <label htmlFor='email'>Email</label>
              <input onChange={this.handleChange} type='email' id='email' />
            </div>
            <div>
              <label htmlFor='firstName'>First Name</label>
              <input onChange={this.handleChange} type='firstName' id='firstName' />
            </div>
            <div>
              <label htmlFor='lastName'>Last Name</label>
              <input onChange={this.handleChange} type='lastName' id='lastName' />
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input onChange={this.handleChange} type='password' id='password' />
            </div>
            <button>Register</button>
            {authError && <p className='alert'>{authError.message}</p>}
          </form>
        </div>
        <div className='register-page__image'></div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
    uid: state.firebase.auth.uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
