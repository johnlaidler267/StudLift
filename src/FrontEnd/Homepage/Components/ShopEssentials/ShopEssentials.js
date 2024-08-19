//IMPORT React components
import React from 'react';

//IMPORT Custom Components
import ProductWheel from '../ProductWheel.js';
import { EssentialsMen, EssentialsWomen } from './Subcomponents/EssentialsHeaderCards.js';

const ShopEssentials = () => {
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