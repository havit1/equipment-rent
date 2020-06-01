import React, { Component } from 'react';

class ErrorPage extends Component {
  state = {};
  render() {
    document.title = 'Error';

    return <h1>Error 404</h1>;
  }
}

export default ErrorPage;
