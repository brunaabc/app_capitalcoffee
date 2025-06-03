import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";





const firebaseConfig = {
  apiKey: "AIzaSyCXdqJnQENLydTGPd77LIrmskTyRUWDY7g",
  authDomain: "capital-coffee.firebaseapp.com",
  projectId: "capital-coffee",
  storageBucket: "capital-coffee.firebasestorage.app",
  messagingSenderId: "952302457474",
  appId: "1:952302457474:web:ae47d79ce8d191a838da9b",
  measurementId: "G-E0C11713X0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}