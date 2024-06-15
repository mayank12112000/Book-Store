import "./Navbar.css";
import React from 'react';
import { Link } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand"><b>Bookify</b></Link>

        <div className="search-bar" >
          <span class=" search-icon"><SearchOutlinedIcon/></span>
          <input className="search-input" placeholder="search book" type="text" />
        </div>
        <div className="d-flex">
          <ul className="d-flex flex-row p-1 navbar-nav ml-auto">
            <li className="nav-item mx-2">
              <Link to="/cart" className="nav-link"><ShoppingCartOutlinedIcon/></Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/wishlist" className="nav-link"><FavoriteBorderOutlinedIcon/></Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/login" className="nav-link"><AccountCircleOutlinedIcon/></Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <AccountCircleOutlinedIcon /> */}
    </nav>
  );
};

export default Navbar;
