export const removeItemAction = (item) => {
  return (dispath, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection(`categories/${item.category.id}/items`)
      .doc(`${item.id}`)
      .delete()
      .then(() => {})
      .catch((err) => {});
  };
};
