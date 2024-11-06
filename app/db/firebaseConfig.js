import exp from "constants";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-POnf2s3vJ2CCeYyLOCmsGRp_8SP4FoY",
  authDomain: "pizza-app-b1726.firebaseapp.com",
  projectId: "pizza-app-b1726",
  storageBucket: "pizza-app-b1726.firebasestorage.app",
  messagingSenderId: "532308165678",
  appId: "1:532308165678:web:295e13f2a7cf1294f3cbbf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);