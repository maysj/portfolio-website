import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Crop from './components/templates/Crop';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import './styles/index.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Crop>
          {/* Routes */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </Crop>
      </Router>
    </CartProvider>
  );
}

export default App;
