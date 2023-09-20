//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//IMPORT custom styling
import '../../Styling/Pages.css'
import '../../Styling/AccessoriesStyling.css'

//IMPORT react elements
import React from 'react';
import { Card, Row, Col, Tabs, Tab } from 'react-bootstrap';

//IMPORT helper functions
import { getProductCards } from '../../HelperFunctions/ProductDBReqs'

//IMPORT custom components
import { AccessoriesFilterBar } from '../../Components/FilterBars/AccessoriesFilterBar/AccessoriesFilterBar'
import { TabBar } from '../../Components/TabBar/TabBar'
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function Accessories() {

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const [ProductCards, setProductCards] = React.useState([]);
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    React.useEffect(() => {
        getProductCards('Accessories', 'All').then((result) => setProductCards(result));
    }, []);
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    return (
        <div style={{ width: '100%' }}>
            <Card style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', padding: '4.5em', backgroundColor: '#ECECEC' }}>
                <h2><b>ALL ACCESSORIES</b></h2>
            </Card>
            <Card style={{ display: 'flex', flexDirection: 'row', border: 'none', padding: '1em' }}>
                <AccessoriesFilterBar />
            </Card>
            <Card style={{ border: 'none' }}>
                <TabBar ProductCards={ProductCards} />
            </Card>
        </div>
    )
}

export default Accessories;