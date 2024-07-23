// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "versevalley17rb.firebaseapp.com",
  projectId: "versevalley17rb",
  storageBucket: "versevalley17rb.appspot.com",
  messagingSenderId: "126645952724",
  appId: "1:126645952724:web:548b829ba3c52e3a8a5b41"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);