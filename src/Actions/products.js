// import axios from "axios";
// import { toast } from "react-toastify";

// export const fetchProductsRequest = () => {
//   return {
//     type: "FETCH_PRODUCTS_REQUEST"
//   };
// };

// export const fetchProductsSucess = products => {
//   return {
//     type: "FETCH_PRODUCTS_SUCCESS",
//     payload: products
//   };
// };

// export const fetchProductsFailure = error => {
//   return {
//     type: "FETCH_PRODUCTS_FAILURE",
//     payload: error
//   };
// };

// export const fetchProducts = productsCategorie => {
//   return dispatch => {
//     dispatch(fetchProductsRequest);
//     axios
//       .get(apiUrl + `productList`)
//       .then(response => {
//         const products = response.data[`${productsCategorie}`];
//         dispatch(fetchProductsSucess(products));
//       })
//       .catch(error => {
//         const errorMsg = error.message;
//         dispatch(fetchProductsFailure(errorMsg));
//         toast.error("An unexpected error occurred");
//       });
//   };
// };
