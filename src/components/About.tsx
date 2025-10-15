import React from 'react';
import { useIntersectionObserver } from '../hooks/useAnimations';
import './About.css';

const About: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  const stats = [
    { number: '15+', label: 'Anos', icon: 'fas fa-calendar-alt' },
    { number: '500+', label: 'Clientes', icon: 'fas fa-users' },
    { number: '24/7', label: 'Suporte', icon: 'fas fa-clock' },
    { number: '100%', label: 'Licenciada', icon: 'fas fa-certificate' }
  ];

  return (
    <section id="about" className="about" ref={elementRef}>
      <div className="about__container container">
        <div className={`about__header ${isIntersecting ? 'animate-fade-in' : ''}`}>
          <span className="about__subtitle">Sobre a LIG Security</span>
          <h2 className="about__title">
            Proteção Profissional com
            <span className="about__title-accent"> Excelência e Confiança</span>
          </h2>
          <p className="about__description">
            Há mais de 15 anos no mercado, somos especialistas em segurança privada, 
            oferecendo soluções completas e personalizadas para empresas e residências.
          </p>
        </div>

        <div className="about__content">
          <div className={`about__info ${isIntersecting ? 'animate-slide-in-left' : ''}`}>
            <div className="about__info-card">
              <div className="about__info-header">
                <i className="fas fa-building"></i>
                <h3>Nossa História</h3>
              </div>
              <p>
                Fundada em 2008, a LIG Security nasceu da visão de oferecer serviços 
                de segurança de classe mundial no Brasil. Crescemos mantendo nosso 
                compromisso com a excelência e inovação.
              </p>
            </div>
          </div>

          <div className={`about__stats ${isIntersecting ? 'animate-slide-in-right' : ''}`}>
            {stats.map((stat, index) => (
              <div key={index} className="about__stat">
                <div className="about__stat-icon">
                  <i className={stat.icon}></i>
                </div>
                <div className="about__stat-content">
                  <span className="about__stat-number">{stat.number}</span>
                  <span className="about__stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;