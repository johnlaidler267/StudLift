//Import Custom styling
import '../Styling/Navbar.css'
import { Nav, NavLink, NavMenu } from "../Styling/NavbarElements";

//IMPORT React elements
import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

//IMPORT Firebase
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../BackEnd/firebase/firebase';

// IMPORT Icons
import { BsSearch } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'

//IMPORT Photos
import logo from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/logo1.png';

import { PopupBag } from '../Components/PopupBag/PopupBag'

const Navbar = () => {
    // =================================================================
    // -> Initialize the navigate function to redirect to other pages

    const navigate = useNavigate();

    //=================================================================

    // Sets the current user
    const [user] = useAuthState(auth);

    //Sets whether the pop-up cart modal is showing
    const [showPopupBag, setShowPopupBag] = useState(false);

    const [alert, setAlert] = useState("");

    // Idk what this does
    useEffect(() => {
        const clearMessage = setTimeout(() => {
            setAlert("");
        }, 5000);
        return () => clearTimeout(clearMessage);
    }, [alert]);

    // Displays the left side of the nav bar
    const NavBarLeft = () => {
        const HomepageIcon = () => {
            return (<NavLink to="/" activeStyle>
                <img src={logo} className='logo'></img>
            </NavLink>)
        }
        const WomensIcon = () => {
            return (
                <NavLink to="/Womens" activeStyle>
                    Women
                </NavLink>
            )
        }
        const MensIcon = () => {
            return (
                <NavLink to="/Mens" activeStyle>
                    Men
                </NavLink>
            )
        }
        const AccessoriesIcon = () => {
            return (
                <NavLink to="/accessories" activeStyle>
                    Accessories
                </NavLink>
            )
        }
        return (
            <NavMenu className='nav-menu-left'>
                <HomepageIcon />
                <WomensIcon />
                <MensIcon />
                <AccessoriesIcon/>
            </NavMenu>
        )
    }

    // Displays the right side of the nav bar
    const NavBarRight = () => {

        const ProfileIcon = () => {
            return (
                <>
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
                </>
            )
        }

        const WishlistIcon = () => {
            return (
                <>
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
                </>
            )
        }

        const CartIcon = () => {
            return (
                <>
                    {user && (<NavLink onClick={() => setShowPopupBag(!showPopupBag)} activeStyle>
                        <AiOutlineShoppingCart />
                    </NavLink>)}
                    {showPopupBag && <PopupBag onClose={() => setShowPopupBag(false)} firebaseID={user.uid} />}
                </>
            )
        }

        const SearchIcon = () => {
            return (<NavLink to='/search' onClick={() => navigate('/search')} activeStyle>
                <BsSearch />
            </NavLink>)
        }

        return (
            <NavMenu style={{
                backgroundColor: 'transparent'
            }}>
                <SearchIcon />
                <WishlistIcon />
                <ProfileIcon />
                <CartIcon />
            </NavMenu>
        )
    }

    return (
        <Nav className='navbar-cstm'>
            <NavBarLeft />
            <NavBarRight />
        </Nav >
    );
};

// default sets the default export for this file so you dont have to use curly braces when importing.
export default Navbar;