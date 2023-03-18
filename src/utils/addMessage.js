import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const addMessage = async (message, user, db) => {
  await addDoc(collection(db, 'messages'), {
    uid: user.uid,
    displayName: user.displayName,
    photoURL: user.photoURL,
    message: message,
    timestamp: serverTimestamp(),
  });
};

export default addMessage;
