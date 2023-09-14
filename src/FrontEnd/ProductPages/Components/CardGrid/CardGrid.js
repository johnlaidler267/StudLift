
import React from 'react';
import { Card, Container, Row, Col, Button, Dropdown, DropdownButton, Tabs, Tab } from 'react-bootstrap';

export const CardGrid = ({ ProductCards }) => {
    return (
        <div style={{ width: '100%', padding: '20px' }}>
            <Row>
                {ProductCards.map(Card => (<Col>{Card}</Col>))}
            </Row>
        </div>
    )
}