//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//IMPORT custom styling
import '../../Styling/Pages.css'
import '../../Styling/AccessoriesStyling.css'

//IMPORT react elements
import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

//IMPORT helper functions
import { getProductCardsFiltered, getProducts } from '../../HelperFunctions/ProductDBReqs'

//IMPORT custom components
import { AccessoriesFilterBar } from '../../Components/FilterBars/AccessoriesFilterBar/AccessoriesFilterBar'
import { TabBar } from '../../Components/TabBar/TabBar'
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function Accessories() {
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const [ProductCards, setProductCards] = useState([]);
    const [Products, setProducts] = useState([]);
    const [FilteredProducts, setFilteredProducts] = useState([]);
    const [activeTab, setActiveTab] = useState("All");

    //Get all the products on page load
    useEffect(() => {
        getProducts('Accessories', 'All').then((result) => {
            setProducts(result)
            setFilteredProducts(result);
        });
    }, []);

    //Update the displayed product cards based on the filters applied
    useEffect(() => {
        // Fetch new product cards based on the filters
        getProductCardsFiltered('MensProducts', FilteredProducts).then((result) => setProductCards(result));
    }, [FilteredProducts]);

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    return (
        <div style={{ width: '100%' }}>
            <Card style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', padding: '4.5em', backgroundColor: '#ECECEC' }}>
                <h2><b>ALL ACCESSORIES</b></h2>
            </Card>
            <Card style={{ display: 'flex', flexDirection: 'row', border: 'none', padding: '1em' }}>
                <AccessoriesFilterBar Products={Products} FilteredProducts={FilteredProducts} setFilteredProducts={setFilteredProducts} activeTab={activeTab} />
            </Card>
            <Card style={{ border: 'none' }}>
                <TabBar ProductCards={ProductCards} setActiveTab={setActiveTab} />
            </Card>
        </div>
    )
}

export default Accessories;