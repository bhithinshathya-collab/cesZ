// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA22dkbUXWW9TqlDwyfrlmuPnZJFZHTihg",
  authDomain: "my-awesome-project-4073f.firebaseapp.com",
  projectId: "my-awesome-project-4073f",
  storageBucket: "my-awesome-project-4073f.firebasestorage.app",
  messagingSenderId: "785965373315",
  appId: "1:785965373315:web:2ae146f3f4de6c385988b6",
  measurementId: "G-7VXR1KWMQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
