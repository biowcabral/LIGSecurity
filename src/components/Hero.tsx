import React from 'react';
import { useIntersectionObserver } from '../hooks/useAnimations';
import './Hero.css';

const Hero: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <section id="home" className="hero" ref={elementRef}>
      <div className="hero__content container">
        <div className="hero__text-content">
          <h1 className={`hero__title ${isIntersecting ? 'animate-fade-in' : ''}`}>
            <span className="hero__title-main">Proteção Profissional</span>
            <span className="hero__title-accent">Para Sua Empresa</span>
          </h1>
          
          <p className={`hero__description ${isIntersecting ? 'animate-slide-in-left' : ''}`}>
            Serviços de segurança personalizados com tecnologia de ponta e equipe altamente qualificada. 
            Sua tranquilidade é nossa prioridade.
          </p>

          <div className={`hero__features ${isIntersecting ? 'animate-slide-in-right' : ''}`}>
            <div className="hero__feature">
              <i className="fas fa-check-circle"></i>
              <span>Monitoramento 24h</span>
            </div>
            <div className="hero__feature">
              <i className="fas fa-check-circle"></i>
              <span>Equipe Especializada</span>
            </div>
            <div className="hero__feature">
              <i className="fas fa-check-circle"></i>
              <span>Tecnologia Avançada</span>
            </div>
          </div>

          <div className={`hero__actions ${isIntersecting ? 'animate-fade-in' : ''}`}>
            <button className="hero__cta-primary">
              <i className="fas fa-shield-alt"></i>
              Solicitar Orçamento
            </button>
            
            <a href="tel:+5511999999999" className="hero__cta-secondary">
              <i className="fas fa-phone"></i>
              <span>
                <small>Ligue Agora</small>
                <strong>(11) 99999-9999</strong>
              </span>
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__security-icon">
            <i className="fas fa-shield-alt"></i>
          </div>
          
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">15+</span>
              <span className="hero__stat-label">Anos</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">500+</span>
              <span className="hero__stat-label">Clientes</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">24/7</span>
              <span className="hero__stat-label">Suporte</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;