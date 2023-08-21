import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

export default {
  async signup(login: LoginCredentials) {
    return await createUserWithEmailAndPassword(
      auth,
      login.email,
      login.password
    );
  },
  async signin(login: LoginCredentials) {
    return await signInWithEmailAndPassword(auth, login.email, login.password);
  },
  async signout() {
    await signOut(auth);
  },
};
