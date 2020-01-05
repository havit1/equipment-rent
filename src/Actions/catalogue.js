import JSONGenres from "../Components/genres.json";
import { toast } from "react-toastify";

//********************************** */
export const getGenres = () => dispatch => {
  console.log("GOT GENRES");
  // const genres = JSON.stringify(JSONGenres);
  dispatch({ type: "GET_GENRES", payload: JSONGenres });
};
//************************************ */

export const fetchCategoriesRequest = () => {
  return {
    type: "FETCH_CATEGORIES_REQUEST"
  };
};

export const fetchCategoriesSucess = categories => {
  return {
    type: "FETCH_CATEGORIES_SUCCESS",
    payload: categories
  };
};

export const fetchCategoriesFailure = error => {
  return {
    type: "FETCH_CATEGORIES_FAILURE",
    payload: error
  };
};

export const fetchCategories = categories => {
  console.log("Testing");
  return dispatch => {
    dispatch(fetchCategoriesSucess(categories));
  };
};
