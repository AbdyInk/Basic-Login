// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEYmXr_sVwBdPqbHVVnwryf6g2GMvl6as",
  authDomain: "vito-technologies.firebaseapp.com",
  projectId: "vito-technologies",
  storageBucket: "vito-technologies.appspot.com",
  messagingSenderId: "581464526900",
  appId: "1:581464526900:web:75344b8c30847f22887a61",
  measurementId: "G-WK8SMW68X9"
  };

  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);