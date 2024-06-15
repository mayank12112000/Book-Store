import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListPage from './features/products/ProductLIstPage';
import ProductDetailPage from './features/products/ProductDetailPage';
import CartPage from './features/cart/CartPage';
import WishlistPage from './features/wishlist/WishlistPage';
import SignUpPage from './features/auth/SignUpPage';
import LoginPage from './features/auth/LoginPage';
import CheckoutPage from './pages/CheckoutPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./App.css"
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
          </Routes>
      </main>
      </div>
    </Router>
  );
}

export default App;
