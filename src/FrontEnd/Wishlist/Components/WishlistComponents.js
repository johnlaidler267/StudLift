//react components
import React, { useState, useEffect } from 'react'
import { Card, Row, Col, Form, Button } from 'react-bootstrap';

//Icons
import { BsSortDown } from 'react-icons/bs'
import { FaTrashAlt } from 'react-icons/fa'

// Displays the full grid of wishlist items
export const CardGrid = ({ Wishlist, FilteredWLItems, setWishlistItems, setFilteredWLItems }) => {
    return (
        <div className='w-100' style={{ padding: '20px' }}>
            <Row>
                {FilteredWLItems.map((item) => (<Col xs={3}><ProductCard WishlistItem={item} FilteredWLItems={FilteredWLItems} Wishlist={Wishlist} setWishlistItems={setWishlistItems} setFilteredWLItems={setFilteredWLItems} /></Col>)) || <></>}
            </Row>
        </div>
    )
}

// Displays a singular wishlist product as a card
export const ProductCard = ({ WishlistItem, FilteredWLItems, Wishlist, setWishlistItems, setFilteredWLItems }) => {
    const id = WishlistItem.product._ID;

    const handleRemove = (id) => {
        Wishlist.removeItem(id)
        setWishlistItems(Wishlist.getItems())
        setFilteredWLItems(FilteredWLItems.filter((item) => item.product._ID !== id))
    }

    const Img = () => {
        const url = WishlistItem.imageURL
        return (
            <Card.Img src={url} className='w-100'></Card.Img>
        )
    }

    const Title = () => {
        const name = WishlistItem.product._name
        return (
            <Card.Title style={{ paddingTop: '5px', fontSize: '0.98em', marginRight: '1em' }}>{name}</Card.Title>
        )
    }

    const Color = () => {
        const color = WishlistItem.color
        return (
            <Card.Text style={{ color: 'gray', fontSize: '0.8em' }}>{color}</Card.Text>
        )
    }

    const Price = () => {
        const price = WishlistItem.product._price;
        return (
            <Card.Text style={{ fontSize: '1em', whiteSpace: 'nowrap' }}><b>${price} USD</b></Card.Text>
        )
    }

    const RemoveBtn = () => {
        return (
            <Button className='remove-all-btn' onClick={() => handleRemove(id)}>
                <FaTrashAlt />
            </Button>
        )
    }

    return (
        <Card className='border-0'>
            <Img />
            <Card.Body>
                <div className='d-flex flex-row' style={{ paddingTop: '8px' }}>
                    <Title />
                    <Price />
                    <RemoveBtn />
                </div>
                <Color />
            </Card.Body>
        </Card >
    )
}

export function Filter({ WishlistItems, FilteredWLItems, setFilteredWLItems, setSortBy, sortBy }) {

    // Sorting function
    function sortProducts(products, sortBy) {
        if (sortBy === "low-high") {
            return products.sort((a, b) => parseInt(a.product._price) - parseInt(b.product._price));
        } else if (sortBy === "high-low") {
            return products.sort((a, b) => parseInt(b.product._price) - parseInt(a.product._price));
        } else {
            //sort by recently added
            return products.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        }
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //Updates the filtered products based on the active filters state
    useEffect(() => {
        // Initialize the filtered products with a copy of WL Items
        let newFilteredProducts = [...WishlistItems];

        // Sort the products based on active filters
        newFilteredProducts = sortProducts(newFilteredProducts, sortBy);

        setFilteredWLItems(newFilteredProducts);

    }, [sortBy]);
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    return (
        <Form.Select aria-label="sort" className="custom-select" style={{ width: '12em', marginLeft: '30px', border: 'none', fontWeight: '500' }} onChange={(e) => setSortBy(e.target.value)} >
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

