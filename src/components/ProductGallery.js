// src/components/ProductGallery.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductGallery.css';

const ProductGallery = () => {
  const products = [
    {
      id: 1,
      name: 'Elegant Necklace',
      description: 'A stunning necklace for every occasion.',
      image: '/images/necklace1.jpg',
      link: '/products/necklaces',
    },
    {
      id: 2,
      name: 'Gold Earrings',
      description: 'Elegant gold earrings with a modern touch.',
      image: '/images/earrings1.jpg',
      link: '/products/earrings',
    },
    {
      id: 3,
      name: 'Silver Bracelet',
      description: 'A timeless silver bracelet.',
      image: '/images/bracelet1.jpg',
      link: '/products/bracelets',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="product-gallery">
      <div className="product-container">
        <img
          src={products[currentIndex].image}
          alt={products[currentIndex].name}
          className="product-image"
        />
        <div className="product-details">
          <h2>{products[currentIndex].name}</h2>
          <p>{products[currentIndex].description}</p>
          <Link to={products[currentIndex].link} className="product-link">
            View Similar Products
          </Link>
        </div>
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePrevious} className="nav-button">Previous</button>
        <button onClick={handleNext} className="nav-button">Next</button>
      </div>
    </div>
  );
};

export default ProductGallery;