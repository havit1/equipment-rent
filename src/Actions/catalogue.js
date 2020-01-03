import http from "../services/httpService";
import axios from "axios";
import { apiUrl } from "../config.json";
import JSONGenres from "../Components/genres.json";
import { toast } from "react-toastify";

export const getGenres = () => dispatch => {
  console.log("GOT GENRES");
  // const genres = JSON.stringify(JSONGenres);
  dispatch({ type: "GET_GENRES", payload: JSONGenres });
};

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

export const fetchCategories = () => {
  return dispatch => {
    dispatch(fetchCategoriesRequest);
    axios
      .get(apiUrl + "categories")
      .then(response => {
        const categories = response.data;
        dispatch(fetchCategoriesSucess(categories));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchCategoriesFailure(errorMsg));
        toast.error("An unexpected error occurred");
      });
  };
};
