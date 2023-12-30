//IMPORT React elements
import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

// IMPORT ICons
import { FcLock } from 'react-icons/fc'

function WishlistNLI() {

    const RegisterBtn = () => {
        return (
            <Button href='/register' variant="dark" style={{ width: "30%" }}>CREATE ACCOUNT</Button>
        )
    }

    const LoginBtn = () => {
        return (
            <Button href='login' variant="light" style={{ width: "30%", border: '1px solid black' }}>LOG IN</Button>
        )
    }

    const Header = () => {
        return (
            <h5><b><FcLock /> SAVE TO WISHLIST</b></h5>
        )
    }

    const LoginNotice = () => {
        return (
            <p style={{ width: "20%", color: "darkgray" }}> Login or create an account to view to your wishlist. We'll drop you back at your wishlist after you have entered your details.</p>
        )
    }

    return (
        <div>
            <Card className='d-flex flex-column justify-content-center align-items-center border-0' style={{ textAlign: 'center', padding: '70px' }}>
                <Header/>
                <br />
                <LoginNotice/>
                <br />
                <LoginBtn/>
                <br />
                <RegisterBtn/>
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

export default WishlistNLI;