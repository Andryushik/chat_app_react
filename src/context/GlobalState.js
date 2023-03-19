import { createContext } from 'react';
import { firebaseConfig } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const initialState = [];

export const AuthContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);
  let unread = false;

  return (
    <AuthContext.Provider value={{ auth, db, user, loading, error, unread }}>
      {children}
    </AuthContext.Provider>
  );
};
