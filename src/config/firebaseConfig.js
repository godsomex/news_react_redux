import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyCImNZUoPu_6D4jd5ZCyvokTc1TNE2boZE",
  authDomain: "react-redux-news.firebaseapp.com",
  databaseURL: "https://react-redux-news.firebaseio.com",
  projectId: "react-redux-news",
  storageBucket: "react-redux-news.appspot.com",
  messagingSenderId: "613913023750"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
