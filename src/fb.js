import firebase from "firebase/app";
import 'firebase/firestore'


// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyDVGC8FR4WEyntNCSuRGfzb3mjrWXQXOy4",
    authDomain: "vuetify-12b08.firebaseapp.com",
    databaseURL: "https://vuetify-12b08.firebaseio.com",
    projectId: "vuetify-12b08",
    storageBucket: "vuetify-12b08.appspot.com",
    messagingSenderId: "871440568519",
    appId: "1:871440568519:web:85feaddb592ce46a4c2ee2",
    measurementId: "G-D2DRED87EL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
export default db;
