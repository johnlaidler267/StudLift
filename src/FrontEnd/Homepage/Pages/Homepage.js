//custom styling
import '../Styling/Homepage.css'

//React components
import React from 'react';
import { Card, Button } from 'react-bootstrap'

//Custom components
import IntroCard from '../Components/IntroCard';
import ProductWheel from '../Components/ProductWheel.js';

//Photos
import smilingGuy from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/smilingGuy.png'
import smilingWoman from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/smilingWoman.png'

function EssentialsMen() {
    return (
        <div className='essentials'>
            <Card id='essentials-card'>
                <Card.Title className='subsection-header'><b>SHOP MENS ESSENTIALS</b></Card.Title>
                <p>From training to rest day</p>
                <br />
                <Card.Img src={smilingGuy} id='essentials-img' />
                <Button variant='dark' id='shop-essentials-btn'>Shop Essentials</Button>
            </Card>
        </div>
    )
}

function EssentialsWomen() {
    return (
        <div className='essentials'>
            <Card id='essentials-card'>
                <Card.Title className='subsection-header'><b>SHOP WOMENS ESSENTIALS</b></Card.Title>
                <p>From training to rest day</p>
                <br />
                <Card.Img src={smilingWoman} id='essentials-img' />
                <Button variant='dark' id='shop-essentials-btn'>Shop Essentials</Button>
            </Card>
        </div>
    )
}

function Main(props) {
    return (
        <div id='bg-div'>
            <IntroCard />
            {/* <div className='background-card-hp'>
                <br />
                <br />
                <EssentialsMen />
                <br />
                <ProductWheel />
                <br />
                <EssentialsWomen />
                <br />
                <ProductWheel />
                <br></br>
                <br />
            </div> */}

        </div>
    );
}

export default Main;


