import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from '@firebase/firestore'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbK5lnbCZ33K41viEFgjUNZAGaljWm6rQ",
  authDomain: "drawkurses.firebaseapp.com",
  projectId: "drawkurses",
  storageBucket: "drawkurses.appspot.com",
  messagingSenderId: "150895237270",
  appId: "1:150895237270:web:3b24d8c5e12e9fe39f4ab7",
  measurementId: "G-TJ2GMN1D82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const auth = getAuth(app)


