import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { cartContext } from './CartContext';
import { useContext } from 'react';


 const Header = () => {
  const {cart}=useContext(cartContext);
  return (
    <div className='nav navbar bg-dark  ' >
      <div className='logo text-white' >FOOD CART</div>
      <ul>
        <li style={{ marginRight: "20px", marginTop: "5px" }}>
          <Link style={{ textDecoration: "none", color: "white" }} to={'/'} >Home</Link>&nbsp;&nbsp;
          <Link style={{ textDecoration: "none", color: "white" }} to={'/Cart'}>
            <span className='cart-count'>{cart.length}</span> View Cart</Link>
        </li>
      </ul>
    </div>
  )
};
export default Header

