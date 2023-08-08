//React components
import React, { useState } from 'react';
import { Card, Container, Button } from 'react-bootstrap';

// Icons
import { FcLock } from 'react-icons/fc'

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform login logic here
    };

    return (
        <div>
            <Card style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: 'center', padding: '70px', border: 'none' }}>
                <h5><b><FcLock /> SAVE TO WISHLIST</b></h5>
                <br />
                <p style={{ width: "20%", color: "darkgray" }}> Login or create an account to view to your wishlist. We'll drop you back at your wishlist after you have entered your details.</p>
                <br />
                <Button href='login' variant="light" style={{ width: "30%", border: '1px solid black' }}>LOG IN</Button>
                <br />
                <Button href='/register' variant="dark" style={{ width: "30%" }}>CREATE ACCOUNT</Button>
                <br />
                <br />
                <br />
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