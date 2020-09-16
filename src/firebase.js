import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA6pdlTXb5Z3DJJ-gM-_SuaELVM2sstGRw",
    authDomain: "facebook-clone-c23d8.firebaseapp.com",
    databaseURL: "https://facebook-clone-c23d8.firebaseio.com",
    projectId: "facebook-clone-c23d8",
    storageBucket: "facebook-clone-c23d8.appspot.com",
    messagingSenderId: "271059608128",
    appId: "1:271059608128:web:364163614c19b0ccd875a5",
    measurementId: "G-B6KX6Q3ZR8"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };

  export default db; 