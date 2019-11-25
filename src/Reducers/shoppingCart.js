const initialState = [];

export default function shoppingCartIds(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_SHOPPING_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_SHOPPING_CART":
      const index = state.indexOf(action.payload);
      if (index > -1) {
        state.splice(index, 1);
      }
      return state;
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
