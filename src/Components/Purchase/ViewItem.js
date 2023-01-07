import React, { useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Slider from '@mui/material/Slider';
import ButtonGroup from '@mui/material/ButtonGroup';
import ButtonG from '@mui/material/Button';

import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//Import Images
import { GiReturnArrow, GiDeliveryDrone } from 'react-icons/gi'
import { TbTruckDelivery } from 'react-icons/tb'

// - Main Images (LEFT)
import one from '/Users/johnnylaidler/studentlifter/src/Photos/one.webp'
import two from '/Users/johnnylaidler/studentlifter/src/Photos/two.webp'
import three from '/Users/johnnylaidler/studentlifter/src/Photos/three.webp'
import four from '/Users/johnnylaidler/studentlifter/src/Photos/four.webp'

// - Color Variations
let black = 'https://cdn.shopify.com/s/files/1/0156/6146/products/LegacyRuchedTightShortBlackBlackB4A3Y-BBBB-1199.255_d8bde972-24c6-427a-a90e-d00ccfb3a1dd_150x.jpg?v=1670368902'
let green = 'https://cdn.shopify.com/s/files/1/0156/6146/products/LegacyRuchedTightShortHoyaGreenHoyaGreenB4A3Y-EBRF-1661.295_7bcc00d4-ac9e-42d5-aac0-ba53f1c591e2_150x.jpg?v=1670368902'
let blue = 'https://cdn.shopify.com/s/files/1/0156/6146/products/LegacyRuchedTightShortLakesideBlueLakesideBlueB4A3Y-UBPF-0349.192_37cda382-9a19-4486-8a32-427e9b0e23c4_150x.jpg?v=1670368902'
let pink = 'https://cdn.shopify.com/s/files/1/0156/6146/products/LegacyRuchedTightShortDeepPinkDeepPinkB4A3Y-KBHP-0995.238_97b0bf7a-8667-486a-a506-cdafceeaca7b_150x.jpg?v=1670368902'


const iOSBoxShadow =
    '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const marks = [
    {
        value: 0,
    },
    {
        value: 25,
    },
    {
        value: 50,
    },
    {
        value: 75,
    },
    {
        value: 100,
    },
];

const sizingMarks = [
    {
        value: 0,
        label: 'Loose'
    },
    {
        value: 33,
    },
    {
        value: 66,
    },
    {
        value: 100,
        label: "Tight"
    },
];

const comfortMarks = [
    {
        value: 0,
        label: 'Comfortable'
    },
    {
        value: 33,
    },
    {
        value: 66,
    },
    {
        value: 100,
        label: "Uncomfortable"
    },
];

const satisfactionMarks = [
    {
        value: 0,
        label: 'Satisfied'
    },
    {
        value: 33,
    },
    {
        value: 66,
    },
    {
        value: 100,
        label: "Unsatisfied"
    },
];

const IOSSlider = styled(Slider)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? '#3880ff' : '#3880ff',
    height: 5,
    padding: '15px 0',
    '& .MuiSlider-thumb': {
        height: 28,
        width: 28,
        backgroundColor: '#fff',
        boxShadow: iOSBoxShadow,
        '&:focus, &:hover, &.Mui-active': {
            boxShadow:
                '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                boxShadow: iOSBoxShadow,
            },
        },
    },
    '& .MuiSlider-valueLabel': {
        fontSize: 12,
        fontWeight: 'normal',
        top: -6,
        backgroundColor: 'unset',
        color: theme.palette.text.primary,
        '&:before': {
            display: 'none',
        },
        '& *': {
            background: 'transparent',
            color: theme.palette.mode === 'dark' ? '#fff' : '#000',
        },
    },
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-rail': {
        opacity: 0.5,
        backgroundColor: '#bfbfbf',
    },
    '& .MuiSlider-mark': {
        backgroundColor: '#bfbfbf',
        height: 8,
        width: 1,
        '&.MuiSlider-markActive': {
            opacity: 1,
            backgroundColor: 'currentColor',
        },
    },
}));

const PrettoSlider = styled(Slider)({
    color: 'blue',
    height: 15,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 0,
        width: 0,
        backgroundColor: '#fff',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#52af77',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
});

