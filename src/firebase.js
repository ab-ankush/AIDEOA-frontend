// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAKXMgoIlHbCszOmqG7TElG-ZukDn4xYQ",
  authDomain: "aideoa-e13b1.firebaseapp.com",
  projectId: "aideoa-e13b1",
  storageBucket: "aideoa-e13b1.appspot.com",
  messagingSenderId: "661421011915",
  appId: "1:661421011915:web:3472d309fe8fddac04bc4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth()
export const db=getFirestore(app)
export default app