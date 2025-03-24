// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './pages/Home/home';
import Login from './pages/Login/login';
import Register from './pages/Register/register';
import About from './pages/About/about';
import Contact from './pages/Contact/contact';
import ProductPage from './components/ProductPage/ProductPage';
import Account from './pages/Account/account';
import Address from './pages/Account/Address/address';
import RefundPolicy from './pages/policies/RefundPolicy';
import CancellationPolicy from './pages/policies/CancellationPolicy';
import ShippingPolicy from './pages/policies/ShippingPolicy';
import PrivacyPolicy from './pages/policies/PrivacyPolicy';
import './App.css';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top whenever the route changes
    window.scrollTo(0, 0);
  }, [location]);

  return null; // No need to render anything
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop component here */}
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="/about" element={<About />} />
          <Route path="/account/address" element={<Address />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
