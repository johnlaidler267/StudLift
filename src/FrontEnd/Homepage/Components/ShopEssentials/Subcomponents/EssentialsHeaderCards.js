import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap'

//IMPORT Photos
import womensHomepage from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/womens-homepage.png'
import mensHomepage from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/mens-homepage.png'


/* View Men's Essentials Card */
export function EssentialsMen() {
    return (
        <Card id='essentials-card' style={cardStyle(mensHomepage)}>
            <Title text={"SHOP MENS ESSENTIALS"} />
            <Subtitle />
            <ShopBtn gender={'mens'} />
        </Card>
    )
}

/* View Women's Essentials Nav Card */
export function EssentialsWomen() {
    return (
        <Card id='essentials-card' style={cardStyle(womensHomepage)}>
            <Title text={"SHOP WOMENS ESSENTIALS"} />
            <Subtitle />
            <ShopBtn gender={'womens'} />
        </Card>
    )
}

//----------------
/* Card styling for Mens/Womens essentials card display */
const cardStyle = (url) => (
    {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
    }
);

const ShopBtn = ({ gender }) => {
    const navigate = useNavigate();
    return (
        <Button variant='dark' id='shop-essentials-btn' onClick={() => navigate(`/${gender}-all`)}>Shop Essentials</Button>
    )
}

const Title = ({ text }) => {
    return <Card.Title className='subsection-header'><b>{text}</b></Card.Title>;
}

const Subtitle = () => {
    return (
        <>
            <p>From training to rest day</p>
            <br />
        </>
    )
}