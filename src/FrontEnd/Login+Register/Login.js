//React components
import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

// Firebase components
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../BackEnd/firebase/firebase';

function LoginForm() {
    const googleProvider = new GoogleAuthProvider();
    const GoogleLogin = async () => {
        try {
            //takes 2 parameters, the provider and auth
            const result = await signInWithPopup(auth, googleProvider);
            console.log(result.user);
        }
        catch (error) {
            console.log(error);
        }
    }

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
                            // value={username}
                            // onChange={(event) => setUsername(event.target.value)}
                            style={{ width: "300px", padding: "5px" }}
                        />
                    </label>
                    <br />
                    <label>
                        <h9 style={{ fontSize: "10px" }}>PASSWORD: </h9>
                        <br></br>
                        <input
                            type="password"
                            // value={password}
                            // onChange={(event) => setPassword(event.target.value)}
                            style={{ width: "300px", padding: "5px" }}
                        />
                    </label>
                    <br />
                    <br></br>
                    <Button variant="dark" style={{ width: "300px" }}>Log In</Button>
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