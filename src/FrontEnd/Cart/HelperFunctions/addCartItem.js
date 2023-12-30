
//IMPORT Helper Functions
import { getUserDetails } from '../../../BackEnd/commonFunctions';

//IMPORT Classes
import UserCart from '../Classes/UserCart';
import CartItem from '../Classes/CartItem';

const addCartItem = async (product, size, userID) => {
    // get user details from DB
    const userData = await getUserDetails(userID);

    //Pull exisiting WL array from userData
    const existingCartItems = userData.Cart.cartItems;

    const existingTotal = userData.Cart.total;

    const userCart = new UserCart(existingCartItems, userID, existingTotal);

    const newItem = new CartItem(product, product._color, size, product._itemID, product._quantity, product._total);

    // Add the WishlistItem to the Wishlist
    userCart.addProduct(newItem);
}

export default addCartItem;