//IMPORT Custom styling
import '../Styling/Homepage.css'

//IMPORT React components
import React from 'react';

//IMPORT Custom components
import IntroCard from '../Components/IntroCard/IntroCard';
import ShopEssentials from '../Components/ShopEssentials/ShopEssentials';

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


