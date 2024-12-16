// src/components/SimilarProducts.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const products = [
  // Same product data with similarProducts as shown above
];

const SimilarProducts = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Similar Products to {product.name}</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {product.similarProducts.map((similarProduct) => (
          <div
            key={similarProduct.id}
            style={{
              border: '1px solid #ddd',
              padding: '10px',
              width: '200px',
              textAlign: 'center',
            }}
          >
            <img
              src={similarProduct.image}
              alt={similarProduct.name}
              style={{ width: '100%', height: 'auto' }}
            />
            <h3>{similarProduct.name}</h3>
            <p>{similarProduct.description}</p>
          </div>
        ))}
      </div>
      <Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>
        Back to Gallery
      </Link>
    </div>
  );
};

export default SimilarProducts;
