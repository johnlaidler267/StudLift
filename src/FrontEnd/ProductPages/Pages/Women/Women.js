//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//IMPORT Custom styling
import '../../Styling/Womens.css'
import '../../Styling/Pages.css'


//IMPORT React components
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Button } from 'react-bootstrap';

//IMPORT Images
import smilingWoman from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/smilingWoman.png'
import WomensHeader from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/WomensHeader.mp4'//IMPORT Photos
import tee from '../../../../Resources/Photos/beanie.webp'
import bottoms from '../../../../Resources/Photos/two.webp'

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function Women() {
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // -> initialize the navigate function to redirect to other pages

    const navigate = useNavigate();

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    return (
        <div className='div-header'>

            <div id='header-div'>
                <div id='header-content-div'>
                    <video src={WomensHeader} id='header-video' autoplay="true" loop />
                    <Button id='header-btn'><span>Shop Now</span></Button>
                </div>
            </div>


            <div id='shop-items-div-w'>

                <Card id='shop-items-bg-card-w'>
                    <Card id='shop-items-card-w'>

                        <div id='essentials-card-container-w'>
                            <Card id='essentials-card-w'>
                                <Card.Title className='card-title'><b>THE ESSENTIALS</b></Card.Title>
                                <p>From training to rest day</p>
                                <br />
                                <Card.Img src={smilingWoman} id='essentials-card-img-w' />
                                <Button onClick={() => navigate('/womens-all')} variant='dark' className='shop-btn'>Shop Essentials</Button>
                            </Card>
                        </div>

                        <div className='product-tiles-container-w my-3'>
                            <div id='product-tiles-bg-div-w'></div>
                            <div className=' d-flex flex-row'>
                                <Col>
                                    <Card className='tile'>
                                        <Card.Img className='tile-img' src={bottoms}></Card.Img>
                                        <Card.Body className='d-flex flex-column'>
                                            <Card.Title>BOTTOMS & JOGGERS</Card.Title>
                                            <p>Shop the latest mens bottoms.</p>
                                            <p>Revamp your workout wardrobe with our latest collection of men's athleisure bottoms. Designed for the modern fitness enthusiast, our athleisure range blends cutting-edge performance technology with contemporary style.</p>
                                            <br />
                                            <Button onClick={()=>navigate('/womens-bottoms')} variant='dark' className='shop-btn'>Shop<span className='px-2'>👖</span></Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className='tile'>
                                        <Card.Img className='tile-img' src={tee}></Card.Img>
                                        <Card.Body className='d-flex flex-column'>
                                            <Card.Title>T-SHIRTS & TOPS</Card.Title>
                                            <p>Shop the latest mens tops.</p>
                                            <p>Elevate your workout attire with our latest collection of men's athleisure tops. Crafted with innovation and style in mind, our tops seamlessly blend functionality and fashion. </p>
                                            <br />
                                            <Button onClick={()=>navigate('/womens-tops')} variant='dark' className='shop-btn'>Shop<span className='px-2'>👕</span></Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className='tile'>
                                        <Card.Img className='tile-img' src={tee}></Card.Img>
                                        <Card.Body className='d-flex flex-column'>
                                            <Card.Title>SHORTS</Card.Title>
                                            <p>Shop the latest womens shorts.</p>
                                            <p>Crafted with high-performance fabrics, these athletic shorts offer exceptional moisture-wicking properties and breathability, ensuring you stay cool and comfortable during your most rigorous workouts.</p>
                                            <br />
                                            <Button onClick={() => navigate('/womens-shorts')} variant='dark' className='shop-btn'>Shop <span className='px-2'>🩳</span> </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            </div>
                        </div>
                    </Card>
                    <br />
                </Card>

            </div >


        </div >
    );
}

export default Women;


