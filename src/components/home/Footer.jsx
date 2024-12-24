import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo and Description */}
        <div className="footer-logo-section">
          <div className="logo">
            <img src="image/RN-Logo.png" alt="Company Logo" />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam.</p>
          <div className="social-icons">
            <a href="#"><img src="facebook.png" alt="Facebook" /></a>
            <a href="#"><img src="twitter.png" alt="Twitter" /></a>
            <a href="#"><img src="instagram.png" alt="Instagram" /></a>
            <a href="#"><img src="linkedin.png" alt="LinkedIn" /></a>
            <a href="#"><img src="youtube.png" alt="YouTube" /></a>
          </div>
        </div>

        {/* Links */}
        <div className="footer-links">
          <FooterLinks
            title="Product"
            links={[
              { text: "Features", href: "#" },
              { text: "Pricing", href: "#" },
              { text: "Case studies", href: "#" },
              { text: "Reviews", href: "#" },
              { text: "Updates", href: "#" },
            ]}
          />
          <FooterLinks
            title="Company"
            links={[
              { text: "About", href: "#" },
              { text: "Contact us", href: "#" },
              { text: "Careers", href: "#" },
              { text: "Culture", href: "#" },
              { text: "Blog", href: "#" },
            ]}
          />
          <FooterLinks
            title="Support"
            links={[
              { text: "Getting started", href: "#" },
              { text: "Help center", href: "#" },
              { text: "Server status", href: "#" },
              { text: "Report a bug", href: "#" },
              { text: "Chat support", href: "#" },
            ]}
          />
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul>
            <li>
              Email: <a href="mailto:contact@company.com">contact@company.com</a>
            </li>
            <li>
              Phone: <a href="tel:+4146875892">(414) 687 - 5892</a>
            </li>
            <li>Address: 794 Mcallister St, San Francisco, 94102</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright © 2022 BRIX Templates. All Rights Reserved |{" "}
          <a href="#">Terms and Conditions</a> | <a href="#">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

// Reusable FooterLinks Component
const FooterLinks = ({ title, links }) => {
  return (
    <div className="links-section">
      <h3>{title}</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
