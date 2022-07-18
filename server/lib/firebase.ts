// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLQy5M74OMgGwc1nBAjSSYUTv0bozfrsE",
  authDomain: "angat-kabuhayan.firebaseapp.com",
  projectId: "angat-kabuhayan",
  storageBucket: "angat-kabuhayan.appspot.com",
  messagingSenderId: "666123735940",
  appId: "1:666123735940:web:82d5a36d2ca9c71c2903d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)