// Import styling pages
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { createContext, useState } from 'react';

// Import custom components
import Navbar from './FrontEnd/Navbar/Pages/Navbar';
import Footer from './FrontEnd/Footer/Pages/Footer'

import Main from './FrontEnd/Homepage/Pages/Homepage';

import Login from './FrontEnd/Login+Register/Pages/Login'
import Register from './FrontEnd/Login+Register/Pages/Register'

import Search from './FrontEnd/Search/Pages/Search.js'
import WishlistNLI from './FrontEnd/Wishlist/Pages/WishlistNLI'
import WishlistLI from './FrontEnd/Wishlist/Pages/WishlistLI';

// Product pages
import ViewItem from './FrontEnd/ProductPages/Pages/ViewItem/ViewItem';

import Women from './FrontEnd/ProductPages/Pages/Women/Women';
import WomensAll from './FrontEnd/ProductPages/Pages/Women/Womens_Items/WomensAll';
import WomensPants from './FrontEnd/ProductPages/Pages/Women/Womens_Items/WomensPants'
import WomensShorts from './FrontEnd/ProductPages/Pages/Women/Womens_Items/WomensShorts'
import WomensTops from './FrontEnd/ProductPages/Pages/Women/Womens_Items/WomensTops'

import Men from './FrontEnd/ProductPages/Pages/Men/Men'
import MensAll from './FrontEnd/ProductPages/Pages/Men/Mens_Items/MensAll';
import MensPants from './FrontEnd/ProductPages/Pages/Men/Mens_Items/MensPants'
import MensShorts from './FrontEnd/ProductPages/Pages/Men/Mens_Items/MensShorts'
import MensTops from './FrontEnd/ProductPages/Pages/Men/Mens_Items/MensTops'

import Accessories from './FrontEnd/ProductPages/Pages/Accessories/Accessories';

// Checkout pages
import Information from './FrontEnd/Purchase/Pages/Information'
import Shipping from './FrontEnd/Purchase/Pages/Shipping'
import Payment from './FrontEnd/Purchase/Pages/Payment'
import OrderConfirmation from './FrontEnd/Purchase/Pages/OrderConfirmation';

//Footer pages
import AboutUs from './FrontEnd/Footer/Pages/AboutUs'
import FAQ from './FrontEnd/Footer/Pages/FAQ'

//Edit profile pages
import EditProfile from './FrontEnd/EditAccount/Pages/EditPF/EditPF'
import ReviseBilling from './FrontEnd/EditAccount/Pages/Revise_Info/ReviseBilling';
import ReviseShipping from './FrontEnd/EditAccount/Pages/Revise_Info/ReviseShipping';
import RevisePayment from './FrontEnd/EditAccount/Pages/Revise_Info/RevisePayment';
import Returns from './FrontEnd/EditAccount/Pages/Returns';

import Cart from './FrontEnd/Cart/Pages/Cart'

//Import Context
import { CartProvider } from './Contexts/CartContext'
import { CheckoutProvider } from './Contexts/CheckoutContext'
import { UserInfoProvider } from './Contexts/UserInfoContext'
import { LoginProvider } from './Contexts/LoginContext'

// Import components from React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//* App.js: The main component that serves as the entry point/central hub for rendering and managing other components.
function wrapWithProvider(Component, Provider) {
  return (
    <Provider>
      <Component />
    </Provider>
  );
}

function App() {
  return (
    <LoginProvider>
      <CartProvider>
        <div className="App">
          <div className="bg-image">
            <Router>
              <Navbar />
              <Routes>
                {/* Main routes */}
                <Route path="/" element={<Main />} />
                <Route path="/search" element={<Search />} />
                <Route path='/viewitem' element={<ViewItem />} />
                <Route path='/Womens' element={<Women />} />
                <Route path='/Mens' element={<Men />} />
                <Route path='/accessories' element={<Accessories />} />
                <Route path='/mens-all' element={<MensAll />} />
                <Route path='/mens-pants' element={<MensPants />} />
                <Route path='/mens-shorts' element={<MensShorts />} />
                <Route path='/mens-tops' element={<MensTops />} />
                <Route path='/womens-all' element={<WomensAll />} />
                <Route path='/womens-pants' element={<WomensPants />} />
                <Route path='/womens-shorts' element={<WomensShorts />} />
                <Route path='/womens-tops' element={<WomensTops />} />
                <Route path='/product/:dbName/:productId' element={<ViewItem />} />
                <Route path='/cart' element={<Cart />} />
                <Route path="/wishlist-nli" element={<WishlistNLI />} />

                {/* User-related routes */}
                <Route
                  path="/login"
                  element={wrapWithProvider(Login, UserInfoProvider)}
                />
                <Route
                  path="/register"
                  element={wrapWithProvider(Register, UserInfoProvider)}
                />
                <Route
                  path='/edit-profile'
                  element={wrapWithProvider(EditProfile, UserInfoProvider)}
                />
                <Route
                  path='/revise-billing'
                  element={wrapWithProvider(ReviseBilling, UserInfoProvider)}
                />
                <Route
                  path='/revise-shipping'
                  element={wrapWithProvider(ReviseShipping, UserInfoProvider)}
                />
                <Route
                  path='/revise-payment'
                  element={wrapWithProvider(RevisePayment, UserInfoProvider)}
                />
                <Route
                  path="/wishlist-li"
                  element={wrapWithProvider(WishlistLI, UserInfoProvider)}
                />

                {/* Checkout-related routes */}
                <Route
                  path='/information'
                  element={wrapWithProvider(Information, CheckoutProvider)}
                />
                <Route
                  path='/shipping'
                  element={wrapWithProvider(Shipping, CheckoutProvider)}
                />
                <Route
                  path='/payment'
                  element={wrapWithProvider(Payment, CheckoutProvider)}
                />
                <Route
                  path='/confirmation'
                  element={wrapWithProvider(OrderConfirmation, CheckoutProvider)}
                />

                {/* Other routes outside providers */}
                <Route path='/returns' element={<Returns />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/FAQ' element={<FAQ />} />
              </Routes>
            </Router>
          </div>
          <Footer />
        </div>
      </CartProvider>
    </LoginProvider>
  );
}

export default App;
