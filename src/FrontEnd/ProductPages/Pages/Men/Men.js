//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//IMPORT Custom styling
import '../../Styling/Mens.css'
import '../../Styling/Pages.css'

//IMPORT React components
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col, Button } from 'react-bootstrap';

//IMPORT Photos
import smilingGuy from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/smilingGuy.png'
import MensHeader from '../../../../Resources/Photos/MensHeader.mp4';
import tee from '../../../../Resources/Photos/beanie.webp'
import bottoms from '../../../../Resources/Photos/two.webp'

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function Men() {
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // -> initialize the navigate function to redirect to other pages

    const navigate = useNavigate();
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    
    // Displays intro video at the top
    const VideoHeader = () => {

        const Video = () => {
            return (
                <video src={MensHeader} id='header-video' autoplay="true" loop />
            )
        }

        const ShopBtn = () => {
            return (
                <Button id='header-btn'><span>Shop Now</span></Button>
            )
        }
        
        return (
            <div id='header-div'>
                <div id='header-content-div'>
                    <Video />
                    <ShopBtn/>
                </div>
            </div>
        )
    }

    // Displays page content (links to products)
    const ProductPageLinks = () => {

        // Displays links to different product categories
        const ProductCategories = () => {
            const Bottoms = () => {
                return (
                    <Col>
                        <Card className='tile'>
                            <Card.Img className='tile-img' src={bottoms}></Card.Img>
                            <Card.Body className='d-flex flex-column'>
                                <Card.Title>BOTTOMS & JOGGERS</Card.Title>
                                <p>Shop the latest mens bottoms.</p>
                                <p>Revamp your workout wardrobe with our latest collection of men's athleisure bottoms. Designed for the modern fitness enthusiast, our athleisure range blends cutting-edge performance technology with contemporary style.</p>
                                <br />
                                <Button href='mens-pants' variant='dark' className='shop-btn'>Shop<span className='px-2'>👖</span></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            }
            const Tops = () => {
                return (
                    <Col>
                        <Card className='tile'>
                            <Card.Img className='tile-img' src={tee}></Card.Img>
                            <Card.Body className='d-flex flex-column'>
                                <Card.Title>T-SHIRTS & TOPS</Card.Title>
                                <p>Shop the latest mens tops.</p>
                                <p>Elevate your workout attire with our latest collection of men's athleisure tops. Crafted with innovation and style in mind, our tops seamlessly blend functionality and fashion. </p>
                                <br />
                                <Button href='mens-tops' variant='dark' className='shop-btn'>Shop<span className='px-2'>👕</span></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            }
            const Shorts = () => {
                return (
                    <Col>
                        <Card className='tile'>
                            <Card.Img className='tile-img' src={tee}></Card.Img>
                            <Card.Body className='d-flex flex-column'>
                                <Card.Title>SHORTS</Card.Title>
                                <p>Shop the latest mens shorts.</p>
                                <p>Crafted with high-performance fabrics, these athletic shorts offer exceptional moisture-wicking properties and breathability, ensuring you stay cool and comfortable during your most rigorous workouts.</p>
                                <br />
                                <Button href='mens-shorts' variant='dark' className='shop-btn'>Shop <span className='px-2'>🩳</span> </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            }
            return (
                <div className='product-tiles-container my-3'>
                    <div id='product-tiles-bg-div'></div>
                    <div className=' d-flex flex-row'>
                        <Bottoms />
                        <Tops />
                        <Shorts />
                    </div>
                </div>
            )
        }

        // Displays links to essential products page
        const Essentials = () => {
            return (
                <div id='essentials-card-container'>
                    <Card id='essentials-card'>
                        <Card.Title className='card-title'><b>THE ESSENTIALS</b></Card.Title>
                        <p>From training to rest day</p>
                        <br />
                        <Card.Img src={smilingGuy} id='essentials-card-img' />
                        <Button onClick={() => navigate('/mens-all')} variant='dark' className='shop-btn'>Shop Essentials</Button>
                    </Card>
                </div>
            )
        }

        return (
            <div id='shop-items-div'>
                <Card id='shop-items-bg-card'>
                    <Card id='shop-items-card'>
                        <Essentials />
                        <ProductCategories />
                    </Card>
                </Card>
            </div >
        )
    }

    return (
        <div className='div-header'>
            <VideoHeader />
            <ProductPageLinks/>
        </div >
    );
}

export default Men;


