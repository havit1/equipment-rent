import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { HashRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider, useSelector } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  getFirestore,
  reduxFirestore,
  createFirestoreInstance
} from "redux-firestore";
import {
  getFirebase,
  ReactReduxFirebaseProvider,
  isLoaded
} from "react-redux-firebase";
import firebase from "./config/fbConfig";
import { ToastContainer } from "react-toastify";
import reducer from "./Reducers/index";
import "./index.css";

const middleware = [thunk.withExtraArgument({ getFirebase, getFirestore })];

let store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware), reduxFirestore(firebase))
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

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth);
  if (!isLoaded(auth)) return null;
  return children;
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <HashRouter basename="/">
          <ToastContainer />
          <App></App>
        </HashRouter>
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
