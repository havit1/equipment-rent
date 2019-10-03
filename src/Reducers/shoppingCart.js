const initialState = [];

export default function shoppingCart(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_SHOPPING_CART":
      return [...state, action.payload];
    default:
      return state;
  }
}
