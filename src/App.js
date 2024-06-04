import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";
import Navbar from "./Navbar";
import IntroPage from './components/IntroPage';
import Features from './components/Features';
import Advantages from './components/Advantages';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
    <Navbar />
    <main className="main">
      <IntroPage />
      <Features />
      <Advantages />
      <Testimonials />
      <FAQ />
      <DownloadSection />
    </main>
    <Footer />
  </div>
);
};

export default App;
