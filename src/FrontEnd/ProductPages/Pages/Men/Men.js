//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//IMPORT Custom styling
import '../../Styling/Pages.css'
import '../../Styling/Mens.css'

//IMPORT React components
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col, Button } from 'react-bootstrap';

//IMPORT Photos
import smilingGuy from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/smilingGuy.png'
import MensHeader from '../../../../Resources/Photos/MensHeader.mp4';

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function Men() {
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // -> initialize the navigate function to redirect to other pages

    const navigate = useNavigate();

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    return (
        <div className='div-header'>

            <div id='header-div'>
                <video src={MensHeader} id='header-video' autoplay="true" loop />
                <Button id='header-btn'>Shop Now</Button>
            </div>


            <div id='shop-items-div'>
                <Card id='shop-items-bg-card'>

                    <Card id='shop-items-card'>

                        <Row>
                            <Card id='essentials-card' className='mb-3'>
                                <Card.Title className='card-title'><b>THE ESSENTIALS</b></Card.Title>
                                <p>From training to rest day</p>
                                <br />
                                <Card.Img src={smilingGuy} id='essentials-card-img' />
                                <Button onClick={() => navigate('/mens-all')} variant='dark' className='shop-btn'>Shop Essentials</Button>
                            </Card>
                        </Row>


                        <Row xs={1} md={2} className='g-4'>
                            <Col>
                                <Card className='tile'>
                                    <Card.Title>BOTTOMS & JOGGERS</Card.Title>
                                    <p>Shop the latest mens bottoms.</p>
                                    <br />
                                    <Button href='mens-pants' variant='dark' className='shop-btn'>Shop<span className='px-2'>👖</span></Button>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='tile'>
                                    <Card.Title>T-SHIRTS & TOPS</Card.Title>
                                    <p>Shop the latest mens tops.</p>
                                    <br />
                                    <Button href='mens-tops' variant='dark' className='shop-btn'>Shop<span className='px-2'>👕</span></Button>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='tile'>
                                    <Card.Title>SHORTS</Card.Title>
                                    <p>Shop the latest mens shorts.</p>
                                    <br />
                                    <Button href='mens-shorts' variant='dark' className='shop-btn'>Shop <span className='px-2'>🩳</span> </Button>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='tile'>
                                    <Card.Title>VIEW ALL</Card.Title>
                                    <br />
                                    <Button href='mens-all' variant='dark' className='shop-btn'>Shop <span className='px-2'>♾️</span></Button>
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


