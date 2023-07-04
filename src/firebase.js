import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxWB76HF7DIDeWEcfWP4ti_CUwXKx5B2s",
  authDomain: "chatapp-8d640.firebaseapp.com",
  projectId: "chatapp-8d640",
  storageBucket: "chatapp-8d640.appspot.com",
  messagingSenderId: "879787113078",
  appId: "1:879787113078:web:338e4bc5a288e65c2fbd57"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app)
