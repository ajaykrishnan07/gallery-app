// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIcEFIEGwJPJpr5JeHZPgqmGbmxjcrJII",
  authDomain: "galleryapp-react-8b5d1.firebaseapp.com",
  projectId: "galleryapp-react-8b5d1",
  storageBucket: "galleryapp-react-8b5d1.appspot.com",
  messagingSenderId: "768105006263",
  appId: "1:768105006263:web:fbf288725ed03b12a1f932",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Firestore = getFirestore(app);
console.log("123");
