import React from "react";

const Services = () => {
  return (
    <section className="services">

      <div className="services-title">
        <h2>
          What we can
          <br />
          offer you!
        </h2>
      </div>

      <div className="services-list">

        <div className="service-row">
          <p>Office of multiple 
            <br />
            interest content</p>
          <h3>Collaborative & partnership</h3>
          <span className="bi bi-arrow-right"></span>
        </div>

        <div className="service-row">
          <p>The Hanger US Air force
            <br />
             digital experimental</p>
          <h3>We talk about our weight</h3>
          <span className="bi bi-arrow-right"></span>
        </div>

        <div className="service-row">
          <p>Delta faucet content,
            <br />
            social, digital
          </p>
          <h3>Piloting digital confidence</h3>
          <span className="bi bi-arrow-right"></span>
        </div>


      </div>

    </section>
  );
};

export default Services;