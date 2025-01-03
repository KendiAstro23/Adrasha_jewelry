import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'; // No need for BrowserRouter here
import Header from './components/Header';
import ProductGallery from './components/ProductGallery';
import SimilarProducts from './components/SimilarProducts';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Chat from './components/Chat';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <div className="main-content">
        <Routes>
          {/* Default route for the dashboard */}
          <Route path="/" element={<ProductGallery />} />
          {/* Route for product details */}
          <Route path="/products/:id" element={<ProductDetail />} />
          {/* Route for similar products */}
          <Route path="/similar-products/:id" element={<SimilarProducts />} />
          {/* Route for cart */}
          <Route path="/cart" element={<Cart />} />
          {/* Route for checkout */}
          <Route path="/checkout" element={<Checkout />} />
          {/* Route for chat */}
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
