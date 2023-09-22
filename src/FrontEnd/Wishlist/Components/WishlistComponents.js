//react components
import React, { useState, useEffect } from 'react'
import { Card, Row, Col, Form, Button } from 'react-bootstrap';

//Photos
import Beanie from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/beanie.webp'

//Icons
import { BsSortDownAlt, BsSortDown } from 'react-icons/bs'
import { FaTrashAlt } from 'react-icons/fa'

export const ProductCard = ({ WishlistItem, Wishlist }) => {
    const id = WishlistItem.product._ID;
    return (
        <Card style={{ border: 'none' }}>
            <Card.Body>
                <Card.Img src={WishlistItem.imageURL} style={{ width: '100%' }}></Card.Img>
                <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '8px' }}>
                    <Card.Title style={{ paddingTop: '5px', fontSize: '0.98em', marginRight: '1em' }}>{WishlistItem.product._name}  </Card.Title>
                    <Card.Text style={{ fontSize: '1em', whiteSpace: 'nowrap' }}><b>${WishlistItem.product._price} USD</b> {/* Button to remove all items from the wishlist */}
                        <Button className='remove-all-btn' onClick={() => Wishlist.removeItem(id)}>
                            <FaTrashAlt />
                        </Button>
                    </Card.Text>
                </div>
                <Card.Text style={{ color: 'gray', fontSize: '0.8em' }}>{WishlistItem.color}</Card.Text>
            </Card.Body>
        </Card >
    )
}

export const CardGrid = ({ Wishlist, WishlistItems }) => {
    return (
        <div style={{ width: '100%', padding: '20px' }}>
            <Row>
                {WishlistItems.map((item) => (<Col xs={3}><ProductCard WishlistItem={item} Wishlist={Wishlist} /></Col>)) || <></>}
            </Row>
        </div>
    )
}

export function Filter({ WishlistItems, FilteredWLItems, setFilteredWLItems }) {
    const [sortBy, setSortBy] = useState("low-high");

    // Sorting function
    function sortProducts(products, sortBy) {
        if (sortBy === "low-high") {
            return products.sort((a, b) => parseInt(a._price) - parseInt(b._price));
        } else if (sortBy === "high-low") {
            return products.sort((a, b) => parseInt(b._price) - parseInt(a._price));
        } else {
            return products;
        }
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //Updates the filtered products based on the active filters state
    useEffect(() => {
        // Initialize the filtered products with a copy of Products
        let newFilteredProducts = [...WishlistItems];

        // Sort the products based on active filters
        newFilteredProducts = sortProducts(newFilteredProducts, sortBy);

        // Only update state if newFilteredProducts is different from FilteredProducts
        if (JSON.stringify(newFilteredProducts) !== JSON.stringify(FilteredWLItems)) {
            setFilteredWLItems(newFilteredProducts);
        }
    }, [sortBy]);
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    return (
        <Form.Select aria-label="sort" className="custom-select" style={{ width: '12em', marginLeft: '30px', border: 'none', fontWeight: '500' }} onSelect={(eventKey) => setSortBy(eventKey)} >
            <option value="low-high" ><b>Price: Low to High</b></option>
            <option value="high-low"><b>Price: High to Low <BsSortDown /></b></option>
            <option value="recent"><b>Recently Added</b></option>
        </Form.Select >
    );

    //     <div>
    //         <label style={{ border: 'none' }}>
    //             <select value={1} onChange={1}>
    //                 <option value="none">None</option>
    //                 <option value="low_to_high">Price: Low to High</option>
    //                 <option value="high_to_low">Price: High to Low</option>
    //             </select>
    //         </label>
    //         <ul>
    //             {/* {1.map((item) => (
    //                 <li key={item.id}>{item.name} - {item.price}</li>
    //             ))} */}
    //         </ul>
    //     </div>
    // );
}

