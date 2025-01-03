import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import axios from 'axios';
import './ProductDetail.css'; // Optional: Add styles for the confirmation message

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [confirmation, setConfirmation] = useState(false); // State for confirmation message
  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const navigate = useNavigate();

  // Get addToCart function from CartContext
  const { addToCart } = useCart();

  useEffect(() => {
    console.log('Fetching product with ID:', id);
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setError(null); // Clear any previous errors
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
        setError('Product not found or server error'); // Set error message
      });
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    setSuccessMessage('Your product has been successfully added to the cart!');
    setConfirmation(true); // Show confirmation message
  };

  if (error) return <div>{error}</div>;
  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <img src={product.imageUrl || '/images/default.jpg'} alt={product.name} />
      <div className="details">
        <h2>{product.name}</h2>
        <p>{product.description || 'No description available'}</p>
        <p>${product.price}</p>
        <p>Made On: {product.madeOn || 'N/A'}</p>
        <p>Materials: {product.materials || 'N/A'}</p>
        <p>Best For: {product.bestFor || 'N/A'}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>

      {confirmation && (
        <div className="confirmation-message">
          <p>{successMessage}</p>
          <button onClick={() => navigate('/cart')}>Go to Cart</button>
          <button onClick={() => setConfirmation(false)}>Continue Shopping</button>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;