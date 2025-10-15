import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useAnimations';
import './Gallery.css';

const Gallery: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const { elementRef, isIntersecting } = useIntersectionObserver();

  // Lista das imagens (você pode ajustar os nomes conforme necessário)
  const images = [
    {
      src: '/images/WhatsApp Image 2025-10-15 at 11.05.25.jpeg',
      alt: 'Equipe de segurança LIG Security',
      caption: 'Nossa equipe altamente treinada e qualificada'
    },
    {
      src: '/images/WhatsApp Image 2025-10-15 at 11.05.33.jpeg',
      alt: 'Operação de segurança LIG Security',
      caption: 'Operações de segurança profissionais'
    },
    {
      src: '/images/WhatsApp Image 2025-10-15 at 11.05.42.jpeg',
      alt: 'Monitoramento LIG Security',
      caption: 'Sistema de monitoramento 24/7'
    },
    {
      src: '/images/WhatsApp Image 2025-10-15 at 11.05.43.jpeg',
      alt: 'Treinamento LIG Security',
      caption: 'Treinamento contínuo da nossa equipe'
    },
    {
      src: '/images/WhatsApp Image 2025-10-15 at 11.05.44.jpeg',
      alt: 'Segurança patrimonial LIG Security',
      caption: 'Proteção patrimonial especializada'
    },
    {
      src: '/images/WhatsApp Image 2025-10-15 at 11.05.45.jpeg',
      alt: 'Tecnologia LIG Security',
      caption: 'Tecnologia de ponta em segurança'
    }
  ];

  // Auto-play do carrossel
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, images.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="gallery" className="gallery" ref={elementRef}>
      <div className="gallery__container container">
        <div className={`gallery__header ${isIntersecting ? 'animate-fade-in' : ''}`}>
          <span className="gallery__subtitle">Nossa Atuação</span>
          <h2 className="gallery__title">
            Veja Nossa
            <span className="gallery__title-accent"> Equipe em Ação</span>
          </h2>
          <p className="gallery__description">
            Conheça de perto como trabalhamos e a qualidade dos nossos serviços 
            através de imagens reais das nossas operações.
          </p>
        </div>

        <div className={`gallery__carousel ${isIntersecting ? 'animate-slide-in-left' : ''}`}>
          <div className="gallery__carousel-container">
            <div 
              className="gallery__slides"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="gallery__slide">
                  <div className="gallery__image-container">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="gallery__image"
                      loading="lazy"
                    />
                    <div className="gallery__image-overlay">
                      <p className="gallery__caption">{image.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button 
              className="gallery__nav gallery__nav--prev"
              onClick={prevSlide}
              aria-label="Imagem anterior"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button 
              className="gallery__nav gallery__nav--next"
              onClick={nextSlide}
              aria-label="Próxima imagem"
            >
              <i className="fas fa-chevron-right"></i>
            </button>

            {/* Play/Pause Button */}
            <button 
              className="gallery__play-pause"
              onClick={togglePlayPause}
              aria-label={isPlaying ? 'Pausar carrossel' : 'Reproduzir carrossel'}
            >
              <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="gallery__dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`gallery__dot ${index === currentSlide ? 'gallery__dot--active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnails */}
        <div className={`gallery__thumbnails ${isIntersecting ? 'animate-slide-in-right' : ''}`}>
          {images.map((image, index) => (
            <button
              key={index}
              className={`gallery__thumbnail ${index === currentSlide ? 'gallery__thumbnail--active' : ''}`}
              onClick={() => goToSlide(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="gallery__thumbnail-image"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {/* Statistics */}
        <div className={`gallery__stats ${isIntersecting ? 'animate-fade-in' : ''}`}>
          <div className="gallery__stat">
            <i className="fas fa-camera"></i>
            <span className="gallery__stat-number">{images.length}+</span>
            <span className="gallery__stat-label">Registros</span>
          </div>
          <div className="gallery__stat">
            <i className="fas fa-shield-alt"></i>
            <span className="gallery__stat-number">100%</span>
            <span className="gallery__stat-label">Profissional</span>
          </div>
          <div className="gallery__stat">
            <i className="fas fa-users"></i>
            <span className="gallery__stat-number">24/7</span>
            <span className="gallery__stat-label">Atuação</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;