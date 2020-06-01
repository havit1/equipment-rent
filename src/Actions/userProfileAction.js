const fetchProfileInfoRequest = () => {
  return { type: 'FETCH_PROFILE_INFO_REQUEST' };
};

const fetchProfileInfoSuccess = (data) => {
  return { type: 'FETCH_PROFILE_INFO_SUCCESS', payload: data };
};

// const fetchProfileInfoFailure = err => {
//   return { type: "FETCH_PROFILE_INFO_FAILURE", payload: err };
// };

export const fetchProfileInfo = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch(fetchProfileInfoRequest());
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    firestore
      .collectionGroup('items')
      .where('ownerId', '==', userId)
      .onSnapshot((response) => {
        const items = response.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id;
          return data;
        });
        dispatch(fetchProfileInfoSuccess(items));
      });
    // .catch(err => {
    //   dispatch(fetchProfileInfoFailure(err));
    // });
  };
};