function ViewItem() {
    return (
        <Container style={{ width: "100%", height: "85%" }}>
            <Card style={{ width: "100%", height: "100%", padding: "50px" }}>
                <p>Home / Legacy Ruched Tight Shorts</p>

                <Row>

                    <Col style={{ border: "none" }} xs={7}>
                        <Card style={{ border: "none", width: "100%", border: "none" }}>
                            <Row style={{ padding: "6px" }}>
                                <Col xs={4} >
                                    <Card.Img variant="right" src={one} alt="My Image" style={{ width: "100%", height: "100%", overflow: "visible" }} />
                                </Col>
                                <Col xs={4}>
                                    <Card.Img variant="right" src={two} alt="My Image" style={{ width: "100%", height: "100%", overflow: "visible" }} />
                                </Col>
                                <Col xs={4}>
                                    <Card.Img variant="right" src={three} alt="My Image" style={{ width: "100%", height: "100%", overflow: "visible" }} />
                                </Col>
                            </Row>
                            <Row>
                                <Card.Img variant="right" src={four} alt="My Image" style={{ width: "100%", height: "100%", overflow: "visible" }} />
                            </Row>

                        </Card>
                    </Col>

                    <Col xs={5}>
                        <Card style={{ border: "none", width: "100%", padding: "6px", border: "none" }}>
                            <Row>
                                <Col xs={3}>
                                    <Rating name="read-only" value={3} readOnly style={{ color: "black" }} />
                                </Col>
                                <Col xs={2}>
                                    <p>(7)</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p style={{ fontSize: "12px" }}><b>|NEW</b></p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h5><b>LEGACY RUCHED TIGHT SHORTS</b></h5>
                                </Col>
                                <Col>
                                    <h5 style={{ fontSize: "15px" }}><b>$ 40.00 USD</b></h5>
                                </Col>
                            </Row>
                            <Row>
                                <p style={{ fontSize: "12px" }}>StudentLifter Womens</p>
                            </Row>
                            <Divider />

                            <Card style={{ border: "none", padding: "5px" }}>
                                <Row>
                                    <p style={{ fontSize: "12px" }}><b>COLOR:</b></p>
                                </Row>
                                <Row>
                                    <Card.Img style={{ width: "17%", height: "15%", marginLeft: "5px", marginBottom: "10px" }} src={black} alt="Legacy Ruched Tight Shorts in Black" />
                                    <Card.Img style={{ width: "17%", height: "15%", marginBottom: "10px" }} src={green} alt="Legacy Ruched Tight Shorts in Black" />
                                    <Card.Img style={{ width: "17%", height: "15%", marginBottom: "10px" }} src={blue} alt="Legacy Ruched Tight Shorts in Black" />
                                    <Card.Img style={{ width: "17%", height: "15%", marginRight: "10px", marginBottom: "10px" }} src={pink} alt="Legacy Ruched Tight Shorts in Black" />
                                </Row>
                            </Card>

                            <Card style={{ border: "none", padding: "5px" }}>
                                <p style={{ fontSize: "12px" }}><b>SELECT SIZE</b></p>
                                <ButtonGroup size="large" aria-label="large button group" color="secondary" style={{ marginLeft: "5px" }}>
                                    <ButtonG>XS</ButtonG>
                                    <ButtonG>S</ButtonG>
                                    <ButtonG>M</ButtonG>
                                    <ButtonG>L</ButtonG>
                                    <ButtonG>XL</ButtonG>
                                </ButtonGroup>
                            </Card>

                            <br />

                            <Card style={{ display: "flex", alignItems: "center", border: "none" }}>
                                <Button class="btn btn-primary" style={{ width: "80%", margin: "10px" }}>Add to Bag</Button>
                                <Button variant="dark" style={{ width: "80%", margin: "10px" }}>Add to Wishlist</Button>
                            </Card>

                            <br></br>

                            <Card style={{ padding: "12px", margin: "5px", backgroundColor: "#E5DDE7", fontSize: "14px", border: "none" }}>
                                <p><b><GiReturnArrow /> Free Returns. Purchases through 1/1/23 can be returned up until 1/31/23</b></p>
                                <p><b><TbTruckDelivery /> Free Standard Delivery Over $75</b></p>
                                <p><b><GiDeliveryDrone /> Free Express Delivery Over $150</b></p>
                            </Card>

                            <br />
                            <Divider />
                            <br />

                            <Card style={{ border: "none" }}>
                                <h6><b>BUILD YOUR LEGACY</b></h6>

                                <p>
                                    The Legacy collection is all about Gymshark history, featuring an updated version of our classic screenprint logo.
                                    So turn up to lift in this reworked collection and start building your own legacy.
                                </p>
                                <p>
                                    - 5" inseam based on a M <br />
                                    - High depth waistband offers comfort and support <br />
                                    - Toggles to side <br />
                                    - Legacy logo to back waistband <br />
                                    - 78% Nylon, 22% Elastane <br />
                                    - We’ve cut down on our use of swing tags, so this product comes without one. <br />
                                    - Model is 5'3" and wears size S <br />
                                    - SKU: B4A3Y-BBBB</p>
                            </Card>

                        </Card>
                    </Col>
                </Row>
                <br />

                <Card style={{ border: "none", display: "flex", textAlign: "center", padding: "30px" }}>
                    <h3><b>REVIEWS</b></h3>
                    <Row>
                        <Col style={{ margin: "10px", padding: "10px" }}>
                            <h1 style={{ fontSize: "120px" }}><b>4.8</b></h1>
                            <Rating name="read-only" value={3} readOnly style={{ color: "black" }} />
                            <h1 style={{ fontSize: "15px", margin: "10px" }}><b>7 REVIEWS</b></h1>
                        </Col>
                        <Col style={{ margin: "10px", padding: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Box sx={{ width: 290 }}>
                                <PrettoSlider
                                    valueLabelDisplay="auto"
                                    aria-label="pretto slider"
                                    defaultValue={20}
                                />
                                <PrettoSlider
                                    valueLabelDisplay="auto"
                                    aria-label="pretto slider"
                                    defaultValue={20}
                                />
                                <PrettoSlider
                                    valueLabelDisplay="auto"
                                    aria-label="pretto slider"
                                    defaultValue={20}
                                />
                            </Box>
                        </Col>
                        <Col style={{ margin: "10px", padding: "10px", display: "flex", justifyContent: "center" }}>
                            <Box sx={{ width: 250 }}>
                                <Typography gutterBottom><b>Sizing</b></Typography>
                                <IOSSlider
                                    aria-label="ios slider"
                                    defaultValue={60}
                                    marks={sizingMarks}
                                    valueLabelDisplay="off"
                                    disabled="true"
                                />
                                <Typography gutterBottom><b>Comfort</b></Typography>
                                <IOSSlider
                                    aria-label="ios slider"
                                    defaultValue={60}
                                    marks={comfortMarks}
                                    valueLabelDisplay="off"
                                    disabled="true"
                                />
                                <Typography gutterBottom><b>Satisfaction</b></Typography>
                                <IOSSlider
                                    aria-label="ios slider"
                                    defaultValue={60}
                                    marks={satisfactionMarks}
                                    valueLabelDisplay="off"
                                    disabled="true"
                                />
                            </Box>
                        </Col>
                    </Row>
                </Card>

                <Card style={{ padding: "20px", border: "2.5px solid gray", boxShadow: "5px 10px lightgray" }}>
                    <Rating name="read-only" value={3} readOnly style={{ color: "black" }} />
                    <br />
                    <h5><b>REVIEW</b></h5>
                    <p>
                        <b>Anahi G</b><br />
                        Height: 5ft4-5ft7 (163cm-172cm) <br />
                        Usual Size: UK 8/ US 4/ EU 36/ AU 8 <br />
                        December 27, 2022
                    </p>
                    <p>Love them, they are so comfortable. They are not to thing ant the fit is perfect</p>
                    <Box sx={{ width: 1150, padding: "10px", }}>
                        <Row style={{ width: "100%", display: "flex", justifyContent: "space-evenly", padding: "5px" }}>
                            <Col style={{ margin: "10px" }} xs={3}>
                                <Typography gutterBottom><b>Sizing</b></Typography>
                                <IOSSlider
                                    aria-label="ios slider"
                                    defaultValue={60}
                                    marks={sizingMarks}
                                    valueLabelDisplay="off"
                                    disabled="true"
                                />
                            </Col>
                            <Col style={{ margin: "10px" }} xs={3}>
                                <Typography gutterBottom><b>Comfort</b></Typography>
                                <IOSSlider
                                    aria-label="ios slider"
                                    defaultValue={60}
                                    marks={comfortMarks}
                                    valueLabelDisplay="off"
                                    disabled="true"
                                />
                            </Col>
                            <Col style={{ margin: "10px" }} xs={3}>
                                <Typography gutterBottom><b>Satisfaction</b></Typography>
                                <IOSSlider
                                    aria-label="ios slider"
                                    defaultValue={60}
                                    marks={satisfactionMarks}
                                    valueLabelDisplay="off"
                                    disabled="true"
                                />
                            </Col>
                        </Row>
                    </Box>
                </Card>

                <br />
                <br />

                <Container style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <Button variant="dark" style={{ width: "20%" }}>LOAD MORE</Button>
                </Container>

            </Card >
        </Container >
    );
}

export default ViewItem;