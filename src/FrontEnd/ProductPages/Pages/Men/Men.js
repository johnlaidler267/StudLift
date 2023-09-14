//custom styling
import '../../Styling/Pages.css'

//React components
import React from 'react';
import { useNavigate, createContext } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

//Photos
import illustrationMan from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/illustrationMan.png'
import smilingGuy from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/smilingGuy.png'

import { AiFillStar } from 'react-icons/ai'

function Men() {
    // =================================================================
    // -> initialize the navigate function to redirect to other pages

    const navigate = useNavigate();

    //=================================================================
    return (
        <div className='div-header'>

            <Card className='mens-header'>

                <div style={{ display: "flex", zIndex: '1', color: 'white', width: '100%' }}>

                    <div style={{ display: "flex", flexDirection: 'column', zIndex: '2' }}>
                        <h1 style={{ fontSize: "4em", margin: '0px' }}><b>ELEVATE YOUR FITNESS GAME.</b></h1>
                        <p style={{ color: 'white', fontSize: "0.8em" }}><b>Get ready to <span style={{ color: 'white' }}>elevate your workout </span> with our <span style={{ color: 'white' }}>top-quality gym clothes</span> for men.</b></p>

                        <br />

                        <div style={{ display: 'flex', flexDirection: 'row', padding: '1em', width: '30em' }}>
                            <Card className='text-column' >
                                <h3><b>Sweat it out, shine bright.</b></h3>
                                <p>Get ready to elevate your workout game with our top-quality gym clothes for men.</p>
                            </Card>

                            <Card className='text-column'>
                                <h3><b>Sweat it out, shine bright.</b></h3>
                                <p>Get ready to elevate your workout game with our top-quality gym clothes for men.</p>
                            </Card>
                            <Card className='text-column'>
                                <h3><b>Sweat it out, shine bright.</b></h3>
                                <p>Get ready to elevate your workout game with our top-quality gym clothes for men.</p>
                            </Card>

                        </div>
                        <br></br>
                        <p style={{ display: 'flex' }}><AiFillStar className='star' /><AiFillStar className='star' /><AiFillStar className='star' /><AiFillStar className='star' /><AiFillStar className='star' /></p>
                        <h3>"The only mens clothing and lifestyle brand you'll ever want."</h3 >
                        <p style={{ marginLeft: '50%' }}>- The New Yorker</p>

                    </div>

                    <Card.Img src={illustrationMan} style={{ width: "34em", height: "50em", zIndex: '2', position: 'absolute', left: '35%', top: '-4em' }} />

                    <div style={{ display: "flex", flexDirection: 'column', zIndex: '2', width: '28%', marginLeft: '22em' }}>
                        <p style={{ color: 'white', fontSize: "1em" }}><b>Work Hard, turn heads.</b></p>
                        <p style={{ fontSize: "0.8em" }}>Elevate your gym game with our fashionable and functional women's workout wear.</p>
                        <br />
                        <p style={{ color: 'white', fontSize: "1em" }}><b>Work Hard, turn heads.</b></p>
                        <p style={{ fontSize: "0.8em" }}>Elevate your gym game with our fashionable and functional women's workout wear.</p>
                        <br />
                        <br />
                        <br />
                        <Card style={{ margin: "0.9em", color: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: "30em", padding: '1em', border: 'none', zIndex: "5", left: '-8em', top: '5em' }}>
                            <h3 style={{ fontSize: "2em" }}><b>Get the Support You Need.</b></h3>
                            <p>Welcome to our women's workout wear collection! Here at [company name], we believe that feeling confident and comfortable in your gym clothes is key to a successful workout. That's why we've carefully curated a selection of stylish and functional pieces that will help you feel your best while breaking a sweat. From leggings and sports bras to tank tops and jackets, we've got everything you need to feel empowered and ready to tackle any workout. </p>
                            <Button variant='dark'>Shop Now</Button>
                        </Card>
                    </div>


                </div>

            </Card>

            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly' }}>
                <Card style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', border: 'none' }}>
                    <Card style={{ width: "90%", padding: '10px', backgroundColor: 'transparent', border: 'none' }}>

                        <Row>
                            <Card style={{ width: '100%', paddingLeft: "10em", display: 'flex', justifyContent: 'center', alignItems: 'start', height: "20em", backgroundColor: "#32393F", color: 'white', zIndex: '5' }}>
                                <Card.Title style={{ fontSize: "2em" }}><b>THE ESSENTIALS</b></Card.Title>
                                <p>From training to rest day</p>
                                <br />
                                <Card.Img src={smilingGuy} style={{ width: "20em", height: "20em", zIndex: '3', position: 'absolute', left: '25em', top: '0em' }} />
                                <Button onClick={() => navigate('/mens-all')} variant='dark' style={{ borderRadius: '20px', padding: '1em' }}>Shop Essentials</Button>
                            </Card>
                        </Row>

                        <br />

                        <Row xs={1} md={2} className="g-4">
                            <Col>
                                <Card className='tile'>
                                    <Card.Title>BOTTOMS & JOGGERS</Card.Title>
                                    <br />
                                    <Button href='mens-pants' variant='dark' style={{ borderRadius: '20px' }}>Shop</Button>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='tile'>
                                    <Card.Title>T-SHIRTS & TOPS</Card.Title>
                                    <br />
                                    <Button href='mens-tops' variant='dark' style={{ borderRadius: '20px' }}>Shop</Button>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='tile'>
                                    <Card.Title>SHORTS</Card.Title>
                                    <br />
                                    <Button href='mens-shorts' variant='dark' style={{ borderRadius: '20px' }}>Shop</Button>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='tile'>
                                    <Card.Title>VIEW ALL</Card.Title>
                                    <br />
                                    <Button href='mens-all' variant='dark' style={{ borderRadius: '20px' }}>Shop</Button>
                                </Card>
                            </Col>
                        </Row>

                    </Card>
                    <br />
                </Card>

            </div >

        </div >
    );
}

export default Men;


