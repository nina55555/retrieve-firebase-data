import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.MY_API_Key,
    authDomain: "retrieve-firebase-data-37d56.firebaseapp.com",
    projectId: "retrieve-firebase-data-37d56",
    storageBucket: "retrieve-firebase-data-37d56.appspot.com",
    messagingSenderId: "263759086304",
    appId: "1:263759086304:web:9c5b30caaac8fb81f68685"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export default getFirestore();