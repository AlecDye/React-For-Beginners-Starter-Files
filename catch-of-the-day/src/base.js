import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDRe8Z8y-TbVyTq6NGVbugqRZStv_oOJig",
  authDomain: "catch-of-the-day-alec-dye.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-alec-dye.firebaseio.com"
  // projectId: "catch-of-the-day-alec-dye",
  // storageBucket: "catch-of-the-day-alec-dye.appspot.com",
  // messagingSenderId: "334753476133",
  // appId: "1:334753476133:web:4af87fc2c223a64b4fd9cc",
  // measurementId: "G-RZ9WFY34Q2"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
