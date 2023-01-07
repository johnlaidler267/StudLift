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
        <Container style={{ width: "800px", height: "500px" }}>
            <Card style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <h5><b><FcLock /> SAVE TO WISHLIST</b></h5>
                <br />
                <p style={{ width: "58%", color: "darkgray" }}> Login or create an account to view to your wishlist. We'll drop you back at your wishlist after you have entered your details.</p>
                <br />
                <Button variant="secondary" style={{ width: "30%" }}>LOG IN</Button>
                <br />
                <Button variant="dark" style={{ width: "30%" }}>CREATE ACCOUNT</Button>
            </Card>
        </Container >
    );
}

export default LoginForm;