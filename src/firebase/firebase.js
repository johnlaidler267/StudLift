import { initializeApp } from 'firebase/app'
import { getAuth, updateProfile } from 'firebase/auth'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

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

export const auth = getAuth(app)

async function register(email, password, confirmPassword, firstName, lastName, gender, dateOfBirth) {
    if (password != confirmPassword) {
        alert("Passwords do not match")
        return
    }
    try {
        const resp = await createUserWithEmailAndPassword(auth, email, password);

        await updateProfile(resp.user, { displayName: `${firstName} ${lastName}` })
    }
    catch (error) {
        alert(error.message)
    }
}

async function login(email, password) {
    try {
        const resp = await signInWithEmailAndPassword(auth, email, password)
        return resp.user;
    }
    catch (error) {
        alert(error.message)
    }
}

async function logout() {
    try {
        await signOut(auth)
    }
    catch (error) {
        alert(error.message)
    }
}

export const firebasedb = {
    register: register,
    login: login,
    logout: logout,
}
