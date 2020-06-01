import { fetchSavedItems } from './usersSavedProductsAction';

export const fetchSaveItemRequest = (item) => {
  return { type: 'FETCH_SAVE_ITEM_REQUEST', payload: item };
};

export const fetchSaveItemSuccess = () => {
  return { type: 'FETCH_SAVE_ITEM_SUCCESS' };
};

export const fetchSaveItemFailure = (err) => {
  return { type: 'FETCH_SAVE_ITEM_FAILURE', payload: err };
};

export const fetchSaveItem = (productId) => {
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
        createdAt: new Date(),
      })
      .then(() => {
        dispatch(fetchSaveItemSuccess());
      })
      .catch((err) => dispatch(fetchSaveItemFailure(err)));
  };
};

//delete reducer is in usersSavedProductsReducer.js
export const fetchDeleteItemRequest = (item) => {
  return { type: 'FETCH_DELETE_ITEM_REQUEST', payload: item };
};

export const fetchDeleteItemSuccess = () => {
  return { type: 'FETCH_DELETE_ITEM_SUCCESS' };
};

export const fetchDeleteItemFailure = (err) => {
  return { type: 'FETCH_DELETE_ITEM_FAILURE', payload: err };
};

export const fetchDeleteItem = (productId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch(fetchDeleteItemRequest());
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    firestore
      .collection(`users/${userId}/savedProducts`)
      .doc(productId)
      .delete()
      .then(() => {
        dispatch(fetchDeleteItemSuccess());
        dispatch(fetchSavedItems());
      })
      .catch((err) => {
        dispatch(fetchDeleteItemFailure(err));
      });
  };
};
