// Import custom styling for this component
import '../Cart/Orders.css';

// Import necessary React components and libraries
import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

// Import icons for use in the component
import { IoIosArrowBack } from 'react-icons/io';
import { FaTrashAlt } from 'react-icons/fa';

// Import custom components used in this file
import { CardGrid, Filter } from './WL-Components';

/**
 * WishlistLI component displays a user's wishlist.
 */
function WishlistLI() {
    /**
     * Function to navigate back to the previous page.
     */
    function goBack() {
        window.history.back();
    }

    return (
        <div className='background-div'>
            {/* Header Card */}
            <Card className='header-card'>
                <Button onClick={goBack} className='back-arrow'>
                    <IoIosArrowBack /> <b>Back</b>
                </Button>
                <br />
                <div className='header-div'>
                    <h1><b>YOUR WISHLIST</b></h1>
                    <h5><b>2 PRODUCTS</b></h5>
                </div>
            </Card>

            {/* Product Display Card */}
            <Card className='product-display-card'>
                {/* Filter component */}
                <Filter />

                <div className='card-grid-div'>
                    {/* CardGrid component */}
                    <CardGrid />
                </div>

                <div>
                    {/* Button to remove all items from the wishlist */}
                    <Button className='remove-all-btn'>
                        <FaTrashAlt /><b> <span style={{ padding: '8px' }}>Remove all items</span></b>
                    </Button>
                </div>
            </Card>
        </div>
    );
}

export default WishlistLI;
