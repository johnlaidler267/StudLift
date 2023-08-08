//custom styling
import '../Pages.css'

//react components
import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

//images
import illustrationWoman from '/Users/johnnylaidler/studentlifter/src/Photos/illustrationWoman.png'
import smilingWoman from '/Users/johnnylaidler/studentlifter/src/Photos/smilingWoman.png'

function Women(props) {
    return (

        <div className='div-header' >

            <Card className="womens-header">

                <div style={{ display: "flex", zIndex: '1', color: 'white', width: '100%' }}>

                    <div style={{ display: "flex", flexDirection: 'column', zIndex: '2' }}>
                        <p style={{ color: '#B83256', fontSize: "0.7em", margin: '0px' }}><b>Transform your routine with our stylish and <span style={{ color: 'white' }}>comfortable women's workout wear.</span>"</b></p>
                        <h1 style={{ fontSize: "3.3em", margin: '0px' }}><b>SWEAT IT OUT, SHINE BRIGHT.</b></h1>
                        <p style={{ color: '#B83256', fontSize: "0.7em" }}><b>Get ready to <span style={{ color: 'white' }}>elevate your workout </span> with our <span style={{ color: 'white' }}>top-quality gym clothes</span> for women.</b></p>
                        <br />

                        <div style={{ display: 'flex', flexDirection: 'row', padding: '1em', width: '30em' }}>
                            <Card style={{ margin: '0.2em', backgroundColor: 'transparent', border: 'none' }}>
                                <h3 style={{ fontSize: "1.2em" }}><b>Sweat it out, shine bright.</b></h3>
                                <p style={{ fontSize: "0.8em" }}>Get ready to elevate your workout game with our top-quality gym clothes for women.</p>
                            </Card>
                            <Card style={{ margin: '0.2em', backgroundColor: 'transparent', border: 'none' }}>
                                <h3 style={{ fontSize: "1.2em" }}><b>Sweat it out, shine bright.</b></h3>
                                <p style={{ fontSize: "0.8em" }}>Get ready to elevate your workout game with our top-quality gym clothes for women.</p>
                            </Card>
                            <Card style={{ margin: '0.2em', backgroundColor: 'transparent', border: 'none' }}>
                                <h3 style={{ fontSize: "1.2em" }}><b>Sweat it out, shine bright.</b></h3>
                                <p style={{ fontSize: "0.8em" }}>Get ready to elevate your workout game with our top-quality gym clothes for women.</p>
                            </Card>
                        </div>

                        <Card style={{ margin: "0.9em", color: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: "30em", padding: '1em', border: 'none' }}>
                            <h3 style={{ fontSize: "2em" }}><b>Get fit, feel fabulous.</b></h3>
                            <p>Welcome to our women's workout wear collection! Here at [company name], we believe that feeling confident and comfortable in your gym clothes is key to a successful workout. That's why we've carefully curated a selection of stylish and functional pieces that will help you feel your best while breaking a sweat. From leggings and sports bras to tank tops and jackets, we've got everything you need to feel empowered and ready to tackle any workout. </p>
                            <Button variant='dark'>Shop Now</Button>
                        </Card>

                    </div>

                    <Card.Img src={illustrationWoman} style={{ width: "40em", height: "55em", zIndex: '2', position: 'absolute', left: '30%', top: '-7em' }} />

                    <div style={{ display: "flex", flexDirection: 'column', zIndex: '2', width: '28%', marginLeft: '22em' }}>
                        <p style={{ color: '#B83256', fontSize: "1em" }}><b>Work Hard, turn heads.</b></p>
                        <p style={{ fontSize: "0.8em" }}>Elevate your gym game with our fashionable and functional women's workout wear.</p>
                        <br />
                        <p style={{ color: '#B83256', fontSize: "1em" }}><b>Work Hard, turn heads.</b></p>
                        <p style={{ fontSize: "0.8em" }}>Elevate your gym game with our fashionable and functional women's workout wear.</p>
                        <br />
                        <br />
                        <br />
                        <Card style={{ margin: "0.9em", color: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: "30em", padding: '1em', marginTop: '8em', marginLeft: '-7em', border: 'none', backgroundColor: '#1F2323', color: 'white', zIndex: '5' }}>
                            <h3 style={{ fontSize: "2em" }}><b>Sweat in style .</b></h3>
                            <p>Welcome to our women's workout wear collection! Here at [company name], we believe that feeling confident and comfortable in your gym clothes is key to a successful workout. That's why we've carefully curated a selection of stylish and functional pieces that will help you feel your best while breaking a sweat. From leggings and sports bras to tank tops and jackets, we've got everything you need to feel empowered and ready to tackle any workout. </p>
                        </Card>
                    </div>

                </div>
            </Card >

            <br />

            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly' }}>
                <Card style={{ width: "90%", padding: '10px', backgroundColor: 'transparent', border: 'none' }}>
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
                                <Button href='womens-pants' variant='dark' style={{ borderRadius: '20px' }}>Shop</Button>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='tile-w'>
                                <Card.Title>SPORTS BRAS</Card.Title>
                                <br />
                                <Button href='womens-tops' variant='dark' style={{ borderRadius: '20px' }}>Shop</Button>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='tile-w'>
                                <Card.Title>SHORTS</Card.Title>
                                <br />
                                <Button href='womens-shorts' variant='dark' style={{ borderRadius: '20px' }}>Shop</Button>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='tile-w'>
                                <Card.Title>VIEW ALL</Card.Title>
                                <br />
                                <Button href='womens-all' variant='dark' style={{ borderRadius: '20px' }}>Shop</Button>
                            </Card>
                        </Col>
                    </Row>
                </Card>
            </div>
        </div >
    );
}

export default Women;


