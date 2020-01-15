import { Component } from "react";
import { connect } from "react-redux";
import { signOut } from "../../Actions/authActions";

class LogoutPage extends Component {
  componentDidMount() {
    this.props.onLogout();
    window.location = "/";
  }
  render() {
    return null;
  }
}

const mapDispathToprops = dispatch => {
  return {
    onLogout: () => {
      dispatch(signOut());
    }
  };
};

export default connect(null, mapDispathToprops)(LogoutPage);
