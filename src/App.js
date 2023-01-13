// Import styling pages
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

// Import custom components
import Navbar from './Components/Navbar/Navbar.js';
import Main from './Components/Homepage/Homepage.js';
import LoginForm from './Components/Account/Login.js'
import Search from './Components/Navbar/Search.js'
import WishlistNLI from './Components/Orders/WishlistNLI.js'
import WishlistLI from './Components/Orders/WishlistLI';
import Register from './Components/Account/Register'
import ViewItem from './Components/Purchase/ViewItem';

import Women from './Components/Pages/Women/Women';
import WomensAll from './Components/Pages/Women/WomensAll';
import WomensPants from './Components/Pages/Women/WomensPants'
import WomensShorts from './Components/Pages/Women/WomensShorts'
import WomensTops from './Components/Pages/Women/WomensTops'

import Men from './Components/Pages/Men/Men'
import MensAll from './Components/Pages/Men/MensAll';
import MensPants from './Components/Pages/Men/MensPants'
import MensShorts from './Components/Pages/Men/MensShorts'
import MensTops from './Components/Pages/Men/MensTops'
import Accessories from './Components/Pages/Accessories';

import Information from './Components/Purchase/Checkout/Information'
import Shipping from './Components/Purchase/Checkout/Shipping'
import Payment from './Components/Purchase/Checkout/Payment'
import OrderConfirmation from './Components/Purchase/Checkout/OrderConfirmation';


import AboutUs from './Footer/AboutUs'
import FAQ from './Footer/FAQ'

import EditProfile from './Components/Account/EditProfile'
import ReviseBilling from './Components/Account/ReviseBilling';
import ReviseShipping from './Components/Account/ReviseShipping';
import RevisePayment from './Components/Account/RevisePayment';

import Cart from './Components/Orders/Cart'

import Footer from './Footer/Footer'


// Import components from React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="bg-image">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/search" element={<Search />} />
            <Route path="/wishlist-nli" element={<WishlistNLI />} />
            <Route path="/wishlist-li" element={<WishlistLI />} />
            <Route path="/register" element={<Register />} />
            <Route path='/viewitem' element={<ViewItem />} />
            <Route path='/women' element={<Women />} />
            <Route path='/men' element={<Men />} />
            <Route path='/information' element={<Information />} />
            <Route path='/shipping' element={<Shipping />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/confirmation' element={<OrderConfirmation />} />
            <Route path='/accessories' element={<Accessories />} />
            <Route path='/edit-profile' element={<EditProfile />} />
            <Route path='/mens-all' element={<MensAll />} />
            <Route path='/mens-pants' element={<MensPants />} />
            <Route path='/mens-shorts' element={<MensShorts />} />
            <Route path='/mens-tops' element={<MensTops />} />
            <Route path='/womens-all' element={<WomensAll />} />
            <Route path='/womens-pants' element={<WomensPants />} />
            <Route path='/womens-shorts' element={<WomensShorts />} />
            <Route path='/womens-tops' element={<WomensTops />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/revise-billing' element={<ReviseBilling />} />
            <Route path='/revise-shipping' element={<ReviseShipping />} />
            <Route path='/revise-payment' element={<RevisePayment />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/FAQ' element={<FAQ />} />
          </Routes>
        </Router>
      </div >
      <Footer />
    </div>
  );
}

export default App;
