import { combineReducers } from "redux";
import shoppingCartIds, { shoppingCartInfo } from "./usersSavedProductsReducer";
import search from "./search";
import authReducer from "./authReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import addNewProductReducer from "./addNewProductReducer";

export default combineReducers({
  shoppingCartIds,
  auth: authReducer,
  search,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  addNewProductReducer
});
