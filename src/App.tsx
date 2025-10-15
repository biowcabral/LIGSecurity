import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Gallery from './components/Gallery.tsx';
import JiujitsuPartner from './components/JiujitsuPartner.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import './styles/globals.css';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Gallery />
        <JiujitsuPartner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;