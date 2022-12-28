import React, { useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform login logic here
    };

    return (
        <Container style={{ width: "800px", height: "500px" }}>
            <Card style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h5><b>LOG INTO MY STUDENTLIFTER</b></h5>
                <br></br>
                <form onSubmit={handleSubmit}>
                    <label>
                        <h9 style={{ fontSize: "10px" }}>EMAIL ADDRESS:</h9>
                        <br></br>
                        <input
                            type="text"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            style={{ width: "300px", padding: "5px" }}
                        />
                    </label>
                    <br />
                    <label>
                        <h9 style={{ fontSize: "10px" }}>PASSWORD: </h9>
                        <br></br>
                        <input
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            style={{ width: "300px", padding: "5px" }}
                        />
                    </label>
                    <br />
                    <br></br>
                    <Button variant="dark" style={{ width: "300px" }}>Log In</Button>
                    <br></br>
                    <br></br>
                </form>
                <Container>
                    <Row>
                        <h9 style={{ fontSize: "12px" }}><a href="url">I've forgotton my password.</a></h9>
                        <br></br>
                        <h9 style={{ fontSize: "12px" }}>New to StudentLifter? <a href="url">Create an Account.</a></h9>
                    </Row>
                </Container>
            </Card>
        </Container >
    );
}

export default LoginForm;