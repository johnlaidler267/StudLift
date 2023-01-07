//Cutom CSS
import './Navbar.css'

//Custom Components
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

//React components
import { useEffect, useState } from "react";
import { Button, Card, Row, Col, Container } from 'react-bootstrap'
import Divider from '@mui/material/Divider';
import QuantityPicker from "../Purchase/QuantityPicker/QuantityPicker";

// React Icons
import { BsSearch } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'

//Photos
import ItemPicture from '/Users/johnnylaidler/studentlifter/src/Photos/searchItem.webp';

const Navbar = () => {
    /*
    const logoutRef = useRef();

    const HandleLogout = () => {
        userloggedIn = false;
        localStorage.clear();
        sessionStorage.clear();
        window.location.reload();
    }
    */
    const [alert, setAlert] = useState("");
    const [displayModal, setDisplayModal] = useState(false);

    useEffect(() => {
        const clearMessage = setTimeout(() => {
            setAlert("");
        }, 5000);
        return () => clearTimeout(clearMessage);
    }, [alert]);

    const BagItem = () => {
        let value = 0;
        return (
            <div>
                <Container style={{ padding: "2px", marginBottom: "10px" }}>
                    <Card style={{ width: "100%", margin: "10px 0px 10px -20px", padding: "5px", border: "none" }}>
                        <Row>
                            <Col xs={4}>
                                <Card.Img src={ItemPicture} alt="My Image" style={{ width: "110%", height: "100%", overflow: "visible" }} />
                            </Col>
                            <Col xs={8}>
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
                                    <br />
                                    <QuantityPicker min={0} max={4} />
                                    <br />
                                    <a href="" style={{ color: "gray", textDecoration: "none", fontSize: "12px" }}>Remove</a>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                </Container >
            </div >
        )
    }

    const Bag = () => {
        return (
            <div className={`Modal ${displayModal ? "Show" : ""}`}>

                <Card style={{ border: "none", padding: "10px", margin: "2px" }}>
                    <Row style={{ display: "flex", justifyContent: "center" }}>
                        <Col xs={10}>
                            <h5><b>YOUR BAG</b></h5>
                        </Col>
                        <Col xs={2}>
                            <Button variant='outline-secondary' className="Close">X</Button>
                        </Col>

                        <Divider></Divider>

                        <Card style={{ border: "none", padding: "5px", margin: "5px", width: "90%", display: "flex", justifyContent: "center" }}>
                            <BagItem />
                            <Divider></Divider>
                            <BagItem />
                            <Divider></Divider>
                            <Row style={{ padding: "5px" }}>
                                <Col xs={9}>
                                    <h5>Total:</h5>
                                </Col>
                                <Col xs={3}>
                                    <p><b>$49.99</b></p>
                                </Col>
                            </Row>
                        </Card>

                        <Divider></Divider>

                    </Row>

                    <Card style={{ width: "100%", padding: "5px", border: "none" }}>
                        <Col style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                            <Button variant="primary" style={{ width: "100%", margin: "2px" }}>CHECKOUT</Button>
                            <Button variant="secondary" style={{ width: "100%", margin: "2px" }}>YOUR BAG</Button>
                        </Col>
                    </Card>

                </Card>
            </div>
        )
    }

    return (
        <>
            <Nav style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-evenly" }}>

                <NavMenu style={{ width: "100%", marginRight: '40%' }}>
                    <NavLink to="/" activeStyle>
                        <h1>SL</h1>
                    </NavLink>
                    <br></br>
                    <NavLink to="/women" activeStyle>
                        Women
                    </NavLink>
                    <NavLink to="/men" activeStyle>
                        Men
                    </NavLink>
                    <NavLink to="/mens-all" activeStyle>
                        MA
                    </NavLink>
                    <NavLink to="/accessories" activeStyle>
                        Accessories
                    </NavLink>
                </NavMenu>

                <NavMenu style={{
                    width: "100% "
                }}>
                    < NavLink to="/search" activeStyle>
                        <BsSearch />
                    </NavLink>
                    <NavLink to="/wishlist-nli" activeStyle>
                        <AiOutlineHeart />
                    </NavLink>
                    <NavLink to="/login" activeStyle>
                        <CgProfile />
                    </NavLink>
                    <NavLink to="/edit-profile" activeStyle>
                        <CgProfile />
                    </NavLink>
                    <NavLink to="/register" activeStyle>
                        Register
                    </NavLink>
                    <NavLink to="/viewitem" activeStyle>
                        View Item
                    </NavLink>
                    <NavLink to="/information" activeStyle>
                        I
                    </NavLink>
                    <NavLink to="/shipping" activeStyle>
                        S
                    </NavLink>
                    <NavLink to="/payment" activeStyle>
                        P
                    </NavLink>
                    <NavLink to="/confirmation" activeStyle>
                        C
                    </NavLink>
                    <NavLink to="/cart" activeStyle>
                        ca
                    </NavLink>
                    <NavLink to="/wishlist-li" activeStyle>
                        W
                    </NavLink>
                    <NavLink onClick={() => setDisplayModal(!displayModal)} activeStyle>
                        <AiOutlineShoppingCart />
                    </NavLink>
                </NavMenu>
                <Bag />
            </Nav >
        </>
    );
};

// default sets the default export for this file so you dont have to use curly braces when importing.
export default Navbar;