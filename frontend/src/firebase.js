// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg0Yl1PTwsZ0HLLfa8y8UHIigWqBhuQ2A",
  authDomain: "auth-development-a25ef.firebaseapp.com",
  projectId: "auth-development-a25ef",
  storageBucket: "auth-development-a25ef.appspot.com",
  messagingSenderId: "313051702956",
  appId: "1:313051702956:web:ff4ed199ad6297cefce109",
  measurementId: "G-FH8BT7CQJQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);