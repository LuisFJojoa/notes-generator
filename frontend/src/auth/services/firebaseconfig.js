import { initializeApp } from "firebase/app";
​​import {initializeAuth} from "@react-firebase/auth";
import {firebaseConfig} from './configFirebase'

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app);

