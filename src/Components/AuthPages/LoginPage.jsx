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
    document.title = "Login";

    const { authError, uid } = this.props;

    if (uid) return <Redirect to="/" />;

    return (
      <>
      <div style={{
        position: "absolute",
        'z-index': '1',
        "background-color": 'white',
        bottom: '20px',
        left: "20px"
      }}>
        <h2>Small side note</h2>
        <p>You can use "test@test.com" as a email and "test1234" as a password to test this app</p>
      </div>
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
              {authError ? (
                <h1 className="alert">{authError.message}</h1>
              ) : null}
          </form>
        </div>
        <div className="login-page__image"></div>>
      </section>
      </>
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
