const About = () => {
  return (
    <section className="about">
      <span className="glow glow-red" style={{ width: 320, height: 320, top: -40, left: "30%" }} />

      <div className="about-left">
        <h2>
          <span className="ul">Tomorrow</span> should
          <br />
          be better than <span className="hl hl-green">today</span>
        </h2>

        <p>
          We are a team of strategists, designers communicators, researchers.
          Togeather, we believe that progress only happens when you refuse
          to play things safe.
        </p>

        <a href="#">Read more........</a>
      </div>

      <div className="about-right">
        <span className="sq sq-back" />
        <img src="/meeting.png" alt="" />
      </div>
    </section>
  );
};

export default About;
