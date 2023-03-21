import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxI6ntuGiGrne-QqrxKpt7605b_muiKjQ",
  authDomain: "chatapp-4be26.firebaseapp.com",
  projectId: "chatapp-4be26",
  storageBucket: "chatapp-4be26.appspot.com",
  messagingSenderId: "484640568170",
  appId: "1:484640568170:web:1759425ecac993ec26eb13"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app)
