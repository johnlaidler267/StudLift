class CartItem {
    constructor(product, color, size) {
        this.product = product; // Assuming product is an object
        this.color = color;
        this.size = size;
        this.itemID = this.generateRandomId(10);
    }

    // Getter method for the product field
    getProduct() {
        return this.product;
    }

    // Getter method for the color field
    getColor() {
        return this.color;
    }

    // Getter method for the size field
    getSize() {
        return this.size;
    }

    generateRandomId(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomId = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomId += characters.charAt(randomIndex);
        }

        return randomId;
    }
}

export default CartItem;