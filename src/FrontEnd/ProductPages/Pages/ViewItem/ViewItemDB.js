import { convertJSONToProductObj } from '../../HelperFunctions/ProductTypeConversions'
import { getUserDetails } from '../../../../BackEnd/commonFunctions'
import CartItem from '../../../Cart/Classes/CartItem'
import UserCart from '../../../Cart/Classes/UserCart';

//================================================================
//Given an ID for a product, fetch that product from the DB
export const fetchProductById = async (dbName, productID) => {
    const response = await fetch(`http://localhost:3000/record/getProductByID/${dbName}/${productID}`);

    if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
    }

    //extracts JSON data from a response object
    const productObj = await response.json();

    return convertJSONToProductObj(productObj);
}
//================================================================
//-> Update a user cart
export const updateUserCart = async (product, color, size, firebaseID) => {
    // Declare a new cart item object
    const cartItem = new CartItem(product, color, size);

    //Get the user cart & add it to the cart
    const userCart = await fetchUserCart(firebaseID);

    userCart.addProduct(cartItem);
}
//================================================================
export const fetchUserCart = async (firebaseID) => {
    const userCart = await getUserDetails(firebaseID).then(userDetails => userDetails.Cart);
    return new UserCart(userCart.cartItems, firebaseID, userCart.total);
}
//================================================================
