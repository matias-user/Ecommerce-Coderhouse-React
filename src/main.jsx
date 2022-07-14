import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaYta9YpRGm2I0Ry5C-wZrgpZag7oiiB8",
  authDomain: "proyecto-coderhouse-6ac8f.firebaseapp.com",
  projectId: "proyecto-coderhouse-6ac8f",
  storageBucket: "proyecto-coderhouse-6ac8f.appspot.com",
  messagingSenderId: "888386011180",
  appId: "1:888386011180:web:d05c64f69651f5a27e5189"

};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>
)
