export const fetchSaveItemRequest = item => {
  return { type: "FETCH_SAVE_ITEM_REQUEST", payload: item };
};

export const fetchSaveItemSuccess = () => {
  return { type: "FETCH_SAVE_ITEM_SUCCESS" };
};

export const fetchSaveItemFailure = err => {
  return { type: "FETCH_SAVE_ITEM_FAILURE", payload: err };
};

export const fetchSaveItem = productId => {
  //not just id atm
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch(fetchSaveItemRequest());
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    firestore
      .collection(`users/${userId}/savedProducts`)
      .doc(productId.id)
      .set({
        ...productId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch(fetchSaveItemSuccess());
      })
      .catch(err => dispatch(fetchSaveItemFailure(err)));
  };
};
