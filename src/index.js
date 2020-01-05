import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { BrowserRouter as HashRouter } from "react-router-dom";
import thunk from "redux-thunk";
import { ToastContainer } from "react-toastify";
import {
  getFirestore,
  reduxFirestore,
  createFirestoreInstance
} from "redux-firestore";
import {
  getFirebase,
  reactReduxFirebase,
  ReactReduxFirebaseProvider
} from "react-redux-firebase";

import reducer from "./Reducers/index";
import firebase, { fbConfig } from "./config/fbConfig";

import "./index.css";

// const middleware = [thunk.withExtraArgument({ getFirebase, getFirestore })];

let store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(getFirebase, getFirestore)),
    reduxFirestore(firebase)
  )
);

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <HashRouter basename="/">
        <ToastContainer />
        <App></App>
      </HashRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
