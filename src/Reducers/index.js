import { combineReducers } from "redux";

import shoppingCartIds, { shoppingCartInfo } from "./shoppingCart";
import catalogue from "./catalogue";
import products from "./products";
import product from "./product";

export default combineReducers({
  shoppingCartIds,
  catalogue,
  products,
  product,
  shoppingCartInfo
});
