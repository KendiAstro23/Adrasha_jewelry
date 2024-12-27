import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          {/* Default route for the dashboard */}
          <Route path="/" element={<ProductGallery />} />
          {/* Route for product details */}
          <Route path="/product/:id" element={<ProductDetail />} />
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
    </Router>
  );
};

export default App;
