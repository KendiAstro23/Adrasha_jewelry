// src/components/SimilarProductsPage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './SimilarProducts.css';

const SimilarProductsPage = ({ products }) => {
  const { productId } = useParams();
  const allSimilarProducts = products.flatMap((product) => product.similarProducts);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= allSimilarProducts.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? allSimilarProducts.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  const displayedProducts = allSimilarProducts.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <div className="similar-products-page">
      <button onClick={handlePrevious} className="nav-button nav-button-left">
        &#8249;
      </button>
      <div className="similar-products-container">
        {displayedProducts.map((product) => (
          <div key={product.id} className="similar-product-item">
            <img
              src={product.image}
              alt={product.name}
              className="similar-product-image"
            />
            <div className="similar-product-details">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleNext} className="nav-button nav-button-right">
        &#8250;
      </button>
    </div>
  );
};

export default SimilarProductsPage;
