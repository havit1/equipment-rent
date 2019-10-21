import JSONGenres from "../Components/genres.json";

export const getGenres = () => dispatch => {
  console.log("GOT GENRES");
  // const genres = JSON.stringify(JSONGenres);
  dispatch({ type: "GET_GENRES", payload: JSONGenres });
};
