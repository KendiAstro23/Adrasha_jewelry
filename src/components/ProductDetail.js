import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  // Fetch the product details from the backend API when the component mounts
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  // If the product is still loading, show a loading message
  if (!product) return <div>Loading...</div>;

  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push(product);
    localStorage.setItem('cart', JSON.stringify(cartItems)); // Store cart in local storage
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-detail">
      <img src={product.imageUrl} alt={product.name} />
      <div className="details">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
        
        {/* New Information Sections */}
        <div className="product-additional-info">
          <h3>Product Details</h3>
          <p><strong>Made On:</strong> {product.madeOn}</p>
          <p><strong>Materials:</strong> {product.materials}</p>
          <p><strong>Best For:</strong> {product.bestFor}</p>
        </div>
        
        <button onClick={handleAddToCart}>Add to Cart</button>
        <button onClick={() => navigate('/cart')}>View Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
