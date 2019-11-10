const initialState = [];

export default function remember(state = initialState, action) {
  if (action.type === "ON_LOAD_CATEGORIES_REM") {
    return action.payload;
  } else return state;
}
