import React from 'react';
import '../styles.css';

const DownloadSection = () => (
  <section className="section section-5">
    <div className="download-container">
      <div className="download-text-content">
        <h2 className="download-title">Ready To Get Sarted?</h2>
        <p>
        Risus habitant leo egestas mauris <br />diam eget morbi tempus <br /> vulputate.
        </p>
        <div className="button">
          <button className="btn download-button">
            Download App       <img src="/apple.png" alt="Apple Icon" />
          </button>
        </div>
      </div>
      <div >
        <img className="download-bg" src="/download-img.png" alt="iPhone Mockup" />
      </div>
    </div>
  </section>
);

export default DownloadSection;
