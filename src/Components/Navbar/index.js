import { useRef } from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

// import BSSearch from react icons
import { BsSearch } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'

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

    return (
        <>
            <Nav style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between", marginBlockStart: "0 em" }}>
                <NavMenu style={{ width: "80%" }}>
                    <h1>SL</h1>
                    <br></br>
                    <NavLink to="/womens" activeStyle>
                        Womens
                    </NavLink>
                    <NavLink to="/mens" activeStyle>
                        Mens
                    </NavLink>
                    <NavLink to="/accesories" activeStyle>
                        Accessories
                    </NavLink>
                </NavMenu>
                <NavMenu style={{
                    width: "20 % "
                }}>
                    < NavLink to="/search" activeStyle>
                        <BsSearch />
                    </NavLink>
                    <NavLink to="/wishlist" activeStyle>
                        <AiOutlineHeart />
                    </NavLink>
                    <NavLink to="/login" activeStyle>
                        <CgProfile />
                    </NavLink>
                    <NavLink to="/cart" activeStyle>
                        <AiOutlineShoppingCart />
                    </NavLink>
                </NavMenu>
            </Nav >

        </>
    );
};

// default sets the default export for this file so you dont have to use curly braces when importing.
export default Navbar;