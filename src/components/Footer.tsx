import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Galeria', href: '#gallery' },
    { label: 'Parceiros', href: '#jiujitsu-partner' },
    { label: 'Contato', href: '#contact' }
  ];

  const services = [
    'Segurança Patrimonial',
    'Vigilância Residencial',
    'Escolta Pessoal',
    'Monitoramento 24h',
    'Consultoria em Segurança',
    'Treinamento Corporativo'
  ];

  const socialLinks = [
    { icon: 'fab fa-facebook-f', href: '#', label: 'Facebook' },
    { icon: 'fab fa-instagram', href: '#', label: 'Instagram' },
    { icon: 'fab fa-linkedin-in', href: '#', label: 'LinkedIn' },
    { icon: 'fab fa-whatsapp', href: 'https://wa.me/5511999999999', label: 'WhatsApp' }
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__container container">
          <div className="footer__content">
            {/* Company Info */}
            <div className="footer__section footer__section--company">
              <div className="footer__logo">
                <i className="fas fa-shield-alt footer__logo-icon"></i>
                <span className="footer__logo-text">
                  <strong>LIG</strong>Security
                </span>
              </div>
              <p className="footer__description">
                Há mais de 15 anos protegendo o que é mais importante para você. 
                Somos especialistas em segurança privada com soluções personalizadas 
                e tecnologia de ponta.
              </p>
              <div className="footer__certifications">
                <div className="footer__cert">
                  <i className="fas fa-certificate"></i>
                  <span>Licenciada pela<br />Polícia Federal</span>
                </div>
                <div className="footer__cert">
                  <i className="fas fa-award"></i>
                  <span>Certificação<br />ISO 9001</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__section footer__section--links">
              <h3 className="footer__section-title">
                <i className="fas fa-link"></i>
                Links Rápidos
              </h3>
              <ul className="footer__links">
                {quickLinks.map((link, index) => (
                  <li key={index} className="footer__link-item">
                    <a
                      href={link.href}
                      className="footer__link"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                    >
                      <i className="fas fa-chevron-right"></i>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer__section footer__section--services">
              <h3 className="footer__section-title">
                <i className="fas fa-shield-alt"></i>
                Nossos Serviços
              </h3>
              <ul className="footer__services">
                {services.map((service, index) => (
                  <li key={index} className="footer__service-item">
                    <i className="fas fa-check"></i>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer__section footer__section--contact">
              <h3 className="footer__section-title">
                <i className="fas fa-headset"></i>
                Contato
              </h3>
              <div className="footer__contact-info">
                <div className="footer__contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <span>Rua da Segurança, 123</span>
                    <span>São Paulo - SP, 01234-567</span>
                  </div>
                </div>
                <div className="footer__contact-item">
                  <i className="fas fa-phone"></i>
                  <div>
                    <a href="tel:+5511999999999">(11) 99999-9999</a>
                    <span>24 horas por dia</span>
                  </div>
                </div>
                <div className="footer__contact-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <a href="mailto:contato@ligsecurity.com.br">contato@ligsecurity.com.br</a>
                    <span>Resposta em até 24h</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="footer__social">
                <h4 className="footer__social-title">Siga-nos nas redes sociais:</h4>
                <div className="footer__social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="footer__social-link"
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      aria-label={social.label}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Section */}
      <div className="footer__partnership">
        <div className="footer__container container">
          <div className="footer__partnership-content">
            <div className="footer__partner">
              <i className="fas fa-handshake"></i>
              <div>
                <h4>Parceria Estratégica</h4>
                <span>Academia Guerreiros BJJ</span>
              </div>
            </div>
            <div className="footer__emergency">
              <i className="fas fa-exclamation-triangle"></i>
              <div>
                <h4>Central de Emergências</h4>
                <a href="tel:+5511999999999">(11) 99999-9999 - 24/7</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="footer__container container">
          <div className="footer__bottom-content">
            <div className="footer__copyright">
              <p>
                © {currentYear} <strong>LIG Security</strong>. Todos os direitos reservados.
                <br />
                <small>Empresa licenciada e autorizada pela Polícia Federal.</small>
              </p>
            </div>
            <div className="footer__legal">
              <a href="#" className="footer__legal-link">Política de Privacidade</a>
              <span className="footer__separator">|</span>
              <a href="#" className="footer__legal-link">Termos de Uso</a>
              <span className="footer__separator">|</span>
              <a href="#" className="footer__legal-link">LGPD</a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        className="footer__back-to-top"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        aria-label="Voltar ao topo"
      >
        <i className="fas fa-chevron-up"></i>
      </button>

      {/* Background Elements */}
      <div className="footer__bg-elements">
        <div className="footer__bg-element footer__bg-element--1"></div>
        <div className="footer__bg-element footer__bg-element--2"></div>
        <div className="footer__bg-element footer__bg-element--3"></div>
      </div>
    </footer>
  );
};

export default Footer;