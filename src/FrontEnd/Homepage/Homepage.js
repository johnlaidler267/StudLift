//custom styling
import './Homepage.css'

//React components
import React from 'react';
import { Card, Button } from 'react-bootstrap'

//Custom components
import IntroCard from './Components/IntroCard';
import ProductWheel from './Components/ProductWheel.js';

//Photos
import smilingGuy from '/Users/johnnylaidler/studentlifter/src/Photos/smilingGuy.png'
import smilingWoman from '/Users/johnnylaidler/studentlifter/src/Photos/smilingWoman.png'

function EssentialsMen() {
    return (
        <div className='essentials'>
            <Card style={{ width: '90%', paddingLeft: "10em", display: 'flex', justifyContent: 'center', alignItems: 'start', height: "20em", backgroundColor: "#32393F", color: 'white', zIndex: '5' }}>
                <Card.Title style={{ fontSize: "2em" }}><b>SHOP MENS ESSENTIALS</b></Card.Title>
                <p>From training to rest day</p>
                <br />
                <Card.Img src={smilingGuy} style={{ width: "20em", height: "20em", zIndex: '3', position: 'absolute', left: '30em', top: '0em' }} />
                <Button variant='dark' style={{ borderRadius: '20px', padding: '1em' }}>Shop Essentials</Button>
            </Card>
        </div>
    )
}

function EssentialsWomen() {
    return (
        <div className='essentials'>
            <Card style={{ width: '90%', paddingLeft: "10em", display: 'flex', justifyContent: 'center', alignItems: 'start', height: "20em", backgroundColor: "#F2E5E3", color: '#32393F', zIndex: '5' }}>
                <Card.Title style={{ fontSize: "2em" }}><b>SHOP WOMENS  ESSENTIALS</b></Card.Title>
                <p>From training to rest day</p>
                <br />
                <Card.Img src={smilingWoman} style={{ width: "20em", height: "20em", zIndex: '3', position: 'absolute', left: '38em', top: '0em' }} />
                <Button variant='dark' style={{ borderRadius: '20px', padding: '1em' }}>Shop Essentials</Button>
            </Card>
        </div>
    )
}

function Main(props) {
    return (
        <div style={{ color: '#32393F', height: '100%' }}>
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


