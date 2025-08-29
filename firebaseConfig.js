import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4_bdtjuXB1sO74BDDODgmU2INI7eVPvA",
  authDomain: "goalproject-rrs.firebaseapp.com",
  projectId: "goalproject-rrs",
  storageBucket: "goalproject-rrs.firebasestorage.app",
  messagingSenderId: "1096308702184",
  appId: "1:1096308702184:web:6b5f47eb40bc68e58b025d"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)