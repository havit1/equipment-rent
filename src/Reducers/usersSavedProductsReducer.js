const initialState = { err: '', loading: false, items: [] };

export default function saveProductReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_SAVED_ITEMS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SAVED_ITEMS_SUCCESS':
      return { ...state, loading: false, items: action.payload };
    case 'FETCH_SAVED_ITEMS_FAILURE':
      return {
        ...state,
        loading: false,
        err: action.payload,
      };
    default:
      return state;
  }
}
