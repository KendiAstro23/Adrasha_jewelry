import React from 'react';
import { useParams, Link } from 'react-router-dom';

const SimilarProducts = () => {
  const { productId } = useParams(); // Get the productId from the URL
  const products = [
    {
        id: 1,
        name: 'Elegant Necklace',
        description: 'A stunning necklace for every occasion.',
        image: '/neck1.jpg',
        link: '/products/necklaces',
        similarProducts: [
          {id: 101, name: 'Silver Necklace', image: '/neck2.jpg', description: 'A classic silver necklace.'},
          { id: 102, name: 'Gold Pendant Necklace', image: '/neck3.jpg', description: 'A charming gold pendant necklace.'},
          {id: 103, name: 'Silver Necklace', image: '/neck4.jpg', description: 'A classic silver necklace.'},
          { id: 104, name: 'Gold Pendant Necklace', image: '/neck5.jpg', description: 'A charming gold pendant necklace.'},
      ],
      },
      {
        id: 2,
        name: 'Gold Earrings',
        description: 'Elegant gold earrings with a modern touch.',
        image: '/ear1.jpg',
        link: '/products/earrings',
        similarProducts: [
          {id: 201, name: 'Silver Necklace', image: '/ear2.jpg', description: 'A classic silver necklace.'},
          { id: 202, name: 'Gold Pendant Necklace', image: '/ear3.jpg', description: 'A charming gold pendant necklace.'},
          {id: 203, name: 'Silver Necklace', image: '/ear4.jpg', description: 'A classic silver necklace.'},
          { id: 204, name: 'Gold Pendant Necklace', image: '/ear5.jpg', description: 'A charming gold pendant necklace.'},
      ],
      },
      {
        id: 3,
        name: 'Silver Bracelet',
        description: 'A timeless silver bracelet.',
        image: '/comb1.jpg',
        link: '/products/bracelets',
        similarProducts: [
          {id: 301, name: 'Silver Necklace', image: '/comb2.jpg', description: 'A classic silver necklace.'},
          { id: 302, name: 'Gold Pendant Necklace', image: '/comb3.jpg', description: 'A charming gold pendant necklace.'},
          {id: 303, name: 'Silver Necklace', image: '/comb4.jpg', description: 'A classic silver necklace.'},
          { id: 304, name: 'Gold Pendant Necklace', image: '/comb5.jpg', description: 'A charming gold pendant necklace.'},
      ],
      },
      {
        id: 4,
        name: 'Diamond Ring',
        description: 'A sparkling diamond ring for special moments.',
        image: '/brace1.jpg',
        link: '/products/rings',
        similarProducts: [
          {id: 401, name: 'Silver Necklace', image: '/brace2.jpg', description: 'A classic silver necklace.'},
          { id: 402, name: 'Gold Pendant Necklace', image: '/brace3.jpg', description: 'A charming gold pendant necklace.'},
          {id: 403, name: 'Silver Necklace', image: '/brace4.jpg', description: 'A classic silver necklace.'},
          { id: 404, name: 'Gold Pendant Necklace', image: '/brace5.jpg', description: 'A charming gold pendant necklace.'},
      ],
      },
      {
        id: 5,
        name: 'Pearl Necklace',
        description: 'Classic pearl necklace with elegance.',
        image: '/afgo1.jpg',
        link: '/products/necklaces',
        similarProducts: [
          {id: 501, name: 'Silver Necklace', image: '/afgo2.jpg', description: 'A classic silver necklace.'},
          { id: 502, name: 'Gold Pendant Necklace', image: '/afgo3.jpg', description: 'A charming gold pendant necklace.'},
          {id: 503, name: 'Silver Necklace', image: '/afgo4.jpg', description: 'A classic silver necklace.'},
          { id: 504, name: 'Gold Pendant Necklace', image: '/afgo5.jpg', description: 'A charming gold pendant necklace.'},
      ],
      },
      {
        id: 6,
        name: 'Silver Earrings',
        description: 'Chic silver earrings for everyday wear.',
        image: 'ank1.jpg',
        link: '/products/earrings',
        similarProducts: [
          {id: 601, name: 'Silver Necklace', image: '/ank2.jpg', description: 'A classic silver necklace.'},
          { id: 602, name: 'Gold Pendant Necklace', image: '/ank3.jpg', description: 'A charming gold pendant necklace.'},
          {id: 603, name: 'Silver Necklace', image: '/ank4.jpg', description: 'A classic silver necklace.'},
          { id: 604, name: 'Gold Pendant Necklace', image: '/ank5.jpg', description: 'A charming gold pendant necklace.'},
      ],
      },
  ];

    // Combine all similar products from all products in sequence
  const allSimilarProducts = products.flatMap((product) => product.similarProducts);

  // Pagination state
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2; // Display two items at a time

  // Handle Next and Previous
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage < allSimilarProducts.length ? prevIndex + itemsPerPage : 0
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage >= 0 ? prevIndex - itemsPerPage : allSimilarProducts.length - itemsPerPage
    );
  };

  // Get the items to display
  const displayedItems = allSimilarProducts.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="similar-products-container">
      <h1 className="page-title">Similar Products</h1>
      <div className="similar-products-wrapper">
        {displayedItems.map((item) => (
          <div key={item.id} className="similar-product-card">
            <img src={item.image} alt={item.name} className="product-image" />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <div className="pagination-buttons">
        <button onClick={handlePrevious} className="nav-button">
          &#8249; Previous
        </button>
        <button onClick={handleNext} className="nav-button">
          Next &#8250;
        </button>
      </div>
      <Link to="/" className="back-link">Back to Product Gallery</Link>
    </div>
  );
};

export default SimilarProducts;
