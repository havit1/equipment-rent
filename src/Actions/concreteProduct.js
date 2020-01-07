// import axios from "axios";
// import { toast } from "react-toastify";

// export const fetchConcreteProductRequest = () => {
//   return {
//     type: "FETCH_CONCRETE_PRODUCT_REQUEST"
//   };
// };

// export const fetchConcreteProductSucess = product => {
//   return {
//     type: "FETCH_CONCRETE_PRODUCT_SUCCESS",
//     payload: product
//   };
// };

// export const fetchConcreteProductFailure = error => {
//   return {
//     type: "FETCH_CONCRETE_PRODUCT_FAILURE",
//     payload: error
//   };
// };

// export const fetchConcreteProduct = (productId, category) => {
//   return dispatch => {
//     dispatch(fetchConcreteProductRequest());
//     axios
//       .get(apiUrl + `productList`)
//       .then(response => {
//         const product = response.data[`${category}`].find(
//           product => product.id === productId
//         );
//         dispatch(fetchConcreteProductSucess(product));
//       })
//       .catch(error => {
//         const errorMsg = error.message;
//         dispatch(fetchConcreteProductFailure(errorMsg));
//         toast.error("An unexpected error occurred");
//       });
//   };
// };
