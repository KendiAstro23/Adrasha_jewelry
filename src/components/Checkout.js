import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Checkout.css';

const Checkout = () => {
  const { cart } = useContext(CartContext);

  const handleCheckout = () => {
    // Handle checkout logic here (e.g., API call, payment integration)
    alert('Thank you for your purchase!');
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="checkout-details">
          {cart.map((item) => (
            <div key={item.id} className="checkout-item">
              <img src={item.imageUrl} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
          <div className="checkout-total">
            <h3>
              Total: $
              {cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
            </h3>
          </div>
          <button onClick={handleCheckout}>Complete Purchase</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
