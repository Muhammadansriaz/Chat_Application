// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt0wkqr5Zqy3DfD4Y7P_i1EEfYDv2_gEw",
  authDomain: "chat-app-e8aa3.firebaseapp.com",
  projectId: "chat-app-e8aa3",
  storageBucket: "chat-app-e8aa3.appspot.com",
  messagingSenderId: "38484980886",
  appId: "1:38484980886:web:0d65d696aa69bce334beb7",
  measurementId: "G-SRD4Y2YNLZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
