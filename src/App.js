import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Slider from './components/Slider.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import WhySection from './components/WhySection.jsx';
import LanguageSection from './components/LanguageSection.jsx';
import Footer from './components/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import './responsive.css';
import './styles.css';


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
