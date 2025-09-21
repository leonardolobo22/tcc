// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ793IBptkXpoLjcjwibVRHqty1S0_9D8",
  authDomain: "parque-arvores.firebaseapp.com",
  projectId: "parque-arvores",
  storageBucket: "parque-arvores.firebasestorage.app",
  messagingSenderId: "463237093792",
  appId: "1:463237093792:web:11a72cd0b8b44aaa146cc5",
  measurementId: "G-GM9SRL7HHV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);


