import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
    apiKey: "AIzaSyDV5uRm6ATuq34rfXjaOEU_lx8QncPOd_s",
    authDomain: "react-slack-clone-63f76.firebaseapp.com",
    databaseURL: "https://react-slack-clone-63f76.firebaseio.com",
    projectId: "react-slack-clone-63f76",
    storageBucket: "react-slack-clone-63f76.appspot.com",
    messagingSenderId: "778947361207",
    appId: "1:778947361207:web:4e3fc16c1de554ce159032",
    measurementId: "G-CPNW8NKQTG"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  
  export default firebase;