//Custom styling
import './Orders.css'

//React components
import React, { useState } from 'react';
import { Card, Row, Col, Button, Form } from 'react-bootstrap';

//Icons
import { IoIosArrowBack } from 'react-icons/io'
import { FaTrashAlt } from 'react-icons/fa'
import { BsSortDownAlt, BsSortDown } from 'react-icons/bs'

//Photos
import Beanie from '/Users/johnnylaidler/studentlifter/src/Photos/beanie.webp'

function WishlistLI() {

    const ProductCard = () => {
        return (
            <Card style={{ border: 'none' }}>
                <Card.Body>
                    <Card.Img src={Beanie} style={{ width: '100%' }}></Card.Img>
                    <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '8px' }}>
                        <Card.Title style={{ paddingTop: '5px', fontSize: '0.98em', marginRight: '1em' }}>Sharkhead Beanie  </Card.Title>
                        <Card.Text style={{ fontSize: '1em', whiteSpace: 'nowrap' }}><b>$20.00 USD</b></Card.Text>
                    </div>
                    <Card.Text style={{ color: 'gray', fontSize: '0.8em' }}>Navy</Card.Text>
                </Card.Body>
            </Card >
        )
    }

    const CardGrid = () => {
        return (
            <div style={{ width: '100%', padding: '20px' }}>
                <Row>
                    <Col xs={3}>
                        <ProductCard />
                    </Col>
                    <Col xs={3}>
                        <ProductCard />
                    </Col>
                </Row>
            </div>
        )
    }

    function Filter({ items }) {
        /*
        // State to store the selected filter option
        const [selectedOption, setSelectedOption] = useState('none');
 
        // Event handler for when the filter dropdown value is changed
        const handleOptionChange = (event) => {
            setSelectedOption(event.target.value);
        };
 
        // Sorts the items array based on the selected filter option
        const sortedItems = items.sort((a, b) => {
            if (selectedOption === 'low_to_high') {
                return a.price - b.price;
            } else if (selectedOption === 'high_to_low') {
                return b.price - a.price;
            }
            return 0;
        });
        */

        return (
            <Form.Select aria-label="sort" className="custom-select" style={{ width: '12em', marginLeft: '30px', border: 'none', fontWeight: '500' }}>
                <option value="low_to_high" ><b>Price: Low to High</b></option>
                <option value="high_to_low"><b>Price: High to Low <BsSortDown /></b></option>
                <option value="none"><b>Recently Added</b></option>
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

    return (
        <div style={{ width: '100%' }}>
            <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', padding: '4.5em', backgroundColor: '#ECECEC' }}>
                <Button style={{ backgroundColor: 'transparent', color: 'black', border: 'none' }}><IoIosArrowBack /> <b>Back</b></Button>
                <br />
                <div style={{ marginLeft: '20px' }}>
                    <h1><b>YOUR WISHLIST</b></h1>
                    <h5><b>2 PRODUCTS</b></h5>
                </div>
            </Card>

            <Card style={{ border: 'none', height: '100%', padding: '30px' }}>
                <Filter />
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <CardGrid />
                </div>
                <div>
                    <Button style={{ backgroundColor: 'transparent', color: 'black', border: 'none', marginLeft: '20px' }}><FaTrashAlt /><b> <span style={{ padding: '8px' }}>Remove all items</span></b></Button>
                </div>
            </Card >
        </div >
    )
}

export default WishlistLI;