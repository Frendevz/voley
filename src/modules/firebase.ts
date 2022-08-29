// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDiVVHNX2p18cpdg4QQZjDbCXeuL5QIwKg',
  authDomain: 'voley-44199.firebaseapp.com',
  projectId: 'voley-44199',
  storageBucket: 'voley-44199.appspot.com',
  messagingSenderId: '179779674335',
  appId: '1:179779674335:web:80968a8c80548de2b8496a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {});
export default app;
