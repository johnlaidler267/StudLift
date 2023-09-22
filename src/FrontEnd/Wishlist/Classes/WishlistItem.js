class WishlistItem {
    constructor(product, color, imageURL) {
        this.product = product;
        this.color = color;
        this.imageURL = imageURL;
        this.dateAdded = new Date();
    }

    getProduct() {
        return this.product;
    }

    getColor() {
        return this.color;
    }

    getImageURL() {
        return this.imageURL;
    }

    getDateAdded() {
        return this.dateAdded;
    }
}

export default WishlistItem;