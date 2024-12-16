// src/components/Checkout.js
import React, { useState } from 'react';

const Checkout = () => {
  const [shippingAddress, setShippingAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order submission logic here
    alert('Order placed successfully!');
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Shipping Address:
          <input
            type="text"
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
            required
          />
        </label>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
