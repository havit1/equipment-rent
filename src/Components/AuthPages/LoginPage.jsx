import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import { connect } from "react-redux";
import { signIn } from "../../Actions/authActions";

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
      <div>
        <form onSubmit={this.handleSubmit}>
          <h5>Login</h5>
          <div>
            <label htmlFor="email">Email</label>
            <input onChange={this.handleChange} type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input onChange={this.handleChange} type="password" id="password" />
          </div>
          <button>Login</button>
          <div>{authError ? <h1>{authError.message}</h1> : null}</div>
        </form>
      </div>
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
