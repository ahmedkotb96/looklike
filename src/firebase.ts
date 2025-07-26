// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKNtahW5hgPPAenBZyd4Ifs43bTDx5Wik",
  authDomain: "looklike-37a59.firebaseapp.com",
  projectId: "looklike-37a59",
  storageBucket: "looklike-37a59.firebasestorage.app",
  messagingSenderId: "868820323742",
  appId: "1:868820323742:web:57c6645d1993b25a6cda8f",
  measurementId: "G-N08B22KNBP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
