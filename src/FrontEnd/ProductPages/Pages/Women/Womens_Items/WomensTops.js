//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//IMPORT Custom Styling
import '../../../Styling/Pages.css'

//IMPORT React elements
import React from 'react';
import { Card, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';

//IMPORT Helper functions
import { getProductCards } from '../../../HelperFunctions/ProductDBReqs'
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function WomensTops() {

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const [ProductCards, setProductCards] = React.useState([]);
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    React.useEffect(() => {
        getProductCards('WomensProducts', 'Bras').then((result) => setProductCards(result));
    }, []);
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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

    const CardGrid = () => {
        return (
            <div style={{ width: '50%', padding: '20px' }}>
                <Row>
                    <Row>
                        {ProductCards.map(Card => (<Col>{Card}</Col>))}
                    </Row>
                </Row>
            </div>
        )
    }

    return (
        <div style={{ width: '100%' }}>
            <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', padding: '4.5em', backgroundColor: '#ECECEC', border: 'none' }}>
                <h5 style={{ fontSize: '1em' }}><b>WOMENS</b></h5>
                <h2 style={{ fontWeight: '500' }}><b>SPORTS BRAS & TOPS</b></h2>
            </Card>
            <Card style={{ display: 'flex', flexDirection: 'row', border: 'none', padding: '1em' }}>
                <FilterBar />
            </Card>
            <Card style={{ border: 'none' }}>
                <CardGrid />
            </Card>

        </div>

    )
}

export default WomensTops;