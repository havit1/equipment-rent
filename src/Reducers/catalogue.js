const initialState = [];

export default function catalogue(state = initialState, action) {
  if (action.type === "GET_GENRES") {
    return action.payload;
  } else return state;
}
