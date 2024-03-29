// IMPORT Custom styling
import '../../Cart/Styling/Orders.css';

// IMPORT React elements
import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

// IMPORT Icons
import { IoIosArrowBack } from 'react-icons/io';
import { FaTrashAlt } from 'react-icons/fa';

// IMPORT Custom components
import { CardGrid, Filter } from '../Components/WishlistComponents';

//IMPORT Helper Functions
import getWishlist from '../HelperFunctions/getWishlist';

//IMPORT Firebase
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../BackEnd/firebase/firebase';


/**
 * WishlistLI component displays a user's wishlist.
 */
function WishlistLI() {
    const [user] = useAuthState(auth);
    const [wishlist, setWishlist] = useState({});
    const [loading, setLoading] = useState(true);
    const [wishlistItems, setWishlistItems] = useState([]);
    const [filteredWLItems, setFilteredWLItems] = useState([]);
    const [sortBy, setSortBy] = useState("low-high");

    useEffect(() => {
        getWishlist(user.uid).then((wl) => {
            setWishlist(wl);
            setWishlistItems(wl.getItems());
            setFilteredWLItems(wl.getItems());
            setLoading(false);
        });
    }, []);

    function goBack() {
        window.history.back();
    }

    const Header = () => {
        return (
            <Card className='header-card'>
                <Button onClick={goBack} className='back-arrow'>
                    <IoIosArrowBack /> <b>Back</b>
                </Button>
                <br />
                <div className='header-div'>
                    <h1><b>YOUR WISHLIST</b></h1>
                    <h5><b>{wishlistItems.length} PRODUCT(S)</b></h5>
                </div>
            </Card>
        )
    }

    const Filter = () => {
        return (
            <Filter WishlistItems={wishlistItems} FilteredWLItems={filteredWLItems} setFilteredWLItems={setFilteredWLItems} setSortBy={setSortBy} sortBy={sortBy} />
        )
    }

    const ClearWishlistBtn = () => {
        return (
            <Button className='remove-all-btn' onClick={() => wishlist.clear()}>
                <FaTrashAlt /><b> <span style={{ padding: '8px' }}>Remove all items</span></b>
            </Button>
        )
    }

    const WishlistItems = () => {
        return (
            <div className='card-grid-div'>
                <CardGrid Wishlist={wishlist} FilteredWLItems={filteredWLItems} setWishlistItems={setWishlistItems} setFilteredWLItems={setFilteredWLItems} />
            </div>
        )
    }

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className='background-div'>
            <Header />
            <Card className='product-display-card'>
                <Filter />
                <WishlistItems/>
                <ClearWishlistBtn/>
            </Card>
        </div>
    );
}

export default WishlistLI;
