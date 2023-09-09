//Cutom CSS
import './Navbar.css'

//Custom Components
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

//React components
import React from 'react';
import { useEffect, useState } from "react";
import { Button, Card, Row, Col, Container } from 'react-bootstrap'
import Divider from '@mui/material/Divider';
import QuantityPicker from "../Purchase/Components/QuantityPicker/QuantityPicker";

//Firebase
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../BackEnd/firebase/firebase';

// React Icons
import { BsSearch } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'

//Photos
import ItemPicture from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/searchItem.webp';
import logo from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/logo1.png';

import { PopupBag } from './PopupBag/PopupBag'

const Navbar = () => {
    console.log('================================')
    const [user, loading] = useAuthState(auth);

    const [alert, setAlert] = useState("");

    const [showPopupBag, setShowPopupBag] = useState(false);


    useEffect(() => {
        const clearMessage = setTimeout(() => {
            setAlert("");
        }, 5000);
        return () => clearTimeout(clearMessage);
    }, [alert]);


    return (
        <>
            <Nav className='navbar-cstm'>

                <NavMenu className='nav-menu'>
                    <NavLink to="/" activeStyle>
                        <img src={logo} className='logo'></img>
                    </NavLink>
                    <br></br>
                    <NavLink to="/Womens" activeStyle>
                        Women
                    </NavLink>
                    <NavLink to="/Mens" activeStyle>
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
                            {user.photoURL && (
                                < img src={user.photoURL} className='profile-pic'></img>
                            )}
                            {!user.photoURL && (
                                <CgProfile />
                            )}
                        </NavLink>
                    )}

                    <NavLink onClick={() => setShowPopupBag(!showPopupBag)} activeStyle>
                        <AiOutlineShoppingCart />
                    </NavLink>
                </NavMenu>
                {showPopupBag && <PopupBag onClose={() => setShowPopupBag(false)} firebaseID={user.uid} />}
            </Nav >
        </>
    );
};

// default sets the default export for this file so you dont have to use curly braces when importing.
export default Navbar;