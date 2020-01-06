import React, { Component } from "react";
import { signUp, signIn } from "../../Actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class RegisterPage extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { uid } = this.props;
    if (uid) return <Redirect to="/" />;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h5>Register</h5>
          <div>
            <label htmlFor="email">Email</label>
            <input onChange={this.handleChange} type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input onChange={this.handleChange} type="password" id="password" />
          </div>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={this.handleChange}
              type="firstName"
              id="firstName"
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input onChange={this.handleChange} type="lastName" id="lastName" />
          </div>
          <button>Register</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    uid: state.firebase.auth.uid
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
