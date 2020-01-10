export const addItemAction = newItem => {
  return (dispath, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const ownerId = getState().firebase.auth.uid;

    firestore
      .collection(`categories/${newItem.category.id}/items`)
      .add({
        ...newItem,
        ownerFirstName: profile.firstName,
        ownerLastName: profile.lastName,
        ownerId,
        createdAt: new Date()
      })
      .then(() => {
        dispatchEvent({ type: "ADD_NEW_PRODUCT", payload: newItem });
      })
      .catch(err => {
        dispath({ type: "ADD_NEW_PRODUCT_ERROR", payload: err });
      });
  };
};
