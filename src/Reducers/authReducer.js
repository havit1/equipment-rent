const initialState = { authError: '' };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_FAILURE':
      return { ...state, authError: action.payload };
    case 'LOGIN_SUCCESS':
      return { ...state, authError: '' };
    case 'SIGNOUT_SUCCESS':
      return state;
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        authError: '',
      };
    case 'SIGNUP_ERROR':
      return {
        ...state,
        authError: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
