export default class Product {
    constructor(name, color, price, ID, imageURL) {
        this._name = name;
        this._color = color;
        this._price = price;
        this._ID = ID;
        this._imageURL = imageURL;
    }

    // Getter and setter for 'name'
    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    // Getter and setter for 'color'
    get color() {
        return this._color;
    }

    set color(newColor) {
        this._color = newColor;
    }

    // Getter and setter for 'price'
    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    // Getter and setter for 'ID'
    get ID() {
        return this._ID;
    }

    set ID(newID) {
        this._ID = newID;
    }

    // Getter and setter for 'imageURL'
    get imageURL() {
        return this._imageURL;
    }

    set imageURL(newImageURL) {
        this._imageURL = newImageURL;
    }
}