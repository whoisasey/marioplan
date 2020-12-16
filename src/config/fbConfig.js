import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Initialize Firebase
 const config = {
    apiKey: "AIzaSyCM49aknZbG-p_LQ3aUlLdC3N9H95ToqI8",
    authDomain: "marioplan-5b95f.firebaseapp.com",
    projectId: "marioplan-5b95f",
    storageBucket: "marioplan-5b95f.appspot.com",
    messagingSenderId: "822754140452",
    appId: "1:822754140452:web:07b8b6aac15201361693b1",
    measurementId: "G-1DXT5XBJYJ"
  };
  firebase.initializeApp(config);

	firebase.firestore().settings({timestampsInSnapshots: true})

	export default firebase;