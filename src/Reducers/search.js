const initialState = { searchedString: "", items: [] };

const searchString = (state = initialState.searchedString, action) => {
  switch (action.type) {
    case "ON_UPDATE_SEARCH_STRING":
      return action.payload;
    default:
      return state;
  }
};

const findItems = (state = initialState.items, action) => {
  switch (action.type) {
    case "ON_LOAD_SEARCHED_ITEMS":
      return action.payload;
    default:
      return state;
  }
};

export default function search(state = initialState, action) {
  switch (action.type) {
    default:
      return {
        searchedString: searchString(initialState.searchedString, action),
        items: findItems(initialState.items, action)
      };
  }
}
