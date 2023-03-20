import {
  collection,
  orderBy,
  query,
  onSnapshot,
  deleteDoc,
} from 'firebase/firestore';

async function deleteChatHistory(db) {
  const q = query(collection(db, 'messages'), orderBy('timestamp'));

  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      deleteDoc(doc(db, 'messages'));
    });
    return unsubscribe();
  });
}

export default deleteChatHistory;
