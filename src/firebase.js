import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAfNHW9oTIXnUoF2enKbkX_lCCfTaohZnE",
    authDomain: "react-firebase-auth-40caf.firebaseapp.com",
    projectId: "react-firebase-auth-40caf",
    storageBucket: "react-firebase-auth-40caf.appspot.com",
    messagingSenderId: "682487016253",
    appId: "1:682487016253:web:c1ef38b34e7838fa367354"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

  export {auth, googleAuthProvider, facebookAuthProvider};
