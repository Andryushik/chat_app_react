import { useContext, useEffect, useState } from 'react';
import { collection, orderBy, query, onSnapshot } from 'firebase/firestore';
import { AuthContext } from '../context/GlobalState';

const useGetMessages = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { db } = useContext(AuthContext);

  useEffect(() => {
    try {
      const q = query(collection(db, 'messages'), orderBy('timestamp'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let messagesTemp = [];
        querySnapshot.forEach((doc) => {
          messagesTemp.push({ ...doc.data(), id: doc.id });
        });
        setMessages(messagesTemp);
      });

      return () => unsubscribe();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [db]);

  return [messages, loading, error];
};

export default useGetMessages;
