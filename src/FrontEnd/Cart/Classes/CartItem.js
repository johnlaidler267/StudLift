class CartItem {
    constructor(product, color, size, itemID, quantity, subtotal) {
        this.product = product; // Assuming product is an object
        this.color = color;
        this.size = size;
        this.itemID = itemID || this.generateRandomId(10);
        this.quantity = quantity || 1;
        this.subtotal = subtotal || product._price;
    }

    // Getter method for the product field
    getProduct() {
        return this.product;
    }

    // Getter method for the color field
    getColor() {
        return this.color;
    }

    getItemID() {
        return this.itemID;
    }

    getSize() {
        return this.size;
    }

    getQuantity() {
        return this.quantity;
    }

    increaseQuantity() {
        this.quantity += 1;
        this.setSubtotal();
    }

    decreaseQuantity() {
        this.quantity -= 1;
        this.setSubtotal();
    }

    setSubtotal() {
        let subtotal = parseFloat(this.product._price) * parseInt(this.quantity);
        this.subtotal = parseFloat(subtotal).toFixed(2);
    }

    getSubtotal() {
        console.log(`Subtotal should be ${this.subtotal}`)
        return this.subtotal;
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