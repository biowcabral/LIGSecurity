import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useAnimations';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = [
    'Segurança Patrimonial',
    'Vigilância Residencial',
    'Escolta Pessoal',
    'Monitoramento 24h',
    'Consultoria em Segurança',
    'Treinamento Corporativo',
    'Outros'
  ];

  const contactMethods = [
    {
      icon: 'fas fa-phone',
      title: 'Telefone',
      info: '(11) 99999-9999',
      action: 'tel:+5511999999999',
      description: 'Atendimento 24/7'
    },
    {
      icon: 'fas fa-whatsapp',
      title: 'WhatsApp',
      info: '(11) 99999-9999',
      action: 'https://wa.me/5511999999999',
      description: 'Resposta imediata'
    },
    {
      icon: 'fas fa-envelope',
      title: 'E-mail',
      info: 'contato@ligsecurity.com.br',
      action: 'mailto:contato@ligsecurity.com.br',
      description: 'Resposta em até 24h'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Endereço',
      info: 'Rua da Segurança, 123',
      action: 'https://maps.google.com',
      description: 'São Paulo - SP'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simular envio do formulário
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="contact" ref={elementRef}>
      <div className="contact__container container">
        <div className={`contact__header ${isIntersecting ? 'animate-fade-in' : ''}`}>
          <span className="contact__subtitle">Entre em Contato</span>
          <h2 className="contact__title">
            Solicite Seu
            <span className="contact__title-accent"> Orçamento Gratuito</span>
          </h2>
          <p className="contact__description">
            Nossa equipe está pronta para atender suas necessidades de segurança. 
            Entre em contato conosco e receba uma proposta personalizada.
          </p>
        </div>

        <div className="contact__content">
          <div className={`contact__form-section ${isIntersecting ? 'animate-slide-in-left' : ''}`}>
            <div className="contact__form-container">
              <h3 className="contact__form-title">
                <i className="fas fa-edit"></i>
                Formulário de Contato
              </h3>

              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label htmlFor="name" className="contact__label">
                      <i className="fas fa-user"></i>
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="contact__input"
                      required
                      placeholder="Digite seu nome completo"
                    />
                  </div>
                  
                  <div className="contact__form-group">
                    <label htmlFor="email" className="contact__label">
                      <i className="fas fa-envelope"></i>
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="contact__input"
                      required
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label htmlFor="phone" className="contact__label">
                      <i className="fas fa-phone"></i>
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="contact__input"
                      required
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div className="contact__form-group">
                    <label htmlFor="company" className="contact__label">
                      <i className="fas fa-building"></i>
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="contact__input"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>

                <div className="contact__form-group">
                  <label htmlFor="service" className="contact__label">
                    <i className="fas fa-shield-alt"></i>
                    Serviço de Interesse *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="contact__select"
                    required
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="contact__form-group">
                  <label htmlFor="message" className="contact__label">
                    <i className="fas fa-comment"></i>
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="contact__textarea"
                    rows={5}
                    required
                    placeholder="Descreva suas necessidades de segurança..."
                  />
                </div>

                <button
                  type="submit"
                  className={`contact__submit-btn ${isSubmitting ? 'contact__submit-btn--loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      Enviar Solicitação
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="contact__success-message">
                    <i className="fas fa-check-circle"></i>
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="contact__error-message">
                    <i className="fas fa-exclamation-circle"></i>
                    Erro ao enviar mensagem. Tente novamente ou entre em contato por telefone.
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className={`contact__info-section ${isIntersecting ? 'animate-slide-in-right' : ''}`}>
            <div className="contact__methods">
              <h3 className="contact__methods-title">
                <i className="fas fa-headset"></i>
                Outras Formas de Contato
              </h3>

              <div className="contact__methods-grid">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.action}
                    className="contact__method-card"
                    target={method.action.startsWith('http') ? '_blank' : undefined}
                    rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="contact__method-icon">
                      <i className={method.icon}></i>
                    </div>
                    <div className="contact__method-content">
                      <h4 className="contact__method-title">{method.title}</h4>
                      <span className="contact__method-info">{method.info}</span>
                      <small className="contact__method-description">{method.description}</small>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="contact__business-hours">
              <h3 className="contact__hours-title">
                <i className="fas fa-clock"></i>
                Horário de Atendimento
              </h3>
              <div className="contact__hours-content">
                <div className="contact__hours-item">
                  <span className="contact__hours-day">Segunda à Sexta</span>
                  <span className="contact__hours-time">08:00 - 18:00</span>
                </div>
                <div className="contact__hours-item">
                  <span className="contact__hours-day">Sábados</span>
                  <span className="contact__hours-time">08:00 - 14:00</span>
                </div>
                <div className="contact__hours-item contact__hours-item--highlight">
                  <span className="contact__hours-day">Emergências</span>
                  <span className="contact__hours-time">24/7</span>
                </div>
              </div>
            </div>

            <div className="contact__emergency">
              <div className="contact__emergency-content">
                <i className="fas fa-exclamation-triangle"></i>
                <h4>Emergências 24/7</h4>
                <p>Para situações de emergência, nossa central está disponível 24 horas por dia.</p>
                <a href="tel:+5511999999999" className="contact__emergency-btn">
                  <i className="fas fa-phone"></i>
                  (11) 99999-9999
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="contact__bg-pattern"></div>
    </section>
  );
};

export default Contact;