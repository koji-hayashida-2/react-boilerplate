import {initializeApp} from "firebase/app";
import {firebaseConfig} from "./config.ts";

export const firebaseApp = initializeApp(firebaseConfig);