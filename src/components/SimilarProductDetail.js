import React from 'react';
import { useParams } from 'react-router-dom';

const SimilarProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL

  // Mock data for similar products (can be replaced with API calls)
  const similarProducts = [
    { id: 101, name: 'Silver Necklace', image: '/neck2.jpg', description: 'A classic silver necklace.' },
    { id: 102, name: 'Gold Pendant Necklace', image: '/neck3.jpg', description: 'A charming gold pendant necklace.' },
    { id: 103, name: 'Silver Necklace', image: '/neck4.jpg', description: 'A classic silver necklace.' },
    { id: 104, name: 'Gold Pendant Necklace', image: '/neck5.jpg', description: 'A charming gold pendant necklace.' },
  ];

  // Find the product by ID
  const product = similarProducts.find((product) => product.id.toString() === id);

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div className="similar-product-detail">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
    </div>
  );
};

export default SimilarProductDetail;
