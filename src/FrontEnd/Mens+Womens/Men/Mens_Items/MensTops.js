import '../../Pages.css'
import React from 'react';
import { Card, Container, Row, Col, Button, Dropdown, DropdownButton, Tabs, Tab } from 'react-bootstrap';
import Beanie from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/beanie.webp'

function MensTops() {
    const FilterBar = () => {
        return (
            <div className="filter-bar" style={{ display: 'flex', alignItems: 'center', width: '100%', marginLeft: '1.5em' }}>
                <h5 style={{ marginTop: '0.3em' }}>FILTERS: </h5>
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

    const ProductCard = () => {
        return (
            <Card style={{ border: 'none', margin: 'none' }}>
                <Card.Body>
                    <Card.Img src={Beanie}></Card.Img>
                    <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '8px' }}>
                        <Card.Title style={{ paddingTop: '5px', fontSize: '0.98em', marginRight: '10px' }}>Sharkhead Beanie  </Card.Title>
                        <Card.Text style={{ fontSize: '1em', whiteSpace: 'nowrap' }}><b>$20.00 USD</b></Card.Text>
                    </div>
                    <Card.Text style={{ color: 'gray', fontSize: '0.8em' }}>Navy</Card.Text>
                </Card.Body>
            </Card >
        )
    }

    const CardGrid = () => {
        return (
            <div style={{ width: '100%', padding: '20px' }}>
                <Row>
                    <Col>
                        <ProductCard />
                    </Col>
                    <Col>
                        <ProductCard />
                    </Col>
                    <Col>
                        <ProductCard />
                    </Col>
                    <Col>
                        <ProductCard />
                    </Col>
                    <Col>
                        <ProductCard />
                    </Col>
                </Row>
            </div>
        )
    }

    return (
        <div style={{ width: '100%' }}>
            <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', padding: '4.5em', backgroundColor: '#ECECEC', border: 'none' }}>
                <h5 style={{ fontSize: '1em' }}><b>MENS</b></h5>
                <h2 style={{ fontWeight: '500' }}><b>T-SHIRTS & TOPS</b></h2>
            </Card>
            <Card style={{ display: 'flex', flexDirection: 'row', border: 'none', padding: '1em' }}>
                <FilterBar />
            </Card>
            <Card style={{ border: 'none' }}>
                <CardGrid />
            </Card>
            <Card style={{ border: 'none' }}>
                <CardGrid />
            </Card>

        </div>

    )
}

export default MensTops;