//IMPORT Helper Functions
import { getUserDetails } from '../../../BackEnd/commonFunctions';

//IMPORT Classes
import Wishlist from '../Classes/Wishlist.js';

const getWishlist = async (firebaseID) => {
    // get user details from DB
    const userData = await getUserDetails(firebaseID);
    
    //Pull exisiting WL array from userData
    const existingWishlist = userData.Wishlist.wishlistItems;

    // Create a new Wishlist object based on the existing Wishlist
    const wishlist = new Wishlist(existingWishlist, firebaseID);

    // Return the wishlist items by calling the Wishlist.getItems() method
    return wishlist;
}

export default getWishlist;