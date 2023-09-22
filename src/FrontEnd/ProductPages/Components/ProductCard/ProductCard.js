
//IMPORT CSS
import './ProductCardStyling.css'

//IMPORT React Components
import React, { useState } from 'react';
import { Link, createContext } from 'react-router-dom';
import { Card, Button, Form, ButtonGroup, Row, Col } from 'react-bootstrap';

//IMPORT Icons
import { BiBookAdd } from 'react-icons/bi';
import { MdFavorite } from 'react-icons/md'

//IMPORT Helper Functions
import addWishlistItem from '../../../Wishlist/HelperFunctions/addWishlistItem';

//IMPORT Firebase
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../../BackEnd/firebase/firebase';

//Takes a single Product object & returns a ProductCard component (HELPER)
export const ProductCard = ({ product, db }) => {
    const [user] = useAuthState(auth);
    const [showCardText, setShowCardText] = useState(false);

    return (
        <Card id='product-card'
            onMouseEnter={() => setShowCardText(true)}
            onMouseLeave={() => setShowCardText(false)}
        >
            <Card.Body>
                <Button variant='light' id='wishlist-btn' onClick={async ()=> await addWishlistItem(product, user.uid)}><MdFavorite /></Button>
                <Card.Img id='img' src={product.imageURL} className="product" />
                <div id='card-body-div'>
                    {showCardText && (
                        <div id='quick-add-div'>
                            <Card.Body id='quick-add-card'>
                                <Card.Title id='quick-add-title'><b><BiBookAdd /> QUICK ADD</b></Card.Title>
                                <Form>
                                    <Col>
                                        <Row>
                                            <ButtonGroup>
                                                <Button variant='light' className='size-btn'>S</Button>
                                                <Button variant='light' className='size-btn'>M</Button>
                                                <Button variant='light' className='size-btn'>L</Button>
                                                <Button variant='light' className='size-btn'>XL</Button>
                                            </ButtonGroup>
                                        </Row>
                                    </Col>
                                </Form>
                            </Card.Body>
                        </div>
                    )
                    }
                </div>
                <div id='product-name-div'>
                    <Link id='product-name-link' to={`/product/${db}/${product._ID}`}>
                        <Card.Title id='product-name'>{product.name}</Card.Title>
                    </Link>
                    <Card.Text id='product-price'><b>{product.price}</b></Card.Text>
                </div>
                <Card.Text id='product-color'>{product.color}</Card.Text>
            </Card.Body >
        </Card >
    );
};
