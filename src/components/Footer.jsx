const Footer = () => {
  return (
    <footer className="footer">
      <span className="petal" />
      <svg
        className="doodle doodle-loop"
        viewBox="0 0 170 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 120C18 60 60 12 84 80C92 104 70 118 60 96C50 74 92 30 120 70"
          stroke="#FF6D6D"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M112 120C122 62 150 24 162 70"
          stroke="#FF6D6D"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      <div className="footer-top">
        <h2>
          Subscribe to
          <br />
          our newsletter
        </h2>

        <p>To make your stay special and even more memorable</p>

        <button>Subscribe Now</button>
      </div>

      <hr />

      <div className="footer-links">
        <div>
          <h4>Company</h4>
          <a href="#">Home</a>
          <a href="#">Studio</a>
          <a href="#">Service</a>
          <a href="#">Blog</a>
        </div>

        <div>
          <h4>Terms &amp; Policies</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms &amp; Conditions</a>
          <a href="#">Explore</a>
          <a href="#">Accesibility</a>
        </div>

        <div>
          <h4>Follow Us</h4>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Youtube</a>
          <a href="#">Twitter</a>
        </div>

        <div>
          <h4>Terms &amp; Policies</h4>
          <p>1498w Fluton ste, STE</p>
          <p>2D Chicgo, IL 63867.</p>
          <p>(123) 456789000</p>
          <p>info@elementum.com</p>
        </div>
      </div>

      <p className="copyright">©2023 Elementum. All rights reserved</p>
    </footer>
  );
};

export default Footer;
