//* Stores all sub-components for the Shopping Bag component

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// IMPORT React elements
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

//IMPORT MUI elements
import Divider from '@mui/material/Divider';

//IMPORT Custom components
import QuantityPicker from "../../Purchase/Components/QuantityPicker/QuantityPicker";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Displays the list of all products in the cart
export const ProductList = ({ bagItems, cart }) => {
    
    // Displays a singular product in the cart
    const ProductRow = ({ cartItem, cart }) => {

        const DisplayProduct = () => {

            const ProductImg = () => {
                const url = cartItem.product._imageURL;
                return (
                    <Card.Img src={url} style={{ width: '15%' }}></Card.Img>
                )
            }

            const ProductDetails = () => {

                const Name = () => {
                    const name = cartItem.product._name;
                    const color = cartItem.color;
                    return (
                        <Card.Title style={{ paddingTop: '5px', fontSize: '0.98em', marginRight: '1em' }
                        }> {name} - {color} </Card.Title >
                    )
                }

                const Size = () => {
                    const size = cartItem.size;
                    return (
                        <Card.Text style={{ fontSize: '0.9em', whiteSpace: 'nowrap', color: 'gray' }}>Size: {size}</Card.Text>
                    )
                }

                const Price = () => {
                    const price = cartItem.product._price;
                    return (
                        <Card.Text style={{ fontSize: '0.9em', whiteSpace: 'nowrap', color: 'gray' }}>${price} USD</Card.Text>
                    )
                }

                return (
                    <div style={{ margin: '40px' }}>
                        <Name />
                        <Size />
                        <Price />
                    </div>
                )
            }

            return (
                <Card className='border-0'>
                    <Card.Body className='flex'>
                        <ProductImg />
                        <ProductDetails />
                    </Card.Body>
                </Card >
            )
        }

        const ModifyQuantity = () => {
            return (
                <QuantityPicker current={cart.getCartItem(cartItem.getItemID()).quantity} min={1} max={100} cart={cart} cartItem={cartItem.getItemID()} />
            )
        }

        const DeleteBtn = () => {
            return (
                <a onClick={() => cart.deleteProduct(cartItem.getItemID())} style={{ color: 'gray', textDecoration: 'none', fontSize: '0.7em' }}>Remove</a>
            )
        }

        const Subtotal = () => {
            return (
                <>
                    ${cart.getCartItem(cartItem.getItemID()).getSubtotal()}
                </>
            )
        }

        return (
            <div>
                <Row className='d-flex align-items-center'>
                    <Col xs={8}>
                        <DisplayProduct />
                    </Col>
                    <Col xs={2} className='center-column'>
                        <ModifyQuantity />
                        <DeleteBtn />
                    </Col>
                    <Col xs={2} className='center-column'>
                        <Subtotal />
                    </Col>
                </Row>
                <Divider />
            </div>
        )
    }

    return (
        <div style={{ width: '100%' }}>
            {bagItems.map(item => (<ProductRow cartItem={item} cart={cart} />))}
        </div>
    )
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~