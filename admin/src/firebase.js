import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Conifguration of web app
const firebaseConfig = {
  apiKey: process.env.APP_KEY,
  authDomain: "netflix-933e7.firebaseapp.com",
  projectId: "netflix-933e7",
  storageBucket: "netflix-933e7.appspot.com",
  messagingSenderId: "934692324878",
  appId: "1:934692324878:web:d154a27adca41042ba1e5f",
  measurementId: "G-744HS46493"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export default storage;
