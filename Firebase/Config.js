// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "chat-786e7.firebaseapp.com",
  projectId: "chat-786e7",
  storageBucket: "chat-786e7.appspot.com",
  messagingSenderId: "346232654103",
  appId: "1:346232654103:web:18a1c6c1eafa47a2d74f52"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const firestore = getFirestore();

const MESSAGES = 'messages';

export {
  firestore,
  collection,
  addDoc,
  serverTimestamp,
  MESSAGES
};