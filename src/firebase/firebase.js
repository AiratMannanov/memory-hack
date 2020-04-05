// import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/messaging'
import firebase from 'firebase'
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBzX0IEQWw8q69igBNHhYQzSa2xjCFpJbY",
  authDomain: "ded-bab.firebaseapp.com",
  databaseURL: "https://ded-bab.firebaseio.com",
  projectId: "ded-bab",
  storageBucket: "ded-bab.appspot.com",
  messagingSenderId: "570719435064",
  appId: "1:570719435064:web:9e8f5b5d6d7b69c2a0a9cd",
  measurementId: "G-QVLXG50PKX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const database = firebase.database();

export {
  database, storage, firebase as default
}
