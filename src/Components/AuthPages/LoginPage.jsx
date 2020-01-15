import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import Joi from "joi-browser";
import { connect } from "react-redux";
import { signIn } from "../../Actions/authActions";
import "./LoginPage.scss";

class LoginPage extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { authError, uid } = this.props;

    if (uid) return <Redirect to="/" />;

    return (
      <section className="login-page">
        <div className="login-page__form-wrapper">
          <form
            className="login-page__form-wrapper-form"
            onSubmit={this.handleSubmit}
          >
            <h2>Login</h2>
            <div className="login-page__form-wrapper-form-login">
              <label htmlFor="email">Email</label>
              <input onChange={this.handleChange} type="email" id="email" />
            </div>
            <div className="login-page__form-wrapper-form-login">
              <label htmlFor="password">Password</label>
              <input
                onChange={this.handleChange}
                type="password"
                id="password"
              />
            </div>
            <button>Login</button>
            <h3>{authError ? <h1>{authError.message}</h1> : null}</h3>
          </form>
        </div>
        <div className="login-page__image"></div>>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    uid: state.firebase.auth.uid
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
