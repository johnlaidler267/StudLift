// Import styling pages
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

// Import custom components
import Navbar from './FrontEnd/Navbar/Navbar';
import Main from './FrontEnd/Homepage/Homepage';
import LoginForm from './FrontEnd/Login+Register/Login'
import Search from './FrontEnd/Navbar/Search.js'
import WishlistNLI from './FrontEnd/Wish_Lists/WishlistNLI'
import WishlistLI from './FrontEnd/Wish_Lists/WishlistLI';
import Register from './FrontEnd/Login+Register/Register'
import ViewItem from './FrontEnd/Purchase/ViewItem';

// Product pages
import Women from './FrontEnd/Mens+Womens/Women/Women';
import WomensAll from './FrontEnd/Mens+Womens/Women/Womens_Items/WomensAll';
import WomensPants from './FrontEnd/Mens+Womens/Women/Womens_Items/WomensPants'
import WomensShorts from './FrontEnd/Mens+Womens/Women/Womens_Items/WomensShorts'
import WomensTops from './FrontEnd/Mens+Womens/Women/Womens_Items/WomensTops'

import Men from './FrontEnd/Mens+Womens/Men/Men'
import MensAll from './FrontEnd/Mens+Womens/Men/Mens_Items/MensAll';
import MensPants from './FrontEnd/Mens+Womens/Men/Mens_Items/MensPants'
import MensShorts from './FrontEnd/Mens+Womens/Men/Mens_Items/MensShorts'
import MensTops from './FrontEnd/Mens+Womens/Men/Mens_Items/MensTops'

import Accessories from './FrontEnd/Mens+Womens/Accessories';

// Checkout pages
import Information from './FrontEnd/Purchase/Checkout/Information'
import Shipping from './FrontEnd/Purchase/Checkout/Shipping'
import Payment from './FrontEnd/Purchase/Checkout/Payment'
import OrderConfirmation from './FrontEnd/Purchase/Checkout/OrderConfirmation';

//Footer pages
import AboutUs from './FrontEnd/Footer/Footer_Links/AboutUs'
import FAQ from './FrontEnd/Footer/Footer_Links/FAQ'

//Edit profile pages
import EditProfile from './FrontEnd/EditAccount/EditPF_Column/EditPFColumn'
import ReviseBilling from './FrontEnd/EditAccount/Revise_Info/ReviseBilling';
import ReviseShipping from './FrontEnd/EditAccount/Revise_Info/ReviseShipping';
import RevisePayment from './FrontEnd/EditAccount/Revise_Info/RevisePayment';

import Returns from './FrontEnd/EditAccount/Returns';

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
