const initialState = [];

export default function products(state = initialState, action) {
  if (action.type === "GET_PRODUCTS") return action.payload;
  else return state;
}
