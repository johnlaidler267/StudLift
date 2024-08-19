import React, { useNavigate } from 'react'
import { Button } from 'react-bootstrap'

import FeaturedProductsCarousel from './FeaturedProductCarousel'

//IMPORT Icons
import { AiOutlineStar } from 'react-icons/ai'

/* Renders the header */
const FeaturedProductsHeader = () => {
    return (
        <>
            <h6>FEATURED PRODUCTS <AiOutlineStar /></h6>
            <p>Check out our top picks for the best products to enhance your daily life.</p>
        </>
    )
}

/* Renders btn to view all products */
const ViewProductsBtn = ({ navigate }) => {
    return (
        <Button className='view-products-btn' onClick={() => navigate('/mens-all')}>View All Products</Button>
    )
}

const FeaturedProducts = ({ products, navigate }) => {
    return (
        <div className='featured-products d-flex flex-column'>
            <FeaturedProductsHeader />
            <div className='w-100 d-flex flex-column align-items-center justify-content-center'>
                <FeaturedProductsCarousel products={products} />
                <ViewProductsBtn navigate={navigate} />
            </div>
        </div>
    )
}

export default FeaturedProducts