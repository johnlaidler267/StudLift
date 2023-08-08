//Cutom CSS
import './Navbar.css'

//Custom Components
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

//React components
import { useEffect, useState } from "react";
import { Button, Card, Row, Col, Container } from 'react-bootstrap'
import Divider from '@mui/material/Divider';
import QuantityPicker from "../Purchase/Components/QuantityPicker/QuantityPicker";

//Firebase
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';

// React Icons
import { BsSearch } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'

//Photos
import ItemPicture from '/Users/johnnylaidler/studentlifter/src/Photos/searchItem.webp';
import logo from '/Users/johnnylaidler/studentlifter/src/Photos/logo1.png';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);

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
                            <Button href='/information' variant="primary" style={{ width: "100%", margin: "2px" }}>CHECKOUT</Button>
                            <Button href='/cart' variant="secondary" style={{ width: "100%", margin: "2px" }}>YOUR BAG</Button>
                        </Col>
                    </Card>

                </Card>
            </div>
        )
    }

    return (
        <>
            <Nav className='navbar-cstm'>

                <NavMenu className='nav-menu'>
                    <NavLink to="/" activeStyle>
                        <img src={logo} className='logo'></img>
                    </NavLink>
                    <br></br>
                    <NavLink to="/women" activeStyle>
                        Women
                    </NavLink>
                    <NavLink to="/men" activeStyle>
                        Men
                    </NavLink>
                    <NavLink to="/accessories" activeStyle>
                        Accessories
                    </NavLink>
                </NavMenu>

                <NavMenu style={{
                    width: "100% ",
                    backgroundColor: 'transparent'
                }}>
                    < NavLink to="/search" activeStyle>
                        <BsSearch />
                    </NavLink>

                    {!user && (
                        <NavLink to="/wishlist-nli" activeStyle>
                            <AiOutlineHeart />
                        </NavLink>
                    )}
                    {user && (
                        <NavLink to="/wishlist-li" activeStyle>
                            <AiOutlineHeart />
                        </NavLink>
                    )}

                    {!user && (
                        <NavLink to="/login" activeStyle>
                            <CgProfile />
                        </NavLink>
                    )}
                    {user && (
                        <NavLink to="/edit-profile" activeStyle>
                            <img src={user.photoURL} className='profile-pic'></img>
                        </NavLink>
                    )}

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