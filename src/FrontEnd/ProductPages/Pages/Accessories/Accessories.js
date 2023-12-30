//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//IMPORT custom styling
import '../../Styling/AccessoriesStyling.css'
import '../../Styling/Pages.css'

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
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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
        getProductCardsFiltered('Accessories', FilteredProducts).then((result) => setProductCards(result));
    }, [FilteredProducts]);

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // Displays the accesories page header
    const Header = () => {
        return (
            <Card id='header'>
                <h2><b>ALL ACCESSORIES</b></h2>
            </Card>
        )
    }

    // Displays the filter bar
    const Filter = () => {
        return (
            <Card id='filterbar'>
                <AccessoriesFilterBar Products={Products} FilteredProducts={FilteredProducts} setFilteredProducts={setFilteredProducts} activeTab={activeTab} />
            </Card>
        )
    }

    // Displays the tab bar
    const Tabs = () => {
        return (
            <Card id='tabbar'>
                <TabBar ProductCards={ProductCards} setActiveTab={setActiveTab} />
            </Card>
        )
    }

    return (
        <div className='w-100'>
            <Header/>
            <Filter/>
            <Tabs/>
        </div>
    )
}

export default Accessories;