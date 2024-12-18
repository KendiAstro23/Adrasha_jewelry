import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './SimilarProducts.css';

const SimilarProductsPage = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  const [currentSimilarIndex, setCurrentSimilarIndex] = useState(0);
  const itemsPerPage = 2;
  const similarProducts = product.similarProducts;

  const handleNext = () => {
    setCurrentSimilarIndex((prevIndex) =>
      prevIndex + itemsPerPage >= similarProducts.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const handlePrevious = () => {
    setCurrentSimilarIndex((prevIndex) =>
      prevIndex === 0 ? similarProducts.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  const displayedSimilarProducts = similarProducts.slice(
    currentSimilarIndex,
    currentSimilarIndex + itemsPerPage
  );

  return (
    <div className="similar-products-page">
      <h2>Similar Products for {product.name}</h2>
      <div className="similar-products-container">
        {displayedSimilarProducts.map((similar) => (
          <div key={similar.id} className="similar-product-item">
            <img
              src={similar.image}
              alt={similar.name}
              className="similar-product-image"
            />
            <div className="similar-product-details">
              <h3>{similar.name}</h3>
              <p>{similar.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="similar-navigation">
        <button onClick={handlePrevious} className="nav-button">
          Previous
        </button>
        <button onClick={handleNext} className="nav-button">
          Next
        </button>
      </div>
    </div>
  );
};

export default SimilarProductsPage;
