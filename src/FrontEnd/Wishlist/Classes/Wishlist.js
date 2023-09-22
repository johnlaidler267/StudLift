//IMPORT Classes
import WishlistItem from './WishlistItem.js';

class Wishlist {
    constructor(existingWishlist, firebase) {
        this.wishlistItems = existingWishlist;
        this.userID = firebase;
    }

    // Get the wishlist items
    getItems() {
        return this.wishlistItems;
    }

    // Add an item to the wishlist
    async addItem(product, color, imageURL) {
        //add item to wishlist
        this.wishlistItems.push(new WishlistItem(product, color, imageURL));

        //update the wishlist in DB
        await this.updateDB()
    }

    // Remove an item from the wishlist by index
    async removeItem(itemID) {
        //find index of item in wishlist
        const index = this.wishlistItems.findIndex(item => item.product._ID === itemID);

        //remove item from wishlist
        this.wishlistItems.splice(index, 1);

        //update the wishlist in DB
        await this.updateDB()
    }

    // Clear the wishlist
    async clear() {
        //clear wishlist
        this.wishlistItems = [];

        //update the wishlist in DB
        await this.updateDB()
    }

    async updateDB() {
        await fetch(`http://localhost:3000/record/updateWishlist/${this.userID}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.wishlistItems),
        }).catch(err => {
            window.alert(err)
            return;
        });
    }
}

export default Wishlist;