// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCLprccKvDSoBQqeRsCEIz3e2xVlYeHt50",
    authDomain: "react-cytaty.firebaseapp.com",
    projectId: "react-cytaty",
    storageBucket: "react-cytaty.appspot.com",
    messagingSenderId: "49319910252",
    appId: "1:49319910252:web:9ef3baa5aff892549fb149",
    measurementId: "G-8M9N8V39GS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
