// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1qVGpS-e8h_DXQOOSUB4-oOq-ykstb-c",
  authDomain: "dexter-hiker.firebaseapp.com",
  projectId: "dexter-hiker",
  storageBucket: "dexter-hiker.appspot.com",
  messagingSenderId: "281339414561",
  appId: "1:281339414561:web:fa301ed424f97c84b7fb60",
  measurementId: "G-XWT6C7N07G",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
