import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFjLDO_hds0yklMCzPdZv1h9YbFMW2r24",
  authDomain: "ttsensor-app.firebaseapp.com",
  databaseURL: "https://ttsensor-app.firebaseio.com",
  projectId: "ttsensor-app",
  storageBucket: "ttsensor-app.appspot.com",
  messagingSenderId: "282914172141",
  appId: "1:282914172141:web:10b1d41c2437028f1530e4",
  measurementId: "G-SXFY9BRN57"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
