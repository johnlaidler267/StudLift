import Address from '../../Login+Register/Classes/Address.js'
import Card from '../../Login+Register/Classes/Card.js'

class UserOrder {
    constructor(cartItems, orderNumber, email, shipping, billing, total) {
        console.log(`The shipping address inside the UserOrder constructor is ${JSON.stringify(shipping)}`)
        console.log(`The billing address inside the UserOrder constructor is ${JSON.stringify(billing)}`)
        this.cart = cartItems || [];
        this.datePlaced = new Date();
        this.dateDelivered = new Date();
        this.paymentMethod = new Card();
        this.orderNumber = orderNumber;
        this.shippingAddress = new Address(shipping.First, shipping.Last, shipping.AddLine1, shipping.AddLine2, shipping.Country, shipping.City, shipping.State, shipping.Zip);
        this.billingAddress = new Address(billing.First, billing.Last, billing.AddLine1, billing.AddLine2, billing.Country, billing.City, billing.State, billing.Zip);
        this.email = email;
        this.total = total;
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