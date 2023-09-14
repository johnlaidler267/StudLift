//Custom styling
import '../../../Styling/Pages.css'

//React components
import React from 'react';
import { useNavigate, createContext } from 'react-router-dom';
import { Card, Row, Col, Button, Dropdown, DropdownButton } from 'react-bootstrap';

//Icons
import { BiBookAdd } from 'react-icons/bi';
import { MdFavorite } from 'react-icons/md'

//Photos
import Beanie from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/beanie.webp'

import { FilterBar, CardGrid } from '../../../Components/FilterBar/FilterBar'

import { getProductCards } from '../../../HelperFunctions/ProductDBReqs'

function MensAll() {
    // =================================================================
    // -> initialize the navigate function to redirect to other pages

    const navigate = useNavigate();

    //=================================================================
    const [ProductCards, setProductCards] = React.useState([]);

    React.useEffect(() => {
        getProductCards('MensProducts', 'All').then((result) => setProductCards(result));
    }, []);

    const CardGrid = () => {
        return (
            <div style={{ width: '100%', padding: '20px' }}>
                <Row>
                    {ProductCards.map(Card => (<Col>{Card}</Col>))}
                </Row>
            </div>
        )
    }

    return (
        <div style={{ width: '100%' }}>
            <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', padding: '4.5em', backgroundColor: '#ECECEC', border: 'none' }}>
                <h5 style={{ fontSize: '1em' }}><b>MENS</b></h5>
                <h2 style={{ fontWeight: '500' }}><b>ALL PRODUCTS</b></h2>
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

export default MensAll;