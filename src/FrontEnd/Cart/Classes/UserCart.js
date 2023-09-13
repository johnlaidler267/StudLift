import CartItem from './CartItem.js'

class UserCart {
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // 🛒📦 Constructor for UserCart class
    constructor(cartItems, userID, total) {
        this.cartItems = cartItems.map((item) => new CartItem(item.product, item.color, item.size, item.itemID, item.quantity, item.subtotal)) || [];
        this.userID = userID || "";
        this.total = total || 0;
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // 🛒📋 Getters for cart items and cart total

    getCartItems() {
        return this.cartItems;
    }

    getCartItem(itemID) {
        return this.cartItems.find((cartItem) => cartItem.getItemID() === itemID);
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // 🛒🔼🔽 Methods to increase and decrease item quantities in the cart

    increaseQuantity(itemID) {
        this.cartItems.forEach((cartItem) => {
            if (cartItem.getItemID() === itemID) {
                cartItem.increaseQuantity();
            }
        });

        this.setTotal();
        this.updateCartInDatabase(this, this.userID);
    }

    decreaseQuantity(itemID) {
        this.cartItems.forEach((cartItem) => {
            if (cartItem.getItemID() === itemID) {
                cartItem.decreaseQuantity();
            }
        });

        this.setTotal();
        this.updateCartInDatabase(this, this.userID);
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // 🛒➕ Function to add a product to the cart
    addProduct(cartItem) {
        // Update the cart by adding the new product
        this.cartItems.push(cartItem);

        // Update the cart total
        this.setTotal();

        // Send a PATCH request to update the cart in the database
        this.updateCartInDatabase(this, this.userID);
    }

    // 🛒❌ Function to delete a product from the cart
    deleteProduct(itemID) {
        // Filter out the product to be deleted from the cart
        this.cartItems = this.cartItems.filter((cartItem) => cartItem.itemID !== itemID);

        this.setTotal();

        // Send a PATCH request to update the cart in the database
        this.updateCartInDatabase(this, this.userID);
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // 🛒🔢 Calculate and set the cart total
    setTotal() {
        let total = 0;
        this.cartItems.forEach((cartItem) => {
            total += parseFloat(cartItem.getSubtotal());
        });
        this.total = parseFloat(total).toFixed(2);
    }

    // 🛒🔢 Get the cart total
    getTotal() {
        return this.total;
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // 🛒📡 Send a PATCH request to update the cart in the database
    updateCartInDatabase = async (newCart, firebaseID) => {
        const response = await fetch(`http://localhost:3000/record/updateCart/${firebaseID}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCart),
        }).catch(err => {
            window.alert("Error in UserCar.js")
            return;
        });
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
}

export default UserCart;
