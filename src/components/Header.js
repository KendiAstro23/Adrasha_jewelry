// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Adrasha Jewelry Store</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/chat">Chat</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
