import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyASk7KbKfmIjAQdSPAkpd-zkfTXbuwQBdc",
    authDomain: "photo-gallery-cdd5d.firebaseapp.com",
    databaseURL: "https://photo-gallery-cdd5d.firebaseio.com",
    projectId: "photo-gallery-cdd5d",
    storageBucket: "photo-gallery-cdd5d.appspot.com",
    messagingSenderId: "826111131279",
    appId: "1:826111131279:web:8efe0a2965a49dbb38fafa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp };