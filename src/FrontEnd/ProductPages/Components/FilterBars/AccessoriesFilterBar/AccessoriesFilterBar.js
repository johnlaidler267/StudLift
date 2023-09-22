import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

export const AccessoriesFilterBar = ({ Products, FilteredProducts, setFilteredProducts, activeTab }) => {

    //Gets the unique product colors (for the color filter)
    const uniqueColors = [...new Set(Products.map(product => product._color))];

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Sorting function
    function sortProducts(products, sortBy) {
        if (sortBy === "low-high") {
            return products.sort((a, b) => parseInt(a._price) - parseInt(b._price));
        } else if (sortBy === "high-low") {
            return products.sort((a, b) => parseInt(b._price) - parseInt(a._price));
        } else {
            return products;
        }
    }

    // Filtering function
    function filterProducts(products, activeFilters, activeTab) {
        let filteredProducts = products;

        if (activeTab !== "All") {
            filteredProducts = filteredProducts.filter((product) => {
                console.log(`product._type: ${product._type}`)
                return product._type == activeTab;
            });
        }

        for (const [filter, value] of Object.entries(activeFilters)) {
            if (value !== "") {
                filteredProducts = filteredProducts.filter((card) => {
                    if (filter === "price") {
                        if (value === "0-10") {
                            return parseInt(card._price) >= 0 && parseInt(card._price) <= 10;
                        } else if (value === "10-20") {
                            return parseInt(card._price) >= 10 && parseInt(card._price) <= 20;
                        } else {
                            return parseInt(card._price) >= 20;
                        }
                    }
                    else if (filter === "sortBy") {
                        return true;
                    }
                    else {
                        return card[`_${filter}`] === value;
                    }
                });
            }
        }

        return filteredProducts;
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const [activeFilters, setActiveFilters] = useState({
        color: "",
        price: "",
        sortBy: "",
    });

    // Update the active filters state based on the filter selection
    const handleFilterSelection = (filterSelection, filter) => {
        setActiveFilters((prevFilters) => ({
            ...prevFilters,
            [filter]: prevFilters[filter] === filterSelection ? "" : filterSelection,
        }));
    };
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //Updates the filtered products based on the active filters state
    useEffect(() => {
        // Initialize the filtered products with a copy of Products
        let newFilteredProducts = [...Products];

        // Sort the products based on active filters
        newFilteredProducts = sortProducts(newFilteredProducts, activeFilters.sortBy);

        // Filter products based on active filters
        newFilteredProducts = filterProducts(newFilteredProducts, activeFilters, activeTab);

        // Only update state if newFilteredProducts is different from FilteredProducts
        if (JSON.stringify(newFilteredProducts) !== JSON.stringify(FilteredProducts)) {
            setFilteredProducts(newFilteredProducts);
        }
    }, [activeFilters, activeTab]);
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    return (
        <div className="filter-bar" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <h5>FILTERS: </h5>
            <DropdownButton
                id="color-filter"
                variant='custom'
                className='dropdown-btn'
                title="COLOR"
                onSelect={(eventKey) => handleFilterSelection(eventKey, "color")}
            >
                {uniqueColors.map((color) => <Dropdown.Item active={activeFilters.color === color} eventKey={color}>{color}</Dropdown.Item>)}
            </DropdownButton>
            <DropdownButton
                id="price-filter"
                title="PRICE"
                variant='custom'
                className='dropdown-btn'
                onSelect={(eventKey) => handleFilterSelection(eventKey, "price")}
            >
                <Dropdown.Item active={activeFilters.price === "0-10"} eventKey="0-10">$0 - $10</Dropdown.Item>
                <Dropdown.Item active={activeFilters.price === "10-20"} eventKey="10-20">$10 - $20</Dropdown.Item>
                <Dropdown.Item active={activeFilters.price === "20+"} eventKey="20+">$20+</Dropdown.Item>
            </DropdownButton>
            <DropdownButton
                id="sortby-filter"
                title="SORT BY"
                variant='custom'
                className='dropdown-btn'
                onSelect={(eventKey) => handleFilterSelection(eventKey, "sortBy")}
            >
                <Dropdown.Item active={activeFilters.sortBy === "low-high"} eventKey="low-high">Price: Low {`>`} High</Dropdown.Item>
                <Dropdown.Item active={activeFilters.sortBy === "high-low"} eventKey="high-low">Price: High {`>`} Low</Dropdown.Item>
            </DropdownButton>
        </div >
    );
};