import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
// import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { getAuth } from 'firebase/auth';
// import { getStorage } from 'firebase/storage';
import './index.css';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import reportWebVitals from './reportWebVitals';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCjLhIUsfBG4ywrVVoBk_x_r-c9MTpvGIk',
  authDomain: 'chat-react-a3d2e.firebaseapp.com',
  projectId: 'chat-react-a3d2e',
  storageBucket: 'chat-react-a3d2e.appspot.com',
  messagingSenderId: '55000285649',
  appId: '1:55000285649:web:273d8699ea118d788a20f0',
};

const Context = createContext([]);

// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();
// const auth = getAuth(app);
// const firestore = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{ firebase, auth, firestore }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export { Context };
