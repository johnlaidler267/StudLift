//React components
import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Divider from '@mui/material/Divider';

//Photos
import ItemPicture from '/Users/johnnylaidler/studentlifter/src/Photos/searchItem.webp';

function Search() {
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform search logic here
    };

    const SearchItem = () => {
        return (
            <div>
                <Card style={{ width: "20%", height: "20%", margin: "5px" }}>
                    <Card.Img variant="right" src={ItemPicture} alt="My Image" style={{ width: "100%", height: "100%", overflow: "visible" }} />
                    <Card.Footer>
                        <Row>
                            <Col xs={8}>
                                <h7 style={{ fontSize: "12px" }}><b>| NEW</b></h7>
                            </Col>
                            <Col xs={4}>
                                <h9 style={{ fontSize: "14px" }}><b>$49.99</b></h9>
                            </Col>
                        </Row>
                        <Row>
                            <h7>Power Washed Rag Top</h7>
                            <h9 style={{ fontSize: "12px" }}>Black</h9>
                        </Row>
                    </Card.Footer>
                </Card>
            </div>
        )
    }
    const SearchResults = () => {
        return (
            <div>
                <Card style={{ border: "none" }}>
                    <Card.Body>
                        <br></br>
                        <h9>1 Products Found</h9>
                        <br></br>
                        <br></br>
                        <SearchItem />
                    </Card.Body>
                </Card>
            </div>
        )
    };

    return (
        <div>
            <Card style={{ border: 'none' }}>
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <input
                        type="text"
                        value={query}
                        onChange={handleChange}
                        placeholder="Search By Typing Keywords..."
                        style={{ width: '100%', padding: "30px", border: "none", fontSize: "1.5rem" }}
                    />
                    <Divider />
                </form>
                <SearchResults />
            </Card>
        </div>
    );
}

export default Search;