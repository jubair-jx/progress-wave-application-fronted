// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsb3xiGH5wNjQsQH4jUi1pCWU7DAuPw-U",
  authDomain: "progress-wave.firebaseapp.com",
  projectId: "progress-wave",
  storageBucket: "progress-wave.appspot.com",
  messagingSenderId: "274910403321",
  appId: "1:274910403321:web:dc847c44315e1d86c3e028",
  measurementId: "G-B4LZ84DS8Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
