import { convertProductArrayToCardComponents, convertJSONArrayToProductObjArray } from './ProductTypeConversions';

//Returns a list of JSON product objects corresponding to a specific DB (e.g. "MensAll")/Type (e.g. "Tops, All")
//DB Names: "Accessories, MensProducts, WomensProducts"
//Types: "Pants", "Tops", "Shorts", "Bras"
export const getProductCards = async (dbName, type) => {
    const response = await fetch(`http://localhost:3000/record/${dbName}/${type}`);

    if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
    }

    //extracts JSON data from a response object
    const objArr = await response.json();

    const jsonArray = convertJSONArrayToProductObjArray(objArr);
    const cardArray = await convertProductArrayToCardComponents(jsonArray, dbName);

    return cardArray;
}


//Returns a list of JSON products available
export const getProducts = async (dbName, type) => {
    const response = await fetch(`http://localhost:3000/record/${dbName}/${type}`);

    if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
    }

    //extracts JSON data from a response object
    const objArr = await response.json();
    const jsonArray = convertJSONArrayToProductObjArray(objArr);

    return jsonArray;
}