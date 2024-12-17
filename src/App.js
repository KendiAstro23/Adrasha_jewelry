// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
      <Routes>
        <Route path="/" exact component={ProductGallery} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/chat" component={Chat} />
        <Route path="/" element={<ProductGallery />} />
        <Route path="/similar-products" element={<SimilarProducts />} />
      </Routes>
      <Header />
      <ProductGallery />
      <ProductDetail />
      <Cart />
      <Checkout />
      <Chat />
      <Footer />
      </Router>
  );
};

export default App;
