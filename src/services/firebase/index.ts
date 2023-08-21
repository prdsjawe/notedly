import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "@config/firebase";

initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
