// Import styling pages
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

// Import custom components
import Navbar from './FrontEnd/Navbar/Navbar.js';
import Main from './FrontEnd/Homepage/Homepage.js';
import LoginForm from './FrontEnd/Account/Login.js'
import Search from './FrontEnd/Navbar/Search.js'
import WishlistNLI from './FrontEnd/Cart/WishList/WishlistNLI.js.js'
import WishlistLI from './FrontEnd/Cart/WishlistLI';
import Register from './FrontEnd/Account/Register'
import ViewItem from './FrontEnd/Purchase/ViewItem';

import Women from './FrontEnd/Men+Women/Mens+Womens/Women/Women';
import WomensAll from './FrontEnd/Men+Women/Mens+Womens/Women/Womens_Items/WomensAll';
import WomensPants from './FrontEnd/Men+Women/Mens+Womens/Women/Womens_Items/WomensPants'
import WomensShorts from './FrontEnd/Men+Women/Mens+Womens/Women/Womens_Items/WomensShorts'
import WomensTops from './FrontEnd/Men+Women/Mens+Womens/Women/Womens_Items/WomensTops'

import Men from './FrontEnd/Mens+Womens/Men/Men'
import MensAll from './FrontEnd/Mens+Womens/Men/Mens_Items/MensAll';
import MensPants from './FrontEnd/Mens+Womens/Men/Mens_Items/MensPants'
import MensShorts from './FrontEnd/Mens+Womens/Men/Mens_Items/MensShorts'
import MensTops from './FrontEnd/Mens+Womens/Men/Mens_Items/MensTops'

import Accessories from './FrontEnd/Men+Women/Mens+Womens/Accessories';
import Information from './FrontEnd/Purchase/Checkout/Information'
import Shipping from './FrontEnd/Purchase/Checkout/Shipping'
import Payment from './FrontEnd/Purchase/Checkout/Payment'
import OrderConfirmation from './FrontEnd/Purchase/Checkout/OrderConfirmation';

import AboutUs from './FrontEnd/Footer/Footer_Links/AboutUs'
import FAQ from './FrontEnd/Footer/Footer_Links/FAQ'
import EditProfile from './FrontEnd/Account/EditProfile'
import ReviseBilling from './FrontEnd/Account/Revise_Info/ReviseBilling';
import ReviseShipping from './FrontEnd/Account/Revise_Info/ReviseShipping';
import RevisePayment from './FrontEnd/Account/Revise_Info/RevisePayment';

import Returns from './FrontEnd/Account/Returns';

import Cart from './FrontEnd/Cart/Cart'

import Footer from './FrontEnd/Footer/Footer'

// import { UserProvider } from './firebase/User';


// Import components from React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//* App.js: The main component that serves as the entry point/central hub for rendering and managing other components.
function App() {
  return (
    // <UserProvider>
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
            <Route path='/returns' element={<Returns />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/FAQ' element={<FAQ />} />
          </Routes>
        </Router>
      </div >
      <Footer />
    </div>
    // </UserProvider>
  );
}

export default App;
