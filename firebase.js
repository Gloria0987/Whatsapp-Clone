// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDJxyNZGWBkE5pzjvB8Mz-4CIYZvxD9qC8",
    authDomain: "whatsapp-clone-1cbcb.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-1cbcb.firebaseio.com",
    projectId: "whatsapp-clone-1cbcb",
    storageBucket: "whatsapp-clone-1cbcb.appspot.com",
    messagingSenderId: "477695847644",
    appId: "1:477695847644:web:a5a8c4687a190599879819",
    measurementId: "G-5205G0MZ8D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{auth, provider}
  export default db;