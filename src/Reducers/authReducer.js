const initialState = { authError: "" };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_FAILURE":
      return { ...state, authError: action.payload };
    case "LOGIN_SUCCESS":
      console.log("Login success");
      return { ...state, authError: "" };
    case "SIGNOUT_SUCCESS":
      console.log("Signed out");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return {
        ...state,
        authError: ""
      };
    case "SIGNUP_ERROR":
      console.log(action.payload.message);
      return {
        ...state,
        authError: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
