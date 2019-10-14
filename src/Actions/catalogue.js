import genres from "../Components/genres.json";

export const getGenres = () => dispatch => {
  console.log("GOT GENRES");
  dispatch({ type: "GET_GENRES", payload: genres });
};
