// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
      <div className="footer-links">
        <a href="#privacy" className="footer-link">Privacy Policy</a>
        <a href="#terms" className="footer-link">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
