// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6u2AKbxckWjHls7zsW6PgXX1D8vrrSe4",
  authDomain: "linkverse-60c47.firebaseapp.com",
  projectId: "linkverse-60c47",
  storageBucket: "linkverse-60c47.appspot.com",
  messagingSenderId: "564770562130",
  appId: "1:564770562130:web:dc31fcd570d6c5a28e7f8b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
