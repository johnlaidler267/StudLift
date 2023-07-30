//Custom styling
import './Orders.css'

//React components
import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

//Icons
import { IoIosArrowBack } from 'react-icons/io'
import { FaTrashAlt } from 'react-icons/fa'

//Custom components
import { CardGrid, Filter } from './Components/wl-components'


function WishlistLI() {

    function goBack() {
        window.history.back();
    }

    return (
        <div className='background-div'>
            <Card className='header-card'>
                <Button onClick={goBack} className='back-arrow'><IoIosArrowBack /> <b>Back</b></Button>
                <br />
                <div className='header-div'>
                    <h1><b>YOUR WISHLIST</b></h1>
                    <h5><b>2 PRODUCTS</b></h5>
                </div>
            </Card>

            <Card className='product-display-card'>
                <Filter />
                <div className='card-grid-div'>
                    <CardGrid />
                </div>
                <div>
                    <Button className='remove-all-btn'><FaTrashAlt /><b> <span style={{ padding: '8px' }}>Remove all items</span></b></Button>
                </div>
            </Card >
        </div >
    )
}

export default WishlistLI;