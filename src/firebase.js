import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyD_sovslGiOYTthMfCHEzmYhoNEoaQX9OM",
    authDomain: "player-finder-88a2e.firebaseapp.com",
    projectId: "player-finder-88a2e",
    storageBucket: "player-finder-88a2e.appspot.com",
    messagingSenderId: "606162220622",
    appId: "1:606162220622:web:3bc4319c2597b7431bb51f",
    measurementId: "G-C01SZS9GZ1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
export { firebase };