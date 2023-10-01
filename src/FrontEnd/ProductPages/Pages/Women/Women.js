//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//IMPORT Custom styling
import '../../Styling/Pages.css'

//IMPORT React components
import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

//IMPORT Images
import smilingWoman from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/smilingWoman.png'
import WomensHeader from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/WomensHeader.mp4'
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function Women() {

    return (
        <div className='div-header' >


            <div id='header-div'>
                <video src={WomensHeader} id='header-video' autoplay="true" loop />
                <Button id='header-btn'>Shop Now</Button>
            </div>

            <br />

            <div id='shop-items-div'>
                <Card id='shop-items-bg-card'>
                    <Row>
                        <Card style={{ paddingLeft: "10em", display: 'flex', justifyContent: 'center', alignItems: 'start', height: "20em", backgroundColor: "#CED5DF", color: 'white', zIndex: '5' }}>
                            <Card.Title style={{ fontSize: "2em" }}><b>THE ESSENTIALS</b></Card.Title>
                            <p>From training to rest day</p>
                            <br />
                            <Card.Img src={smilingWoman} style={{ width: "20em", height: "20em", zIndex: '3', position: 'absolute', left: '25em', top: '0em' }} />
                            <Button href='womens-all' variant='dark' style={{ borderRadius: '20px', padding: '1em' }}>Shop Essentials</Button>
                        </Card>
                    </Row>
                    <br />
                    <Row xs={1} md={2} className="g-4">
                        <Col>
                            <Card className='tile-w'>
                                <Card.Title>LEGGINGS & BOTTOMS</Card.Title>
                                <br />
                                <Button href='womens-pants' variant='dark' style={{ borderRadius: '20px' }}>Shop <span className='px-2'>👖</span></Button>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='tile-w'>
                                <Card.Title>SPORTS BRAS</Card.Title>
                                <br />
                                <Button href='womens-tops' variant='dark' style={{ borderRadius: '20px' }}>Shop <span className='px-2'>👙</span></Button>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='tile-w'>
                                <Card.Title>SHORTS</Card.Title>
                                <br />
                                <Button href='womens-shorts' variant='dark' style={{ borderRadius: '20px' }}>Shop <span className='px-2'>🩲</span></Button>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='tile-w'>
                                <Card.Title>VIEW ALL</Card.Title>
                                <br />
                                <Button href='womens-all' variant='dark' style={{ borderRadius: '20px' }}>Shop <span className='px-2'>♾️</span></Button>
                            </Card>
                        </Col>
                    </Row>
                </Card>
            </div>
        </div >
    );
}

export default Women;


