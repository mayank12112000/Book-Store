import "./Navbar.css";
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const Navbar = () => {
  const {pathname} = useLocation()
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="navbar-container">
        <div className="home-hamburger">
          {pathname==="/products" && <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>}
          <Link to="/" className="navbar-brand"><b>Bookify</b></Link>
        </div>

        <div className="search-bar d-none d-md-block" >
          <span className=" search-icon"><SearchOutlinedIcon /></span>
          <input className="search-input" placeholder="search book" type="text" />
        </div>
        <div className="d-flex">
          <ul className="d-flex flex-row p-1 navbar-nav ml-auto">
            <li className="nav-item mx-2">
              <Link to="/cart" className="navbar-icons nav-link"><ShoppingCartOutlinedIcon /></Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/wishlist" className="navbar-icons nav-link"><FavoriteBorderOutlinedIcon /></Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/user_profile" className="navbar-icons nav-link"><AccountCircleOutlinedIcon /></Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <AccountCircleOutlinedIcon /> */}
    </nav>
  );
};

export default Navbar;
