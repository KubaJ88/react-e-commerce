import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBWlKmSt1ajaubfZ4s7k7wBobtA2J_GoRM",
    authDomain: "shop-db-29a6e.firebaseapp.com",
    databaseURL: "https://shop-db-29a6e.firebaseio.com",
    projectId: "shop-db-29a6e",
    storageBucket: "shop-db-29a6e.appspot.com",
    messagingSenderId: "263591099872",
    appId: "1:263591099872:web:854ee0095b0c34dc9b3f85",
    measurementId: "G-R38XC3G3WG"
  }


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: 'select_account'
  });
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;