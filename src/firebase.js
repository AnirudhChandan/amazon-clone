// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAe-VZ3vMe-EGSGEV3_pfCYhgGyji8yjso",
  authDomain: "clone-87ec2.firebaseapp.com",
  projectId: "clone-87ec2",
  storageBucket: "clone-87ec2.appspot.com",
  messagingSenderId: "520392926358",
  appId: "1:520392926358:web:ec2379a72bb8f004b84eb7",
  measurementId: "G-YCNTZHCSTK",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBugo8DlI5cwvc-SB7Tei_QAPm54WqNuHY",
//   authDomain: "challenge-940e1.firebaseapp.com",
//   projectId: "challenge-940e1",
//   storageBucket: "challenge-940e1.appspot.com",
//   messagingSenderId: "206512188254",
//   appId: "1:206512188254:web:b6aaf2bd644c8083457dcf",
//   measurementId: "G-SP2LWV3TL8",
// };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
