// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC00aKJ2kPolhviSDxVEpKYu33Q0qme2X0",
  authDomain: "chirper-ea2bb.firebaseapp.com",
  projectId: "chirper-ea2bb",
  storageBucket: "chirper-ea2bb.firebasestorage.app",
  messagingSenderId: "503480258921",
  appId: "1:503480258921:web:a81ddcf7c375b694cdadf8",
  measurementId: "G-F5YZZFQWS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);