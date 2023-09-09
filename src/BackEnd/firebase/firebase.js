// Import necessary Firebase modules
import { initializeApp } from 'firebase/app';
import { getAuth, updateProfile } from 'firebase/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

console.log("INSIDE firebase.js")
console.log(process.env.REACT_APP_FIREBASE_API_KEY)
console.log(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN)
console.log(process.env.REACT_APP_FIREBASE_PROJECT_ID)
console.log(process.env.REACT_APP_FIREBASE_STORAGE_BUCKET)
console.log(process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID)
console.log(process.env.REACT_APP_FIREBASE_APP_ID)

const app = initializeApp({
    apiKey: "AIzaSyAsOAxKrZEI27lEN5QDhIV6zddR0MSB72Q",
    authDomain: "auth-development-c11f2.firebaseapp.com",
    projectId: "auth-development-c11f2",
    storageBucket: "auth-development-c11f2.appspot.com",
    messagingSenderId: "303307842721",
    appId: "1:303307842721:web:fce2da0f37d521afa8fce0",
})

// Get the Firebase authentication object
export const auth = getAuth(app);

// Function to register a new user
async function register(email, password, confirmPassword, firstName, lastName, gender, dateOfBirth) {
    if (password != confirmPassword) {
        alert("Passwords do not match");
        return;
    }
    try {
        // Create a new user with the provided email and password
        const resp = await createUserWithEmailAndPassword(auth, email, password);

        // Update the user's display name with first name and last name
        await updateProfile(resp.user, { displayName: `${firstName} ${lastName}` });
    }
    catch (error) {
        alert(error.message);
    }
}

// Function to log in a user
async function login(email, password) {
    try {
        // Sign in the user with the provided email and password
        const resp = await signInWithEmailAndPassword(auth, email, password);
        return resp.user;
    }
    catch (error) {
        alert(error.message);
    }
}

// Function to log out a user
async function logout() {
    try {
        // Sign out the currently authenticated user
        await signOut(auth);
    }
    catch (error) {
        alert(error.message);
    }
}

// Export an object with functions for registration, login, and logout
export const firebasedb = {
    register: register,
    login: login,
    logout: logout,
}