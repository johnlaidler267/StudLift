import '../Styling/FooterStyling.css'
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap'

const Footer = () => {

    const SupportLinks = () => {
        return (
            <div className='d-flex flex-column'>
                <h5 className='footer-header'>HELP</h5>
                <a href='/FAQ' className='footer-link'>FAQ</a>
                <a href='/FAQ' className='footer-link'>Delivery Information</a>
                <a href='/FAQ' className='footer-link'>Returns Policy</a>
                <a href='/FAQ' className='footer-link'>Make A Return</a>
                <a href='/FAQ' className='footer-link'>Orders</a>
            </div>
        )
    }

    const AccountLinks = () => {
        return (
            <div className='d-flex flex-column'>
                <h5 className='footer-header'>MY ACCOUNT</h5>
                <a href='' className='footer-link'>Login</a>
                <a href='' className='footer-link'>Register</a>
            </div>
        )
    }

    const InfoLinks = () => {
        return (
            <div className='d-flex flex-column'>
                <h5 className='footer-header'>PAGES</h5>
                <a href='' className='footer-link'>StudentLifter Central</a>
                <a href='' className='footer-link'>About Us</a>
                <a href='' className='footer-link'>Careers</a>
                <a href='' className='footer-link'>Student Discount</a>
                <a href='' className='footer-link'>Veterans Discount</a>
                <a href='' className='footer-link'>Accessibility Statement</a>
                <a href='' className='footer-link'>Factory List</a>
            </div>
        )
    }

    return (
        <footer>
            <Card className='footer-card'>
                <Row>
                    <Col xs={2}>
                        <SupportLinks/>
                    </Col>
                    <Col xs={2}>
                       <AccountLinks/>
                    </Col >
                    <Col xs={2}>
                        <InfoLinks/>
                    </Col>
                </Row>
            </Card>
        </footer>
    );
}

export default Footer;