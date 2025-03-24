import React, { useState, useEffect, useRef } from 'react';
import './header.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if the user is logged in
  const isLoggedIn = sessionStorage.getItem('token') !== null;
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  // Close menu when location changes
  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && searchOpen && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    setMenuOpen(false); // Close menu after logout
    navigate('/login');
  };

  const handleAccountNavigation = () => {
    if (isLoggedIn) {
      navigate('/account');
    } else {
      navigate('/login');
    }
    setMenuOpen(false); // Close menu after navigation
  };

  // Handler for navigation links
  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <header
      className={`header ${isScrolled ? 'scrolled' : ''} ${isHomePage ? 'home-header' : 'default-header'}`}
    >
      <div className="burger-menu" onClick={toggleMenu} aria-label="Open menu">
        <i className="bi bi-list"></i>
      </div>

      <div className="logo" onClick={() => handleNavigation('/')}>
        Beetch<span> FKS</span>
      </div>

      <div className="header-icons">
        <i className="bi bi-person-badge" onClick={handleAccountNavigation}></i>
        <i className="bi bi-search" onClick={toggleSearch}></i>
        <i className="bi bi-bag" onClick={() => setMenuOpen(false)}></i>
      </div>

      {searchOpen && (
        <div 
          ref={searchRef}
          className={`search-overlay ${searchOpen ? 'active' : ''}`}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside search
        >
          <div className="search-container">
            <input
              type="text"
              placeholder="Search our store"
              className="search-input"
            />
            <button 
              className="close-search" 
              onClick={toggleSearch}
            >
              <i className="bi bi-x"></i>
            </button>
          </div>
        </div>
      )}

      <div
        ref={menuRef}
        className={`sidebar-menu ${menuOpen ? 'sidebar-menu-open' : 'sidebar-menu-closed'}`}
      >
        <div className="close-btn" onClick={toggleMenu} aria-label="Close menu">
          <i className="bi bi-x-lg"></i>
        </div>

        <nav>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/shop-all" onClick={() => setMenuOpen(false)}>
            All
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          {!isLoggedIn ? (
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              Log in
            </Link>
          ) : (
            <>
              <Link to="/account" onClick={() => setMenuOpen(false)}>
                Account
              </Link>
              <button onClick={handleLogout} className="logout-link">
                Log out
              </button>
            </>
          )}
        </nav>

        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
