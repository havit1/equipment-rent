import { combineReducers } from "redux";
import shoppingCartIds, { shoppingCartInfo } from "./shoppingCart";
import catalogue from "./catalogue";
import productsList from "./products";
import product from "./product";
import search from "./search";
import { firestoreReducer } from "redux-firestore";

export default combineReducers({
  shoppingCartIds,
  catalogue,
  productsList,
  product,
  shoppingCartInfo,
  search,
  firestore: firestoreReducer
});
