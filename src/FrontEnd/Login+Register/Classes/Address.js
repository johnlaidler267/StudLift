class Address {
    constructor() {
        this.first = "";
        this.last = "";
        this.country = "";
        this.addline1 = "";
        this.addline2 = "";
        this.state = "";
        this.city = "";
        this.zip = "";
    }

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
}
