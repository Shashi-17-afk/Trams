import React from "react";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">

        <h2>
          Subscribe to
          <br />
          our newsletter
        </h2>

        <p>
          To make your stay special and even more memorable
        </p>

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
          <h4>Terms & Policies</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Explore</a>
          <a href="#">Accessibility</a>
        </div>

        <div>
          <h4>Follow Us</h4>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Youtube</a>
          <a href="#">Twitter</a>
        </div>

        <div>
          <h4>Contact</h4>
          <p>1498W Fulton st6, STE</p>
          <p>2D Chigo, IL 63667.</p>
          <p>(123) 456789000</p>
          <p>info@elementum.com</p>
        </div>

      </div>

      <p className="copyright">
        ©2023 Elementum. All rights reserved
      </p>

    </footer>
  );
};

export default Footer;