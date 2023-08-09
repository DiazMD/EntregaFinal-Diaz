// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCzgMYxU5plAlK112cruWrBBszr2iJL9M",
  authDomain: "entregafinalrj-diaz.firebaseapp.com",
  projectId: "entregafinalrj-diaz",
  storageBucket: "entregafinalrj-diaz.appspot.com",
  messagingSenderId: "586602297415",
  appId: "1:586602297415:web:544119b7c2574ab6591962"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);