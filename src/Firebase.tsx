import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbFsulRPOjDhplxFEfojxEIURFpzDWDpI",
  authDomain: "portfolio-e58fc.firebaseapp.com",
  projectId: "portfolio-e58fc",
  storageBucket: "portfolio-e58fc.appspot.com",
  messagingSenderId: "504145761582",
  appId: "1:504145761582:web:769c87b23c30c061d1d6bf",
  measurementId: "G-MY1XCQSW0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);