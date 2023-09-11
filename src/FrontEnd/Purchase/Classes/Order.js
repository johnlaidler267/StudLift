class UserOrder {
    constructor(orderNumber, email) {
        this.cart = [];
        this.datePlaced = null;
        this.dateDelivered = null;
        this.paymentMethod = new Card();
        this.orderNumber = orderNumber;
        this.shippingAddress = new Address();
        this.billingAddress = new Address();
        this.email = email;
    }

    // Setters
    setCart(cart) {
        this.cart = cart;
    }

    setDatePlaced(date) {
        this.datePlaced = date;
    }

    setDateDelivered(date) {
        this.dateDelivered = date;
    }

    setPaymentMethod(paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    setOrderNumber(orderNumber) {
        this.orderNumber = orderNumber;
    }

    setShippingAddress(address) {
        this.shippingAddress = address;
    }

    setBillingAddress(address) {
        this.billingAddress = address;
    }

    setEmail(email) {
        this.email = email;
    }

    // Getters
    getCart() {
        return this.cart;
    }

    getDatePlaced() {
        return this.datePlaced;
    }

    getDateDelivered() {
        return this.dateDelivered;
    }

    getPaymentMethod() {
        return this.paymentMethod;
    }

    getOrderNumber() {
        return this.orderNumber;
    }

    getShippingAddress() {
        return this.shippingAddress;
    }

    getBillingAddress() {
        return this.billingAddress;
    }

    getEmail() {
        return this.email;
    }
}

export default UserOrder;