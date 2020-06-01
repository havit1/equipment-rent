export const fetchSavedItemsRequest = () => {
  return { type: 'FETCH_SAVED_ITEMS_REQUEST' };
};

export const fetchSavedItemsSuccess = (items) => {
  return { type: 'FETCH_SAVED_ITEMS_SUCCESS', payload: items };
};

export const fetchSavedItemsFailure = (err) => {
  return { type: 'FETCH_SAVED_ITEMS_FAILURE', payload: err };
};

export const fetchSavedItems = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch(fetchSavedItemsRequest());

    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    firestore
      .collection(`users/${userId}/savedProducts`)
      .get()
      .then((response) => {
        const items = response.docs.map((doc) => doc.data());
        dispatch(fetchSavedItemsSuccess(items));
      })
      .catch((err) => dispatch(fetchSavedItemsFailure(err)));
  };
};
