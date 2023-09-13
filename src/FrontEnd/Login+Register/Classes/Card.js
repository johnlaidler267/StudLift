class Card {
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    constructor(first, last, cardNumber, expirationDate, cvv) {
        this.first = first || "";
        this.last = last || "";
        this.cardNumber = cardNumber || "";
        this.expirationDate = expirationDate || "";
        this.cvv = cvv || "";
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Setters
    setFirst(firstName) {
        this.first = firstName;
    }

    setLast(lastName) {
        this.last = lastName;
    }

    setCardNumber(cardNumber) {
        this.cardNumber = cardNumber;
    }

    setExpirationDate(expirationDate) {
        this.expirationDate = expirationDate;
    }

    setCVV(cvv) {
        this.cvv = cvv;
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Getters
    getFirst() {
        return this.first;
    }

    getLast() {
        return this.last;
    }

    getCardNumber() {
        return this.cardNumber;
    }

    getExpirationDate() {
        return this.expirationDate;
    }

    getCVV() {
        return this.cvv;
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
}

export default Card;