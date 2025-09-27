// components/Header.jsx
import React from 'react';
import './Header.css';

const Header = ({ currentPage, setCurrentPage }) => {

  // ✅ Smooth scroll to section by ID
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ✅ Handle navigation for Home, Recipes, About
  const handleNavigation = (page) => {
    if (typeof setCurrentPage === 'function') {
      setCurrentPage(page);
    }

    // Map buttons to sections in HomeView
    if (page === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top for home
    } else if (page === 'menu') {
      scrollToSection('featured-section'); // Scroll to recipes section
    } else if (page === 'about') {
      scrollToSection('about-section'); // Scroll to about section
    }
  };

  const handleLogoClick = () => {
    setCurrentPage?.('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="app-header">
      <div className="header-content">
        {/* Logo */}
        <div 
          className="logo-container"
          onClick={handleLogoClick}
          style={{ cursor: 'pointer' }}
        >
          <span className="logo-accent">Tadka</span>Tales
        </div>
        
        {/* Navigation Buttons */}
        <nav className="nav-menu">
          {['home', 'menu', 'about'].map(page => (
            <button 
              key={page}
              onClick={() => handleNavigation(page)} 
              className={`nav-button ${currentPage === page ? 'nav-button-active' : 'nav-button-default'}`}
            >
              {page === 'home' ? 'Home' : page === 'menu' ? 'Recipes' : 'About'}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Icon (Optional for responsiveness) */}
        <button className="mobile-menu-button">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
