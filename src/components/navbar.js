import React from 'react';
import './navbar.css';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartValues = useSelector((state) => state.product1.cartValues);
  const length = cartValues.length;
  const total = cartValues.reduce((acc, item) => acc + item.ProductPrice, 0);

  return (
    <div className='navbar'>
      <button className='addcart' style={{color:'white'}}>Cart Items: {length}</button>
      <button className='addcart'  style={{color:'white'}}>Total Price: ${total.toFixed(2)}</button>
    </div>
  );
}

export default Navbar;
