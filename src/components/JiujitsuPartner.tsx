import React from 'react';
import { useIntersectionObserver } from '../hooks/useAnimations';
import './JiujitsuPartner.css';

const JiujitsuPartner: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  const partnerFeatures = [
    {
      icon: 'fas fa-fist-raised',
      title: 'Defesa Pessoal',
      description: 'Técnicas avançadas de autodefesa e combate corpo a corpo'
    },
    {
      icon: 'fas fa-medal',
      title: 'Competições',
      description: 'Preparação para campeonatos e torneios profissionais'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Graduações',
      description: 'Sistema completo de graduação reconhecido internacionalmente'
    },
    {
      icon: 'fas fa-users',
      title: 'Todas as Idades',
      description: 'Turmas especializadas para crianças, jovens e adultos'
    }
  ];

  const instructors = [
    {
      name: 'Professor Carlos Silva',
      belt: 'Faixa Preta 4º Dan',
      experience: '20+ anos de experiência',
      specialty: 'Especialista em defesa pessoal'
    },
    {
      name: 'Professor Ana Santos',
      belt: 'Faixa Preta 3º Dan',
      experience: '15+ anos de experiência',
      specialty: 'Jiu-Jitsu feminino e infantil'
    }
  ];

  return (
    <section id="jiujitsu-partner" className="jiujitsu-partner" ref={elementRef}>
      <div className="jiujitsu-partner__container container">
        <div className={`jiujitsu-partner__header ${isIntersecting ? 'animate-fade-in' : ''}`}>
          <div className="jiujitsu-partner__badge">
            <i className="fas fa-handshake"></i>
            <span>Parceria Estratégica</span>
          </div>
          <h2 className="jiujitsu-partner__title">
            Academia
            <span className="jiujitsu-partner__title-accent"> Guerreiros BJJ</span>
          </h2>
          <p className="jiujitsu-partner__subtitle">
            Nossa Parceira em Formação de Profissionais de Segurança
          </p>
          <p className="jiujitsu-partner__description">
            Orgulhosamente em parceria com a Academia Guerreiros BJJ, oferecemos treinamento 
            especializado em artes marciais para nossos colaboradores, garantindo preparo 
            físico e mental excepcional para situações de risco.
          </p>
        </div>

        <div className="jiujitsu-partner__content">
          <div className={`jiujitsu-partner__info ${isIntersecting ? 'animate-slide-in-left' : ''}`}>
            <div className="jiujitsu-partner__hero-card">
              <div className="jiujitsu-partner__hero-image">
                <div className="jiujitsu-partner__logo">
                  <i className="fas fa-yin-yang"></i>
                </div>
                <div className="jiujitsu-partner__hero-content">
                  <h3>Academia Guerreiros BJJ</h3>
                  <p>Tradição e Excelência em Jiu-Jitsu</p>
                  <div className="jiujitsu-partner__stats-mini">
                    <div className="jiujitsu-partner__stat-mini">
                      <span>10+</span>
                      <small>Anos</small>
                    </div>
                    <div className="jiujitsu-partner__stat-mini">
                      <span>200+</span>
                      <small>Alunos</small>
                    </div>
                    <div className="jiujitsu-partner__stat-mini">
                      <span>5</span>
                      <small>Professores</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="jiujitsu-partner__partnership-details">
                <h4>Nossa Parceria</h4>
                <ul className="jiujitsu-partner__benefits">
                  <li>
                    <i className="fas fa-check-circle"></i>
                    Treinamento especializado para equipe LIG Security
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    Desconto especial para colaboradores
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    Cursos de defesa pessoal corporativa
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    Preparação física e mental contínua
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`jiujitsu-partner__features ${isIntersecting ? 'animate-slide-in-right' : ''}`}>
            <div className="jiujitsu-partner__features-grid">
              {partnerFeatures.map((feature, index) => (
                <div key={index} className="jiujitsu-partner__feature-card">
                  <div className="jiujitsu-partner__feature-icon">
                    <i className={feature.icon}></i>
                  </div>
                  <h4 className="jiujitsu-partner__feature-title">{feature.title}</h4>
                  <p className="jiujitsu-partner__feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`jiujitsu-partner__instructors ${isIntersecting ? 'animate-fade-in' : ''}`}>
          <h3 className="jiujitsu-partner__instructors-title">Nossos Instrutores Parceiros</h3>
          <div className="jiujitsu-partner__instructors-grid">
            {instructors.map((instructor, index) => (
              <div key={index} className="jiujitsu-partner__instructor-card">
                <div className="jiujitsu-partner__instructor-avatar">
                  <i className="fas fa-user-ninja"></i>
                </div>
                <div className="jiujitsu-partner__instructor-info">
                  <h4 className="jiujitsu-partner__instructor-name">{instructor.name}</h4>
                  <span className="jiujitsu-partner__instructor-belt">{instructor.belt}</span>
                  <span className="jiujitsu-partner__instructor-experience">{instructor.experience}</span>
                  <p className="jiujitsu-partner__instructor-specialty">{instructor.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`jiujitsu-partner__cta ${isIntersecting ? 'animate-fade-in' : ''}`}>
          <div className="jiujitsu-partner__cta-content">
            <h3>Interessado em Nossos Treinamentos?</h3>
            <p>
              Entre em contato conosco para saber mais sobre nossos programas de treinamento 
              em parceria com a Academia Guerreiros BJJ.
            </p>
            <div className="jiujitsu-partner__cta-actions">
              <a 
                href="tel:+5511999999999" 
                className="jiujitsu-partner__cta-button jiujitsu-partner__cta-button--primary"
              >
                <i className="fas fa-phone"></i>
                Fale Conosco
              </a>
              <a 
                href="#contact" 
                className="jiujitsu-partner__cta-button jiujitsu-partner__cta-button--secondary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <i className="fas fa-envelope"></i>
                Solicitar Informações
              </a>
            </div>
          </div>

          <div className="jiujitsu-partner__contact-info">
            <div className="jiujitsu-partner__contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Rua das Artes Marciais, 123 - São Paulo/SP</span>
            </div>
            <div className="jiujitsu-partner__contact-item">
              <i className="fas fa-clock"></i>
              <span>Segunda à Sexta: 06h às 22h | Sábado: 08h às 18h</span>
            </div>
            <div className="jiujitsu-partner__contact-item">
              <i className="fas fa-phone"></i>
              <span>(11) 98888-7777</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="jiujitsu-partner__bg-elements">
        <div className="jiujitsu-partner__bg-element jiujitsu-partner__bg-element--1"></div>
        <div className="jiujitsu-partner__bg-element jiujitsu-partner__bg-element--2"></div>
        <div className="jiujitsu-partner__bg-element jiujitsu-partner__bg-element--3"></div>
      </div>
    </section>
  );
};

export default JiujitsuPartner;