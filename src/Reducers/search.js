const initialState = {
  searchedString: '',
  submittedSearchString: '',
  items: [],
};

const searchString = (state = initialState.searchedString, action) => {
  switch (action.type) {
    case 'ON_UPDATE_SEARCH_STRING':
      return (initialState.searchedString = action.payload);
    default:
      return state;
  }
};

const submittedSearchString = (state = initialState.submittedSearchString, action) => {
  switch (action.type) {
    case 'ON_SUBMIT_SEARCH':
      return (initialState.submittedSearchString = action.payload);
    default:
      return state;
  }
};

const findItems = (state = initialState.items, action) => {
  switch (action.type) {
    case 'ON_LOAD_SEARCHED_ITEMS':
      return (initialState.items = action.payload);
    default:
      return state;
  }
};

export default function search(state = initialState, action) {
  return {
    searchedString: searchString(initialState.searchedString, action),
    items: findItems(initialState.items, action),
    submittedSearchString: submittedSearchString(initialState.submittedSearchString, action),
  };
}
