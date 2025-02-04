// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_RI2Yn7uMxYvmjmdYWoDBvU345NJiCnc",
  authDomain: "flicktok-d13ec.firebaseapp.com",
  projectId: "flicktok-d13ec",
  storageBucket: "flicktok-d13ec.firebasestorage.app",
  messagingSenderId: "36291500456",
  appId: "1:36291500456:web:2b72c9feb28bfa8755659d",
  measurementId: "G-4SFX331WR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);