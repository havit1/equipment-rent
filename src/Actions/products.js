import productsList from "../Components/productsList.json";

export const getProducts = product => dispatch => {
  console.log("GETTING PRODUCTS");

  const products = productsList.filter(
    c => c.category === product || c.name === toString(product)
  );

  console.log("product", products);

  dispatch({ type: "GET_PRODUCTS", payload: products });
};
