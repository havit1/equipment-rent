import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { BrowserRouter as HashRouter } from "react-router-dom";
import thunk from "redux-thunk";
import reducer from "./Reducers/index";
import "./index.css";
import { ToastContainer } from "react-toastify";

let store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter basename="/">
      <ToastContainer />
      <App></App>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
