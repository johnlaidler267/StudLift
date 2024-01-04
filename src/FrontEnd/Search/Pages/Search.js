//IMPORT React components
import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

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
                setProducts(allProducts);
            })
            .catch((error) => {
                console.error(`Error fetching products: ${error}`);
            });
    }, []);

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    const SearchBar = () => {
        return (
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
        )
    }

    const Results = () => {
        return (
            <>
                {query !== "" && <SearchResults products={products} query={query} />}
            </>
        )
    }
    
    return (
        <div>
            <Card id='search-bar-card'>
                <SearchBar/>
                <Results/>
            </Card>
        </div>
    );
}

export default Search;