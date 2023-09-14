//React Components
import React, { useState, useEffect, useContext } from 'react';
import { Link, createContext } from 'react-router-dom';
import { Card, Row, Col, Button, Dropdown, DropdownButton } from 'react-bootstrap';

//Icons
import { BiBookAdd } from 'react-icons/bi';
import { MdFavorite } from 'react-icons/md'

//Import Product Object
import Product from './Product'

//Import ProductCard
import { ProductCard } from '../Components/ProductCard/ProductCard'

//Takes an array of Product object & returns an array of ProductCard components
export const convertProductArrayToCardComponents = (productObjArray, dbName) => {
    let productCardArray = [];
    productObjArray.forEach(productObj => {
        productCardArray.push((<ProductCard product={productObj} db={dbName}></ProductCard>));
    });
    return productCardArray;
};

//Takes a single JSON (product) object & returns a Product object (HELPER)
export const convertJSONToProductObj = (product) => {
    return new Product(product.Name, product.Color, product.Price, product._id, product.ImageURL);
};

//Takes an array of JSON (product) objects & returns an array of Product objects
export const convertJSONArrayToProductObjArray = (productArray) => {
    let productObjArray = [];
    productArray.forEach(product => {
        productObjArray.push(convertJSONToProductObj(product));
    });
    return productObjArray;
}