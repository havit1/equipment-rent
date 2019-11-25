import productsList from "../Components/productsList.json";

export const getProducts = product => dispatch => {
  console.log("GETTING PRODUCTS");

  const products = productsList.filter(
    c => c.category === product || c.name === toString(product)
  );

  console.log("product", products);

  dispatch({ type: "GET_PRODUCTS", payload: products });
};

export const getProductInfo = product => dispatch => {
  console.log("GETTING PRODUCT INFO");

  const productInfo = productsList.find(({ id }) => product === id);

  console.log("product info", productInfo);

  dispatch({ type: "GET_PRODUCT_INFO", payload: productInfo });
};
