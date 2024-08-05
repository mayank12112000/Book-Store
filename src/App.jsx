import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductLIstPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './styling/CartPage';
import WishlistPage from './pages/WishlistPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import CheckoutPage from './pages/CheckoutPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./App.css"
import UserProfile from './pages/UserProfile';
import AddOrEditAddress from './pages/AddOrEditAddress';
import { useDispatch } from 'react-redux';
import { setUser } from './features/auth/authSlice';
import Modal from './components/CouponModal';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser)));
    }
  }, [dispatch]);

  return (
    <Router>
      <div className='wrapper'>
          <Modal/>
        <main className='main'>
          <Navbar /> <br />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/products" exact element={<ProductListPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/user_profile" element={<UserProfile />} />
            <Route path="/user_profile/address" element={<AddOrEditAddress />} />
            <Route path="/user_profile/address/:addressId" element={<AddOrEditAddress />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
