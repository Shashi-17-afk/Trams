import React from "react";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonial-title">
        <h2>
          What our customer
          <br />
          says About Us
        </h2>
      </div>

      <div className="testimonial-wrapper">
        <div className="left-avatars">
          <img src="/avatar9.png" alt="" />
          <img src="/avatar10.png" alt="" />
          <img src="/avatar11.png" alt="" />
          <img src="/avatar12.png" alt="" />
        </div>

        <div className="testimonial-card">
          <span className="quote-start">❝</span>

          <p>
            Elementum delivered the site within the timeline
            <br />
            as they requested. In the end, the client found a 50%
            <br />
            increase in traffic within days since its launch.
            <br />
            They also had an impressive ability to use technologies
            <br />
            that the company hasn't used, which have also proved
            <br />
            to be easy to use and reliable.
          </p>
        </div>

        <div className="right-avatars">
          <img src="/avatar13.png" alt="" />
          <img src="/avatar14.png" alt="" />
          <img src="/avatar15.png" alt="" />
          <img src="/avatar16.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
