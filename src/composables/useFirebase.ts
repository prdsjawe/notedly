import { firebaseConfig } from "@config/firebase";
import { initializeApp } from "firebase/app";

export default () => {
  const firebaseApp = initializeApp(firebaseConfig);

  return firebaseApp;
};
