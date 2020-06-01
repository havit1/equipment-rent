const initialState = { product: {}, error: '' };

const addNewProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEW_PRODUCT':
      return { ...state, error: '' };
    case 'ADD_NEW_PRODUCT_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default addNewProductReducer;
