import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7Ilv43H7jPZyukEqEVZudYfBk5o-iBk8",
  authDomain: "chat-app-b00d7.firebaseapp.com",
  projectId: "chat-app-b00d7",
  storageBucket: "chat-app-b00d7.appspot.com",
  messagingSenderId: "830283751473",
  appId: "1:830283751473:web:1fd6067ca1a046b5fc3510"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();


