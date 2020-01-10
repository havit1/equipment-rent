const initialState = { err: "", loading: false };

export default function saveProductReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_SAVE_ITEM_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SAVE_ITEM_SUCCESS":
      return { ...state, loading: false };
    case "FETCH_SAVE_ITEM_FAILURE":
      return {
        ...state,
        loading: false,
        err: action.payload
      };
    default:
      return state;
  }
}
