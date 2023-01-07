import React from 'react';
import { Button, Card, Row, Col, Container } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <Card style={{ padding: '30px 30px 10px 30px', borderLeft: 'none', borderRight: 'none', borderBottom: 'none' }}>
                <Row>
                    <Col xs={2}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <h5 className='footer-header'>HELP</h5>
                            <a href='' className='footer-link'>FAQ</a>
                            <a href='' className='footer-link'>Delivery Information</a>
                            <a href='' className='footer-link'>Returns Policy</a>
                            <a href='' className='footer-link'>Make A Return</a>
                            <a href='' className='footer-link'>Orders</a>
                        </div>
                    </Col>
                    <Col xs={2}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <h5 className='footer-header'>MY ACCOUNT</h5>
                            <a href='' className='footer-link'>Login</a>
                            <a href='' className='footer-link'>Register</a>
                        </div>
                    </Col >
                    <Col xs={2}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <h5 className='footer-header'>PAGES</h5>
                            <a href='' className='footer-link'>StudentLifter Central</a>
                            <a href='' className='footer-link'>About Us</a>
                            <a href='' className='footer-link'>Careers</a>
                            <a href='' className='footer-link'>Student Discount</a>
                            <a href='' className='footer-link'>Veterans Discount</a>
                            <a href='' className='footer-link'>Accessibility Statement</a>
                            <a href='' className='footer-link'>Factory List</a>
                        </div>
                    </Col>
                </Row>
            </Card>
        </footer>
    );
}

export default Footer;