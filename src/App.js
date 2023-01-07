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
import Men from './Components/Pages/Men/Men'
import MensAll from './Components/Pages/Men/MensAll';
import Information from './Components/Purchase/Checkout/Information'
import Shipping from './Components/Purchase/Checkout/Shipping'
import Payment from './Components/Purchase/Checkout/Payment'
import OrderConfirmation from './Components/Purchase/Checkout/OrderConfirmation';
import Accessories from './Components/Pages/Accessories';
import EditProfile from './Components/Account/EditProfile'
import Cart from './Components/Orders/Cart'

import Footer from './Components/Navbar/Footer'


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
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Router>
      </div >
      <Footer />
    </div>
  );
}

export default App;
