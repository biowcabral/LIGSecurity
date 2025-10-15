import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import JiujitsuPartner from './components/JiujitsuPartner';
import Contact from './components/Contact';
import Footer from './components/Footer';
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