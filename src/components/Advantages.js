import React from 'react';
import '../styles.css';

const Advantages = () => (
  <section className="section section-2">

      <div className="advantage-container">
        <div className="advantage">
          <div className="advantage-text-content">
            <div>
              <h2 className="section-title">Advantages</h2>
              <h3 className="section-sub-title">Why Choose Uifry?</h3>
            </div>
            <div className="advantage-text">
              <div>
                <h4><img src="/bell.png" alt="notification icon" />      Clever Notifications</h4>
              </div>
              <p>
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan, <br /> ultricies. In ultrices malesuada elit mauris etiam odio. Duis<br /> tristique lacus, et blandit viverra nisl velit. Sed mattis <br />rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget<br /> eget ac dolor neque lorem sapien, suspendisse aliquam.
              </p></div>
          </div>
          <div className="image-content">
            <img className="content-imgs" src="/notification-img.png" alt="iPhone Mockup" />
          </div>
        </div>
        <div className="advantage2">
          <div className="image-content">
            <img className="content-imgs" src="/coustomizable-img.png" alt="iPhone Mockup" />
          </div>
          <div className="advantage-text">
            <div>
                <h4><img src="/stra-ball.png" alt="notification icon" />     Fully Customizable</h4>
            </div>
            <p>
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan, <br /> ultricies. In ultrices malesuada elit mauris etiam odio. Duis<br /> tristique lacus, et blandit viverra nisl velit. Sed mattis <br />rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget<br /> eget ac dolor neque lorem sapien, suspendisse aliquam.
            </p>   
          </div>
        </div>
      </div>

  </section>
);

export default Advantages;
