import React from 'react';
import '../styles.css';

const IntroPage = () => (
  <section className="intro-page">
    <div className="title-page-info-section">
      <h1 className="main-title">Make The Best Financial Decisions</h1>
      <p className="main-description">
        Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
      </p>
      <div className="buttons">
        <button className="btn get-started-btn">Get Started</button>
        <button className="btn watch-video-btn">
          <span className="play-icon">&#9658;</span>
          <span>Watch Video</span>
        </button>
      </div>
      <div className="attributes">
        <img src="/attributes.png" alt="App Screens" className="app-img" />
      </div>
    </div>
    <div className="app-screens">
      <img className="screen-shot-1" src="/title-img.png" alt="App Screens" />
    </div>
  </section>
);

export default IntroPage;
