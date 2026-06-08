import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero-title">
        The thinkers and
        <br />
        doers were changing
        <br />
        the status uo with
      </h1>

      <p className="hero-description">
        We are a team of strategists, designers, communicators, researchers. Together, 
        <br/>
        we believe that progress only happens when you refuse to play things safe

      </p>

      <div className="hero-avatars">
        <img src="/avatar1.png" alt="" />
        <img src="/avatar2.png" alt="" />
        <img src="/avatar3.png" alt="" />
        <img src="/avatar4.png" alt="" />
        <img src="/avatar5.png" alt="" />
        <img src="/avatar6.png" alt="" />
        <img src="/avatar7.png" alt="" />
        <img src="/avatar8.png" alt="" />
      </div>
    </section>
  );
};

export default Hero;