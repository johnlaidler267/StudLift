//IMPORT Custom styling
import '../Styling/Homepage.css'

//IMPORT React components
import React from 'react';

//IMPORT Custom components
import IntroCard from '../Components/IntroCard';
import ShopEssentials from '../Components/ShopEssentials';

/* Main Homepage Component */
function Homepage() {
    return (
        <div id='bg-div'>
            <IntroCard />
            <ShopEssentials />
        </div>
    );
}

export default Homepage;


