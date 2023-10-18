import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWyjOtDo37j74YS6usJbSTx19z0A-x5Xw",
  authDomain: "cart-fe496.firebaseapp.com",
  projectId: "cart-fe496",
  storageBucket: "cart-fe496.appspot.com",
  messagingSenderId: "48224686498",
  appId: "1:48224686498:web:ce3f1dc3ccc8928852a2fb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


