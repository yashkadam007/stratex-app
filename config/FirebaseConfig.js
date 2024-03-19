// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXaD_RUM-rfHpuGRnQI7oAqo8-FRHdEj0",
  authDomain: "stratex-app.firebaseapp.com",
  projectId: "stratex-app",
  storageBucket: "stratex-app.appspot.com",
  messagingSenderId: "211333738661",
  appId: "1:211333738661:web:1ea60d93956f5866ac5d4c"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);