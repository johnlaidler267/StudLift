//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//IMPORT custom styling
import '../../Styling/Pages.css'
import '../../Styling/AccessoriesStyling.css'

//IMPORT react elements
import React from 'react';
import { Card, Row, Col,Tabs, Tab } from 'react-bootstrap';

//IMPORT helper functions
import { getProductCards } from '../../HelperFunctions/ProductDBReqs'

//IMPORT custom components
import { FilterBar } from '../../Components/FilterBar/FilterBar'
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function Accessories() {

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const [ProductCards, setProductCards] = React.useState([]);
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    React.useEffect(() => {
        getProductCards('Accessories', 'All').then((result) => setProductCards(result));
    }, []);
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    const CardGrid = () => {
        return (
            <div style={{ width: '100%', padding: '20px' }}>
                <Row>
                    {ProductCards.map(Card => (<Col>{Card}</Col>))}
                </Row>
            </div>
        )
    }

    const TabBar = () => {
        return (
            <Tabs defaultActiveKey="all" id="tab-bar" className='mb-3' justify>
                <Tab eventKey="all" title="ALL (148)" tabClassName="spaced-tabs">
                    <CardGrid />
                </Tab>
                <Tab eventKey="headwear" title="HEADWEAR (20)" tabClassName="spaced-tabs">
                    <CardGrid />
                </Tab>
                <Tab eventKey="bags" title="BAGS (15)" tabClassName="spaced-tabs">
                    <CardGrid />
                </Tab>
                <Tab eventKey="socks" title="SOCKS (90)" tabClassName="spaced-tabs">
                    <CardGrid />
                </Tab>
                <Tab eventKey="equipment" title="EQUIPMENT (69)" tabClassName="spaced-tabs">
                    <CardGrid />
                </Tab>
                <Tab eventKey="bottles" title="BOTTLES (53)" tabClassName="spaced-tabs">
                    <CardGrid />
                </Tab>
            </Tabs >
        );
    };

    return (
        <div style={{ width: '100%' }}>
            <Card style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', padding: '4.5em', backgroundColor: '#ECECEC' }}>
                <h2><b>ALL ACCESSORIES</b></h2>
            </Card>
            <Card style={{ display: 'flex', flexDirection: 'row', border: 'none', padding: '1em' }}>
                <FilterBar />
            </Card>
            <Card style={{ border: 'none' }}>
                <TabBar />
            </Card>
        </div>
    )
}

export default Accessories;