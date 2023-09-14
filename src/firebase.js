import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyArnRXGSb5Nne5X4FrWxVQvG-z2FdGfJFY",
  authDomain: "e-challange-312003.firebaseapp.com",
  projectId: "e-challange-312003",
  storageBucket: "e-challange-312003.appspot.com",
  messagingSenderId: "13132286914",
  appId: "1:13132286914:web:864d5737bab1dd9fe6645b",
  measurementId: "G-6YQWH2ZTP0"
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };