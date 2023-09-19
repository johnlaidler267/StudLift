//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//IMPORT Custom styling
import '../../Styling/Pages.css'
import '../../Styling/Mens.css'

//IMPORT React components
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col, Button } from 'react-bootstrap';

//IMPORT Photos
import illustrationMan from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/illustrationMan.png'
import smilingGuy from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/smilingGuy.png'

//IMPORT Icons
import { AiFillStar } from 'react-icons/ai'
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function Men() {
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // -> initialize the navigate function to redirect to other pages

    const navigate = useNavigate();

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    return (
        <div className='div-header'>

            <Card className='mens-header'>

                <div id='header-div'>

                    <div id='header-col-left'>
                        <h1 id='header-title'><b>ELEVATE YOUR FITNESS GAME.</b></h1>
                        <p id='header-subtitle'><b>Get ready to <span style={{ color: 'white' }}>elevate your workout </span> with our <span style={{ color: 'white' }}>top-quality gym clothes</span> for men.</b></p>

                        <br />

                        <div id='header-subdetails-div'>
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

                        <p id='rating'><AiFillStar className='star' /><AiFillStar className='star' /><AiFillStar className='star' /><AiFillStar className='star' /><AiFillStar className='star' /></p>
                        <h3>"The only mens clothing and lifestyle brand you'll ever want."</h3 >
                        <p id='newspaper-source'>- The New Yorker</p>

                    </div>

                    <Card.Img src={illustrationMan} id='center-img' />

                    <div id='header-col-right'>
                        <h3><b>Work Hard, turn heads.</b></h3>
                        <p>Elevate your gym game with our fashionable and functional women's workout wear.</p>
                        <br />
                        <h3><b>Work Hard, turn heads.</b></h3>
                        <p>Elevate your gym game with our fashionable and functional women's workout wear.</p>
                        <br />
                        <br />
                        <br />
                        <Card id='shopnow-card'>
                            <h3 className='card-title'><b>Get the Support You Need.</b></h3>
                            <p>Welcome to our women's workout wear collection! Here at [company name], we believe that feeling confident and comfortable in your gym clothes is key to a successful workout. That's why we've carefully curated a selection of stylish and functional pieces that will help you feel your best while breaking a sweat. From leggings and sports bras to tank tops and jackets, we've got everything you need to feel empowered and ready to tackle any workout. </p>
                            <Button variant='dark'>Shop Now</Button>
                        </Card>
                    </div>

                </div>

            </Card>

            <div id='shop-items-div'>
                <Card id='shop-items-bg-card'>
                    <Card id='shop-items-card'>

                        <Row>
                            <Card id='essentials-card'>
                                <Card.Title className='card-title'><b>THE ESSENTIALS</b></Card.Title>
                                <p>From training to rest day</p>
                                <br />
                                <Card.Img src={smilingGuy} id='essentials-card-img' />
                                <Button onClick={() => navigate('/mens-all')} variant='dark' className='shop-btn'>Shop Essentials</Button>
                            </Card>
                        </Row>

                        <br />

                        <Row xs={1} md={2} className="g-4">
                            <Col>
                                <Card className='tile'>
                                    <Card.Title>BOTTOMS & JOGGERS</Card.Title>
                                    <br />
                                    <Button href='mens-pants' variant='dark' className='shop-btn'>Shop</Button>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='tile'>
                                    <Card.Title>T-SHIRTS & TOPS</Card.Title>
                                    <br />
                                    <Button href='mens-tops' variant='dark' className='shop-btn'>Shop</Button>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='tile'>
                                    <Card.Title>SHORTS</Card.Title>
                                    <br />
                                    <Button href='mens-shorts' variant='dark' className='shop-btn'>Shop</Button>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='tile'>
                                    <Card.Title>VIEW ALL</Card.Title>
                                    <br />
                                    <Button href='mens-all' variant='dark' className='shop-btn'>Shop</Button>
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


