import productsList from "../Components/productsList.json";

export const loadItems = itemsId => dispatch => {
  console.log(itemsId);

  const itemsInfo = itemsId
    ? itemsId.map(itemId => productsList.find(({ id }) => id === itemId))
    : null;

  console.log(itemsInfo);

  dispatch({ type: "LOAD_PRODUCTS_INFO", payload: itemsInfo });
};
