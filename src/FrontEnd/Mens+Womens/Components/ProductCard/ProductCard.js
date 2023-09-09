//React Components
import React, { useState } from 'react';
import { Link, createContext } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

//Icons
import { BiBookAdd } from 'react-icons/bi';
import { MdFavorite } from 'react-icons/md'

//CSS
import './ProductCardStyling.css'

//Takes a single Product object & returns a ProductCard component (HELPER)
export const ProductCard = ({ product, db }) => {
    const [showCardText, setShowCardText] = useState(false);
    console.log(`The product inside product card is ${JSON.stringify(product)}`);

    return (
        <Card id='product-card'
            onMouseEnter={() => setShowCardText(true)}
            onMouseLeave={() => setShowCardText(false)}
        >
            <Card.Body>
                <Button variant='light' id='wishlist-btn'><MdFavorite /></Button>
                <Card.Img id='img' src={product.imageURL} className="product" />
                {showCardText && (
                    <div id='quick-add-div'>
                        <Card.Body id='quick-add-card'>
                            <Card.Title id='quick-add-title'><b><BiBookAdd /> QUICK ADD</b></Card.Title>
                        </Card.Body>
                    </div>
                )}
                <div id='product-name-div'>
                    <Link id='product-name-link' to={`/product/${db}/${product._ID}`}>
                        <Card.Title id='product-name'>{product.name}</Card.Title>
                    </Link>
                    <Card.Text id='product-price'><b>{product.price}</b></Card.Text>
                </div>
                <Card.Text id='product-color'>{product.color}</Card.Text>
            </Card.Body>
        </Card>
    );
};
