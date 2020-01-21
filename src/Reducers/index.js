import { combineReducers } from "redux";
import saveProductReducer from "./saveProductReducer";
import search from "./search";
import authReducer from "./authReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import addNewProductReducer from "./addNewProductReducer";
import usersSavedProductsReducer from "./usersSavedProductsReducer";
import userInfo from "./userProfileReducer";

export default combineReducers({
  saveProductReducer,
  auth: authReducer,
  search,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  addNewProductReducer,
  savedItems: usersSavedProductsReducer,
  userInfo
});
