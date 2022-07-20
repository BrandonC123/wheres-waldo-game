import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { getFirestore } from "firebase/firestore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

const firebaseConfig = {
    apiKey: "AIzaSyD4XUC9UR-tCpAAnoNP62X7cmv3RfpzpzA",
    authDomain: "where-s-waldo-eb5d1.firebaseapp.com",
    projectId: "where-s-waldo-eb5d1",
    storageBucket: "where-s-waldo-eb5d1.appspot.com",
    messagingSenderId: "189216827741",
    appId: "1:189216827741:web:91cf46a65d333266fde0b4",
    measurementId: "G-42Z97WC3H7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db;
const analytics = getAnalytics(app);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
