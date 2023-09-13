//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Import classes (card, address, usercart)
import Card from './Card.js';
import Address from './Address.js';
import UserCart from '../../Cart/Classes/UserCart.js';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

class User {
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    constructor(firebase, email, password, firstName, lastName, gender) {
        this.Firebase = firebase;
        this.Email = email;
        // You should hash the password before storing it
        this.Password = password; // Remember to hash the password
        this.First = firstName;
        this.Last = lastName;
        this.Gender = gender;
        this.Wishlist = [];
        this.Billing = new Address();
        this.Shipping = new Address();
        this.Cards = [new Card()];
        this.DefaultCardIdx = 0;
        this.Cart = new UserCart([], firebase, 0);
        this.Orders = [];
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Setters
    setFirebase(firebase) {
        this.Firebase = firebase;
    }

    setEmail(email) {
        this.Email = email;
    }

    setPassword(password) {
        // You should hash the password before storing it
        this.Password = password;
    }

    setFirst(firstName) {
        this.First = firstName;
    }

    setLast(lastName) {
        this.Last = lastName;
    }

    setGender(gender) {
        this.Gender = gender;
    }

    setBillingAddress(address) {
        this.Billing = address;
    }

    setShippingAddress(address) {
        this.Shipping = address;
    }

    setDefaultCardIndex(index) {
        this.DefaultCardIdx = index;
    }

    setCart(cart) {
        this.Cart = cart;
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    addToWishlist(item) {
        this.Wishlist.push(item);
    }

    addCard(card) {
        this.Cards.push(card);
    }

    addOrder(order) {
        this.Orders.push(order);
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Getters
    getFirebase() {
        return this.Firebase;
    }

    getEmail() {
        return this.Email;
    }

    getPassword() {
        // You should never expose the password in a real application
        return this.Password;
    }

    getFirst() {
        return this.First;
    }

    getLast() {
        return this.Last;
    }

    getGender() {
        return this.Gender;
    }

    getWishlist() {
        return this.Wishlist;
    }

    getBillingAddress() {
        return this.Billing;
    }

    getShippingAddress() {
        return this.Shipping;
    }

    getCards() {
        return this.Cards;
    }

    getDefaultCardIndex() {
        return this.DefaultCardIdx;
    }

    getCart() {
        return this.Cart;
    }

    getOrders() {
        return this.Orders;
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

}