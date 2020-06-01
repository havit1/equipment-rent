import { storage } from '../config/fbConfig';

export const addItemAction = (newItem) => {
  return (dispath, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const ownerId = getState().firebase.auth.uid;

    newItem.youtubeLink = getId(newItem.youtubeLink);

    storage
      .child(`images/${ownerId}_${new Date().getTime()}`)
      .put(newItem.image)
      .then(async (snapshot) => {
        const downloadUrl = await snapshot.ref.getDownloadURL();
        console.log(downloadUrl);
        newItem.image = snapshot.metadata.fullPath;
        newItem.displayImageUrl = downloadUrl;
        firestore
          .collection(`categories/${newItem.category.id}/items`)
          .add({
            ...newItem,
            ownerFirstName: profile.firstName,
            ownerLastName: profile.lastName,
            ownerId,
            createdAt: new Date(),
          })
          .then(() => {
            dispatchEvent({ type: 'ADD_NEW_PRODUCT', payload: newItem });
          })
          .catch((err) => {
            dispath({ type: 'ADD_NEW_PRODUCT_ERROR', payload: err });
          });
      });
  };
};

function getId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
}
