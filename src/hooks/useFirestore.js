import { useState, useEffect, useContext } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { Context } from '../index';

const useFirestore = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { db } = useContext(Context);

  useEffect(() => {
    try {
      const q = query(collection(db, 'messages'), orderBy('timestamp', 'desc'));

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let messagesTemp = [];
        querySnapshot.forEach((doc) => {
          messagesTemp.push({
            ...doc.data(),
            id: doc.id,
          });
        });
        setMessages(messagesTemp);
        console.log(messagesTemp);
      });

      return unsubscribe();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return [messages, loading, error];
};

export default useFirestore;
