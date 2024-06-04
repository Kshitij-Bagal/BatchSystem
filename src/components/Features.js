import React from 'react';
import '../styles.css';

const Features = () => (
  <section className="section section-1">
    <div className="feature-container">
      <div className="image-content">
        <img className="content-img" src="/feature-img.png" alt="iPhone Mockup" />
      </div>
      <div className="text-content"> 
      <div>
        <h2 className="section-title feature-title">Features</h2>
        <h3 className="section-sub-title feature-title">Uifry Premium</h3></div>   
        <ul>
          <li>
            
            <div>
              <h4><img src="/star.png" alt="star icon" />   Budgeting Intervals</h4>
              <p>
                Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipisicing Sociis Arcu Lorem Porttitor.
              </p>
            </div>
          </li>
          <li>
            
            <div>
              <h4><img src="/net.png" alt="net icon" />   Budgeting Intervals</h4>
              <p>
                Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipisicing Sociis Arcu Lorem Porttitor.
              </p>
            </div>
          </li>
          <li>
            
            <div>
              <h4><img src="/cube.png" alt="cube icon" />   Budgeting Intervals</h4>
              <p>
                Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipisicing Sociis Arcu Lorem Porttitor.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Features;
