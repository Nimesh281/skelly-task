// import firebase from "firebase/app"
import "firebase/auth";
// import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig  = {
  apiKey: "AIzaSyDdRudmrA4_4ETuDT0cSohCY3eAt3y5oMI",
  authDomain: "auth-production-8d1cc.firebaseapp.com",
  projectId: "auth-production-8d1cc",
  storageBucket: "auth-production-8d1cc.appspot.com",
  messagingSenderId: "242841906301",
  appId: "1:242841906301:web:d157e804e6634c9b7b5514",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}
