import { combineReducers } from "redux";

import shoppingCart from "./shoppingCart";
import catalogue from "./catalogue";
import products from "./products";

export default combineReducers({
  shoppingCart,
  catalogue,
  products
});
