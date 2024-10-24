// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIlke5Wi4TMP_fQ4FrsLeyFv99S6StU-k",
  authDomain: "tea-store-server.firebaseapp.com",
  projectId: "tea-store-server",
  storageBucket: "tea-store-server.appspot.com",
  messagingSenderId: "702344407622",
  appId: "1:702344407622:web:139b53a1cec9b752927847"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);