import { useState, createContext } from 'react';
import { firebaseConfig } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const initialState = [];

export const AuthContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);

  const [darkMode, setDarkMode] = useState(true);
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider
        value={{ auth, db, user, loading, error, darkMode, setDarkMode }}
      >
        {children}
      </AuthContext.Provider>
    </ThemeProvider>
  );
};
