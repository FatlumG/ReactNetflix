// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYmqeU6JCI8coRprAy3fsK7gbj8Vctvb8",
  authDomain: "netflix-clone-app-c9e26.firebaseapp.com",
  projectId: "netflix-clone-app-c9e26",
  storageBucket: "netflix-clone-app-c9e26.firebasestorage.app",
  messagingSenderId: "834206207423",
  appId: "1:834206207423:web:1d0af24b4c6ed80d7de50a",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
