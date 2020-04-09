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
  };


  export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return;



    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    // console.log(snapShot);


    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            
            await userRef.set({
                displayName, 
                email,
                createdAt,
                ...additionalData
            })

        } catch (error) {
            console.log('error', error.message);
            

        }
        
    }

    return userRef;
    
    

  };


  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
      const collectionRef = firestore.collection(collectionKey);
    //   console.log(collectionRef);


      const batch = firestore.batch();
      objectsToAdd.forEach(obj => {
          const newDocRef = collectionRef.doc();
        //   console.log(newDocRef)
        batch.set(newDocRef, obj);
      });

      return await batch.commit()

  };


  export const convertCollectionsSnapshotToMap = (collections) => { 
      const transformedCollection = collections.docs.map(doc => { 
          const {title, items} = doc.data();

          return {
              routeName: encodeURI(title.toLowerCase()),
              id: doc.id,
              title,
              items
          }
      });

    //   console.log(transformedCollection);
    return transformedCollection.reduce((acc, collection) => {acc[collection.title.toLowerCase()] = collection;
    return acc}, {})

    // console.log(transformedCollection)
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