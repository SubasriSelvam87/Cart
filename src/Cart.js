import React, { useEffect, useState } from 'react'
import './Cart.css'
import { useContext } from 'react'
import { cartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { cart } = useContext(cartContext);
  const [total, setTotal] = useState((0));
  const navigate = useNavigate();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.amt), 0));
  }, [cart]);

  


  return (
    <>
      <h1>Cart Products</h1>
      <div className='cart-container'>
        {cart.map((product) => (
          <div className='cart-product' key={product.id}>

            <div className='img'>
              <img src={product.pic} alt={product.name} />
            </div>
            <div className='cart-product-details'>
              <h3> {product.name}</h3>
              <p>Price Rs:{product.amt}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className='cart-amt'>Total Amount Rs:{total}</h2>
      <button className='btn navigate' onClick={() => navigate('/')}>Go to Home</button>
    </>
  )
}
export default Cart