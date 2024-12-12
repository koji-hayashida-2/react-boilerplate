import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {firebaseApp} from "./app.ts";

export const auth = getAuth(firebaseApp);
export const googleProvider = new GoogleAuthProvider();