// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "iiit-blog-549ee.firebaseapp.com",
  projectId: "iiit-blog-549ee",
  storageBucket: "iiit-blog-549ee.appspot.com",
  messagingSenderId: "229306763176",
  appId: "1:229306763176:web:61e006a5fa2b99dc353f9d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);