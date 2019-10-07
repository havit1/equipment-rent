const initialState = [];

export default function products(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return action.payload;

    default:
      return state;
  }
}
