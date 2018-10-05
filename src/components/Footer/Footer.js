import React from "react";
import "./Footer.css";

const footer = () => (
  <footer>
    <p>Young Moon &#9400;2018 </p>
    <div className="footer-container">
      <div
        onClick={() =>
          window.open("https://www.linkedin.com/in/young-moon-1674a4116/")
        }
        className="contact-icon"
      >
        <i className="fab fa-linkedin-in" />
      </div>
      <div
        onClick={() => window.open("https://www.facebook.com/frankdanktank")}
        className="contact-icon"
      >
        <i className="fab fa-facebook-f" />
      </div>
      <div
        onClick={() => window.open("https://github.com/ymoon715/")}
        className="contact-icon"
      >
        <i className="fab fa-github-alt" />
      </div>
    </div>
  </footer>
);

export default footer;
