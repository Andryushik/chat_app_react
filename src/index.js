import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { useAuthState } from 'react-firebase-hooks/auth';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import App from './App';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// TODO: Add your config settings
const firebaseConfig = {
  apiKey: 'AIzaSyCjLhIUsfBG4ywrVVoBk_x_r-c9MTpvGIk',
  authDomain: 'chat-react-a3d2e.firebaseapp.com',
  projectId: 'chat-react-a3d2e',
  storageBucket: 'chat-react-a3d2e.appspot.com',
  messagingSenderId: '55000285649',
  appId: '1:55000285649:web:273d8699ea118d788a20f0',
};

// TODO: add context hook or element
const Context = createContext([]);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// const [user] = useAuthState(auth);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{ auth, db }}>
    <App />
  </Context.Provider>,
);

export { Context };
