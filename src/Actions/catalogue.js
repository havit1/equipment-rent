const genres = ["cameras", "microphones", "lights"];

export const getGenres = () => dispatch => {
  console.log("GOT GENRES");
  dispatch({ type: "GET_GENRES", payload: genres });
};
