const initialState = [];

export default function shoppingCartIds(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_SHOPPING_CART":
      return [...state, action.payload];

    default:
      return state;
  }
}

export function shoppingCartInfo(state = initialState, action) {
  switch (action.type) {
    case "LOAD_PRODUCTS_INFO":
      return action.payload;
    default:
      return state;
  }
}
