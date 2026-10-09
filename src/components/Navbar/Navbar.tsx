
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="site-navbar">
      <a href="#" className="site-logo">
        FORMA
      </a>

      <div className="site-nav-links">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>

      <span className="site-nav-label">
        Residential Interiors
      </span>
    </nav>
  );
}
