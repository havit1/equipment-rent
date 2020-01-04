const initialState = { loading: false, product: [], error: "" };

export default function product(state = initialState, action) {
  switch (action.type) {
    case "FETCH_CONCRETE_PRODUCT_REQUEST":
      return { ...state, loading: true };
    case "FETCH_CONCRETE_PRODUCT_SUCCESS":
      return { loading: false, product: action.payload, error: "" };
    case "FETCH_CONCRETE_PRODUCT_FAILURE":
      return { loading: false, product: [], error: action.payload };
    default:
      return state;
  }
}
