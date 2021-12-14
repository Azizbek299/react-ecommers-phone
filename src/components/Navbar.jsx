import React from "react";
import { Link, Outlet } from "react-router-dom";
import { BsCart } from "react-icons/bs";

export default function Navbar(props) {
  return (
    <div className="navbar__container">
      <div className="nav__menu">
      <div className="product__menu">
          <Link to="/" className='home__link'>Home</Link>
          <Link to="products">Products</Link>
        </div>
        <div className="cart__menu">
          <Link to="cart">
            <span>
              <BsCart /> &nbsp; My cart
            </span>
          </Link>
        </div>  
      </div>
      <Outlet />
    </div>
  );
}
