import React, { useState } from 'react';
import { useScrollPosition, useWindowSize } from '../hooks/useAnimations';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const { width } = useWindowSize();
  const isMobile = width < 768;

  const menuItems = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Galeria', href: '#gallery' },
    { label: 'Parceiros', href: '#jiujitsu-partner' },
    { label: 'Contato', href: '#contact' },
  ];

  const handleMenuClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${scrollPosition > 50 ? 'header--scrolled' : ''}`}>
      <div className="header__container container">
        <div className="header__logo">
          <i className="fas fa-shield-alt header__logo-icon"></i>
          <span className="header__logo-text">
            <strong>LIG</strong>Security
          </span>
        </div>

        {!isMobile && (
          <nav className="header__nav">
            <ul className="header__menu">
              {menuItems.map((item, index) => (
                <li key={index} className="header__menu-item">
                  <a
                    href={item.href}
                    className="header__menu-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuClick(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className="header__actions">
          <a href="tel:+5511999999999" className="header__phone">
            <i className="fas fa-phone"></i>
            <span>(11) 99999-9999</span>
          </a>
          
          <button className="header__cta-button">
            <i className="fas fa-comment"></i>
            Orçamento Grátis
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;