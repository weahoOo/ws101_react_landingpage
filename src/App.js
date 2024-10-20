import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Slider from './components/Slider.js';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // This includes the necessary JS for Bootstrap components
import './responsive.css';
import './styles.css';
import WhySection from './components/WhySection.js';
import LanguageSection from './components/LanguageSection.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Services />
      <About />
      <WhySection />
      <LanguageSection />
      <Footer />
    </div>
  );
}

export default App;
