// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };
const firebaseConfig = {
  apiKey: "AIzaSyCSNQAvY0TL7NaMzsaqgPYDKe7eFo4hZXY",
  authDomain: "project-1-9122.firebaseapp.com",
  projectId: "project-1-9122",
  storageBucket: "project-1-9122.appspot.com",
  messagingSenderId: "984013659372",
  appId: "1:984013659372:web:fba08ac982a3e2294099c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the storage service
const storage = getStorage(app);

export default storage;
