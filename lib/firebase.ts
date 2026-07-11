import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbFsulRPOjDhplxFEfojxEIURFpzDWDpI",
  authDomain: "portfolio-e58fc.firebaseapp.com",
  projectId: "portfolio-e58fc",
  storageBucket: "portfolio-e58fc.firebasestorage.app",
  messagingSenderId: "504145761582",
  appId: "1:504145761582:web:769c87b23c30c061d1d6bf",
  measurementId: "G-MY1XCQSW0R",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
