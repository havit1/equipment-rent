const initialState = { err: '', loading: false, items: [] };

export default function userInfo(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PROFILE_INFO_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_PROFILE_INFO_SUCCESS':
      return { ...state, loading: false, items: action.payload };
    case 'FETCH_PROFILE_INFO_FAILURE':
      return {
        ...state,
        loading: false,
        err: action.payload,
      };
    default:
      return state;
  }
}
