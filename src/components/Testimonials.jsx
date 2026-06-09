const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonial-title">
        <h2>
          <span className="hl hl-green">What</span> our customer
          <br />
          says <span className="ul">About Us</span>
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
          <span className="quote-start">&#10078;</span>

          <p>
            Elementum delivered the site with inthe timeline
            <br />
            as they requested. Inthe end, the client found a 50%
            <br />
            increase in traffic with in days since its launch. They
            <br />
            also had an impressive ability to use technologies that
            <br />
            the company hasnt used, which have also proved to
            <br />
            be easy to use and reliable
          </p>

          <span className="quote-end">&#10078;</span>
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
