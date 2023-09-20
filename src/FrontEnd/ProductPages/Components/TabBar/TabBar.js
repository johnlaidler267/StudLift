//IMPORT react elements
import React from 'react';
import { Card, Row, Col, Tabs, Tab } from 'react-bootstrap';

const CardGrid = ({ ProductCards }) => {
    return (
        <div style={{ width: '100%', padding: '20px' }}>
            <Row>
                {ProductCards.map(Card => (<Col>{Card}</Col>))}
            </Row>
        </div>
    )
}

export const TabBar = ({ ProductCards }) => {
    return (
        <Tabs defaultActiveKey="all" id="tab-bar" className='mb-3' justify>
            <Tab eventKey="all" title="ALL (148)" tabClassName="spaced-tabs" onSelect={(eventKey) => handleTabSelection(eventKey, "all")}>
                <CardGrid ProductCards={ProductCards} />
            </Tab>
            <Tab eventKey="headwear" title="HEADWEAR (20)" tabClassName="spaced-tabs" onSelect={(eventKey) => handleTabSelection(eventKey, "all")}>
                <CardGrid ProductCards={ProductCards} />
            </Tab>
            <Tab eventKey="bags" title="BAGS (15)" tabClassName="spaced-tabs" onSelect={(eventKey) => handleTabSelection(eventKey, "all")}>
                <CardGrid ProductCards={ProductCards} />
            </Tab>
            <Tab eventKey="socks" title="SOCKS (90)" tabClassName="spaced-tabs" onSelect={(eventKey) => handleTabSelection(eventKey, "all")}>
                <CardGrid ProductCards={ProductCards} />
            </Tab>
            <Tab eventKey="equipment" title="EQUIPMENT (69)" tabClassName="spaced-tabs" onSelect={(eventKey) => handleTabSelection(eventKey, "all")}>
                <CardGrid ProductCards={ProductCards} />
            </Tab>
            <Tab eventKey="bottles" title="BOTTLES (53)" tabClassName="spaced-tabs">
                <CardGrid ProductCards={ProductCards} />
            </Tab>
        </Tabs >
    );
};