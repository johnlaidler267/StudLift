//IMPORT react elements
import React from 'react';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';

const CardGrid = ({ ProductCards }) => {
    return (
        <div style={{ width: '100%', padding: '20px' }}>
            <Row>
                {ProductCards.map(Card => (<Col>{Card}</Col>))}
            </Row>
        </div>
    )
}

export const TabBar = ({ ProductCards, setActiveTab }) => {
    return (
        <Tabs defaultActiveKey="All" id="tab-bar" className='mb-3' justify onSelect={(eventKey) => setActiveTab(eventKey)}>
            <Tab eventKey="All" title="ALL" tabClassName="spaced-tabs">
                <CardGrid ProductType="All" ProductCards={ProductCards} />
            </Tab>
            <Tab eventKey="Hats" title="HEADWEAR" tabClassName="spaced-tabs">
                <CardGrid ProductType="Hats" ProductCards={ProductCards} />
            </Tab>
            <Tab eventKey="Bags" title="BAGS" tabClassName="spaced-tabs">
                <CardGrid ProductType="Bags" ProductCards={ProductCards} />
            </Tab>
            <Tab eventKey="Socks" title="SOCKS" tabClassName="spaced-tabs">
                <CardGrid ProductType="Socks" ProductCards={ProductCards} />
            </Tab>
            <Tab eventKey="Gloves" title="EQUIPMENT" tabClassName="spaced-tabs">
                <CardGrid ProductType="Gloves" ProductCards={ProductCards} />
            </Tab>
            <Tab eventKey="Bottles" title="BOTTLES" tabClassName="spaced-tabs">
                <CardGrid ProductType="Bottles" ProductCards={ProductCards} />
            </Tab>
        </Tabs >
    );
};