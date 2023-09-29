// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_LDeuDbKlwIehAd0Ojkq1YYGMRXeSUMo",
    authDomain: "user-email-password-auth-4a2d8.firebaseapp.com",
    projectId: "user-email-password-auth-4a2d8",
    storageBucket: "user-email-password-auth-4a2d8.appspot.com",
    messagingSenderId: "496767383685",
    appId: "1:496767383685:web:0d50adae17422c15ad91ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export default app;
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
