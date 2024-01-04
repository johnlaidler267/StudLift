//IMPORT React components
import React from 'react';
import { Card, Button } from 'react-bootstrap'

//IMPORT Photos
import womensHomepage from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/womens-homepage.png'
import mensHomepage from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/mens-homepage.png'

//IMPORT Custom Components
import ProductWheel from './ProductWheel.js';

const ShopEssentials = () => {

    /* Card styling for Mens/Womens essentials card display */
    const cardStyle = (url) => (
        {
            backgroundImage: `url(${url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
        }
    );

    const ShopBtn = () => {
        return (
            <Button variant='dark' id='shop-essentials-btn'>Shop Essentials</Button>
        )
    }

    const Title = ({ text }) => {
        return (
            <Card.Title className='subsection-header'><b>{text}</b></Card.Title>
        )
    }

    const Subtitle = () => {
        return (
            <>
                <p>From training to rest day</p>
                <br />
            </>
        )
    }

    /* View Men's Essentials Card */
    function EssentialsMen() {
        return (
            <div >
                <Card id='essentials-card' style={cardStyle(mensHomepage)}>
                    <Title text={"SHOP MENS ESSENTIALS"} />
                    <Subtitle />
                    <ShopBtn />
                </Card>
            </div>
        )
    }

    /* View Women's Essentials Nav Card */
    function EssentialsWomen() {
        return (
            <div>
                <Card id='essentials-card' style={cardStyle(womensHomepage)}>
                    <Title text={"SHOP WOMENS ESSENTIALS"} />
                    <Subtitle />
                    <ShopBtn />
                </Card>
            </div>
        )
    }

    return (
        <div id='essentials-bg'>
            <br />
            <br />
            <EssentialsMen />
            <br />
            <ProductWheel gender={`m`} />
            <br />
            <EssentialsWomen />
            <br />
            <ProductWheel gender={`w`} />
            <br />
            <br />
        </div>
    )
}

export default ShopEssentials;