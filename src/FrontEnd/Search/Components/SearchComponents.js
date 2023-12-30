//IMPORT Custom Styling
import '../Styling/SearchStyling.css'

//IMPORT React components
import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

//Displays the full search results
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

        const filtered = products.filter((product) => {
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
    const numProducts = filteredProducts.length;

    const NumResults = () => {
        return (
            <h5>{numProducts} Products Found</h5>
        )
    }

    const SearchResults = () => {
        return (
            <Row style={{ gap: '1rem' }}>
                {filteredProducts.map((product) => (<SearchItem product={product} />))}
            </Row>
        )
    }

    return (
        <Card id='search-results-card'>
            <Card.Body id='search-results-card-body'>
                <NumResults/>
                <SearchResults/>
            </Card.Body>
        </Card>
    )
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
};

// Displays a single search item
const SearchItem = ({ product }) => {
    const url = product._imageURL;
    const price = product._price;
    const name = product._name
    const color = product._color;

    const ProductImg = () => {
        return (
            <Card.Img variant="right" src={url} id='search-item-img' />
        )
    }

    const ProductDetails = () => {
        const Price = () => {
            return (
                <h6 id='search-item-price'><b>${price}</b></h6>
            )
        }
        const Name = () => {
            return (
                <h7>{name}</h7>
            )
        }
        const Color = () => {
            return (
                <h7 id='search-item-color'>{color}</h7>
            )
        }
        return (
            <Card.Footer>
                <Price/>
                <Row>
                    <Name />
                    <Color/>
                </Row>
            </Card.Footer>
        )
    }

    return (
        <Col>
            <Card id='search-item-card'>
                <ProductImg/>
                <ProductDetails/>
            </Card>
        </Col>
    )
}
