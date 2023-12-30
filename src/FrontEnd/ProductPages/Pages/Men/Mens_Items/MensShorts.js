//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//IMPORT Custom styling
import '../../../Styling/Pages.css'

//IMPORT React elements
import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

//IMPORT Custom components
import { MensFilterBar } from '../../../Components/FilterBars/MensFilterBar/MensFilterBar'
import { CardGrid } from '../../../Components/CardGrid/CardGrid'

//IMPORT Helper functions
import { getProductCardsFiltered, getProducts } from '../../../HelperFunctions/ProductDBReqs'
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function MensShorts() {
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const [ProductCards, setProductCards] = useState([]);
    const [Products, setProducts] = useState([]);
    const [FilteredProducts, setFilteredProducts] = useState([]);

    //Get all the products on page load
    useEffect(() => {
        getProducts('MensProducts', 'Shorts').then((result) => {
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
    const Header = () => {
        return (
            <Card className='d-flex flex-column align-items-start border-0' style={{ padding: '4.5em', backgroundColor: '#ECECEC' }}>
                <h5 style={{ fontSize: '1em' }}><b>MENS</b></h5>
                <h2 style={{ fontWeight: '500' }}><b>SHORTS</b></h2>
            </Card>
        )
    }

    const Filter = () => {
        return (
            <Card className='d-flex flex-row border-0 p-1'>
                <MensFilterBar Products={Products} FilteredProducts={FilteredProducts} setFilteredProducts={setFilteredProducts} />
            </Card>
        )
    }

    const ProductsDisplay = () => {
        return (
            <Card className='border-0'>
                <CardGrid ProductCards={ProductCards} />
            </Card>
        )
    }

    return (
        <div className='w-100'>
            <Header />
            <Filter />
            <ProductsDisplay />
        </div>
    )
}

export default MensShorts;