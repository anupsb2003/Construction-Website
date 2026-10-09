
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            FORMA<span>.</span>
          </a>

          <p>
            Thoughtful spaces.
            <br />
            Timeless architecture.
          </p>

          <a
            href="mailto:hello@example.com"
            className="footer-email"
          >
            hello@example.com ↗
          </a>
        </div>

        <div className="footer-column">
          <h3>EXPLORE</h3>
          <a href="#projects">Selected Projects</a>
          <a href="#about">Our Studio</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-column">
          <h3>WHAT WE DO</h3>
          <a href="#services">Architecture</a>
          <a href="#services">Interior Design</a>
          <a href="#services">Space Planning</a>
          <a href="#services">Styling</a>
        </div>

        <div className="footer-column">
          <h3>FOLLOW US</h3>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram ↗
          </a>
          <a
            href="https://www.pinterest.com/"
            target="_blank"
            rel="noreferrer"
          >
            Pinterest ↗
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

      <div className="footer-cta">
        <p>HAVE A PROJECT IN MIND?</p>
        <a href="#contact">
          Let's create something meaningful.
          <span>↗</span>
        </a>
      </div>

      <div className="footer-bottom">
        <p>© {year} FORMA Studio. All rights reserved.</p>

        <a href="#" className="back-to-top">
          BACK TO TOP ↑
        </a>

        <p>DESIGNED WITH INTENTION.</p>
      </div>
    </footer>
  );
}
