// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUPYn5-HQPC26H1otHmtsbz77IY1PEq-E",
  authDomain: "apk-chat-app.firebaseapp.com",
  projectId: "apk-chat-app",
  storageBucket: "apk-chat-app.appspot.com",
  messagingSenderId: "1026684476905",
  appId: "1:1026684476905:web:c0626b85439cc1f18cbf78",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
