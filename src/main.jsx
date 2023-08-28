import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { initializeApp } from "firebase/app";

initializeApp({
  apiKey: "AIzaSyBIcEFIEGwJPJpr5JeHZPgqmGbmxjcrJII",
  authDomain: "galleryapp-react-8b5d1.firebaseapp.com",
  projectId: "galleryapp-react-8b5d1",
  storageBucket: "galleryapp-react-8b5d1.appspot.com",
  messagingSenderId: "768105006263",
  appId: "1:768105006263:web:fbf288725ed03b12a1f932",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);

