//IMPORT React components
import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

//IMPORT MUI components
import Divider from '@mui/material/Divider';

//IMPORT Custom components
import { SearchResults } from '../Components/SearchComponents'

//IMPORT Helper functions
import { getProducts } from '../../ProductPages/HelperFunctions/ProductDBReqs'
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function Search() {
    const [query, setQuery] = useState("");
    const [products, setProducts] = useState([]);
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const handleChange = (event) => {
        console.log(`Setting the query to ${event.target.value}`)
        setQuery(event.target.value);
    };
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    useEffect(() => {
        // Define an array of promises
        const promises = [
            getProducts('MensProducts', 'All'),
            getProducts('WomensProducts', 'All'),
            getProducts('Accessories', 'All'),
        ];

        // Use Promise.all to wait for all promises to resolve
        Promise.all(promises)
            .then((results) => {
                // results is an array containing the results of each promise
                const allProducts = results.flat();
                console.log(`Setting the products to ${allProducts}`);
                setProducts(allProducts);
            })
            .catch((error) => {
                console.error(`Error fetching products: ${error}`);
            });
    }, []);

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    return (
        <div>
            <Card id='search-bar-card'>
                <form style={{ width: '100%' }}>
                    <input
                        type="text"
                        value={query}
                        onChange={handleChange}
                        placeholder="Search By Typing Keywords..."
                        id='search-bar-input'
                    />
                    <Divider />
                </form>
                {query !== "" && <SearchResults products={products} query={query} />}
            </Card>
        </div>
    );
}

export default Search;