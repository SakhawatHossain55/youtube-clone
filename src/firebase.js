import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCLNumRZBsxthv_r8gVfP1lsxIJnUAJtq8",
    authDomain: "clone-fffb1.firebaseapp.com",
    projectId: "clone-fffb1",
    storageBucket: "clone-fffb1.appspot.com",
    messagingSenderId: "3168668640",
    appId: "1:3168668640:web:3dd6a9f0f49e046ccdb985"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase.auth()