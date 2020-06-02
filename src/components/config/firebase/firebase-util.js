// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'

// Add the Firebase products that you want to use
import "firebase/auth"; // authorization
import "firebase/firestore"; // database

// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBl9ZmTbt226YVEKmxUuyJDfh18NibTvbk",
    authDomain: "diamond-clothing.firebaseapp.com",
    databaseURL: "https://diamond-clothing.firebaseio.com",
    projectId: "diamond-clothing",
    storageBucket: "diamond-clothing.appspot.com",
    messagingSenderId: "390969946473",
    appId: "1:390969946473:web:30cd40e5222176a5394df8",
    measurementId: "G-P2DZVE7MP2"
};

// ? Initialize our instance of Firebase
firebase.initializeApp(firebaseConfig);

// ? Export Libraries for use
export const auth = firebase.auth()
export const firestore = firebase.firestore();

// ? Both point to same doc location
// firestore.collection('users'.doc('someDocumentId'))
// firestore.doc('/users/someDocumentId/')

// ? Save a user to DB as document using user data from auth
export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) {
        return
    };

    // ? Get query reference object from FIrebase at locatoion to get snapshot
    // ? Reference will ALWAYS return something even if nothing exsists, use snap to make sure something exsists 
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();


    // ? Use snapshot to check if anything exsists in this location, create a document if not
    if (!snapShot.exists) {

        // ? Provide user data for the doc from the user provided in argument
        const { email } = userAuth;
        const createdAt = new Date();

        try {
            // ? Use document refrence for CRUD operations (create in this case)
            await userRef.set({
                email,
                createdAt,
                ...additionalData // name
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    // ? Return userRef in case more changes are wanted to be made
    return userRef;

};



// ? The Google provider class for google auth
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' })


export const googleSignIn = () => auth.signInWithPopup(googleProvider)

export const signOut = () => {
    firebase.auth().signOut()
        .then(function () {
            // Sign-out successful.
        }).catch(function (error) {
            // An error happened.
        });
}

// ? Convert a collection to hash map
export const convertCollectionSnapShotToMap = (collectionSnapshotObject) => {

    // ? Maps over array of docs in collection snapshot and returns object with desired data for use
    const transformedCollection = collectionSnapshotObject.docs.map((document) => {

        // ? Extract data from document
        const { title, items } = document.data();
   
        // ? Return Data from document after adding route and id of object 
        return {
            // ? encode for routes
            routeName: encodeURI(title.toLowerCase()),
            id: document.id,
            title,
            items
        }

    })

    // ? Returns hash map from array of documents ex. {hats: {hatsCollectionobject} }
    return transformedCollection.reduce((accumulator, collection) => {

        accumulator[collection.title.toLowerCase()] = collection;
        // console.log(`ACCUMULATOR ******** `,accumulator)
        return accumulator;

    }, {}
    )

}

export const addCollectionAndDocumentss = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)

    // Create Batch instance
    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {

        // ? Create new docReference Objects for each key in object (Creates UniqueId if doc() empty)
        const newDocRef = collectionRef.doc()

        // ? batch all set operations that will be done on eaach key
        batch.set(newDocRef, obj)

    })

    await batch.commit()

}

export default firebase