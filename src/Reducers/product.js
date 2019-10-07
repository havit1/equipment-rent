const initialState = {};

export default function product(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCT_INFO":
      return action.payload;
    default:
      return state;
  }
}
