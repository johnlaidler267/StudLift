class Address {
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    constructor(first, last, addLine1, addLine2, country, state, city, zip) {
        this.first = first || "";
        this.last = last || "";
        this.country = country || "";
        this.addline1 = addLine1 || "";
        this.addline2 = addLine2 || "";
        this.state = state || "";
        this.city = city || "";
        this.zip = zip || "";
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Setters
    setFirst(firstName) {
        this.first = firstName;
    }

    setLast(lastName) {
        this.last = lastName;
    }

    setCountry(country) {
        this.country = country;
    }

    setAddline1(addressLine1) {
        this.addline1 = addressLine1;
    }

    setAddline2(addressLine2) {
        this.addline2 = addressLine2;
    }

    setState(state) {
        this.state = state;
    }

    setCity(city) {
        this.city = city;
    }

    setZip(zip) {
        this.zip = zip;
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Getters
    getFirst() {
        return this.first;
    }

    getLast() {
        return this.last;
    }

    getCountry() {
        return this.country;
    }

    getAddline1() {
        return this.addline1;
    }

    getAddline2() {
        return this.addline2;
    }

    getState() {
        return this.state;
    }

    getCity() {
        return this.city;
    }

    getZip() {
        return this.zip;
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
}

export default Address;
