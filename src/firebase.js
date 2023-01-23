// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfmXAE9iBjuIiWrVbDevQpf_Kk-x39Rm0",
  authDomain: "todo-learnts.firebaseapp.com",
  databaseURL: "https://todo-learnts-default-rtdb.firebaseio.com",
  projectId: "todo-learnts",
  storageBucket: "todo-learnts.appspot.com",
  messagingSenderId: "988999668237",
  appId: "1:988999668237:web:2c834e277f8ce4e4a17b44",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export const provider = new GoogleAuthProvider();
