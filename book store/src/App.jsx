import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductLIstPage';
import ProductDetailPage from './features/products/ProductDetailPage';
import CartPage from './features/cart/CartPage';
import WishlistPage from './features/wishlist/WishlistPage';
import SignUpPage from './features/auth/SignUpPage';
import LoginPage from './features/auth/LoginPage';
import CheckoutPage from './pages/CheckoutPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./App.css"
import UserProfile from './pages/UserProfile';
import AddOrEditAddress from './pages/AddOrEditAddress';
function App() {
  return (
    <Router>
      <div className='wrapper'>
      <main className='main'>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<HomePage/>}/>
            <Route path="/products" exact element={<ProductListPage/>}/>
            <Route path="/product/:id" element={<ProductDetailPage/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/wishlist" element={<WishlistPage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/checkout" element={<CheckoutPage/>}/>
            <Route path="/user_profile" element={<UserProfile/>}/>
            <Route path="/user_profile/address" element={<AddOrEditAddress/>}/>
            <Route path="/user_profile/address/:addressId" element={<AddOrEditAddress/>}/>
          </Routes>
      </main>
      </div>
    </Router>
  );
}

export default App;
