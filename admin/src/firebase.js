// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "turboflare-c11e7.firebaseapp.com",
  projectId: "turboflare-c11e7",
  storageBucket: "turboflare-c11e7.appspot.com",
  messagingSenderId: "322729674600",
  appId: "1:322729674600:web:dc1221713c65c9bbe8f8dd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);