// src/components/Cart.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Mock cart items
  useEffect(() => {
    setCartItems([
      { id: 1, name: 'Gold Necklace', price: 150, quantity: 1 },
      { id: 2, name: 'Silver Ring', price: 80, quantity: 2 }
    ]);
  }, []);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
      <h3>Total: ${totalPrice}</h3>
      <Link to="/checkout">
        <button>Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;
