const Hero = () => {
  return (
    <section className="hero">
      {/* decorative layer */}
      <span className="glow glow-red" />
      <span className="petal" />
      <svg
        className="doodle doodle-squiggle"
        viewBox="0 0 120 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40 4C12 26 60 52 24 74C-6 92 56 112 28 136C6 156 58 176 30 196"
          stroke="#FF7171"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M70 8C44 30 90 56 54 78C24 96 86 116 58 140C36 160 88 180 60 200"
          stroke="#0E0E0E"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>

      <h1 className="hero-title">
        The <span className="ul">thinkers</span> and
        <br />
        doers were <span className="hl hl-pink">changing</span>
        <br />
        the <span className="hl hl-green">status</span> Quo with
      </h1>

      <p className="hero-description">
        We are a team of strategists, designers communicators, researchers. Together,
        <br />
        we believe that progress only happens when you refuse to play things safe.
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
