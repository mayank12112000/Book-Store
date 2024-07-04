import "./Navbar.css";
import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useDispatch, useSelector } from "react-redux";
import { setSearchBy } from "../features/products/productsSlice";
const Navbar = () => {
  const {cart} = useSelector((state)=>state.cart)
  const {wishList} = useSelector((state)=>state.wishlist)
  const {searchBook} = useSelector((state)=>state.products)
  const dispatch = useDispatch()
  console.log("wishlist state:",wishList)
  const { pathname } = useLocation()
  const searchHandler = (e)=>{
    dispatch(setSearchBy(e.target.value))
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="navbar-container">
        <div className="home-hamburger">
          {pathname === "/products" && <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>}
          <Link to="/" className="navbar-brand"><b>Pustakalaya</b></Link>
        </div>

        {pathname === "/products" && <div className="search-bar d-none d-md-block" >
          <span className=" search-icon">🔍</span>
           <input onChange={searchHandler} value={searchBook} className="search-input" placeholder="   search book" type="text" />
        </div>}
        <div className="d-flex">
          <ul className="d-flex flex-row p-1 navbar-nav ml-auto">
            <li className="nav-item mx-2">
              <NavLink to="/cart" activeClassName="active-nav-link" className="navbar-icons nav-link">
                <div className="position-relative">
                  <ShoppingCartOutlinedIcon />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cart.length>0 && cart.length}
                  </span>
                </div>
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink to="/wishlist" activeClassName="active-nav-link" className="navbar-icons nav-link">
                <div className="position-relative">
                  <FavoriteBorderOutlinedIcon />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {wishList.length>0 && wishList.length}
                  </span>
                </div>
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink to="/user_profile" activeClassName="active-nav-link" className="navbar-icons nav-link"><AccountCircleOutlinedIcon /></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
