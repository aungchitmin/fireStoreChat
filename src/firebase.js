import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ3N_lLuTpPxtoZSXEFA_45REJ8wObCsE",
  authDomain: "chatclone-dc50a.firebaseapp.com",
  projectId: "chatclone-dc50a",
  storageBucket: "chatclone-dc50a.appspot.com",
  messagingSenderId: "45872879161",
  appId: "1:45872879161:web:38eb3ca52ce00c6b825fe8"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
