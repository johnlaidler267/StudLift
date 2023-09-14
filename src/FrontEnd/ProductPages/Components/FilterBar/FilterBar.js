import React from 'react';
import { Card, Container, Row, Col, Button, Dropdown, DropdownButton, Tabs, Tab } from 'react-bootstrap';

export const FilterBar = () => {
    return (
        <div className="filter-bar" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <h5>FILTERS: </h5>
            <DropdownButton
                id="gender-filter"
                title="GENDER"
                variant='custom'
                className='dropdown-btn'
            >
                <Dropdown.Item eventKey="1">Male</Dropdown.Item>
                <Dropdown.Item eventKey="2">Female</Dropdown.Item>
                <Dropdown.Item eventKey="3">Other</Dropdown.Item>
            </DropdownButton>
            <DropdownButton
                id="size-filter"
                title="SIZE"
                variant='custom'
                className='dropdown-btn'
            >
                <Dropdown.Item eventKey="1">$0 - $50</Dropdown.Item>
                <Dropdown.Item eventKey="2">$50 - $100</Dropdown.Item>
                <Dropdown.Item eventKey="3">$100+</Dropdown.Item>
            </DropdownButton>
            <DropdownButton
                id="color-filter"
                variant='custom'
                className='dropdown-btn'
                title="COLOR"
            >
                <Dropdown.Item eventKey="1">$0 - $50</Dropdown.Item>
                <Dropdown.Item eventKey="2">$50 - $100</Dropdown.Item>
                <Dropdown.Item eventKey="3">$100+</Dropdown.Item>
            </DropdownButton>
            <DropdownButton
                id="price-filter"
                title="PRICE"
                variant='custom'
                className='dropdown-btn'
            >
                <Dropdown.Item eventKey="1">$0 - $50</Dropdown.Item>
                <Dropdown.Item eventKey="2">$50 - $100</Dropdown.Item>
                <Dropdown.Item eventKey="3">$100+</Dropdown.Item>
            </DropdownButton>
            <DropdownButton
                id="sortby-filter"
                title="SORT BY"
                variant='custom'
                className='dropdown-btn'
            >
                <Dropdown.Item eventKey="1">$0 - $50</Dropdown.Item>
                <Dropdown.Item eventKey="2">$50 - $100</Dropdown.Item>
                <Dropdown.Item eventKey="3">$100+</Dropdown.Item>
            </DropdownButton>
        </div >
    );
};