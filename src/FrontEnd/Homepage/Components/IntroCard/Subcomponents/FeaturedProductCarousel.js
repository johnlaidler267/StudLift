import React from 'react'
import { Carousel } from 'react-bootstrap';

export const FeaturedProductsCarousel = ({ products }) => {
    return (
        <Carousel data-bs-theme="light" id='featured-prod-car' className='w-80'>
            {products.map((product) => (
                <Carousel.Item className='w-100'>
                    <img className='d-block w-100' src={product._imageURL} />
                    <Carousel.Caption >
                        <h5>{product._name}</h5>
                        <p>{product._color}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default FeaturedProductsCarousel