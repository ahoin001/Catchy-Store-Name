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

// ?Initialize our instance of Firebase
firebase.initializeApp(firebaseConfig);

// ? Export Libraries for use
export const auth = firebase.auth()
export const firestore = firebase.firestore();

// ? Both retrieve the same doc 
// firestore.collection('users'.doc('someDocumentId'))
// firestore.doc('/users/someDocumentId/')

// ? Save a user to DB as document using user data from auth
export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return;

    // ? Create user in database with ID provided by user from auth (auth has it's own cloud of signed in users)
    // ? Returns document for manipulation
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    // console.log(`SNAPSHOT OF USR Created in DOC :`, snapShot)
    // console.log(`SNAPSHOT OF USR AFTER DOC CREATED BEFORE GETTING DOC DATA`, snapShot.exists)

    // ? Check for any data in the Doc (At this point there should be no data and we are checking the doc by it's id)
    if (!snapShot.exists) {

        // ? Provide user data for the doc from the user data saved in auth
        const { name, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                name,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;

};

// ? The Google provider class for google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })


export const googleSignIn = () => firebase.auth().signInWithPopup(provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // let token = result.credential.accessToken;
        // The signed-in user info.
        // let user = result.user;
        // ...
    }).catch(function (error) {
        // Handle Errors here.
        // let errorCode = error.code;
        // let errorMessage = error.message;
        // The email of the user's account used.
        // let email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        // let credential = error.credential;
        // ...
    });

export const signOut = () => {
    firebase.auth().signOut()
        .then(function () {
            // Sign-out successful.
        }).catch(function (error) {
            // An error happened.
        });
}

export default firebase