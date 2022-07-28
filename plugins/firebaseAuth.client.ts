import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin((nuxtApp) => {
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

  console.log(app);
});
