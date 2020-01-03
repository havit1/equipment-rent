import { apiUrl } from "../config.json";
import axios from "axios";
import { toast } from "react-toastify";

import productsList from "../Components/productsList.json";

// export const getProducts = product => dispatch => {
//   console.log("GETTING PRODUCTS");

//   const products = productsList.filter(
//     c => c.category === product || c.name === toString(product)
//   );

//   console.log("product", products);

//   dispatch({ type: "GET_PRODUCTS", payload: products });
// };

export const fetchProductsRequest = () => {
  return {
    type: "FETCH_PRODUCTS_REQUEST"
  };
};

export const fetchProductsSucess = products => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS",
    payload: products
  };
};

export const fetchProductsFailure = error => {
  return {
    type: "FETCH_PRODUCTS_FAILURE",
    payload: error
  };
};

export const fetchProducts = productsCategorie => {
  return dispatch => {
    dispatch(fetchProductsRequest);
    axios
      .get(apiUrl + `productList`)
      .then(response => {
        const products = response.data[`${productsCategorie}`];
        console.log(products);
        dispatch(fetchProductsSucess(products));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchProductsFailure(errorMsg));
        toast.error("An unexpected error occurred");
      });
  };
};

export const getProductInfo = product => dispatch => {
  console.log("GETTING PRODUCT INFO");

  const productInfo = productsList.find(({ id }) => product === id);

  console.log("product info", productInfo);

  dispatch({ type: "GET_PRODUCT_INFO", payload: productInfo });
};
