import { useState, useEffect, useContext } from 'react';
import {
  collection,
  query,
  getDocs,
  serverTimestamp,
  orderBy,
} from 'firebase/firestore';
import { Context } from '../index';

const useFirestore = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { db } = useContext(Context);

  useEffect(() => {
    const getData = async () => {
      try {
        const q = query(
          collection(db, 'messages'),
          orderBy('timestamp', 'desc'),
        );
        const querySnapshot = await getDocs(q);
        setMessages(querySnapshot.docs.map((doc) => doc.data()));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [db]);

  return [messages, loading, error];
};

export default useFirestore;
