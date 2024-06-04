import React from 'react';
import '../styles.css';

const Testimonials = () => (
  <section className="section section-3">
    <h2 className="section-title testimonial-title ">Testimonials</h2>
    <h3 className="section-sub-title testimonial-title ">What Our Users <br /> Say About Us?</h3>
    <div className="testimonial-container">
      <div className="image-content">
        <img src="/users.png" alt="iPhone Mockup" />
      </div>
      <div className="testimonial-text-content">
        <div className="testimonial">
          <h4>The Best Financial Accounting <br />App Ever!</h4>
          <br />
          <p>"Arcu At Dictum Sapien, Mollis, Vulputate Sit Id <br /> Ac Aucmsan, Ultricies. In Ultrices Malesuada Elt<br />  Mauris Etiam Odo. Duis Tristique Lacus, Et Blandit<br />  Viverra Nisi Velt. Sed Mattis Rhoncus, Diam <br /> Suspendisse Sit Nuno, Gravida Eu. Lectus Eget Eget<br />  Ac Dolor Neque Lorem Sapien, Suspendisse <br /> Aliquam."</p>
          
        </div>
        <div className="testimonial-icons">
          <img src="https://via.placeholder.com/50" alt="user" />
          <img src="https://via.placeholder.com/50" alt="user" />
          <img src="https://via.placeholder.com/50" alt="user" />
          <img src="https://via.placeholder.com/50" alt="user" />
        </div><h4>Nick Jonas</h4>
      </div>
    </div>
  </section>
);

export default Testimonials;
