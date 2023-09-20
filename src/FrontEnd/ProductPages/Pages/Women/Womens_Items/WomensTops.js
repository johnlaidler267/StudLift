//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//IMPORT Custom styling
import '../../../Styling/Pages.css'

//IMPORT React components
import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

//IMPORT Custom components
import { WomensFilterBar } from '../../../Components/FilterBars/WomensFilterBar/WomensFilterBar'
import { CardGrid } from '../../../Components/CardGrid/CardGrid'

//IMPORT Helper functions
import { getProductCardsFiltered, getProducts } from '../../../HelperFunctions/ProductDBReqs'
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function WomensTops() {

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const [ProductCards, setProductCards] = useState([]);
    const [Products, setProducts] = useState([]);
    const [FilteredProducts, setFilteredProducts] = useState([]);

    //Get all the products on page load
    useEffect(() => {
        getProducts('WomensProducts', 'Bras').then((result) => {
            setProducts(result)
            setFilteredProducts(result);
        });
    }, []);

    //Update the displayed product cards based on the filters applied
    useEffect(() => {
        // Fetch new product cards based on the filters
        getProductCardsFiltered('WomensProducts', FilteredProducts).then((result) => setProductCards(result));
    }, [FilteredProducts]);

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    return (
        <div style={{ width: '100%' }}>
            <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', padding: '4.5em', backgroundColor: '#ECECEC', border: 'none' }}>
                <h5 style={{ fontSize: '1em' }}><b>WOMENS</b></h5>
                <h2 style={{ fontWeight: '500' }}><b>SPORTS BRAS & TOPS</b></h2>
            </Card>
            <Card style={{ display: 'flex', flexDirection: 'row', border: 'none', padding: '1em' }}>
                <WomensFilterBar Products={Products} FilteredProducts={FilteredProducts} setFilteredProducts={setFilteredProducts} setProducts={setProducts} />
            </Card>
            <Card style={{ border: 'none' }}>
                <CardGrid ProductCards={ProductCards} />
            </Card>
        </div>

    )
}

export default WomensTops;