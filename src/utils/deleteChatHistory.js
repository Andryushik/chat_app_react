import {
  collection,
  orderBy,
  query,
  onSnapshot,
  deleteDoc,
  doc,
} from 'firebase/firestore';

async function deleteChatHistory(db) {
  const q = query(collection(db, 'messages'), orderBy('timestamp'));

  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach(async (message) => {
      await deleteDoc(doc(db, 'messages', message.id));
    });
    return unsubscribe();
  });
}

export default deleteChatHistory;
