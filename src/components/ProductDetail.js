import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

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

  if (error) return <div>{error}</div>;
  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <img src={`http://localhost:5000${product.imageUrl}`} alt={product.name} />
      <div className="details">
        <h2>{product.name}</h2>
        <p>{product.description || 'No description available'}</p>
        <p>${product.price}</p>
        <p>Made On: {product.madeOn || 'N/A'}</p>
        <p>Materials: {product.materials || 'N/A'}</p>
        <p>Best For: {product.bestFor || 'N/A'}</p>
        <button onClick={() => alert(`${product.name} added to cart!`)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
