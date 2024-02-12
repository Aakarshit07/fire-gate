// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJH6kxadbsmtoRhBHQ6JF3_pB24KkW-J8",
  authDomain: "react-form-app-e9743.firebaseapp.com",
  projectId: "react-form-app-e9743",
  storageBucket: "react-form-app-e9743.appspot.com",
  messagingSenderId: "851670824018",
  appId: "1:851670824018:web:b79d4c8ef7fbc310fc1b8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);