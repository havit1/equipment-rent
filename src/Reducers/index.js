import { combineReducers } from "redux";
import shoppingCartIds, { shoppingCartInfo } from "./shoppingCart";
import product from "./product";
import search from "./search";
import authReducer from "./authReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import addNewProductReducer from "./addNewProductReducer";

// import catalogue from "./catalogue";
// import productsList from "./products";

export default combineReducers({
  shoppingCartIds,
  auth: authReducer,
  // catalogue,
  // productsList,
  // product,
  // shoppingCartInfo,
  search,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  addNewProductReducer
});
