//IMPORT Custom Styling
import '../Styling/SearchStyling.css'

//IMPORT React components
import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

export const SearchResults = ({ products, query }) => {
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const [filteredProducts, setFilteredProducts] = useState([]);
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    useEffect(() => {
        if (!query) {
            // Return early if there's no query
            setFilteredProducts(products);
            return; // No cleanup function needed
        }

        const querySeparated = query.split(" ").map(word => word.toLowerCase());
        console.log(querySeparated);

        const filtered = products.filter((product) => {
            console.log(`The product here is ${JSON.stringify(product)}`);
            try {
                const id = product._ID;
                const name = product._name.toLowerCase();
                const type = product._type.toLowerCase();
                const color = product._color.toLowerCase();

                return (
                    querySeparated.every(word =>
                        id.includes(word) ||
                        name.includes(word) ||
                        type.includes(word) ||
                        color.includes(word)
                    ));
            } catch (error) {
                console.log(`Error filtering products: ${error}`);
                return false;
            }
        });
        setFilteredProducts(filtered);

        // No need to return anything here
    }, [query, products]);
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    return (
        <Card id='search-results-card'>
            <Card.Body id='search-results-card-body'>
                <h5>{filteredProducts.length} Products Found</h5>
                <Row style={{ gap: '1rem' }}>
                    {filteredProducts.map((product) => (<SearchItem product={product} />))}
                </Row>
            </Card.Body>
        </Card>
    )
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
};

const SearchItem = ({ product }) => {
    return (
        <Col>
            <Card id='search-item-card'>
                <Card.Img variant="right" src={product._imageURL} id='search-item-img' />
                <Card.Footer>
                    <h6 id='search-item-price'><b>${product._price}</b></h6>
                    <Row>
                        <h7>{product._name}</h7>
                        <h7 id='search-item-color'>{product._color}</h7>
                    </Row>
                </Card.Footer>
            </Card>
        </Col>
    )
}
