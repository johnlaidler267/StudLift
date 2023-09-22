
//IMPORT Helper Functions
import { getUserDetails } from '../../../BackEnd/commonFunctions';

//IMPORT Classes
import Wishlist from '../Classes/Wishlist.js';

const addWishlistItem = async (product, userID) => {
    // get user details from DB
    const userData = await getUserDetails(userID);

    //Pull exisiting WL array from userData
    const existingWishlist = userData.Wishlist.wishlistItems;

    console.log(`existingWishlist: ${JSON.stringify(existingWishlist)}`)

    // Create a new Wishlist object based on the existing Wishlist
    const wishlist = new Wishlist(existingWishlist, userID);

    // Add the WishlistItem to the Wishlist
    wishlist.addItem(product, product._color, product._imageURL);
}

export default addWishlistItem;