//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//IMPORT Custom styling
import '../../Styling/ViewItemStyling.css'

//Import React elements
import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

//IMPORT MUI elements
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Slider from '@mui/material/Slider';
import ButtonGroup from '@mui/material/ButtonGroup';
import ButtonG from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//IMPORT Icons
import { GiReturnArrow, GiDeliveryDrone } from 'react-icons/gi'
import { TbTruckDelivery } from 'react-icons/tb'

// IMPORT Images (LEFT)
import one from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/one.webp'
import two from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/two.webp'
import three from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/three.webp'

//IMPORT DB functions
import { fetchProductById, updateUserCart } from './ViewItemDB'

//IMPORT Firebase
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../../BackEnd/firebase/firebase';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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
    const user = useAuthState(auth);

    // Get the productId, dbName from the URL parameter
    const { productId, dbName } = useParams();
    const [product, setProduct] = useState({}); // State for product object
    const [gender, setGender] = useState("");
    const [uppercaseName, setUppercaseName] = useState("")
    const [color, setColor] = useState("")
    const [size, setSize] = useState(''); // Initialize the size state as an empty string

    //================================================================
    //-> Handles changing the state of the selected color
    const handleColorClick = (selectedColor) => {
        console.log(`The color was set to ${selectedColor}`)
        setColor(selectedColor);
    };

    //-> Handles changing the state of the selected size
    const handleSizeClick = (selectedSize) => {
        setSize(selectedSize); // Update the size state when a size is clicked
    };

    //-> Handles adding the selected product to the user's cart
    const handleAddToBag = () => {
        updateUserCart(product, color, size, user.uid);
    };
    //================================================================

    // Fetch product details based on the productId
    useEffect(() => {
        fetchProductById(dbName, productId)
            .then((data) => {
                setUppercaseName(data.name.toUpperCase());
                setProduct(data); // Set the product object in state

                if (dbName.startsWith("Mens")) setGender("Mens")
                else if (dbName.startsWith("Womens")) setGender("Womens")
                else setGender("Accessories")
            })
            .catch((error) => {
                console.error('Error fetching product details:', error);
            });
    }, [productId]);

    useEffect(() => {

    })

    //================================================================

    return (
        <div>
            <Card id='view-item-card'>
                <p>{<Link to={`/ `}>Home</Link>} / {<Link to={` / ${gender}`}>{gender}</Link>} / {product.name}</p>

                <Row>

                    <Col style={{ border: "none" }} xs={7}>
                        <Card style={{ border: "none", width: "100%", border: "none" }}>
                            <Row style={{ padding: "6px" }}>
                                <Col xs={4} >
                                    <Card.Img variant="right" src={one} className='product-img' />
                                </Col>
                                <Col xs={4}>
                                    <Card.Img variant="right" src={two} className='product-img' />
                                </Col>
                                <Col xs={4}>
                                    <Card.Img variant="right" src={three} className='product-img' />
                                </Col>
                            </Row>
                            <Row>
                                <Card.Img variant="right" src={product.imageURL} className='product-img' />
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
                                    <h5><b>{uppercaseName}</b></h5>
                                </Col>
                                <Col>
                                    <h5 style={{ fontSize: "15px" }}><b>{product.price} USD</b></h5>
                                </Col>
                            </Row>
                            <Row>
                                <p style={{ fontSize: "12px" }}>StudentLifter {gender}</p>
                            </Row>
                            <Divider />

                            <Card style={{ border: "none", padding: "5px" }}>
                                <Row>
                                    <p className='selection-label'><b>COLOR:</b></p>
                                </Row>
                                <Row>
                                    <ButtonGroup size="large" color="primary" id='color-selection-btn-group'>
                                        <Button onClick={() => handleColorClick('Black')} id='color-btn'>
                                            {<Card.Img
                                                src={product.imageURL}
                                                className='color-image' />}
                                        </Button>
                                        <Button onClick={() => handleColorClick('Red')} id='color-btn'>
                                            {<Card.Img
                                                src={product.imageURL}
                                                className='color-image' />}
                                        </Button>
                                        <Button onClick={() => handleColorClick('Green')} id='color-btn'>
                                            {<Card.Img
                                                src={product.imageURL}
                                                className='color-image' />}
                                        </Button>

                                    </ButtonGroup>
                                    <p>Selected Color: {color}</p> {/* Display the selected size */}
                                </Row>
                            </Card>



                            <Card id='size-card'>
                                <p className='selection-label'><b>SELECT SIZE</b></p>
                                <ButtonGroup size="large" color="primary">
                                    <ButtonG onClick={() => handleSizeClick('XS')}>XS</ButtonG>
                                    <ButtonG onClick={() => handleSizeClick('S')}>S</ButtonG>
                                    <ButtonG onClick={() => handleSizeClick('M')}>M</ButtonG>
                                    <ButtonG onClick={() => handleSizeClick('L')}>L</ButtonG>
                                    <ButtonG onClick={() => handleSizeClick('XL')}>XL</ButtonG>
                                </ButtonGroup>
                                <p>Selected Size: {size}</p> {/* Display the selected size */}
                            </Card>

                            <br />

                            <Card id='add-card'>
                                <Button class="btn btn-primary" className='add-btn' onClick={() => handleAddToBag()}>Add to Bag</Button>
                                <Button variant="dark" className='add-btn'>Add to Wishlist</Button>
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
                </Row >
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
        </div >
    );
}

export default ViewItem;