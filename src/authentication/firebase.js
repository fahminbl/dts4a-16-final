// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHnS0pLD91cgZiORNO9xSlwC4Fam_WGQU",
    authDomain: "dts-react-project.firebaseapp.com",
    projectId: "dts-react-project",
    storageBucket: "dts-react-project.appspot.com",
    messagingSenderId: "747216104137",
    appId: "1:747216104137:web:8cc0c357d8e03483653b18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// const signInWithGithub = async () => {};

const googleProvider = new GoogleAuthProvider();
googleProvider.addScope("profile");
googleProvider.addScope("email");
// googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');



const signInWithGoogle = async () => {
    
    try {
        const userCredential = await signInWithPopup(auth, googleProvider);
        console.log(userCredential); 
        
        
        return userCredential;    
    } catch (error) {
        console.log("ERROR CODE: " + error.code)
        console.log("ERROR MSG: " + error.message)
    }

    
    // .then((result) => {
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     const credential = GoogleAuthProvider.credentialFromResult(result);
    //     const token = credential.accessToken;
    //     // The signed-in user info.
    //     const user = result.user;


    //     // ...
    // }).catch((error) => {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // The email of the user's account used.
    //     const email = error.customData.email;
    //     // The AuthCredential type that was used.
    //     const credential = GoogleAuthProvider.credentialFromError(error);
    //     // ...

    //     console.log(error); 
    // });

};

const registerUserWithEmail = async(email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential);

        return userCredential;
    } catch (error) {
        console.log("ERROR CODE: " + error.code)
        console.log("ERROR MSG: " + error.message);
    }
}

const signInWithEmail = async(email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCredential);

        return userCredential;
        
    } catch (error) {
        console.log(error);
        return false;
    }
}

const signOutFromEveryWhere = async() => {
    try {
        await signOut(auth);

    } catch (error) {
        console.log(error);
    }
}


export { auth, signInWithGoogle, signOutFromEveryWhere, registerUserWithEmail, signInWithEmail };
