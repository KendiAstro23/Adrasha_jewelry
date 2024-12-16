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
    {
      id: 4,
      name: 'Diamond Ring',
      description: 'A sparkling diamond ring for special moments.',
      image: '/images/ring1.jpg',
      link: '/products/rings',
    },
    {
      id: 5,
      name: 'Pearl Necklace',
      description: 'Classic pearl necklace with elegance.',
      image: '/images/necklace2.jpg',
      link: '/products/necklaces',
    },
    {
      id: 6,
      name: 'Silver Earrings',
      description: 'Chic silver earrings for everyday wear.',
      image: '/images/earrings2.jpg',
      link: '/products/earrings',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const displayedProducts = products.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <div className="product-gallery">
      <button onClick={handlePrevious} className="nav-button nav-button-left">Previous</button>
      <div className="product-container">
        {displayedProducts.map((product) => (
          <div key={product.id} className="product-item">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-details">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <Link to={product.link} className="product-link">
                View Similar Products
              </Link>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleNext} className="nav-button nav-button-right">Next</button>
    </div>
  );
};

export default ProductGallery;
