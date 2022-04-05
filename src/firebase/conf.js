// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfm29ayCWqFR2unR10nK9o5Uuqqiq2evU",
  authDomain: "personal-web-fedae.firebaseapp.com",
  projectId: "personal-web-fedae",
  storageBucket: "personal-web-fedae.appspot.com",
  messagingSenderId: "781028904994",
  appId: "1:781028904994:web:11430ebfd2ce8d544afa7b",
  measurementId: "G-GZ41LMTQ4E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
export { db, analytics };
