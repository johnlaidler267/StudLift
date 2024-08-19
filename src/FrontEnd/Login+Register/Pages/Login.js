//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//IMPORT Custom Styling
import '../Styling/Login.css'

//IMPORT React components
import React, { useState, useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

// IMPORT Firebase
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../BackEnd/firebase/firebase';

// IMPORT Context
import UserInfoContext from '../../../Contexts/UserInfoContext'
import LoginContext from '../../../Contexts/LoginContext'

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function LoginForm() {
    // initialize the navigate function to redirect to other pages
    const navigate = useNavigate();
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Todo
    const [login, setLogin] = useContext(LoginContext);
    const [userInfo, setUserInfo] = useContext(UserInfoContext);
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const googleProvider = new GoogleAuthProvider();
    const GoogleLogin = async () => {
        try {
            //takes 2 parameters, the provider and auth
            const result = await signInWithPopup(auth, googleProvider);
            navigate("/");
        }
        catch (error) {
            console.log(error);
        }
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Create state variables for email and password inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handler function for login
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            // Sign in with email and password
            let userCredential = await signInWithEmailAndPassword(auth, email, password);
            // Successfully logged in, you can navigate to a different page or perform other actions here
            navigate("/")
            fetchUserDetails(userCredential.user.uid);
        } catch (error) {
            // Handle login errors, e.g., display an error message to the user
            console.error(error.message);
        }
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // -> Fetch the user details from MongoDB

    const fetchUserDetails = async (firebaseId) => {
        const response = await fetch(`http://localhost:3000/record/${firebaseId}`, {
            method: "GET",
        }).catch(err => {
            window.alert(err)
            return;
        });

        if (!response.ok) {
            const message = `An error has occurred: ${response.statusText}`;
            window.alert(message);
            return;
        }
        const userData = await response.json();
        if (!userData) {
            window.alert(`Record with id ${firebaseId} not found`);
            navigate("/");
            return;
        }

        //Todo
        setLogin(userData);
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    return (
        <div>
            <Card style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: '70px', border: 'none' }}>
                <h5><b>LOG INTO MY STUDENTLIFTER</b></h5>
                <br></br>
                <form >
                    <Button onClick={GoogleLogin} variant="dark" style={{ width: "300px" }}>Sign in with Google</Button>
                    <br />
                    <br />
                    <label>
                        <h9 style={{ fontSize: "10px" }}>EMAIL ADDRESS:</h9>
                        <br></br>
                        <input
                            type="text"
                            onChange={(event) => setEmail(event.target.value)}
                            style={{ width: "300px", padding: "5px" }}
                        />
                    </label>
                    <br />
                    <label>
                        <h9 style={{ fontSize: "10px" }}>PASSWORD: </h9>
                        <br></br>
                        <input
                            type="password"
                            onChange={(event) => setPassword(event.target.value)}
                            style={{ width: "300px", padding: "5px" }}
                        />
                    </label>
                    <br />
                    <br></br>
                    <Button onClick={handleLogin} variant="dark" style={{ width: "300px" }}>Log In</Button>
                    <br></br>
                    <br></br>
                </form>
                <br />
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h9 style={{ fontSize: "12px", margin: '1em' }}><a href="url" style={{ color: 'black', textDecoration: 'none' }}>I've forgotton my password.</a></h9>
                    <h9 style={{ fontSize: "12px" }}>New to StudentLifter? <a href="/register">Create an Account.</a></h9>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </Card>
        </div>
    );
}

export default LoginForm;